# Lesson 1.2: Programming Fundamentals - Variables and Data Types

⏱️ **Duration**: 120 minutes  
🎯 **Objective**: Master the fundamental concepts of variables, data types, and basic operations  
📝 **Prerequisites**: Lesson 1.1 (Development Environment Setup)

## 🎯 Learning Outcomes

By the end of this lesson, you will be able to:
- Understand what variables are and why they're essential in programming
- Identify and use different data types (numbers, strings, booleans, arrays, objects)
- Perform basic operations with variables
- Apply the SPARC methodology to solve programming problems
- Debug common variable-related errors
- Write clean, readable code with proper naming conventions

## 📚 Theory: Understanding Variables and Data Types

### What are Variables?

Think of variables as labeled boxes that store information. Just like you might label a box "Winter Clothes" to remember what's inside, programmers use variables to give names to data they want to remember and use later.

```javascript
// This creates a "box" called 'userName' and puts "Alice" inside it
let userName = "Alice";

// Later, we can use what's in the box
console.log("Hello, " + userName + "!"); // Output: Hello, Alice!
```

### Why Variables Matter

Variables are fundamental because they allow us to:
1. **Store information** for later use
2. **Make our code flexible** - we can change values without rewriting code
3. **Give meaning** to our data through descriptive names
4. **Perform calculations** and manipulations

### SPARC Applied to Variables

**Specification**: What data do I need to store?  
**Pseudocode**: How will I use this data?  
**Architecture**: How should I organize my variables?  
**Refinement**: Can I make my variable names clearer?  
**Completion**: Does my code work with different values?

## 🔢 Data Types in JavaScript

### 1. Numbers
```javascript
// Integers (whole numbers)
let age = 25;
let temperature = -5;

// Decimals (floating-point numbers)
let price = 19.99;
let pi = 3.14159;

// Special number values
let infinity = Infinity;
let notANumber = NaN; // "Not a Number"
```

### 2. Strings (Text)
```javascript
// Single quotes
let firstName = 'John';

// Double quotes
let lastName = "Doe";

// Template literals (backticks) - allows embedding variables
let fullName = `${firstName} ${lastName}`;
let greeting = `Hello, ${fullName}! You are ${age} years old.`;

// String methods
let message = "Hello World";
console.log(message.length);        // 11
console.log(message.toUpperCase()); // "HELLO WORLD"
console.log(message.toLowerCase()); // "hello world"
```

### 3. Booleans (True/False)
```javascript
let isStudent = true;
let hasGraduated = false;
let isOnline = true;

// Booleans are often results of comparisons
let isAdult = age >= 18;
let canVote = isAdult && isStudent;
```

### 4. Arrays (Lists)
```javascript
// Creating arrays
let colors = ["red", "green", "blue"];
let numbers = [1, 2, 3, 4, 5];
let mixedData = ["Alice", 25, true, 3.14];

// Accessing array elements (zero-indexed)
console.log(colors[0]);  // "red"
console.log(colors[1]);  // "green"
console.log(colors[2]);  // "blue"

// Array methods
colors.push("yellow");      // Add to end
colors.pop();              // Remove from end
console.log(colors.length); // Get array size
```

### 5. Objects (Key-Value Pairs)
```javascript
// Creating objects
let person = {
    name: "Alice",
    age: 30,
    isStudent: false,
    hobbies: ["reading", "coding", "hiking"]
};

// Accessing object properties
console.log(person.name);      // "Alice"
console.log(person["age"]);    // 30
console.log(person.hobbies[0]); // "reading"

// Adding new properties
person.email = "alice@example.com";
person.city = "New York";
```

## ⚙️ Variable Operations

### Arithmetic Operations
```javascript
let a = 10;
let b = 3;

let addition = a + b;        // 13
let subtraction = a - b;     // 7
let multiplication = a * b;   // 30
let division = a / b;        // 3.333...
let remainder = a % b;       // 1 (modulo)
let exponentiation = a ** b; // 1000

// Compound assignment operators
a += 5;  // Same as: a = a + 5
a -= 2;  // Same as: a = a - 2
a *= 3;  // Same as: a = a * 3
a /= 2;  // Same as: a = a / 2
```

### String Operations
```javascript
let first = "Hello";
let second = "World";

// Concatenation (joining strings)
let combined = first + " " + second; // "Hello World"
let template = `${first} ${second}`; // "Hello World"

// String methods
let text = "JavaScript Programming";
console.log(text.includes("Script"));  // true
console.log(text.startsWith("Java"));  // true
console.log(text.endsWith("ing"));     // true
console.log(text.slice(0, 4));         // "Java"
console.log(text.split(" "));          // ["JavaScript", "Programming"]
```

