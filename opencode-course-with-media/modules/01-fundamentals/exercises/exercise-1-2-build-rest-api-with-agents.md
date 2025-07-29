# Exercise 1.2: Build a Complete REST API with Agent Coordination

## 🎯 What You'll Build

In 5 hours, you'll use OpenCode.ai with coordinated agents to build a complete REST API for a **Task Management System** with:
- CRUD operations for tasks using specialized agents
- User authentication with security-focused agents
- Database integration with database-expert agents
- Comprehensive testing with test-automation agents
- Professional documentation with documentation agents
- Code review with quality-assurance agents

**Real multi-agent workflows. Professional results.**

## 🚀 Step-by-Step Build Process

### Step 1: Project Setup (10 minutes)

#### Create Project Structure
```bash
mkdir task-api
cd task-api
```

#### Prompt 1: Initialize the Project
```
Create a Node.js REST API project structure for a task management system. I need:
- package.json with dependencies for Express, JWT auth, SQLite database
- Basic folder structure following best practices  
- Environment configuration setup
- README with setup instructions

Generate all the files I need to get started.
```

**Expected files generated:**
- `package.json`
- `src/app.js` 
- `src/config/database.js`
- `src/middleware/auth.js`
- `src/routes/`
- `.env.example`
- `README.md`

### Step 2: Database Setup (15 minutes)

#### Prompt 2: Create Database Schema
```
Create a SQLite database schema for a task management system. I need:
- users table (id, email, password_hash, created_at)
- tasks table (id, title, description, status, user_id, created_at, updated_at)
- SQL migration file to create tables
- Database connection module using better-sqlite3

Generate the complete database setup code.
```

#### Prompt 3: Create Database Models
```
Create data access layer (models) for the task management system:
- User model with methods: create, findByEmail, findById
- Task model with methods: create, findById, findByUserId, update, delete
- Use better-sqlite3 prepared statements for performance
- Include input validation and error handling

Show me the complete model files.
```

### Step 3: Authentication System (20 minutes)

#### Prompt 4: User Registration
```
Create user registration endpoint for the task API:
- POST /api/auth/register
- Validate email format and password strength
- Hash password with bcrypt
- Return JWT token on success
- Include proper error handling

Generate the complete route handler and validation middleware.
```

#### Prompt 5: User Login
```
Create user login endpoint:
- POST /api/auth/login  
- Validate credentials against database
- Return JWT token with user info
- Handle wrong email/password cases
- Include rate limiting to prevent brute force

Show me the complete login implementation.
```

#### Prompt 6: Authentication Middleware
```
Create JWT authentication middleware:
- Verify JWT tokens from Authorization header
- Add user info to request object
- Handle expired/invalid tokens
- Allow certain routes to be public

Generate the middleware and show how to use it.
```

### Step 4: Task CRUD Operations (25 minutes)

#### Prompt 7: Create Task Endpoint
```
Create POST /api/tasks endpoint:
- Authenticated users only
- Validate required fields (title, description)
- Set default status to 'pending'
- Associate task with logged-in user
- Return created task with ID

Generate the route handler with validation.
```

#### Prompt 8: Get Tasks Endpoints
```
Create task retrieval endpoints:
- GET /api/tasks - list all tasks for authenticated user
- GET /api/tasks/:id - get specific task (if user owns it)
- Support query parameters: status, limit, offset for pagination
- Include proper error handling for not found/unauthorized

Show me both endpoint implementations.
```

#### Prompt 9: Update Task Endpoint
```
Create PUT /api/tasks/:id endpoint:
- Update task if user owns it
- Allow updating: title, description, status
- Validate status values (pending, in-progress, completed)
- Return updated task
- Handle not found and unauthorized cases

Generate the update handler.
```

#### Prompt 10: Delete Task Endpoint  
```
Create DELETE /api/tasks/:id endpoint:
- Delete task if user owns it
- Return success message
- Handle not found and unauthorized cases
- Consider soft delete vs hard delete

Show me the delete implementation.
```

