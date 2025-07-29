# Lesson 1.4: Agent Creation & Management - Specialized AI Assistants

## 🎯 What You'll Actually Do

By the end of this lesson, you will:
- Create custom agents for specialized development tasks
- Configure agent-specific models, prompts, and tool access
- Build a team of AI assistants for different aspects of development
- Use the AGENTS.md file for project-specific agent coordination

**No theory. Just building your AI development team.**

## 🤖 Understanding OpenCode.ai Agents

### What Are Agents?
Agents are specialized AI assistants that you configure for specific tasks:
- **Coder Agent**: Focused on writing and modifying code
- **Reviewer Agent**: Specialized in code analysis and review
- **Documenter Agent**: Expert at creating technical documentation
- **Security Agent**: Focused on finding security vulnerabilities
- **Performance Agent**: Optimized for performance analysis and tuning

### Why Use Agents Instead of General Chat?
- **Specialized Expertise**: Each agent has focused knowledge and prompts
- **Consistent Behavior**: Same agent always approaches tasks the same way
- **Tool Restrictions**: Limit what each agent can do for security
- **Team Coordination**: Multiple agents can work on the same project

## 🛠️ Step 1: Create Your First Custom Agent

### Interactive Agent Creation

```bash
# Start OpenCode.ai
opencode

# Create a new agent interactively
opencode agent create

# Follow the prompts:
# Name: code-reviewer
# Description: Analyzes code for bugs, security issues, and best practices
# Model: anthropic/claude-3-sonnet-20240229
# Tools: read, bash (no write access for safety)
```

### Manual Agent Configuration

Create agent in your project's `.opencode/agents/` directory:

```bash
# Create agents directory
mkdir -p .opencode/agents

# Create code reviewer agent
cat > .opencode/agents/code-reviewer.json << 'EOF'
{
  "name": "code-reviewer",
  "description": "Expert code reviewer focused on security, performance, and best practices",
  "model": "anthropic/claude-3-sonnet-20240229",
  "maxTokens": 4000,
  "systemPrompt": "You are a senior code reviewer with expertise in security, performance, and best practices. Always provide specific, actionable feedback with code examples. Focus on:\n- Security vulnerabilities\n- Performance bottlenecks\n- Code maintainability\n- Best practice violations\n- Potential bugs or edge cases",
  "tools": ["read", "bash"],
  "temperature": 0.1
}
EOF
```

### Test Your Agent

```bash
# In OpenCode.ai, use your new agent
/agent code-reviewer

# Test with a code review task
/ask "Review this function for security issues: 
function authenticateUser(username, password) {
  const query = 'SELECT * FROM users WHERE username = \"' + username + '\" AND password = \"' + password + '\"';
  return database.query(query);
}"
```

**Expected Output**: Detailed analysis of SQL injection vulnerability with specific fixes.

## 🔧 Step 2: Build Your Agent Team

### Essential Development Agents

#### 1. Security Auditor Agent
```bash
cat > .opencode/agents/security-auditor.json << 'EOF'
{
  "name": "security-auditor",
  "description": "Specialized security expert for vulnerability assessment and secure coding practices",
  "model": "anthropic/claude-3-sonnet-20240229",
  "maxTokens": 3000,
  "systemPrompt": "You are a cybersecurity expert specializing in application security. Analyze code for:\n- SQL injection vulnerabilities\n- XSS attack vectors\n- Authentication bypass issues\n- Data exposure risks\n- Input validation problems\n- Cryptographic weaknesses\nProvide specific fixes with secure code examples.",
  "tools": ["read"],
  "temperature": 0.0
}
EOF
```

#### 2. Performance Optimizer Agent
```bash
cat > .opencode/agents/performance-optimizer.json << 'EOF'
{
  "name": "performance-optimizer",
  "description": "Performance analysis expert focused on bottlenecks, memory usage, and optimization",
  "model": "openai/gpt-4",
  "maxTokens": 4000,
  "systemPrompt": "You are a performance optimization expert. Analyze code for:\n- Time complexity issues\n- Memory leaks and excessive allocation\n- Database query optimization opportunities\n- Caching strategies\n- Algorithmic improvements\n- Resource utilization problems\nProvide benchmarking suggestions and optimized code examples.",
  "tools": ["read", "bash"],
  "temperature": 0.2
}
EOF
```

