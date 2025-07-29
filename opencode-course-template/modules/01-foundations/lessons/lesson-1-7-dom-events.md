# Lesson 1.7: JavaScript DOM Manipulation and Events

⏱️ **Duration**: 145 minutes  
🎯 **Objective**: Master DOM manipulation, event handling, and dynamic web interactions using JavaScript  
📝 **Prerequisites**: Lessons 1.4 (Functions), 1.5 (HTML), 1.6 (CSS)

## 🎯 Learning Outcomes

By the end of this lesson, you will be able to:
- Select and manipulate DOM elements using modern JavaScript methods
- Handle user events with event listeners and proper event management
- Create dynamic, interactive web applications
- Modify element content, attributes, and styles programmatically
- Build form validation and user input handling systems
- Apply SPARC methodology to interactive web development
- Debug JavaScript DOM interactions effectively
- Implement modern web interaction patterns

## 📚 Theory: DOM and Event-Driven Programming

### What is the DOM?

The DOM (Document Object Model) is a programming interface that represents HTML documents as a tree of objects. It allows JavaScript to:
- Access and modify HTML elements
- Change element content and attributes
- Add or remove elements dynamically
- Respond to user interactions
- Create rich, interactive web experiences

### Event-Driven Programming

Event-driven programming responds to user actions (clicks, key presses, form submissions) and system events (page load, timer completion). This programming model is essential for interactive web applications.

### SPARC Applied to DOM Programming

**Specification**: What user interactions are needed? What should happen when events occur?  
**Pseudocode**: Plan the event flow and DOM manipulations in plain language  
**Architecture**: Structure event handlers and DOM manipulation functions  
**Refinement**: Optimize performance and user experience  
**Completion**: Test interactions across browsers and devices

## 🔍 DOM Selection and Manipulation

### Modern DOM Selection Methods

```javascript
// Get elements by ID (returns single element)
const header = document.getElementById('main-header');
const userForm = document.getElementById('user-form');

// Query selectors (CSS-style selectors)
const firstButton = document.querySelector('.btn'); // First match
const allButtons = document.querySelectorAll('.btn'); // All matches
const specificButton = document.querySelector('button[type="submit"]');

// Get elements by class name
const cards = document.getElementsByClassName('card');

// Get elements by tag name
const paragraphs = document.getElementsByTagName('p');

// Advanced selectors
const activeNavItem = document.querySelector('nav .active');
const formInputs = document.querySelectorAll('form input, form textarea');
const dataAttributes = document.querySelectorAll('[data-category]');

// Working with NodeLists
allButtons.forEach(button => {
    console.log(button.textContent);
});

// Converting NodeList to Array (for more array methods)
const buttonsArray = Array.from(allButtons);
const buttonTexts = buttonsArray.map(btn => btn.textContent);
```

### Content Manipulation

```javascript
// Text content
const title = document.querySelector('h1');
console.log(title.textContent); // Gets text content
title.textContent = 'New Title'; // Sets text content

// HTML content
const container = document.querySelector('.content');
console.log(container.innerHTML); // Gets HTML content
container.innerHTML = '<p>New <strong>HTML</strong> content</p>';

// Safer HTML insertion (prevents XSS)
container.insertAdjacentHTML('beforeend', '<p>Safe HTML insertion</p>');

// Creating new elements
const newParagraph = document.createElement('p');
newParagraph.textContent = 'This is a new paragraph';
newParagraph.className = 'highlight';

// Appending elements
container.appendChild(newParagraph);
container.prepend(newParagraph); // Add to beginning
container.insertBefore(newParagraph, container.firstChild);

// Removing elements
const oldElement = document.querySelector('.old-content');
oldElement.remove(); // Modern way
// oldElement.parentNode.removeChild(oldElement); // Legacy way

// Cloning elements
const originalCard = document.querySelector('.card');
const clonedCard = originalCard.cloneNode(true); // true = deep clone
clonedCard.id = 'card-copy';
```

### Attribute and Property Manipulation

