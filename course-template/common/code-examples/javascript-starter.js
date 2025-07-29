/**
 * JavaScript Code Examples and Starter Templates
 * Course Template - Common Resources
 * 
 * This file contains reusable code patterns and examples
 * that can be used across different modules and lessons.
 */

// =============================================================================
// BASIC PROGRAMMING CONCEPTS
// =============================================================================

/**
 * Variables and Data Types Examples
 */
function variablesExample() {
    // Primitive data types
    const stringVar = "Hello, World!";
    const numberVar = 42;
    const booleanVar = true;
    const nullVar = null;
    const undefinedVar = undefined;
    
    // Object types
    const arrayVar = [1, 2, 3, "four", true];
    const objectVar = {
        name: "John",
        age: 30,
        isStudent: false
    };
    
    console.log("Variables initialized successfully");
    return { stringVar, numberVar, booleanVar, arrayVar, objectVar };
}

/**
 * Control Flow Examples
 */
function controlFlowExamples() {
    // Conditional statements
    function checkAge(age) {
        if (age >= 18) {
            return "Adult";
        } else if (age >= 13) {
            return "Teenager";
        } else {
            return "Child";
        }
    }
    
    // Switch statement
    function getDayType(dayOfWeek) {
        switch (dayOfWeek.toLowerCase()) {
            case 'monday':
            case 'tuesday':
            case 'wednesday':
            case 'thursday':
            case 'friday':
                return 'Weekday';
            case 'saturday':
            case 'sunday':
                return 'Weekend';
            default:
                return 'Invalid day';
        }
    }
    
    // Loops
    function loopExamples() {
        const results = [];
        
        // For loop
        for (let i = 0; i < 5; i++) {
            results.push(`For loop iteration: ${i}`);
        }
        
        // While loop
        let counter = 0;
        while (counter < 3) {
            results.push(`While loop iteration: ${counter}`);
            counter++;
        }
        
        // For...of loop (arrays)
        const fruits = ['apple', 'banana', 'orange'];
        for (const fruit of fruits) {
            results.push(`Fruit: ${fruit}`);
        }
        
        // For...in loop (objects)
        const person = { name: 'Alice', age: 25, city: 'New York' };
        for (const key in person) {
            results.push(`${key}: ${person[key]}`);
        }
        
        return results;
    }
    
    return { checkAge, getDayType, loopExamples };
}

/**
 * Function Examples
 */
function functionExamples() {
    // Regular function
    function regularFunction(param1, param2) {
        return param1 + param2;
    }
    
    // Arrow function
    const arrowFunction = (param1, param2) => param1 * param2;
    
    // Function with default parameters
    function greetUser(name = "Anonymous", greeting = "Hello") {
        return `${greeting}, ${name}!`;
    }
    
    // Higher-order function
    function applyOperation(arr, operation) {
        return arr.map(operation);
    }
    
    // Callback example
    function processData(data, callback) {
        const processed = data.map(item => item * 2);
        callback(processed);
    }
    
    return { regularFunction, arrowFunction, greetUser, applyOperation, processData };
}

// =============================================================================
// INTERMEDIATE CONCEPTS
// =============================================================================

/**
 * Object-Oriented Programming Examples
 */
class PersonClass {
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
    
    // Method
    introduce() {
        return `Hi, I'm ${this.name}, ${this.age} years old.`;
    }
    
    // Getter
    get info() {
        return `${this.name} (${this.email})`;
    }
    
    // Setter
    set updateAge(newAge) {
        if (newAge > 0 && newAge < 150) {
            this.age = newAge;
        } else {
            throw new Error("Invalid age");
        }
    }
    
    // Static method
    static createAnonymous() {
        return new PersonClass("Anonymous", 0, "no-email@example.com");
    }
}

// Inheritance example
class StudentClass extends PersonClass {
    constructor(name, age, email, studentId, major) {
        super(name, age, email);
        this.studentId = studentId;
        this.major = major;
        this.grades = [];
    }
    
    addGrade(subject, grade) {
        this.grades.push({ subject, grade });
    }
    
    getAverageGrade() {
        if (this.grades.length === 0) return 0;
        const sum = this.grades.reduce((acc, grade) => acc + grade.grade, 0);
        return sum / this.grades.length;
    }
    
    // Method overriding
    introduce() {
        return `${super.introduce()} I'm studying ${this.major}.`;
    }
}

/**
 * Array Methods Examples
 */
function arrayMethodsExamples() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const people = [
        { name: 'Alice', age: 25 },
        { name: 'Bob', age: 30 },
        { name: 'Charlie', age: 35 }
    ];
    
    // Map - transform each element
    const doubled = numbers.map(num => num * 2);
    
    // Filter - select elements that meet criteria
    const evenNumbers = numbers.filter(num => num % 2 === 0);
    
    // Reduce - combine elements into single value
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    
    // Find - get first element that meets criteria
    const foundPerson = people.find(person => person.age > 25);
    
    // Sort - arrange elements in order
    const sortedByAge = [...people].sort((a, b) => a.age - b.age);
    
    // Some - check if any element meets criteria
    const hasAdults = people.some(person => person.age >= 18);
    
    // Every - check if all elements meet criteria
    const allAdults = people.every(person => person.age >= 18);
    
    return {
        doubled,
        evenNumbers,
        sum,
        foundPerson,
        sortedByAge,
        hasAdults,
        allAdults
    };
}

/**
 * Async/Await Examples
 */
async function asyncExamples() {
    // Promise-based function
    function fetchData(url) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (url) {
                    resolve({ data: `Data from ${url}`, status: 200 });
                } else {
                    reject(new Error("URL is required"));
                }
            }, 1000);
        });
    }
    
    // Async/await usage
    try {
        const response = await fetchData("https://api.example.com/data");
        console.log("Data received:", response);
        return response;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
}

