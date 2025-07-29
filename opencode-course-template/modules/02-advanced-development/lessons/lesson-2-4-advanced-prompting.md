# Lesson 2.4: Advanced Prompting Techniques for Complex Development

## 🎯 What You'll Actually Do

By the end of this lesson, you will:
- Master context management for large, multi-session development projects
- Use iterative development workflows with AI for complex features
- Apply advanced prompting patterns for sophisticated code generation
- Handle error resolution and debugging systematically with AI assistance

## 🔄 Skills Bridge from Previous Lessons

**Lesson 2.1**: You planned architectures → **Now**: Advanced techniques for complex implementation
**Lesson 2.2**: You analyzed requirements → **Now**: Sophisticated prompts for meeting them  
**Lesson 2.3**: You built features → **Now**: Master techniques for handling complexity
**Next**: Lesson 2.5 will apply these techniques to massive codebases

## 🎯 Real Project: Kubernetes Operator Development

We'll develop a **Kubernetes Operator for PostgreSQL** - a complex, production-grade project requiring advanced AI collaboration.

### Setup the Real Development Environment

```bash
# Clone Kubernetes sample operator for reference
git clone https://github.com/kubernetes/sample-controller.git
cd sample-controller

# Set up our PostgreSQL operator project
mkdir -p postgresql-operator/{cmd,pkg,config,api}

# Initialize OpenCode.ai for complex development
opencode
/init
```

**Why a Kubernetes Operator?**
- Complex domain requiring deep technical knowledge
- Multi-file, multi-package project structure
- Real production deployment concerns
- Integration with multiple external systems (Kubernetes API, PostgreSQL)
- Perfect for testing advanced prompting techniques

## 📝 Advanced Technique 1: Context Layering and Management

### The Context Stack Pattern

#### Prompt 1: Establish Context Layers
```
I'm developing a Kubernetes PostgreSQL Operator. Help me establish layered context for this complex project:

**Context Layer 1 - Domain Knowledge**:
- Kubernetes operator patterns and best practices
- PostgreSQL cluster management requirements
- Go programming patterns for operators

**Context Layer 2 - Project Architecture**:
- Controller-runtime framework usage
- Custom Resource Definitions (CRDs)
- Reconciliation loop design patterns

**Context Layer 3 - Implementation Details**:
- Error handling and retry strategies
- Status reporting and observability
- Security and RBAC considerations

For each layer, provide:
1. Key concepts I need to understand
2. Common patterns and anti-patterns
3. Specific technical requirements
4. Integration points between layers

This will be my reference context for all subsequent development prompts.
```

**Advanced Technique**: This creates a hierarchical context that AI can reference throughout the project.

#### Prompt 2: Context Refresh and Expansion
```
Reference the context layers established in my previous prompt. Now expand Context Layer 2 (Project Architecture) with specific implementation details:

Based on the sample-controller repository structure, design the PostgreSQL operator architecture:

1. **Controller Design**:
   - PostgreSQLCluster custom resource specification
   - Reconciliation loop implementation strategy
   - Sub-controllers for different operational aspects

2. **Resource Management**:
   - StatefulSet management for PostgreSQL pods
   - Service creation for cluster access
   - PersistentVolume handling for data persistence

3. **Operational Logic**:
   - Cluster initialization and bootstrapping
   - Backup and recovery automation
   - Scaling and configuration updates

Keep the previous context layers active and reference them when relevant.
```

**Advanced Technique**: Explicit context management across multiple prompts in long development sessions.

## 🛠️ Advanced Technique 2: Iterative Development with Progressive Refinement

### The Spiral Development Pattern

#### Prompt 3: Development Spiral - Initial Implementation
```
/mode build

Using our established context layers, implement the PostgreSQL Operator foundation:

**Spiral 1 - Basic Structure** (implement now):
```go
// Basic CRD structure for PostgreSQLCluster
// Minimal controller with reconciliation skeleton
// Simple status reporting
```

**Spiral 2 - Core Functionality** (plan for next iteration):
- StatefulSet creation and management
- Service and endpoint management
- Basic error handling

**Spiral 3 - Advanced Features** (plan for future):
- Backup automation
- Monitoring integration
- High availability setup

Implement Spiral 1 completely, but structure the code to easily accommodate Spiral 2 and 3 additions. Include detailed comments explaining how each spiral will integrate.
```

