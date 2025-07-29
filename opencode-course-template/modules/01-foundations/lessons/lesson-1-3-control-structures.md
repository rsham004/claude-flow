# Lesson 1.3: Control Structures - Conditionals and Loops

⏱️ **Duration**: 135 minutes  
🎯 **Objective**: Master decision-making and repetition in programming through control structures  
📝 **Prerequisites**: Lesson 1.2 (Variables and Data Types)

## 🎯 Learning Outcomes

By the end of this lesson, you will be able to:
- Use conditional statements (if/else) to make programs make decisions
- Implement different types of loops (for, while, do-while) for repetition
- Apply logical operators to create complex conditions
- Use switch statements for multiple-choice scenarios
- Debug common control structure errors
- Apply SPARC methodology to algorithm design
- Write efficient, readable code using appropriate control structures

## 📚 Theory: Program Flow Control

### What are Control Structures?

Control structures are programming constructs that allow you to control the flow of your program's execution. Without them, programs would only run from top to bottom, line by line. Control structures give your programs the ability to:

1. **Make decisions** (conditionals)
2. **Repeat actions** (loops)
3. **Choose between multiple options** (switch statements)

Think of control structures like traffic signals and road signs that direct traffic flow in a city.

### SPARC Applied to Control Structures

**Specification**: What decisions does my program need to make? What actions need to be repeated?  
**Pseudocode**: Write the logic in plain English before coding  
**Architecture**: Organize complex logic into clear, nested structures  
**Refinement**: Simplify conditions and eliminate redundant checks  
**Completion**: Test all possible paths through your logic

## 🔀 Conditional Statements

### 1. Basic If Statement

The `if` statement executes code only when a condition is true.

```javascript
let temperature = 25;

if (temperature > 20) {
    console.log("It's warm outside!");
}

// Real-world example: User authentication
let isLoggedIn = true;
let hasPermission = true;

if (isLoggedIn && hasPermission) {
    console.log("Welcome to the admin panel!");
}
```

### 2. If-Else Statement

The `else` clause provides an alternative action when the condition is false.

```javascript
let age = 17;

if (age >= 18) {
    console.log("You can vote!");
} else {
    console.log("You're too young to vote.");
}

// Real-world example: Discount calculation
let orderAmount = 150;
let discount = 0;

if (orderAmount >= 100) {
    discount = 0.10; // 10% discount
} else {
    discount = 0.05; // 5% discount
}

let finalAmount = orderAmount * (1 - discount);
console.log(`Your total: $${finalAmount.toFixed(2)}`);
```

### 3. Else-If Chain

For multiple conditions, use `else if` to create a chain of checks.

```javascript
let grade = 85;
let letterGrade;

if (grade >= 90) {
    letterGrade = "A";
} else if (grade >= 80) {
    letterGrade = "B";
} else if (grade >= 70) {
    letterGrade = "C";
} else if (grade >= 60) {
    letterGrade = "D";
} else {
    letterGrade = "F";
}

console.log(`Your grade: ${letterGrade}`);

// Real-world example: Weather recommendations
let temperature = 15;
let recommendation;

if (temperature > 25) {
    recommendation = "Wear light clothing and stay hydrated!";
} else if (temperature > 15) {
    recommendation = "Perfect weather for outdoor activities!";
} else if (temperature > 5) {
    recommendation = "Bring a jacket!";
} else {
    recommendation = "Stay warm and consider staying indoors!";
}

console.log(recommendation);
```

### 4. Nested If Statements

You can place if statements inside other if statements for complex logic.

```javascript
let weather = "sunny";
let temperature = 22;
let hasUmbrella = true;

if (weather === "sunny") {
    if (temperature > 20) {
        console.log("Perfect day for a picnic!");
    } else {
        console.log("Sunny but a bit cool. Bring a sweater!");
    }
} else if (weather === "rainy") {
    if (hasUmbrella) {
        console.log("Don't forget your umbrella!");
    } else {
        console.log("Better stay inside or buy an umbrella!");
    }
} else {
    console.log("Check the weather forecast!");
}
```

## 🔄 Loops

### 1. For Loop

Use for loops when you know how many times you want to repeat something.

