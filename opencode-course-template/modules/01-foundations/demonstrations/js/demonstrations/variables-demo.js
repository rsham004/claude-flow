/**
 * Variables and Data Types Interactive Demonstration
 * Teaches fundamental programming concepts with visual explanations
 */

class VariablesDemo extends BaseDemo {
    constructor(container) {
        super(container);
        this.variableMemory = new Map();
        this.visualizationElement = null;
    }
    
    getTitle() {
        return 'Variables & Data Types';
    }
    
    getDemoType() {
        return 'variables';
    }
    
    setupSteps() {
        this.steps = [
            {
                id: 'intro',
                title: 'What are Variables?',
                description: 'Variables are containers that store data values. Think of them as labeled boxes where you can put different types of information.',
                content: this.generateIntroContent(),
                interactive: this.generateIntroInteractive()
            },
            {
                id: 'declaring',
                title: 'Declaring Variables',
                description: 'Learn how to create variables using let, const, and var keywords.',
                content: this.generateDeclaringContent(),
                interactive: this.generateDeclaringInteractive(),
                exercise: {
                    description: 'Create three variables: your name, age, and whether you like programming.',
                    content: this.generateDeclaringExercise(),
                    solution: `let myName = "Your Name";\nlet myAge = 25;\nlet likesProgramming = true;`
                }
            },
            {
                id: 'data-types',
                title: 'Data Types',
                description: 'Explore different types of data: strings, numbers, booleans, and more.',
                content: this.generateDataTypesContent(),
                interactive: this.generateDataTypesInteractive(),
                exercise: {
                    description: 'Identify the data type of each value and create variables for them.',
                    content: this.generateDataTypesExercise(),
                    solution: `let text = "Hello World";     // string\nlet count = 42;             // number\nlet isActive = false;       // boolean\nlet items = [1, 2, 3];     // array\nlet person = {name: "Alice"}; // object`
                }
            },
            {
                id: 'operations',
                title: 'Variable Operations',
                description: 'Learn how to modify and manipulate variables with operators.',
                content: this.generateOperationsContent(),
                interactive: this.generateOperationsInteractive(),
                exercise: {
                    description: 'Create a simple calculator that adds two numbers.',
                    content: this.generateOperationsExercise(),
                    solution: `let num1 = 10;\nlet num2 = 5;\nlet sum = num1 + num2;\nconsole.log("Sum:", sum);`
                }
            },
            {
                id: 'scope',
                title: 'Variable Scope',
                description: 'Understand where variables can be accessed and used in your code.',
                content: this.generateScopeContent(),
                interactive: this.generateScopeInteractive(),
                exercise: {
                    description: 'Explore global and local scope with functions.',
                    content: this.generateScopeExercise(),
                    solution: `let globalVar = "I am global";\n\nfunction testScope() {\n    let localVar = "I am local";\n    console.log(globalVar); // Works\n    console.log(localVar);  // Works\n}\n\ntestScope();\n// console.log(localVar); // Would cause error`
                }
            },
            {
                id: 'best-practices',
                title: 'Best Practices',
                description: 'Learn professional tips for naming and using variables effectively.',
                content: this.generateBestPracticesContent(),
                interactive: this.generateBestPracticesInteractive()
            }
        ];
    }
    
    generateIntroContent() {
        return `
            <div class="concept-explanation">
                <div class="analogy-section">
                    <h4>🏠 Think of Variables Like Rooms in a House</h4>
                    <div class="analogy-grid">
                        <div class="analogy-item">
                            <div class="room-icon">📦</div>
                            <h5>Storage Box</h5>
                            <p>Each variable is like a labeled storage box</p>
                        </div>
                        <div class="analogy-item">
                            <div class="room-icon">🏷️</div>
                            <h5>Label</h5>
                            <p>The variable name is the label on the box</p>
                        </div>
                        <div class="analogy-item">
                            <div class="room-icon">📄</div>
                            <h5>Contents</h5>
                            <p>The value is what's stored inside the box</p>
                        </div>
                    </div>
                </div>
                
                <div class="code-preview">
                    <h4>Basic Variable Example:</h4>
                    <pre><code>let userName = "Alice";
let userAge = 25;
let isLoggedIn = true;</code></pre>
                </div>
            </div>
        `;
    }
    
