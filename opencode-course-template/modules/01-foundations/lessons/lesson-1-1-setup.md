# Lesson 1.1: Setting Up Your Development Environment

⏱️ **Duration**: 90 minutes  
🎯 **Objective**: Configure a professional development environment for programming  
📝 **Prerequisites**: Basic computer skills, internet connection

## 🎯 Learning Outcomes

By the end of this lesson, you will be able to:
- Install and configure VS Code with essential extensions
- Set up Git and create a GitHub account
- Navigate the terminal/command line effectively
- Create and organize your first programming project
- Understand the components of a development environment

## 📚 Theory: Development Environment Components

### What is a Development Environment?

A development environment is the collection of tools, software, and configurations that programmers use to write, test, and debug code. Think of it as your digital workshop - just like a carpenter needs the right tools to build furniture, programmers need the right tools to build software.

### Essential Components

1. **Code Editor/IDE**: Where you write your code
2. **Version Control**: How you track changes and collaborate
3. **Terminal/Command Line**: Interface for system operations
4. **Package Managers**: Tools for installing libraries and dependencies
5. **Debugging Tools**: Help you find and fix errors

## 🛠️ Hands-On Setup

### Step 1: Install VS Code (15 minutes)

**Visual Studio Code** is a free, powerful code editor that's perfect for beginners and professionals alike.

#### Download and Install
1. Go to [https://code.visualstudio.com/](https://code.visualstudio.com/)
2. Download the version for your operating system
3. Run the installer with default settings
4. Launch VS Code

#### Essential Extensions
Install these extensions to enhance your coding experience:

1. **Live Server** - Real-time web page preview
2. **Prettier** - Automatic code formatting
3. **Auto Rename Tag** - HTML/XML tag synchronization
4. **Bracket Pair Colorizer** - Visual bracket matching
5. **GitLens** - Enhanced Git integration

**How to install extensions:**
1. Open VS Code
2. Click the Extensions icon (square icon in sidebar) or press `Ctrl+Shift+X`
3. Search for each extension by name
4. Click "Install" for each one

### Step 2: Terminal/Command Line Setup (10 minutes)

#### On Windows:
- Use PowerShell (built-in) or install Windows Terminal from Microsoft Store
- Access via `Win+X` → "Windows PowerShell"

#### On macOS:
- Use Terminal (built-in)
- Access via `Cmd+Space` → type "Terminal"

#### On Linux:
- Use your distribution's terminal (usually `Ctrl+Alt+T`)

#### Basic Commands to Practice
```bash
# Navigate directories
cd Documents          # Change to Documents folder
cd ..                 # Go up one level
pwd                   # Show current directory
ls                    # List files (Linux/Mac)
dir                   # List files (Windows)

# Create directories and files
mkdir my-first-project # Create a new folder
touch index.html      # Create a file (Linux/Mac)
echo. > index.html    # Create a file (Windows)
```

### Step 3: Git Installation and Setup (20 minutes)

**Git** is the industry standard for version control - tracking changes in your code over time.

#### Install Git
- **Windows**: Download from [git-scm.com](https://git-scm.com)
- **macOS**: Install via Homebrew `brew install git` or download from git-scm.com
- **Linux**: Use your package manager, e.g., `sudo apt install git`

#### Configure Git
```bash
# Set your name and email (use your real information)
git config --global user.name "Your Full Name"
git config --global user.email "your.email@example.com"

# Verify configuration
git config --list
```

#### Create GitHub Account
1. Go to [github.com](https://github.com)
2. Sign up with the same email you used for Git
3. Choose a professional username (you'll use this for your portfolio)
4. Verify your email address

### Step 4: Create Your First Project (25 minutes)

Let's create a project structure that you'll use throughout the course.

#### Project Setup
```bash
# Create and navigate to your course directory
mkdir software-development-course
cd software-development-course

# Create module directories
mkdir module-1-foundations
mkdir module-2-intermediate
mkdir module-3-advanced
mkdir module-4-expert

# Navigate to first module
cd module-1-foundations

# Create your first project
mkdir lesson-1-setup
cd lesson-1-setup
```

#### Create Your First Files
```bash
# Create basic web files
touch index.html
touch style.css
touch script.js
touch README.md
```

#### Open in VS Code
```bash
# Open current directory in VS Code
code .
```

### Step 5: Your First "Hello World" Program (20 minutes)

#### Create index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First Web Page</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>Hello, World!</h1>
        <p>Welcome to my programming journey!</p>
        <button id="clickMe">Click Me!</button>
        <p id="message"></p>
    </div>
    <script src="script.js"></script>
</body>
</html>
```

#### Create style.css
```css
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    margin: 0;
    padding: 20px;
    background-color: #f4f4f4;
}

.container {
    max-width: 800px;
    margin: 0 auto;
    background: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
}

h1 {
    color: #333;
    text-align: center;
}

button {
    background-color: #007cba;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
}

button:hover {
    background-color: #005a8b;
}

#message {
    font-weight: bold;
    color: #007cba;
}
```

#### Create script.js
```javascript
// Your first JavaScript program!
document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('clickMe');
    const messageElement = document.getElementById('message');
    
    button.addEventListener('click', function() {
        const messages = [
            "Great job! You clicked the button!",
            "Welcome to programming!",
            "You're on your way to becoming a developer!",
            "Keep going, you're doing amazing!"
        ];
        
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        messageElement.textContent = randomMessage;
    });
});
```

#### Create README.md
```markdown
# Lesson 1.1: Development Environment Setup

