# Lesson 1.1: OpenCode.ai Professional Installation & Environment Setup

## 📋 Lesson Information

**Duration**: 3 hours  
**Module**: Module 1 - OpenCode.ai Fundamentals  
**Prerequisites**: 2+ years programming experience, terminal proficiency, modern development environment  
**Target Audience**: Experienced programmers seeking AI-assisted development mastery

## 🎯 Learning Objectives

By the end of this lesson, students will be able to:

- **Install OpenCode.ai** on production development environments (macOS, Linux, Windows/WSL)
- **Validate system requirements** and optimize environment for professional AI-assisted development
- **Configure terminal integration** with preferred emulators for maximum productivity
- **Troubleshoot installation issues** independently using systematic diagnostic approaches

### Alignment with Course Requirements
> **Note**: This lesson directly supports the following requirements from COURSE_REQUIREMENTS.md:
> - Install and configure OpenCode.ai with multiple LLM providers
> - Success criterion: OpenCode.ai working with 2+ different LLM providers
> - Module objective: Master setup, configuration, and basic usage for professional development

---

## 📚 Theory: Professional Installation Foundations

### Core Installation Principles

#### Enterprise-Grade Setup Considerations
- **Environment Isolation**: Separate development and production configurations
- **Version Management**: Maintaining consistent versions across team environments
- **Security First**: Secure credential storage and access management
- **Performance Optimization**: System resource allocation for AI-assisted workflows

#### Terminal Emulator Optimization
Modern AI-assisted development requires terminal emulators optimized for:
- **GPU Acceleration**: Smooth rendering of complex output and interactions
- **Unicode Support**: Proper display of AI-generated content and symbols  
- **Session Management**: Persistent sessions for long development workflows
- **Customization**: Themes and configurations that enhance AI tool visibility

### Technical Architecture Overview

```
Development Environment Stack:
┌─────────────────────────────────────┐
│           OpenCode.ai               │ ← AI Assistant Layer
├─────────────────────────────────────┤
│        Terminal Emulator           │ ← Interface Layer
│    (WezTerm/Alacritty/Ghostty)    │
├─────────────────────────────────────┤
│         Shell Environment          │ ← Shell Layer
│        (Bash/Zsh/Fish)            │
├─────────────────────────────────────┤
│      Operating System             │ ← System Layer
│   (macOS/Linux/Windows WSL)       │
└─────────────────────────────────────┘
```

---

## 🛠️ Hands-On Practice

### Practice Session 1: System Requirements Validation

**Duration**: 30 minutes  
**Objective**: Verify and optimize system for professional OpenCode.ai usage

#### Setup Validation
```bash
# System resource check (minimum requirements)
# RAM: 8GB minimum, 16GB+ recommended
free -h || vm_stat || systeminfo | findstr "Total Physical Memory"

# Available disk space (5GB+ required)  
df -h / || diskpart || wmic logicaldisk get size,freespace,caption

# Network connectivity validation
curl -I https://api.openai.com/v1/models
curl -I https://api.anthropic.com/v1/messages
```

#### Terminal Emulator Assessment
```bash
# Check current terminal capabilities
echo $TERM
echo $COLORTERM

# GPU acceleration validation
glxinfo | grep "direct rendering" || system_profiler SPDisplaysDataType
```

**Expected Results**: 
- ✅ System meets minimum requirements (8GB RAM, 5GB storage)
- ✅ Network access to major LLM providers confirmed
- ✅ Terminal supports modern features (256+ colors, Unicode)

### Practice Session 2: OpenCode.ai Installation

**Duration**: 45 minutes  
**Objective**: Install OpenCode.ai using production-ready methods

#### Platform-Specific Installation

**macOS (Homebrew - Recommended)**:
```bash
# Install via Homebrew for version management
brew tap opencode-ai/tap
brew install opencode

# Verify installation
opencode --version
which opencode
```

**Linux (Package Manager)**:
```bash
# Ubuntu/Debian
curl -fsSL https://get.opencode.ai/install.sh | bash
echo 'export PATH="$HOME/.opencode/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc

# Verify installation
opencode --version
opencode config doctor
```

