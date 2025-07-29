# Video Scripts for Module 1 - 1-Minute Videos

## Video 1: "OpenCode.ai First Connection" (60 seconds)

### Script:
```
[0:00-0:05] "Let's connect to OpenCode.ai for the first time"
[Screen: Clean terminal]

[0:05-0:15] 
Command: opencode
Shows: OpenCode.ai startup screen with provider selection

[0:15-0:25]
"First, let's test OpenAI connection"
Command: /provider openai
Prompt: "Hello, can you confirm you're working?"
Shows: Real AI response

[0:25-0:35]
"Now let's try Anthropic"
Command: /provider anthropic  
Prompt: "Hello, can you confirm you're working?"
Shows: Different AI response

[0:35-0:45]
"Perfect! Both providers responding"
Shows: Quick /provider switch demonstration

[0:45-0:60]
"You now have working multi-provider AI assistance"
Shows: Status indicators for connected providers
```

**File**: `lesson-1-2-first-connection.mp4`

---

## Video 2: "Build Mode vs Plan Mode" (60 seconds)

### Script:
```
[0:00-0:05] "Critical difference: Build mode vs Plan mode"
[Screen: OpenCode.ai interface]

[0:05-0:20]
"Plan mode - read only, cannot edit files"
Command: /mode plan
Prompt: "Create a simple Python function"
Shows: AI response with code suggestion only

[0:20-0:35]
"Build mode - can actually create and edit files"
Command: /mode build
Prompt: "Create a simple Python function in hello.py"
Shows: AI creating actual file with code

[0:35-0:50]
"See the difference? Build mode created the actual file"
Shows: File system with hello.py created
Command: cat hello.py

[0:50-0:60]
"For real development, always use Build mode"
Shows: /mode build as default setting
```

**File**: `lesson-1-2-build-mode-demo.mp4`

---

## Video 3: "FastAPI Codebase Analysis" (60 seconds)

### Script:
```
[0:00-0:05] "Let's analyze a real 25,000 line codebase"
[Screen: Terminal in FastAPI directory]

[0:05-0:15]
Command: opencode
Command: /init
Shows: OpenCode.ai analyzing the FastAPI repository

[0:15-0:30]
Prompt: "What are the 3 main architectural components?"
Shows: AI analyzing and responding with:
- FastAPI class (core routing)
- Dependency injection system  
- Request/response handling

[0:30-0:45]
Prompt: "Show me how routing works"
Shows: AI navigating to specific files and explaining routing code

[0:45-0:60]
"In 30 seconds, we understood a massive codebase"
Shows: File tree with key components highlighted
```

**File**: `lesson-1-3-fastapi-analysis.mp4`

---

## Video 4: "Agent Creation Demo" (60 seconds)

### Script:
```
[0:00-0:05] "Let's create a specialized code review agent"
[Screen: OpenCode.ai interface]

[0:05-0:20]
Command: /agent create code-reviewer
Shows: Agent configuration interface
Setting: Name: "Security Reviewer"
Setting: Focus: "Security vulnerabilities and best practices"

[0:20-0:35]
"Test our new agent"
Command: /agent security-reviewer
Prompt: "Review this authentication code for security issues"
Shows: Specialized security-focused response

[0:35-0:50]
"Compare with general agent"
Command: /agent general
Same prompt shows: More general coding advice

[0:50-0:60]
"Specialized agents give focused, expert responses"
Shows: Agent list with custom security-reviewer active
```

**File**: `lesson-1-4-agent-creation.mp4`

---

## Video 5: "Ghost CMS Refactoring Live" (60 seconds)

### Script:
```
[0:00-0:05] "Let's modernize callback hell in Ghost CMS"
[Screen: Ghost CMS codebase open]

[0:05-0:20]
Shows: Nested callback code (actual Ghost file)
"Here's the legacy callback pattern we need to fix"
Highlights: 3-level nested callbacks with error handling

[0:20-0:40]
Command: /mode build
Prompt: "Convert this callback function to async/await"
Shows: AI rewriting the function in real-time
- Callbacks → async/await
- Error handling → try/catch
- Maintains exact same functionality

[0:40-0:55]
"Before and after comparison"
Split screen: Original callback vs new async code
Shows: Same logic, modern patterns

[0:55-0:60]
"200,000 lines modernized, one function at a time"
```

**File**: `lesson-2-3-ghost-refactoring.mp4`

---

## Video 6: "Linux Kernel Navigation" (60 seconds)

### Script:
```
[0:00-0:05] "Navigating 500,000+ lines: Linux kernel networking"
[Screen: Linux kernel source]

[0:05-0:20]
Command: cd linux/net/
Command: opencode
Prompt: "Help me understand the TCP congestion control system"
Shows: AI analyzing massive codebase structure

[0:20-0:40]
AI Response shows:
- Main files: tcp_cubic.c, tcp_bbr.c
- Key structures: tcp_congestion_ops
- Entry points: tcp_register_congestion_control()
Shows: AI navigating between related files

[0:40-0:55]
Prompt: "Show me how Cubic algorithm works"
Shows: AI explaining specific algorithm implementation
Highlights: Key functions and data structures

[0:55-0:60]
"AI makes massive codebases comprehensible"
Shows: Complex kernel code with AI annotations
```

**File**: `lesson-2-5-kernel-navigation.mp4`