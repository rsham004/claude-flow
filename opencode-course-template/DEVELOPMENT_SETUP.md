# OpenCode Development Setup Guide

## 🚀 Quick Start

### Prerequisites
```bash
# Required Software
- Node.js 20+
- Python 3.11+
- Docker & Docker Compose
- Git
- VS Code (recommended)

# Optional but Recommended
- kubectl
- terraform
- helm
```

### Environment Setup
```bash
# 1. Clone the repository
git clone https://github.com/your-org/opencode-platform.git
cd opencode-platform

# 2. Install dependencies
npm install
pip install -r requirements.txt

# 3. Setup environment variables
cp .env.example .env
# Edit .env with your configuration

# 4. Start development environment
docker-compose up -d
npm run dev

# 5. Verify setup
npm run verify-setup
```

## 📁 Project Structure

```
opencode-platform/
├── packages/
│   ├── api/                    # Backend API service
│   │   ├── src/
│   │   │   ├── controllers/    # API route handlers
│   │   │   ├── services/       # Business logic
│   │   │   ├── models/         # Database models
│   │   │   ├── middleware/     # Express middleware
│   │   │   └── utils/          # Utility functions
│   │   ├── tests/              # API tests
│   │   └── package.json
│   │
│   ├── web/                    # React frontend application
│   │   ├── src/
│   │   │   ├── components/     # React components
│   │   │   ├── pages/          # Page components
│   │   │   ├── hooks/          # Custom React hooks
│   │   │   ├── services/       # API client services
│   │   │   ├── store/          # State management
│   │   │   └── utils/          # Frontend utilities
│   │   ├── public/             # Static assets
│   │   └── package.json
│   │
│   ├── sandbox/                # Code execution service
│   │   ├── src/
│   │   │   ├── engines/        # Language execution engines
│   │   │   ├── security/       # Security layers
│   │   │   ├── containers/     # Container management
│   │   │   └── api/            # Sandbox API
│   │   └── package.json
│   │
│   ├── demo-framework/         # Interactive demo system
│   │   ├── src/
│   │   │   ├── core/           # Demo engine core
│   │   │   ├── visualization/  # Visualization components
│   │   │   ├── ui/             # Demo UI components
│   │   │   └── types/          # TypeScript definitions
│   │   └── package.json
│   │
│   ├── testing-framework/      # Automated testing system
│   │   ├── src/
│   │   │   ├── runners/        # Test runners
│   │   │   ├── validators/     # Code validators
│   │   │   ├── grading/        # Auto-grading system
│   │   │   └── feedback/       # Feedback generation
│   │   └── package.json
│   │
│   ├── gamification/          # Gamification engine
│   │   ├── src/
│   │   │   ├── achievements/   # Achievement system
│   │   │   ├── points/         # Point system
│   │   │   ├── leaderboards/   # Leaderboard management
│   │   │   └── analytics/      # Progress analytics
│   │   └── package.json
│   │
│   └── shared/                # Shared utilities and types
│       ├── src/
│       │   ├── types/          # Shared TypeScript types
│       │   ├── utils/          # Shared utilities
│       │   ├── constants/      # Application constants
│       │   └── config/         # Configuration management
│       └── package.json
│
├── infrastructure/             # Infrastructure as Code
│   ├── terraform/             # Terraform configurations
│   ├── kubernetes/            # Kubernetes manifests
│   ├── docker/                # Docker configurations
│   └── monitoring/            # Monitoring configurations
│
├── docs/                      # Documentation
│   ├── api/                   # API documentation
│   ├── architecture/          # Architecture docs
│   ├── deployment/            # Deployment guides
│   └── development/           # Development guides
│
├── tools/                     # Development tools and scripts
│   ├── scripts/               # Build and deployment scripts
│   ├── generators/            # Code generators
│   └── migration/             # Database migration tools
│
├── tests/                     # Integration and E2E tests
│   ├── integration/           # Integration tests
│   ├── e2e/                   # End-to-end tests
│   └── load/                  # Load testing
│
├── docker-compose.yml         # Local development environment
├── package.json               # Root package configuration
├── tsconfig.json             # TypeScript configuration
├── jest.config.js            # Jest testing configuration
└── .github/                  # GitHub workflows
    └── workflows/
        ├── ci.yml
        ├── cd.yml
        └── security.yml
```

## 🛠️ Development Environment

### Local Development with Docker Compose

