# Lesson 1.2: LLM Setup & API Connections - Real Implementation

## 🎯 What You'll Actually Do

By the end of this lesson, you will:
- Set up API keys for OpenAI, Anthropic, and Google AI
- Configure OpenCode.ai to work with multiple providers
- Test each connection with real prompts
- Switch between providers based on task type

**No theory. Just the actual setup steps.**

## 🎥 **Video: OpenCode.ai First Connection** (1 minute)

[![OpenCode.ai First Connection](../../videos/module-1/lesson-1-2-first-connection.mp4)](../../videos/module-1/lesson-1-2-first-connection.mp4)

**What You'll See**: Live demonstration of connecting to multiple AI providers and testing each one
**Key Learning Points**: 
- Testing OpenAI and Anthropic connections
- Provider switching in real-time
- Verifying multi-provider setup works correctly

**Video Content**: [`videos/module-1/lesson-1-2-first-connection.txt`](../../videos/module-1/lesson-1-2-first-connection.txt)
**Generated Video**: [`videos/module-1/lesson-1-2-first-connection.mp4`](../../videos/module-1/lesson-1-2-first-connection.mp4)

**Follow Along**: Complete your own provider setup and test connections

## 🔧 Step 1: Get Your API Keys

### OpenAI Setup (5 minutes)

1. **Go to**: https://platform.openai.com/api-keys
2. **Click**: "Create new secret key"
3. **Copy the key**: Starts with `sk-`
4. **Important**: Copy it now - you can't see it again

**Cost**: ~$5-10/month for learning (set billing limits)

### Anthropic Claude Setup (5 minutes)

1. **Go to**: https://console.anthropic.com/
2. **Click**: "Get API Keys" 
3. **Create key**: Name it "opencode-learning"
4. **Copy the key**: Starts with `sk-ant-`

**Cost**: Similar to OpenAI, often cheaper for analysis tasks

### Google AI Setup (Optional - 3 minutes)

1. **Go to**: https://aistudio.google.com/app/apikey
2. **Click**: "Create API Key"
3. **Copy the key**: Format varies

**Cost**: Often has generous free tier

## 🛠️ Step 2: Configure OpenCode.ai

### Method 1: Environment Variables (Recommended)

Create a secure config file:
```bash
# Create secure environment file
touch ~/.opencode_env
chmod 600 ~/.opencode_env

# Add your keys (replace with actual keys)
echo "OPENAI_API_KEY=sk-your-openai-key-here" >> ~/.opencode_env
echo "ANTHROPIC_API_KEY=sk-ant-your-anthropic-key-here" >> ~/.opencode_env
echo "GOOGLE_AI_API_KEY=your-google-key-here" >> ~/.opencode_env

# Load environment variables
source ~/.opencode_env

# Add to your shell profile for persistence
echo "source ~/.opencode_env" >> ~/.bashrc  # or ~/.zshrc
```

### Method 2: OpenCode.ai Configuration

```bash
# Start OpenCode.ai
opencode

# Configure OpenAI (primary)
/config set provider openai
/config set openai.api_key $OPENAI_API_KEY
/config set openai.model gpt-4

# Configure Anthropic (secondary)  
/config set anthropic.api_key $ANTHROPIC_API_KEY
/config set anthropic.model claude-3-sonnet-20240229

# Configure Google AI (optional)
/config set google.api_key $GOOGLE_AI_API_KEY
/config set google.model gemini-pro
```

## 🎥 **Video: Build Mode vs Plan Mode** (1 minute)

[![Build Mode vs Plan Mode](../../videos/module-1/lesson-1-2-build-mode-demo.mp4)](../../videos/module-1/lesson-1-2-build-mode-demo.mp4)

**What You'll See**: Critical difference between Plan mode (read-only) and Build mode (file editing)
**Key Learning Points**: 
- Why Plan mode is limited for real development
- How Build mode creates actual files
- Professional development requires Build mode

**Video Content**: [`videos/module-1/lesson-1-2-build-mode-demo.txt`](../../videos/module-1/lesson-1-2-build-mode-demo.txt)
**Generated Video**: [`videos/module-1/lesson-1-2-build-mode-demo.mp4`](../../videos/module-1/lesson-1-2-build-mode-demo.mp4)

**Professional Tip**: Always use Build mode for development work - Plan mode is only for analysis!

## 🧪 Step 3: Test Each Provider

### Test OpenAI Connection

In OpenCode.ai terminal:
```
/provider openai
/ask "Write a simple 'Hello World' function in Python"
```

**Expected Output**: Python function with proper syntax and explanation.

### Test Anthropic Connection  

```
/provider anthropic
/ask "Analyze this code for potential issues: def divide(a, b): return a / b"
```

**Expected Output**: Analysis mentioning division by zero risk.

### Test Google AI Connection