**Windows WSL (Enterprise Setup)**:
```bash
# WSL2 Ubuntu environment (recommended for Windows)
curl -fsSL https://get.opencode.ai/install.sh | bash
echo 'export PATH="$HOME/.opencode/bin:$PATH"' >> ~/.bashrc

# Configure WSL integration
export OPENCODE_WSL_INTEGRATION=true
```

#### Installation Verification
```bash
# Comprehensive installation check
opencode --help
opencode config show
opencode providers list
```

**Expected Results**:
- ✅ OpenCode.ai binary installed and accessible
- ✅ Version information displays correctly
- ✅ Configuration system responsive
- ✅ Provider framework available

### Practice Session 3: Terminal Emulator Configuration

**Duration**: 45 minutes  
**Objective**: Optimize terminal emulator for AI-assisted development

#### WezTerm Configuration (Recommended)
Create `~/.wezterm.lua`:
```lua
local wezterm = require 'wezterm'

return {
  -- AI-optimized settings
  font = wezterm.font('JetBrains Mono', { weight = 'Medium' }),
  font_size = 13.0,
  
  -- Enhanced visibility for AI outputs
  color_scheme = 'Tokyo Night',
  window_background_opacity = 0.95,
  
  -- Performance optimization
  front_end = "WebGpu",
  webgpu_power_preference = "HighPerformance",
  
  -- Productivity features
  scrollback_lines = 10000,
  enable_tab_bar = true,
  hide_tab_bar_if_only_one_tab = false,
}
```

#### Alacritty Configuration Alternative
Create `~/.config/alacritty/alacritty.yml`:
```yaml
# AI development optimized configuration
font:
  normal:
    family: 'JetBrains Mono'
    style: Regular
  size: 13.0

# Color scheme for AI tool visibility
colors:
  primary:
    background: '#1a1b26'
    foreground: '#c0caf5'

# Performance settings
draw_bold_text_with_bright_colors: true
live_config_reload: true

# Scrollback for long AI conversations
scrolling:
  history: 10000
```

#### Verification Steps
```bash
# Test terminal features required for OpenCode.ai
echo -e "\033[38;2;255;100;0mColor test - RGB support\033[0m"
echo -e "\u2713 \u2717 \u27A4 Unicode test"
printf "\033[2J\033[H" # Clear screen test
```

**Expected Results**:
- ✅ Font renders clearly with good readability
- ✅ Colors display correctly with AI tool themes
- ✅ Unicode symbols render properly
- ✅ Performance feels smooth and responsive

---

## 🧪 Practical Exercise

### Exercise: Professional Development Environment Setup

**Duration**: 60 minutes  
**Complexity**: Appropriate for experienced developers with system administration skills  
**Individual Exercise**: Complete independently with validation checkpoints

#### Scenario
You're joining a development team that uses OpenCode.ai for AI-assisted development. You need to set up a professional, consistent environment that matches team standards while optimizing for your personal productivity preferences.

#### Requirements

**Functional Requirements**:
- Install OpenCode.ai using reproducible, version-controlled method
- Configure terminal emulator optimized for AI development workflows
- Implement environment configuration that can be shared/documented for team consistency
- Validate installation meets all technical requirements for professional usage

**Technical Requirements**:
- Installation method must support version pinning and team consistency
- Terminal configuration must support extended scrollback (5000+ lines minimum)
- Environment must handle Unicode and extended character sets properly
- Setup must be reproducible on clean system (documented installation steps)

#### Deliverables
- [ ] **Installation Documentation**: Step-by-step reproducible installation process
- [ ] **Configuration Files**: Terminal emulator config optimized for AI development
- [ ] **Validation Report**: System verification demonstrating all requirements met
- [ ] **Team Sharing Guide**: How teammates can replicate your setup

#### Assessment Criteria
- **Technical Accuracy** (40%): Correct installation, proper configuration, all features working
- **Professional Quality** (30%): Reproducible setup, proper documentation, team-ready approach
- **Optimization** (20%): Performance tuning, productivity enhancements, thoughtful customization
- **Documentation** (10%): Clear instructions, troubleshooting notes, sharing methodology

---

## 🤔 Troubleshooting