#### Prompt 4: Development Spiral - Controlled Expansion
```
/mode build

Reference the Spiral 1 implementation from the previous prompt. Now implement Spiral 2 - Core Functionality:

**Build upon existing code**:
- Extend the controller to manage StatefulSets
- Add service creation and DNS management
- Implement comprehensive error handling with exponential backoff

**Maintain backward compatibility** with Spiral 1 structure
**Prepare integration points** for Spiral 3 features

While implementing, explain:
1. How each addition builds on the previous spiral
2. What design decisions support future spirals
3. Where you've added extension points for Spiral 3

Show the complete updated controller code with clear documentation of changes from Spiral 1.
```

**Advanced Technique**: Controlled, iterative development where each iteration builds systematically on the previous one.

## 🧠 Advanced Technique 3: Multi-Modal Problem Solving

### The Context-Switch Pattern

#### Prompt 5: Multi-Modal Analysis
```
I'm debugging a complex issue in my PostgreSQL Operator. The StatefulSet is created but pods remain in Pending state. 

Help me solve this using multi-modal analysis:

**Mode 1 - Code Analysis**:
/mode plan
Analyze the controller code for StatefulSet creation logic. What could cause pods to remain in Pending state?

[After getting analysis, continue with:]

**Mode 2 - System Debugging**:
/mode build
Generate comprehensive debugging code that will:
1. Check node resources and scheduling constraints
2. Validate PersistentVolume provisioning
3. Verify RBAC permissions
4. Log detailed pod scheduling events

**Mode 3 - Solution Implementation**:
Based on the analysis and debugging findings, implement fixes for the most likely causes.

Keep context from all three modes to provide a comprehensive solution.
```

**Advanced Technique**: Using different OpenCode.ai modes systematically to approach complex problems from multiple angles.

### Context Preservation Across Modes

#### Prompt 6: Cross-Mode Context Management
```
Continuing from the multi-modal debugging session above:

**Context Summary from Previous Modes**:
- Plan mode identified potential PV provisioning issues
- Build mode generated debugging code that revealed RBAC permission gaps
- Current issue: ServiceAccount lacks necessary cluster-level permissions

**Now in Build Mode**:
/mode build

Fix the RBAC issues by implementing:
1. Updated ClusterRole with correct PostgreSQL operator permissions
2. Enhanced ServiceAccount configuration
3. Proper RoleBinding for the operator namespace
4. RBAC validation in the controller startup sequence

Reference the specific findings from our debugging session and ensure the fixes address the root causes we identified.
```

**Advanced Technique**: Explicitly maintaining context across mode switches for complex problem resolution.

## 🎯 Advanced Technique 4: Sophisticated Code Generation Patterns

### The Specification-Driven Development Pattern

#### Prompt 7: Behavior-Driven Implementation
```
/mode build

Implement PostgreSQL high availability features using specification-driven development:

**Specification (Given-When-Then format)**:

```
GIVEN a PostgreSQL cluster with 3 replicas
WHEN the primary node fails
THEN a replica should be promoted to primary within 30 seconds
AND the cluster should maintain read/write availability
AND no data should be lost

GIVEN a PostgreSQL cluster during normal operation
WHEN a configuration change is requested
THEN the change should be applied via rolling update
AND read availability should be maintained throughout
AND write availability should have maximum 10-second downtime
```

**Implementation Requirements**:
1. Convert each specification into working Go code
2. Include comprehensive error handling for each scenario
3. Add metrics and observability for specification compliance
4. Implement integration tests that validate each specification

Show the complete implementation with clear mapping between specifications and code sections.
```

#### Prompt 8: Pattern-Based Code Generation
```
/mode build

Generate PostgreSQL operator code using established Kubernetes controller patterns:

**Pattern 1 - Resource Finalizer Management**:
```go
// Generate complete finalizer handling code that:
// - Prevents resource deletion during critical operations
// - Handles cleanup of external resources (cloud volumes, backups)
// - Manages graceful shutdown sequences
```

**Pattern 2 - Status Condition Management**:
```go
// Generate status management code that:
// - Implements standard Kubernetes condition types
// - Provides detailed progress reporting
// - Enables operational monitoring and alerting
```

**Pattern 3 - Event Generation and Logging**:
```go
// Generate comprehensive event and logging code that:
// - Records important operational events
// - Provides debugging information for troubleshooting
// - Enables operational observability
```

For each pattern, provide:
1. Complete, production-ready implementation
2. Integration points with the existing controller
3. Testing approach for the pattern
4. Operational usage examples
```

