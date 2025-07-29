# Lesson 1.4: Functions and Code Organization

⏱️ **Duration**: 150 minutes  
🎯 **Objective**: Master functions, scope, and code organization principles for clean, reusable programming  
📝 **Prerequisites**: Lesson 1.3 (Control Structures)

## 🎯 Learning Outcomes

By the end of this lesson, you will be able to:
- Create and call functions with parameters and return values
- Understand scope, closures, and variable accessibility
- Use arrow functions and function expressions
- Apply the DRY (Don't Repeat Yourself) principle
- Organize code into logical, reusable modules
- Debug function-related errors effectively
- Apply SPARC methodology to function design
- Write clean, maintainable code using best practices

## 📚 Theory: Functions and Code Organization

### What are Functions?

Functions are reusable blocks of code that perform specific tasks. Think of them as recipes or machines:
- **Input**: Parameters (ingredients)
- **Process**: Function body (cooking steps)
- **Output**: Return value (finished dish)

Functions solve the problem of code repetition and make programs easier to understand, test, and maintain.

### Why Functions Matter

1. **Reusability**: Write once, use many times
2. **Organization**: Break complex problems into smaller pieces
3. **Maintainability**: Change code in one place instead of many
4. **Testing**: Test individual pieces of functionality
5. **Readability**: Give meaningful names to complex operations

### SPARC Applied to Functions

**Specification**: What should this function do? What inputs does it need?  
**Pseudocode**: Write the function logic in plain English  
**Architecture**: How will functions work together? What's the structure?  
**Refinement**: Can the function be simplified? Are parameters clear?  
**Completion**: Does the function work with all expected inputs?

## 🔧 Function Basics

### 1. Function Declarations

```javascript
// Basic function declaration
function greetUser(name) {
    return `Hello, ${name}! Welcome to our website.`;
}

// Call the function
let message = greetUser("Alice");
console.log(message); // "Hello, Alice! Welcome to our website."

// Function with multiple parameters
function calculateArea(length, width) {
    let area = length * width;
    return area;
}

let roomArea = calculateArea(12, 10);
console.log(`Room area: ${roomArea} square feet`);

// Function without parameters
function getCurrentTime() {
    let now = new Date();
    return now.toLocaleTimeString();
}

console.log("Current time:", getCurrentTime());
```

### 2. Function Expressions

```javascript
// Function expression (anonymous function assigned to variable)
let multiply = function(a, b) {
    return a * b;
};

console.log(multiply(5, 3)); // 15

// Named function expression
let divide = function divideNumbers(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero!");
    }
    return a / b;
};

console.log(divide(10, 2)); // 5
```

### 3. Arrow Functions (ES6+)

```javascript
// Arrow function syntax
let add = (a, b) => {
    return a + b;
};

// Shorter arrow function (implicit return for single expressions)
let subtract = (a, b) => a - b;

// Single parameter (parentheses optional)
let square = x => x * x;

// No parameters
let getRandomNumber = () => Math.random();

// Example usage
console.log(add(5, 3));           // 8
console.log(subtract(10, 4));     // 6
console.log(square(7));           // 49
console.log(getRandomNumber());   // Random number between 0 and 1
```

## 📥 Parameters and Return Values

### Default Parameters

```javascript
// Function with default parameters
function greetCustomer(name = "Guest", timeOfDay = "day") {
    return `Good ${timeOfDay}, ${name}! How can we help you?`;
}

console.log(greetCustomer());                    // "Good day, Guest! How can we help you?"
console.log(greetCustomer("John"));              // "Good day, John! How can we help you?"
console.log(greetCustomer("Sarah", "morning"));  // "Good morning, Sarah! How can we help you?"
```

### Rest Parameters

```javascript
// Function that accepts any number of arguments
function calculateSum(...numbers) {
    let total = 0;
    for (let number of numbers) {
        total += number;
    }
    return total;
}

console.log(calculateSum(1, 2, 3));           // 6
console.log(calculateSum(5, 10, 15, 20));     // 50
console.log(calculateSum());                  // 0

// Practical example: Find maximum in a list
function findMaximum(...values) {
    if (values.length === 0) {
        return null;
    }
    return Math.max(...values);
}

console.log(findMaximum(3, 7, 2, 9, 1));  // 9
```

### Destructuring Parameters

```javascript
// Destructuring object parameters
function createUser({name, email, age = 18, isActive = true}) {
    return {
        id: Math.floor(Math.random() * 1000),
        name,
        email,
        age,
        isActive,
        createdAt: new Date()
    };
}

let newUser = createUser({
    name: "Alice Johnson",
    email: "alice@example.com",
    age: 25
});

console.log(newUser);
```

## 🌐 Scope and Closures

### Understanding Scope

```javascript
// Global scope
let globalMessage = "I'm available everywhere";

function demonstrateScope() {
    // Function scope
    let functionMessage = "I'm only available in this function";
    
    if (true) {
        // Block scope
        let blockMessage = "I'm only available in this block";
        console.log(globalMessage);     // ✅ Accessible
        console.log(functionMessage);   // ✅ Accessible
        console.log(blockMessage);      // ✅ Accessible
    }
    
    console.log(globalMessage);         // ✅ Accessible
    console.log(functionMessage);       // ✅ Accessible
    // console.log(blockMessage);       // ❌ ReferenceError!
}

demonstrateScope();
// console.log(functionMessage);        // ❌ ReferenceError!
```

### Closures

```javascript
// Closure example: Function factory
function createCounter(initialValue = 0) {
    let count = initialValue;
    
    return function() {
        count++;
        return count;
    };
}

let counter1 = createCounter();
let counter2 = createCounter(10);

console.log(counter1()); // 1
console.log(counter1()); // 2
console.log(counter2()); // 11
console.log(counter1()); // 3

// Practical closure example: Private variables
function createBankAccount(initialBalance) {
    let balance = initialBalance;
    let transactionHistory = [];
    
    return {
        deposit: function(amount) {
            if (amount > 0) {
                balance += amount;
                transactionHistory.push(`Deposited $${amount}`);
                return balance;
            }
            throw new Error("Deposit amount must be positive");
        },
        
        withdraw: function(amount) {
            if (amount > 0 && amount <= balance) {
                balance -= amount;
                transactionHistory.push(`Withdrew $${amount}`);
                return balance;
            }
            throw new Error("Invalid withdrawal amount");
        },
        
        getBalance: function() {
            return balance;
        },
        
        getHistory: function() {
            return [...transactionHistory]; // Return copy, not original
        }
    };
}

let account = createBankAccount(1000);
console.log(account.deposit(500));   // 1500
console.log(account.withdraw(200));  // 1300
console.log(account.getBalance());   // 1300
console.log(account.getHistory());   // ["Deposited $500", "Withdrew $200"]
```

## 🏗️ Code Organization Patterns

### 1. Module Pattern

```javascript
// Creating a module for calculator operations
const Calculator = (function() {
    // Private variables
    let history = [];
    
    // Private functions
    function addToHistory(operation, result) {
        history.push(`${operation} = ${result}`);
        if (history.length > 10) {
            history.shift(); // Keep only last 10 operations
        }
    }
    
    // Public interface
    return {
        add: function(a, b) {
            let result = a + b;
            addToHistory(`${a} + ${b}`, result);
            return result;
        },
        
        subtract: function(a, b) {
            let result = a - b;
            addToHistory(`${a} - ${b}`, result);
            return result;
        },
        
        multiply: function(a, b) {
            let result = a * b;
            addToHistory(`${a} × ${b}`, result);
            return result;
        },
        
        divide: function(a, b) {
            if (b === 0) {
                throw new Error("Division by zero is not allowed");
            }
            let result = a / b;
            addToHistory(`${a} ÷ ${b}`, result);
            return result;
        },
        
        getHistory: function() {
            return [...history];
        },
        
        clearHistory: function() {
            history = [];
        }
    };
})();

// Usage
console.log(Calculator.add(5, 3));        // 8
console.log(Calculator.multiply(4, 7));   // 28
console.log(Calculator.getHistory());     // ["5 + 3 = 8", "4 × 7 = 28"]
```

### 2. Object-Oriented Functions

```javascript
// Function constructor pattern
function Task(title, description, priority = "medium") {
    this.id = Math.floor(Math.random() * 1000000);
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.completed = false;
    this.createdAt = new Date();
    this.completedAt = null;
}

Task.prototype.markComplete = function() {
    this.completed = true;
    this.completedAt = new Date();
};

Task.prototype.markIncomplete = function() {
    this.completed = false;
    this.completedAt = null;
};

Task.prototype.updatePriority = function(newPriority) {
    const validPriorities = ["low", "medium", "high", "urgent"];
    if (validPriorities.includes(newPriority)) {
        this.priority = newPriority;
    } else {
        throw new Error("Invalid priority. Use: low, medium, high, or urgent");
    }
};

Task.prototype.toString = function() {
    let status = this.completed ? "✅" : "⭕";
    return `${status} [${this.priority.toUpperCase()}] ${this.title}`;
};

// Usage
let task1 = new Task("Learn JavaScript Functions", "Complete the functions lesson", "high");
let task2 = new Task("Practice coding", "Build a calculator app", "medium");

console.log(task1.toString()); // ⭕ [HIGH] Learn JavaScript Functions
task1.markComplete();
console.log(task1.toString()); // ✅ [HIGH] Learn JavaScript Functions
```

## 🛠️ Hands-On Exercises

### Exercise 1: Personal Finance Manager (50 minutes)

Create a comprehensive finance management system using functions.

#### SPARC Planning
**Specification**: Build a system to track income, expenses, and financial goals  
**Pseudocode**:
```
1. Create functions to add income and expenses
2. Calculate totals and balances
3. Set and track financial goals
4. Generate financial reports
5. Provide budget recommendations
```

#### Implementation
```javascript
// Personal Finance Manager
const FinanceManager = (function() {
    // Private data
    let transactions = [];
    let budget = {};
    let goals = [];
    
    // Private helper functions
    function generateId() {
        return Date.now().toString(36) + Math.random().toString(36).substr(2);
    }
    
    function validateAmount(amount) {
        if (typeof amount !== 'number' || amount <= 0) {
            throw new Error('Amount must be a positive number');
        }
    }
    
    function validateCategory(category) {
        if (typeof category !== 'string' || category.trim().length === 0) {
            throw new Error('Category must be a non-empty string');
        }
    }
    
    function calculateTotalByType(type) {
        return transactions
            .filter(transaction => transaction.type === type)
            .reduce((total, transaction) => total + transaction.amount, 0);
    }
    
    function calculateTotalByCategory(category) {
        return transactions
            .filter(transaction => transaction.category.toLowerCase() === category.toLowerCase())
            .reduce((total, transaction) => total + transaction.amount, 0);
    }
    
    // Public interface
    return {
        addIncome: function(amount, category, description = '') {
            validateAmount(amount);
            validateCategory(category);
            
            let transaction = {
                id: generateId(),
                type: 'income',
                amount: amount,
                category: category,
                description: description,
                date: new Date()
            };
            
            transactions.push(transaction);
            return transaction;
        },
        
        addExpense: function(amount, category, description = '') {
            validateAmount(amount);
            validateCategory(category);
            
            let transaction = {
                id: generateId(),
                type: 'expense',
                amount: amount,
                category: category,
                description: description,
                date: new Date()
            };
            
            transactions.push(transaction);
            return transaction;
        },
        
        setBudget: function(category, limit) {
            validateCategory(category);
            validateAmount(limit);
            
            budget[category.toLowerCase()] = limit;
        },
        
        checkBudget: function(category) {
            let categoryLower = category.toLowerCase();
            if (!budget[categoryLower]) {
                return null;
            }
            
            let spent = calculateTotalByCategory(category);
            let limit = budget[categoryLower];
            let remaining = limit - spent;
            let percentUsed = (spent / limit) * 100;
            
            return {
                category: category,
                limit: limit,
                spent: spent,
                remaining: remaining,
                percentUsed: percentUsed,
                isOverBudget: spent > limit
            };
        },
        
        addGoal: function(name, targetAmount, targetDate, currentAmount = 0) {
            validateAmount(targetAmount);
            
            let goal = {
                id: generateId(),
                name: name,
                targetAmount: targetAmount,
                currentAmount: currentAmount,
                targetDate: new Date(targetDate),
                createdAt: new Date()
            };
            
            goals.push(goal);
            return goal;
        },
        
        updateGoalProgress: function(goalId, additionalAmount) {
            validateAmount(additionalAmount);
            
            let goal = goals.find(g => g.id === goalId);
            if (!goal) {
                throw new Error('Goal not found');
            }
            
            goal.currentAmount += additionalAmount;
            return goal;
        },
        
        getFinancialSummary: function() {
            let totalIncome = calculateTotalByType('income');
            let totalExpenses = calculateTotalByType('expense');
            let netIncome = totalIncome - totalExpenses;
            
            // Calculate expenses by category
            let expensesByCategory = {};
            transactions
                .filter(t => t.type === 'expense')
                .forEach(t => {
                    let category = t.category.toLowerCase();
                    expensesByCategory[category] = (expensesByCategory[category] || 0) + t.amount;
                });
            
            // Calculate savings rate
            let savingsRate = totalIncome > 0 ? ((netIncome / totalIncome) * 100) : 0;
            
            return {
                totalIncome: totalIncome,
                totalExpenses: totalExpenses,
                netIncome: netIncome,
                savingsRate: savingsRate,
                expensesByCategory: expensesByCategory,
                transactionCount: transactions.length
            };
        },
        
        getRecommendations: function() {
            let summary = this.getFinancialSummary();
            let recommendations = [];
            
            // Savings rate recommendations
            if (summary.savingsRate < 10) {
                recommendations.push("💡 Try to save at least 10% of your income");
            } else if (summary.savingsRate > 20) {
                recommendations.push("🎉 Great job! You're saving over 20% of your income");
            }
            
            // Budget recommendations
            for (let category in budget) {
                let budgetCheck = this.checkBudget(category);
                if (budgetCheck && budgetCheck.isOverBudget) {
                    recommendations.push(`⚠️ You're over budget in ${category} by $${Math.abs(budgetCheck.remaining).toFixed(2)}`);
                } else if (budgetCheck && budgetCheck.percentUsed > 80) {
                    recommendations.push(`⚡ You've used ${budgetCheck.percentUsed.toFixed(1)}% of your ${category} budget`);
                }
            }
            
            // Expense category recommendations
            let largestExpenseCategory = Object.entries(summary.expensesByCategory)
                .reduce((max, [category, amount]) => amount > max.amount ? {category, amount} : max, {amount: 0});
            
            if (largestExpenseCategory.amount > 0) {
                recommendations.push(`📊 Your largest expense category is ${largestExpenseCategory.category} ($${largestExpenseCategory.amount.toFixed(2)})`);
            }
            
            return recommendations;
        },
        
        exportData: function() {
            return {
                transactions: [...transactions],
                budget: {...budget},
                goals: [...goals],
                summary: this.getFinancialSummary()
            };
        }
    };
})();