### Common Installation Issues

#### Issue 1: Permission Denied During Installation
**Symptoms**: 
- `Permission denied` errors during install script execution
- Unable to write to `/usr/local/bin` or system directories
- Installation appears to succeed but binary not found

**Root Cause**: Insufficient permissions or incorrect installation path
**Professional Solution**:
```bash
# Check current user permissions
whoami
groups

# Use user-local installation (recommended for development)
curl -fsSL https://get.opencode.ai/install.sh | OPENCODE_INSTALL_DIR="$HOME/.local/bin" bash

# Update PATH in shell configuration
echo 'export PATH="$HOME/.local/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc

# Verify installation
which opencode && opencode --version
```

#### Issue 2: Terminal Emulator Compatibility Problems
**Symptoms**:
- Garbled text or missing characters in OpenCode.ai interface
- Color scheme appears incorrect or washed out
- Poor performance or laggy responses

**Root Cause**: Terminal emulator lacks required features or optimizations
**Professional Solution**:
```bash
# Diagnose terminal capabilities
echo "Term: $TERM"
echo "Colors: $(tput colors)"
infocmp | grep -E "(colors|rgb)"

# Test Unicode support
python3 -c "print('✓ ✗ → ▸ Unicode test')"

# Performance test
time (for i in {1..100}; do echo "Performance test line $i"; done)
```

**Recommended Action**: Switch to professional terminal emulator (WezTerm, Alacritty, or Ghostty)

#### Issue 3: Network Connectivity and Firewall Issues
**Symptoms**:
- Installation hangs during download
- OpenCode.ai reports connection errors
- Provider authentication fails

**Root Cause**: Corporate firewall, proxy, or network restrictions
**Professional Solution**:
```bash
# Diagnose network connectivity
curl -v https://api.openai.com/v1/models
dig api.openai.com
traceroute api.openai.com

# Configure proxy if required (corporate environments)
export HTTPS_PROXY=http://proxy.company.com:8080
export HTTP_PROXY=http://proxy.company.com:8080

# Test with proxy configuration
curl --proxy $HTTPS_PROXY https://api.openai.com/v1/models
```

### Advanced Troubleshooting

#### Performance Optimization Issues
```bash
# System resource monitoring during OpenCode.ai usage
top -p $(pgrep opencode)
htop -p $(pgrep opencode)

# Memory usage analysis
ps aux | grep opencode
/usr/bin/time -v opencode --version

# I/O performance check
iostat -x 1 5  # Linux
sudo dtruss -n opencode  # macOS
```

#### Configuration Validation
```bash
# Comprehensive system check
opencode config doctor --verbose
opencode debug --system-info
opencode test --installation
```

---

## 📝 Reflection Questions

### Technical Understanding
1. **How does your OpenCode.ai installation approach support team consistency and reproducibility?**
2. **What are the trade-offs between system-wide installation versus user-local installation in professional environments?**
3. **How would you adapt this installation process for a Docker-based development environment?**

### Professional Application
1. **How would you roll out OpenCode.ai installation across a development team of 20+ engineers?**
2. **What installation and configuration standards would you establish for your organization?**
3. **How would you handle version management and updates in a production development environment?**

### Optimization and Troubleshooting
1. **What performance metrics would you monitor to ensure optimal OpenCode.ai operation?**
2. **How would you troubleshoot installation issues on unfamiliar systems or restrictive corporate environments?**  
3. **What backup plans would you implement if primary installation methods fail?**

---

## 🚀 Next Steps

### Immediate Actions
- [ ] **Validate Installation**: Run comprehensive verification commands
- [ ] **Optimize Configuration**: Fine-tune terminal emulator settings for your workflow
- [ ] **Document Setup**: Create reproducible installation guide for your environment
- [ ] **Test Integration**: Verify OpenCode.ai works with your existing development tools

### Preparation for Next Lesson
**Next Lesson**: Lesson 1.2 - LLM Provider Configuration & Authentication
- Review API documentation for OpenAI, Anthropic, and Google AI
- Obtain API keys from at least two different providers  
- Research API rate limits and pricing considerations for professional usage
- Prepare example projects for provider testing and comparison

