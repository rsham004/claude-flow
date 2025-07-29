/**
 * OpenCode Console Engine
 * Handles code execution and output display for multiple programming languages
 */

class ConsoleEngine {
    constructor() {
        this.currentLanguage = 'javascript';
        this.executionCount = 0;
        this.outputElement = document.getElementById('consoleOutput');
        this.editorElement = document.getElementById('codeEditor');
        
        this.initializeEditor();
        this.setupLanguageHandlers();
    }
    
    /**
     * Initialize the code editor
     */
    initializeEditor() {
        if (!this.editorElement) return;
        
        // Add syntax highlighting
        this.applySyntaxHighlighting();
        
        // Handle tab key for indentation
        this.editorElement.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                e.preventDefault();
                this.insertTab();
            }
            
            // Handle Enter key for auto-indentation
            if (e.key === 'Enter') {
                setTimeout(() => this.handleAutoIndent(), 0);
            }
        });
        
        // Handle input for real-time syntax highlighting
        this.editorElement.addEventListener('input', () => {
            this.applySyntaxHighlighting();
        });
    }
    
    /**
     * Set up language-specific handlers
     */
    setupLanguageHandlers() {
        this.languageHandlers = {
            javascript: {
                execute: this.executeJavaScript.bind(this),
                validate: this.validateJavaScript.bind(this),
                template: `// JavaScript Example
console.log("Hello, JavaScript!");

// Variables
let name = "OpenCode";
const version = 1.0;
var isActive = true;

// Function
function greet(user) {
    return \`Welcome, \${user}!\`;
}

console.log(greet(name));`
            },
            python: {
                execute: this.executePython.bind(this),
                validate: this.validatePython.bind(this),
                template: `# Python Example
print("Hello, Python!")

# Variables
name = "OpenCode"
version = 1.0
is_active = True

# Function
def greet(user):
    return f"Welcome, {user}!"

print(greet(name))`
            }
        };
    }
    
    /**
     * Run the current code
     */
    async runCode() {
        const code = this.getEditorContent();
        if (!code.trim()) {
            this.appendOutput('No code to execute', 'warning');
            return;
        }
        
        this.executionCount++;
        this.appendOutput(`[Execution #${this.executionCount}] Running ${this.currentLanguage} code...`, 'info');
        
        try {
            const handler = this.languageHandlers[this.currentLanguage];
            if (handler) {
                await handler.execute(code);
            } else {
                throw new Error(`Language '${this.currentLanguage}' not supported`);
            }
            
            // Award achievement for code execution
            if (this.executionCount === 10 && window.OpenCodeApp) {
                window.OpenCodeApp.awardAchievement('code-runner');
            }
            
        } catch (error) {
            this.appendOutput(error.message, 'error');
        }
    }
    
    /**
     * Execute JavaScript code
     */
    async executeJavaScript(code) {
        // Create a safe execution context
        const originalConsole = console;
        const outputs = [];
        
        // Override console methods
        const customConsole = {
            log: (...args) => outputs.push({ type: 'log', content: args.join(' ') }),
            error: (...args) => outputs.push({ type: 'error', content: args.join(' ') }),
            warn: (...args) => outputs.push({ type: 'warning', content: args.join(' ') }),
            info: (...args) => outputs.push({ type: 'info', content: args.join(' ') })
        };
        
        try {
            // Create function with custom console
            const wrappedCode = `
                (function() {
                    const console = arguments[0];
                    ${code}
                })
            `;
            
            const func = eval(wrappedCode);
            const result = func(customConsole);
            
            // Display outputs
            if (outputs.length === 0 && result !== undefined) {
                outputs.push({ type: 'log', content: String(result) });
            }
            
            outputs.forEach(output => {
                this.appendOutput(output.content, output.type);
            });
            
            if (outputs.length === 0) {
                this.appendOutput('Code executed successfully (no output)', 'success');
            }
            
        } catch (error) {
            this.appendOutput(`JavaScript Error: ${error.message}`, 'error');
            console.error('Code execution error:', error);
        }
    }
    
    /**
     * Execute Python code (simulated)
     */
    async executePython(code) {
        // Since we can't actually execute Python in the browser,
        // we'll simulate common Python operations
        try {
            const pythonSimulator = new PythonSimulator();
            const result = pythonSimulator.execute(code);
            
            if (Array.isArray(result)) {
                result.forEach(output => {
                    this.appendOutput(output.content, output.type || 'log');
                });
            } else {
                this.appendOutput(result, 'log');
            }
            
        } catch (error) {
            this.appendOutput(`Python Error: ${error.message}`, 'error');
        }
    }
    
    /**
     * Validate JavaScript code
     */
    validateJavaScript(code) {
        try {
            new Function(code);
            return { valid: true };
        } catch (error) {
            return { valid: false, error: error.message };
        }
    }
    
    /**
     * Validate Python code (basic)
     */
    validatePython(code) {
        // Basic Python syntax validation
        const pythonPatterns = {
            invalidIndentation: /^[ ]*[^ ].*:[\s]*$/m,
            missingColon: /^[ ]*(if|for|while|def|class|try|except|with).*[^:]$/m,
            invalidSyntax: /[{}]/
        };
        
        for (const [pattern, regex] of Object.entries(pythonPatterns)) {
            if (pattern === 'invalidSyntax' && regex.test(code)) {
                return { valid: false, error: 'Python does not use curly braces' };
            }
        }
        
        return { valid: true };
    }
    
    /**
     * Set the current programming language
     */
    setLanguage(language) {
        if (this.languageHandlers[language]) {
            this.currentLanguage = language;
            this.clearOutput();
            this.loadTemplate();
            this.appendOutput(`Switched to ${language.charAt(0).toUpperCase() + language.slice(1)}`, 'info');
        }
    }
    
    /**
     * Load language template
     */
    loadTemplate() {
        const handler = this.languageHandlers[this.currentLanguage];
        if (handler && handler.template) {
            this.setEditorContent(handler.template);
        }
    }
    
    /**
     * Clear console output
     */
    clearOutput() {
        if (this.outputElement) {
            this.outputElement.innerHTML = `
                <div class="output-line">
                    <span class="timestamp">[${this.getTimestamp()}]</span>
                    <span class="output-text">Console cleared</span>
                </div>
            `;
        }
    }
    
    /**
     * Append output to console
     */
    appendOutput(content, type = 'log') {
        if (!this.outputElement) return;
        
        const outputLine = document.createElement('div');
        outputLine.className = 'output-line';
        
        const timestamp = document.createElement('span');
        timestamp.className = 'timestamp';
        timestamp.textContent = `[${this.getTimestamp()}]`;
        
        const outputText = document.createElement('span');
        outputText.className = `output-${type}`;
        outputText.textContent = content;
        
        outputLine.appendChild(timestamp);
        outputLine.appendChild(outputText);
        
        this.outputElement.appendChild(outputLine);
        this.outputElement.scrollTop = this.outputElement.scrollHeight;
    }
    
    /**
     * Get current timestamp
     */
    getTimestamp() {
        const now = new Date();
        return now.toTimeString().split(' ')[0];
    }
    
    /**
     * Get editor content
     */
    getEditorContent() {
        return this.editorElement ? this.editorElement.textContent : '';
    }
    
    /**
     * Set editor content
     */
    setEditorContent(content) {
        if (this.editorElement) {
            this.editorElement.textContent = content;
            this.applySyntaxHighlighting();
        }
    }
    
    /**
     * Insert tab character
     */
    insertTab() {
        const selection = window.getSelection();
        const range = selection.getRangeAt(0);
        const tabNode = document.createTextNode('    '); // 4 spaces
        range.insertNode(tabNode);
        range.setStartAfter(tabNode);
        range.setEndAfter(tabNode);
        selection.removeAllRanges();
        selection.addRange(range);
    }
    
    /**
     * Handle auto-indentation
     */
    handleAutoIndent() {
        const content = this.getEditorContent();
        const lines = content.split('\n');
        const currentLine = lines[lines.length - 2]; // Previous line
        
        if (currentLine && currentLine.trim().endsWith(':')) {
            // Add indentation for Python
            const indent = '    ';
            const selection = window.getSelection();
            const range = selection.getRangeAt(0);
            const indentNode = document.createTextNode(indent);
            range.insertNode(indentNode);
            range.setStartAfter(indentNode);
            range.setEndAfter(indentNode);
            selection.removeAllRanges();
            selection.addRange(range);
        }
    }
    
    /**
     * Apply syntax highlighting
     */
    applySyntaxHighlighting() {
        if (!this.editorElement) return;
        
        const content = this.editorElement.textContent;
        const highlighted = this.highlightSyntax(content, this.currentLanguage);
        
        // Only update if content changed to avoid cursor issues
        if (this.editorElement.innerHTML !== highlighted) {
            const selection = window.getSelection();
            const range = selection.rangeCount > 0 ? selection.getRangeAt(0) : null;
            
            this.editorElement.innerHTML = highlighted;
            
            // Restore cursor position
            if (range) {
                try {
                    selection.removeAllRanges();
                    selection.addRange(range);
                } catch (e) {
                    // Cursor restoration failed, place at end
                    const newRange = document.createRange();
                    newRange.selectNodeContents(this.editorElement);
                    newRange.collapse(false);
                    selection.removeAllRanges();
                    selection.addRange(newRange);
                }
            }
        }
    }
    
    /**
     * Highlight syntax for given language
     */
    highlightSyntax(code, language) {
        if (language === 'javascript') {
            return this.highlightJavaScript(code);
        } else if (language === 'python') {
            return this.highlightPython(code);
        }
        return this.escapeHtml(code);
    }
    
    /**
     * Highlight JavaScript syntax
     */
    highlightJavaScript(code) {
        let highlighted = this.escapeHtml(code);
        
        // Keywords
        const keywords = ['let', 'const', 'var', 'function', 'if', 'else', 'for', 'while', 'do', 'switch', 'case', 'break', 'continue', 'return', 'try', 'catch', 'finally', 'throw', 'new', 'this', 'class', 'extends', 'import', 'export', 'default'];
        keywords.forEach(keyword => {
            const regex = new RegExp(`\\b${keyword}\\b`, 'g');
            highlighted = highlighted.replace(regex, `<span class="keyword">${keyword}</span>`);
        });
        
        // Strings
        highlighted = highlighted.replace(/(["'])(?:(?=(\\?))\2.)*?\1/g, '<span class="string">$&</span>');
        highlighted = highlighted.replace(/(`(?:[^`\\]|\\.)*)(`)/g, '<span class="string">$1$2</span>');
        
        // Numbers
        highlighted = highlighted.replace(/\b\d+\.?\d*\b/g, '<span class="number">$&</span>');
        
        // Comments
        highlighted = highlighted.replace(/\/\/.*$/gm, '<span class="comment">$&</span>');
        highlighted = highlighted.replace(/\/\*[\s\S]*?\*\//g, '<span class="comment">$&</span>');
        
        // Functions
        highlighted = highlighted.replace(/\b(\w+)(?=\s*\()/g, '<span class="function">$1</span>');
        
        return highlighted;
    }
    
    /**
     * Highlight Python syntax
     */
    highlightPython(code) {
        let highlighted = this.escapeHtml(code);
        
        // Keywords
        const keywords = ['and', 'as', 'assert', 'break', 'class', 'continue', 'def', 'del', 'elif', 'else', 'except', 'finally', 'for', 'from', 'global', 'if', 'import', 'in', 'is', 'lambda', 'not', 'or', 'pass', 'raise', 'return', 'try', 'while', 'with', 'yield'];
        keywords.forEach(keyword => {
            const regex = new RegExp(`\\b${keyword}\\b`, 'g');
            highlighted = highlighted.replace(regex, `<span class="keyword">${keyword}</span>`);
        });
        
        // Strings
        highlighted = highlighted.replace(/(["'])(?:(?=(\\?))\2.)*?\1/g, '<span class="string">$&</span>');
        highlighted = highlighted.replace(/(f["'])(?:(?=(\\?))\2.)*?\1/g, '<span class="string">$&</span>');
        
        // Numbers
        highlighted = highlighted.replace(/\b\d+\.?\d*\b/g, '<span class="number">$&</span>');
        
        // Comments
        highlighted = highlighted.replace(/#.*$/gm, '<span class="comment">$&</span>');
        
        // Functions
        highlighted = highlighted.replace(/\b(\w+)(?=\s*\()/g, '<span class="function">$1</span>');
        
        return highlighted;
    }
    
    /**
     * Escape HTML characters
     */
    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
}

/**
 * Python Simulator for basic Python operations
 */
class PythonSimulator {
    constructor() {
        this.variables = {};
        this.outputs = [];
    }
    
    execute(code) {
        this.outputs = [];
        const lines = code.split('\n').map(line => line.trim()).filter(line => line && !line.startsWith('#'));
        
        try {
            for (const line of lines) {
                this.executeLine(line);
            }
            
            return this.outputs.length > 0 ? this.outputs : [{ content: 'Code executed successfully', type: 'success' }];
        } catch (error) {
            throw new Error(error.message);
        }
    }
    
    executeLine(line) {
        // Handle print statements
        if (line.startsWith('print(')) {
            this.handlePrint(line);
            return;
        }
        
        // Handle variable assignments
        if (line.includes('=') && !line.includes('==')) {
            this.handleAssignment(line);
            return;
        }
        
        // Handle function definitions (basic)
        if (line.startsWith('def ')) {
            this.outputs.push({ content: 'Function defined', type: 'info' });
            return;
        }
        
        // Handle basic expressions
        try {
            const result = this.evaluateExpression(line);
            if (result !== undefined) {
                this.outputs.push({ content: String(result), type: 'log' });
            }
        } catch (error) {
            // Ignore expression evaluation errors for unsupported syntax
        }
    }
    
    handlePrint(line) {
        // Extract content between parentheses
        const match = line.match(/print\((.*)\)/);
        if (match) {
            const content = match[1].trim();
            let output = this.evaluateExpression(content);
            this.outputs.push({ content: String(output), type: 'log' });
        }
    }
    
    handleAssignment(line) {
        const [variable, value] = line.split('=').map(s => s.trim());
        this.variables[variable] = this.evaluateExpression(value);
    }
    
    evaluateExpression(expr) {
        expr = expr.trim();
        
        // Handle strings
        if ((expr.startsWith('"') && expr.endsWith('"')) || 
            (expr.startsWith("'") && expr.endsWith("'"))) {
            return expr.slice(1, -1);
        }
        
        // Handle f-strings (basic)
        if (expr.startsWith('f"') || expr.startsWith("f'")) {
            let result = expr.slice(2, -1);
            // Replace {variable} with actual values
            result = result.replace(/\{(\w+)\}/g, (match, varName) => {
                return this.variables[varName] || match;
            });
            return result;
        }
        
        // Handle numbers
        if (/^\d+\.?\d*$/.test(expr)) {
            return parseFloat(expr);
        }
        
        // Handle booleans
        if (expr === 'True') return true;
        if (expr === 'False') return false;
        
        // Handle variables
        if (this.variables.hasOwnProperty(expr)) {
            return this.variables[expr];
        }
        
        // Handle simple string concatenation
        if (expr.includes('+')) {
            const parts = expr.split('+').map(p => p.trim());
            return parts.map(p => this.evaluateExpression(p)).join('');
        }
        
        return expr;
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ConsoleEngine;
}