## What I Learned Today
- How to set up VS Code with essential extensions
- Git installation and configuration
- Basic terminal/command line navigation
- Creating my first web project structure
- Writing my first HTML, CSS, and JavaScript files

## Project Description
This is my first "Hello World" web application that demonstrates:
- HTML structure and semantic elements
- CSS styling and responsive design principles
- JavaScript interactivity and DOM manipulation
- Proper file organization and project structure

## How to Run
1. Open `index.html` in a web browser
2. Or use VS Code Live Server extension for live preview
3. Click the button to see interactive JavaScript in action!

## Next Steps
- Learn more about HTML elements and structure
- Explore CSS layout techniques
- Practice JavaScript fundamentals
```

## 🧪 Testing Your Setup

### Test 1: Live Server
1. Right-click on `index.html` in VS Code
2. Select "Open with Live Server"
3. Your web page should open in the browser
4. Try clicking the button - it should display random messages

### Test 2: Git Integration
```bash
# Initialize git repository
git init

# Add files to staging
git add .

# Make your first commit
git commit -m "Initial setup: Hello World web application"

# Check status
git status
```

### Test 3: VS Code Features
- Use `Ctrl+Shift+P` (Command Palette) and search for "Format Document"
- Try the auto-complete features by typing HTML tags
- Use `Ctrl+/` to comment/uncomment lines

## 🎯 Practice Exercises

### Exercise 1: Personalization (15 minutes)
Modify your Hello World page to include:
- Your name in the title and heading
- A brief paragraph about why you want to learn programming
- Change the color scheme to your favorite colors
- Add your own custom message to the button click array

### Exercise 2: Terminal Practice (10 minutes)
Practice these terminal commands:
```bash
# Navigate around your system
cd ~                  # Go to home directory
cd Desktop           # Navigate to desktop
mkdir practice       # Create practice folder
cd practice          # Enter practice folder
echo "Hello Terminal" > greeting.txt  # Create file with content
cat greeting.txt     # Display file contents (Linux/Mac)
type greeting.txt    # Display file contents (Windows)
```

### Exercise 3: Extension Exploration (10 minutes)
Install and try these additional VS Code extensions:
- "Material Icon Theme" - Better file icons
- "indent-rainbow" - Colorful indentation guides
- "HTML CSS Support" - Enhanced CSS editing in HTML

## 🤔 Troubleshooting Common Issues

### VS Code Won't Open Files
- **Solution**: Make sure you're using `code .` from the correct directory
- **Alternative**: Use File → Open Folder in VS Code menu

### Git Commands Not Working
- **Windows**: Make sure Git was added to PATH during installation
- **Solution**: Restart terminal after Git installation
- **Check**: Run `git --version` to verify installation

### Live Server Not Working
- **Solution**: Make sure the Live Server extension is installed and enabled
- **Alternative**: Open `index.html` directly in your browser

### Terminal/Command Line Confusion
- **Windows Users**: Use PowerShell or Command Prompt
- **Path Issues**: Use quotes around paths with spaces: `cd "My Documents"`

## 📝 Reflection Questions

1. **What surprised you most about setting up a development environment?**
2. **Which tool do you think will be most helpful in your programming journey?**
3. **What challenges did you face, and how did you overcome them?**
4. **How does this setup compare to other software you've used before?**

## 🚀 Looking Ahead

In the next lesson, we'll dive into:
- **Programming concepts**: variables, data types, and operations
- **Problem-solving**: breaking down challenges into steps
- **Code organization**: writing clean, readable code
- **Interactive programming**: getting user input and providing feedback

## 📚 Additional Resources

### Documentation
- [VS Code User Guide](https://code.visualstudio.com/docs/editor/codebasics)
- [Git Handbook](https://guides.github.com/introduction/git-handbook/)
- [Command Line Tutorial](https://tutorial.djangogirls.org/en/intro_to_command_line/)

### Video Tutorials
- "VS Code Setup for Web Development" on YouTube
- "Git and GitHub for Beginners" course series
- "Terminal/Command Line Basics" tutorials

### Practice Sites
- [Learn Git Branching](https://learngitbranching.js.org/) - Interactive Git tutorial
- [Command Line Challenge](https://cmdchallenge.com/) - Terminal practice
- [VS Code Can Do That?](https://vscodecandothat.com/) - Advanced editor features

---

**🎉 Congratulations! You've successfully set up your development environment and created your first web application. You're now ready to start your programming journey!**

**⏭️ Next Lesson**: Introduction to Programming Concepts