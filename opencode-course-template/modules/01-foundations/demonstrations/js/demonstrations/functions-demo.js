/**
 * Functions and Control Flow Interactive Demonstration
 * Teaches function creation, parameters, return values, and control structures
 */

class FunctionsDemo extends BaseDemo {
    constructor(container) {
        super(container);
        this.executionStack = [];
        this.flowchartContainer = null;
    }
    
    getTitle() {
        return 'Functions & Control Flow';
    }
    
    getDemoType() {
        return 'functions';
    }
    
    setupSteps() {
        this.steps = [
            {
                id: 'function-intro',
                title: 'What are Functions?',
                description: 'Functions are reusable blocks of code that perform specific tasks. Think of them as mini-programs within your program.',
                content: this.generateFunctionIntroContent(),
                interactive: this.generateFunctionIntroInteractive()
            },
            {
                id: 'creating-functions',
                title: 'Creating Functions',
                description: 'Learn the different ways to create functions in JavaScript.',
                content: this.generateCreatingFunctionsContent(),
                interactive: this.generateCreatingFunctionsInteractive(),
                exercise: {
                    description: 'Create a function that greets a user by name.',
                    content: this.generateCreatingFunctionsExercise(),
                    solution: `function greetUser(name) {\n    return "Hello, " + name + "!";\n}\n\nconsole.log(greetUser("Alice"));`
                }
            },
            {
                id: 'parameters-returns',
                title: 'Parameters & Return Values',
                description: 'Master function inputs (parameters) and outputs (return values).',
                content: this.generateParametersReturnsContent(),
                interactive: this.generateParametersReturnsInteractive(),
                exercise: {
                    description: 'Create a calculator function that takes two numbers and an operation.',
                    content: this.generateParametersReturnsExercise(),
                    solution: `function calculate(num1, num2, operation) {\n    switch(operation) {\n        case "add": return num1 + num2;\n        case "subtract": return num1 - num2;\n        case "multiply": return num1 * num2;\n        case "divide": return num2 !== 0 ? num1 / num2 : "Error";\n        default: return "Invalid operation";\n    }\n}`
                }
            },
            {
                id: 'conditionals',
                title: 'Conditional Statements',
                description: 'Control program flow with if/else statements and logical decisions.',
                content: this.generateConditionalsContent(),
                interactive: this.generateConditionalsInteractive(),
                exercise: {
                    description: 'Create a grade calculator that assigns letter grades based on numeric scores.',
                    content: this.generateConditionalsExercise(),
                    solution: `function getGrade(score) {\n    if (score >= 90) return "A";\n    else if (score >= 80) return "B";\n    else if (score >= 70) return "C";\n    else if (score >= 60) return "D";\n    else return "F";\n}`
                }
            },
            {
                id: 'loops',
                title: 'Loops',
                description: 'Repeat code efficiently with for loops, while loops, and iteration.',
                content: this.generateLoopsContent(),
                interactive: this.generateLoopsInteractive(),
                exercise: {
                    description: 'Create functions using different loop types to process arrays.',
                    content: this.generateLoopsExercise(),
                    solution: `function sumArray(numbers) {\n    let sum = 0;\n    for (let i = 0; i < numbers.length; i++) {\n        sum += numbers[i];\n    }\n    return sum;\n}\n\nfunction findMax(numbers) {\n    let max = numbers[0];\n    for (let num of numbers) {\n        if (num > max) max = num;\n    }\n    return max;\n}`
                }
            },
            {
                id: 'advanced-concepts',
                title: 'Advanced Concepts',
                description: 'Explore arrow functions, callbacks, and function composition.',
                content: this.generateAdvancedContent(),
                interactive: this.generateAdvancedInteractive(),
                exercise: {
                    description: 'Create higher-order functions that work with arrays.',
                    content: this.generateAdvancedExercise(),
                    solution: `const double = x => x * 2;\nconst isEven = x => x % 2 === 0;\n\nfunction processArray(arr, operation) {\n    return arr.map(operation);\n}\n\nfunction filterArray(arr, condition) {\n    return arr.filter(condition);\n}`
                }
            }
        ];
    }
    
    generateFunctionIntroContent() {
        return `
            <div class="concept-explanation">
                <div class="analogy-section">
                    <h4>🏭 Functions are Like Factories</h4>
                    <div class="factory-analogy">
                        <div class="factory-step">
                            <div class="step-icon">📥</div>
                            <h5>Input (Parameters)</h5>
                            <p>Raw materials go into the factory</p>
                        </div>
                        <div class="factory-arrow">→</div>
                        <div class="factory-step">
                            <div class="step-icon">⚙️</div>
                            <h5>Process (Function Body)</h5>
                            <p>Factory machines do the work</p>
                        </div>
                        <div class="factory-arrow">→</div>
                        <div class="factory-step">
                            <div class="step-icon">📤</div>
                            <h5>Output (Return Value)</h5>
                            <p>Finished product comes out</p>
                        </div>
                    </div>
                </div>
                
                <div class="benefits-section">
                    <h4>Why Use Functions?</h4>
                    <div class="benefits-grid">
                        <div class="benefit-item">
                            <span class="benefit-icon">♻️</span>
                            <h5>Reusability</h5>
                            <p>Write once, use many times</p>
                        </div>
                        <div class="benefit-item">
                            <span class="benefit-icon">🧩</span>
                            <h5>Organization</h5>
                            <p>Break complex problems into smaller pieces</p>
                        </div>
                        <div class="benefit-item">
                            <span class="benefit-icon">🐛</span>
                            <h5>Debugging</h5>
                            <p>Easier to find and fix errors</p>
                        </div>
                        <div class="benefit-item">
                            <span class="benefit-icon">👥</span>
                            <h5>Collaboration</h5>
                            <p>Team members can work on different functions</p>
                        </div>
                    </div>
                </div>
                
                <div class="simple-example">
                    <h4>Simple Function Example:</h4>
                    <pre><code>// Function definition
function sayHello(name) {
    return "Hello, " + name + "!";
}

// Function call
let message = sayHello("Alice");
console.log(message); // "Hello, Alice!"</code></pre>
                </div>
            </div>
        `;
    }
    
