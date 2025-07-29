# Module 2: Advanced AI-Assisted Development

## 📋 Module Overview

**Duration**: 3 weeks, 30 hours total  
**Prerequisites**: Module 1 completed - working OpenCode.ai with multi-provider setup  
**Target**: Master Build mode and advanced techniques for complex development tasks  
**Objective**: Transform from basic AI usage to sophisticated development workflows

## 🚨 **Critical: Build Mode Usage for Advanced Developers**

**This module teaches Build mode exclusively** because:
- ✅ **Build mode allows file editing and creation** - essential for real development
- ✅ **Full tool access** - can read, write, modify, and execute code
- ✅ **Professional workflow** - matches how developers actually work
- ❌ **Plan mode is read-only** - cannot create or modify files (not suitable for coding)

**Key Understanding**: Advanced developers need to create and modify files, so Build mode is the only practical choice for professional development.

## 🔄 Module 1 Refresher & Validation

### **Quick Skills Check (15 minutes)**

Before diving into advanced techniques, verify your Module 1 foundations:

```bash
# Test 1: Multi-provider setup working
opencode
/provider openai
/ask "Hello, confirm you're working"
/provider anthropic  
/ask "Hello, confirm you're working"

# Test 2: Can analyze real codebase quickly
cd ~/projects
git clone https://github.com/tiangolo/fastapi.git
cd fastapi
opencode
/init
/ask "What are the 3 main architectural components of this codebase?"
```

**Success Criteria**: Both providers respond correctly, you can identify FastAPI's main components (FastAPI class, routing system, dependency injection) within 5 minutes.

### **Module 1 Skills Checkpoint**

You should now have:
- ✅ **Working multi-provider setup**: OpenAI + Anthropic minimum
- ✅ **Cost monitoring**: Usage tracking and limits configured
- ✅ **Codebase analysis skills**: Can navigate and understand 1000+ line projects
- ✅ **Real project experience**: Built working REST API with tests
- ✅ **Security awareness**: API keys properly secured

**If any item is missing**, review Module 1 materials before proceeding.

## 🎯 Module 2 Learning Path

### **Week 3: Architecture & Planning with Build Mode**

#### Lesson 2.1: Architecture Planning with AI (4 hours)
- Use Build mode to design and document complex system architectures
- Practice with real microservices architecture planning and documentation creation
- Learn provider selection for different architectural tasks
- **Outcome**: Design complete e-commerce system architecture with generated documentation files

#### Lesson 2.2: Feature Planning & Requirements Analysis (3 hours)  
- Transform business requirements into technical specifications using Build mode
- Use AI to break down complex features and create implementation files
- Practice with real product requirements from open-source projects
- **Outcome**: Complete technical specification with generated documentation and code templates

#### Exercise 2.1: Microservices Architecture Planning (5 hours)
- Take existing monolithic application (Django-CMS, Spree, or PrestaShop)
- Plan complete microservices migration using Build mode to create documentation and code templates
- Create professional architecture documentation with AI assistance
- **Outcome**: Implementation-ready architecture specification with generated files for enterprise migration

### **Week 4: Advanced Implementation**

#### Lesson 2.3: Direct Code Implementation (4 hours)
- Master Build mode for complex code generation and refactoring
- Practice with Ghost CMS modernization (200,000+ lines)
- Learn callback-to-async conversion and multi-file context management
- **Outcome**: Modernize complete legacy system module using Build mode

#### Lesson 2.4: Advanced Prompting Techniques (3 hours)
- Context management for complex, multi-session development
- Iterative development workflows with Kubernetes operator project
- Advanced error handling and debugging strategies
- **Outcome**: Master sophisticated AI collaboration for enterprise development

#### Exercise 2.2: Legacy System Modernization (5 hours)
- Take real legacy codebase (Python 2.7, Node.js callbacks, or PHP 5.x)
- Modernize to current standards using advanced Build mode techniques
- Implement comprehensive testing and performance benchmarking
- **Outcome**: Production-ready modernized codebase with full documentation

### **Week 5: Integration & Optimization**

#### Lesson 2.5: Large Codebase Management (4 hours)
- Navigate and modify massive codebases (Linux kernel networking, 500,000+ lines)
- Master context preservation across enterprise-scale development sessions
- Apply AI-assisted code review and optimization to complex systems
- **Outcome**: Successfully implement features in enterprise-scale production codebases

#### Lesson 2.6: Advanced Agent Orchestration (3 hours)
- Orchestrate complex multi-agent workflows for enterprise development
- Implement intelligent agent selection and routing systems
- Build self-organizing agent teams that adapt to project requirements
- **Outcome**: Master sophisticated multi-agent coordination for complex projects

