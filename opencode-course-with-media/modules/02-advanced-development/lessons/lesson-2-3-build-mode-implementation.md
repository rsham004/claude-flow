# Lesson 2.3: Direct Code Implementation with Build Mode

## 🎯 What You'll Actually Do

By the end of this lesson, you will:
- Use Build mode to implement complex features directly in code
- Refactor large legacy functions with AI assistance
- Master context management for multi-file changes
- Generate working code with proper tests and documentation

## 🎥 **Video: Ghost CMS Refactoring Live** (1 minute)

**What You'll See**: Live modernization of callback hell patterns in real Ghost CMS code
**Key Learning Points**: 
- Converting nested callbacks to async/await
- Preserving functionality while improving readability
- 50% code reduction through modernization

**Video Content**: [`videos/module-2/lesson-2-3-ghost-refactoring.txt`](../../videos/module-2/lesson-2-3-ghost-refactoring.txt)

**Real Impact**: 32 lines of callback hell → 16 lines of clean async/await

## 🔧 Real Project: Express.js Callback Hell Modernization

We'll modernize **Ghost CMS** - a real Node.js application with callback hell patterns.

### Setup the Real Codebase

```bash
# Clone Ghost CMS (real Node.js application)
git clone https://github.com/TryGhost/Ghost.git
cd Ghost

# Focus on core directory with legacy patterns
cd core

# Initialize OpenCode.ai  
opencode
/init
```

**Why Ghost CMS?**
- 200,000+ lines of real Node.js code
- Mix of callback and promise patterns
- Real business logic (content management, user auth)
- Production-grade error handling requirements

## 📝 Hands-On Exercise 1: Legacy Code Analysis

### Step 1: Identify Refactoring Targets

#### Prompt 1: Find Callback Hell Patterns
```
Analyze the Ghost CMS codebase and identify functions with callback hell patterns that should be modernized to async/await. 

Look for:
1. Nested callbacks more than 2 levels deep
2. Error handling with callback(err) patterns  
3. Functions that could benefit from Promise.all() parallelization
4. Database operations using callback patterns

Show me the specific files and functions with the most complex callback nesting.
```

**Expected Output**: OpenCode.ai identifies specific Ghost files with callback hell.

#### Prompt 2: Select Refactoring Target
```
Show me the most complex callback-based function in the Ghost codebase. I want to see:

1. The complete function code
2. What it does (business logic explanation)
3. The callback nesting structure
4. Dependencies and side effects
5. Existing tests (if any)

This will be our refactoring target for Build mode.
```

**Expected Output**: Specific function code from Ghost with analysis.

### Step 2: Enter Build Mode for Implementation

#### Prompt 3: Switch to Build Mode
```
/mode build

I want to refactor this Ghost CMS function from callbacks to async/await:

[paste the function code from previous prompt]

Implement the modern version with:
1. Convert callbacks to async/await
2. Proper error handling with try/catch
3. Maintain exact same business logic
4. Add JSDoc documentation
5. Include basic unit tests

Write the complete implementation now.
```

**What Build Mode Does**:
- Generates actual working code immediately
- Maintains context across code blocks
- Handles imports and dependencies
- Creates complete, runnable implementations

#### Prompt 4: Complex Multi-File Refactoring
```
/mode build

Now refactor the entire user authentication module in Ghost CMS from callbacks to async/await. This involves multiple files:

1. /core/server/services/auth/session.js
2. /core/server/api/canary/session.js  
3. /core/server/web/middleware/authenticate.js

For each file:
- Convert callback patterns to async/await
- Update error handling
- Maintain API compatibility
- Add proper TypeScript-style JSDoc
- Update related tests

Start with session.js and show me the complete refactored code.
```

**Expected Output**: Complete refactored session.js file with modern patterns.

## 🛠️ Hands-On Exercise 2: Feature Implementation

### Real Feature: Add Redis Caching to Ghost

#### Prompt 5: Implement Redis Caching Layer
```
/mode build

Implement a Redis caching layer for Ghost CMS post retrieval. Create a complete implementation that:

1. Caches post data in Redis with configurable TTL
2. Handles cache invalidation on post updates
3. Falls back gracefully if Redis is unavailable  
4. Includes proper error logging
5. Works with existing Ghost post API

Create these files:
- /core/server/services/cache/redis-cache.js
- /core/server/services/cache/cache-manager.js
- Updated /core/server/api/canary/posts.js with caching

Show me the complete Redis cache service implementation first.
```

**Expected Output**: Complete Redis caching service code.

#### Prompt 6: Integration with Existing API
```
/mode build

Now integrate the Redis caching with Ghost's existing posts API. Modify the actual Ghost posts controller to:

1. Check Redis cache before database query
2. Store results in Redis after successful query
3. Invalidate cache on post create/update/delete
4. Handle cache errors gracefully
5. Add cache hit/miss metrics

Show me the updated posts.js controller with caching integrated.
```

### Step 3: Database Operations Modernization