### Step 5: Input Validation & Error Handling (15 minutes)

#### Prompt 11: Request Validation
```
Create comprehensive input validation for the task API:
- Email format validation for registration/login
- Password strength requirements (min 8 chars, numbers, special chars)
- Task title/description length limits
- Status enum validation
- Use express-validator or similar

Generate validation middleware for all endpoints.
```

#### Prompt 12: Global Error Handler
```
Create global error handling middleware:
- Handle different error types (validation, auth, database, server)
- Return consistent error response format
- Log errors appropriately
- Don't expose internal error details in production

Show me the error handling setup.
```

### Step 6: Testing (20 minutes)

#### Prompt 13: Unit Tests for Models
```
Create unit tests for the User and Task models using Jest:
- Test user creation, finding by email/ID
- Test task CRUD operations  
- Test error conditions (duplicate email, invalid data)
- Use test database that gets reset between tests

Generate the test files and setup.
```

#### Prompt 14: Integration Tests for API
```
Create integration tests for the REST API endpoints:
- Test user registration and login flows
- Test task CRUD operations with authentication
- Test error cases (unauthorized, not found, validation errors)
- Use supertest for HTTP testing

Show me the API integration tests.
```

### Step 7: Final Integration (15 minutes)

#### Prompt 15: Complete App Setup
```
Create the main app.js file that ties everything together:
- Set up Express app with middleware
- Configure routes
- Connect database
- Add error handling
- Include startup script and graceful shutdown

Generate the complete application entry point.
```

#### Prompt 16: Deployment Ready
```
Create production-ready configuration:
- Environment variable handling
- CORS setup for frontend integration
- Security headers and rate limiting
- Docker file for containerization
- npm scripts for start/dev/test

Show me the production setup files.
```

## 🧪 Test Your API

### Step 8: Manual Testing (10 minutes)

Use these actual curl commands to test your API:

```bash
# Start the server
npm run dev

# Register a user
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"Password123!"}'

# Login (save the token)
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"Password123!"}'

# Create a task (use token from login)
curl -X POST http://localhost:3000/api/tasks \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN_HERE" \
  -d '{"title":"Learn OpenCode.ai","description":"Complete the course exercises"}'

# Get all tasks
curl -X GET http://localhost:3000/api/tasks \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"

# Update a task
curl -X PUT http://localhost:3000/api/tasks/1 \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN_HERE" \
  -d '{"status":"completed"}'
```

## ✅ Success Criteria

You've successfully completed this exercise when:

1. **All endpoints work**: Registration, login, CRUD operations respond correctly
2. **Authentication works**: Protected routes require valid JWT tokens  
3. **Validation works**: Invalid input returns proper error messages
4. **Tests pass**: Unit and integration tests run successfully
5. **Database persists**: Data survives server restarts

## 🎯 Advanced Challenges (Optional)

If you finish early, try these:

#### Prompt 17: Add Search
```
Add task search functionality:
- GET /api/tasks/search?q=keyword
- Search in title and description
- Support filters by status and date range
- Return paginated results

Implement full-text search for tasks.
```

#### Prompt 18: Add Task Categories
```
Add categories to tasks:
- New categories table and model
- Update task model to include category_id
- CRUD endpoints for categories
- Update task endpoints to support category filtering

Show me the complete category implementation.
```

## 📊 Real Learning Outcomes

After this exercise, you'll have:

- **Built a complete API** from scratch using AI assistance
- **Learned effective prompts** for code generation
- **Practiced real workflows** used by professional developers
- **Created working code** you can actually run and modify
- **Written tests** that prove your code works

## 🚀 Next Steps

1. **Deploy your API** to a cloud service (Heroku, Railway, etc.)
2. **Build a frontend** that consumes your API
3. **Add more features** using the same prompting techniques
4. **Share your code** on GitHub to show your work

---

**This is hands-on learning. You build real things. No theory. Just working code and the prompts that create it.**