### Module Progress
**Module 1 Completion**: 14% complete after this lesson
**Remaining Objectives**: 
- LLM provider configuration and authentication
- Project initialization and codebase analysis
- Terminal UI navigation mastery
- Question mode for code exploration
- Environment customization and productivity optimization
- Professional troubleshooting and best practices

---

## 📚 Resources

### Required Reading
- [OpenCode.ai Installation Guide](https://docs.opencode.ai/installation) - Official installation documentation
- [Terminal Emulator Comparison](https://docs.opencode.ai/terminal-setup) - Professional setup recommendations
- [System Requirements](https://docs.opencode.ai/requirements) - Detailed technical specifications

### Supplementary Materials
- **Terminal Configuration Examples**: Pre-configured setups for popular emulators
- **Corporate Installation Guide**: Enterprise deployment considerations
- **Troubleshooting Database**: Community-sourced solutions for common issues

### Practice Resources
- **Installation Scripts**: Automated setup scripts for different environments
- **Configuration Templates**: Professional terminal emulator configurations
- **Validation Tools**: Scripts to verify installation completeness and performance

### External References
- [WezTerm Configuration Documentation](https://wezfurlong.org/wezterm/config/files.html)
- [Alacritty Configuration Guide](https://github.com/alacritty/alacritty/blob/master/extra/man/alacritty.5.scd)
- [Professional Development Environment Best Practices](https://12factor.net/dev-prod-parity)

---

## 📊 Learning Assessment

### Self-Assessment Checklist
After completing this lesson, I can:

- [ ] **Install OpenCode.ai**: Reproduce installation on clean system using documented process
- [ ] **Configure Terminal**: Optimize emulator settings for AI development workflows
- [ ] **Validate Setup**: Run comprehensive checks to verify installation quality
- [ ] **Troubleshoot Issues**: Diagnose and resolve common installation problems independently

### Knowledge Check
1. **What are the minimum system requirements for professional OpenCode.ai usage, and why?**
2. **Which terminal emulator features are most critical for AI-assisted development workflows?**
3. **How would you validate that an OpenCode.ai installation meets professional standards?**

### Skill Validation
**Demonstrate**: Complete OpenCode.ai installation and configuration on a clean system
**Time Limit**: 45 minutes (realistic for experienced developers)
**Success Criteria**: 
- ✅ OpenCode.ai installed and functional
- ✅ Terminal emulator optimized for AI development
- ✅ Installation process documented and reproducible
- ✅ All system requirements validated and confirmed

---

## 🔧 Instructor Notes

### Teaching Focus
- **Key Points to Emphasize**: 
  - Professional installation methods over quick/simple approaches
  - Terminal emulator optimization significantly impacts daily productivity
  - Reproducible setups enable effective team collaboration
- **Common Student Struggles**: 
  - Corporate network restrictions and proxy configurations
  - Terminal emulator selection and configuration complexity
  - Version management and team consistency considerations
- **Time Management**: 
  - Allow extra time for network-related issues
  - Terminal configuration often takes longer than expected
  - Students may need help with unfamiliar system administration tasks

### Preparation Required
- **Setup Time**: 15 minutes to prepare demonstration environments
- **Materials Needed**: 
  - Clean virtual machines for installation demonstration
  - Corporate proxy settings for enterprise scenarios
  - Multiple terminal emulator configurations ready
- **Technical Requirements**: 
  - Reliable internet connection for downloads
  - Access to multiple operating systems for cross-platform demonstration
  - Backup installation methods in case primary approaches fail

### Assessment Guidance
- **Grading Rubric**: Focus on professional quality and reproducibility
- **Common Mistakes**: 
  - Skipping system requirements validation
  - Poor documentation of installation process
  - Terminal configuration that prioritizes aesthetics over functionality
- **Excellence Indicators**: 
  - Proactive troubleshooting and error handling
  - Thoughtful optimization for team environments
  - Clear, professional documentation suitable for enterprise use

---

**This lesson establishes the professional foundation required for all subsequent OpenCode.ai mastery development, ensuring students begin with enterprise-grade installations optimized for serious AI-assisted development work.**