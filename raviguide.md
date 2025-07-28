# Using Claude-Flow for Course Generation

You can use claude-flow's built-in agents and commands to generate course materials without creating new files. Here's how:

## Using Claude-Flow for Course Generation

### 1. **Using the base-template-generator agent**
```bash
npx claude-flow sparc run base-template-generator "Create a course template for Python programming with 5 modules"
```

### 2. **Using the documenter agent**
```bash
npx claude-flow sparc run documenter "Create course documentation for JavaScript basics"
```

### 3. **Using multiple agents in parallel**
```bash
# Research and plan the course
npx claude-flow sparc run researcher "Research best practices for teaching React.js"

# Generate course structure
npx claude-flow sparc run planner "Plan a 10-module machine learning course structure"

# Create the content
npx claude-flow sparc run coder "Generate markdown files for a web development course"
```

### 4. **Using SPARC methodology for course creation**
```bash
# Full SPARC pipeline for course generation
npx claude-flow sparc tdd "Create comprehensive Python course materials"

# Or use specific SPARC phases
npx claude-flow sparc run specification "Define requirements for data science course"
npx claude-flow sparc run architecture "Design course structure for DevOps training"
```

### 5. **Batch processing for efficiency**
```bash
# Generate multiple course components in parallel
npx claude-flow sparc batch "researcher,planner,documenter" "Create Node.js course materials"
```

The agents will handle all the course generation tasks including creating structured markdown files, exercises, and resources based on your requirements.