```javascript
// Basic for loop structure
for (let i = 0; i < 5; i++) {
    console.log(`Count: ${i}`);
}
// Output: Count: 0, Count: 1, Count: 2, Count: 3, Count: 4

// Real-world example: Processing an array
let fruits = ["apple", "banana", "orange", "grape"];

for (let i = 0; i < fruits.length; i++) {
    console.log(`Fruit ${i + 1}: ${fruits[i]}`);
}

// Modern for...of loop (easier for arrays)
for (let fruit of fruits) {
    console.log(`I love ${fruit}s!`);
}

// For...in loop (for object properties)
let person = { name: "Alice", age: 30, city: "New York" };

for (let property in person) {
    console.log(`${property}: ${person[property]}`);
}
```

### 2. While Loop

Use while loops when you don't know exactly how many iterations you need.

```javascript
// Basic while loop
let count = 0;

while (count < 3) {
    console.log(`While count: ${count}`);
    count++; // Important: increment to avoid infinite loop!
}

// Real-world example: User input validation
let userInput = "";
let attempts = 0;
let maxAttempts = 3;

// Simulating user input (in real code, this would come from actual user input)
let possibleInputs = ["", "invalid", "valid"];

while (userInput !== "valid" && attempts < maxAttempts) {
    userInput = possibleInputs[attempts]; // Simulate getting user input
    attempts++;
    
    if (userInput === "valid") {
        console.log("Valid input received!");
    } else {
        console.log(`Invalid input. Attempt ${attempts} of ${maxAttempts}`);
    }
}

if (userInput !== "valid") {
    console.log("Maximum attempts reached. Please try again later.");
}
```

### 3. Do-While Loop

Similar to while, but guarantees the code runs at least once.

```javascript
let password;
let isValidPassword = false;

// Simulating password checking
let attempts = 0;
let correctPassword = "secret123";

do {
    // In real code, this would prompt the user
    password = attempts === 0 ? "wrong" : attempts === 1 ? "stillwrong" : "secret123";
    attempts++;
    
    if (password === correctPassword) {
        isValidPassword = true;
        console.log("Password accepted!");
    } else {
        console.log("Incorrect password. Please try again.");
    }
} while (!isValidPassword && attempts < 3);

if (!isValidPassword) {
    console.log("Account locked due to too many failed attempts.");
}
```

## 🎛️ Switch Statements

Use switch statements for multiple exact value comparisons.

```javascript
let dayOfWeek = 3;
let dayName;

switch (dayOfWeek) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Invalid day";
}

console.log(`Today is ${dayName}`);

// Real-world example: Calculator
function calculator(operation, num1, num2) {
    let result;
    
    switch (operation) {
        case "add":
        case "+":
            result = num1 + num2;
            break;
        case "subtract":
        case "-":
            result = num1 - num2;
            break;
        case "multiply":
        case "*":
            result = num1 * num2;
            break;
        case "divide":
        case "/":
            if (num2 === 0) {
                return "Error: Division by zero";
            }
            result = num1 / num2;
            break;
        default:
            return "Error: Unknown operation";
    }
    
    return `${num1} ${operation} ${num2} = ${result}`;
}

console.log(calculator("add", 5, 3));        // 5 add 3 = 8
console.log(calculator("*", 4, 7));          // 4 * 7 = 28
console.log(calculator("divide", 10, 0));    // Error: Division by zero
```

## 🧮 Logical Operators

### AND (&&), OR (||), NOT (!) Operators

```javascript
let age = 25;
let hasLicense = true;
let hasInsurance = true;
let hasCar = false;

// AND operator - all conditions must be true
if (age >= 18 && hasLicense && hasInsurance) {
    console.log("You meet the basic requirements to drive!");
}

// OR operator - at least one condition must be true
if (hasCar || hasLicense) {
    console.log("You either have a car or can drive one!");
}

// NOT operator - reverses the boolean value
if (!hasCar) {
    console.log("You need to get a car or use alternative transportation.");
}

// Complex logical combinations
let isWeekend = false;
let isVacation = false;
let hasWork = true;

if ((isWeekend || isVacation) && !hasWork) {
    console.log("Time to relax!");
} else if (hasWork && !isWeekend) {
    console.log("Time to work!");
} else {
    console.log("Check your schedule!");
}
```

## 🛠️ Hands-On Exercises

### Exercise 1: Grade Management System (40 minutes)

Create a comprehensive grading system using control structures.

