// enhanced-templates.js - Generate Claude Flow v2.0.0 enhanced templates
import { readFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Load template files
const loadTemplate = (filename) => {
  try {
    return readFileSync(join(__dirname, filename), 'utf8');
  } catch (error) {
    // Silently fall back to hardcoded templates if files not found
    // This handles npm packaging scenarios where template files may not be included
    return null;
  }
};

export function createEnhancedClaudeMd() {
  const template = loadTemplate('CLAUDE.md');
  if (!template) {
    // Fallback to hardcoded if template file not found
    return createEnhancedClaudeMdFallback();
  }
  return template;
}

export function createEnhancedSettingsJson() {
  const template = loadTemplate('settings.json');
  if (!template) {
    return createEnhancedSettingsJsonFallback();
  }
  return template;
}

export function createWrapperScript(type = 'unix') {
  // For unix, use the universal wrapper that works in both CommonJS and ES modules
  if (type === 'unix') {
    const universalTemplate = loadTemplate('claude-flow-universal');
    if (universalTemplate) {
      return universalTemplate;
    }
  }

  const filename =
    type === 'unix' ? 'claude-flow' : type === 'windows' ? 'claude-flow.bat' : 'claude-flow.ps1';

  const template = loadTemplate(filename);
  if (!template) {
    return createWrapperScriptFallback(type);
  }
  return template;
}

export function createCommandDoc(category, command) {
  const template = loadTemplate(`commands/${category}/${command}.md`);
  if (!template) {
    // Silently fall back to generated documentation
    return createCommandDocFallback(category, command);
  }
  return template;
}

// Generate command documentation fallbacks
function createCommandDocFallback(category, command) {
  const docs = {
    analysis: {
      'bottleneck-detect': `# bottleneck-detect

Automatically detect performance bottlenecks in your swarm operations.

## Usage
\`\`\`bash
npx claude-flow analysis bottleneck-detect [options]
\`\`\`

## Options
- \`--swarm-id <id>\` - Target specific swarm
- \`--threshold <ms>\` - Performance threshold (default: 1000ms)
- \`--export <file>\` - Export results to file

## Examples
\`\`\`bash
# Detect bottlenecks in current swarm
npx claude-flow analysis bottleneck-detect

# Set custom threshold
npx claude-flow analysis bottleneck-detect --threshold 500

# Export results
npx claude-flow analysis bottleneck-detect --export bottlenecks.json
\`\`\`
`,
      'token-usage': `# token-usage

Analyze token usage patterns and optimize for efficiency.

## Usage
\`\`\`bash
npx claude-flow analysis token-usage [options]
\`\`\`

## Options
- \`--period <time>\` - Analysis period (1h, 24h, 7d, 30d)
- \`--by-agent\` - Break down by agent
- \`--by-operation\` - Break down by operation type

## Examples
\`\`\`bash
# Last 24 hours token usage
npx claude-flow analysis token-usage --period 24h

# By agent breakdown
npx claude-flow analysis token-usage --by-agent

# Export detailed report
npx claude-flow analysis token-usage --period 7d --export tokens.csv
\`\`\`
`,
      'performance-report': `# performance-report

Generate comprehensive performance reports for swarm operations.

## Usage
\`\`\`bash
npx claude-flow analysis performance-report [options]
\`\`\`

## Options
- \`--format <type>\` - Report format (json, html, markdown)
- \`--include-metrics\` - Include detailed metrics
- \`--compare <id>\` - Compare with previous swarm

## Examples
\`\`\`bash
# Generate HTML report
npx claude-flow analysis performance-report --format html

# Compare swarms
npx claude-flow analysis performance-report --compare swarm-123

# Full metrics report
npx claude-flow analysis performance-report --include-metrics --format markdown
\`\`\`
`,
    },
    automation: {
      'auto-agent': `# auto-agent

Automatically assign agents based on task analysis.

## Usage
\`\`\`bash
npx claude-flow automation auto-agent [options]
\`\`\`

## Options
- \`--task <description>\` - Task to analyze
- \`--max-agents <n>\` - Maximum agents to spawn
- \`--strategy <type>\` - Assignment strategy

## Examples
\`\`\`bash
# Auto-assign for task
npx claude-flow automation auto-agent --task "Build REST API"

# Limit agents
npx claude-flow automation auto-agent --task "Fix bugs" --max-agents 3

# Use specific strategy
npx claude-flow automation auto-agent --strategy specialized
\`\`\`
`,
      'smart-spawn': `# smart-spawn

Intelligently spawn agents based on workload analysis.

## Usage
\`\`\`bash
npx claude-flow automation smart-spawn [options]
\`\`\`

## Options
- \`--analyze\` - Analyze before spawning
- \`--threshold <n>\` - Spawn threshold
- \`--topology <type>\` - Preferred topology

## Examples
\`\`\`bash
# Smart spawn with analysis
npx claude-flow automation smart-spawn --analyze

# Set spawn threshold
npx claude-flow automation smart-spawn --threshold 5

# Force topology
npx claude-flow automation smart-spawn --topology hierarchical
\`\`\`
`,
      'workflow-select': `# workflow-select

Automatically select optimal workflow based on task type.

## Usage
\`\`\`bash
npx claude-flow automation workflow-select [options]
\`\`\`

## Options
- \`--task <description>\` - Task description
- \`--constraints <list>\` - Workflow constraints
- \`--preview\` - Preview without executing

## Examples
\`\`\`bash
# Select workflow for task
npx claude-flow automation workflow-select --task "Deploy to production"

# With constraints
npx claude-flow automation workflow-select --constraints "no-downtime,rollback"

# Preview mode
npx claude-flow automation workflow-select --task "Database migration" --preview
\`\`\`
`,
    },
    coordination: {
      'swarm-init': `# swarm-init

Initialize a new agent swarm with specified topology.

## Usage
\`\`\`bash
npx claude-flow swarm init [options]
\`\`\`

## Options
- \`--topology <type>\` - Swarm topology (mesh, hierarchical, ring, star)
- \`--max-agents <n>\` - Maximum number of agents
- \`--strategy <type>\` - Execution strategy (parallel, sequential, adaptive)

## Examples
\`\`\`bash
# Initialize hierarchical swarm
npx claude-flow swarm init --topology hierarchical

# With agent limit
npx claude-flow swarm init --topology mesh --max-agents 8

# Parallel execution
npx claude-flow swarm init --strategy parallel
\`\`\`
`,
      'agent-spawn': `# agent-spawn

Spawn a new agent in the current swarm.

## Usage
\`\`\`bash
npx claude-flow agent spawn [options]
\`\`\`

## Options
- \`--type <type>\` - Agent type (coder, researcher, analyst, tester, coordinator)
- \`--name <name>\` - Custom agent name
- \`--skills <list>\` - Specific skills (comma-separated)

## Examples
\`\`\`bash
# Spawn coder agent
npx claude-flow agent spawn --type coder

# With custom name
npx claude-flow agent spawn --type researcher --name "API Expert"

# With specific skills
npx claude-flow agent spawn --type coder --skills "python,fastapi,testing"
\`\`\`
`,
      'task-orchestrate': `# task-orchestrate

Orchestrate complex tasks across the swarm.

## Usage
\`\`\`bash
npx claude-flow task orchestrate [options]
\`\`\`

## Options
- \`--task <description>\` - Task description
- \`--strategy <type>\` - Orchestration strategy
- \`--priority <level>\` - Task priority (low, medium, high, critical)

## Examples
\`\`\`bash
# Orchestrate development task
npx claude-flow task orchestrate --task "Implement user authentication"

# High priority task
npx claude-flow task orchestrate --task "Fix production bug" --priority critical

# With specific strategy
npx claude-flow task orchestrate --task "Refactor codebase" --strategy parallel
\`\`\`
`,
    },
    github: {
      'github-swarm': `# github-swarm

Create a specialized swarm for GitHub repository management.

## Usage
\`\`\`bash
npx claude-flow github swarm [options]
\`\`\`

## Options
- \`--repository <owner/repo>\` - Target repository
- \`--agents <n>\` - Number of specialized agents
- \`--focus <area>\` - Focus area (maintenance, features, security)

## Examples
\`\`\`bash
# Create GitHub swarm
npx claude-flow github swarm --repository myorg/myrepo

# With specific focus
npx claude-flow github swarm --repository myorg/myrepo --focus security

# Custom agent count
npx claude-flow github swarm --repository myorg/myrepo --agents 6
\`\`\`
`,
      'repo-analyze': `# repo-analyze

Deep analysis of GitHub repository with AI insights.

## Usage
\`\`\`bash
npx claude-flow github repo-analyze [options]
\`\`\`

## Options
- \`--repository <owner/repo>\` - Repository to analyze
- \`--deep\` - Enable deep analysis
- \`--include <areas>\` - Include specific areas (issues, prs, code, commits)

## Examples
\`\`\`bash
# Basic analysis
npx claude-flow github repo-analyze --repository myorg/myrepo

# Deep analysis
npx claude-flow github repo-analyze --repository myorg/myrepo --deep

# Specific areas
npx claude-flow github repo-analyze --repository myorg/myrepo --include issues,prs
\`\`\`
`,
      'pr-enhance': `# pr-enhance

AI-powered pull request enhancements.

## Usage
\`\`\`bash
npx claude-flow github pr-enhance [options]
\`\`\`

## Options
- \`--pr-number <n>\` - Pull request number
- \`--add-tests\` - Add missing tests
- \`--improve-docs\` - Improve documentation
- \`--check-security\` - Security review

## Examples
\`\`\`bash
# Enhance PR
npx claude-flow github pr-enhance --pr-number 123

# Add tests
npx claude-flow github pr-enhance --pr-number 123 --add-tests

# Full enhancement
npx claude-flow github pr-enhance --pr-number 123 --add-tests --improve-docs
\`\`\`
`,
      'issue-triage': `# issue-triage

Intelligent issue classification and triage.

## Usage
\`\`\`bash
npx claude-flow github issue-triage [options]
\`\`\`

## Options
- \`--repository <owner/repo>\` - Target repository
- \`--auto-label\` - Automatically apply labels
- \`--assign\` - Auto-assign to team members

## Examples
\`\`\`bash
# Triage issues
npx claude-flow github issue-triage --repository myorg/myrepo

# With auto-labeling
npx claude-flow github issue-triage --repository myorg/myrepo --auto-label

# Full automation
npx claude-flow github issue-triage --repository myorg/myrepo --auto-label --assign
\`\`\`
`,
      'code-review': `# code-review

Automated code review with swarm intelligence.

## Usage
\`\`\`bash
npx claude-flow github code-review [options]
\`\`\`

## Options
- \`--pr-number <n>\` - Pull request to review
- \`--focus <areas>\` - Review focus (security, performance, style)
- \`--suggest-fixes\` - Suggest code fixes

## Examples
\`\`\`bash
# Review PR
npx claude-flow github code-review --pr-number 456

# Security focus
npx claude-flow github code-review --pr-number 456 --focus security

# With fix suggestions
npx claude-flow github code-review --pr-number 456 --suggest-fixes
\`\`\`
`,
    },
    hooks: {
      'pre-task': `# pre-task

Hook executed before task execution.

## Usage
\`\`\`bash
npx claude-flow hook pre-task [options]
\`\`\`

## Options
- \`--description <text>\` - Task description
- \`--auto-spawn-agents\` - Automatically spawn required agents
- \`--load-context\` - Load previous context

## Examples
\`\`\`bash
# Basic pre-task hook
npx claude-flow hook pre-task --description "Building API endpoints"

# With auto-spawn
npx claude-flow hook pre-task --description "Complex refactoring" --auto-spawn-agents

# Load context
npx claude-flow hook pre-task --description "Continue feature" --load-context
\`\`\`
`,
      'post-task': `# post-task

Hook executed after task completion.

## Usage
\`\`\`bash
npx claude-flow hook post-task [options]
\`\`\`

## Options
- \`--task-id <id>\` - Task identifier
- \`--analyze-performance\` - Analyze task performance
- \`--update-memory\` - Update swarm memory

## Examples
\`\`\`bash
# Basic post-task
npx claude-flow hook post-task --task-id task-123

# With performance analysis
npx claude-flow hook post-task --task-id task-123 --analyze-performance

# Update memory
npx claude-flow hook post-task --task-id task-123 --update-memory
\`\`\`
`,
      'pre-edit': `# pre-edit

Hook executed before file edits.

## Usage
\`\`\`bash
npx claude-flow hook pre-edit [options]
\`\`\`

## Options
- \`--file <path>\` - File to be edited
- \`--validate-syntax\` - Validate syntax before edit
- \`--backup\` - Create backup

## Examples
\`\`\`bash
# Pre-edit hook
npx claude-flow hook pre-edit --file src/api.js

# With validation
npx claude-flow hook pre-edit --file src/api.js --validate-syntax

# Create backup
npx claude-flow hook pre-edit --file src/api.js --backup
\`\`\`
`,
      'post-edit': `# post-edit

Hook executed after file edits.

## Usage
\`\`\`bash
npx claude-flow hook post-edit [options]
\`\`\`

## Options
- \`--file <path>\` - Edited file
- \`--memory-key <key>\` - Memory storage key
- \`--format\` - Auto-format code

## Examples
\`\`\`bash
# Post-edit hook
npx claude-flow hook post-edit --file src/api.js

# Store in memory
npx claude-flow hook post-edit --file src/api.js --memory-key "api-changes"

# With formatting
npx claude-flow hook post-edit --file src/api.js --format
\`\`\`
`,
      'session-end': `# session-end

Hook executed at session end.

## Usage
\`\`\`bash
npx claude-flow hook session-end [options]
\`\`\`

## Options
- \`--export-metrics\` - Export session metrics
- \`--generate-summary\` - Generate session summary
- \`--persist-state\` - Save session state

## Examples
\`\`\`bash
# End session
npx claude-flow hook session-end

# Export metrics
npx claude-flow hook session-end --export-metrics

# Full closure
npx claude-flow hook session-end --export-metrics --generate-summary --persist-state
\`\`\`
`,
    },
    memory: {
      'memory-usage': `# memory-usage

Manage persistent memory storage.

## Usage
\`\`\`bash
npx claude-flow memory usage [options]
\`\`\`

## Options
- \`--action <type>\` - Action (store, retrieve, list, clear)
- \`--key <key>\` - Memory key
- \`--value <data>\` - Data to store (JSON)

## Examples
\`\`\`bash
# Store memory
npx claude-flow memory usage --action store --key "project-config" --value '{"api": "v2"}'

# Retrieve memory
npx claude-flow memory usage --action retrieve --key "project-config"

# List all keys
npx claude-flow memory usage --action list
\`\`\`
`,
      'memory-persist': `# memory-persist

Persist memory across sessions.

## Usage
\`\`\`bash
npx claude-flow memory persist [options]
\`\`\`

## Options
- \`--export <file>\` - Export to file
- \`--import <file>\` - Import from file
- \`--compress\` - Compress memory data

## Examples
\`\`\`bash
# Export memory
npx claude-flow memory persist --export memory-backup.json

# Import memory
npx claude-flow memory persist --import memory-backup.json

# Compressed export
npx claude-flow memory persist --export memory.gz --compress
\`\`\`
`,
      'memory-search': `# memory-search

Search through stored memory.

## Usage
\`\`\`bash
npx claude-flow memory search [options]
\`\`\`

## Options
- \`--query <text>\` - Search query
- \`--pattern <regex>\` - Pattern matching
- \`--limit <n>\` - Result limit

## Examples
\`\`\`bash
# Search memory
npx claude-flow memory search --query "authentication"

# Pattern search
npx claude-flow memory search --pattern "api-.*"

# Limited results
npx claude-flow memory search --query "config" --limit 10
\`\`\`
`,
    },
    monitoring: {
      'swarm-monitor': `# swarm-monitor

Real-time swarm monitoring.

## Usage
\`\`\`bash
npx claude-flow swarm monitor [options]
\`\`\`

## Options
- \`--interval <ms>\` - Update interval
- \`--metrics\` - Show detailed metrics
- \`--export\` - Export monitoring data

## Examples
\`\`\`bash
# Start monitoring
npx claude-flow swarm monitor

# Custom interval
npx claude-flow swarm monitor --interval 5000

# With metrics
npx claude-flow swarm monitor --metrics
\`\`\`
`,
      'agent-metrics': `# agent-metrics

View agent performance metrics.

## Usage
\`\`\`bash
npx claude-flow agent metrics [options]
\`\`\`

## Options
- \`--agent-id <id>\` - Specific agent
- \`--period <time>\` - Time period
- \`--format <type>\` - Output format

## Examples
\`\`\`bash
# All agents metrics
npx claude-flow agent metrics

# Specific agent
npx claude-flow agent metrics --agent-id agent-001

# Last hour
npx claude-flow agent metrics --period 1h
\`\`\`
`,
      'real-time-view': `# real-time-view

Real-time view of swarm activity.

## Usage
\`\`\`bash
npx claude-flow monitoring real-time-view [options]
\`\`\`

## Options
- \`--filter <type>\` - Filter view
- \`--highlight <pattern>\` - Highlight pattern
- \`--tail <n>\` - Show last N events

## Examples
\`\`\`bash
# Start real-time view
npx claude-flow monitoring real-time-view

# Filter errors
npx claude-flow monitoring real-time-view --filter errors

# Highlight pattern
npx claude-flow monitoring real-time-view --highlight "API"
\`\`\`
`,
    },
    optimization: {
      'topology-optimize': `# topology-optimize

Optimize swarm topology for current workload.

## Usage
\`\`\`bash
npx claude-flow optimization topology-optimize [options]
\`\`\`

## Options
- \`--analyze-first\` - Analyze before optimizing
- \`--target <metric>\` - Optimization target
- \`--apply\` - Apply optimizations

## Examples
\`\`\`bash
# Analyze and suggest
npx claude-flow optimization topology-optimize --analyze-first

# Optimize for speed
npx claude-flow optimization topology-optimize --target speed

# Apply changes
npx claude-flow optimization topology-optimize --target efficiency --apply
\`\`\`
`,
      'parallel-execute': `# parallel-execute

Execute tasks in parallel for maximum efficiency.

## Usage
\`\`\`bash
npx claude-flow optimization parallel-execute [options]
\`\`\`

## Options
- \`--tasks <file>\` - Task list file
- \`--max-parallel <n>\` - Maximum parallel tasks
- \`--strategy <type>\` - Execution strategy

## Examples
\`\`\`bash
# Execute task list
npx claude-flow optimization parallel-execute --tasks tasks.json

# Limit parallelism
npx claude-flow optimization parallel-execute --tasks tasks.json --max-parallel 5

# Custom strategy
npx claude-flow optimization parallel-execute --strategy adaptive
\`\`\`
`,
      'cache-manage': `# cache-manage

Manage operation cache for performance.

## Usage
\`\`\`bash
npx claude-flow optimization cache-manage [options]
\`\`\`

## Options
- \`--action <type>\` - Action (view, clear, optimize)
- \`--max-size <mb>\` - Maximum cache size
- \`--ttl <seconds>\` - Time to live

## Examples
\`\`\`bash
# View cache stats
npx claude-flow optimization cache-manage --action view

# Clear cache
npx claude-flow optimization cache-manage --action clear

# Set limits
npx claude-flow optimization cache-manage --max-size 100 --ttl 3600
\`\`\`
`,
    },
    training: {
      'neural-train': `# neural-train

Train neural patterns from operations.

## Usage
\`\`\`bash
npx claude-flow training neural-train [options]
\`\`\`

## Options
- \`--data <source>\` - Training data source
- \`--model <name>\` - Target model
- \`--epochs <n>\` - Training epochs

## Examples
\`\`\`bash
# Train from recent ops
npx claude-flow training neural-train --data recent

# Specific model
npx claude-flow training neural-train --model task-predictor

# Custom epochs
npx claude-flow training neural-train --epochs 100
\`\`\`
`,
      'pattern-learn': `# pattern-learn

Learn patterns from successful operations.

## Usage
\`\`\`bash
npx claude-flow training pattern-learn [options]
\`\`\`

## Options
- \`--source <type>\` - Pattern source
- \`--threshold <score>\` - Success threshold
- \`--save <name>\` - Save pattern set

## Examples
\`\`\`bash
# Learn from all ops
npx claude-flow training pattern-learn

# High success only
npx claude-flow training pattern-learn --threshold 0.9

# Save patterns
npx claude-flow training pattern-learn --save optimal-patterns
\`\`\`
`,
      'model-update': `# model-update

Update neural models with new data.

## Usage
\`\`\`bash
npx claude-flow training model-update [options]
\`\`\`

## Options
- \`--model <name>\` - Model to update
- \`--incremental\` - Incremental update
- \`--validate\` - Validate after update

## Examples
\`\`\`bash
# Update all models
npx claude-flow training model-update

# Specific model
npx claude-flow training model-update --model agent-selector

# Incremental with validation
npx claude-flow training model-update --incremental --validate
\`\`\`
`,
    },
    workflows: {
      'workflow-create': `# workflow-create

Create reusable workflow templates.

## Usage
\`\`\`bash
npx claude-flow workflow create [options]
\`\`\`

## Options
- \`--name <name>\` - Workflow name
- \`--from-history\` - Create from history
- \`--interactive\` - Interactive creation

## Examples
\`\`\`bash
# Create workflow
npx claude-flow workflow create --name "deploy-api"

# From history
npx claude-flow workflow create --name "test-suite" --from-history

# Interactive mode
npx claude-flow workflow create --interactive
\`\`\`
`,
      'workflow-execute': `# workflow-execute

Execute saved workflows.

## Usage
\`\`\`bash
npx claude-flow workflow execute [options]
\`\`\`

## Options
- \`--name <name>\` - Workflow name
- \`--params <json>\` - Workflow parameters
- \`--dry-run\` - Preview execution

## Examples
\`\`\`bash
# Execute workflow
npx claude-flow workflow execute --name "deploy-api"

# With parameters
npx claude-flow workflow execute --name "test-suite" --params '{"env": "staging"}'

# Dry run
npx claude-flow workflow execute --name "deploy-api" --dry-run
\`\`\`
`,
      'workflow-export': `# workflow-export

Export workflows for sharing.

## Usage
\`\`\`bash
npx claude-flow workflow export [options]
\`\`\`

## Options
- \`--name <name>\` - Workflow to export
- \`--format <type>\` - Export format
- \`--include-history\` - Include execution history

## Examples
\`\`\`bash
# Export workflow
npx claude-flow workflow export --name "deploy-api"

# As YAML
npx claude-flow workflow export --name "test-suite" --format yaml

# With history
npx claude-flow workflow export --name "deploy-api" --include-history
\`\`\`
`,
    },
  };

  return (
    docs[category]?.[command] ||
    `# ${command}\n\nCommand documentation for ${command} in category ${category}.\n\nUsage:\n\`\`\`bash\nnpx claude-flow ${category} ${command} [options]\n\`\`\`\n`
  );
}

// Command categories and their commands
export const COMMAND_STRUCTURE = {
  analysis: ['bottleneck-detect', 'token-usage', 'performance-report'],
  automation: ['auto-agent', 'smart-spawn', 'workflow-select'],
  coordination: ['swarm-init', 'agent-spawn', 'task-orchestrate'],
  github: ['github-swarm', 'repo-analyze', 'pr-enhance', 'issue-triage', 'code-review'],
  hooks: ['pre-task', 'post-task', 'pre-edit', 'post-edit', 'session-end'],
  memory: ['memory-usage', 'memory-persist', 'memory-search'],
  monitoring: ['swarm-monitor', 'agent-metrics', 'real-time-view'],
  optimization: ['topology-optimize', 'parallel-execute', 'cache-manage'],
  training: ['neural-train', 'pattern-learn', 'model-update'],
  workflows: ['workflow-create', 'workflow-execute', 'workflow-export'],
};

// Helper script content
export function createHelperScript(name) {
  const scripts = {
    'setup-mcp.sh': `#!/bin/bash
# Setup MCP server for Claude Flow

echo "🚀 Setting up Claude Flow MCP server..."

# Check if claude command exists
if ! command -v claude &> /dev/null; then
    echo "❌ Error: Claude Code CLI not found"
    echo "Please install Claude Code first"
    exit 1
fi

# Add MCP server
echo "📦 Adding Claude Flow MCP server..."
claude mcp add claude-flow npx claude-flow mcp start

echo "✅ MCP server setup complete!"
echo "🎯 You can now use mcp__claude-flow__ tools in Claude Code"
`,
    'quick-start.sh': `#!/bin/bash
# Quick start guide for Claude Flow

echo "🚀 Claude Flow Quick Start"
echo "=========================="
echo ""
echo "1. Initialize a swarm:"
echo "   npx claude-flow swarm init --topology hierarchical"
echo ""
echo "2. Spawn agents:"
echo "   npx claude-flow agent spawn --type coder --name \"API Developer\""
echo ""
echo "3. Orchestrate tasks:"
echo "   npx claude-flow task orchestrate --task \"Build REST API\""
echo ""
echo "4. Monitor progress:"
echo "   npx claude-flow swarm monitor"
echo ""
echo "📚 For more examples, see .claude/commands/"
`,
    'github-setup.sh': `#!/bin/bash
# Setup GitHub integration for Claude Flow

echo "🔗 Setting up GitHub integration..."

# Check for gh CLI
if ! command -v gh &> /dev/null; then
    echo "⚠️  GitHub CLI (gh) not found"
    echo "Install from: https://cli.github.com/"
    echo "Continuing without GitHub features..."
else
    echo "✅ GitHub CLI found"
    
    # Check auth status
    if gh auth status &> /dev/null; then
        echo "✅ GitHub authentication active"
    else
        echo "⚠️  Not authenticated with GitHub"
        echo "Run: gh auth login"
    fi
fi

echo ""
echo "📦 GitHub swarm commands available:"
echo "  - npx claude-flow github swarm"
echo "  - npx claude-flow repo analyze"
echo "  - npx claude-flow pr enhance"
echo "  - npx claude-flow issue triage"
`,
  };

  return scripts[name] || '';
}

// Wrapper script fallbacks
function createWrapperScriptFallback(type) {
  if (type === 'unix') {
    // Return the universal ES module compatible wrapper
    return `#!/usr/bin/env node

/**
 * Claude Flow CLI - Universal Wrapper
 * Works in both CommonJS and ES Module projects
 */

// Use dynamic import to work in both CommonJS and ES modules
(async () => {
  const { spawn } = await import('child_process');
  const { resolve } = await import('path');
  const { fileURLToPath } = await import('url');
  
  try {
    // Try to use import.meta.url (ES modules)
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = resolve(__filename, '..');
  } catch {
    // Fallback for CommonJS
  }

  // Try multiple strategies to find claude-flow
  const strategies = [
    // 1. Local node_modules
    async () => {
      try {
        const localPath = resolve(process.cwd(), 'node_modules/.bin/claude-flow');
        const { existsSync } = await import('fs');
        if (existsSync(localPath)) {
          return spawn(localPath, process.argv.slice(2), { stdio: 'inherit' });
        }
      } catch {}
    },
    
    // 2. Parent node_modules (monorepo)
    async () => {
      try {
        const parentPath = resolve(process.cwd(), '../node_modules/.bin/claude-flow');
        const { existsSync } = await import('fs');
        if (existsSync(parentPath)) {
          return spawn(parentPath, process.argv.slice(2), { stdio: 'inherit' });
        }
      } catch {}
    },
    
    // 3. NPX with latest alpha version (prioritized over global)
    async () => {
      return spawn('npx', ['claude-flow@2.0.0-alpha.25', ...process.argv.slice(2)], { stdio: 'inherit' });
    }
  ];

  // Try each strategy
  for (const strategy of strategies) {
    try {
      const child = await strategy();
      if (child) {
        child.on('exit', (code) => process.exit(code || 0));
        child.on('error', (err) => {
          if (err.code !== 'ENOENT') {
            console.error('Error:', err);
            process.exit(1);
          }
        });
        return;
      }
    } catch {}
  }
  
  console.error('Could not find claude-flow. Please install it with: npm install claude-flow');
  process.exit(1);
})();`;
  } else if (type === 'windows') {
    return `@echo off
rem Claude Flow wrapper script for Windows

rem Check if package.json exists in current directory
if exist "%~dp0package.json" (
    rem Local development mode
    if exist "%~dp0src\\cli\\simple-cli.js" (
        node "%~dp0src\\cli\\simple-cli.js" %*
    ) else if exist "%~dp0dist\\cli.js" (
        node "%~dp0dist\\cli.js" %*
    ) else (
        echo Error: Could not find Claude Flow CLI files
        exit /b 1
    )
) else (
    rem Production mode - use npx alpha
    npx claude-flow@alpha %*
)`;
  } else if (type === 'powershell') {
    return `# Claude Flow wrapper script for PowerShell

$scriptPath = Split-Path -Parent $MyInvocation.MyCommand.Path

if (Test-Path "$scriptPath\\package.json") {
    # Local development mode
    if (Test-Path "$scriptPath\\src\\cli\\simple-cli.js") {
        & node "$scriptPath\\src\\cli\\simple-cli.js" $args
    } elseif (Test-Path "$scriptPath\\dist\\cli.js") {
        & node "$scriptPath\\dist\\cli.js" $args
    } else {
        Write-Error "Could not find Claude Flow CLI files"
        exit 1
    }
} else {
    # Production mode - use npx alpha
    & npx claude-flow@alpha $args
}`;
  }
  return '';
}

// Fallback functions for when templates can't be loaded
function createEnhancedClaudeMdFallback() {
  // Read from the actual template file we created
  try {
    return readFileSync(join(__dirname, 'CLAUDE.md'), 'utf8');
  } catch (error) {
    // If that fails, return a minimal version
    return `# Claude Code Configuration for Claude Flow

## 🚀 IMPORTANT: Claude Flow AI-Driven Development

### Claude Code Handles:
- ✅ **ALL file operations** (Read, Write, Edit, MultiEdit)
- ✅ **ALL code generation** and development tasks
- ✅ **ALL bash commands** and system operations
- ✅ **ALL actual implementation** work
- ✅ **Project navigation** and code analysis

### Claude Flow MCP Tools Handle:
- 🧠 **Coordination only** - Orchestrating Claude Code's actions
- 💾 **Memory management** - Persistent state across sessions
- 🤖 **Neural features** - Cognitive patterns and learning
- 📊 **Performance tracking** - Monitoring and metrics
- 🐝 **Swarm orchestration** - Multi-agent coordination
- 🔗 **GitHub integration** - Advanced repository management

### ⚠️ Key Principle:
**MCP tools DO NOT create content or write code.** They coordinate and enhance Claude Code's native capabilities.

## Quick Start

1. Add MCP server: \`claude mcp add claude-flow npx claude-flow mcp start\`
2. Initialize swarm: \`mcp__claude-flow__swarm_init { topology: "hierarchical" }\`
3. Spawn agents: \`mcp__claude-flow__agent_spawn { type: "coder" }\`
4. Orchestrate: \`mcp__claude-flow__task_orchestrate { task: "Build feature" }\`

See full documentation in \`.claude/commands/\`
`;
  }
}

function createEnhancedSettingsJsonFallback() {
  return JSON.stringify(
    {
      env: {
        CLAUDE_FLOW_AUTO_COMMIT: 'false',
        CLAUDE_FLOW_AUTO_PUSH: 'false',
        CLAUDE_FLOW_HOOKS_ENABLED: 'true',
        CLAUDE_FLOW_TELEMETRY_ENABLED: 'true',
        CLAUDE_FLOW_REMOTE_EXECUTION: 'true',
        CLAUDE_FLOW_GITHUB_INTEGRATION: 'true',
      },
      permissions: {
        allow: [
          'Bash(npx claude-flow *)',
          'Bash(npm run lint)',
          'Bash(npm run test:*)',
          'Bash(npm test *)',
          'Bash(git status)',
          'Bash(git diff *)',
          'Bash(git log *)',
          'Bash(git add *)',
          'Bash(git commit *)',
          'Bash(git push)',
          'Bash(git config *)',
          'Bash(gh *)',
          'Bash(node *)',
          'Bash(which *)',
          'Bash(pwd)',
          'Bash(ls *)',
        ],
        deny: ['Bash(rm -rf /)', 'Bash(curl * | bash)', 'Bash(wget * | sh)', 'Bash(eval *)'],
      },
      enabledMcpjsonServers: ['claude-flow', 'ruv-swarm'],
      hooks: {
        PreToolUse: [
          {
            matcher: 'Bash',
            hooks: [
              {
                type: 'command',
                command:
                  'cat | jq -r \'.tool_input.command // ""\' | xargs -I {} npx claude-flow@alpha hooks pre-command --command "{}" --validate-safety true --prepare-resources true',
              },
            ],
          },
          {
            matcher: 'Write|Edit|MultiEdit',
            hooks: [
              {
                type: 'command',
                command:
                  'cat | jq -r \'.tool_input.file_path // .tool_input.path // ""\' | xargs -I {} npx claude-flow@alpha hooks pre-edit --file "{}" --auto-assign-agents true --load-context true',
              },
            ],
          },
        ],
        PostToolUse: [
          {
            matcher: 'Bash',
            hooks: [
              {
                type: 'command',
                command:
                  'cat | jq -r \'.tool_input.command // ""\' | xargs -I {} npx claude-flow@alpha hooks post-command --command "{}" --track-metrics true --store-results true',
              },
            ],
          },
          {
            matcher: 'Write|Edit|MultiEdit',
            hooks: [
              {
                type: 'command',
                command:
                  'cat | jq -r \'.tool_input.file_path // .tool_input.path // ""\' | xargs -I {} npx claude-flow@alpha hooks post-edit --file "{}" --format true --update-memory true --train-neural true',
              },
            ],
          },
        ],
        Stop: [
          {
            hooks: [
              {
                type: 'command',
                command:
                  'npx claude-flow@alpha hooks session-end --generate-summary true --persist-state true --export-metrics true',
              },
            ],
          },
        ],
      },
      includeCoAuthoredBy: true,
    },
    null,
    2,
  );
}