// Example usage
console.log("=== PERSONAL FINANCE MANAGER ===\n");

// Add some sample data
FinanceManager.addIncome(3000, "Salary", "Monthly salary");
FinanceManager.addIncome(500, "Freelance", "Web design project");
FinanceManager.addExpense(1200, "Rent", "Monthly rent");
FinanceManager.addExpense(300, "Groceries", "Weekly shopping");
FinanceManager.addExpense(150, "Utilities", "Electric and water bills");
FinanceManager.addExpense(80, "Entertainment", "Movie tickets and dinner");

// Set budgets
FinanceManager.setBudget("Groceries", 400);
FinanceManager.setBudget("Entertainment", 200);
FinanceManager.setBudget("Utilities", 200);

// Add a financial goal
FinanceManager.addGoal("Emergency Fund", 5000, "2024-12-31", 1000);

// Get financial summary
let summary = FinanceManager.getFinancialSummary();
console.log("Financial Summary:");
console.log(`Total Income: $${summary.totalIncome.toFixed(2)}`);
console.log(`Total Expenses: $${summary.totalExpenses.toFixed(2)}`);
console.log(`Net Income: $${summary.netIncome.toFixed(2)}`);
console.log(`Savings Rate: ${summary.savingsRate.toFixed(1)}%\n`);