#### SPARC Planning
**Specification**: Build a system that processes student grades and provides feedback  
**Pseudocode**:
```
1. For each student:
   - Calculate average grade
   - Determine letter grade
   - Check if passing
   - Provide feedback
2. Calculate class statistics
3. Identify students needing help
```

#### Implementation
```javascript
// Student data
let students = [
    { name: "Alice", grades: [85, 92, 78, 95, 88] },
    { name: "Bob", grades: [72, 68, 75, 70, 74] },
    { name: "Carol", grades: [95, 98, 92, 96, 94] },
    { name: "David", grades: [45, 52, 48, 55, 50] },
    { name: "Eve", grades: [88, 85, 90, 87, 89] }
];

let classTotal = 0;
let passingStudents = 0;
let failingStudents = [];

console.log("=== GRADE REPORT ===\n");

// Process each student
for (let student of students) {
    // Calculate average
    let total = 0;
    for (let grade of student.grades) {
        total += grade;
    }
    let average = total / student.grades.length;
    
    // Determine letter grade
    let letterGrade;
    if (average >= 90) {
        letterGrade = "A";
    } else if (average >= 80) {
        letterGrade = "B";
    } else if (average >= 70) {
        letterGrade = "C";
    } else if (average >= 60) {
        letterGrade = "D";
    } else {
        letterGrade = "F";
    }
    
    // Check if passing
    let isPassing = average >= 60;
    if (isPassing) {
        passingStudents++;
    } else {
        failingStudents.push(student.name);
    }
    
    // Provide feedback
    let feedback;
    if (average >= 95) {
        feedback = "Excellent work! Keep it up!";
    } else if (average >= 85) {
        feedback = "Great job! You're doing well.";
    } else if (average >= 75) {
        feedback = "Good work! Consider studying a bit more.";
    } else if (average >= 65) {
        feedback = "You're passing, but need improvement.";
    } else {
        feedback = "Needs significant improvement. Please see the teacher.";
    }
    
    // Display student report
    console.log(`Student: ${student.name}`);
    console.log(`Grades: ${student.grades.join(", ")}`);
    console.log(`Average: ${average.toFixed(1)}%`);
    console.log(`Letter Grade: ${letterGrade}`);
    console.log(`Status: ${isPassing ? "PASSING" : "FAILING"}`);
    console.log(`Feedback: ${feedback}\n`);
    
    classTotal += average;
}

// Class statistics
let classAverage = classTotal / students.length;

console.log("=== CLASS STATISTICS ===");
console.log(`Class Average: ${classAverage.toFixed(1)}%`);
console.log(`Passing Students: ${passingStudents}/${students.length}`);
console.log(`Failing Students: ${failingStudents.length > 0 ? failingStudents.join(", ") : "None"}`);

// Class performance assessment
if (classAverage >= 80) {
    console.log("Class Performance: Excellent");
} else if (classAverage >= 70) {
    console.log("Class Performance: Good");
} else if (classAverage >= 60) {
    console.log("Class Performance: Satisfactory");
} else {
    console.log("Class Performance: Needs Improvement");
}
```

### Exercise 2: Interactive Number Guessing Game (30 minutes)

```javascript
// Number Guessing Game
function numberGuessingGame() {
    let secretNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;
    let maxAttempts = 7;
    let hasWon = false;
    
    console.log("=== NUMBER GUESSING GAME ===");
    console.log("I'm thinking of a number between 1 and 100!");
    console.log(`You have ${maxAttempts} attempts to guess it.`);
    
    // Simulate user guesses (in real game, these would come from user input)
    let simulatedGuesses = [50, 75, 63, 69, 72, 70, 71];
    
    while (attempts < maxAttempts && !hasWon) {
        attempts++;
        let guess = simulatedGuesses[attempts - 1];
        
        console.log(`\nAttempt ${attempts}: You guessed ${guess}`);
        
        if (guess === secretNumber) {
            hasWon = true;
            console.log("🎉 Congratulations! You guessed the number!");
            console.log(`It took you ${attempts} attempt${attempts === 1 ? "" : "s"}.`);
        } else if (guess < secretNumber) {
            console.log("Too low! Try a higher number.");
        } else {
            console.log("Too high! Try a lower number.");
        }
        
        // Provide hints based on how close they are
        let difference = Math.abs(guess - secretNumber);
        if (!hasWon) {
            if (difference <= 3) {
                console.log("🔥 You're very close!");
            } else if (difference <= 10) {
                console.log("🌡️ You're getting warm!");
            } else {
                console.log("❄️ You're cold!");
            }
            
            console.log(`Attempts remaining: ${maxAttempts - attempts}`);
        }
    }
    
    if (!hasWon) {
        console.log(`\n💔 Game over! The number was ${secretNumber}.`);
        console.log("Better luck next time!");
    }
    
    // Game statistics
    let performance;
    if (hasWon) {
        if (attempts <= 3) {
            performance = "Excellent!";
        } else if (attempts <= 5) {
            performance = "Good!";
        } else {
            performance = "Not bad!";
        }
        console.log(`Performance: ${performance}`);
    }
}

// Run the game
numberGuessingGame();
```