    generateIntroInteractive() {
        return `
            <div class="variable-visualizer" id="variableVisualizer">
                <h5>Interactive Variable Creation</h5>
                <div class="variable-creator">
                    <input type="text" id="varName" placeholder="Variable name" />
                    <input type="text" id="varValue" placeholder="Variable value" />
                    <button onclick="VariablesDemo.createVariable()" class="create-btn">Create Variable</button>
                </div>
                <div class="memory-visualization" id="memoryViz">
                    <h6>Computer Memory:</h6>
                    <div class="memory-slots" id="memorySlots">
                        <!-- Memory slots will be added dynamically -->
                    </div>
                </div>
            </div>
        `;
    }
    
    generateDeclaringContent() {
        return `
            <div class="declaring-explanation">
                <h4>Three Ways to Declare Variables:</h4>
                
                <div class="declaration-types">
                    <div class="declaration-type">
                        <h5><code>let</code> - Modern & Flexible</h5>
                        <pre><code>let message = "Hello World";
message = "Updated message"; // Can be changed</code></pre>
                        <ul>
                            <li>✅ Can be reassigned</li>
                            <li>✅ Block-scoped (recommended)</li>
                            <li>✅ Cannot be redeclared</li>
                        </ul>
                    </div>
                    
                    <div class="declaration-type">
                        <h5><code>const</code> - Constant Values</h5>
                        <pre><code>const PI = 3.14159;
const name = "Alice";
// PI = 3.14; // Error! Cannot reassign</code></pre>
                        <ul>
                            <li>❌ Cannot be reassigned</li>
                            <li>✅ Block-scoped</li>
                            <li>✅ Must be initialized</li>
                        </ul>
                    </div>
                    
                    <div class="declaration-type">
                        <h5><code>var</code> - Legacy (Avoid)</h5>
                        <pre><code>var oldStyle = "Not recommended";
var oldStyle = "Can be redeclared"; // Problematic</code></pre>
                        <ul>
                            <li>⚠️ Function-scoped</li>
                            <li>⚠️ Can be redeclared</li>
                            <li>⚠️ Hoisting issues</li>
                        </ul>
                    </div>
                </div>
            </div>
        `;
    }
    
    generateDeclaringInteractive() {
        return `
            <div class="declaration-practice">
                <h5>Practice Variable Declaration</h5>
                <div class="code-editor-mini" id="declarationEditor">
                    <textarea placeholder="Try declaring variables here...
Example:
let firstName = 'Your Name';
const birthYear = 2000;
let isStudent = true;" rows="6"></textarea>
                    <button onclick="VariablesDemo.testDeclaration()" class="test-btn">Test Code</button>
                </div>
                <div class="test-results" id="declarationResults"></div>
            </div>
        `;
    }
    
    generateDeclaringExercise() {
        return `
            <div class="exercise-workspace">
                <div class="instructions">
                    <p><strong>Task:</strong> Create three variables to represent yourself:</p>
                    <ol>
                        <li>Your name (use <code>let</code>)</li>
                        <li>Your age (use <code>let</code>)</li>
                        <li>Whether you like programming (use <code>const</code>)</li>
                    </ol>
                </div>
                <div class="code-workspace">
                    <textarea id="exerciseCode1" placeholder="// Write your code here
let myName = 
let myAge = 
const likesProgramming = " rows="6"></textarea>
                    <button onclick="VariablesDemo.checkExercise(1)" class="check-btn">Check Answer</button>
                </div>
                <div class="exercise-feedback" id="exerciseFeedback1"></div>
            </div>
        `;
    }
    
