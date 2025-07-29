# Module 1: Programming Foundations - Assessment Quiz

🎯 **Test your understanding of programming fundamentals and web development basics**

**⏱️ Time Limit**: 60 minutes  
**📝 Format**: Multiple choice, code completion, and short answer  
**🎯 Passing Score**: 70% (28/40 points)  
**📚 Open Resources**: Course materials, MDN Web Docs (no peer collaboration)

---

## 📋 Instructions

1. **Read each question carefully** before selecting your answer
2. **For coding questions**, write clean, readable code with proper syntax
3. **Show your work** for problem-solving questions
4. **Manage your time** - approximately 1.5 minutes per point
5. **Submit when complete** or when time expires

---

## 🧠 Section A: Programming Fundamentals (15 points)

### Question 1: Variables and Data Types (3 points)

Which of the following JavaScript variable declarations is correct and follows best practices?

**A)** `var userName = "John Doe";`  
**B)** `let userName = "John Doe";`  
**C)** `const userName = "John Doe";`  
**D)** `userName = "John Doe";`

**Short Answer (1 point)**: Explain why you chose your answer.

---

### Question 2: Functions (4 points)

**Part A (2 points)**: Complete the following function that calculates the area of a rectangle:

```javascript
function calculateRectangleArea(length, width) {
    // Your code here
    
}

// Test your function
console.log(calculateRectangleArea(5, 3)); // Should output: 15
```

**Part B (2 points)**: What will be the output of the following code? Explain your reasoning.

```javascript
function greetUser(name = "Guest") {
    return `Hello, ${name}!`;
}

console.log(greetUser());
console.log(greetUser("Sarah"));
```

---

### Question 3: Control Flow (4 points)

**Part A (2 points)**: Write a JavaScript function that takes a number and returns:
- "Positive" if the number is greater than 0
- "Negative" if the number is less than 0  
- "Zero" if the number equals 0

```javascript
function checkNumber(num) {
    // Your code here
    
}
```

**Part B (2 points)**: Write a loop that prints the numbers 1 through 5, each on a new line.

```javascript
// Your code here

```

---

### Question 4: Problem Solving (4 points)

You need to create a simple calculator function that performs basic arithmetic operations.

```javascript
function calculator(num1, num2, operation) {
    // Complete this function
    // operation can be: "add", "subtract", "multiply", "divide"
    // Return the result of the operation
    // Handle division by zero appropriately
    
}

// Test cases:
// calculator(10, 5, "add") should return 15
// calculator(10, 5, "divide") should return 2
// calculator(10, 0, "divide") should return "Error: Division by zero"
```

---

## 🌐 Section B: Web Development Basics (15 points)

### Question 5: HTML Structure (4 points)

**Part A (2 points)**: Which HTML structure is semantically correct for a blog post?

**A)**
```html
<div class="post">
    <div class="title">My Blog Post</div>
    <div class="content">Post content here...</div>
</div>
```

**B)**
```html
<article>
    <h1>My Blog Post</h1>
    <p>Post content here...</p>
</article>
```

**C)**
```html
<section>
    <header>My Blog Post</header>
    <main>Post content here...</main>
</section>
```

**Part B (2 points)**: Write the HTML for a navigation menu with links to Home, About, and Contact pages.

```html
<!-- Your code here -->

```

---

### Question 6: CSS Styling (5 points)

**Part A (2 points)**: What's the difference between `margin` and `padding` in CSS?

**Part B (3 points)**: Write CSS to style a button with the following requirements:
- Background color: blue (#007cba)
- Text color: white
- Padding: 10px on top/bottom, 20px on left/right
- Rounded corners with 5px radius
- Changes to darker blue (#005a8b) when hovered

```css
.button {
    /* Your code here */
    
}
```

---

### Question 7: JavaScript and the DOM (6 points)

**Part A (3 points)**: Complete the JavaScript code to add a click event listener to a button that changes the text of a paragraph:

```html
<button id="changeText">Click Me</button>
<p id="message">Original text</p>
```

```javascript
// Your code here - add event listener that changes paragraph text to "Text changed!"

```

**Part B (3 points)**: What will happen when this code runs? Explain the sequence of events.

```javascript
document.addEventListener('DOMContentLoaded', function() {
    console.log('1. DOM loaded');
    
    setTimeout(function() {
        console.log('2. Timeout executed');
    }, 0);
    
    console.log('3. Script continues');
});
```

---

## 🛠️ Section C: Development Tools and Best Practices (10 points)

### Question 8: Version Control with Git (4 points)

**Part A (2 points)**: Put these Git commands in the correct order for making your first commit:

- `git add .`
- `git init`
- `git commit -m "Initial commit"`

**Part B (2 points)**: What's the difference between `git add .` and `git add filename.txt`?

---

### Question 9: Development Environment (3 points)

**Multiple Choice**: Which VS Code extension is most useful for web development?

**A)** Prettier - Code formatter  
**B)** Live Server - Local development server  
**C)** GitLens - Enhanced Git integration  
**D)** All of the above

**Short Answer (1 point)**: Name one keyboard shortcut in VS Code and explain what it does.

---

### Question 10: Debugging and Problem Solving (3 points)

You have the following HTML and JavaScript, but the button click isn't working. Identify the error and explain how to fix it:

```html
<button id="myButton">Click Me</button>
<script>
    document.getElementById('myBtn').addEventListener('click', function() {
        alert('Button clicked!');
    });
</script>
```