### Exercise 3: Shopping Cart with Discounts (35 minutes)

```javascript
// Advanced Shopping Cart System
let cart = [
    { name: "Laptop", price: 999.99, category: "electronics", quantity: 1 },
    { name: "Headphones", price: 199.99, category: "electronics", quantity: 2 },
    { name: "T-shirt", price: 24.99, category: "clothing", quantity: 3 },
    { name: "Book", price: 14.99, category: "books", quantity: 2 },
    { name: "Coffee Mug", price: 12.99, category: "home", quantity: 1 }
];

let customer = {
    isPremium: true,
    age: 25,
    isStudent: true,
    previousPurchases: 5
};

function processShoppingCart(cart, customer) {
    console.log("=== SHOPPING CART PROCESSOR ===\n");
    
    let subtotal = 0;
    let totalItems = 0;
    let categoryTotals = {};
    
    // Process each item
    console.log("ITEMS IN CART:");
    for (let item of cart) {
        let itemTotal = item.price * item.quantity;
        subtotal += itemTotal;
        totalItems += item.quantity;
        
        // Track category totals
        if (categoryTotals[item.category]) {
            categoryTotals[item.category] += itemTotal;
        } else {
            categoryTotals[item.category] = itemTotal;
        }
        
        console.log(`${item.name}: $${item.price} × ${item.quantity} = $${itemTotal.toFixed(2)}`);
    }
    
    console.log(`\nSubtotal: $${subtotal.toFixed(2)}`);
    console.log(`Total Items: ${totalItems}`);
    
    // Apply discounts based on various conditions
    let discounts = [];
    let totalDiscount = 0;
    
    // Student discount
    if (customer.isStudent && customer.age <= 26) {
        let studentDiscount = subtotal * 0.05; // 5%
        discounts.push({ name: "Student Discount (5%)", amount: studentDiscount });
        totalDiscount += studentDiscount;
    }
    
    // Premium member discount
    if (customer.isPremium) {
        let premiumDiscount = subtotal * 0.10; // 10%
        discounts.push({ name: "Premium Member Discount (10%)", amount: premiumDiscount });
        totalDiscount += premiumDiscount;
    }
    
    // Bulk purchase discount
    if (totalItems >= 5) {
        let bulkDiscount = subtotal * 0.03; // 3%
        discounts.push({ name: "Bulk Purchase Discount (3%)", amount: bulkDiscount });
        totalDiscount += bulkDiscount;
    }
    
    // Electronics bundle discount
    if (categoryTotals.electronics && categoryTotals.electronics >= 500) {
        let electronicsDiscount = categoryTotals.electronics * 0.08; // 8% on electronics
        discounts.push({ name: "Electronics Bundle Discount (8%)", amount: electronicsDiscount });
        totalDiscount += electronicsDiscount;
    }
    
    // Loyal customer discount
    if (customer.previousPurchases >= 5) {
        let loyaltyDiscount = 25; // $25 flat discount
        discounts.push({ name: "Loyalty Reward ($25 off)", amount: loyaltyDiscount });
        totalDiscount += loyaltyDiscount;
    }
    
    // Apply discounts
    console.log("\nDISCOUNTS APPLIED:");
    if (discounts.length > 0) {
        for (let discount of discounts) {
            console.log(`- ${discount.name}: -$${discount.amount.toFixed(2)}`);
        }
        console.log(`Total Discounts: -$${totalDiscount.toFixed(2)}`);
    } else {
        console.log("No discounts applied.");
    }
    
    // Calculate shipping
    let shipping = 0;
    if (subtotal - totalDiscount < 50) {
        shipping = 9.99;
        console.log(`\nShipping: $${shipping.toFixed(2)}`);
    } else {
        console.log("\nShipping: FREE (orders over $50)");
    }
    
    // Calculate tax (varies by category)
    let tax = 0;
    for (let item of cart) {
        let itemTotal = item.price * item.quantity;
        let taxRate;
        
        switch (item.category) {
            case "electronics":
                taxRate = 0.08; // 8%
                break;
            case "clothing":
                taxRate = 0.06; // 6%
                break;
            case "books":
                taxRate = 0.00; // Tax-free
                break;
            default:
                taxRate = 0.07; // 7%
        }
        
        tax += itemTotal * taxRate;
    }
    
    console.log(`Tax: $${tax.toFixed(2)}`);
    
    // Final total
    let finalTotal = subtotal - totalDiscount + shipping + tax;
    console.log(`\nFINAL TOTAL: $${finalTotal.toFixed(2)}`);
    
    // Savings summary
    let totalSavings = totalDiscount + (subtotal >= 50 ? 9.99 : 0); // Include free shipping as savings
    if (totalSavings > 0) {
        console.log(`Total Savings: $${totalSavings.toFixed(2)}`);
        console.log(`Savings Percentage: ${((totalSavings / subtotal) * 100).toFixed(1)}%`);
    }
    
    // Recommendations
    console.log("\nRECOMMENDATIONS:");
    if (!customer.isPremium && subtotal > 200) {
        console.log("💡 Consider becoming a Premium member to save 10% on all future purchases!");
    }
    
    if (subtotal < 50 && shipping > 0) {
        let amountNeeded = 50 - (subtotal - totalDiscount);
        console.log(`💡 Add $${amountNeeded.toFixed(2)} more to get free shipping!`);
    }
    
    if (totalItems < 5 && subtotal > 100) {
        console.log("💡 Add one more item to get the bulk purchase discount!");
    }
}

// Process the cart
processShoppingCart(cart, customer);
```