#### 3. Documentation Writer Agent
```bash
cat > .opencode/agents/doc-writer.json << 'EOF'
{
  "name": "doc-writer",
  "description": "Technical documentation expert for APIs, code comments, and user guides",
  "model": "anthropic/claude-3-sonnet-20240229", 
  "maxTokens": 5000,
  "systemPrompt": "You are a technical writer specializing in developer documentation. Create:\n- Clear, comprehensive API documentation\n- Helpful code comments and docstrings\n- User-friendly README files\n- Architecture decision records (ADRs)\n- Troubleshooting guides\nUse examples, diagrams (text-based), and practical use cases.",
  "tools": ["read", "write"],
  "temperature": 0.3
}
EOF
```

#### 4. Test Automation Agent
```bash
cat > .opencode/agents/test-engineer.json << 'EOF'
{
  "name": "test-engineer",
  "description": "Test automation expert for unit tests, integration tests, and test strategy",
  "model": "openai/gpt-4",
  "maxTokens": 4000,
  "systemPrompt": "You are a test automation expert. Create comprehensive tests including:\n- Unit tests with high coverage\n- Integration tests for system components\n- End-to-end test scenarios\n- Performance and load tests\n- Security test cases\n- Mock and fixture strategies\nUse appropriate testing frameworks and follow testing best practices.",
  "tools": ["read", "write", "bash"],
  "temperature": 0.2
}
EOF
```

## 📋 Step 3: Project-Specific Agent Configuration

### Create AGENTS.md File

OpenCode.ai uses an `AGENTS.md` file to understand your project structure and coding patterns:

```bash
# Generate AGENTS.md for your project
opencode analyze project

# Or create manually
cat > AGENTS.md << 'EOF'
# Project Agents Configuration

## Project Overview
This is a Node.js REST API built with Express.js, using PostgreSQL for data persistence and Redis for caching.

## Agent Assignments

### Code Development
- **Primary Coder**: Use `openai/gpt-4` for complex business logic
- **API Developer**: Specialized in Express.js and REST API patterns
- **Database Developer**: PostgreSQL optimization and query development

### Quality Assurance  
- **Code Reviewer**: Security-focused review with Anthropic Claude
- **Test Engineer**: Comprehensive test automation with Jest
- **Performance Auditor**: Node.js performance optimization

### Architecture & Planning
- **System Architect**: High-level design decisions and patterns
- **Security Auditor**: Vulnerability assessment and secure coding
- **Documentation Writer**: API docs, README, and technical guides

## Coding Standards
- Use async/await instead of callbacks
- Implement proper error handling with custom error classes
- Follow REST API conventions for endpoints
- Write comprehensive JSDoc comments
- Maintain 90%+ test coverage

## Agent Workflows
1. **Feature Development**: architect → coder → test-engineer → code-reviewer
2. **Bug Fixes**: security-auditor → coder → test-engineer → performance-optimizer  
3. **Refactoring**: performance-optimizer → coder → code-reviewer → doc-writer
EOF
```

### Commit AGENTS.md to Version Control

```bash
# Add to git for team sharing
git add AGENTS.md
git commit -m "Add project agent configuration for OpenCode.ai"
```

## 🚀 Step 4: Agent Workflows and Coordination

### Multi-Agent Development Workflow

#### Feature Development Workflow
```bash
# Start with architecture planning
/agent system-architect
/ask "Design the architecture for a user authentication system with JWT tokens, rate limiting, and password reset functionality"

# Switch to security review
/agent security-auditor  
/ask "Review the authentication architecture for security vulnerabilities and recommend improvements"

# Implement the feature
/agent api-developer
/ask "Implement the JWT authentication system based on the architecture, including middleware for token validation"

# Create comprehensive tests
/agent test-engineer
/ask "Create unit and integration tests for the authentication system, including edge cases and security scenarios"

# Generate documentation
/agent doc-writer
/ask "Create API documentation for the authentication endpoints with examples and error codes"
```

#### Code Review Workflow
```bash
# Security-focused review
/agent security-auditor
/ask "Audit this authentication middleware for security vulnerabilities"

# Performance analysis
/agent performance-optimizer  
/ask "Analyze this code for performance bottlenecks and suggest optimizations"

# General code quality review
/agent code-reviewer
/ask "Review this code for maintainability, best practices, and potential bugs"
```