```javascript
const image = document.querySelector('img');
const input = document.querySelector('input[type="text"]');

// Attributes
console.log(image.getAttribute('src'));
image.setAttribute('src', 'new-image.jpg');
image.setAttribute('alt', 'New image description');
image.removeAttribute('title');

// Check if attribute exists
if (image.hasAttribute('data-lazy')) {
    // Handle lazy loading
}

// Properties (often different from attributes)
console.log(input.value); // Current value
input.value = 'New value';
console.log(input.defaultValue); // Original value from HTML

// Boolean attributes
const checkbox = document.querySelector('input[type="checkbox"]');
checkbox.checked = true;
checkbox.disabled = false;

// Data attributes
const element = document.querySelector('[data-user-id]');
console.log(element.dataset.userId); // Accesses data-user-id
element.dataset.userName = 'john_doe'; // Sets data-user-name

// Class manipulation
element.classList.add('active');
element.classList.remove('inactive');
element.classList.toggle('highlighted');
element.classList.contains('active'); // Returns boolean

// Multiple classes
element.classList.add('class1', 'class2', 'class3');
```

### Style Manipulation

```javascript
const box = document.querySelector('.box');

// Individual styles
box.style.backgroundColor = 'blue';
box.style.width = '200px';
box.style.height = '150px';
box.style.transform = 'rotate(45deg)';

// CSS properties with hyphens
box.style.borderRadius = '10px';
box.style.fontSize = '18px';

// Getting computed styles
const computedStyles = window.getComputedStyle(box);
console.log(computedStyles.width); // Actual computed width
console.log(computedStyles.backgroundColor);

// CSS custom properties (variables)
document.documentElement.style.setProperty('--primary-color', '#3498db');
const primaryColor = computedStyles.getPropertyValue('--primary-color');

// Multiple style changes efficiently
Object.assign(box.style, {
    width: '300px',
    height: '200px',
    backgroundColor: 'red',
    border: '2px solid black'
});
```

## 🎯 Event Handling

### Event Listeners

```javascript
// Basic event listener
const button = document.querySelector('#submit-btn');

button.addEventListener('click', function(event) {
    console.log('Button clicked!');
    console.log('Event:', event);
    console.log('Target:', event.target);
});

// Arrow function event handler
button.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default behavior
    console.log('Button clicked with arrow function!');
});

// Named function for reusability
function handleButtonClick(event) {
    console.log('Reusable click handler');
    // Handle the click
}

button.addEventListener('click', handleButtonClick);

// Remove event listener
button.removeEventListener('click', handleButtonClick);

// Event listener options
button.addEventListener('click', handleClick, {
    once: true,      // Run only once
    passive: true,   // Never calls preventDefault()
    capture: true    // Run during capture phase
});
```

### Common Event Types

```javascript
// Mouse events
element.addEventListener('click', handleClick);
element.addEventListener('dblclick', handleDoubleClick);
element.addEventListener('mousedown', handleMouseDown);
element.addEventListener('mouseup', handleMouseUp);
element.addEventListener('mouseover', handleMouseOver);
element.addEventListener('mouseout', handleMouseOut);
element.addEventListener('mousemove', handleMouseMove);

// Keyboard events
document.addEventListener('keydown', function(event) {
    console.log('Key pressed:', event.key);
    console.log('Key code:', event.keyCode);
    console.log('Ctrl key:', event.ctrlKey);
    console.log('Shift key:', event.shiftKey);
    
    // Handle specific keys
    if (event.key === 'Enter') {
        console.log('Enter key pressed');
    }
    
    if (event.key === 'Escape') {
        console.log('Escape key pressed');
    }
    
    // Key combinations
    if (event.ctrlKey && event.key === 's') {
        event.preventDefault();
        console.log('Ctrl+S pressed - Save shortcut');
    }
});

// Form events
const form = document.querySelector('form');
const input = document.querySelector('input');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    console.log('Form submitted');
    // Handle form data
});

input.addEventListener('focus', function() {
    console.log('Input focused');
    this.classList.add('focused');
});

input.addEventListener('blur', function() {
    console.log('Input lost focus');
    this.classList.remove('focused');
});

input.addEventListener('input', function(event) {
    console.log('Input value changed:', event.target.value);
});

input.addEventListener('change', function(event) {
    console.log('Input change event:', event.target.value);
});

// Window events
window.addEventListener('load', function() {
    console.log('Page fully loaded');
});

window.addEventListener('resize', function() {
    console.log('Window resized:', window.innerWidth, window.innerHeight);
});

window.addEventListener('scroll', function() {
    console.log('Page scrolled:', window.scrollY);
});

// Document events
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM content loaded');
    // Initialize your app here
});
```