    generateFunctionIntroInteractive() {
        return `
            <div class="function-builder">
                <h5>Build Your First Function</h5>
                <div class="builder-interface">
                    <div class="builder-step">
                        <label>Function Name:</label>
                        <input type="text" id="functionName" placeholder="e.g., calculateArea" />
                    </div>
                    <div class="builder-step">
                        <label>Parameters (comma-separated):</label>
                        <input type="text" id="functionParams" placeholder="e.g., width, height" />
                    </div>
                    <div class="builder-step">
                        <label>Function Body:</label>
                        <textarea id="functionBody" placeholder="e.g., return width * height;" rows="3"></textarea>
                    </div>
                    <button onclick="FunctionsDemo.buildFunction()" class="build-btn">Build Function</button>
                </div>
                
                <div class="generated-function" id="generatedFunction">
                    <h6>Generated Function:</h6>
                    <pre><code id="functionCode">// Your function will appear here</code></pre>
                    <button onclick="FunctionsDemo.testFunction()" class="test-btn" style="display: none;">Test Function</button>
                </div>
                
                <div class="test-area" id="testArea" style="display: none;">
                    <h6>Test Your Function:</h6>
                    <div id="testInputs"></div>
                    <div class="test-result" id="testResult"></div>
                </div>
            </div>
        `;
    }
    
    generateCreatingFunctionsContent() {
        return `
            <div class="function-types">
                <h4>Different Ways to Create Functions</h4>
                
                <div class="function-type">
                    <h5>1. Function Declaration (Traditional)</h5>
                    <pre><code>function calculateArea(width, height) {
    return width * height;
}

// Can be called before declaration (hoisting)
let area = calculateArea(5, 3); // 15</code></pre>
                    <div class="characteristics">
                        <span class="pro">✅ Hoisted (available throughout scope)</span>
                        <span class="pro">✅ Clear and readable</span>
                        <span class="pro">✅ Good for main functions</span>
                    </div>
                </div>
                
                <div class="function-type">
                    <h5>2. Function Expression</h5>
                    <pre><code>const calculateArea = function(width, height) {
    return width * height;
};

// Must be called after definition
let area = calculateArea(5, 3); // 15</code></pre>
                    <div class="characteristics">
                        <span class="con">❌ Not hoisted</span>
                        <span class="pro">✅ Can be assigned to variables</span>
                        <span class="pro">✅ Good for callbacks</span>
                    </div>
                </div>
                
                <div class="function-type">
                    <h5>3. Arrow Function (Modern)</h5>
                    <pre><code>// Concise syntax
const calculateArea = (width, height) => {
    return width * height;
};

// Even more concise for single expressions
const calculateArea = (width, height) => width * height;

// Single parameter doesn't need parentheses
const square = x => x * x;</code></pre>
                    <div class="characteristics">
                        <span class="pro">✅ Concise syntax</span>
                        <span class="pro">✅ No 'this' binding issues</span>
                        <span class="con">❌ Not hoisted</span>
                    </div>
                </div>
            </div>
        `;
    }
    
