/**
 * Enhanced Variables and Data Types Interactive Demonstration
 * Uses the EnhancedDemoEngine for advanced visualization and interaction
 */

class EnhancedVariablesDemo extends EnhancedDemoEngine {
    constructor(container) {
        super(container);
        this.variableMemory = new Map();
        this.memoryBlocks = [];
        this.memoryAddress = 0x1000;
    }
    
    getTitle() {
        return 'Variables & Data Types - Enhanced Experience';
    }
    
    getDemoType() {
        return 'enhanced-variables';
    }
    
    setupSteps() {
        this.steps = [
            {
                id: 'intro',
                title: 'What are Variables? 🏠',
                description: 'Variables are containers that store data values. Let\'s explore them with interactive visualizations!',
                content: this.generateIntroContent(),
                interactive: this.generateIntroInteractive(),
                visualization: {
                    type: 'memory-diagram',
                    description: 'Watch how variables are stored in computer memory',
                    data: { blocks: this.memoryBlocks }
                },
                hints: [
                    "Think of variables like labeled storage boxes",
                    "Each variable has a name, value, and type",
                    "Try creating different types of variables to see how they're stored"
                ],
                explanation: "Variables are fundamental building blocks in programming. They allow us to store and manipulate data throughout our program execution."
            },
            {
                id: 'declaring',
                title: 'Declaring Variables 📝',
                description: 'Learn the three ways to create variables in JavaScript: let, const, and var.',
                content: this.generateDeclaringContent(),
                interactive: this.generateDeclaringInteractive(),
                visualization: {
                    type: 'algorithm-flow',
                    description: 'Follow the variable declaration process step by step',
                    data: {
                        steps: [
                            { title: 'Choose Keyword', description: 'let, const, or var' },
                            { title: 'Name Variable', description: 'Give it a descriptive name' },
                            { title: 'Assign Value', description: 'Store data in the variable' },
                            { title: 'Memory Allocation', description: 'Computer reserves memory space' }
                        ]
                    }
                },
                exercise: {
                    description: 'Create three variables representing different aspects of yourself.',
                    content: this.generateDeclaringExercise(),
                    solution: `let myName = "Your Name";\nlet myAge = 25;\nconst likesProgramming = true;`
                },
                hints: [
                    "Use 'let' for values that might change",
                    "Use 'const' for values that stay the same",
                    "Avoid 'var' in modern JavaScript"
                ],
                explanation: "Variable declaration is the process of creating a named storage location in memory. The keyword you choose determines how the variable behaves."
            },
            {
                id: 'data-types',
                title: 'Data Types 🎭',
                description: 'Explore different types of data: strings, numbers, booleans, arrays, and objects.',
                content: this.generateDataTypesContent(),
                interactive: this.generateDataTypesInteractive(),
                visualization: {
                    type: 'data-structure',
                    description: 'Visual representation of different data types',
                    data: {
                        types: [
                            { name: 'String', example: '"Hello"', color: '#10b981' },
                            { name: 'Number', example: '42', color: '#3b82f6' },
                            { name: 'Boolean', example: 'true', color: '#f59e0b' },
                            { name: 'Array', example: '[1,2,3]', color: '#8b5cf6' },
                            { name: 'Object', example: '{key:value}', color: '#ef4444' }
                        ]
                    }
                },
                exercise: {
                    description: 'Create variables for each JavaScript data type with meaningful values.',
                    content: this.generateDataTypesExercise(),
                    solution: `let text = "Hello World";     // string\nlet count = 42;             // number\nlet isActive = false;       // boolean\nlet items = [1, 2, 3];     // array\nlet person = {name: "Alice"}; // object`
                },
                hints: [
                    "Strings are wrapped in quotes",
                    "Numbers don't need quotes",
                    "Booleans are either true or false",
                    "Arrays hold multiple values in order",
                    "Objects store key-value pairs"
                ],
                explanation: "Data types define what kind of information a variable can store and what operations can be performed on it."
            },
            {
                id: 'operations',
                title: 'Variable Operations ⚡',
                description: 'Learn how to modify and manipulate variables with operators.',
                content: this.generateOperationsContent(),
                interactive: this.generateOperationsInteractive(),
                visualization: {
                    type: 'interactive-canvas',
                    description: 'Interactive calculator showing variable operations',
                    data: {
                        type: 'calculator',
                        operations: ['+', '-', '*', '/', '%', '**']
                    }
                },
                exercise: {
                    description: 'Create a calculator that performs multiple operations.',
                    content: this.generateOperationsExercise(),
                    solution: `let num1 = 10;\nlet num2 = 5;\nlet sum = num1 + num2;\nlet difference = num1 - num2;\nlet product = num1 * num2;\nconsole.log("Results:", sum, difference, product);`
                },
                hints: [
                    "Use + for addition, - for subtraction",
                    "* for multiplication, / for division",
                    "% gives you the remainder (modulus)",
                    "** is used for exponentiation"
                ],
                explanation: "Operators allow us to perform calculations and manipulate data stored in variables. Understanding operators is crucial for building dynamic programs."
            },
            {
                id: 'scope',
                title: 'Variable Scope 🌍',
                description: 'Understand where variables can be accessed in your code.',
                content: this.generateScopeContent(),
                interactive: this.generateScopeInteractive(),
                visualization: {
                    type: 'network-diagram',
                    description: 'Scope chain visualization showing variable accessibility',
                    data: {
                        scopes: [
                            { id: 'global', name: 'Global Scope', level: 0 },
                            { id: 'function', name: 'Function Scope', level: 1, parent: 'global' },
                            { id: 'block', name: 'Block Scope', level: 2, parent: 'function' }
                        ]
                    }
                },
                exercise: {
                    description: 'Demonstrate different variable scopes with a practical example.',
                    content: this.generateScopeExercise(),
                    solution: `let globalVar = "I am global";\n\nfunction testScope() {\n    let localVar = "I am local";\n    console.log(globalVar); // Works\n    console.log(localVar);  // Works\n}\n\ntestScope();`
                },
                hints: [
                    "Global variables are accessible everywhere",
                    "Function variables are only accessible within the function",
                    "Block variables (let/const) are only accessible within their block",
                    "Inner scopes can access outer scope variables"
                ],
                explanation: "Variable scope determines where in your code a variable can be accessed. Understanding scope prevents errors and helps organize code better."
            },
            {
                id: 'best-practices',
                title: 'Best Practices 🏆',
                description: 'Learn professional tips for naming and using variables effectively.',
                content: this.generateBestPracticesContent(),
                interactive: this.generateBestPracticesInteractive(),
                visualization: {
                    type: 'comparison-chart',
                    description: 'Good vs Bad variable naming examples',
                    data: {
                        comparisons: [
                            { good: 'userName', bad: 'x', category: 'Descriptive Names' },
                            { good: 'isLoggedIn', bad: 'flag', category: 'Boolean Naming' },
                            { good: 'MAX_USERS', bad: 'maxusers', category: 'Constants' },
                            { good: 'calculateTotal()', bad: 'calc()', category: 'Function Names' }
                        ]
                    }
                },
                hints: [
                    "Use descriptive names that explain what the variable stores",
                    "Follow camelCase convention for variables",
                    "Use UPPER_SNAKE_CASE for constants",
                    "Boolean variables should start with 'is', 'has', or 'can'"
                ],
                explanation: "Good variable naming and practices make your code readable, maintainable, and professional. These conventions are used by developers worldwide."
            }
        ];
    }
    