**Error**: ________________________________________________

**Fix**: ________________________________________________

**Explanation**: ________________________________________________

---

## 🧩 Section D: Applied Knowledge (Bonus - 5 points)

### Question 11: Mini Project Analysis (5 points)

Look at this code for a simple to-do list application:

```html
<!DOCTYPE html>
<html>
<head>
    <title>To-Do List</title>
    <style>
        .completed { text-decoration: line-through; }
        .task { margin: 5px 0; }
    </style>
</head>
<body>
    <input type="text" id="taskInput" placeholder="Enter a task">
    <button onclick="addTask()">Add Task</button>
    <div id="taskList"></div>
    
    <script>
        function addTask() {
            const input = document.getElementById('taskInput');
            const taskText = input.value.trim();
            
            if (taskText === '') return;
            
            const taskDiv = document.createElement('div');
            taskDiv.className = 'task';
            taskDiv.innerHTML = `
                <span onclick="toggleComplete(this)">${taskText}</span>
                <button onclick="deleteTask(this)">Delete</button>
            `;
            
            document.getElementById('taskList').appendChild(taskDiv);
            input.value = '';
        }
        
        function toggleComplete(span) {
            span.classList.toggle('completed');
        }
        
        function deleteTask(button) {
            button.parentElement.remove();
        }
    </script>
</body>
</html>
```

**Answer the following:**

1. **Functionality (2 points)**: Describe what this application does in your own words.

2. **Code Analysis (2 points)**: Identify one potential improvement you could make to this code and explain why it would be beneficial.

3. **Feature Addition (1 point)**: Suggest one additional feature you could add to make this to-do list more useful.

---

## ✅ Answer Key & Scoring Guide

### Section A: Programming Fundamentals (15 points)

**Question 1 (3 points):**
- **Answer**: C - `const userName = "John Doe";`
- **Explanation (1 point)**: `const` is preferred when the value won't change. It's more explicit about intent than `let` or `var`, and avoids potential hoisting issues with `var`.

**Question 2 (4 points):**

**Part A (2 points):**
```javascript
function calculateRectangleArea(length, width) {
    return length * width;
}
```

**Part B (2 points):**
```
Output: 
Hello, Guest!
Hello, Sarah!

Explanation: The function uses a default parameter value of "Guest" when no argument is provided.
```

**Question 3 (4 points):**

**Part A (2 points):**
```javascript
function checkNumber(num) {
    if (num > 0) {
        return "Positive";
    } else if (num < 0) {
        return "Negative";
    } else {
        return "Zero";
    }
}
```

**Part B (2 points):**
```javascript
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
```

**Question 4 (4 points):**
```javascript
function calculator(num1, num2, operation) {
    switch(operation) {
        case "add":
            return num1 + num2;
        case "subtract":
            return num1 - num2;
        case "multiply":
            return num1 * num2;
        case "divide":
            if (num2 === 0) {
                return "Error: Division by zero";
            }
            return num1 / num2;
        default:
            return "Error: Invalid operation";
    }
}
```

### Section B: Web Development Basics (15 points)

**Question 5 (4 points):**

**Part A (2 points):** Answer B - Uses semantic HTML elements (`<article>`, `<h1>`)

**Part B (2 points):**
```html
<nav>
    <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="contact.html">Contact</a></li>
    </ul>
</nav>
```

**Question 6 (5 points):**

**Part A (2 points):** Margin creates space outside the element's border, while padding creates space inside the element between the content and border.

**Part B (3 points):**
```css
.button {
    background-color: #007cba;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
}

.button:hover {
    background-color: #005a8b;
}
```

**Question 7 (6 points):**

**Part A (3 points):**
```javascript
document.getElementById('changeText').addEventListener('click', function() {
    document.getElementById('message').textContent = 'Text changed!';
});
```

**Part B (3 points):**
```
Output order:
1. DOM loaded
3. Script continues  
2. Timeout executed

Explanation: The timeout is added to the event queue even with 0 delay, so it executes after the current script finishes.
```

### Section C: Development Tools (10 points)

**Question 8 (4 points):**

**Part A (2 points):** Correct order: `git init`, `git add .`, `git commit -m "Initial commit"`

**Part B (2 points):** `git add .` stages all changed files, while `git add filename.txt` stages only the specific file.

**Question 9 (3 points):**
- **Answer**: D - All of the above
- **Keyboard shortcut example**: `Ctrl+/` toggles line comments

**Question 10 (3 points):**
- **Error**: ID mismatch - HTML has `id="myButton"` but JavaScript looks for `'myBtn'`
- **Fix**: Change `'myBtn'` to `'myButton'` in the JavaScript
- **Explanation**: Element IDs must match exactly between HTML and JavaScript

### Section D: Applied Knowledge (5 points)

**Question 11 (5 points):**

1. **Functionality**: The application allows users to add tasks to a list, mark them as completed (with strikethrough), and delete them.

2. **Improvement**: Add input validation, use event delegation instead of inline onclick handlers, or add local storage to persist tasks.

3. **Feature**: Edit task functionality, due dates, priority levels, or categories.

---

## 📊 Grade Scale

- **A (90-100%)**: 36-40 points + bonus
- **B (80-89%)**: 32-35 points  
- **C (70-79%)**: 28-31 points
- **D (60-69%)**: 24-27 points
- **F (Below 60%)**: Below 24 points

---

**🎓 Good luck! Remember to double-check your answers and manage your time effectively.**