    generateDataTypesContent() {
        return `
            <div class="data-types-explanation">
                <h4>JavaScript Data Types</h4>
                
                <div class="type-categories">
                    <div class="type-category">
                        <h5>🔤 Primitive Types (Basic)</h5>
                        <div class="type-examples">
                            <div class="type-example">
                                <strong>String</strong> - Text data
                                <pre><code>let name = "Alice";
let message = 'Hello World';
let template = \`Welcome, \${name}!\`;</code></pre>
                            </div>
                            
                            <div class="type-example">
                                <strong>Number</strong> - Numeric data
                                <pre><code>let age = 25;
let price = 19.99;
let negative = -10;</code></pre>
                            </div>
                            
                            <div class="type-example">
                                <strong>Boolean</strong> - True/False
                                <pre><code>let isActive = true;
let isComplete = false;</code></pre>
                            </div>
                            
                            <div class="type-example">
                                <strong>Undefined</strong> - No value assigned
                                <pre><code>let undefinedVar;
console.log(undefinedVar); // undefined</code></pre>
                            </div>
                            
                            <div class="type-example">
                                <strong>Null</strong> - Intentionally empty
                                <pre><code>let emptyValue = null;</code></pre>
                            </div>
                        </div>
                    </div>
                    
                    <div class="type-category">
                        <h5>🏗️ Complex Types (Objects)</h5>
                        <div class="type-examples">
                            <div class="type-example">
                                <strong>Array</strong> - List of values
                                <pre><code>let colors = ["red", "green", "blue"];
let numbers = [1, 2, 3, 4, 5];</code></pre>
                            </div>
                            
                            <div class="type-example">
                                <strong>Object</strong> - Key-value pairs
                                <pre><code>let person = {
    name: "Alice",
    age: 25,
    city: "New York"
};</code></pre>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
    
    generateDataTypesInteractive() {
        return `
            <div class="type-detector">
                <h5>Data Type Detective</h5>
                <p>Guess the data type of each value:</p>
                
                <div class="type-quiz" id="typeQuiz">
                    <div class="quiz-item">
                        <span class="value-display">"Hello World"</span>
                        <select class="type-select" data-answer="string">
                            <option value="">Select type...</option>
                            <option value="string">String</option>
                            <option value="number">Number</option>
                            <option value="boolean">Boolean</option>
                            <option value="object">Object</option>
                        </select>
                        <span class="result-indicator"></span>
                    </div>
                    
                    <div class="quiz-item">
                        <span class="value-display">42</span>
                        <select class="type-select" data-answer="number">
                            <option value="">Select type...</option>
                            <option value="string">String</option>
                            <option value="number">Number</option>
                            <option value="boolean">Boolean</option>
                            <option value="object">Object</option>
                        </select>
                        <span class="result-indicator"></span>
                    </div>
                    
                    <div class="quiz-item">
                        <span class="value-display">true</span>
                        <select class="type-select" data-answer="boolean">
                            <option value="">Select type...</option>
                            <option value="string">String</option>
                            <option value="number">Number</option>
                            <option value="boolean">Boolean</option>
                            <option value="object">Object</option>
                        </select>
                        <span class="result-indicator"></span>
                    </div>
                    
                    <div class="quiz-item">
                        <span class="value-display">[1, 2, 3]</span>
                        <select class="type-select" data-answer="object">
                            <option value="">Select type...</option>
                            <option value="string">String</option>
                            <option value="number">Number</option>
                            <option value="boolean">Boolean</option>
                            <option value="object">Object</option>
                        </select>
                        <span class="result-indicator"></span>
                    </div>
                </div>
                
                <button onclick="VariablesDemo.checkTypes()" class="check-types-btn">Check Answers</button>
                <div class="type-results" id="typeResults"></div>
            </div>
        `;
    }
    
    generateDataTypesExercise() {
        return `
            <div class="exercise-workspace">
                <div class="instructions">
                    <p><strong>Task:</strong> Create variables for each data type with meaningful values:</p>
                    <ul>
                        <li>A string containing your favorite quote</li>
                        <li>A number representing your lucky number</li>
                        <li>A boolean indicating if today is a weekend</li>
                        <li>An array of your three favorite colors</li>
                        <li>An object representing a book with title and author</li>
                    </ul>
                </div>
                <div class="code-workspace">
                    <textarea id="exerciseCode2" placeholder="// Create variables for each data type
let favoriteQuote = 
let luckyNumber = 
let isWeekend = 
let favoriteColors = 
let favoriteBook = " rows="8"></textarea>
                    <button onclick="VariablesDemo.checkExercise(2)" class="check-btn">Check Answer</button>
                </div>
                <div class="exercise-feedback" id="exerciseFeedback2"></div>
            </div>
        `;
    }
    
    generateOperationsContent() {
        return `
            <div class="operations-explanation">
                <h4>Variable Operations & Operators</h4>
                
                <div class="operator-categories">
                    <div class="operator-category">
                        <h5>➕ Arithmetic Operators</h5>
                        <div class="operator-examples">
                            <pre><code>let a = 10;
let b = 3;

let sum = a + b;        // 13 (Addition)
let difference = a - b; // 7  (Subtraction)
let product = a * b;    // 30 (Multiplication)
let quotient = a / b;   // 3.33... (Division)
let remainder = a % b;  // 1  (Modulus)
let power = a ** b;     // 1000 (Exponentiation)</code></pre>
                        </div>
                    </div>
                    
                    <div class="operator-category">
                        <h5>🔗 String Operations</h5>
                        <div class="operator-examples">
                            <pre><code>let firstName = "Alice";
let lastName = "Johnson";

// Concatenation
let fullName = firstName + " " + lastName;

// Template literals (preferred)
let greeting = \`Hello, \${firstName}!\`;

// String methods
let upper = firstName.toUpperCase();
let length = firstName.length;</code></pre>
                        </div>
                    </div>
                    
                    <div class="operator-category">
                        <h5>📈 Assignment Operators</h5>
                        <div class="operator-examples">
                            <pre><code>let count = 5;

count += 2;  // count = count + 2 (7)
count -= 1;  // count = count - 1 (6)
count *= 2;  // count = count * 2 (12)
count /= 3;  // count = count / 3 (4)

// Increment/Decrement
count++;     // count = count + 1 (5)
count--;     // count = count - 1 (4)</code></pre>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
    
    generateOperationsInteractive() {
        return `
            <div class="calculator-demo">
                <h5>Interactive Calculator</h5>
                <div class="calc-interface">
                    <div class="calc-inputs">
                        <input type="number" id="num1" placeholder="First number" value="10" />
                        <select id="operator">
                            <option value="+">+ (Add)</option>
                            <option value="-">- (Subtract)</option>
                            <option value="*">* (Multiply)</option>
                            <option value="/">/ (Divide)</option>
                            <option value="%">% (Modulus)</option>
                            <option value="**">** (Power)</option>
                        </select>
                        <input type="number" id="num2" placeholder="Second number" value="3" />
                        <button onclick="VariablesDemo.calculate()" class="calc-btn">Calculate</button>
                    </div>
                    
                    <div class="calc-result" id="calcResult">
                        <div class="result-display">
                            <span id="calculation">10 + 3</span>
                            <span class="equals">=</span>
                            <span id="result">13</span>
                        </div>
                        <div class="code-generated" id="codeGenerated">
                            <pre><code>let result = 10 + 3; // 13</code></pre>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
    
    generateOperationsExercise() {
        return `
            <div class="exercise-workspace">
                <div class="instructions">
                    <p><strong>Task:</strong> Create a simple calculator that:</p>
                    <ol>
                        <li>Declares two number variables</li>
                        <li>Calculates their sum, difference, and product</li>
                        <li>Displays the results using console.log</li>
                    </ol>
                </div>
                <div class="code-workspace">
                    <textarea id="exerciseCode3" placeholder="// Create a simple calculator
let firstNumber = 
let secondNumber = 

// Calculate operations
let sum = 
let difference = 
let product = 

// Display results
console.log();" rows="10"></textarea>
                    <button onclick="VariablesDemo.checkExercise(3)" class="check-btn">Check Answer</button>
                </div>
                <div class="exercise-feedback" id="exerciseFeedback3"></div>
            </div>
        `;
    }
    
    generateScopeContent() {
        return `
            <div class="scope-explanation">
                <h4>Variable Scope: Where Can Variables Be Accessed?</h4>
                
                <div class="scope-levels">
                    <div class="scope-level">
                        <h5>🌍 Global Scope</h5>
                        <p>Variables declared outside all functions and blocks</p>
                        <pre><code>let globalVar = "I'm accessible everywhere";

function anyFunction() {
    console.log(globalVar); // ✅ Works
}

if (true) {
    console.log(globalVar); // ✅ Works
}</code></pre>
                    </div>
                    
                    <div class="scope-level">
                        <h5>🏢 Function Scope</h5>
                        <p>Variables declared inside a function</p>
                        <pre><code>function myFunction() {
    let functionVar = "Only inside this function";
    console.log(functionVar); // ✅ Works
}

// console.log(functionVar); // ❌ Error!</code></pre>
                    </div>
                    
                    <div class="scope-level">
                        <h5>🧱 Block Scope</h5>
                        <p>Variables declared inside {} blocks (let/const only)</p>
                        <pre><code>if (true) {
    let blockVar = "Only inside this block";
    console.log(blockVar); // ✅ Works
}

// console.log(blockVar); // ❌ Error!</code></pre>
                    </div>
                </div>
                
                <div class="scope-visualization" id="scopeViz">
                    <h5>Scope Visualization</h5>
                    <div class="scope-diagram">
                        <div class="scope-global">
                            <span class="scope-label">Global Scope</span>
                            <div class="scope-function">
                                <span class="scope-label">Function Scope</span>
                                <div class="scope-block">
                                    <span class="scope-label">Block Scope</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
    
    generateScopeInteractive() {
        return `
            <div class="scope-tester">
                <h5>Scope Explorer</h5>
                <div class="scope-demo">
                    <div class="code-section">
                        <pre><code id="scopeCode">let global = "Global variable";

function testScope() {
    let local = "Local variable";
    
    if (true) {
        let block = "Block variable";
        // Try accessing variables here
    }
    
    // Try accessing variables here
}

// Try accessing variables here</code></pre>
                    </div>
                    
                    <div class="scope-controls">
                        <h6>Test variable access:</h6>
                        <div class="test-buttons">
                            <button onclick="VariablesDemo.testScope('global', 'global')" class="scope-test-btn">
                                Access 'global' in global scope
                            </button>
                            <button onclick="VariablesDemo.testScope('global', 'function')" class="scope-test-btn">
                                Access 'global' in function scope
                            </button>
                            <button onclick="VariablesDemo.testScope('local', 'global')" class="scope-test-btn">
                                Access 'local' in global scope
                            </button>
                            <button onclick="VariablesDemo.testScope('block', 'function')" class="scope-test-btn">
                                Access 'block' in function scope
                            </button>
                        </div>
                        <div class="scope-results" id="scopeResults"></div>
                    </div>
                </div>
            </div>
        `;
    }
    
    generateScopeExercise() {
        return `
            <div class="exercise-workspace">
                <div class="instructions">
                    <p><strong>Task:</strong> Create a function that demonstrates different scopes:</p>
                    <ol>
                        <li>Create a global variable</li>
                        <li>Create a function with a local variable</li>
                        <li>Inside the function, create a block with its own variable</li>
                        <li>Show which variables are accessible where</li>
                    </ol>
                </div>
                <div class="code-workspace">
                    <textarea id="exerciseCode4" placeholder="// Demonstrate variable scope
let globalVariable = 

function demonstrateScope() {
    let localVariable = 
    
    console.log(); // Access global variable
    console.log(); // Access local variable
    
    if (true) {
        let blockVariable = 
        console.log(); // Access all three variables
    }
    
    // console.log(blockVariable); // This would cause an error
}

demonstrateScope();" rows="12"></textarea>
                    <button onclick="VariablesDemo.checkExercise(4)" class="check-btn">Check Answer</button>
                </div>
                <div class="exercise-feedback" id="exerciseFeedback4"></div>
            </div>
        `;
    }
    
    generateBestPracticesContent() {
        return `
            <div class="best-practices">
                <h4>Variable Best Practices</h4>
                
                <div class="practice-categories">
                    <div class="practice-category">
                        <h5>✅ Naming Conventions</h5>
                        <div class="good-bad-examples">
                            <div class="good-example">
                                <h6>✅ Good:</h6>
                                <pre><code>let userName = "alice123";
let totalPrice = 29.99;
let isLoggedIn = true;
let userAccountBalance = 1500.00;</code></pre>
                                <ul>
                                    <li>Descriptive names</li>
                                    <li>camelCase for variables</li>
                                    <li>Boolean variables start with "is", "has", "can"</li>
                                </ul>
                            </div>
                            
                            <div class="bad-example">
                                <h6>❌ Bad:</h6>
                                <pre><code>let x = "alice123";
let p = 29.99;
let flag = true;
let uab = 1500.00;</code></pre>
                                <ul>
                                    <li>Non-descriptive names</li>
                                    <li>Single letters</li>
                                    <li>Unclear abbreviations</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div class="practice-category">
                        <h5>🎯 When to Use Each Declaration</h5>
                        <div class="declaration-guide">
                            <div class="guide-item">
                                <strong>Use <code>const</code> when:</strong>
                                <ul>
                                    <li>Value won't change</li>
                                    <li>Configuration values</li>
                                    <li>Function references</li>
                                </ul>
                                <pre><code>const PI = 3.14159;
const API_URL = "https://api.example.com";
const MAX_USERS = 100;</code></pre>
                            </div>
                            
                            <div class="guide-item">
                                <strong>Use <code>let</code> when:</strong>
                                <ul>
                                    <li>Value will change</li>
                                    <li>Loop counters</li>
                                    <li>Conditional assignments</li>
                                </ul>
                                <pre><code>let currentUser = null;
let attempts = 0;
let message = "";</code></pre>
                            </div>
                            
                            <div class="guide-item">
                                <strong>Avoid <code>var</code>:</strong>
                                <ul>
                                    <li>Function-scoped (confusing)</li>
                                    <li>Can be redeclared</li>
                                    <li>Hoisting issues</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div class="practice-category">
                        <h5>🔧 Common Patterns</h5>
                        <div class="pattern-examples">
                            <div class="pattern">
                                <strong>Constants at the top:</strong>
                                <pre><code>const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;
const PLAYER_SPEED = 5;

let playerX = GAME_WIDTH / 2;
let playerY = GAME_HEIGHT / 2;</code></pre>
                            </div>
                            
                            <div class="pattern">
                                <strong>Initialize near usage:</strong>
                                <pre><code>function calculateTotal(items) {
    let total = 0; // Initialize close to where it's used
    
    for (let item of items) {
        total += item.price;
    }
    
    return total;
}</code></pre>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
    
    generateBestPracticesInteractive() {
        return `
            <div class="naming-checker">
                <h5>Variable Name Checker</h5>
                <p>Rate these variable names - are they good or bad?</p>
                
                <div class="name-quiz" id="nameQuiz">
                    <div class="name-item">
                        <span class="variable-name">let x = 25;</span>
                        <div class="rating-buttons">
                            <button onclick="VariablesDemo.rateName(this, 'bad')" class="rate-btn bad">Bad</button>
                            <button onclick="VariablesDemo.rateName(this, 'good')" class="rate-btn good">Good</button>
                        </div>
                        <div class="feedback" data-correct="bad">Too generic - what does 'x' represent?</div>
                    </div>
                    
                    <div class="name-item">
                        <span class="variable-name">let userAge = 25;</span>
                        <div class="rating-buttons">
                            <button onclick="VariablesDemo.rateName(this, 'bad')" class="rate-btn bad">Bad</button>
                            <button onclick="VariablesDemo.rateName(this, 'good')" class="rate-btn good">Good</button>
                        </div>
                        <div class="feedback" data-correct="good">Descriptive and follows camelCase convention!</div>
                    </div>
                    
                    <div class="name-item">
                        <span class="variable-name">let IsActive = true;</span>
                        <div class="rating-buttons">
                            <button onclick="VariablesDemo.rateName(this, 'bad')" class="rate-btn bad">Bad</button>
                            <button onclick="VariablesDemo.rateName(this, 'good')" class="rate-btn good">Good</button>
                        </div>
                        <div class="feedback" data-correct="bad">Should use camelCase: 'isActive' not 'IsActive'</div>
                    </div>
                    
                    <div class="name-item">
                        <span class="variable-name">const MAX_RETRIES = 3;</span>
                        <div class="rating-buttons">
                            <button onclick="VariablesDemo.rateName(this, 'bad')" class="rate-btn bad">Bad</button>
                            <button onclick="VariablesDemo.rateName(this, 'good')" class="rate-btn good">Good</button>
                        </div>
                        <div class="feedback" data-correct="good">Great constant naming - UPPER_SNAKE_CASE for constants!</div>
                    </div>
                </div>
                
                <div class="quiz-score" id="nameQuizScore"></div>
            </div>
        `;
    }
    
    async setupEventListeners() {
        super.setupEventListeners();
        
        // Add event listeners for type quiz
        const typeSelects = document.querySelectorAll('.type-select');
        typeSelects.forEach(select => {
            select.addEventListener('change', this.handleTypeSelection.bind(this));
        });
        
        // Initialize calculator
        this.calculate();
    }
    
    handleTypeSelection(event) {
        const select = event.target;
        const correctAnswer = select.dataset.answer;
        const selectedAnswer = select.value;
        const indicator = select.nextElementSibling;
        
        if (selectedAnswer) {
            if (selectedAnswer === correctAnswer) {
                indicator.textContent = '✅';
                indicator.className = 'result-indicator correct';
                select.classList.add('correct');
                select.classList.remove('incorrect');
            } else {
                indicator.textContent = '❌';
                indicator.className = 'result-indicator incorrect';
                select.classList.add('incorrect');
                select.classList.remove('correct');
            }
        } else {
            indicator.textContent = '';
            indicator.className = 'result-indicator';
            select.classList.remove('correct', 'incorrect');
        }
    }
    
    // Static methods for interactive elements
    static createVariable() {
        const nameInput = document.getElementById('varName');
        const valueInput = document.getElementById('varValue');
        const memorySlots = document.getElementById('memorySlots');
        
        if (!nameInput || !valueInput || !memorySlots) return;
        
        const name = nameInput.value.trim();
        const value = valueInput.value.trim();
        
        if (!name || !value) {
            alert('Please enter both variable name and value');
            return;
        }
        
        // Create memory slot
        const slot = document.createElement('div');
        slot.className = 'memory-slot';
        slot.innerHTML = `
            <div class="slot-address">${Math.random().toString(16).substr(2, 6).toUpperCase()}</div>
            <div class="slot-name">${name}</div>
            <div class="slot-value">${value}</div>
            <div class="slot-type">${VariablesDemo.detectType(value)}</div>
        `;
        
        memorySlots.appendChild(slot);
        
        // Clear inputs
        nameInput.value = '';
        valueInput.value = '';
        
        // Add animation
        slot.style.animation = 'slideInRight 0.3s ease-out';
    }
    
    static detectType(value) {
        // Remove quotes for string detection
        const trimmed = value.trim();
        
        if ((trimmed.startsWith('"') && trimmed.endsWith('"')) || 
            (trimmed.startsWith("'") && trimmed.endsWith("'"))) {
            return 'string';
        }
        
        if (trimmed === 'true' || trimmed === 'false') {
            return 'boolean';
        }
        
        if (!isNaN(trimmed) && !isNaN(parseFloat(trimmed))) {
            return 'number';
        }
        
        if (trimmed.startsWith('[') && trimmed.endsWith(']')) {
            return 'array';
        }
        
        if (trimmed.startsWith('{') && trimmed.endsWith('}')) {
            return 'object';
        }
        
        return 'string';
    }
    
    static testDeclaration() {
        const editor = document.querySelector('#declarationEditor textarea');
        const results = document.getElementById('declarationResults');
        
        if (!editor || !results) return;
        
        const code = editor.value;
        const lines = code.split('\n').filter(line => line.trim());
        
        let feedback = '<h6>Analysis:</h6><ul>';
        let hasLet = false;
        let hasConst = false;
        let hasVar = false;
        
        lines.forEach(line => {
            const trimmed = line.trim();
            if (trimmed.startsWith('let ')) {
                hasLet = true;
                feedback += '<li>✅ Good use of <code>let</code></li>';
            } else if (trimmed.startsWith('const ')) {
                hasConst = true;
                feedback += '<li>✅ Good use of <code>const</code></li>';
            } else if (trimmed.startsWith('var ')) {
                hasVar = true;
                feedback += '<li>⚠️ Consider using <code>let</code> instead of <code>var</code></li>';
            }
        });
        
        if (hasLet && hasConst) {
            feedback += '<li>🎉 Great job using both <code>let</code> and <code>const</code>!</li>';
        }
        
        feedback += '</ul>';
        results.innerHTML = feedback;
    }
    
    static checkTypes() {
        const selects = document.querySelectorAll('.type-select');
        const results = document.getElementById('typeResults');
        let correct = 0;
        let total = selects.length;
        
        selects.forEach(select => {
            const correctAnswer = select.dataset.answer;
            const selectedAnswer = select.value;
            const indicator = select.nextElementSibling;
            
            if (selectedAnswer === correctAnswer) {
                correct++;
                indicator.textContent = '✅';
                indicator.className = 'result-indicator correct';
            } else {
                indicator.textContent = '❌';
                indicator.className = 'result-indicator incorrect';
            }
        });
        
        const percentage = Math.round((correct / total) * 100);
        results.innerHTML = `
            <div class="score-display">
                Score: ${correct}/${total} (${percentage}%)
                ${percentage >= 80 ? '🎉 Excellent!' : percentage >= 60 ? '👍 Good job!' : '💪 Keep practicing!'}
            </div>
        `;
        
        if (percentage === 100 && window.OpenCodeApp?.progressTracker) {
            window.OpenCodeApp.progressTracker.recordExerciseCompletion(false);
        }
    }
    
    static calculate() {
        const num1Input = document.getElementById('num1');
        const num2Input = document.getElementById('num2');
        const operatorSelect = document.getElementById('operator');
        const calculationSpan = document.getElementById('calculation');
        const resultSpan = document.getElementById('result');
        const codeGenerated = document.getElementById('codeGenerated');
        
        if (!num1Input || !num2Input || !operatorSelect) return;
        
        const num1 = parseFloat(num1Input.value) || 0;
        const num2 = parseFloat(num2Input.value) || 0;
        const operator = operatorSelect.value;
        
        let result;
        switch (operator) {
            case '+': result = num1 + num2; break;
            case '-': result = num1 - num2; break;
            case '*': result = num1 * num2; break;
            case '/': result = num2 !== 0 ? num1 / num2 : 'Error'; break;
            case '%': result = num2 !== 0 ? num1 % num2 : 'Error'; break;
            case '**': result = Math.pow(num1, num2); break;
            default: result = 0;
        }
        
        if (calculationSpan) calculationSpan.textContent = `${num1} ${operator} ${num2}`;
        if (resultSpan) resultSpan.textContent = result;
        
        if (codeGenerated) {
            codeGenerated.innerHTML = `<pre><code>let num1 = ${num1};
let num2 = ${num2};
let result = num1 ${operator} num2; // ${result}</code></pre>`;
        }
    }
    
    static testScope(variable, scope) {
        const results = document.getElementById('scopeResults');
        
        const scopeRules = {
            'global-global': true,
            'global-function': true,
            'global-block': true,
            'local-global': false,
            'local-function': true,
            'local-block': true,
            'block-global': false,
            'block-function': false,
            'block-block': true
        };
        
        const key = `${variable}-${scope}`;
        const isAccessible = scopeRules[key];
        
        const resultHTML = `
            <div class="scope-test-result ${isAccessible ? 'accessible' : 'not-accessible'}">
                <strong>Accessing '${variable}' in ${scope} scope:</strong>
                ${isAccessible ? '✅ Accessible' : '❌ Not accessible (ReferenceError)'}
            </div>
        `;
        
        results.innerHTML = resultHTML;
    }
    
    static checkExercise(exerciseNumber) {
        const code = document.getElementById(`exerciseCode${exerciseNumber}`).value;
        const feedback = document.getElementById(`exerciseFeedback${exerciseNumber}`);
        
        // Simple validation logic for each exercise
        let isCorrect = false;
        let feedbackText = '';
        
        switch (exerciseNumber) {
            case 1:
                isCorrect = code.includes('let myName') && code.includes('let myAge') && code.includes('const likesProgramming');
                feedbackText = isCorrect ? '✅ Great! You used the correct variable declarations.' : '❌ Make sure to use let for name and age, const for likesProgramming.';
                break;
            case 2:
                isCorrect = code.includes('let') && code.includes('const') && code.includes('[') && code.includes('{');
                feedbackText = isCorrect ? '✅ Excellent! You created variables for all data types.' : '❌ Make sure to include string, number, boolean, array, and object variables.';
                break;
            case 3:
                isCorrect = code.includes('+') && code.includes('-') && code.includes('*') && code.includes('console.log');
                feedbackText = isCorrect ? '✅ Perfect! You created a working calculator.' : '❌ Make sure to calculate sum, difference, and product, then display results.';
                break;
            case 4:
                isCorrect = code.includes('let globalVariable') && code.includes('function') && code.includes('let localVariable');
                feedbackText = isCorrect ? '✅ Wonderful! You demonstrated variable scope correctly.' : '❌ Make sure to create global, local, and block variables as requested.';
                break;
        }
        
        feedback.innerHTML = `
            <div class="feedback-message ${isCorrect ? 'success' : 'error'}">
                ${feedbackText}
            </div>
        `;
        
        if (isCorrect && window.OpenCodeApp?.progressTracker) {
            window.OpenCodeApp.progressTracker.recordExerciseCompletion(false);
        }
    }
    
    static rateName(button, rating) {
        const nameItem = button.closest('.name-item');
        const feedback = nameItem.querySelector('.feedback');
        const correctRating = feedback.dataset.correct;
        const buttons = nameItem.querySelectorAll('.rate-btn');
        
        // Remove previous selections
        buttons.forEach(btn => btn.classList.remove('selected', 'correct', 'incorrect'));
        
        // Add selection to clicked button
        button.classList.add('selected');
        
        if (rating === correctRating) {
            button.classList.add('correct');
            feedback.style.display = 'block';
            feedback.style.color = '#10b981';
        } else {
            button.classList.add('incorrect');
            feedback.style.display = 'block';
            feedback.style.color = '#ef4444';
        }
        
        // Update score
        setTimeout(() => {
            VariablesDemo.updateNameQuizScore();
        }, 100);
    }
    
    static updateNameQuizScore() {
        const correctButtons = document.querySelectorAll('.rate-btn.correct');
        const totalQuestions = document.querySelectorAll('.name-item').length;
        const score = correctButtons.length;
        const percentage = Math.round((score / totalQuestions) * 100);
        
        const scoreElement = document.getElementById('nameQuizScore');
        if (scoreElement) {
            scoreElement.innerHTML = `
                <div class="final-score">
                    Final Score: ${score}/${totalQuestions} (${percentage}%)
                    ${percentage >= 80 ? '🎉 You understand good variable naming!' : '💪 Keep practicing variable naming conventions!'}
                </div>
            `;
        }
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = VariablesDemo;
}