// Check budgets
console.log("Budget Status:");
console.log(FinanceManager.checkBudget("Groceries"));
console.log(FinanceManager.checkBudget("Entertainment"));

// Get recommendations
console.log("\nRecommendations:");
FinanceManager.getRecommendations().forEach(rec => console.log(rec));
```

### Exercise 2: Text Processing Toolkit (35 minutes)

```javascript
// Text Processing Toolkit
const TextProcessor = {
    // Word analysis functions
    countWords: function(text) {
        if (typeof text !== 'string') return 0;
        return text.trim().split(/\s+/).filter(word => word.length > 0).length;
    },
    
    countCharacters: function(text, includeSpaces = true) {
        if (typeof text !== 'string') return 0;
        return includeSpaces ? text.length : text.replace(/\s/g, '').length;
    },
    
    countSentences: function(text) {
        if (typeof text !== 'string') return 0;
        return text.split(/[.!?]+/).filter(sentence => sentence.trim().length > 0).length;
    },
    
    // Text transformation functions
    capitalize: function(text) {
        if (typeof text !== 'string') return '';
        return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    },
    
    titleCase: function(text) {
        if (typeof text !== 'string') return '';
        return text.split(' ')
            .map(word => this.capitalize(word))
            .join(' ');
    },
    
    reverseWords: function(text) {
        if (typeof text !== 'string') return '';
        return text.split(' ').reverse().join(' ');
    },
    
    // Analysis functions
    getWordFrequency: function(text) {
        if (typeof text !== 'string') return {};
        
        let words = text.toLowerCase()
            .replace(/[^\w\s]/g, '')
            .split(/\s+/)
            .filter(word => word.length > 0);
        
        let frequency = {};
        words.forEach(word => {
            frequency[word] = (frequency[word] || 0) + 1;
        });
        
        return frequency;
    },
    
    findLongestWord: function(text) {
        if (typeof text !== 'string') return '';
        
        let words = text.replace(/[^\w\s]/g, '').split(/\s+/);
        return words.reduce((longest, current) => 
            current.length > longest.length ? current : longest, '');
    },
    
    calculateReadabilityScore: function(text) {
        let words = this.countWords(text);
        let sentences = this.countSentences(text);
        let characters = this.countCharacters(text, false);
        
        if (sentences === 0) return 0;
        
        // Simplified readability score
        let avgWordsPerSentence = words / sentences;
        let avgCharsPerWord = characters / words;
        
        // Score from 1-10 (10 being most readable)
        let score = 10 - (avgWordsPerSentence * 0.5) - (avgCharsPerWord * 0.5);
        return Math.max(1, Math.min(10, score));
    },
    
    // Utility functions
    removeExtraSpaces: function(text) {
        if (typeof text !== 'string') return '';
        return text.replace(/\s+/g, ' ').trim();
    },
    
    extractEmails: function(text) {
        if (typeof text !== 'string') return [];
        let emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;
        return text.match(emailRegex) || [];
    },
    
    generateSummary: function(text) {
        return {
            words: this.countWords(text),
            characters: this.countCharacters(text),
            charactersNoSpaces: this.countCharacters(text, false),
            sentences: this.countSentences(text),
            longestWord: this.findLongestWord(text),
            readabilityScore: this.calculateReadabilityScore(text),
            wordFrequency: this.getWordFrequency(text)
        };
    }
};