#### Prompt 7: Modernize Database Layer
```
/mode build

Ghost CMS uses Bookshelf.js (based on Knex). Modernize this database operation from callbacks to async/await:

```javascript
// From Ghost's existing codebase - typical pattern
exports.findPage = function findPage(options, callback) {
    var tasks = {
        posts: function(callback) {
            Post.findPage(options, callback);
        },
        meta: function(callback) {
            Post.count(options, callback);
        }
    };
    
    async.parallel(tasks, function(err, results) {
        if (err) {
            return callback(err);
        }
        callback(null, {
            posts: results.posts,
            meta: { pagination: results.meta }
        });
    });
};
```

Convert this to modern async/await with proper error handling and type safety.
```

**Expected Output**: Modernized database operation code.

## 🧪 Real Implementation Exercise

### Task: Modernize Complete Ghost Module

**Duration**: 90 minutes  
**Objective**: Refactor entire Ghost comments system to modern patterns

#### Prompt 8: Complete Module Refactoring
```
/mode build

Refactor Ghost CMS's comment system from legacy callbacks to modern async/await. The comment system includes:

1. Comment model operations (CRUD)
2. Comment API endpoints  
3. Comment validation middleware
4. Email notification service for new comments
5. Comment moderation features

Starting with the comment model, implement:
- Modern async/await patterns
- Proper error handling with custom error types
- Input validation with joi or similar
- Comprehensive logging
- Unit tests for each function

Show me the complete modernized comment model first.
```

#### Prompt 9: Add New Feature with Modern Patterns
```
/mode build

Add a new "comment replies" feature to Ghost CMS using modern patterns:

1. Nested comment support (replies to comments)
2. Real-time notifications via WebSocket
3. Rate limiting for comment creation
4. Spam detection using basic ML patterns
5. Admin dashboard for comment management

Implement the complete feature including:
- Database schema updates
- API endpoints
- WebSocket integration
- Admin UI components
- Comprehensive test suite

Start with the database schema and model changes.
```

## 🔄 Build Mode vs Plan Mode Decision Making

### When to Use Build Mode:
- You know exactly what code needs to be written
- Implementing well-defined specifications
- Refactoring with clear target patterns
- Adding features with known requirements

### When to Use Plan Mode:
- Exploring different implementation approaches
- Analyzing complex architectural decisions
- Understanding trade-offs between solutions
- Planning multi-step development processes

#### Prompt 10: Mode Switching Practice
```
I need to add OAuth2 authentication to Ghost CMS. Help me decide the approach.

# Using Build mode (default - allows file editing)
First, analyze the current authentication system and plan the OAuth2 integration strategy.

[After getting the plan]

/mode build  
Now implement the OAuth2 provider integration for Google and GitHub.
```

## 🎯 Advanced Build Mode Techniques

### Context Management for Large Changes

#### Prompt 11: Multi-File Context Preservation
```
/mode build

I'm refactoring Ghost CMS's entire email system across multiple files. Keep context of these changes as I work through each file:

Files to refactor:
1. /core/server/services/mail/index.js (main service)
2. /core/server/services/mail/utils.js (utilities)  
3. /core/server/api/canary/mail.js (API layer)
4. /core/server/web/middleware/mail.js (middleware)

Start with the main service. Convert from callbacks to async/await while maintaining compatibility with existing email providers (Mailgun, SendGrid, SMTP).

As we go through each file, remind me of the interface changes made to previous files.
```

### Error Handling Patterns

#### Prompt 12: Robust Error Handling
```
/mode build

Implement enterprise-grade error handling for Ghost CMS's payment processing module. Create:

1. Custom error classes for different payment scenarios
2. Error recovery strategies (retry logic, fallbacks)
3. Detailed logging with correlation IDs
4. User-friendly error messages
5. Admin notification system for critical errors
6. Metrics collection for error monitoring

Base this on Ghost's existing payment integration patterns but modernize the error handling.
```

## ✅ Build Mode Mastery Validation

### 30-Minute Implementation Challenge

Test yourself:

```bash
# Choose any Node.js project with callbacks
# Set 30-minute timer
# Use Build mode to:

git clone https://github.com/expressjs/express.git
cd express

# Task: Modernize Express.js routing to support async middleware
# 1. Identify callback-based routing code
# 2. Plan async/await conversion
# 3. Implement with error handling
# 4. Add tests for new functionality
# 5. Ensure backward compatibility

# Success: Working code that passes existing tests
```

## 🔍 Provider Strategy for Build Mode

### Use OpenAI For:
- **Complex code generation**: Multi-file implementations
- **Creative solutions**: Novel patterns and approaches
- **Algorithm implementation**: Complex business logic

### Use Anthropic For:
- **Code analysis**: Understanding existing patterns
- **Refactoring strategy**: Safe transformation approaches
- **Error handling**: Robust edge case handling

## 🚀 Next Steps

**Practice Repositories** (all real, callback-heavy):
- **Sails.js**: Web framework callback modernization
- **Mongoose**: Database operation async conversion
- **Socket.io**: Event handling pattern updates

**Your Mission**: Pick one and modernize a major module using Build mode.

---

**You now master Build mode for direct code implementation and complex refactoring. Next: Advanced prompting techniques for large-scale development.**