### Boolean Operations
```javascript
let x = true;
let y = false;

// Logical operators
let and = x && y;  // false (both must be true)
let or = x || y;   // true (at least one must be true)
let not = !x;      // false (opposite of x)

// Comparison operators
let num1 = 10;
let num2 = 20;

console.log(num1 == num2);   // false (equal value)
console.log(num1 === num2);  // false (equal value AND type)
console.log(num1 != num2);   // true (not equal)
console.log(num1 < num2);    // true (less than)
console.log(num1 > num2);    // false (greater than)
console.log(num1 <= num2);   // true (less than or equal)
console.log(num1 >= num2);   // false (greater than or equal)
```

## 🛠️ Hands-On Practice

### Exercise 1: Personal Information System (30 minutes)

Create a program that stores and displays personal information using different data types.

#### SPARC Planning Phase
**Specification**: Create a system to store and display a person's profile information  
**Pseudocode**:
```
1. Create variables for personal information
2. Store different types of data (name, age, hobbies, etc.)
3. Display the information in a formatted way
4. Perform some calculations with the data
```

#### Implementation
```javascript
// Personal Information Variables
let firstName = "Your Name";
let lastName = "Your Last Name";
let age = 25;
let isStudent = true;
let favoriteColors = ["blue", "green", "purple"];
let contactInfo = {
    email: "you@example.com",
    phone: "123-456-7890",
    city: "Your City"
};

// Calculations
let birthYear = 2024 - age;
let yearsUntilRetirement = 65 - age;

// Display Information
console.log("=== Personal Profile ===");
console.log(`Name: ${firstName} ${lastName}`);
console.log(`Age: ${age} years old`);
console.log(`Born in: ${birthYear}`);
console.log(`Student Status: ${isStudent ? "Currently a student" : "Not a student"}`);
console.log(`Years until retirement: ${yearsUntilRetirement}`);
console.log(`Favorite colors: ${favoriteColors.join(", ")}`);
console.log(`Contact: ${contactInfo.email} | ${contactInfo.phone}`);
console.log(`Location: ${contactInfo.city}`);

// Interactive elements
let profileHTML = `
    <div class="profile">
        <h2>${firstName} ${lastName}</h2>
        <p>Age: ${age}</p>
        <p>Favorite Colors: ${favoriteColors.join(", ")}</p>
        <p>Email: ${contactInfo.email}</p>
    </div>
`;

document.getElementById("profile-container").innerHTML = profileHTML;
```

### Exercise 2: Shopping Cart Calculator (25 minutes)

Build a shopping cart system that calculates totals, taxes, and discounts.

```javascript
// Shopping Cart Data
let items = [
    { name: "Laptop", price: 999.99, quantity: 1 },
    { name: "Mouse", price: 29.99, quantity: 2 },
    { name: "Keyboard", price: 79.99, quantity: 1 },
    { name: "Monitor", price: 299.99, quantity: 1 }
];

let taxRate = 0.08; // 8% tax
let discountThreshold = 1000; // Free shipping over $1000
let shippingCost = 15.99;

// Calculate subtotal
let subtotal = 0;
for (let item of items) {
    subtotal += item.price * item.quantity;
}

// Calculate tax
let tax = subtotal * taxRate;

// Calculate shipping
let shipping = subtotal >= discountThreshold ? 0 : shippingCost;

// Calculate total
let total = subtotal + tax + shipping;

// Display results
console.log("=== Shopping Cart ===");
items.forEach(item => {
    console.log(`${item.name}: $${item.price} x ${item.quantity} = $${(item.price * item.quantity).toFixed(2)}`);
});

console.log(`\nSubtotal: $${subtotal.toFixed(2)}`);
console.log(`Tax (${(taxRate * 100)}%): $${tax.toFixed(2)}`);
console.log(`Shipping: ${shipping === 0 ? "FREE" : "$" + shipping.toFixed(2)}`);
console.log(`Total: $${total.toFixed(2)}`);

if (shipping === 0) {
    console.log("🎉 You qualified for free shipping!");
}
```

### Exercise 3: Grade Calculator (25 minutes)

Create a system to calculate student grades with different weighting.