// Example usage
let sampleText = `
    JavaScript is a versatile programming language. It's used for web development, 
    server-side programming, and mobile app development. Learning JavaScript opens 
    many opportunities for developers. JavaScript, JavaScript, everywhere!
    Contact us at info@example.com or support@company.org for more information.
`;

console.log("=== TEXT PROCESSING TOOLKIT ===\n");

let summary = TextProcessor.generateSummary(sampleText);
console.log("Text Summary:");
console.log(`Words: ${summary.words}`);
console.log(`Characters: ${summary.characters}`);
console.log(`Sentences: ${summary.sentences}`);
console.log(`Longest word: ${summary.longestWord}`);
console.log(`Readability score: ${summary.readabilityScore.toFixed(1)}/10`);

console.log("\nWord Frequency:");
Object.entries(summary.wordFrequency)
    .sort(([,a], [,b]) => b - a)
    .slice(0, 5)
    .forEach(([word, count]) => console.log(`${word}: ${count}`));

console.log("\nText Transformations:");
console.log(`Title Case: ${TextProcessor.titleCase("hello world from javascript")}`);
console.log(`Reversed Words: ${TextProcessor.reverseWords("Hello World")}`);

console.log("\nExtracted Emails:");
console.log(TextProcessor.extractEmails(sampleText));
```

### Exercise 3: Game Utilities Library (40 minutes)

```javascript
// Game Utilities Library
const GameUtils = (function() {
    // Private helper functions
    function validateNumber(num, min = -Infinity, max = Infinity) {
        if (typeof num !== 'number' || isNaN(num) || num < min || num > max) {
            throw new Error(`Invalid number: must be between ${min} and ${max}`);
        }
    }
    
    function validateArray(arr) {
        if (!Array.isArray(arr) || arr.length === 0) {
            throw new Error('Array must be non-empty');
        }
    }
    
    // Public interface
    return {
        // Random number utilities
        randomInt: function(min, max) {
            validateNumber(min);
            validateNumber(max);
            if (min > max) [min, max] = [max, min]; // Swap if needed
            return Math.floor(Math.random() * (max - min + 1)) + min;
        },
        
        randomFloat: function(min, max) {
            validateNumber(min);
            validateNumber(max);
            if (min > max) [min, max] = [max, min];
            return Math.random() * (max - min) + min;
        },
        
        randomChoice: function(array) {
            validateArray(array);
            return array[Math.floor(Math.random() * array.length)];
        },
        
        shuffleArray: function(array) {
            validateArray(array);
            let shuffled = [...array]; // Create copy
            for (let i = shuffled.length - 1; i > 0; i--) {
                let j = Math.floor(Math.random() * (i + 1));
                [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
            }
            return shuffled;
        },
        
        // Dice utilities
        rollDice: function(sides = 6, count = 1) {
            validateNumber(sides, 2);
            validateNumber(count, 1);
            
            let rolls = [];
            for (let i = 0; i < count; i++) {
                rolls.push(this.randomInt(1, sides));
            }
            return {
                rolls: rolls,
                total: rolls.reduce((sum, roll) => sum + roll, 0),
                average: rolls.reduce((sum, roll) => sum + roll, 0) / rolls.length
            };
        },
        
        // Coordinate and distance utilities
        calculateDistance: function(point1, point2) {
            let dx = point2.x - point1.x;
            let dy = point2.y - point1.y;
            return Math.sqrt(dx * dx + dy * dy);
        },
        
        moveTowards: function(from, to, speed) {
            let distance = this.calculateDistance(from, to);
            if (distance <= speed) {
                return { x: to.x, y: to.y };
            }
            
            let ratio = speed / distance;
            return {
                x: from.x + (to.x - from.x) * ratio,
                y: from.y + (to.y - from.y) * ratio
            };
        },
        
        // Game mechanics utilities
        calculateDamage: function(baseDamage, attackerLevel, defenderLevel, critical = false) {
            validateNumber(baseDamage, 0);
            validateNumber(attackerLevel, 1);
            validateNumber(defenderLevel, 1);
            
            let levelMultiplier = attackerLevel / defenderLevel;
            let damage = baseDamage * levelMultiplier;
            
            if (critical) {
                damage *= 2;
            }
            
            // Add some randomness (±10%)
            let variance = this.randomFloat(0.9, 1.1);
            damage *= variance;
            
            return Math.round(Math.max(1, damage));
        },
        
        calculateExperience: function(baseXP, levelDifference) {
            validateNumber(baseXP, 0);
            validateNumber(levelDifference);
            
            if (levelDifference < -5) {
                return Math.round(baseXP * 0.1); // Very little XP for easy enemies
            } else if (levelDifference > 5) {
                return Math.round(baseXP * 2.0); // Bonus XP for tough enemies
            } else {
                let multiplier = 1 + (levelDifference * 0.1);
                return Math.round(baseXP * multiplier);
            }
        },
        
        // Inventory and item utilities
        createItem: function(name, type, rarity = 'common', stats = {}) {
            let rarityMultipliers = {
                common: 1,
                uncommon: 1.2,
                rare: 1.5,
                epic: 2.0,
                legendary: 3.0
            };
            
            let multiplier = rarityMultipliers[rarity] || 1;
            let enhancedStats = {};
            
            for (let [stat, value] of Object.entries(stats)) {
                enhancedStats[stat] = Math.round(value * multiplier);
            }
            
            return {
                id: Date.now().toString(36) + Math.random().toString(36).substr(2),
                name: name,
                type: type,
                rarity: rarity,
                stats: enhancedStats,
                value: this.calculateItemValue(enhancedStats, rarity)
            };
        },
        
        calculateItemValue: function(stats, rarity) {
            let baseValue = Object.values(stats).reduce((sum, value) => sum + value, 0) * 10;
            let rarityMultipliers = {
                common: 1,
                uncommon: 2,
                rare: 5,
                epic: 15,
                legendary: 50
            };
            return Math.round(baseValue * (rarityMultipliers[rarity] || 1));
        },
        
        // Timer utilities
        createTimer: function(duration, onComplete, onTick) {
            let startTime = Date.now();
            let remaining = duration;
            
            let interval = setInterval(() => {
                remaining = duration - (Date.now() - startTime);
                
                if (remaining <= 0) {
                    clearInterval(interval);
                    if (onComplete) onComplete();
                } else {
                    if (onTick) onTick(remaining);
                }
            }, 100);
            
            return {
                getRemainingTime: () => Math.max(0, remaining),
                cancel: () => clearInterval(interval)
            };
        }
    };
})();

// Example usage and testing
console.log("=== GAME UTILITIES LIBRARY ===\n");

// Random utilities
console.log("Random Examples:");
console.log(`Random number (1-10): ${GameUtils.randomInt(1, 10)}`);
console.log(`Random choice: ${GameUtils.randomChoice(['fire', 'water', 'earth', 'air'])}`);
console.log(`Shuffled array: ${GameUtils.shuffleArray([1, 2, 3, 4, 5])}`);

// Dice rolling
console.log("\nDice Rolling:");
let diceRoll = GameUtils.rollDice(20, 3); // 3 d20 rolls
console.log(`3d20 rolls: ${diceRoll.rolls.join(', ')} (Total: ${diceRoll.total})`);

// Distance calculation
console.log("\nDistance Calculation:");
let player = { x: 0, y: 0 };
let enemy = { x: 3, y: 4 };
console.log(`Distance: ${GameUtils.calculateDistance(player, enemy).toFixed(2)}`);

// Move towards
let newPosition = GameUtils.moveTowards(player, enemy, 2);
console.log(`Move towards: (${newPosition.x.toFixed(2)}, ${newPosition.y.toFixed(2)})`);

// Combat calculations
console.log("\nCombat Calculations:");
let damage = GameUtils.calculateDamage(50, 10, 8, true); // Critical hit
console.log(`Damage dealt: ${damage}`);

let xp = GameUtils.calculateExperience(100, 2); // Fighting +2 level enemy
console.log(`Experience gained: ${xp}`);

// Item creation
console.log("\nItem Creation:");
let sword = GameUtils.createItem("Fire Sword", "weapon", "rare", {
    attack: 25,
    fire_damage: 10
});
console.log(`Created item:`, sword);
```

## 🐛 Common Function Mistakes

### 1. Missing Return Statement
```javascript
// Wrong - function doesn't return anything
function addNumbers(a, b) {
    a + b; // Result is calculated but not returned
}

// Right
function addNumbers(a, b) {
    return a + b;
}
```

### 2. Modifying Parameters Unexpectedly
```javascript
// Wrong - modifying the original array
function removeFirstItem(items) {
    items.shift(); // This modifies the original array!
    return items;
}

// Right - work with a copy
function removeFirstItem(items) {
    return items.slice(1); // Returns new array without modifying original
}
```

### 3. Scope Confusion
```javascript
// Wrong - variable not accessible outside function
function createMessage() {
    let message = "Hello World";
}
// console.log(message); // ReferenceError!

// Right - return the value or use broader scope
function createMessage() {
    return "Hello World";
}
let message = createMessage();
console.log(message); // "Hello World"
```

## 📝 Assessment Questions

### Quick Knowledge Check
1. What's the difference between function declarations and function expressions?
2. When would you use arrow functions vs regular functions?
3. What is a closure and why is it useful?
4. How do default parameters work?
5. What's the difference between local and global scope?

### Problem-Solving Challenges
1. **Function Factory**: Create a function that returns different types of calculators (basic, scientific, financial).
2. **Memoization**: Implement a function that caches results of expensive calculations.
3. **Curry Function**: Create a function that allows partial application of parameters.

## 🚀 Challenge Project: Task Management System

Create a comprehensive task management system using all function concepts learned.

### Requirements:
1. Create, update, delete, and list tasks
2. Organize tasks by projects and categories
3. Set due dates and priority levels
4. Track time spent on tasks
5. Generate reports and statistics
6. Export/import data

### SPARC Planning:
**Specification**: Full-featured task management with multiple organizational methods  
**Pseudocode**: 
```
1. Define task and project data structures
2. Create CRUD functions for tasks
3. Implement filtering and sorting
4. Add time tracking capabilities
5. Build reporting functions
```

## 📚 Additional Resources

### Documentation
- [MDN - Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)
- [JavaScript.info - Functions](https://javascript.info/function-basics)
- [You Don't Know JS - Scope & Closures](https://github.com/getify/You-Dont-Know-JS)

### Practice Platforms
- [Codewars](https://www.codewars.com/) - Function-focused challenges
- [LeetCode](https://leetcode.com/) - Algorithm problems
- [JavaScript30](https://javascript30.com/) - 30 projects in 30 days

## 🤔 Reflection Questions

1. **Organization**: How do functions help you organize and structure your code?
2. **Reusability**: Can you identify repetitive code in your past projects that could be turned into functions?
3. **Testing**: How does breaking code into functions make testing easier?
4. **Collaboration**: How do well-named functions improve code communication in teams?

## 🔗 Next Lesson Preview

In **Lesson 1.5: HTML Fundamentals and Semantic Structure**, we'll dive into web development:
- **HTML5 structure** - building semantic web pages
- **Elements and attributes** - comprehensive HTML toolkit
- **Forms and inputs** - user interaction fundamentals
- **Accessibility** - building inclusive web experiences
- **Best practices** - clean, maintainable HTML

---

**🎉 Congratulations! You now understand how to write clean, organized, and reusable code using functions. This is a crucial skill for any programmer!**

**⏭️ Next Lesson**: HTML Fundamentals and Semantic Structure