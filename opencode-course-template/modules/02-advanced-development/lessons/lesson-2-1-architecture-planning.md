# Lesson 2.1: Architecture Planning with Build Mode

## 🎯 What You'll Actually Do

By the end of this lesson, you will:
- Use Build mode to design and document a complete microservices architecture  
- Plan the migration of a real monolithic application with generated documentation
- Practice advanced prompting for architectural decisions with file creation
- Create professional technical specifications and diagrams using AI assistance

## 🚨 **Critical: Why Build Mode for Architecture Planning**

**Always use Build mode for architecture work** because:
- ✅ **Can create documentation files** - essential for architecture planning
- ✅ **Can generate diagrams and specs** - produces actual deliverables
- ✅ **Can create code templates** - provides implementation guidance
- ❌ **Plan mode cannot create files** - only provides suggestions without output

**Professional Reality**: Architecture planning requires creating documents, diagrams, and templates that your team can use.

## 🔄 Quick Module 1 Skills Validation (5 minutes)

Before starting, verify your setup:

```bash
# Test multi-provider switching
opencode
/provider openai
/ask "What's the current date and can you help with architecture planning?"
/provider anthropic
/ask "What's the current date and can you help with code analysis?"

# Verify you can access real codebases
cd ~/projects
ls fastapi/ || git clone https://github.com/tiangolo/fastapi.git
```

**Expected**: Both providers respond, you have FastAPI repository available.

## 🏗️ Real Project: Django E-commerce Monolith Analysis

We'll work with **Django Oscar** - a real e-commerce platform with 180,000+ lines of production code.

### Setup the Real Codebase

```bash
# Clone Django Oscar (real e-commerce monolith)
git clone https://github.com/django-oscar/django-oscar.git
cd django-oscar

# Initialize OpenCode.ai for architecture analysis
opencode
/init
```

**Why Django Oscar?**
- 180,000+ lines of real production code
- Complex monolithic architecture
- Real business logic (orders, payments, inventory)
- Perfect candidate for microservices migration planning

## 📝 Hands-On Exercise 1: Monolith Analysis

### Step 1: Understand Current Architecture

#### Prompt 1: High-Level Architecture Analysis
```
I need to understand Django Oscar's architecture for microservices planning. Analyze the codebase and identify:

1. Main business domains and their boundaries
2. Data models and their relationships
3. Core services and their dependencies
4. Integration points and external dependencies

Focus on architectural patterns, not implementation details.
```

**Expected Output**: OpenCode.ai will identify domains like:
- User management and authentication
- Product catalog and inventory
- Order processing and fulfillment
- Payment processing
- Customer service and reviews

#### Prompt 2: Identify Microservice Boundaries
```
Based on the Django Oscar codebase, identify natural microservice boundaries using Domain-Driven Design principles. For each proposed microservice:

1. Define the bounded context
2. List the data models it would own
3. Identify the APIs it would expose
4. Note dependencies on other services

Provide a specific breakdown with code references.
```

**Expected Output**: Detailed service breakdown with actual Django Oscar models and views.

### Step 2: Enter Plan Mode for Architecture Design

#### Prompt 3: Switch to Plan Mode
```
# Use Build mode (default - no mode switching needed)
# Build mode allows file creation for documentation

I want to design a microservices architecture for Django Oscar. Help me plan the migration from this monolith to microservices.

Create a detailed migration plan that includes:
1. Service decomposition strategy
2. Data migration approach
3. API design for inter-service communication
4. Deployment and infrastructure considerations
5. Rollback plan if migration fails

Base this on the actual Django Oscar codebase we just analyzed.
```

**What Plan Mode Does**: 
- Provides strategic thinking without writing code
- Breaks down complex problems into phases
- Considers trade-offs and risks
- Creates implementation roadmaps

#### Prompt 4: Detailed Service Design
```
# Use Build mode (default - no mode switching needed)
# Build mode allows file creation for documentation

Focus on the "Order Management" microservice from Django Oscar. Plan the complete service architecture:

1. Service responsibilities and boundaries
2. Database design (what models to extract)
3. API endpoints and their specifications
4. Event-driven communication with other services
5. Data synchronization strategy during migration
6. Testing strategy for the isolated service

Reference specific Django Oscar code where relevant.
```

**Expected Output**: Complete service specification with Django Oscar code references.

## 🛠️ Hands-On Exercise 2: Microservices Architecture Planning

### Step 1: Design Service Communication

#### Prompt 5: API Design Planning
```
# Use Build mode (default - no mode switching needed)
# Build mode allows file creation for documentation

Design the API contracts between Django Oscar microservices. Create specifications for:

1. Order Service ↔ Inventory Service communication
2. Payment Service ↔ Order Service integration  
3. User Service ↔ Order Service interaction
4. Event-driven notifications between services

Include:
- REST API endpoints with request/response schemas
- Event schemas for asynchronous communication
- Error handling and retry strategies
- API versioning approach

Base this on real Django Oscar business logic.
```