## 🎯 Step 5: Advanced Agent Management

### Agent Configuration Hierarchy

Agents can be configured at multiple levels:

1. **Global Agents** (`~/.opencode/agents/`): Available across all projects
2. **Project Agents** (`.opencode/agents/`): Project-specific configurations
3. **Session Agents**: Temporary agents for specific tasks

### Dynamic Agent Creation

```bash
# Create temporary agent for specific task
/agent create temp-migration-expert \
  --model anthropic/claude-3-sonnet-20240229 \
  --description "Database migration expert for PostgreSQL schema changes" \
  --tools read,write,bash \
  --system-prompt "You are a database migration expert..."
```

### Agent Switching During Development

```bash
# Check available agents
/agent list

# Switch to specific agent
/agent security-auditor

# Check current agent
/agent current

# Switch back to general assistant
/agent general
```

## 🔍 Step 6: Agent Performance Optimization

### Model Selection Strategy

Choose models based on agent purpose:

```json
{
  "code-generation": "openai/gpt-4",        // Best for complex logic
  "code-analysis": "anthropic/claude-3-sonnet", // Best for understanding
  "documentation": "anthropic/claude-3-sonnet", // Best for writing
  "performance": "openai/gpt-4",            // Best for optimization
  "security": "anthropic/claude-3-sonnet"   // Best for careful analysis
}
```

### Token Optimization

```bash
# Configure token limits per agent type
cat > .opencode/agents/config.json << 'EOF'
{
  "defaults": {
    "maxTokens": {
      "code-generation": 4000,
      "analysis": 3000, 
      "documentation": 5000,
      "quick-tasks": 1000
    },
    "temperature": {
      "code-generation": 0.2,
      "analysis": 0.1,
      "creative": 0.7
    }
  }
}
EOF
```

## 🧪 Step 7: Team Agent Sharing

### Export Agent Configuration

```bash
# Export all project agents
opencode agent export --output project-agents.json

# Share with team
git add .opencode/agents/
git commit -m "Add team agent configurations"
```

### Import Team Agent Configuration

```bash
# Import shared agents
opencode agent import project-agents.json

# Verify agents are available
/agent list
```

## ✅ Validation: Test Your Agent Team

Run through a complete development workflow:

```bash
# 1. Architecture Planning
/agent system-architect
/ask "Design a REST API for a task management system"

# 2. Security Review
/agent security-auditor
/ask "Review the planned architecture for security considerations"

# 3. Implementation  
/agent api-developer
/ask "Implement the task creation endpoint with proper validation"

# 4. Testing
/agent test-engineer
/ask "Create comprehensive tests for the task creation endpoint"

# 5. Documentation
/agent doc-writer
/ask "Document the task creation API with examples"

# 6. Performance Review
/agent performance-optimizer
/ask "Analyze the implementation for performance issues"
```

**Success Criteria**: Each agent provides specialized, focused responses appropriate to their role.

## 🎯 Real-World Agent Strategies

### Development Phase Agents
- **Planning Phase**: system-architect, security-auditor
- **Implementation Phase**: api-developer, database-developer  
- **Testing Phase**: test-engineer, performance-optimizer
- **Review Phase**: code-reviewer, security-auditor
- **Documentation Phase**: doc-writer, api-documenter

### Debugging Workflow Agents
- **Issue Analysis**: code-reviewer, performance-optimizer
- **Security Investigation**: security-auditor
- **Fix Implementation**: api-developer, database-developer
- **Verification**: test-engineer, performance-optimizer

### Maintenance Agents
- **Regular Audits**: security-auditor, performance-optimizer
- **Documentation Updates**: doc-writer
- **Dependency Updates**: security-auditor, test-engineer
- **Performance Monitoring**: performance-optimizer

## 🚀 Next Steps

Now that you have a complete agent team:

1. **Practice agent switching** during real development tasks
2. **Customize agent prompts** based on your specific needs  
3. **Create project-specific agents** for unique requirements
4. **Share agent configurations** with your development team

**Ready for Module 2**: You now have specialized AI assistants for every aspect of development.

---

**You now have a professional AI development team that works together to handle complex software projects efficiently and securely.**