```yaml
# docker-compose.yml
version: '3.8'

services:
  # PostgreSQL Database
  postgres:
    image: postgres:15-alpine
    environment:
      POSTGRES_DB: opencode_dev
      POSTGRES_USER: opencode
      POSTGRES_PASSWORD: development
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data
      - ./tools/sql/init.sql:/docker-entrypoint-initdb.d/init.sql

  # Redis Cache
  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"
    command: redis-server --appendonly yes
    volumes:
      - redis_data:/data

  # Elasticsearch for logging
  elasticsearch:
    image: elasticsearch:8.9.0
    environment:
      - discovery.type=single-node
      - xpack.security.enabled=false
    ports:
      - "9200:9200"
    volumes:
      - elasticsearch_data:/usr/share/elasticsearch/data

  # MinIO for S3-compatible storage
  minio:
    image: minio/minio:latest
    command: server /data --console-address ":9001"
    environment:
      MINIO_ROOT_USER: minioadmin
      MINIO_ROOT_PASSWORD: minioadmin
    ports:
      - "9000:9000"
      - "9001:9001"
    volumes:
      - minio_data:/data

  # API Service
  api:
    build:
      context: .
      dockerfile: packages/api/Dockerfile.dev
    environment:
      NODE_ENV: development
      DATABASE_URL: postgresql://opencode:development@postgres:5432/opencode_dev
      REDIS_URL: redis://redis:6379
      MINIO_ENDPOINT: http://minio:9000
      MINIO_ACCESS_KEY: minioadmin
      MINIO_SECRET_KEY: minioadmin
    ports:
      - "3000:3000"
    volumes:
      - ./packages/api:/app
      - /app/node_modules
    depends_on:
      - postgres
      - redis
      - minio

  # Web Frontend
  web:
    build:
      context: .
      dockerfile: packages/web/Dockerfile.dev
    environment:
      REACT_APP_API_URL: http://localhost:3000
    ports:
      - "3001:3000"
    volumes:
      - ./packages/web:/app
      - /app/node_modules
    depends_on:
      - api

  # Sandbox Service
  sandbox:
    build:
      context: .
      dockerfile: packages/sandbox/Dockerfile.dev
    environment:
      NODE_ENV: development
      REDIS_URL: redis://redis:6379
    ports:
      - "3002:3000"
    volumes:
      - ./packages/sandbox:/app
      - /app/node_modules
      - /var/run/docker.sock:/var/run/docker.sock
    depends_on:
      - redis
    privileged: true

volumes:
  postgres_data:
  redis_data:
  elasticsearch_data:
  minio_data:
```

### Package Scripts

```json
{
  "scripts": {
    "dev": "concurrently \"npm run dev:api\" \"npm run dev:web\" \"npm run dev:sandbox\"",
    "dev:api": "cd packages/api && npm run dev",
    "dev:web": "cd packages/web && npm run dev",
    "dev:sandbox": "cd packages/sandbox && npm run dev",
    
    "build": "npm run build:shared && npm run build:api && npm run build:web && npm run build:sandbox",
    "build:shared": "cd packages/shared && npm run build",
    "build:api": "cd packages/api && npm run build",
    "build:web": "cd packages/web && npm run build",
    "build:sandbox": "cd packages/sandbox && npm run build",
    
    "test": "jest --projects packages/*/jest.config.js",
    "test:unit": "jest --selectProjects unit",
    "test:integration": "jest --selectProjects integration",
    "test:e2e": "cd tests/e2e && npm run test",
    
    "lint": "eslint packages/*/src/**/*.{ts,tsx}",
    "lint:fix": "eslint packages/*/src/**/*.{ts,tsx} --fix",
    
    "type-check": "tsc --noEmit",
    "type-check:watch": "tsc --noEmit --watch",
    
    "db:migrate": "cd packages/api && npm run db:migrate",
    "db:seed": "cd packages/api && npm run db:seed",
    "db:reset": "cd packages/api && npm run db:reset",
    
    "docker:build": "docker-compose build",
    "docker:up": "docker-compose up -d",
    "docker:down": "docker-compose down",
    "docker:logs": "docker-compose logs -f",
    
    "verify-setup": "node tools/scripts/verify-setup.js"
  }
}
```

## 🔧 Configuration Management

### Environment Variables

```bash
# .env.example
# Database
DATABASE_URL=postgresql://opencode:development@localhost:5432/opencode_dev
DATABASE_POOL_SIZE=20

# Redis
REDIS_URL=redis://localhost:6379
REDIS_CLUSTER_MODE=false

# Authentication
JWT_SECRET=your-jwt-secret-here
JWT_EXPIRES_IN=24h
REFRESH_TOKEN_EXPIRES_IN=7d

# OAuth Providers
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
GITHUB_CLIENT_ID=your-github-client-id
GITHUB_CLIENT_SECRET=your-github-client-secret

# Storage
S3_BUCKET=opencode-storage
S3_REGION=us-east-1
S3_ACCESS_KEY_ID=your-access-key
S3_SECRET_ACCESS_KEY=your-secret-key

# Sandbox
SANDBOX_TIMEOUT=30000
SANDBOX_MEMORY_LIMIT=512
SANDBOX_CPU_LIMIT=1

# Monitoring
PROMETHEUS_ENABLED=true
GRAFANA_ENABLED=true
LOG_LEVEL=info

# External Services
SENDGRID_API_KEY=your-sendgrid-key
STRIPE_SECRET_KEY=your-stripe-key
ANALYTICS_TRACKING_ID=your-analytics-id
```