#### Prompt 6: Data Migration Strategy
```
# Use Build mode (default - no mode switching needed)
# Build mode allows file creation for documentation

Plan the data migration strategy for extracting Django Oscar's order management into a separate microservice:

1. Identify data dependencies (foreign keys, relationships)
2. Design the migration sequence to avoid downtime
3. Plan data synchronization during dual-write phase
4. Create rollback strategy if migration fails
5. Define success criteria and validation steps

Reference actual Django Oscar models and their relationships.
```

### Step 2: Infrastructure Planning

#### Prompt 7: Deployment Architecture
```
# Use Build mode (default - no mode switching needed)
# Build mode allows file creation for documentation

Design the deployment architecture for Django Oscar microservices:

1. Container orchestration strategy (Kubernetes vs Docker Compose)
2. Service discovery and load balancing
3. Database per service vs shared database approach
4. Monitoring and logging architecture
5. CI/CD pipeline modifications
6. Security considerations (API gateways, service mesh)

Consider Django Oscar's current deployment patterns and constraints.
```

## 🧪 Practical Exercise: Real Architecture Document

### Task: Create Professional Architecture Document

**Duration**: 60 minutes  
**Objective**: Produce a document suitable for engineering team review

#### Prompt 8: Generate Architecture Document
```
# Use Build mode (default - no mode switching needed)
# Build mode allows file creation for documentation

Create a comprehensive technical architecture document for migrating Django Oscar to microservices. Include:

## Executive Summary
- Business justification for migration
- High-level approach and timeline

## Current State Analysis  
- Django Oscar architecture assessment
- Technical debt and scalability issues

## Target Architecture
- Microservices breakdown with responsibilities
- Service interaction patterns
- Data architecture and storage strategy

## Migration Strategy
- Phase-by-phase migration plan
- Risk mitigation strategies
- Success metrics and validation

## Implementation Roadmap
- Detailed timeline with milestones
- Resource requirements
- Dependencies and blockers

Base everything on actual Django Oscar codebase analysis.
```

**Deliverable**: Professional architecture document (2000+ words) with specific Django Oscar references.

## 🔍 Provider Strategy for Architecture Planning

### Use OpenAI For:
- **Complex system design**: Multi-service orchestration planning
- **Creative problem solving**: Novel architecture patterns
- **Business logic analysis**: Understanding domain relationships

### Use Anthropic For:
- **Detailed analysis**: Deep codebase examination
- **Risk assessment**: Migration strategy evaluation  
- **Technical documentation**: Clear, structured specifications

#### Prompt 9: Provider Comparison
```
# Test with OpenAI
/provider openai
# Use Build mode (default - no mode switching needed)
# Build mode allows file creation for documentation
What are the main risks of migrating Django Oscar to microservices and how would you mitigate them?

# Test with Anthropic
/provider anthropic  
# Use Build mode (default - no mode switching needed)
# Build mode allows file creation for documentation
What are the main risks of migrating Django Oscar to microservices and how would you mitigate them?

# Compare the responses - which gives better strategic thinking?
```

## 🎯 Real-World Application Exercise

### Scenario: You're the Technical Lead

**Context**: Your company uses Django Oscar and needs to scale for 10x user growth.

#### Prompt 10: Strategic Planning Session
```
# Use Build mode (default - no mode switching needed)
# Build mode allows file creation for documentation

I'm leading the technical architecture for scaling Django Oscar from 10,000 to 100,000 concurrent users. The current monolith is hitting performance limits.

Plan a comprehensive scaling strategy that includes:

1. Immediate performance improvements (next 3 months)
2. Medium-term architecture changes (next 12 months)
3. Long-term microservices migration (next 24 months)

For each phase:
- Specific technical changes with Django Oscar code references
- Resource requirements and team structure
- Risk assessment and mitigation strategies
- Success metrics and monitoring

This needs to be ready for executive presentation.
```

**Expected Output**: Executive-ready scaling strategy with specific implementation details.

## ✅ Validation: You've Mastered Plan Mode When...

Test yourself with this challenge:

### 15-Minute Architecture Challenge

```bash
# Set timer for 15 minutes
# Choose any large open-source project (Rails, Laravel, Spring Boot)
# Use Plan mode to:

1. Analyze the architecture
2. Identify scalability bottlenecks  
3. Propose specific improvements
4. Create implementation timeline

# Success: Complete strategic plan with specific code references
```

## 🚀 Next Steps

**Practice Repositories** (all real, 50,000+ lines):
- **Rails/Shopify**: E-commerce platform scaling
- **Laravel/October**: CMS architecture modernization
- **Spring Boot/JHipster**: Microservices migration planning

**Homework**: Pick one and create a 1-hour architecture improvement plan.

---

**You now know how to use Plan mode for strategic architecture planning with real codebases. Next: Lesson 2.2 - Feature Planning & Requirements Analysis.**