```javascript
// Student Grade Data
let student = {
    name: "Alex Johnson",
    id: "ST2024001",
    assignments: [85, 92, 78, 95, 88],
    quizzes: [90, 87, 93, 89],
    midtermExam: 86,
    finalExam: 91,
    participation: 95
};

// Grade weights
let weights = {
    assignments: 0.30,    // 30%
    quizzes: 0.20,       // 20%
    midterm: 0.20,       // 20%
    final: 0.25,         // 25%
    participation: 0.05   // 5%
};

// Calculate averages
let assignmentAvg = student.assignments.reduce((sum, grade) => sum + grade, 0) / student.assignments.length;
let quizAvg = student.quizzes.reduce((sum, grade) => sum + grade, 0) / student.quizzes.length;

// Calculate weighted grade
let finalGrade = (assignmentAvg * weights.assignments) +
                (quizAvg * weights.quizzes) +
                (student.midtermExam * weights.midterm) +
                (student.finalExam * weights.final) +
                (student.participation * weights.participation);

// Determine letter grade
let letterGrade;
if (finalGrade >= 90) letterGrade = "A";
else if (finalGrade >= 80) letterGrade = "B";
else if (finalGrade >= 70) letterGrade = "C";
else if (finalGrade >= 60) letterGrade = "D";
else letterGrade = "F";

// Display results
console.log("=== Grade Report ===");
console.log(`Student: ${student.name} (${student.id})`);
console.log(`Assignment Average: ${assignmentAvg.toFixed(1)}%`);
console.log(`Quiz Average: ${quizAvg.toFixed(1)}%`);
console.log(`Midterm Exam: ${student.midtermExam}%`);
console.log(`Final Exam: ${student.finalExam}%`);
console.log(`Participation: ${student.participation}%`);
console.log(`Final Grade: ${finalGrade.toFixed(1)}% (${letterGrade})`);
```

## 🐛 Common Mistakes and Debugging

### 1. Undefined Variables
```javascript
// Wrong
console.log(myVariable); // ReferenceError: myVariable is not defined

// Right
let myVariable = "Hello";
console.log(myVariable); // "Hello"
```

### 2. Type Confusion
```javascript
// Be careful with type conversion
let number = "5";
let result = number + 3; // "53" (string concatenation, not 8)

// Fix with type conversion
let correctResult = parseInt(number) + 3; // 8
// or
let correctResult2 = Number(number) + 3; // 8
```

### 3. Array Index Errors
```javascript
let colors = ["red", "green", "blue"];
console.log(colors[3]); // undefined (index doesn't exist)
console.log(colors[colors.length - 1]); // "blue" (last element)
```

### 4. Object Property Access
```javascript
let person = { name: "Alice", age: 30 };

// These work
console.log(person.name);     // "Alice"
console.log(person["name"]);  // "Alice"

// This doesn't
console.log(person.height); // undefined (property doesn't exist)
```

## 🧪 Interactive Demonstrations