### Event Object and Delegation

```javascript
// Event object properties
function handleEvent(event) {
    console.log('Event type:', event.type);
    console.log('Target element:', event.target);
    console.log('Current target:', event.currentTarget);
    console.log('Mouse position:', event.clientX, event.clientY);
    console.log('Timestamp:', event.timeStamp);
    
    // Prevent default behavior
    event.preventDefault();
    
    // Stop event propagation
    event.stopPropagation();
}

// Event delegation (handling events on parent elements)
const listContainer = document.querySelector('#todo-list');

listContainer.addEventListener('click', function(event) {
    // Check if clicked element is a delete button
    if (event.target.classList.contains('delete-btn')) {
        const todoItem = event.target.closest('.todo-item');
        todoItem.remove();
    }
    
    // Check if clicked element is a checkbox
    if (event.target.type === 'checkbox') {
        const todoItem = event.target.closest('.todo-item');
        todoItem.classList.toggle('completed');
    }
    
    // Check if clicked element is an edit button
    if (event.target.classList.contains('edit-btn')) {
        const todoText = event.target.parentElement.querySelector('.todo-text');
        const currentText = todoText.textContent;
        const newText = prompt('Edit todo:', currentText);
        if (newText) {
            todoText.textContent = newText;
        }
    }
});
```

## 🛠️ Complete Interactive Application Examples