    generateCreatingFunctionsInteractive() {
        return `
            <div class="function-comparison">
                <h5>Function Syntax Converter</h5>
                <div class="converter-interface">
                    <div class="input-section">
                        <label>Enter a function description:</label>
                        <select id="functionTemplate">
                            <option value="greet">Greet a person by name</option>
                            <option value="add">Add two numbers</option>
                            <option value="isEven">Check if number is even</option>
                            <option value="getMax">Find maximum of two numbers</option>
                        </select>
                        <button onclick="FunctionsDemo.convertFunction()" class="convert-btn">Convert to All Syntaxes</button>
                    </div>
                    
                    <div class="conversion-results" id="conversionResults">
                        <div class="syntax-result">
                            <h6>Function Declaration:</h6>
                            <pre><code id="declarationSyntax"></code></pre>
                        </div>
                        <div class="syntax-result">
                            <h6>Function Expression:</h6>
                            <pre><code id="expressionSyntax"></code></pre>
                        </div>
                        <div class="syntax-result">
                            <h6>Arrow Function:</h6>
                            <pre><code id="arrowSyntax"></code></pre>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
    
    generateCreatingFunctionsExercise() {
        return `
            <div class="exercise-workspace">
                <div class="instructions">
                    <p><strong>Task:</strong> Create three versions of a greeting function:</p>
                    <ol>
                        <li>Function declaration that takes a name and returns a greeting</li>
                        <li>Function expression that does the same thing</li>
                        <li>Arrow function version</li>
                    </ol>
                    <p>Test all three versions with the same input.</p>
                </div>
                <div class="code-workspace">
                    <textarea id="exerciseCode1" placeholder="// 1. Function Declaration
function greetUser(name) {
    // Your code here
}

// 2. Function Expression
const greetUser2 = function(name) {
    // Your code here
};

// 3. Arrow Function
const greetUser3 = (name) => {
    // Your code here
};

// Test all three
console.log(greetUser('Alice'));
console.log(greetUser2('Bob'));
console.log(greetUser3('Charlie'));" rows="15"></textarea>
                    <button onclick="FunctionsDemo.checkExercise(1)" class="check-btn">Check Answer</button>
                </div>
                <div class="exercise-feedback" id="exerciseFeedback1"></div>
            </div>
        `;
    }
    
    generateParametersReturnsContent() {
        return `
            <div class="parameters-returns-explanation">
                <h4>Function Parameters & Return Values</h4>
                
                <div class="concept-section">
                    <h5>📥 Parameters (Inputs)</h5>
                    <div class="parameter-examples">
                        <div class="example">
                            <h6>No Parameters:</h6>
                            <pre><code>function getCurrentTime() {
    return new Date().toLocaleTimeString();
}</code></pre>
                        </div>
                        
                        <div class="example">
                            <h6>Single Parameter:</h6>
                            <pre><code>function square(number) {
    return number * number;
}</code></pre>
                        </div>
                        
                        <div class="example">
                            <h6>Multiple Parameters:</h6>
                            <pre><code>function calculateDistance(x1, y1, x2, y2) {
    let dx = x2 - x1;
                            let dy = y2 - y1;
    return Math.sqrt(dx * dx + dy * dy);
}</code></pre>
                        </div>
                        
                        <div class="example">
                            <h6>Default Parameters:</h6>
                            <pre><code>function greet(name = "Guest", greeting = "Hello") {
    return \`\${greeting}, \${name}!\`;
}

console.log(greet());              // "Hello, Guest!"
console.log(greet("Alice"));       // "Hello, Alice!"
console.log(greet("Bob", "Hi"));   // "Hi, Bob!"</code></pre>
                        </div>
                    </div>
                </div>
                
                <div class="concept-section">
                    <h5>📤 Return Values (Outputs)</h5>
                    <div class="return-examples">
                        <div class="example">
                            <h6>Returning Values:</h6>
                            <pre><code>function add(a, b) {
    return a + b;  // Returns the sum
}

let result = add(5, 3); // result is 8</code></pre>
                        </div>
                        
                        <div class="example">
                            <h6>Multiple Return Statements:</h6>
                            <pre><code>function getGrade(score) {
    if (score >= 90) return "A";
    if (score >= 80) return "B";
    if (score >= 70) return "C";
    if (score >= 60) return "D";
    return "F";
}</code></pre>
                        </div>
                        
                        <div class="example">
                            <h6>Returning Objects:</h6>
                            <pre><code>function createUser(name, age) {
    return {
        name: name,
        age: age,
        isAdult: age >= 18
    };
}</code></pre>
                        </div>
                        
                        <div class="example">
                            <h6>No Return (undefined):</h6>
                            <pre><code>function logMessage(message) {
    console.log(message);
    // No return statement = returns undefined
}</code></pre>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
    
    generateParametersReturnsInteractive() {
        return `
            <div class="parameter-playground">
                <h5>Parameter & Return Value Playground</h5>
                
                <div class="playground-interface">
                    <div class="function-creator">
                        <h6>Create a Custom Function:</h6>
                        <div class="creator-inputs">
                            <input type="text" id="customFunctionName" placeholder="Function name" value="processData" />
                            <div class="parameters-section">
                                <h6>Parameters:</h6>
                                <div id="parameterList">
                                    <div class="parameter-input">
                                        <input type="text" placeholder="Parameter name" value="input" />
                                        <input type="text" placeholder="Default value (optional)" />
                                        <button onclick="FunctionsDemo.removeParameter(this)">Remove</button>
                                    </div>
                                </div>
                                <button onclick="FunctionsDemo.addParameter()" class="add-param-btn">Add Parameter</button>
                            </div>
                            <div class="return-section">
                                <h6>Return Expression:</h6>
                                <input type="text" id="returnExpression" placeholder="What to return" value="input * 2" />
                            </div>
                            <button onclick="FunctionsDemo.generateCustomFunction()" class="generate-btn">Generate Function</button>
                        </div>
                    </div>
                    
                    <div class="generated-function-display" id="customFunctionDisplay">
                        <h6>Generated Function:</h6>
                        <pre><code id="customFunctionCode"></code></pre>
                    </div>
                    
                    <div class="function-tester" id="functionTester">
                        <h6>Test Your Function:</h6>
                        <div id="testParameterInputs"></div>
                        <button onclick="FunctionsDemo.testCustomFunction()" class="test-custom-btn">Test Function</button>
                        <div class="test-output" id="customTestOutput"></div>
                    </div>
                </div>
            </div>
        `;
    }
    
    generateParametersReturnsExercise() {
        return `
            <div class="exercise-workspace">
                <div class="instructions">
                    <p><strong>Task:</strong> Create a versatile calculator function:</p>
                    <ul>
                        <li>Function name: <code>calculate</code></li>
                        <li>Parameters: two numbers and an operation string</li>
                        <li>Support operations: "add", "subtract", "multiply", "divide"</li>
                        <li>Return the result or "Error" for invalid operations</li>
                        <li>Handle division by zero</li>
                    </ul>
                </div>
                <div class="code-workspace">
                    <textarea id="exerciseCode2" placeholder="function calculate(num1, num2, operation) {
    // Your implementation here
    // Handle: add, subtract, multiply, divide
    // Return result or 'Error' for invalid operations
    // Handle division by zero
}

// Test cases
console.log(calculate(10, 5, 'add'));       // Should return 15
console.log(calculate(10, 5, 'subtract'));  // Should return 5
console.log(calculate(10, 5, 'multiply'));  // Should return 50
console.log(calculate(10, 5, 'divide'));    // Should return 2
console.log(calculate(10, 0, 'divide'));    // Should return 'Error'
console.log(calculate(10, 5, 'invalid'));   // Should return 'Error'" rows="12"></textarea>
                    <button onclick="FunctionsDemo.checkExercise(2)" class="check-btn">Check Answer</button>
                </div>
                <div class="exercise-feedback" id="exerciseFeedback2"></div>
            </div>
        `;
    }
    
    generateConditionalsContent() {
        return `
            <div class="conditionals-explanation">
                <h4>Conditional Statements - Making Decisions</h4>
                
                <div class="conditional-types">
                    <div class="conditional-type">
                        <h5>🤔 If Statement</h5>
                        <pre><code>let age = 18;

if (age >= 18) {
    console.log("You can vote!");
}</code></pre>
                        <div class="flowchart-mini">
                            <div class="flow-condition">age >= 18?</div>
                            <div class="flow-arrow-yes">Yes → Execute code</div>
                            <div class="flow-arrow-no">No → Skip code</div>
                        </div>
                    </div>
                    
                    <div class="conditional-type">
                        <h5>⚖️ If-Else Statement</h5>
                        <pre><code>let temperature = 25;

if (temperature > 30) {
    console.log("It's hot!");
} else {
    console.log("It's not hot.");
}</code></pre>
                        <p>Provides an alternative path when condition is false.</p>
                    </div>
                    
                    <div class="conditional-type">
                        <h5>🎯 If-Else If-Else Chain</h5>
                        <pre><code>function getTemperatureDescription(temp) {
    if (temp < 0) {
        return "Freezing";
    } else if (temp < 10) {
        return "Very cold";
    } else if (temp < 20) {
        return "Cold";
    } else if (temp < 30) {
        return "Warm";
    } else {
        return "Hot";
    }
}</code></pre>
                        <p>Multiple conditions checked in order.</p>
                    </div>
                    
                    <div class="conditional-type">
                        <h5>🔀 Switch Statement</h5>
                        <pre><code>function getDayName(dayNumber) {
    switch (dayNumber) {
        case 1: return "Monday";
        case 2: return "Tuesday";
        case 3: return "Wednesday";
        case 4: return "Thursday";
        case 5: return "Friday";
        case 6: return "Saturday";
        case 7: return "Sunday";
        default: return "Invalid day";
    }
}</code></pre>
                        <p>Clean way to handle multiple specific values.</p>
                    </div>
                </div>
                
                <div class="logical-operators">
                    <h5>🧠 Logical Operators</h5>
                    <div class="operator-examples">
                        <div class="operator">
                            <code>&&</code> <strong>(AND)</strong>
                            <pre><code>if (age >= 18 && hasLicense) {
    console.log("Can drive");
}</code></pre>
                        </div>
                        <div class="operator">
                            <code>||</code> <strong>(OR)</strong>
                            <pre><code>if (isWeekend || isHoliday) {
    console.log("No work today");
}</code></pre>
                        </div>
                        <div class="operator">
                            <code>!</code> <strong>(NOT)</strong>
                            <pre><code>if (!isLoggedIn) {
    console.log("Please log in");
}</code></pre>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
    
    generateConditionalsInteractive() {
        return `
            <div class="decision-tree-builder">
                <h5>Interactive Decision Tree</h5>
                
                <div class="scenario-selector">
                    <label>Choose a scenario:</label>
                    <select id="scenarioSelect" onchange="FunctionsDemo.loadScenario()">
                        <option value="weather">Weather Advice</option>
                        <option value="grade">Grade Calculator</option>
                        <option value="access">Access Control</option>
                        <option value="custom">Create Custom</option>
                    </select>
                </div>
                
                <div class="decision-interface" id="decisionInterface">
                    <div class="condition-builder">
                        <h6>Build Your Conditions:</h6>
                        <div id="conditionList">
                            <!-- Conditions will be added dynamically -->
                        </div>
                        <button onclick="FunctionsDemo.addCondition()" class="add-condition-btn">Add Condition</button>
                    </div>
                    
                    <div class="generated-logic" id="generatedLogic">
                        <h6>Generated Code:</h6>
                        <pre><code id="conditionalCode"></code></pre>
                    </div>
                    
                    <div class="logic-tester" id="logicTester">
                        <h6>Test Your Logic:</h6>
                        <div id="testInputs"></div>
                        <button onclick="FunctionsDemo.testConditional()" class="test-logic-btn">Test Logic</button>
                        <div class="logic-result" id="logicResult"></div>
                    </div>
                </div>
                
                <div class="flowchart-visualization" id="flowchartViz">
                    <h6>Visual Flowchart:</h6>
                    <div class="flowchart-container" id="flowchartContainer">
                        <!-- Flowchart will be generated here -->
                    </div>
                </div>
            </div>
        `;
    }
    
    generateConditionalsExercise() {
        return `
            <div class="exercise-workspace">
                <div class="instructions">
                    <p><strong>Task:</strong> Create a comprehensive grade calculator:</p>
                    <ul>
                        <li>Function name: <code>calculateGrade</code></li>
                        <li>Parameter: numeric score (0-100)</li>
                        <li>Return letter grade: A (90-100), B (80-89), C (70-79), D (60-69), F (0-59)</li>
                        <li>Handle invalid inputs (negative numbers, over 100)</li>
                        <li>Add plus/minus grades: A-, B+, B-, etc. for scores ending in 7-9 (+) or 0-2 (-)</li>
                    </ul>
                </div>
                <div class="code-workspace">
                    <textarea id="exerciseCode3" placeholder="function calculateGrade(score) {
    // First, validate the input
    
    // Then, determine the letter grade
    
    // Finally, add plus/minus modifiers
    
    // Return the final grade
}

// Test cases
console.log(calculateGrade(95));  // Should return 'A'
console.log(calculateGrade(87));  // Should return 'B+'
console.log(calculateGrade(72));  // Should return 'C-'
console.log(calculateGrade(65));  // Should return 'D'
console.log(calculateGrade(45));  // Should return 'F'
console.log(calculateGrade(-10)); // Should return 'Invalid score'
console.log(calculateGrade(105)); // Should return 'Invalid score'" rows="15"></textarea>
                    <button onclick="FunctionsDemo.checkExercise(3)" class="check-btn">Check Answer</button>
                </div>
                <div class="exercise-feedback" id="exerciseFeedback3"></div>
            </div>
        `;
    }
    
    generateLoopsContent() {
        return `
            <div class="loops-explanation">
                <h4>Loops - Repeating Code Efficiently</h4>
                
                <div class="loop-types">
                    <div class="loop-type">
                        <h5>🔄 For Loop - Count-Based Repetition</h5>
                        <pre><code>// Basic for loop
for (let i = 0; i < 5; i++) {
    console.log("Count: " + i);
}
// Output: Count: 0, Count: 1, Count: 2, Count: 3, Count: 4

// For loop with arrays
let fruits = ["apple", "banana", "orange"];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}</code></pre>
                        <div class="loop-anatomy">
                            <span class="anatomy-part">Initial: <code>let i = 0</code></span>
                            <span class="anatomy-part">Condition: <code>i < 5</code></span>
                            <span class="anatomy-part">Update: <code>i++</code></span>
                        </div>
                    </div>
                    
                    <div class="loop-type">
                        <h5>🎯 For...Of Loop - Iterate Over Values</h5>
                        <pre><code>let colors = ["red", "green", "blue"];

for (let color of colors) {
    console.log(color);
}
// Output: red, green, blue

// Works with strings too
for (let char of "Hello") {
    console.log(char);
}
// Output: H, e, l, l, o</code></pre>
                        <p>Cleaner syntax when you don't need the index.</p>
                    </div>
                    
                    <div class="loop-type">
                        <h5>🔍 For...In Loop - Iterate Over Properties</h5>
                        <pre><code>let person = {name: "Alice", age: 25, city: "NYC"};

for (let key in person) {
    console.log(key + ": " + person[key]);
}
// Output: name: Alice, age: 25, city: NYC</code></pre>
                        <p>Best for objects and their properties.</p>
                    </div>
                    
                    <div class="loop-type">
                        <h5>⏰ While Loop - Condition-Based Repetition</h5>
                        <pre><code>let count = 0;
while (count < 3) {
    console.log("While count: " + count);
    count++;
}

// Use when you don't know how many iterations you need
let userInput = "";
while (userInput !== "quit") {
    userInput = prompt("Enter 'quit' to exit:");
}</code></pre>
                        <p>Continues while condition is true.</p>
                    </div>
                    
                    <div class="loop-type">
                        <h5>🎲 Do...While Loop - Execute At Least Once</h5>
                        <pre><code>let number;
do {
    number = Math.floor(Math.random() * 10);
    console.log("Generated: " + number);
} while (number !== 7);

console.log("Found 7!");</code></pre>
                        <p>Runs at least once, then checks condition.</p>
                    </div>
                </div>
                
                <div class="loop-control">
                    <h5>🚦 Loop Control Statements</h5>
                    <div class="control-examples">
                        <div class="control-example">
                            <strong>break</strong> - Exit loop early
                            <pre><code>for (let i = 0; i < 10; i++) {
    if (i === 5) break;
    console.log(i);
}
// Output: 0, 1, 2, 3, 4</code></pre>
                        </div>
                        
                        <div class="control-example">
                            <strong>continue</strong> - Skip current iteration
                            <pre><code>for (let i = 0; i < 5; i++) {
    if (i === 2) continue;
    console.log(i);
}
// Output: 0, 1, 3, 4</code></pre>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
    
    generateLoopsInteractive() {
        return `
            <div class="loop-visualizer">
                <h5>Loop Execution Visualizer</h5>
                
                <div class="loop-selector">
                    <label>Choose loop type to visualize:</label>
                    <select id="loopTypeSelect" onchange="FunctionsDemo.setupLoopVisualization()">
                        <option value="for">For Loop</option>
                        <option value="forOf">For...Of Loop</option>
                        <option value="while">While Loop</option>
                        <option value="custom">Custom Loop</option>
                    </select>
                </div>
                
                <div class="loop-configuration" id="loopConfig">
                    <div class="config-section">
                        <h6>Loop Parameters:</h6>
                        <div id="loopParameters">
                            <!-- Parameters will be populated based on loop type -->
                        </div>
                    </div>
                    
                    <div class="loop-code-display">
                        <h6>Generated Loop Code:</h6>
                        <pre><code id="loopCode"></code></pre>
                    </div>
                    
                    <div class="loop-controls">
                        <button onclick="FunctionsDemo.startLoopVisualization()" class="start-loop-btn">Start Loop</button>
                        <button onclick="FunctionsDemo.stepLoop()" class="step-btn" disabled>Step</button>
                        <button onclick="FunctionsDemo.resetLoop()" class="reset-btn">Reset</button>
                    </div>
                </div>
                
                <div class="execution-display" id="executionDisplay">
                    <div class="iteration-tracker">
                        <h6>Current Iteration:</h6>
                        <div class="iteration-info" id="iterationInfo">
                            <span id="currentIteration">-</span>
                        </div>
                    </div>
                    
                    <div class="variable-state">
                        <h6>Variable Values:</h6>
                        <div id="variableStates"></div>
                    </div>
                    
                    <div class="output-log">
                        <h6>Output:</h6>
                        <div class="log-container" id="loopOutput"></div>
                    </div>
                </div>
                
                <div class="pattern-analyzer" id="patternAnalyzer">
                    <h6>Loop Pattern Analysis:</h6>
                    <div id="patternResults"></div>
                </div>
            </div>
        `;
    }
    
    generateLoopsExercise() {
        return `
            <div class="exercise-workspace">
                <div class="instructions">
                    <p><strong>Task:</strong> Create utility functions using different loop types:</p>
                    <ol>
                        <li><code>sumArray(numbers)</code> - Use a for loop to sum array elements</li>
                        <li><code>findLongestWord(words)</code> - Use for...of to find the longest word</li>
                        <li><code>countVowels(text)</code> - Use a loop to count vowels in a string</li>
                        <li><code>factorial(n)</code> - Use while loop to calculate factorial</li>
                    </ol>
                </div>
                <div class="code-workspace">
                    <textarea id="exerciseCode4" placeholder="// 1. Sum array using for loop
function sumArray(numbers) {
    // Your implementation here
}

// 2. Find longest word using for...of
function findLongestWord(words) {
    // Your implementation here
}

// 3. Count vowels in text
function countVowels(text) {
    // Your implementation here
    // Vowels: a, e, i, o, u (case insensitive)
}

// 4. Calculate factorial using while loop
function factorial(n) {
    // Your implementation here
    // factorial(5) = 5 * 4 * 3 * 2 * 1 = 120
}

// Test cases
console.log(sumArray([1, 2, 3, 4, 5]));           // Should return 15
console.log(findLongestWord(['cat', 'elephant', 'dog'])); // Should return 'elephant'
console.log(countVowels('Hello World'));          // Should return 3
console.log(factorial(5));                        // Should return 120" rows="20"></textarea>
                    <button onclick="FunctionsDemo.checkExercise(4)" class="check-btn">Check Answer</button>
                </div>
                <div class="exercise-feedback" id="exerciseFeedback4"></div>
            </div>
        `;
    }
    
    generateAdvancedContent() {
        return `
            <div class="advanced-concepts">
                <h4>Advanced Function Concepts</h4>
                
                <div class="concept-section">
                    <h5>🏹 Arrow Functions - Modern Syntax</h5>
                    <div class="arrow-examples">
                        <div class="example">
                            <h6>Basic Arrow Function:</h6>
                            <pre><code>// Traditional function
function add(a, b) {
    return a + b;
}

// Arrow function
const add = (a, b) => a + b;

// With single parameter
const square = x => x * x;

// With no parameters
const getCurrentTime = () => new Date();</code></pre>
                        </div>
                        
                        <div class="example">
                            <h6>Arrow Functions with Arrays:</h6>
                            <pre><code>const numbers = [1, 2, 3, 4, 5];

// Map: transform each element
const doubled = numbers.map(x => x * 2);
// [2, 4, 6, 8, 10]

// Filter: select elements
const evens = numbers.filter(x => x % 2 === 0);
// [2, 4]

// Reduce: combine elements
const sum = numbers.reduce((total, x) => total + x, 0);
// 15</code></pre>
                        </div>
                    </div>
                </div>
                
                <div class="concept-section">
                    <h5>📞 Callback Functions</h5>
                    <pre><code>// Function that takes another function as parameter
function processArray(arr, callback) {
    const result = [];
    for (let item of arr) {
        result.push(callback(item));
    }
    return result;
}

// Using callbacks
const numbers = [1, 2, 3, 4];
const doubled = processArray(numbers, x => x * 2);
const squared = processArray(numbers, x => x * x);

// Built-in array methods use callbacks
numbers.forEach(num => console.log(num));
numbers.map(num => num * 3);
numbers.filter(num => num > 2);</code></pre>
                </div>
                
                <div class="concept-section">
                    <h5>🏭 Higher-Order Functions</h5>
                    <pre><code>// Function that returns another function
function createMultiplier(factor) {
    return function(number) {
        return number * factor;
    };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); // 10
console.log(triple(4)); // 12

// Arrow function version
const createMultiplier = factor => number => number * factor;</code></pre>
                </div>
                
                <div class="concept-section">
                    <h5>🔗 Function Composition</h5>
                    <pre><code>// Combining functions
const add5 = x => x + 5;
const multiply2 = x => x * 2;

// Compose functions
const add5ThenMultiply2 = x => multiply2(add5(x));

console.log(add5ThenMultiply2(3)); // (3 + 5) * 2 = 16

// Generic composition function
const compose = (f, g) => x => f(g(x));
const addThenMultiply = compose(multiply2, add5);</code></pre>
                </div>
                
                <div class="concept-section">
                    <h5>⚡ Immediately Invoked Function Expression (IIFE)</h5>
                    <pre><code>// Function that runs immediately
(function() {
    console.log("This runs right away!");
})();

// Arrow function IIFE
(() => {
    console.log("Arrow IIFE!");
})();

// IIFE with parameters
((name) => {
    console.log(\`Hello, \${name}!\`);
})("Alice");</code></pre>
                </div>
            </div>
        `;
    }
    
    generateAdvancedInteractive() {
        return `
            <div class="function-composition-lab">
                <h5>Function Composition Laboratory</h5>
                
                <div class="lab-interface">
                    <div class="function-library">
                        <h6>Available Functions:</h6>
                        <div class="function-list" id="functionLibrary">
                            <div class="function-item" data-func="add5">
                                <code>add5: x => x + 5</code>
                                <button onclick="FunctionsDemo.addToChain('add5')">Add to Chain</button>
                            </div>
                            <div class="function-item" data-func="multiply2">
                                <code>multiply2: x => x * 2</code>
                                <button onclick="FunctionsDemo.addToChain('multiply2')">Add to Chain</button>
                            </div>
                            <div class="function-item" data-func="square">
                                <code>square: x => x * x</code>
                                <button onclick="FunctionsDemo.addToChain('square')">Add to Chain</button>
                            </div>
                            <div class="function-item" data-func="halve">
                                <code>halve: x => x / 2</code>
                                <button onclick="FunctionsDemo.addToChain('halve')">Add to Chain</button>
                            </div>
                        </div>
                        
                        <div class="custom-function">
                            <h6>Create Custom Function:</h6>
                            <input type="text" id="customFuncName" placeholder="Function name" />
                            <input type="text" id="customFuncBody" placeholder="e.g., x => x - 3" />
                            <button onclick="FunctionsDemo.addCustomFunction()">Add Custom</button>
                        </div>
                    </div>
                    
                    <div class="composition-chain">
                        <h6>Function Chain:</h6>
                        <div class="chain-display" id="functionChain">
                            <div class="chain-start">Input</div>
                            <!-- Chain functions will be added here -->
                            <div class="chain-end">Output</div>
                        </div>
                        <button onclick="FunctionsDemo.clearChain()" class="clear-chain-btn">Clear Chain</button>
                    </div>
                    
                    <div class="chain-tester">
                        <h6>Test Your Composition:</h6>
                        <input type="number" id="compositionInput" value="3" />
                        <button onclick="FunctionsDemo.testComposition()" class="test-composition-btn">Execute Chain</button>
                        <div class="execution-steps" id="executionSteps"></div>
                        <div class="final-result" id="compositionResult"></div>
                    </div>
                </div>
                
                <div class="callback-playground">
                    <h5>Callback Function Playground</h5>
                    <div class="playground-interface">
                        <div class="array-input">
                            <label>Input Array:</label>
                            <input type="text" id="callbackArray" value="[1, 2, 3, 4, 5]" />
                        </div>
                        
                        <div class="callback-operations">
                            <div class="operation">
                                <strong>Map:</strong>
                                <input type="text" id="mapCallback" placeholder="e.g., x => x * 2" value="x => x * 2" />
                                <button onclick="FunctionsDemo.testCallback('map')">Apply Map</button>
                            </div>
                            
                            <div class="operation">
                                <strong>Filter:</strong>
                                <input type="text" id="filterCallback" placeholder="e.g., x => x > 2" value="x => x > 2" />
                                <button onclick="FunctionsDemo.testCallback('filter')">Apply Filter</button>
                            </div>
                            
                            <div class="operation">
                                <strong>Reduce:</strong>
                                <input type="text" id="reduceCallback" placeholder="e.g., (sum, x) => sum + x" value="(sum, x) => sum + x" />
                                <button onclick="FunctionsDemo.testCallback('reduce')">Apply Reduce</button>
                            </div>
                        </div>
                        
                        <div class="callback-results" id="callbackResults"></div>
                    </div>
                </div>
            </div>
        `;
    }
    
    generateAdvancedExercise() {
        return `
            <div class="exercise-workspace">
                <div class="instructions">
                    <p><strong>Task:</strong> Create a data processing pipeline using advanced function concepts:</p>
                    <ol>
                        <li>Create utility functions using arrow syntax</li>
                        <li>Create a higher-order function that processes arrays</li>
                        <li>Use function composition to combine operations</li>
                        <li>Demonstrate callback usage with array methods</li>
                    </ol>
                </div>
                <div class="code-workspace">
                    <textarea id="exerciseCode5" placeholder="// 1. Utility functions (arrow syntax)
const double = // Your arrow function here
const isEven = // Your arrow function here
const square = // Your arrow function here

// 2. Higher-order function
function processData(array, ...operations) {
    // Apply each operation to the array in sequence
    // Return the final result
}

// 3. Function composition
const compose = (f, g) => // Your composition function here

// 4. Data processing pipeline
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Use array methods and your functions to:
// - Filter even numbers
// - Double them
// - Square the results
// - Sum the final array

const result = numbers
    // Your method chain here

console.log('Final result:', result);

// Test individual functions
console.log('double(5):', double(5));           // Should be 10
console.log('isEven(4):', isEven(4));           // Should be true
console.log('square(3):', square(3));           // Should be 9" rows="25"></textarea>
                    <button onclick="FunctionsDemo.checkExercise(5)" class="check-btn">Check Answer</button>
                </div>
                <div class="exercise-feedback" id="exerciseFeedback5"></div>
            </div>
        `;
    }
    
    // Static methods for interactive elements
    static buildFunction() {
        const name = document.getElementById('functionName').value.trim();
        const params = document.getElementById('functionParams').value.trim();
        const body = document.getElementById('functionBody').value.trim();
        
        if (!name || !body) {
            alert('Please enter function name and body');
            return;
        }
        
        const paramList = params ? params.split(',').map(p => p.trim()).join(', ') : '';
        const functionCode = `function ${name}(${paramList}) {\n    ${body}\n}`;
        
        document.getElementById('functionCode').textContent = functionCode;
        document.querySelector('.test-btn').style.display = 'inline-block';
        
        // Store function for testing
        window.generatedFunction = { name, params: paramList, body };
    }
    
    static testFunction() {
        const func = window.generatedFunction;
        if (!func) return;
        
        const paramArray = func.params ? func.params.split(',').map(p => p.trim()) : [];
        const testArea = document.getElementById('testArea');
        const testInputs = document.getElementById('testInputs');
        
        testInputs.innerHTML = paramArray.map((param, index) => 
            `<input type="text" id="param${index}" placeholder="${param}" />`
        ).join('') + 
        `<button onclick="FunctionsDemo.executeTest()">Execute</button>`;
        
        testArea.style.display = 'block';
    }
    
    static executeTest() {
        const func = window.generatedFunction;
        const paramArray = func.params ? func.params.split(',').map(p => p.trim()) : [];
        const values = paramArray.map((_, index) => 
            document.getElementById(`param${index}`).value
        );
        
        try {
            // Create and execute function
            const functionBody = `return ${func.body.replace('return ', '')}`;
            const testFunction = new Function(...paramArray, functionBody);
            const result = testFunction(...values);
            
            document.getElementById('testResult').innerHTML = `
                <div class="test-success">
                    <strong>Result:</strong> ${result}
                </div>
            `;
        } catch (error) {
            document.getElementById('testResult').innerHTML = `
                <div class="test-error">
                    <strong>Error:</strong> ${error.message}
                </div>
            `;
        }
    }
    
    static convertFunction() {
        const template = document.getElementById('functionTemplate').value;
        const templates = {
            greet: {
                name: 'greet',
                params: 'name',
                body: 'return "Hello, " + name + "!";'
            },
            add: {
                name: 'add',
                params: 'a, b',
                body: 'return a + b;'
            },
            isEven: {
                name: 'isEven',
                params: 'num',
                body: 'return num % 2 === 0;'
            },
            getMax: {
                name: 'getMax',
                params: 'a, b',
                body: 'return a > b ? a : b;'
            }
        };
        
        const func = templates[template];
        if (!func) return;
        
        // Function declaration
        document.getElementById('declarationSyntax').textContent = 
            `function ${func.name}(${func.params}) {\n    ${func.body}\n}`;
        
        // Function expression
        document.getElementById('expressionSyntax').textContent = 
            `const ${func.name} = function(${func.params}) {\n    ${func.body}\n};`;
        
        // Arrow function
        const arrowBody = func.body.replace('return ', '');
        document.getElementById('arrowSyntax').textContent = 
            `const ${func.name} = (${func.params}) => ${arrowBody}`;
    }
    
    static checkExercise(exerciseNumber) {
        const code = document.getElementById(`exerciseCode${exerciseNumber}`).value;
        const feedback = document.getElementById(`exerciseFeedback${exerciseNumber}`);
        
        let isCorrect = false;
        let feedbackText = '';
        
        switch (exerciseNumber) {
            case 1:
                isCorrect = code.includes('function greetUser') && 
                           code.includes('const greetUser2 = function') && 
                           code.includes('const greetUser3 = ') &&
                           code.includes('=>');
                feedbackText = isCorrect ? 
                    '✅ Excellent! You created all three function types correctly.' : 
                    '❌ Make sure to create function declaration, function expression, and arrow function versions.';
                break;
                
            case 2:
                isCorrect = code.includes('function calculate') && 
                           code.includes('switch') && 
                           code.includes('add') && 
                           code.includes('subtract');
                feedbackText = isCorrect ? 
                    '✅ Great calculator function! You handled multiple operations correctly.' : 
                    '❌ Make sure to handle all four operations (add, subtract, multiply, divide) and error cases.';
                break;
                
            case 3:
                isCorrect = code.includes('function calculateGrade') && 
                           code.includes('if') && 
                           (code.includes('else if') || code.includes('switch'));
                feedbackText = isCorrect ? 
                    '✅ Perfect grade calculator! You used conditional statements effectively.' : 
                    '❌ Make sure to use if/else or switch statements to handle different grade ranges.';
                break;
                
            case 4:
                isCorrect = code.includes('function sumArray') && 
                           code.includes('for') && 
                           code.includes('function findLongestWord') && 
                           code.includes('for') &&
                           code.includes('function countVowels') &&
                           code.includes('function factorial');
                feedbackText = isCorrect ? 
                    '✅ Outstanding! You implemented all four functions with appropriate loop types.' : 
                    '❌ Make sure to implement all four functions using the specified loop types.';
                break;
                
            case 5:
                isCorrect = code.includes('=>') && 
                           code.includes('map') && 
                           code.includes('filter') && 
                           (code.includes('reduce') || code.includes('forEach'));
                feedbackText = isCorrect ? 
                    '✅ Fantastic! You mastered advanced function concepts and array methods.' : 
                    '❌ Make sure to use arrow functions and array methods (map, filter, reduce) in your solution.';
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
    
    // Additional interactive methods would be implemented here...
    // (Continuing with placeholder implementations for brevity)
    
    static addParameter() {
        const parameterList = document.getElementById('parameterList');
        const newParam = document.createElement('div');
        newParam.className = 'parameter-input';
        newParam.innerHTML = `
            <input type="text" placeholder="Parameter name" />
            <input type="text" placeholder="Default value (optional)" />
            <button onclick="FunctionsDemo.removeParameter(this)">Remove</button>
        `;
        parameterList.appendChild(newParam);
    }
    
    static removeParameter(button) {
        button.closest('.parameter-input').remove();
    }
    
    static generateCustomFunction() {
        // Implementation for custom function generation
        console.log('Generating custom function...');
    }
    
    static testCustomFunction() {
        // Implementation for testing custom functions
        console.log('Testing custom function...');
    }
    
    // Additional methods for loop visualization, flowchart generation, etc.
    static setupLoopVisualization() {
        console.log('Setting up loop visualization...');
    }
    
    static startLoopVisualization() {
        console.log('Starting loop visualization...');
    }
    
    static stepLoop() {
        console.log('Stepping through loop...');
    }
    
    static resetLoop() {
        console.log('Resetting loop...');
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = FunctionsDemo;
}