```
/provider google  
/ask "Optimize this SQL query: SELECT * FROM users WHERE age > 18 AND status = 'active'"
```

**Expected Output**: Query optimization suggestions.

## ⚙️ Step 4: Provider Switching Setup

### Automatic Provider Selection

Configure OpenCode.ai to automatically choose the best provider:

```bash
# In OpenCode.ai configuration
/config set auto_switch true

# Set provider preferences by task type
/config set provider.code_generation openai
/config set provider.code_analysis anthropic  
/config set provider.optimization google
/config set provider.debugging openai
```

### Manual Provider Switching

Learn the commands to switch providers mid-session:

```bash
# Switch to specific provider
/provider openai      # For complex code generation
/provider anthropic   # For code analysis and review
/provider google      # For performance optimization

# Check current provider
/provider status

# List all configured providers
/provider list
```

## 🔍 Step 5: Provider Comparison Exercise

### Real Comparison Test

Ask the same question to all providers and compare:

**Test Prompt**: "Create a Python class for a bank account with deposit, withdraw, and balance methods. Include error handling."

#### OpenAI Result:
```
/provider openai
/ask "Create a Python class for a bank account with deposit, withdraw, and balance methods. Include error handling."
```

#### Anthropic Result:
```
/provider anthropic  
/ask "Create a Python class for a bank account with deposit, withdraw, and balance methods. Include error handling."
```

#### Google AI Result:
```
/provider google
/ask "Create a Python class for a bank account with deposit, withdraw, and balance methods. Include error handling."
```

### Document the Differences

Create a comparison table:

| Provider | Code Quality | Explanation Detail | Error Handling | Best For |
|----------|--------------|-------------------|----------------|----------|
| OpenAI | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | Complex logic |
| Anthropic | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | Code analysis |
| Google | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ | Performance |

## 🚨 Step 6: Troubleshooting Common Issues

### Issue 1: "API Key Invalid" Error

**Check your key format**:
```bash
# OpenAI keys start with 'sk-' and are ~51 characters
echo $OPENAI_API_KEY | wc -c

# Anthropic keys start with 'sk-ant-'  
echo $ANTHROPIC_API_KEY | head -c 7

# Test API key directly
curl -H "Authorization: Bearer $OPENAI_API_KEY" \
  https://api.openai.com/v1/models
```

**Solution**: Regenerate key if format is wrong.

### Issue 2: "Rate Limited" Error

**Check your usage**:
```bash
# In OpenCode.ai
/usage show
/limits check
```

**Solution**: Wait or upgrade your plan.

### Issue 3: "Network Error" / Connection Timeout

**Test connectivity**:
```bash
# Test OpenAI
curl -I https://api.openai.com/v1/models

# Test Anthropic  
curl -I https://api.anthropic.com/v1/messages

# Test Google AI
curl -I https://generativelanguage.googleapis.com/v1/models
```

**Corporate Network Solution**:
```bash
# Configure proxy if needed
export HTTPS_PROXY=http://proxy.company.com:8080
/config set network.proxy $HTTPS_PROXY
```

## 💰 Step 7: Cost Management Setup

### Set Spending Limits

```bash
# In OpenCode.ai
/config set openai.monthly_limit 20.00
/config set anthropic.monthly_limit 15.00  
/config set google.monthly_limit 10.00

# Enable usage tracking
/config set track_usage true
/config set warn_at_80_percent true
```

### Monitor Usage

```bash
# Check current usage
/usage today      # Today's API calls and costs
/usage week       # Weekly summary
/usage month      # Monthly summary

# Get cost breakdown by provider
/costs breakdown
```

## ✅ Validation: Test Your Setup

Run these commands to verify everything works:

```bash
# Test all providers with the same prompt
echo "Testing all providers..."

/provider openai
/ask "What's 2+2?"

/provider anthropic  
/ask "What's 2+2?"

/provider google
/ask "What's 2+2?"

# Check configuration
/config show
/provider list
/usage summary
```

**Success Criteria**: All three providers respond correctly to the test prompt.

## 🎯 Real-World Provider Strategy

### Use OpenAI For:
- Complex code generation
- Algorithm development  
- Multi-step reasoning
- Creative problem solving

### Use Anthropic For:
- Code analysis and review
- Security vulnerability assessment
- Large codebase understanding
- Detailed explanations

### Use Google AI For:
- Performance optimization
- System-level programming
- Quick queries (cheaper)
- Batch processing tasks

## 🚀 Next Steps

Now that you have all providers working:

1. **Practice switching** between providers during development
2. **Monitor your costs** for the first week
3. **Document which provider** works best for your specific tasks
4. **Set up team sharing** if working with others

**Ready for Lesson 1.3**: Real codebase analysis using your multi-provider setup.

---

**You now have a professional multi-LLM setup that experienced developers use in production environments.**