**Advanced Technique**: Using established patterns as templates for sophisticated code generation.

## 🔧 Advanced Technique 5: Error Handling and Recovery Strategies

### The Defensive Programming Pattern

#### Prompt 9: Comprehensive Error Handling Strategy
```
/mode build

Implement enterprise-grade error handling for the PostgreSQL Operator:

**Error Categories to Handle**:

1. **Transient Errors** (network timeouts, temporary resource unavailability)
2. **Configuration Errors** (invalid cluster specifications, resource conflicts)  
3. **Infrastructure Errors** (node failures, storage issues, network partitions)
4. **Application Errors** (PostgreSQL startup failures, corruption detection)

For each category, implement:

```go
// Error detection and classification
// Retry strategies with exponential backoff
// Circuit breaker patterns for external dependencies
// Graceful degradation when possible
// Comprehensive logging and metrics
// User-friendly status reporting
```

**Implementation Requirements**:
- Custom error types for each category
- Retry logic with appropriate backoff strategies
- Circuit breakers for external service calls
- Comprehensive error context and stack traces
- Structured logging for operational debugging
- Status updates that help operators understand issues

Show complete error handling implementation with real PostgreSQL operator scenarios.
```

### Advanced Debugging with AI Assistance

#### Prompt 10: Systematic Debug Strategy
```
I'm experiencing a complex production issue with the PostgreSQL Operator:

**Symptoms**:
- Cluster appears healthy in Kubernetes dashboard
- PostgreSQL pods are running and ready
- Applications report intermittent connection failures
- No obvious errors in operator or PostgreSQL logs

**Debug Strategy Request**:
Generate a systematic debugging approach that includes:

1. **Data Collection Phase**:
   - Specific metrics to gather
   - Log analysis commands
   - Network connectivity tests
   - Resource utilization checks

2. **Hypothesis Formation**:
   - Most likely root causes based on symptoms
   - Tests to validate/eliminate each hypothesis
   - Priority order for investigation

3. **Investigation Scripts**:
   - Shell scripts for data collection
   - Go code for operator-specific debugging
   - SQL queries for PostgreSQL health checks

4. **Resolution Planning**:
   - Potential fixes for each identified cause
   - Rollback strategies if fixes fail
   - Prevention measures for future occurrences

Provide specific, executable debugging code and clear investigation methodology.
```

**Advanced Technique**: Systematic, structured approach to complex debugging with AI assistance generating specific debugging tools.

## 🧪 Real-World Application: Production Incident Response

### Scenario: Complex Production Issue

#### Prompt 11: Incident Response with AI Collaboration
```
**PRODUCTION INCIDENT** - PostgreSQL Operator Cluster Down

**Context**: 
- Production e-commerce platform
- 3-node PostgreSQL cluster managed by our operator
- Cluster stopped responding 20 minutes ago
- Revenue impact: $50,000/hour

**Available Information**:
- All 3 PostgreSQL pods show "Running" status
- Network connectivity between pods appears normal
- Application logs show "connection refused" errors
- No recent deployments or configuration changes

**Required**: Systematic incident response plan with AI assistance

**Immediate Actions** (next 10 minutes):
Generate specific commands and checks to:
1. Assess current cluster state
2. Identify if this is a PostgreSQL issue or operator issue
3. Determine if we need immediate failover to backup systems
4. Collect critical debugging information

**Investigation Plan** (next 30 minutes):
Create detailed investigation steps to:
1. Analyze PostgreSQL cluster health and replication status
2. Check operator controller status and recent reconciliation events
3. Validate underlying Kubernetes resources (services, endpoints, DNS)
4. Review system resources and potential infrastructure issues

**Recovery Plan**:
Develop specific recovery procedures for most likely scenarios:
1. PostgreSQL primary failure
2. Operator controller malfunction
3. Network or DNS issues
4. Resource exhaustion

Provide specific commands, scripts, and decision trees for each phase.
```

**Advanced Technique**: Using AI for structured incident response with clear decision points and executable actions.

## 🎯 Advanced Technique 6: Long-Session Context Management

### The Session Persistence Pattern