## 🐛 Common Mistakes and Debugging

### 1. Infinite Loops
```javascript
// Wrong - this will run forever!
// let i = 0;
// while (i < 10) {
//     console.log(i);
//     // Forgot to increment i!
// }

// Right
let i = 0;
while (i < 10) {
    console.log(i);
    i++; // Don't forget to change the condition variable!
}
```

### 2. Off-by-One Errors
```javascript
let numbers = [1, 2, 3, 4, 5];

// Wrong - this will try to access index 5 (which doesn't exist)
// for (let i = 0; i <= numbers.length; i++) {
//     console.log(numbers[i]);
// }

// Right
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
```

### 3. Assignment vs. Comparison
```javascript
let x = 5;

// Wrong - this assigns 10 to x, doesn't compare
// if (x = 10) {
//     console.log("This will always run!");
// }

// Right - this compares x to 10
if (x === 10) {
    console.log("x equals 10");
} else {
    console.log("x does not equal 10");
}
```

### 4. Forgetting Break in Switch
```javascript
let grade = "B";

// Wrong - without break, it will "fall through"
// switch (grade) {
//     case "A":
//         console.log("Excellent!");
//     case "B":
//         console.log("Good job!");
//     case "C":
//         console.log("Average");
//     default:
//         console.log("Keep trying!");
// }

// Right
switch (grade) {
    case "A":
        console.log("Excellent!");
        break;
    case "B":
        console.log("Good job!");
        break;
    case "C":
        console.log("Average");
        break;
    default:
        console.log("Keep trying!");
}
```

## 🧪 Interactive Demonstration