// =============================================================================
// ERROR HANDLING PATTERNS
// =============================================================================

/**
 * Error Handling Examples
 */
function errorHandlingExamples() {
    // Try-catch for synchronous code
    function safeDivision(a, b) {
        try {
            if (b === 0) {
                throw new Error("Division by zero is not allowed");
            }
            return a / b;
        } catch (error) {
            console.error("Error in division:", error.message);
            return null;
        }
    }
    
    // Custom error classes
    class ValidationError extends Error {
        constructor(message, field) {
            super(message);
            this.name = "ValidationError";
            this.field = field;
        }
    }
    
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            throw new ValidationError("Invalid email format", "email");
        }
        return true;
    }
    
    // Async error handling
    async function safeAsyncOperation(data) {
        try {
            // Simulate async operation
            await new Promise(resolve => setTimeout(resolve, 100));
            
            if (!data) {
                throw new Error("Data is required");
            }
            
            return { success: true, data };
        } catch (error) {
            console.error("Async operation failed:", error);
            return { success: false, error: error.message };
        }
    }
    
    return { safeDivision, ValidationError, validateEmail, safeAsyncOperation };
}

// =============================================================================
// UTILITY FUNCTIONS
// =============================================================================

/**
 * Common Utility Functions
 */
const utils = {
    // Debounce function
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },
    
    // Deep clone object
    deepClone(obj) {
        if (obj === null || typeof obj !== "object") return obj;
        if (obj instanceof Date) return new Date(obj.getTime());
        if (obj instanceof Array) return obj.map(item => this.deepClone(item));
        if (typeof obj === "object") {
            const clonedObj = {};
            for (const key in obj) {
                if (obj.hasOwnProperty(key)) {
                    clonedObj[key] = this.deepClone(obj[key]);
                }
            }
            return clonedObj;
        }
    },
    
    // Generate random ID
    generateRandomId(length = 8) {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
    },
    
    // Format date
    formatDate(date, format = 'YYYY-MM-DD') {
        const d = new Date(date);
        const year = d.getFullYear();
        const month = String(d.getMonth() + 1).padStart(2, '0');
        const day = String(d.getDate()).padStart(2, '0');
        
        return format
            .replace('YYYY', year)
            .replace('MM', month)
            .replace('DD', day);
    },
    
    // Validate input
    validate: {
        email: (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
        phone: (phone) => /^\+?[\d\s\-\(\)]+$/.test(phone),
        password: (password) => password.length >= 8,
        required: (value) => value !== null && value !== undefined && value !== ''
    }
};

// =============================================================================
// EXPORTS FOR MODULE USAGE
// =============================================================================

// For Node.js environments
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        variablesExample,
        controlFlowExamples,
        functionExamples,
        PersonClass,
        StudentClass,
        arrayMethodsExamples,
        asyncExamples,
        errorHandlingExamples,
        utils
    };
}

// For browser environments
if (typeof window !== 'undefined') {
    window.CourseExamples = {
        variablesExample,
        controlFlowExamples,
        functionExamples,
        PersonClass,
        StudentClass,
        arrayMethodsExamples,
        asyncExamples,
        errorHandlingExamples,
        utils
    };
}

// =============================================================================
// EXAMPLE USAGE AND TESTING
// =============================================================================

/**
 * Example usage of the above functions
 * This section demonstrates how to use the code examples
 */
async function demonstrateExamples() {
    console.log("=== Course Template Code Examples ===");
    
    // Variables example
    console.log("\n1. Variables Example:");
    const vars = variablesExample();
    console.log(vars);
    
    // Control flow example
    console.log("\n2. Control Flow Example:");
    const { checkAge, getDayType, loopExamples } = controlFlowExamples();
    console.log("Age check (25):", checkAge(25));
    console.log("Day type (Monday):", getDayType("Monday"));
    console.log("Loop examples:", loopExamples().slice(0, 3)); // Show first 3
    
    // Class example
    console.log("\n3. Class Example:");
    const student = new StudentClass("Alice", 20, "alice@email.com", "S123", "Computer Science");
    student.addGrade("Math", 95);
    student.addGrade("Physics", 87);
    console.log(student.introduce());
    console.log("Average grade:", student.getAverageGrade());
    
    // Array methods example
    console.log("\n4. Array Methods Example:");
    const arrayResults = arrayMethodsExamples();
    console.log("Doubled numbers:", arrayResults.doubled);
    console.log("Even numbers:", arrayResults.evenNumbers);
    console.log("Sum:", arrayResults.sum);
    
    // Async example
    console.log("\n5. Async Example:");
    try {
        const asyncResult = await asyncExamples();
        console.log("Async result:", asyncResult);
    } catch (error) {
        console.log("Async error:", error.message);
    }
    
    // Error handling example
    console.log("\n6. Error Handling Example:");
    const { safeDivision, validateEmail } = errorHandlingExamples();
    console.log("Safe division (10/2):", safeDivision(10, 2));
    console.log("Safe division (10/0):", safeDivision(10, 0));
    
    // Utility functions example
    console.log("\n7. Utility Functions Example:");
    console.log("Random ID:", utils.generateRandomId());
    console.log("Formatted date:", utils.formatDate(new Date()));
    console.log("Email validation:", utils.validate.email("test@example.com"));
    
    console.log("\n=== Examples completed successfully! ===");
}

// Run examples if this file is executed directly
if (typeof require !== 'undefined' && require.main === module) {
    demonstrateExamples();
}