#### Prompt 12: Session Context Preservation
```
I'm in the middle of a 4-hour development session on the PostgreSQL Operator. Help me maintain context across multiple topics:

**Session State Summary**:
- **Hour 1**: Implemented basic controller structure and CRDs
- **Hour 2**: Added StatefulSet management and service creation
- **Hour 3**: Built comprehensive error handling and retry logic
- **Current (Hour 4)**: Working on backup and recovery automation

**Context to Preserve**:
1. **Architecture Decisions Made**: Key design choices and rationale
2. **Code Patterns Established**: Consistent patterns used throughout
3. **Outstanding Technical Debt**: Issues deferred for later resolution
4. **Integration Points**: How new features connect to existing code

**Current Task**: Implement automated backup system

**Request**: Before starting the backup implementation, help me:
1. Review consistency with established patterns
2. Identify integration points with existing error handling
3. Plan testing strategy that aligns with our current test structure
4. Consider how this affects our operational monitoring

Reference the complete context from this development session.
```

#### Prompt 13: Context Handoff for Team Collaboration
```
Prepare a context handoff for team collaboration on the PostgreSQL Operator:

**Development Context for Team**:
I've been developing this operator using specific AI-assisted patterns. Document the context so other team members can:

1. **Understand the AI Collaboration Approach**:
   - Prompting patterns used for different types of tasks
   - Context management strategies for long development sessions
   - Error handling and debugging approaches with AI

2. **Continue Development Consistently**:
   - Code patterns and architectural decisions
   - Testing strategies and validation approaches
   - Documentation and operational considerations

3. **Maintain Quality Standards**:
   - Code review criteria specific to AI-generated code
   - Validation steps for complex AI-assisted implementations
   - Performance and security considerations

**Deliverable**: Team collaboration guide that enables consistent AI-assisted development across multiple developers.
```

**Advanced Technique**: Creating transferable context for team-based AI-assisted development.

## ✅ Advanced Prompting Mastery Validation

### 2-Hour Complex Development Challenge

Test your advanced techniques:

```bash
# Set timer for 2 hours
# Choose a complex development project:
# - Microservice with multiple external integrations
# - CLI tool with advanced features and error handling
# - Web application with real-time features

# Use advanced prompting techniques to:

**Hour 1: Context and Architecture**
- Establish layered context for the project
- Use iterative development planning
- Create comprehensive error handling strategy

**Hour 2: Implementation and Testing**  
- Implement using spiral development pattern
- Apply pattern-based code generation
- Create debugging and validation tools

# Success Criteria:
# - Working, tested implementation
# - Clear context preservation throughout
# - Professional-quality error handling
# - Comprehensive documentation
```

## 🔍 Provider Strategy for Advanced Prompting

### Technique-Specific Provider Selection

#### OpenAI Strengths:
- **Creative problem solving**: Novel approaches to complex challenges
- **Pattern generation**: Creating sophisticated code patterns
- **Iterative refinement**: Building on previous implementations

#### Anthropic Strengths:
- **Context management**: Maintaining complex context across long sessions
- **Error analysis**: Systematic debugging and troubleshooting
- **Documentation**: Clear, structured explanations and guides

#### Prompt 14: Provider Technique Comparison
```
# Test advanced context management
/provider openai
[Complex context establishment prompt with multiple layers]

/provider anthropic  
[Same complex context establishment prompt]

# Compare:
# - Which maintains context better across complex prompts?
# - Which provides more structured responses?
# - Which handles iterative development more effectively?

# Test advanced debugging assistance
/provider openai
[Complex debugging scenario with multiple potential causes]

/provider anthropic
[Same complex debugging scenario]

# Compare:
# - Which provides more systematic debugging approaches?
# - Which generates better debugging tools and scripts?
# - Which gives clearer incident response procedures?
```

## 🚀 Next Steps

**Advanced Practice Projects**:
- **Kubernetes Operators**: Complex system management and automation
- **Microservice Orchestration**: Multi-service integration and management
- **Developer Tools**: CLI tools with sophisticated features and error handling

**Your Mission**: Apply these advanced techniques to a real production-complexity project, maintaining context and quality throughout a multi-hour development session.

---

**You now master advanced prompting techniques for complex, professional development. Next: Lesson 2.5 - Large Codebase Management for enterprise-scale projects.**