### Demo 1: Variable Type Explorer
Create an HTML file to experiment with different variable types:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Variable Type Explorer</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 20px; }
        .demo { border: 1px solid #ccc; padding: 15px; margin: 10px 0; }
        button { background: #007cba; color: white; padding: 8px 16px; border: none; cursor: pointer; }
        .output { background: #f5f5f5; padding: 10px; margin: 10px 0; font-family: monospace; }
    </style>
</head>
<body>
    <h1>Variable Type Explorer</h1>
    
    <div class="demo">
        <h3>String Operations</h3>
        <input type="text" id="string1" placeholder="Enter first string" value="Hello">
        <input type="text" id="string2" placeholder="Enter second string" value="World">
        <button onclick="demonstrateStrings()">Combine Strings</button>
        <div id="string-output" class="output"></div>
    </div>

    <div class="demo">
        <h3>Number Operations</h3>
        <input type="number" id="num1" placeholder="First number" value="10">
        <input type="number" id="num2" placeholder="Second number" value="3">
        <button onclick="demonstrateNumbers()">Calculate</button>
        <div id="number-output" class="output"></div>
    </div>

    <div class="demo">
        <h3>Array Operations</h3>
        <input type="text" id="array-input" placeholder="Enter items separated by commas" value="apple,banana,cherry">
        <button onclick="demonstrateArrays()">Process Array</button>
        <div id="array-output" class="output"></div>
    </div>

    <script>
        function demonstrateStrings() {
            let str1 = document.getElementById('string1').value;
            let str2 = document.getElementById('string2').value;
            
            let results = `
                Original strings: "${str1}" and "${str2}"
                Combined: "${str1 + " " + str2}"
                Template literal: "${str1} ${str2}"
                Uppercase: "${(str1 + " " + str2).toUpperCase()}"
                Length: ${(str1 + " " + str2).length} characters
                Includes "o": ${(str1 + " " + str2).includes("o")}
            `;
            
            document.getElementById('string-output').innerText = results;
        }

        function demonstrateNumbers() {
            let num1 = parseFloat(document.getElementById('num1').value);
            let num2 = parseFloat(document.getElementById('num2').value);
            
            let results = `
                Numbers: ${num1} and ${num2}
                Addition: ${num1} + ${num2} = ${num1 + num2}
                Subtraction: ${num1} - ${num2} = ${num1 - num2}
                Multiplication: ${num1} × ${num2} = ${num1 * num2}
                Division: ${num1} ÷ ${num2} = ${(num1 / num2).toFixed(2)}
                Remainder: ${num1} % ${num2} = ${num1 % num2}
                Power: ${num1}^${num2} = ${Math.pow(num1, num2)}
            `;
            
            document.getElementById('number-output').innerText = results;
        }

        function demonstrateArrays() {
            let input = document.getElementById('array-input').value;
            let array = input.split(',').map(item => item.trim());
            
            let results = `
                Original array: [${array.join(', ')}]
                Length: ${array.length}
                First item: "${array[0]}"
                Last item: "${array[array.length - 1]}"
                Sorted: [${array.slice().sort().join(', ')}]
                Reversed: [${array.slice().reverse().join(', ')}]
                Joined with " - ": "${array.join(' - ')}"
            `;
            
            document.getElementById('array-output').innerText = results;
        }
    </script>
</body>
</html>
```

## 📝 Assessment Questions

### Quick Knowledge Check
1. What is the difference between `let`, `const`, and `var`?
2. How would you store a list of your favorite movies in JavaScript?
3. What's the difference between `==` and `===`?
4. How do you access the third element of an array called `fruits`?
5. What data type would you use to store whether a user is logged in?

### Problem-Solving Challenges
1. **Variable Swap**: Write code to swap the values of two variables without using a third variable.
2. **Type Detective**: Create a function that takes any value and returns what data type it is.
3. **Array Analyzer**: Given an array of numbers, find the largest, smallest, and average values.

## 🚀 Challenge Project: Personal Budget Tracker

Create a comprehensive budget tracking system that uses all the data types and operations you've learned.

### Requirements:
1. Store income sources (salary, freelance, etc.)
2. Track expenses by category (food, rent, entertainment, etc.)
3. Calculate total income, total expenses, and remaining budget
4. Determine if the user is over or under budget
5. Provide savings recommendations

### SPARC Planning:
**Specification**: A budget tracker that helps users manage their finances  
**Pseudocode**: 
```
1. Define income sources and amounts
2. Define expense categories and amounts
3. Calculate totals
4. Compare income vs expenses
5. Generate financial advice
```

**Architecture**: Organize data into logical structures (objects for categories, arrays for transactions)  
**Refinement**: Add features like percentage calculations and visual feedback  
**Completion**: Test with different scenarios (positive/negative budgets)

## 📚 Additional Resources

### Practice Websites
- [JavaScript.info - Variables](https://javascript.info/variables)
- [MDN Web Docs - JavaScript Data Types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)
- [Codecademy JavaScript Course](https://www.codecademy.com/learn/introduction-to-javascript)

### Video Tutorials
- "JavaScript Variables Explained" - YouTube
- "Understanding Data Types in Programming" - Khan Academy
- "JavaScript for Beginners" - freeCodeCamp

### Books
- "Eloquent JavaScript" by Marijn Haverbeke (Chapter 1-2)
- "You Don't Know JS: Types & Grammar" by Kyle Simpson

## 🤔 Reflection Questions

1. **Understanding**: Which data type do you find most useful so far? Why?
2. **Application**: Think of a real-world problem that could be solved using variables. How would you structure the data?
3. **Debugging**: What strategies help you identify and fix variable-related errors?
4. **Best Practices**: How do you choose meaningful variable names?

## 🔗 Next Lesson Preview

In **Lesson 1.3: Control Structures**, we'll learn how to make our programs make decisions and repeat actions:
- **Conditional statements** (if/else) for decision-making
- **Loops** (for/while) for repetition
- **Switch statements** for multiple conditions
- **Combining logic** for complex decision trees

---

**🎉 Congratulations! You now understand the building blocks of programming: variables and data types. These concepts form the foundation for everything else you'll learn in programming.**

**⏭️ Next Lesson**: Control Structures - Making Programs Think and Repeat