### Configuration Management

```typescript
// packages/shared/src/config/index.ts
import { z } from 'zod';

const configSchema = z.object({
  // Environment
  NODE_ENV: z.enum(['development', 'staging', 'production']).default('development'),
  PORT: z.coerce.number().default(3000),
  
  // Database
  DATABASE_URL: z.string(),
  DATABASE_POOL_SIZE: z.coerce.number().default(20),
  
  // Redis
  REDIS_URL: z.string(),
  REDIS_CLUSTER_MODE: z.coerce.boolean().default(false),
  
  // Authentication
  JWT_SECRET: z.string().min(32),
  JWT_EXPIRES_IN: z.string().default('24h'),
  REFRESH_TOKEN_EXPIRES_IN: z.string().default('7d'),
  
  // Sandbox
  SANDBOX_TIMEOUT: z.coerce.number().default(30000),
  SANDBOX_MEMORY_LIMIT: z.coerce.number().default(512),
  SANDBOX_CPU_LIMIT: z.coerce.number().default(1),
  
  // Monitoring
  PROMETHEUS_ENABLED: z.coerce.boolean().default(false),
  LOG_LEVEL: z.enum(['error', 'warn', 'info', 'debug']).default('info'),
});

export type Config = z.infer<typeof configSchema>;

export const config: Config = configSchema.parse(process.env);

// Validate configuration on startup
export function validateConfig(): void {
  try {
    configSchema.parse(process.env);
    console.log('✅ Configuration validated successfully');
  } catch (error) {
    console.error('❌ Configuration validation failed:', error);
    process.exit(1);
  }
}
```

## 🧪 Testing Strategy

### Test Configuration

```javascript
// jest.config.js
module.exports = {
  projects: [
    {
      displayName: 'unit',
      testMatch: ['<rootDir>/packages/*/src/**/*.test.{ts,tsx}'],
      testEnvironment: 'node',
      setupFilesAfterEnv: ['<rootDir>/tests/setup/unit.ts'],
    },
    {
      displayName: 'integration',
      testMatch: ['<rootDir>/tests/integration/**/*.test.{ts,tsx}'],
      testEnvironment: 'node',
      setupFilesAfterEnv: ['<rootDir>/tests/setup/integration.ts'],
    },
  ],
  collectCoverageFrom: [
    'packages/*/src/**/*.{ts,tsx}',
    '!packages/*/src/**/*.d.ts',
    '!packages/*/src/**/*.test.{ts,tsx}',
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
};
```

### Test Utilities

```typescript
// tests/setup/test-utils.ts
import { Pool } from 'pg';
import Redis from 'ioredis';
import { config } from '../../packages/shared/src/config';

export class TestDatabase {
  private pool: Pool;
  
  constructor() {
    this.pool = new Pool({
      connectionString: config.DATABASE_URL,
      max: 5,
    });
  }
  
  async setup(): Promise<void> {
    await this.pool.query('BEGIN');
  }
  
  async cleanup(): Promise<void> {
    await this.pool.query('ROLLBACK');
  }
  
  async close(): Promise<void> {
    await this.pool.end();
  }
}

export class TestRedis {
  private client: Redis;
  
  constructor() {
    this.client = new Redis(config.REDIS_URL);
  }
  
  async cleanup(): Promise<void> {
    await this.client.flushdb();
  }
  
  async close(): Promise<void> {
    await this.client.quit();
  }
}

export async function createTestUser(): Promise<User> {
  // Create a test user with required permissions
  return {
    id: 'test-user-id',
    email: 'test@example.com',
    username: 'testuser',
    fullName: 'Test User',
    role: 'student',
    createdAt: new Date(),
    updatedAt: new Date(),
  };
}

export async function createTestSandbox(): Promise<Sandbox> {
  // Create a test sandbox environment
  return {
    id: 'test-sandbox-id',
    language: 'javascript',
    status: 'ready',
    createdAt: new Date(),
    config: {
      timeLimit: 30,
      memoryLimit: 512,
      diskLimit: 100,
    },
  };
}
```

### Example Tests