    generateIntroContent() {
        return `
            <div class="enhanced-concept-explanation">
                <div class="analogy-section">
                    <h4>🏠 Variables: Your Code's Storage System</h4>
                    <div class="analogy-grid">
                        <div class="analogy-card">
                            <div class="card-icon">📦</div>
                            <h5>Storage Container</h5>
                            <p>Each variable is like a labeled box that holds data</p>
                            <div class="card-example">
                                <code>let userName = "Alice";</code>
                            </div>
                        </div>
                        <div class="analogy-card">
                            <div class="card-icon">🏷️</div>
                            <h5>Unique Label</h5>
                            <p>The variable name is how you identify and find your data</p>
                            <div class="card-example">
                                <code>userName</code> ← This is the label
                            </div>
                        </div>
                        <div class="analogy-card">
                            <div class="card-icon">📄</div>
                            <h5>Stored Content</h5>
                            <p>The value is what's actually stored inside</p>
                            <div class="card-example">
                                <code>"Alice"</code> ← This is the content
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="real-world-examples">
                    <h4>🌎 Real-World Examples</h4>
                    <div class="example-grid">
                        <div class="example-item">
                            <strong>📱 Social Media App:</strong>
                            <pre><code>let currentUser = "john_doe";
let likeCount = 1247;
let hasNotifications = true;</code></pre>
                        </div>
                        <div class="example-item">
                            <strong>🛒 Shopping Cart:</strong>
                            <pre><code>let itemPrice = 29.99;
let quantity = 2;
let totalCost = itemPrice * quantity;</code></pre>
                        </div>
                        <div class="example-item">
                            <strong>🎮 Game Score:</strong>
                            <pre><code>let playerName = "SpeedRunner42";
let currentLevel = 8;
let hasExtraLife = false;</code></pre>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
    
    generateIntroInteractive() {
        return `
            <div class="enhanced-variable-creator">
                <div class="creator-header">
                    <h5>🔬 Variable Laboratory</h5>
                    <p>Create variables and watch them come to life in memory!</p>
                </div>
                
                <div class="variable-form">
                    <div class="form-row">
                        <div class="input-group">
                            <label for="varName">Variable Name:</label>
                            <input type="text" id="varName" placeholder="e.g., userName" 
                                   class="enhanced-input" autocomplete="off">
                            <div class="input-hint">Use camelCase (e.g., myVariableName)</div>
                        </div>
                        
                        <div class="input-group">
                            <label for="varType">Data Type:</label>
                            <select id="varType" class="enhanced-select">
                                <option value="string">String (text)</option>
                                <option value="number">Number</option>
                                <option value="boolean">Boolean (true/false)</option>
                                <option value="array">Array [list]</option>
                                <option value="object">Object {key:value}</option>
                            </select>
                        </div>
                        
                        <div class="input-group">
                            <label for="varValue">Value:</label>
                            <input type="text" id="varValue" placeholder='e.g., "Alice"' 
                                   class="enhanced-input" autocomplete="off">
                            <div class="input-hint" id="valueHint">Enter a string value with quotes</div>
                        </div>
                    </div>
                    
                    <button onclick="EnhancedVariablesDemo.createEnhancedVariable()" 
                            class="create-variable-btn">
                        ✨ Create Variable
                    </button>
                </div>
                
                <div class="memory-visualization-enhanced" id="memoryVizEnhanced">
                    <div class="memory-header">
                        <h6>🧠 Computer Memory Visualization</h6>
                        <div class="memory-stats">
                            <span class="stat">Variables: <span id="variableCount">0</span></span>
                            <span class="stat">Memory Used: <span id="memoryUsed">0</span> bytes</span>
                        </div>
                    </div>
                    <div class="memory-grid" id="memoryGrid">
                        <div class="empty-state">
                            <div class="empty-icon">📦</div>
                            <p>Create your first variable to see it appear here!</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
    
    generateDeclaringContent() {
        return `
            <div class="enhanced-declaring-explanation">
                <div class="declaration-intro">
                    <h4>🎯 Three Keywords, Three Powers</h4>
                    <p>JavaScript gives you three ways to declare variables, each with different superpowers!</p>
                </div>
                
                <div class="declaration-comparison">
                    <div class="declaration-card let-card">
                        <div class="card-header">
                            <h5><code>let</code> - The Flexible Friend</h5>
                            <div class="recommendation">✅ Recommended</div>
                        </div>
                        <div class="card-content">
                            <div class="code-example">
                                <pre><code>let message = "Hello World";
message = "Updated message"; // ✅ Can change
let message = "Another"; // ❌ Can't redeclare</code></pre>
                            </div>
                            <div class="features">
                                <div class="feature">✅ Can be reassigned</div>
                                <div class="feature">✅ Block-scoped (safe)</div>
                                <div class="feature">✅ Cannot be redeclared</div>
                                <div class="feature">✅ Modern standard</div>
                            </div>
                            <div class="use-case">
                                <strong>Use for:</strong> Values that might change (counters, user input, calculated results)
                            </div>
                        </div>
                    </div>
                    
                    <div class="declaration-card const-card">
                        <div class="card-header">
                            <h5><code>const</code> - The Reliable Guardian</h5>
                            <div class="recommendation">✅ Recommended</div>
                        </div>
                        <div class="card-content">
                            <div class="code-example">
                                <pre><code>const PI = 3.14159;
const name = "Alice";
// PI = 3.14; // ❌ Error! Cannot reassign
const colors = ["red", "blue"]; // ✅ Array contents can change</code></pre>
                            </div>
                            <div class="features">
                                <div class="feature">❌ Cannot be reassigned</div>
                                <div class="feature">✅ Block-scoped (safe)</div>
                                <div class="feature">✅ Must be initialized</div>
                                <div class="feature">✅ Prevents accidental changes</div>
                            </div>
                            <div class="use-case">
                                <strong>Use for:</strong> Values that never change (constants, configuration, functions)
                            </div>
                        </div>
                    </div>
                    
                    <div class="declaration-card var-card">
                        <div class="card-header">
                            <h5><code>var</code> - The Legacy Troublemaker</h5>
                            <div class="recommendation">⚠️ Avoid</div>
                        </div>
                        <div class="card-content">
                            <div class="code-example">
                                <pre><code>var oldStyle = "Not recommended";
var oldStyle = "Can redeclare"; // ⚠️ Problematic
function test() {
    if (true) {
        var leaked = "I leak out!"; // ⚠️ Function-scoped
    }
    console.log(leaked); // ⚠️ Still accessible!
}</code></pre>
                            </div>
                            <div class="features">
                                <div class="feature">⚠️ Function-scoped (confusing)</div>
                                <div class="feature">⚠️ Can be redeclared</div>
                                <div class="feature">⚠️ Hoisting issues</div>
                                <div class="feature">⚠️ Legacy behavior</div>
                            </div>
                            <div class="use-case">
                                <strong>Avoid in modern code:</strong> Use let or const instead
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="decision-flowchart">
                    <h4>🤔 Which keyword should I use?</h4>
                    <div class="flowchart">
                        <div class="flow-step">
                            <div class="question">Will the value change?</div>
                            <div class="flow-branches">
                                <div class="branch">
                                    <div class="answer no">No</div>
                                    <div class="arrow">↓</div>
                                    <div class="result const">Use <code>const</code></div>
                                </div>
                                <div class="branch">
                                    <div class="answer yes">Yes</div>
                                    <div class="arrow">↓</div>
                                    <div class="result let">Use <code>let</code></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
    
    generateDeclaringInteractive() {
        return `
            <div class="enhanced-declaration-practice">
                <div class="practice-header">
                    <h5>🛠️ Declaration Workshop</h5>
                    <p>Practice choosing the right keyword for different scenarios!</p>
                </div>
                
                <div class="scenario-cards">
                    <div class="scenario-card" data-scenario="1">
                        <div class="scenario-description">
                            <h6>📧 Email Application</h6>
                            <p>You're building an email app and need to store the current user's email address. This won't change during the session.</p>
                        </div>
                        <div class="scenario-code">
                            <select class="keyword-choice" data-answer="const">
                                <option value="">Choose keyword...</option>
                                <option value="let">let</option>
                                <option value="const">const</option>
                                <option value="var">var</option>
                            </select>
                            <span class="variable-syntax">userEmail = "user@example.com";</span>
                        </div>
                        <div class="scenario-feedback"></div>
                    </div>
                    
                    <div class="scenario-card" data-scenario="2">
                        <div class="scenario-description">
                            <h6>📊 Counter Application</h6>
                            <p>You're making a click counter that increases each time a button is pressed.</p>
                        </div>
                        <div class="scenario-code">
                            <select class="keyword-choice" data-answer="let">
                                <option value="">Choose keyword...</option>
                                <option value="let">let</option>
                                <option value="const">const</option>
                                <option value="var">var</option>
                            </select>
                            <span class="variable-syntax">clickCount = 0;</span>
                        </div>
                        <div class="scenario-feedback"></div>
                    </div>
                    
                    <div class="scenario-card" data-scenario="3">
                        <div class="scenario-description">
                            <h6>🌐 API Configuration</h6>
                            <p>You need to store the base URL for your API that never changes throughout the application.</p>
                        </div>
                        <div class="scenario-code">
                            <select class="keyword-choice" data-answer="const">
                                <option value="">Choose keyword...</option>
                                <option value="let">let</option>
                                <option value="const">const</option>
                                <option value="var">var</option>
                            </select>
                            <span class="variable-syntax">API_BASE_URL = "https://api.myapp.com";</span>
                        </div>
                        <div class="scenario-feedback"></div>
                    </div>
                </div>
                
                <div class="practice-controls">
                    <button onclick="EnhancedVariablesDemo.checkAllScenarios()" class="check-scenarios-btn">
                        🔍 Check My Choices
                    </button>
                    <button onclick="EnhancedVariablesDemo.resetScenarios()" class="reset-btn">
                        🔄 Try Again
                    </button>
                </div>
                
                <div class="scenario-results" id="scenarioResults"></div>
            </div>
        `;
    }
    
    generateDeclaringExercise() {
        return `
            <div class="enhanced-exercise-workspace">
                <div class="exercise-instructions">
                    <h6>🎯 Personal Profile Challenge</h6>
                    <p>Create a digital profile using appropriate variable declarations:</p>
                    
                    <div class="requirements-list">
                        <div class="requirement">
                            <span class="req-number">1</span>
                            <div class="req-content">
                                <strong>Your name</strong> (might be updated later)
                                <div class="req-hint">💡 Use <code>let</code> since it might change</div>
                            </div>
                        </div>
                        
                        <div class="requirement">
                            <span class="req-number">2</span>
                            <div class="req-content">
                                <strong>Your birth year</strong> (never changes)
                                <div class="req-hint">💡 Use <code>const</code> since it's permanent</div>
                            </div>
                        </div>
                        
                        <div class="requirement">
                            <span class="req-number">3</span>
                            <div class="req-content">
                                <strong>Whether you like programming</strong> (might change as you learn)
                                <div class="req-hint">💡 Use <code>let</code> since preferences can evolve</div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="code-workspace-enhanced">
                    <div class="editor-header">
                        <span class="editor-title">📝 Code Editor</span>
                        <div class="editor-actions">
                            <button onclick="EnhancedVariablesDemo.formatCode(1)" class="format-btn">✨ Format</button>
                            <button onclick="EnhancedVariablesDemo.runCode(1)" class="run-btn">▶️ Run</button>
                        </div>
                    </div>
                    <textarea id="exerciseCode1" class="enhanced-editor" placeholder="// Write your personal profile variables here
// Remember to use the right keywords!

// Your name (can change)
let myName = 

// Your birth year (permanent)
const birthYear = 

// Do you like programming? (might change)
let likesProgramming = 

// Bonus: Calculate your age!
let currentAge = 2024 - birthYear;

console.log(\`Hi, I'm \${myName}, I'm \${currentAge} years old.\`);
console.log(\`I like programming: \${likesProgramming}\`);" rows="12"></textarea>
                    
                    <div class="code-output" id="codeOutput1">
                        <div class="output-header">📺 Output</div>
                        <div class="output-content" id="outputContent1">
                            Click "Run" to see your code in action!
                        </div>
                    </div>
                </div>
                
                <div class="exercise-actions">
                    <button onclick="EnhancedVariablesDemo.checkExercise(1)" class="check-enhanced-btn">
                        🔍 Check My Code
                    </button>
                    <button onclick="EnhancedVariablesDemo.showHint(1)" class="hint-btn">
                        💡 Give Me a Hint
                    </button>
                </div>
                
                <div class="exercise-feedback-enhanced" id="exerciseFeedback1"></div>
            </div>
        `;
    }
    
    // Static methods for enhanced interactivity
    static createEnhancedVariable() {
        const nameInput = document.getElementById('varName');
        const typeSelect = document.getElementById('varType');
        const valueInput = document.getElementById('varValue');
        const memoryGrid = document.getElementById('memoryGrid');
        const variableCount = document.getElementById('variableCount');
        const memoryUsed = document.getElementById('memoryUsed');
        
        if (!nameInput || !typeSelect || !valueInput || !memoryGrid) return;
        
        const name = nameInput.value.trim();
        const type = typeSelect.value;
        const value = valueInput.value.trim();
        
        if (!name || !value) {
            EnhancedVariablesDemo.showToast('Please fill in all fields', 'warning');
            return;
        }
        
        // Validate variable name
        if (!/^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(name)) {
            EnhancedVariablesDemo.showToast('Invalid variable name. Use letters, numbers, underscore, or $', 'error');
            return;
        }
        
        // Clear empty state
        const emptyState = memoryGrid.querySelector('.empty-state');
        if (emptyState) {
            emptyState.remove();
        }
        
        // Create memory block
        const memoryBlock = document.createElement('div');
        memoryBlock.className = 'memory-block';
        memoryBlock.setAttribute('data-type', type);
        
        const address = (0x1000 + document.querySelectorAll('.memory-block').length * 8).toString(16).toUpperCase();
        const size = EnhancedVariablesDemo.getTypeSize(type, value);
        
        memoryBlock.innerHTML = `
            <div class="memory-address">0x${address}</div>
            <div class="memory-name">${name}</div>
            <div class="memory-value">${EnhancedVariablesDemo.formatValue(value, type)}</div>
            <div class="memory-type">${type}</div>
            <div class="memory-size">${size} bytes</div>
            <button class="delete-variable" onclick="EnhancedVariablesDemo.deleteVariable(this)">×</button>
        `;
        
        memoryGrid.appendChild(memoryBlock);
        
        // Update statistics
        const currentCount = parseInt(variableCount.textContent) + 1;
        const currentMemory = parseInt(memoryUsed.textContent) + size;
        
        variableCount.textContent = currentCount;
        memoryUsed.textContent = currentMemory;
        
        // Clear inputs
        nameInput.value = '';
        valueInput.value = '';
        
        // Animate the new block
        memoryBlock.style.animation = 'slideInUp 0.5s ease-out';
        
        // Show success message
        EnhancedVariablesDemo.showToast(`Variable "${name}" created successfully!`, 'success');
        
        // Play sound effect if available
        EnhancedVariablesDemo.playSound('create');
        
        // Update type hints
        EnhancedVariablesDemo.updateTypeHints();
    }
    
    static getTypeSize(type, value) {
        switch (type) {
            case 'string': return value.length * 2; // 2 bytes per character
            case 'number': return 8; // 64-bit double
            case 'boolean': return 1; // 1 byte
            case 'array': 
                try {
                    const arr = JSON.parse(value);
                    return arr.length * 8 + 24; // Approximate
                } catch {
                    return 32; // Default
                }
            case 'object':
                try {
                    const obj = JSON.parse(value);
                    return Object.keys(obj).length * 16 + 32; // Approximate
                } catch {
                    return 48; // Default
                }
            default: return 8;
        }
    }
    
    static formatValue(value, type) {
        switch (type) {
            case 'string':
                return value.startsWith('"') || value.startsWith("'") ? value : `"${value}"`;
            case 'number':
                return isNaN(value) ? '0' : value;
            case 'boolean':
                return value.toLowerCase() === 'true' ? 'true' : 'false';
            case 'array':
                try {
                    JSON.parse(value);
                    return value;
                } catch {
                    return '[1, 2, 3]';
                }
            case 'object':
                try {
                    JSON.parse(value);
                    return value;
                } catch {
                    return '{key: "value"}';
                }
            default:
                return value;
        }
    }
    
    static deleteVariable(button) {
        const memoryBlock = button.closest('.memory-block');
        const size = parseInt(memoryBlock.querySelector('.memory-size').textContent);
        
        // Update statistics
        const variableCount = document.getElementById('variableCount');
        const memoryUsed = document.getElementById('memoryUsed');
        
        variableCount.textContent = parseInt(variableCount.textContent) - 1;
        memoryUsed.textContent = parseInt(memoryUsed.textContent) - size;
        
        // Animate removal
        memoryBlock.style.animation = 'fadeOut 0.3s ease-out';
        setTimeout(() => {
            memoryBlock.remove();
            
            // Show empty state if no variables
            const memoryGrid = document.getElementById('memoryGrid');
            if (memoryGrid.children.length === 0) {
                memoryGrid.innerHTML = `
                    <div class="empty-state">
                        <div class="empty-icon">📦</div>
                        <p>Create your first variable to see it appear here!</p>
                    </div>
                `;
            }
        }, 300);
        
        EnhancedVariablesDemo.playSound('delete');
    }
    
    static updateTypeHints() {
        const typeSelect = document.getElementById('varType');
        const valueHint = document.getElementById('valueHint');
        
        if (!typeSelect || !valueHint) return;
        
        const hints = {
            string: 'Enter text with quotes, e.g., "Hello World"',
            number: 'Enter a number, e.g., 42 or 3.14',
            boolean: 'Enter true or false',
            array: 'Enter an array, e.g., [1, 2, 3] or ["a", "b"]',
            object: 'Enter an object, e.g., {"name": "Alice", "age": 25}'
        };
        
        valueHint.textContent = hints[typeSelect.value] || 'Enter a value';
    }
    
    static showToast(message, type = 'info') {
        // Create toast notification
        const toast = document.createElement('div');
        toast.className = `enhanced-toast ${type}`;
        toast.innerHTML = `
            <div class="toast-icon">${type === 'success' ? '✅' : type === 'error' ? '❌' : type === 'warning' ? '⚠️' : 'ℹ️'}</div>
            <div class="toast-message">${message}</div>
        `;
        
        document.body.appendChild(toast);
        
        // Show toast
        setTimeout(() => toast.classList.add('show'), 100);
        
        // Hide toast
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => document.body.removeChild(toast), 300);
        }, 3000);
    }
    
    static playSound(type) {
        // Audio feedback for interactions
        const audioContext = window.audioContext;
        if (!audioContext) return;
        
        const sounds = {
            create: { frequency: 800, duration: 0.1 },
            delete: { frequency: 400, duration: 0.1 },
            success: { frequency: 1000, duration: 0.2 },
            error: { frequency: 200, duration: 0.3 }
        };
        
        const sound = sounds[type];
        if (!sound) return;
        
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.setValueAtTime(sound.frequency, audioContext.currentTime);
        gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + sound.duration);
        
        oscillator.start();
        oscillator.stop(audioContext.currentTime + sound.duration);
    }
    
    static checkAllScenarios() {
        const scenarios = document.querySelectorAll('.scenario-card');
        let correct = 0;
        let total = scenarios.length;
        
        scenarios.forEach(scenario => {
            const select = scenario.querySelector('.keyword-choice');
            const feedback = scenario.querySelector('.scenario-feedback');
            const answer = select.dataset.answer;
            const choice = select.value;
            
            if (choice === answer) {
                correct++;
                feedback.innerHTML = `<div class="feedback-success">✅ Correct! ${EnhancedVariablesDemo.getExplanation(answer)}</div>`;
                scenario.classList.add('correct');
            } else if (choice) {
                feedback.innerHTML = `<div class="feedback-error">❌ Not quite. ${EnhancedVariablesDemo.getExplanation(answer)}</div>`;
                scenario.classList.add('incorrect');
            } else {
                feedback.innerHTML = `<div class="feedback-neutral">Please make a choice first.</div>`;
            }
        });
        
        const results = document.getElementById('scenarioResults');
        const percentage = Math.round((correct / total) * 100);
        
        results.innerHTML = `
            <div class="results-summary ${percentage >= 80 ? 'excellent' : percentage >= 60 ? 'good' : 'needs-work'}">
                <h6>📊 Results</h6>
                <div class="score">Score: ${correct}/${total} (${percentage}%)</div>
                <div class="message">
                    ${percentage === 100 ? '🎉 Perfect! You understand variable declarations!' : 
                      percentage >= 80 ? '👍 Great job! You\'re getting the hang of it!' : 
                      percentage >= 60 ? '📚 Good start! Review the explanations and try again.' : 
                      '💪 Keep practicing! Understanding will come with time.'}
                </div>
            </div>
        `;
        
        if (percentage >= 80) {
            EnhancedVariablesDemo.playSound('success');
        }
    }
    
    static getExplanation(keyword) {
        const explanations = {
            const: 'Use const for values that never change.',
            let: 'Use let for values that might change.',
            var: 'Avoid var in modern JavaScript - use let or const instead.'
        };
        return explanations[keyword] || '';
    }
    
    static resetScenarios() {
        const scenarios = document.querySelectorAll('.scenario-card');
        scenarios.forEach(scenario => {
            scenario.classList.remove('correct', 'incorrect');
            scenario.querySelector('.keyword-choice').value = '';
            scenario.querySelector('.scenario-feedback').innerHTML = '';
        });
        
        document.getElementById('scenarioResults').innerHTML = '';
    }
    
    // Additional enhanced methods would continue here...
    // (Include methods for other interactive elements)
}

// Initialize type hints when page loads
document.addEventListener('DOMContentLoaded', () => {
    const typeSelect = document.getElementById('varType');
    if (typeSelect) {
        typeSelect.addEventListener('change', EnhancedVariablesDemo.updateTypeHints);
        EnhancedVariablesDemo.updateTypeHints();
    }
});

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = EnhancedVariablesDemo;
}