#### Exercise 2.3: Production Feature Development (6 hours)
- Add complete feature to real open-source project (Fastify, Pandas, or Vue.js)
- Use full Plan → Build → Test → Document → Contribute cycle with agent coordination
- Submit actual pull request to active open-source project
- **Outcome**: Real contribution to production codebase with community validation

#### Assessment: Advanced Development Mastery (4 hours)
- **Part A**: Rapid architecture analysis with real enterprise systems
- **Part B**: Complex multi-subsystem feature implementation with agent orchestration
- **Part C**: Large codebase navigation and emergency bug resolution
- **Part D**: Professional technical documentation and multi-agent workflow design
- **Outcome**: Validated mastery of advanced AI-assisted development (see `assessment-module-2-mastery.md`)

## 📊 Success Criteria (Per Course Requirements)

Students must demonstrate:

- **✅ Architecture Design Mastery**: Design complex system architectures using Build mode with file creation
- **✅ Advanced Implementation**: Implement features and refactor code effectively with full Build mode capabilities
- **✅ Advanced Prompting**: Use sophisticated techniques for complex development tasks
- **✅ Large Codebase Navigation**: Work efficiently with 10,000+ line projects using Build mode
- **✅ Production Readiness**: Code quality and practices suitable for real-world use

## 🛠️ Real Codebases Used

All exercises use actual production repositories:

### **Planning Practice**:
- **Shopify/Rails**: E-commerce monolith → microservices planning
- **Netflix/Conductor**: Complex workflow system architecture analysis
- **Airbnb/JavaScript**: Large-scale React application structure

### **Build Mode Practice**:
- **Django**: Legacy Python 2.7 → 3.12 modernization
- **Express.js**: Callback hell → async/await refactoring  
- **React**: Class components → Hooks migration

### **Integration Projects**:
- **Open-source contributions**: Real PRs to active projects
- **Performance optimization**: Actual bottleneck identification and fixes
- **Security improvements**: Real vulnerability fixes

## 🎯 Key Differences from Module 1

### **Complexity Level**
- **Module 1**: Single files, basic operations, tutorial-level tasks
- **Module 2**: Multi-file changes, complex logic, production-level challenges

### **AI Usage Sophistication**
- **Module 1**: Simple prompts, direct questions, basic code generation
- **Module 2**: Multi-step workflows, context management, strategic AI collaboration

### **Project Scale**
- **Module 1**: 1,000-2,500 line codebases, self-contained exercises
- **Module 2**: 10,000+ line codebases, real-world integration, open-source contributions

### **Professional Skills**
- **Module 1**: Individual productivity, basic AI tool usage
- **Module 2**: Team collaboration readiness, production deployment, code review leadership

## 📈 Skills Progression Tracking

### **Entry Skills (from Module 1)**
- Basic OpenCode.ai usage
- Simple codebase analysis
- Direct code generation
- API key management

### **Module 2 Target Skills**
- Strategic architecture planning
- Complex refactoring workflows
- Advanced context management
- Production-quality implementation

### **Exit Skills (to Module 3)**
- Team collaboration readiness  
- Production deployment confidence
- Code review leadership
- Mentoring capability foundation

## 🚀 Professional Application

### **Real-World Scenarios**
- **Startup CTO**: Plan microservices architecture for scaling team
- **Senior Developer**: Lead legacy system modernization project
- **Technical Lead**: Guide team adoption of AI-assisted development
- **Consultant**: Analyze and improve client codebases efficiently

### **Industry Applications**
- **Fintech**: Complex transaction system architecture and implementation
- **E-commerce**: Scalable platform design and feature development
- **SaaS**: Multi-tenant system planning and optimization
- **Healthcare**: Compliant system design and secure implementation

## 🔧 Technical Prerequisites

### **Hardware Requirements**
- **RAM**: 16GB+ recommended (working with larger codebases)
- **Storage**: 20GB+ free space for multiple large repositories
- **Network**: Stable connection for extended AI interactions

### **Software Requirements**
- **Module 1 completion validated**: All tools working correctly
- **Git proficiency**: Comfortable with branching, merging, conflict resolution
- **Docker knowledge**: Basic container understanding for deployment testing
- **Testing frameworks**: Jest, pytest, or equivalent in your primary language

### **API Budget Planning**
- **Expected usage**: $20-40 for entire module (more complex interactions)
- **Cost optimization**: Learn to balance provider usage for cost efficiency
- **Team usage patterns**: Understand how usage scales in collaborative environments

---

**Module 2 transforms you from an AI tool user into an AI-powered developer, ready to tackle complex real-world development challenges with sophisticated AI collaboration techniques.**