Create an HTML file to test control structures interactively:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Control Structures Demo</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 20px; }
        .demo { border: 1px solid #ccc; padding: 15px; margin: 10px 0; }
        button { background: #007cba; color: white; padding: 10px 15px; border: none; cursor: pointer; margin: 5px; }
        .output { background: #f5f5f5; padding: 10px; margin: 10px 0; font-family: monospace; max-height: 200px; overflow-y: auto; }
        input, select { padding: 5px; margin: 5px; }
    </style>
</head>
<body>
    <h1>Control Structures Interactive Demo</h1>
    
    <div class="demo">
        <h3>Conditional Logic Demo</h3>
        <label>Enter your age: <input type="number" id="age" value="20"></label><br>
        <label>Are you a student? <input type="checkbox" id="student"></label><br>
        <label>Annual income: $<input type="number" id="income" value="30000"></label><br>
        <button onclick="checkEligibility()">Check Loan Eligibility</button>
        <div id="eligibility-output" class="output"></div>
    </div>

    <div class="demo">
        <h3>Loop Demo</h3>
        <label>Start: <input type="number" id="start" value="1"></label>
        <label>End: <input type="number" id="end" value="10"></label>
        <label>Pattern: 
            <select id="pattern">
                <option value="numbers">Numbers</option>
                <option value="squares">Squares</option>
                <option value="fibonacci">Fibonacci</option>
                <option value="primes">Primes</option>
            </select>
        </label>
        <button onclick="generatePattern()">Generate Pattern</button>
        <div id="pattern-output" class="output"></div>
    </div>

    <div class="demo">
        <h3>Grade Calculator</h3>
        <label>Enter grades (comma-separated): <input type="text" id="grades" value="85,92,78,95,88"></label><br>
        <button onclick="calculateGrade()">Calculate Grade</button>
        <div id="grade-output" class="output"></div>
    </div>

    <script>
        function checkEligibility() {
            let age = parseInt(document.getElementById('age').value);
            let isStudent = document.getElementById('student').checked;
            let income = parseInt(document.getElementById('income').value);
            
            let output = "=== LOAN ELIGIBILITY CHECK ===\n";
            output += `Age: ${age}\n`;
            output += `Student: ${isStudent ? "Yes" : "No"}\n`;
            output += `Income: $${income.toLocaleString()}\n\n`;
            
            let eligible = false;
            let reasons = [];
            
            if (age < 18) {
                reasons.push("Must be at least 18 years old");
            } else if (age >= 18 && age <= 65) {
                if (isStudent && income >= 10000) {
                    eligible = true;
                    reasons.push("Eligible as student with sufficient income");
                } else if (!isStudent && income >= 25000) {
                    eligible = true;
                    reasons.push("Eligible with sufficient income");
                } else if (isStudent && income < 10000) {
                    reasons.push("Students need minimum $10,000 annual income");
                } else if (!isStudent && income < 25000) {
                    reasons.push("Non-students need minimum $25,000 annual income");
                }
            } else {
                reasons.push("Must be 65 or younger");
            }
            
            output += `RESULT: ${eligible ? "APPROVED" : "DENIED"}\n`;
            output += `Reasons: ${reasons.join(", ")}`;
            
            document.getElementById('eligibility-output').textContent = output;
        }

        function generatePattern() {
            let start = parseInt(document.getElementById('start').value);
            let end = parseInt(document.getElementById('end').value);
            let pattern = document.getElementById('pattern').value;
            
            let output = `=== ${pattern.toUpperCase()} PATTERN ===\n`;
            let results = [];
            
            switch (pattern) {
                case "numbers":
                    for (let i = start; i <= end; i++) {
                        results.push(i.toString());
                    }
                    break;
                    
                case "squares":
                    for (let i = start; i <= end; i++) {
                        results.push(`${i}² = ${i * i}`);
                    }
                    break;
                    
                case "fibonacci":
                    let a = 0, b = 1;
                    while (a <= end) {
                        if (a >= start) {
                            results.push(a.toString());
                        }
                        let temp = a + b;
                        a = b;
                        b = temp;
                    }
                    break;
                    
                case "primes":
                    for (let num = start; num <= end; num++) {
                        if (isPrime(num)) {
                            results.push(num.toString());
                        }
                    }
                    break;
            }
            
            output += results.join(", ");
            document.getElementById('pattern-output').textContent = output;
        }
        
        function isPrime(n) {
            if (n < 2) return false;
            for (let i = 2; i <= Math.sqrt(n); i++) {
                if (n % i === 0) return false;
            }
            return true;
        }

        function calculateGrade() {
            let gradesInput = document.getElementById('grades').value;
            let grades = gradesInput.split(',').map(g => parseFloat(g.trim()));
            
            let output = "=== GRADE CALCULATION ===\n";
            output += `Grades entered: ${grades.join(", ")}\n\n`;
            
            // Calculate average
            let total = 0;
            for (let grade of grades) {
                total += grade;
            }
            let average = total / grades.length;
            
            // Determine letter grade
            let letterGrade;
            if (average >= 90) {
                letterGrade = "A";
            } else if (average >= 80) {
                letterGrade = "B";
            } else if (average >= 70) {
                letterGrade = "C";
            } else if (average >= 60) {
                letterGrade = "D";
            } else {
                letterGrade = "F";
            }
            
            // Find highest and lowest
            let highest = Math.max(...grades);
            let lowest = Math.min(...grades);
            
            output += `Average: ${average.toFixed(2)}%\n`;
            output += `Letter Grade: ${letterGrade}\n`;
            output += `Highest: ${highest}%\n`;
            output += `Lowest: ${lowest}%\n`;
            output += `Range: ${highest - lowest} points\n`;
            
            // Performance feedback
            if (average >= 95) {
                output += "\nFeedback: Outstanding performance! 🌟";
            } else if (average >= 85) {
                output += "\nFeedback: Excellent work! Keep it up! 👍";
            } else if (average >= 75) {
                output += "\nFeedback: Good job! Room for improvement. 📚";
            } else if (average >= 65) {
                output += "\nFeedback: Passing, but needs more effort. 💪";
            } else {
                output += "\nFeedback: Needs significant improvement. 📖";
            }
            
            document.getElementById('grade-output').textContent = output;
        }
    </script>
</body>
</html>
```

## 📝 Assessment Questions

### Quick Knowledge Check
1. What's the difference between a `while` loop and a `do-while` loop?
2. When should you use a `switch` statement instead of `if-else`?
3. What happens if you forget the `break` statement in a switch case?
4. How do you avoid infinite loops?
5. What's the difference between `==` and `===` in conditions?

### Problem-Solving Challenges
1. **FizzBuzz**: Write a program that prints numbers 1-100, but prints "Fizz" for multiples of 3, "Buzz" for multiples of 5, and "FizzBuzz" for multiples of both.
2. **Prime Number Checker**: Create a function that determines if a number is prime.
3. **Password Validator**: Write code that checks if a password meets specific criteria (length, special characters, etc.).

## 🚀 Challenge Project: Text Adventure Game

Create a simple text-based adventure game that uses all the control structures you've learned.

### Requirements:
1. Player can move between different rooms
2. Each room has different options and outcomes
3. Player has health, inventory, and score
4. Game ends when player reaches goal or health reaches zero
5. Use all types of control structures (if/else, loops, switch)

### SPARC Planning:
**Specification**: Interactive story game with choices and consequences  
**Pseudocode**: 
```
1. Initialize player stats and game state
2. While game is active:
   - Display current room and options
   - Get player choice
   - Process choice using switch statement
   - Update game state with if/else logic
   - Check win/lose conditions
```

## 📚 Additional Resources

### Practice Websites
- [JavaScript.info - Conditional Operators](https://javascript.info/ifelse)
- [JavaScript.info - Loops](https://javascript.info/while-for)
- [Codecademy - Control Flow](https://www.codecademy.com/learn/introduction-to-javascript)

### Algorithm Practice
- [LeetCode](https://leetcode.com/) - Programming challenges
- [HackerRank](https://www.hackerrank.com/) - Algorithm practice
- [Codewars](https://www.codewars.com/) - Coding kata

## 🤔 Reflection Questions

1. **Pattern Recognition**: What patterns do you notice in when to use different types of loops?
2. **Decision Making**: How do you decide between using if-else chains vs. switch statements?
3. **Debugging**: What strategies help you debug logical errors in control structures?
4. **Real-World Applications**: Can you think of real-world scenarios where you'd use each type of control structure?

## 🔗 Next Lesson Preview

In **Lesson 1.4: Functions and Code Organization**, we'll learn how to organize code into reusable blocks:
- **Function basics** - creating and calling functions
- **Parameters and return values** - making functions flexible
- **Scope and closures** - understanding variable accessibility
- **Arrow functions** - modern JavaScript syntax
- **Best practices** - writing clean, maintainable functions

---

**🎉 Excellent work! You now understand how to make programs that can think and make decisions. Control structures are the backbone of programming logic!**

**⏭️ Next Lesson**: Functions and Code Organization