### Example 1: Dynamic Todo List Application

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Interactive Todo List</title>
    <style>
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }
        
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #f5f7fa;
            padding: 2rem;
        }
        
        .container {
            max-width: 600px;
            margin: 0 auto;
            background: white;
            padding: 2rem;
            border-radius: 10px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        
        h1 {
            text-align: center;
            color: #2c3e50;
            margin-bottom: 2rem;
        }
        
        .todo-form {
            display: flex;
            gap: 1rem;
            margin-bottom: 2rem;
        }
        
        .todo-input {
            flex: 1;
            padding: 1rem;
            border: 2px solid #e9ecef;
            border-radius: 5px;
            font-size: 1rem;
        }
        
        .todo-input:focus {
            outline: none;
            border-color: #3498db;
        }
        
        .add-btn {
            padding: 1rem 2rem;
            background: #3498db;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-weight: bold;
        }
        
        .add-btn:hover {
            background: #2980b9;
        }
        
        .todo-filters {
            display: flex;
            gap: 1rem;
            margin-bottom: 2rem;
            justify-content: center;
        }
        
        .filter-btn {
            padding: 0.5rem 1rem;
            border: 2px solid #e9ecef;
            background: white;
            border-radius: 5px;
            cursor: pointer;
        }
        
        .filter-btn.active {
            background: #3498db;
            color: white;
            border-color: #3498db;
        }
        
        .todo-list {
            min-height: 200px;
        }
        
        .todo-item {
            display: flex;
            align-items: center;
            gap: 1rem;
            padding: 1rem;
            border: 1px solid #e9ecef;
            border-radius: 5px;
            margin-bottom: 0.5rem;
            background: white;
            transition: all 0.3s ease;
        }
        
        .todo-item:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        
        .todo-item.completed {
            opacity: 0.6;
            text-decoration: line-through;
        }
        
        .todo-checkbox {
            width: 20px;
            height: 20px;
        }
        
        .todo-text {
            flex: 1;
            font-size: 1rem;
        }
        
        .todo-actions {
            display: flex;
            gap: 0.5rem;
        }
        
        .edit-btn, .delete-btn {
            padding: 0.5rem;
            border: none;
            border-radius: 3px;
            cursor: pointer;
            font-size: 0.8rem;
        }
        
        .edit-btn {
            background: #f39c12;
            color: white;
        }
        
        .delete-btn {
            background: #e74c3c;
            color: white;
        }
        
        .todo-stats {
            text-align: center;
            margin-top: 2rem;
            color: #7f8c8d;
        }
        
        .empty-state {
            text-align: center;
            color: #7f8c8d;
            font-style: italic;
            padding: 2rem;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>📝 Interactive Todo List</h1>
        
        <form class="todo-form" id="todo-form">
            <input type="text" class="todo-input" id="todo-input" placeholder="Add a new todo..." required>
            <button type="submit" class="add-btn">Add Todo</button>
        </form>
        
        <div class="todo-filters">
            <button class="filter-btn active" data-filter="all">All</button>
            <button class="filter-btn" data-filter="active">Active</button>
            <button class="filter-btn" data-filter="completed">Completed</button>
        </div>
        
        <div class="todo-list" id="todo-list">
            <div class="empty-state" id="empty-state">
                No todos yet. Add one above! ⬆️
            </div>
        </div>
        
        <div class="todo-stats" id="todo-stats">
            <span id="total-count">0</span> total, 
            <span id="active-count">0</span> active, 
            <span id="completed-count">0</span> completed
        </div>
    </div>

    <script>
        class TodoApp {
            constructor() {
                this.todos = JSON.parse(localStorage.getItem('todos')) || [];
                this.currentFilter = 'all';
                this.init();
            }
            
            init() {
                this.bindEvents();
                this.render();
            }
            
            bindEvents() {
                // Form submission
                document.getElementById('todo-form').addEventListener('submit', (e) => {
                    e.preventDefault();
                    this.addTodo();
                });
                
                // Filter buttons
                document.querySelectorAll('.filter-btn').forEach(btn => {
                    btn.addEventListener('click', (e) => {
                        this.setFilter(e.target.dataset.filter);
                    });
                });
                
                // Todo list delegation
                document.getElementById('todo-list').addEventListener('click', (e) => {
                    const todoItem = e.target.closest('.todo-item');
                    if (!todoItem) return;
                    
                    const todoId = parseInt(todoItem.dataset.id);
                    
                    if (e.target.classList.contains('delete-btn')) {
                        this.deleteTodo(todoId);
                    } else if (e.target.classList.contains('edit-btn')) {
                        this.editTodo(todoId);
                    } else if (e.target.type === 'checkbox') {
                        this.toggleTodo(todoId);
                    }
                });
                
                // Keyboard shortcuts
                document.addEventListener('keydown', (e) => {
                    if (e.ctrlKey && e.key === 'a') {
                        e.preventDefault();
                        document.getElementById('todo-input').focus();
                    }
                });
            }
            
            addTodo() {
                const input = document.getElementById('todo-input');
                const text = input.value.trim();
                
                if (!text) return;
                
                const todo = {
                    id: Date.now(),
                    text: text,
                    completed: false,
                    createdAt: new Date().toISOString()
                };
                
                this.todos.push(todo);
                input.value = '';
                this.saveTodos();
                this.render();
                
                // Add animation
                setTimeout(() => {
                    const newTodoElement = document.querySelector(`[data-id="${todo.id}"]`);
                    if (newTodoElement) {
                        newTodoElement.style.transform = 'scale(1.05)';
                        setTimeout(() => {
                            newTodoElement.style.transform = '';
                        }, 200);
                    }
                }, 50);
            }
            
            deleteTodo(id) {
                const todoElement = document.querySelector(`[data-id="${id}"]`);
                
                // Add fade out animation
                todoElement.style.transform = 'translateX(-100%)';
                todoElement.style.opacity = '0';
                
                setTimeout(() => {
                    this.todos = this.todos.filter(todo => todo.id !== id);
                    this.saveTodos();
                    this.render();
                }, 300);
            }
            
            editTodo(id) {
                const todo = this.todos.find(t => t.id === id);
                if (!todo) return;
                
                const newText = prompt('Edit todo:', todo.text);
                if (newText && newText.trim()) {
                    todo.text = newText.trim();
                    this.saveTodos();
                    this.render();
                }
            }
            
            toggleTodo(id) {
                const todo = this.todos.find(t => t.id === id);
                if (todo) {
                    todo.completed = !todo.completed;
                    this.saveTodos();
                    this.render();
                }
            }
            
            setFilter(filter) {
                this.currentFilter = filter;
                
                // Update active filter button
                document.querySelectorAll('.filter-btn').forEach(btn => {
                    btn.classList.toggle('active', btn.dataset.filter === filter);
                });
                
                this.render();
            }
            
            getFilteredTodos() {
                switch (this.currentFilter) {
                    case 'active':
                        return this.todos.filter(todo => !todo.completed);
                    case 'completed':
                        return this.todos.filter(todo => todo.completed);
                    default:
                        return this.todos;
                }
            }
            
            render() {
                const todoList = document.getElementById('todo-list');
                const emptyState = document.getElementById('empty-state');
                const filteredTodos = this.getFilteredTodos();
                
                // Clear current todos
                todoList.innerHTML = '';
                
                if (filteredTodos.length === 0) {
                    const message = this.todos.length === 0 
                        ? 'No todos yet. Add one above! ⬆️'
                        : `No ${this.currentFilter} todos.`;
                    
                    todoList.innerHTML = `<div class="empty-state">${message}</div>`;
                } else {
                    filteredTodos.forEach(todo => {
                        const todoElement = this.createTodoElement(todo);
                        todoList.appendChild(todoElement);
                    });
                }
                
                this.updateStats();
            }
            
            createTodoElement(todo) {
                const div = document.createElement('div');
                div.className = `todo-item ${todo.completed ? 'completed' : ''}`;
                div.dataset.id = todo.id;
                
                div.innerHTML = `
                    <input type="checkbox" class="todo-checkbox" ${todo.completed ? 'checked' : ''}>
                    <span class="todo-text">${this.escapeHtml(todo.text)}</span>
                    <div class="todo-actions">
                        <button class="edit-btn">Edit</button>
                        <button class="delete-btn">Delete</button>
                    </div>
                `;
                
                return div;
            }
            
            updateStats() {
                const total = this.todos.length;
                const completed = this.todos.filter(t => t.completed).length;
                const active = total - completed;
                
                document.getElementById('total-count').textContent = total;
                document.getElementById('active-count').textContent = active;
                document.getElementById('completed-count').textContent = completed;
            }
            
            saveTodos() {
                localStorage.setItem('todos', JSON.stringify(this.todos));
            }
            
            escapeHtml(text) {
                const div = document.createElement('div');
                div.textContent = text;
                return div.innerHTML;
            }
        }
        
        // Initialize the app when DOM is loaded
        document.addEventListener('DOMContentLoaded', () => {
            const app = new TodoApp();
        });
    </script>
</body>
</html>
```

### Example 2: Interactive Image Gallery

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Interactive Image Gallery</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: Arial, sans-serif;
            background-color: #f0f0f0;
        }
        
        .gallery-container {
            max-width: 1200px;
            margin: 2rem auto;
            padding: 0 1rem;
        }
        
        h1 {
            text-align: center;
            margin-bottom: 2rem;
            color: #333;
        }
        
        .gallery-filters {
            display: flex;
            justify-content: center;
            gap: 1rem;
            margin-bottom: 2rem;
            flex-wrap: wrap;
        }
        
        .filter-btn {
            padding: 0.5rem 1rem;
            border: 2px solid #007cba;
            background: white;
            color: #007cba;
            border-radius: 25px;
            cursor: pointer;
            transition: all 0.3s ease;
        }
        
        .filter-btn.active,
        .filter-btn:hover {
            background: #007cba;
            color: white;
        }
        
        .gallery-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 1rem;
            margin-bottom: 2rem;
        }
        
        .gallery-item {
            position: relative;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
            transition: all 0.3s ease;
            cursor: pointer;
        }
        
        .gallery-item:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 25px rgba(0,0,0,0.2);
        }
        
        .gallery-item img {
            width: 100%;
            height: 200px;
            object-fit: cover;
            display: block;
        }
        
        .gallery-item-overlay {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            background: linear-gradient(transparent, rgba(0,0,0,0.8));
            color: white;
            padding: 1rem;
            transform: translateY(100%);
            transition: transform 0.3s ease;
        }
        
        .gallery-item:hover .gallery-item-overlay {
            transform: translateY(0);
        }
        
        .gallery-item-title {
            font-weight: bold;
            margin-bottom: 0.5rem;
        }
        
        .gallery-item-description {
            font-size: 0.9rem;
            opacity: 0.9;
        }
        
        /* Modal styles */
        .modal {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.9);
            z-index: 1000;
            justify-content: center;
            align-items: center;
        }
        
        .modal.active {
            display: flex;
        }
        
        .modal-content {
            position: relative;
            max-width: 90%;
            max-height: 90%;
        }
        
        .modal-image {
            width: 100%;
            height: auto;
            max-height: 80vh;
            object-fit: contain;
        }
        
        .modal-info {
            background: white;
            padding: 1rem;
            text-align: center;
        }
        
        .modal-close {
            position: absolute;
            top: 1rem;
            right: 1rem;
            background: rgba(255,255,255,0.2);
            color: white;
            border: none;
            font-size: 2rem;
            cursor: pointer;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .modal-nav {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            background: rgba(255,255,255,0.2);
            color: white;
            border: none;
            font-size: 2rem;
            cursor: pointer;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .modal-prev {
            left: 1rem;
        }
        
        .modal-next {
            right: 1rem;
        }
        
        .search-container {
            display: flex;
            justify-content: center;
            margin-bottom: 2rem;
        }
        
        .search-input {
            padding: 0.75rem;
            border: 2px solid #ddd;
            border-radius: 25px;
            width: 300px;
            font-size: 1rem;
        }
        
        .search-input:focus {
            outline: none;
            border-color: #007cba;
        }
        
        @media (max-width: 768px) {
            .gallery-grid {
                grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
            }
            
            .gallery-filters {
                justify-content: center;
            }
            
            .search-input {
                width: 100%;
                max-width: 300px;
            }
        }
    </style>
</head>
<body>
    <div class="gallery-container">
        <h1>🖼️ Interactive Image Gallery</h1>
        
        <div class="search-container">
            <input type="text" class="search-input" id="search-input" placeholder="Search images...">
        </div>
        
        <div class="gallery-filters" id="gallery-filters">
            <button class="filter-btn active" data-category="all">All</button>
        </div>
        
        <div class="gallery-grid" id="gallery-grid">
            <!-- Images will be populated by JavaScript -->
        </div>
    </div>
    
    <!-- Modal -->
    <div class="modal" id="modal">
        <div class="modal-content">
            <button class="modal-close" id="modal-close">&times;</button>
            <button class="modal-nav modal-prev" id="modal-prev">‹</button>
            <button class="modal-nav modal-next" id="modal-next">›</button>
            <img class="modal-image" id="modal-image" src="" alt="">
            <div class="modal-info">
                <h3 id="modal-title"></h3>
                <p id="modal-description"></p>
            </div>
        </div>
    </div>

    <script>
        class ImageGallery {
            constructor() {
                this.images = [
                    { id: 1, src: 'https://picsum.photos/400/300?random=1', title: 'Mountain Landscape', description: 'Beautiful mountain scenery', category: 'nature' },
                    { id: 2, src: 'https://picsum.photos/400/300?random=2', title: 'City Skyline', description: 'Urban architecture at night', category: 'city' },
                    { id: 3, src: 'https://picsum.photos/400/300?random=3', title: 'Ocean View', description: 'Peaceful ocean waves', category: 'nature' },
                    { id: 4, src: https://picsum.photos/400/300?random=4', title: 'Forest Path', description: 'Walking trail through trees', category: 'nature' },
                    { id: 5, src: 'https://picsum.photos/400/300?random=5', title: 'Modern Building', description: 'Contemporary architecture', category: 'city' },
                    { id: 6, src: 'https://picsum.photos/400/300?random=6', title: 'Abstract Art', description: 'Colorful abstract composition', category: 'art' },
                    { id: 7, src: 'https://picsum.photos/400/300?random=7', title: 'Vintage Camera', description: 'Classic photography equipment', category: 'vintage' },
                    { id: 8, src: 'https://picsum.photos/400/300?random=8', title: 'Sunset Beach', description: 'Golden hour at the beach', category: 'nature' },
                ];
                
                this.filteredImages = [...this.images];
                this.currentFilter = 'all';
                this.currentImageIndex = 0;
                this.searchTerm = '';
                
                this.init();
            }
            
            init() {
                this.createFilterButtons();
                this.bindEvents();
                this.renderGallery();
            }
            
            createFilterButtons() {
                const categories = [...new Set(this.images.map(img => img.category))];
                const filtersContainer = document.getElementById('gallery-filters');
                
                // Keep "All" button and add category buttons
                categories.forEach(category => {
                    if (!document.querySelector(`[data-category="${category}"]`)) {
                        const button = document.createElement('button');
                        button.className = 'filter-btn';
                        button.dataset.category = category;
                        button.textContent = category.charAt(0).toUpperCase() + category.slice(1);
                        filtersContainer.appendChild(button);
                    }
                });
            }
            
            bindEvents() {
                // Filter buttons
                document.getElementById('gallery-filters').addEventListener('click', (e) => {
                    if (e.target.classList.contains('filter-btn')) {
                        this.setFilter(e.target.dataset.category);
                    }
                });
                
                // Search input
                const searchInput = document.getElementById('search-input');
                searchInput.addEventListener('input', (e) => {
                    this.searchTerm = e.target.value.toLowerCase();
                    this.applyFilters();
                });
                
                // Gallery items
                document.getElementById('gallery-grid').addEventListener('click', (e) => {
                    const galleryItem = e.target.closest('.gallery-item');
                    if (galleryItem) {
                        const imageId = parseInt(galleryItem.dataset.id);
                        this.openModal(imageId);
                    }
                });
                
                // Modal controls
                document.getElementById('modal-close').addEventListener('click', () => {
                    this.closeModal();
                });
                
                document.getElementById('modal-prev').addEventListener('click', (e) => {
                    e.stopPropagation();
                    this.showPrevImage();
                });
                
                document.getElementById('modal-next').addEventListener('click', (e) => {
                    e.stopPropagation();
                    this.showNextImage();
                });
                
                // Modal background click
                document.getElementById('modal').addEventListener('click', (e) => {
                    if (e.target.id === 'modal') {
                        this.closeModal();
                    }
                });
                
                // Keyboard navigation
                document.addEventListener('keydown', (e) => {
                    const modal = document.getElementById('modal');
                    if (modal.classList.contains('active')) {
                        switch(e.key) {
                            case 'Escape':
                                this.closeModal();
                                break;
                            case 'ArrowLeft':
                                this.showPrevImage();
                                break;
                            case 'ArrowRight':
                                this.showNextImage();
                                break;
                        }
                    }
                });
            }
            
            setFilter(category) {
                this.currentFilter = category;
                
                // Update active filter button
                document.querySelectorAll('.filter-btn').forEach(btn => {
                    btn.classList.toggle('active', btn.dataset.category === category);
                });
                
                this.applyFilters();
            }
            
            applyFilters() {
                let filtered = this.images;
                
                // Apply category filter
                if (this.currentFilter !== 'all') {
                    filtered = filtered.filter(img => img.category === this.currentFilter);
                }
                
                // Apply search filter
                if (this.searchTerm) {
                    filtered = filtered.filter(img => 
                        img.title.toLowerCase().includes(this.searchTerm) ||
                        img.description.toLowerCase().includes(this.searchTerm) ||
                        img.category.toLowerCase().includes(this.searchTerm)
                    );
                }
                
                this.filteredImages = filtered;
                this.renderGallery();
            }
            
            renderGallery() {
                const grid = document.getElementById('gallery-grid');
                grid.innerHTML = '';
                
                if (this.filteredImages.length === 0) {
                    grid.innerHTML = '<p style="text-align: center; color: #666; grid-column: 1/-1;">No images found matching your criteria.</p>';
                    return;
                }
                
                this.filteredImages.forEach((image, index) => {
                    const item = document.createElement('div');
                    item.className = 'gallery-item';
                    item.dataset.id = image.id;
                    item.dataset.index = index;
                    
                    item.innerHTML = `
                        <img src="${image.src}" alt="${image.title}" loading="lazy">
                        <div class="gallery-item-overlay">
                            <div class="gallery-item-title">${image.title}</div>
                            <div class="gallery-item-description">${image.description}</div>
                        </div>
                    `;
                    
                    // Add entrance animation
                    item.style.opacity = '0';
                    item.style.transform = 'translateY(20px)';
                    
                    grid.appendChild(item);
                    
                    // Trigger animation
                    setTimeout(() => {
                        item.style.transition = 'all 0.3s ease';
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                    }, index * 50);
                });
            }
            
            openModal(imageId) {
                const image = this.filteredImages.find(img => img.id === imageId);
                if (!image) return;
                
                this.currentImageIndex = this.filteredImages.findIndex(img => img.id === imageId);
                
                document.getElementById('modal-image').src = image.src;
                document.getElementById('modal-title').textContent = image.title;
                document.getElementById('modal-description').textContent = image.description;
                
                const modal = document.getElementById('modal');
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
            
            closeModal() {
                const modal = document.getElementById('modal');
                modal.classList.remove('active');
                document.body.style.overflow = '';
            }
            
            showPrevImage() {
                this.currentImageIndex = (this.currentImageIndex - 1 + this.filteredImages.length) % this.filteredImages.length;
                this.updateModalContent();
            }
            
            showNextImage() {
                this.currentImageIndex = (this.currentImageIndex + 1) % this.filteredImages.length;
                this.updateModalContent();
            }
            
            updateModalContent() {
                const image = this.filteredImages[this.currentImageIndex];
                const modalImage = document.getElementById('modal-image');
                
                // Add fade effect
                modalImage.style.opacity = '0';
                
                setTimeout(() => {
                    modalImage.src = image.src;
                    document.getElementById('modal-title').textContent = image.title;
                    document.getElementById('modal-description').textContent = image.description;
                    modalImage.style.opacity = '1';
                }, 150);
            }
        }
        
        // Initialize gallery when DOM is loaded
        document.addEventListener('DOMContentLoaded', () => {
            const gallery = new ImageGallery();
        });
    </script>
</body>
</html>
```

## 🐛 Common DOM/Event Mistakes

### 1. Not Waiting for DOM to Load
```javascript
// Wrong - DOM might not be ready
const button = document.querySelector('#my-button'); // null
button.addEventListener('click', handleClick); // Error!

// Right - Wait for DOM
document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('#my-button');
    button.addEventListener('click', handleClick);
});
```

### 2. Memory Leaks with Event Listeners
```javascript
// Wrong - creates memory leaks
function addEventListeners() {
    document.querySelector('#button').addEventListener('click', function() {
        console.log('Clicked');
    });
}

// Right - clean up when needed
function addEventListeners() {
    const button = document.querySelector('#button');
    const handler = function() { console.log('Clicked'); };
    
    button.addEventListener('click', handler);
    
    // Clean up when component is destroyed
    return function cleanup() {
        button.removeEventListener('click', handler);
    };
}
```

### 3. Event Delegation Mistakes
```javascript
// Wrong - adding individual listeners to many elements
document.querySelectorAll('.delete-btn').forEach(btn => {
    btn.addEventListener('click', deleteItem);
});

// Right - use event delegation
document.querySelector('#item-list').addEventListener('click', function(e) {
    if (e.target.classList.contains('delete-btn')) {
        deleteItem(e);
    }
});
```

## 📝 Assessment Questions

### Quick Knowledge Check
1. What's the difference between `textContent` and `innerHTML`?
2. How do you prevent the default behavior of an event?
3. What is event delegation and when should you use it?
4. How do you create new DOM elements dynamically?
5. What's the difference between `addEventListener` and `onclick`?

### Problem-Solving Challenges
1. **Form Validation**: Create comprehensive client-side form validation
2. **Dynamic Content**: Build a comment system with add/edit/delete functionality
3. **Accessibility**: Ensure all interactions work with keyboard navigation

## 🚀 Challenge Project: Interactive Dashboard

Create a complete dashboard with multiple interactive components:

### Requirements:
1. Dynamic data visualization (charts/graphs)
2. Real-time updates and notifications
3. Drag and drop functionality
4. Filter and search capabilities
5. User preferences and settings
6. Responsive design and accessibility
7. Local storage for persistence

## 📚 Additional Resources

### Documentation
- [MDN DOM Reference](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)
- [MDN Event Reference](https://developer.mozilla.org/en-US/docs/Web/Events)
- [JavaScript.info DOM](https://javascript.info/document)

### Tools
- [DOM Inspector](https://developer.mozilla.org/en-US/docs/Tools/Inspector)
- [Event Listener Inspector](https://developers.google.com/web/tools/chrome-devtools/javascript/breakpoints#event-listeners)

---

**🎉 Outstanding work! You now have powerful DOM manipulation and event handling skills. You can create rich, interactive web applications that respond to user input and provide dynamic experiences!**

**⏭️ Next Lesson**: Git Version Control and Collaboration