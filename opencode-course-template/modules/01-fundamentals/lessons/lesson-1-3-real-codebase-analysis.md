# Lesson 1.3: Real Codebase Analysis with OpenCode.ai

## 🎯 What You'll Actually Do

By the end of this lesson, you will:
- Use OpenCode.ai to analyze a real 2000+ line codebase (FastAPI project)
- Learn specific prompts that get useful results
- Practice actual workflows experienced developers use daily
- Build something real using AI assistance

## 🔧 Prerequisites Check

Before starting, ensure you have:
- ✅ OpenCode.ai installed (Lesson 1.1)
- ✅ Multiple LLM providers configured (Lesson 1.2)  
- ✅ API keys working for OpenAI and Anthropic minimum

**Test your setup**:
```bash
# Quick provider test
opencode
/provider openai
/ask "Hello, are you working?"
/provider anthropic  
/ask "Hello, are you working?"
```

## 🔧 Setup: Real Repository

We'll use **FastAPI** - a real production Python web framework:
```bash
git clone https://github.com/tiangolo/fastapi.git
cd fastapi
```

**Why FastAPI?**
- 25,000+ lines of production Python code  
- Complex architecture with multiple modules
- Real-world patterns you'll encounter
- Active, well-documented project

## 📝 Hands-On Exercise 1: Project Analysis

### Step 1: Initialize OpenCode.ai with the Real Codebase

```bash
# Navigate to FastAPI directory
cd fastapi

# Start OpenCode.ai
opencode

# In OpenCode.ai, run:
/init
```

**What happens**: OpenCode.ai scans the entire codebase and builds an understanding.

### Step 2: Ask Strategic Questions

#### Prompt 1: Get the Big Picture
```
What is the overall architecture of this FastAPI codebase? Show me the main components and how they connect.
```

**Expected Output**: OpenCode.ai will show you:
- Main modules (fastapi/, tests/, docs/)
- Key entry points 
- How routing, middleware, and dependencies work together

#### Prompt 2: Find Key Files
```
What are the 5 most important files I should understand first to contribute to this project?
```

**Expected Output**: OpenCode.ai identifies core files like:
- `fastapi/main.py` - Main FastAPI class
- `fastapi/routing.py` - Request routing logic
- `fastapi/applications.py` - Application setup
- `fastapi/dependencies.py` - Dependency injection

#### Prompt 3: Understand Specific Functionality
```
How does dependency injection work in FastAPI? Show me the code and explain the pattern.
```

**Expected Output**: OpenCode.ai will:
- Point to specific files and functions
- Explain the pattern with code examples
- Show how it's used throughout the codebase

### Step 3: Navigate to Specific Code

#### Prompt 4: Find and Examine Code
```
Show me the code for the main FastAPI class. I want to understand how it initializes.
```

**What to expect**: OpenCode.ai shows you `fastapi/applications.py` and explains the `FastAPI` class constructor.

#### Prompt 5: Trace Code Execution
```
When I make a GET request to a FastAPI app, what's the exact flow through the codebase? Trace it for me.
```

**Expected Output**: Step-by-step execution path from request to response.

## 🛠️ Hands-On Exercise 2: Build Something Real

### Step 1: Create a New Feature Using AI Guidance

#### Prompt 6: Plan a Feature
```
I want to add a rate limiting middleware to FastAPI. How should I structure this? Show me the pattern used by existing middleware.
```

**Expected Output**: OpenCode.ai will:
- Show existing middleware examples
- Suggest file structure
- Explain the middleware pattern

#### Prompt 7: Generate the Code
```
Create a rate limiting middleware class for FastAPI that limits requests to 100 per minute per IP address. Use the same pattern as existing middleware.
```

**Expected Output**: Working middleware code you can actually use.

### Step 2: Implement Step by Step

#### Prompt 8: Create the Middleware File
```
Create a new file `fastapi/middleware/rate_limit.py` with the rate limiting middleware we discussed. Include proper imports and error handling.
```

#### Prompt 9: Add Configuration
```
Now create a configuration class for the rate limiter that allows customizing the rate limit and time window.
```

#### Prompt 10: Write Tests
```
Write pytest tests for the rate limiting middleware. Include tests for normal usage, rate limit exceeded, and edge cases.
```

### Step 3: Integration

#### Prompt 11: Show Integration Example
```
Show me how to integrate this rate limiting middleware into a FastAPI application. Provide a complete working example.
```

**Expected Output**: Complete code example you can run and test.

## 🧪 Hands-On Exercise 3: Code Modification Workflow

### Step 1: Find a Bug or Improvement Opportunity

#### Prompt 12: Code Review
```
Review the dependency injection code in fastapi/dependencies.py. Are there any performance improvements or edge cases that could be handled better?
```

#### Prompt 13: Propose Improvements
```
I found this function in dependencies.py [paste specific function]. How could we optimize it for better performance?
```

### Step 2: Make the Improvement

#### Prompt 14: Implement the Change
```
Implement the performance improvement you suggested. Show me the before and after code with comments explaining the changes.
```

#### Prompt 15: Add Tests for Your Changes
```
Create unit tests that verify the optimization works correctly and doesn't break existing functionality.
```

## 📊 Real Exercise: Measure Your Progress

### Task 1: 15-Minute Architecture Challenge
Set a timer for 15 minutes. Using only OpenCode.ai prompts, answer:

1. **What design patterns are used in FastAPI?**
2. **How does FastAPI handle async/await?**  
3. **What's the plugin/extension mechanism?**
4. **How are errors handled globally?**
5. **What testing strategies are used?**

**Success Criteria**: You should be able to answer all 5 questions with specific code references.

### Task 2: 30-Minute Feature Implementation
Set a timer for 30 minutes. Using OpenCode.ai:

1. **Choose a small feature** (logging middleware, custom validator, etc.)
2. **Plan the implementation** using AI guidance
3. **Generate the code** with proper tests
4. **Create integration example**

**Success Criteria**: Working code that follows FastAPI patterns and includes tests.

## 🎯 Specific Prompts That Work

### For Understanding Architecture:
```
Explain the architecture of [component] and show me the key files involved
```

### For Finding Code:
```
Where is [specific functionality] implemented? Show me the exact files and functions
```

### For Understanding Patterns:
```
How does [pattern/feature] work in this codebase? Show me examples and explain the approach
```

### For Code Generation:
```
Create a [component] that [does specific thing] following the same patterns used in [similar existing component]
```

### For Code Review:
```
Review this code for [specific concerns: performance, security, maintainability]. Suggest specific improvements.
```

## ✅ Validation: You're Ready for Module 2 When...

Test yourself with these prompts on a different codebase (try Django, Flask, or Express.js):

1. You can get oriented in under 10 minutes using OpenCode.ai
2. You can identify the main architectural patterns
3. You can generate working code that follows project conventions  
4. You can modify existing code with AI assistance
5. You can write tests for your changes

## 🚀 Next Steps

**Practice Repository Suggestions** (all real, 1000+ lines):
- **Django**: `git clone https://github.com/django/django.git`
- **Express.js**: `git clone https://github.com/expressjs/express.git`  
- **Vue.js**: `git clone https://github.com/vuejs/vue.git`
- **React**: `git clone https://github.com/facebook/react.git`

**Your homework**: Pick one and spend 1 hour analyzing it using the prompts you learned.

---

**This is real training. No fluff. Just the actual prompts and workflows you'll use every day as a professional developer using AI assistance.**