```typescript
// packages/api/src/services/user.service.test.ts
import { TestDatabase } from '../../../tests/setup/test-utils';
import { UserService } from './user.service';

describe('UserService', () => {
  let testDb: TestDatabase;
  let userService: UserService;
  
  beforeAll(async () => {
    testDb = new TestDatabase();
    userService = new UserService(testDb.pool);
  });
  
  beforeEach(async () => {
    await testDb.setup();
  });
  
  afterEach(async () => {
    await testDb.cleanup();
  });
  
  afterAll(async () => {
    await testDb.close();
  });
  
  describe('createUser', () => {
    it('should create a new user successfully', async () => {
      const userData = {
        email: 'test@example.com',
        username: 'testuser',
        fullName: 'Test User',
      };
      
      const user = await userService.createUser(userData);
      
      expect(user).toMatchObject({
        email: userData.email,
        username: userData.username,
        fullName: userData.fullName,
      });
      expect(user.id).toBeDefined();
      expect(user.createdAt).toBeInstanceOf(Date);
    });
    
    it('should throw error for duplicate email', async () => {
      const userData = {
        email: 'test@example.com',
        username: 'testuser',
        fullName: 'Test User',
      };
      
      await userService.createUser(userData);
      
      await expect(userService.createUser(userData)).rejects.toThrow(
        'User with this email already exists'
      );
    });
  });
});
```

## 🚀 Deployment

### Production Deployment

```bash
# Build production images
npm run build
docker build -t opencode/api:latest packages/api/
docker build -t opencode/web:latest packages/web/
docker build -t opencode/sandbox:latest packages/sandbox/

# Deploy to Kubernetes
kubectl apply -f infrastructure/kubernetes/
helm upgrade --install opencode ./charts/opencode

# Verify deployment
kubectl get pods -n opencode
kubectl logs -f deployment/opencode-api -n opencode
```

### Continuous Integration

```yaml
# .github/workflows/ci.yml
name: CI

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    
    services:
      postgres:
        image: postgres:15
        env:
          POSTGRES_PASSWORD: postgres
          POSTGRES_DB: opencode_test
        options: >-
          --health-cmd pg_isready
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5
      
      redis:
        image: redis:7
        options: >-
          --health-cmd "redis-cli ping"
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5
    
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Type check
        run: npm run type-check
      
      - name: Lint
        run: npm run lint
      
      - name: Run tests
        run: npm run test
        env:
          DATABASE_URL: postgresql://postgres:postgres@localhost:5432/opencode_test
          REDIS_URL: redis://localhost:6379
      
      - name: Build
        run: npm run build
      
      - name: Upload coverage
        uses: codecov/codecov-action@v3

  security:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Run security audit
        run: npm audit
      
      - name: Run dependency check
        uses: snyk/actions/node@master
        env:
          SNYK_TOKEN: ${{ secrets.SNYK_TOKEN }}
```

## 📊 Development Tools

### Code Quality

```json
// .eslintrc.json
{
  "extends": [
    "@typescript-eslint/recommended",
    "prettier",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "plugins": ["@typescript-eslint", "react", "react-hooks"],
  "rules": {
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/explicit-function-return-type": "warn",
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off"
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  }
}
```

```json
// .prettierrc
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 100,
  "tabWidth": 2,
  "useTabs": false
}
```

### VS Code Configuration

```json
// .vscode/settings.json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "typescript.preferences.importModuleSpecifier": "relative",
  "files.exclude": {
    "**/node_modules": true,
    "**/dist": true,
    "**/*.js.map": true
  },
  "search.exclude": {
    "**/node_modules": true,
    "**/dist": true
  }
}
```

```json
// .vscode/extensions.json
{
  "recommendations": [
    "esbenp.prettier-vscode",
    "dbaeumer.vscode-eslint",
    "bradlc.vscode-tailwindcss",
    "ms-vscode.vscode-typescript-next",
    "ms-vscode-remote.remote-containers",
    "ms-kubernetes-tools.vscode-kubernetes-tools"
  ]
}
```

## 🔧 Troubleshooting

### Common Issues

1. **Database Connection Issues**
   ```bash
   # Check if PostgreSQL is running
   docker-compose ps postgres
   
   # View logs
   docker-compose logs postgres
   
   # Reset database
   npm run db:reset
   ```

2. **Sandbox Execution Failures**
   ```bash
   # Check Docker daemon
   docker info
   
   # Check sandbox service logs
   docker-compose logs sandbox
   
   # Restart sandbox service
   docker-compose restart sandbox
   ```

3. **Frontend Build Issues**
   ```bash
   # Clear node_modules
   rm -rf packages/web/node_modules
   npm install
   
   # Clear build cache
   rm -rf packages/web/dist
   npm run build:web
   ```

### Performance Optimization

```bash
# Monitor resource usage
docker stats

# Check database performance
npm run db:analyze

# Profile Node.js applications
npm run dev:profile

# Monitor API performance
curl -w "@curl-format.txt" -o /dev/null http://localhost:3000/health
```

This development setup provides a comprehensive foundation for building and maintaining the OpenCode platform with proper tooling, testing, and deployment strategies.