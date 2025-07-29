/**
 * Your First Web Page - Guided Project Demonstration
 * Step-by-step tutorial for building a complete web page from scratch
 */

class WebProjectDemo extends BaseDemo {
    constructor(container) {
        super(container);
        this.projectFiles = {
            'index.html': '',
            'style.css': '',
            'script.js': ''
        };
        this.currentFile = 'index.html';
    }
    
    getTitle() {
        return 'Your First Web Page';
    }
    
    getDemoType() {
        return 'web-project';
    }
    
    setupSteps() {
        this.steps = [
            {
                id: 'project-planning',
                title: 'Project Planning',
                description: 'Plan your personal portfolio website with wireframes and content strategy.',
                content: this.generateProjectPlanningContent(),
                interactive: this.generateProjectPlanningInteractive()
            },
            {
                id: 'html-structure',
                title: 'Building HTML Structure',
                description: 'Create the HTML foundation with semantic elements and proper structure.',
                content: this.generateHtmlStructureContent(),
                interactive: this.generateHtmlStructureInteractive(),
                exercise: {
                    description: 'Build the complete HTML structure for your portfolio.',
                    content: this.generateHtmlStructureExercise(),
                    solution: `<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>My Portfolio</title>\n    <link rel="stylesheet" href="style.css">\n</head>\n<body>\n    <header>\n        <nav>\n            <h1>Your Name</h1>\n            <ul>\n                <li><a href="#about">About</a></li>\n                <li><a href="#projects">Projects</a></li>\n                <li><a href="#contact">Contact</a></li>\n            </ul>\n        </nav>\n    </header>\n    <main>\n        <section id="hero">\n            <h2>Welcome to My Portfolio</h2>\n            <p>I'm a web developer passionate about creating amazing experiences.</p>\n        </section>\n        <section id="about">\n            <h2>About Me</h2>\n            <p>Your bio here...</p>\n        </section>\n        <section id="projects">\n            <h2>My Projects</h2>\n            <!-- Projects will go here -->\n        </section>\n        <section id="contact">\n            <h2>Contact Me</h2>\n            <!-- Contact form here -->\n        </section>\n    </main>\n    <footer>\n        <p>&copy; 2024 Your Name. All rights reserved.</p>\n    </footer>\n    <script src="script.js"></script>\n</body>\n</html>`
                }
            },
            {
                id: 'css-styling',
                title: 'Adding CSS Styles',
                description: 'Style your web page with colors, fonts, layout, and responsive design.',
                content: this.generateCssStylingContent(),
                interactive: this.generateCssStylingInteractive()
            },
            {
                id: 'javascript-interactivity',
                title: 'Adding JavaScript',
                description: 'Make your page interactive with JavaScript functionality.',
                content: this.generateJavaScriptContent(),
                interactive: this.generateJavaScriptInteractive()
            },
            {
                id: 'responsive-mobile',
                title: 'Mobile Responsive Design',
                description: 'Ensure your website looks great on all devices.',
                content: this.generateResponsiveContent(),
                interactive: this.generateResponsiveInteractive()
            },
            {
                id: 'testing-deployment',
                title: 'Testing and Deployment',
                description: 'Test your website and learn how to deploy it online.',
                content: this.generateTestingDeploymentContent(),
                interactive: this.generateTestingDeploymentInteractive()
            }
        ];
    }
    
    generateProjectPlanningContent() {
        return `
            <div class="project-planning">
                <h4>📝 Planning Your Portfolio Website</h4>
                
                <div class="planning-steps">
                    <div class="planning-step">
                        <h5>1. Define Your Goals</h5>
                        <ul>
                            <li>Showcase your skills and projects</li>
                            <li>Provide contact information</li>
                            <li>Tell your story as a developer</li>
                            <li>Demonstrate your coding abilities</li>
                        </ul>
                    </div>
                    
                    <div class="planning-step">
                        <h5>2. Content Strategy</h5>
                        <div class="content-sections">
                            <div class="section">
                                <strong>Header/Navigation</strong>
                                <p>Logo, menu items (About, Projects, Contact)</p>
                            </div>
                            <div class="section">
                                <strong>Hero Section</strong>
                                <p>Eye-catching introduction with your name and title</p>
                            </div>
                            <div class="section">
                                <strong>About Section</strong>
                                <p>Your background, skills, and interests</p>
                            </div>
                            <div class="section">
                                <strong>Projects Section</strong>
                                <p>Showcase of your best work with descriptions</p>
                            </div>
                            <div class="section">
                                <strong>Contact Section</strong>
                                <p>Ways to reach you (email, social media)</p>
                            </div>
                            <div class="section">
                                <strong>Footer</strong>
                                <p>Copyright and additional links</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="planning-step">
                        <h5>3. Design Principles</h5>
                        <div class="design-principles">
                            <div class="principle">
                                <strong>🎨 Visual Hierarchy</strong>
                                <p>Most important content should be most prominent</p>
                            </div>
                            <div class="principle">
                                <strong>📱 Mobile-First</strong>
                                <p>Design for mobile devices first, then desktop</p>
                            </div>
                            <div class="principle">
                                <strong>⚡ Fast Loading</strong>
                                <p>Optimize images and minimize file sizes</p>
                            </div>
                            <div class="principle">
                                <strong>♿ Accessibility</strong>
                                <p>Ensure your site is usable by everyone</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
    
    generateProjectPlanningInteractive() {
        return `
            <div class="wireframe-builder">
                <h5>Interactive Wireframe Builder</h5>
                
                <div class="wireframe-tools">
                    <h6>Drag Elements to Build Your Layout:</h6>
                    <div class="element-palette">
                        <div class="wireframe-element" draggable="true" data-type="header">Header</div>
                        <div class="wireframe-element" draggable="true" data-type="nav">Navigation</div>
                        <div class="wireframe-element" draggable="true" data-type="hero">Hero Section</div>
                        <div class="wireframe-element" draggable="true" data-type="content">Content Block</div>
                        <div class="wireframe-element" draggable="true" data-type="sidebar">Sidebar</div>
                        <div class="wireframe-element" draggable="true" data-type="footer">Footer</div>
                    </div>
                </div>
                
                <div class="wireframe-canvas" id="wireframeCanvas" ondrop="WebProjectDemo.drop(event)" ondragover="WebProjectDemo.allowDrop(event)">
                    <div class="canvas-instruction">Drop wireframe elements here to design your layout</div>
                </div>
                
                <div class="wireframe-actions">
                    <button onclick="WebProjectDemo.clearWireframe()" class="clear-btn">Clear Canvas</button>
                    <button onclick="WebProjectDemo.generateCode()" class="generate-code-btn">Generate HTML Structure</button>
                </div>
                
                <div class="generated-html" id="generatedHtml" style="display: none;">
                    <h6>Generated HTML Structure:</h6>
                    <pre><code id="htmlStructure"></code></pre>
                </div>
            </div>
        `;
    }
    
    generateHtmlStructureContent() {
        return `
            <div class="html-structure-guide">
                <h4>🏗️ Building Your HTML Foundation</h4>
                
                <div class="html-sections">
                    <div class="html-section">
                        <h5>Document Setup</h5>
                        <pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;Your Name - Portfolio&lt;/title&gt;
    &lt;link rel="stylesheet" href="style.css"&gt;
&lt;/head&gt;</code></pre>
                        <ul>
                            <li><code>DOCTYPE</code> - Tells browser this is HTML5</li>
                            <li><code>lang="en"</code> - Accessibility for screen readers</li>
                            <li><code>viewport</code> - Makes site mobile-friendly</li>
                            <li><code>title</code> - Shows in browser tab</li>
                        </ul>
                    </div>
                    
                    <div class="html-section">
                        <h5>Semantic Structure</h5>
                        <pre><code>&lt;body&gt;
    &lt;header&gt;
        &lt;nav&gt;...&lt;/nav&gt;
    &lt;/header&gt;
    
    &lt;main&gt;
        &lt;section id="hero"&gt;...&lt;/section&gt;
        &lt;section id="about"&gt;...&lt;/section&gt;
        &lt;section id="projects"&gt;...&lt;/section&gt;
        &lt;section id="contact"&gt;...&lt;/section&gt;
    &lt;/main&gt;
    
    &lt;footer&gt;...&lt;/footer&gt;
&lt;/body&gt;</code></pre>
                        <ul>
                            <li><code>&lt;header&gt;</code> - Top of page with navigation</li>
                            <li><code>&lt;main&gt;</code> - Primary content area</li>
                            <li><code>&lt;section&gt;</code> - Distinct content sections</li>
                            <li><code>&lt;footer&gt;</code> - Bottom page information</li>
                        </ul>
                    </div>
                    
                    <div class="html-section">
                        <h5>Navigation Structure</h5>
                        <pre><code>&lt;nav&gt;
    &lt;h1&gt;Your Name&lt;/h1&gt;
    &lt;ul&gt;
        &lt;li&gt;&lt;a href="#about"&gt;About&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href="#projects"&gt;Projects&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href="#contact"&gt;Contact&lt;/a&gt;&lt;/li&gt;
    &lt;/ul&gt;
&lt;/nav&gt;</code></pre>
                        <ul>
                            <li><code>href="#section"</code> - Links to page sections</li>
                            <li><code>&lt;ul&gt;&lt;li&gt;</code> - Unordered list for menu items</li>
                            <li>Semantic navigation structure</li>
                        </ul>
                    </div>
                </div>
            </div>
        `;
    }
    
    generateHtmlStructureInteractive() {
        return `
            <div class="html-builder">
                <h5>Step-by-Step HTML Builder</h5>
                
                <div class="builder-interface">
                    <div class="file-editor">
                        <div class="file-tabs">
                            <button class="file-tab active" data-file="index.html">index.html</button>
                            <button class="file-tab" data-file="style.css">style.css</button>
                            <button class="file-tab" data-file="script.js">script.js</button>
                        </div>
                        
                        <div class="editor-content">
                            <div class="line-numbers" id="lineNumbers">1</div>
                            <textarea id="codeEditor" placeholder="Start building your HTML here...">&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;My Portfolio&lt;/title&gt;
    &lt;link rel="stylesheet" href="style.css"&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;!-- Add your content here --&gt;
&lt;/body&gt;
&lt;/html&gt;</textarea>
                        </div>
                        
                        <div class="editor-tools">
                            <button onclick="WebProjectDemo.insertTemplate('header')" class="template-btn">+ Header</button>
                            <button onclick="WebProjectDemo.insertTemplate('nav')" class="template-btn">+ Navigation</button>
                            <button onclick="WebProjectDemo.insertTemplate('hero')" class="template-btn">+ Hero Section</button>
                            <button onclick="WebProjectDemo.insertTemplate('about')" class="template-btn">+ About Section</button>
                            <button onclick="WebProjectDemo.insertTemplate('projects')" class="template-btn">+ Projects Section</button>
                            <button onclick="WebProjectDemo.insertTemplate('contact')" class="template-btn">+ Contact Section</button>
                            <button onclick="WebProjectDemo.insertTemplate('footer')" class="template-btn">+ Footer</button>
                        </div>
                    </div>
                    
                    <div class="live-preview">
                        <h6>Live Preview</h6>
                        <iframe id="htmlPreview" class="preview-frame"></iframe>
                        <button onclick="WebProjectDemo.updatePreview()" class="update-preview-btn">Update Preview</button>
                    </div>
                </div>
                
                <div class="validation-panel">
                    <h6>HTML Validation</h6>
                    <button onclick="WebProjectDemo.validateHtml()" class="validate-btn">Validate HTML</button>
                    <div class="validation-results" id="htmlValidation"></div>
                </div>
            </div>
        `;
    }
    
    generateHtmlStructureExercise() {
        return `
            <div class="exercise-workspace">
                <div class="instructions">
                    <p><strong>Task:</strong> Build a complete portfolio structure:</p>
                    <ol>
                        <li>Add proper DOCTYPE and meta tags</li>
                        <li>Create a header with navigation</li>
                        <li>Add a hero section with introduction</li>
                        <li>Include About, Projects, and Contact sections</li>
                        <li>Add a footer with copyright</li>
                        <li>Link to external CSS and JavaScript files</li>
                    </ol>
                </div>
                <div class="code-workspace">
                    <textarea id="exerciseCode1" placeholder="<!DOCTYPE html>
<html lang='en'>
<head>
    <!-- Add meta tags, title, and CSS link here -->
</head>
<body>
    <!-- Build your portfolio structure here -->
</body>
</html>" rows="20"></textarea>
                    <button onclick="WebProjectDemo.checkExercise(1)" class="check-btn">Check Answer</button>
                </div>
                <div class="exercise-feedback" id="exerciseFeedback1"></div>
            </div>
        `;
    }
    
    generateCssStylingContent() {
        return `
            <div class="css-styling-guide">
                <h4>🎨 Adding CSS Styles to Your Portfolio</h4>
                
                <div class="styling-concepts">
                    <div class="concept">
                        <h5>1. CSS Reset & Base Styles</h5>
                        <p>Start with consistent defaults across browsers</p>
                        <pre><code>/* CSS Reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Arial', sans-serif;
    line-height: 1.6;
    color: #333;
}</code></pre>
                    </div>
                    
                    <div class="concept">
                        <h5>2. Layout Structure</h5>
                        <p>Create the overall page layout</p>
                        <pre><code>/* Header Styles */
header {
    background: #2c3e50;
    color: white;
    padding: 1rem 0;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1000;
}

nav ul {
    list-style: none;
    display: flex;
    justify-content: center;
    gap: 2rem;
}

nav a {
    color: white;
    text-decoration: none;
    transition: color 0.3s;
}

nav a:hover {
    color: #3498db;
}</code></pre>
                    </div>
                    
                    <div class="concept">
                        <h5>3. Section Styling</h5>
                        <p>Style individual content sections</p>
                        <pre><code>/* Main Content */
main {
    margin-top: 80px; /* Account for fixed header */
}

section {
    padding: 4rem 2rem;
    max-width: 1200px;
    margin: 0 auto;
}

#hero {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    text-align: center;
    min-height: 70vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
}</code></pre>
                    </div>
                </div>
                
                <div class="color-schemes">
                    <h5>🎨 Professional Color Schemes</h5>
                    <div class="scheme-grid">
                        <div class="color-scheme modern">
                            <h6>Modern Blue</h6>
                            <div class="colors">
                                <div class="color" style="background: #2c3e50"></div>
                                <div class="color" style="background: #3498db"></div>
                                <div class="color" style="background: #ecf0f1"></div>
                                <div class="color" style="background: #34495e"></div>
                            </div>
                        </div>
                        <div class="color-scheme warm">
                            <h6>Warm Orange</h6>
                            <div class="colors">
                                <div class="color" style="background: #e67e22"></div>
                                <div class="color" style="background: #f39c12"></div>
                                <div class="color" style="background: #fdf2e9"></div>
                                <div class="color" style="background: #d35400"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
    
    generateCssStylingInteractive() {
        return `
            <div class="css-style-builder">
                <h5>Portfolio Style Builder</h5>
                
                <div class="style-categories">
                    <div class="style-category">
                        <h6>Color Scheme</h6>
                        <div class="color-options">
                            <button onclick="WebProjectDemo.applyColorScheme('modern')" class="color-option modern">Modern Blue</button>
                            <button onclick="WebProjectDemo.applyColorScheme('warm')" class="color-option warm">Warm Orange</button>
                            <button onclick="WebProjectDemo.applyColorScheme('minimal')" class="color-option minimal">Minimal Gray</button>
                            <button onclick="WebProjectDemo.applyColorScheme('nature')" class="color-option nature">Nature Green</button>
                        </div>
                    </div>
                    
                    <div class="style-category">
                        <h6>Typography</h6>
                        <div class="font-options">
                            <button onclick="WebProjectDemo.applyFont('Arial')" class="font-option">Arial (Sans-serif)</button>
                            <button onclick="WebProjectDemo.applyFont('Georgia')" class="font-option">Georgia (Serif)</button>
                            <button onclick="WebProjectDemo.applyFont('Courier')" class="font-option">Courier (Monospace)</button>
                        </div>
                    </div>
                    
                    <div class="style-category">
                        <h6>Layout Style</h6>
                        <div class="layout-options">
                            <button onclick="WebProjectDemo.applyLayout('centered')" class="layout-option">Centered</button>
                            <button onclick="WebProjectDemo.applyLayout('sidebar')" class="layout-option">Sidebar</button>
                            <button onclick="WebProjectDemo.applyLayout('grid')" class="layout-option">Grid</button>
                        </div>
                    </div>
                </div>
                
                <div class="live-css-editor">
                    <h6>Custom CSS Editor</h6>
                    <textarea id="customCss" placeholder="Add your custom CSS here...">/* Add custom styles */
.hero-section {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    padding: 100px 20px;
    text-align: center;
    color: white;
}

.hero-section h2 {
    font-size: 3rem;
    margin-bottom: 1rem;
}

.hero-section p {
    font-size: 1.2rem;
    opacity: 0.9;
}</textarea>
                    <button onclick="WebProjectDemo.applyCustomCss()" class="apply-css-btn">Apply Custom CSS</button>
                </div>
                
                <div class="style-preview-mini" id="stylePreviewMini">
                    <div class="preview-header">My Portfolio</div>
                    <div class="preview-content">
                        <div class="preview-hero">Welcome Section</div>
                        <div class="preview-section">About Me</div>
                        <div class="preview-section">Projects</div>
                    </div>
                </div>
            </div>
        `;
    }
    
    generateJavaScriptContent() {
        return `
            <div class="javascript-guide">
                <h4>⚡ Adding JavaScript Interactivity</h4>
                
                <div class="js-concepts">
                    <div class="concept">
                        <h5>1. Smooth Scrolling Navigation</h5>
                        <p>Make navigation links scroll smoothly to sections</p>
                        <pre><code>// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});</code></pre>
                    </div>
                    
                    <div class="concept">
                        <h5>2. Dynamic Content Loading</h5>
                        <p>Show/hide content sections dynamically</p>
                        <pre><code>// Toggle project details
function toggleProject(projectId) {
    const project = document.getElementById(projectId);
    const details = project.querySelector('.project-details');
    
    if (details.style.display === 'none') {
        details.style.display = 'block';
        details.style.animation = 'fadeIn 0.3s ease-in';
    } else {
        details.style.display = 'none';
    }
}</code></pre>
                    </div>
                    
                    <div class="concept">
                        <h5>3. Form Validation</h5>
                        <p>Validate contact form before submission</p>
                        <pre><code>// Contact form validation
function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (!name || !email || !message) {
        alert('Please fill in all fields');
        return false;
    }
    
    if (!email.includes('@')) {
        alert('Please enter a valid email');
        return false;
    }
    
    alert('Message sent successfully!');
    return true;
}</code></pre>
                    </div>
                </div>
                
                <div class="interactive-features">
                    <h5>🎯 Common Interactive Features</h5>
                    <ul>
                        <li><strong>Image Galleries:</strong> Lightbox effects for project images</li>
                        <li><strong>Animations:</strong> Fade-in effects as user scrolls</li>
                        <li><strong>Theme Toggle:</strong> Dark/light mode switcher</li>
                        <li><strong>Mobile Menu:</strong> Hamburger menu for mobile devices</li>
                        <li><strong>Loading Effects:</strong> Progress bars and spinners</li>
                        <li><strong>Interactive Forms:</strong> Real-time validation and feedback</li>
                    </ul>
                </div>
            </div>
        `;
    }
    
    generateJavaScriptInteractive() {
        return `
            <div class="js-feature-builder">
                <h5>JavaScript Feature Builder</h5>
                
                <div class="feature-selector">
                    <h6>Add Interactive Features:</h6>
                    <div class="feature-buttons">
                        <button onclick="WebProjectDemo.addSmoothScroll()" class="feature-btn">Smooth Scrolling</button>
                        <button onclick="WebProjectDemo.addMobileMenu()" class="feature-btn">Mobile Menu</button>
                        <button onclick="WebProjectDemo.addScrollAnimations()" class="feature-btn">Scroll Animations</button>
                        <button onclick="WebProjectDemo.addFormValidation()" class="feature-btn">Form Validation</button>
                        <button onclick="WebProjectDemo.addThemeToggle()" class="feature-btn">Theme Toggle</button>
                    </div>
                </div>
                
                <div class="js-code-display">
                    <h6>Generated JavaScript Code:</h6>
                    <textarea id="generatedJs" rows="15" readonly>// Your JavaScript features will appear here
// Click the buttons above to add functionality</textarea>
                    <button onclick="WebProjectDemo.copyJsCode()" class="copy-btn">Copy Code</button>
                </div>
                
                <div class="feature-demo">
                    <h6>Feature Demo:</h6>
                    <div class="demo-area" id="jsFeatureDemo">
                        <div class="demo-nav">
                            <a href="#demo-section1">Section 1</a>
                            <a href="#demo-section2">Section 2</a>
                            <button id="themeToggleDemo" style="display:none;">Toggle Theme</button>
                        </div>
                        <div class="demo-content">
                            <div id="demo-section1" class="demo-section">Demo Section 1</div>
                            <div id="demo-section2" class="demo-section">Demo Section 2</div>
                        </div>
                    </div>
                </div>
                
                <div class="js-best-practices">
                    <h6>✨ JavaScript Best Practices:</h6>
                    <ul>
                        <li>Always check if elements exist before manipulating them</li>
                        <li>Use addEventListener instead of onclick attributes</li>
                        <li>Keep functions small and focused on one task</li>
                        <li>Use meaningful variable and function names</li>
                        <li>Add error handling for user interactions</li>
                        <li>Test on different devices and browsers</li>
                    </ul>
                </div>
            </div>
        `;
    }
    
    generateResponsiveContent() {
        return `
            <div class="responsive-design-guide">
                <h4>📱 Making Your Portfolio Responsive</h4>
                
                <div class="responsive-principles">
                    <div class="principle">
                        <h5>1. Mobile-First Approach</h5>
                        <p>Start with mobile styles, then enhance for larger screens</p>
                        <pre><code>/* Mobile styles (default) */
.container {
    padding: 1rem;
    font-size: 16px;
}

/* Tablet and up */
@media (min-width: 768px) {
    .container {
        padding: 2rem;
        font-size: 18px;
    }
}

/* Desktop and up */
@media (min-width: 1024px) {
    .container {
        padding: 3rem;
        max-width: 1200px;
        margin: 0 auto;
    }
}</code></pre>
                    </div>
                    
                    <div class="principle">
                        <h5>2. Flexible Grid Layout</h5>
                        <p>Use CSS Grid and Flexbox for responsive layouts</p>
                        <pre><code>/* Projects Grid */
.projects-grid {
    display: grid;
    gap: 2rem;
    grid-template-columns: 1fr; /* Mobile: 1 column */
}

@media (min-width: 768px) {
    .projects-grid {
        grid-template-columns: repeat(2, 1fr); /* Tablet: 2 columns */
    }
}

@media (min-width: 1024px) {
    .projects-grid {
        grid-template-columns: repeat(3, 1fr); /* Desktop: 3 columns */
    }
}</code></pre>
                    </div>
                    
                    <div class="principle">
                        <h5>3. Responsive Navigation</h5>
                        <p>Hamburger menu for mobile, horizontal menu for desktop</p>
                        <pre><code>/* Mobile Navigation */
.nav-toggle {
    display: block;
    background: none;
    border: none;
    font-size: 1.5rem;
    color: white;
}

.nav-menu {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: #2c3e50;
}

.nav-menu.active {
    display: flex;
}

/* Desktop Navigation */
@media (min-width: 768px) {
    .nav-toggle {
        display: none;
    }
    
    .nav-menu {
        display: flex !important;
        flex-direction: row;
        position: static;
        background: transparent;
    }
}</code></pre>
                    </div>
                </div>
                
                <div class="responsive-images">
                    <h5>🖼️ Responsive Images</h5>
                    <pre><code>/* Responsive Images */
img {
    max-width: 100%;
    height: auto;
}

/* High-DPI displays */
@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
    .hero-image {
        background-image: url('hero-image@2x.jpg');
    }
}</code></pre>
                </div>
            </div>
        `;
    }
    
    generateResponsiveInteractive() {
        return `
            <div class="responsive-tester">
                <h5>Portfolio Responsive Tester</h5>
                
                <div class="device-preview">
                    <div class="device-tabs">
                        <button onclick="WebProjectDemo.previewDevice('mobile')" class="device-tab mobile">Mobile</button>
                        <button onclick="WebProjectDemo.previewDevice('tablet')" class="device-tab tablet">Tablet</button>
                        <button onclick="WebProjectDemo.previewDevice('desktop')" class="device-tab desktop active">Desktop</button>
                    </div>
                    
                    <div class="device-frame" id="portfolioFrame">
                        <div class="device-screen" id="deviceScreen">
                            <iframe id="portfolioPreview" src="about:blank"></iframe>
                        </div>
                    </div>
                    
                    <div class="device-info" id="deviceInfo">
                        <span>Desktop View: 1200px × 800px</span>
                    </div>
                </div>
                
                <div class="responsive-checklist">
                    <h6>Responsive Design Checklist:</h6>
                    <div class="checklist">
                        <label><input type="checkbox" id="check1"> Navigation works on mobile</label>
                        <label><input type="checkbox" id="check2"> Text is readable on all devices</label>
                        <label><input type="checkbox" id="check3"> Images scale properly</label>
                        <label><input type="checkbox" id="check4"> Buttons are large enough for touch</label>
                        <label><input type="checkbox" id="check5"> Content flows well on narrow screens</label>
                        <label><input type="checkbox" id="check6"> No horizontal scrolling needed</label>
                    </div>
                    <button onclick="WebProjectDemo.checkResponsiveness()" class="check-responsive-btn">Check All</button>
                </div>
                
                <div class="breakpoint-tester">
                    <h6>Custom Breakpoint Tester:</h6>
                    <input type="range" id="widthSlider" min="320" max="1400" value="1200" />
                    <div class="width-display" id="widthDisplay">1200px</div>
                    <div class="current-breakpoint" id="currentBreakpoint">Desktop</div>
                </div>
            </div>
        `;
    }
    
    generateTestingDeploymentContent() {
        return `
            <div class="testing-deployment-guide">
                <h4>🚀 Testing and Deploying Your Portfolio</h4>
                
                <div class="testing-section">
                    <h5>🔍 Testing Your Website</h5>
                    
                    <div class="testing-categories">
                        <div class="test-category">
                            <h6>1. Functionality Testing</h6>
                            <ul>
                                <li>All navigation links work correctly</li>
                                <li>Forms submit and validate properly</li>
                                <li>Images load and display correctly</li>
                                <li>Interactive elements respond to user actions</li>
                                <li>External links open in new tabs</li>
                            </ul>
                        </div>
                        
                        <div class="test-category">
                            <h6>2. Cross-Browser Testing</h6>
                            <ul>
                                <li>Chrome (most popular)</li>
                                <li>Firefox</li>
                                <li>Safari (for Mac/iOS users)</li>
                                <li>Edge (for Windows users)</li>
                                <li>Mobile browsers (iOS Safari, Chrome Mobile)</li>
                            </ul>
                        </div>
                        
                        <div class="test-category">
                            <h6>3. Performance Testing</h6>
                            <ul>
                                <li>Page load speed (aim for under 3 seconds)</li>
                                <li>Image optimization (compress large images)</li>
                                <li>CSS and JavaScript minification</li>
                                <li>Mobile performance</li>
                            </ul>
                        </div>
                        
                        <div class="test-category">
                            <h6>4. Accessibility Testing</h6>
                            <ul>
                                <li>Alt text for all images</li>
                                <li>Proper heading hierarchy (h1, h2, h3...)</li>
                                <li>Keyboard navigation support</li>
                                <li>Color contrast ratios</li>
                                <li>Screen reader compatibility</li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div class="deployment-section">
                    <h5>🌐 Deployment Options</h5>
                    
                    <div class="deployment-options">
                        <div class="deployment-option">
                            <h6>GitHub Pages (Free)</h6>
                            <p>Perfect for static websites and portfolios</p>
                            <div class="steps">
                                <ol>
                                    <li>Create GitHub repository</li>
                                    <li>Upload your files</li>
                                    <li>Enable GitHub Pages in settings</li>
                                    <li>Your site is live at username.github.io/repository-name</li>
                                </ol>
                            </div>
                        </div>
                        
                        <div class="deployment-option">
                            <h6>Netlify (Free tier available)</h6>
                            <p>Automatic deployments with Git integration</p>
                            <div class="steps">
                                <ol>
                                    <li>Connect your GitHub repository</li>
                                    <li>Configure build settings</li>
                                    <li>Deploy automatically on every commit</li>
                                    <li>Get custom domain and HTTPS</li>
                                </ol>
                            </div>
                        </div>
                        
                        <div class="deployment-option">
                            <h6>Vercel (Free tier available)</h6>
                            <p>Optimized for modern web frameworks</p>
                            <div class="steps">
                                <ol>
                                    <li>Import project from Git</li>
                                    <li>Automatic deployments</li>
                                    <li>Preview deployments for pull requests</li>
                                    <li>Global CDN and analytics</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="optimization-tips">
                    <h5>⚡ Performance Optimization Tips</h5>
                    <ul>
                        <li><strong>Optimize Images:</strong> Use WebP format, compress JPEG/PNG files</li>
                        <li><strong>Minify CSS/JS:</strong> Remove whitespace and comments</li>
                        <li><strong>Use CDN:</strong> Serve assets from geographically close servers</li>
                        <li><strong>Enable Caching:</strong> Set proper cache headers</li>
                        <li><strong>Lazy Loading:</strong> Load images only when needed</li>
                    </ul>
                </div>
            </div>
        `;
    }
    
    generateTestingDeploymentInteractive() {
        return `
            <div class="testing-deployment-tools">
                <h5>Testing & Deployment Tools</h5>
                
                <div class="website-validator">
                    <h6>Website Health Check</h6>
                    <div class="validation-tests">
                        <button onclick="WebProjectDemo.checkHtml()" class="test-btn">Validate HTML</button>
                        <button onclick="WebProjectDemo.checkCss()" class="test-btn">Validate CSS</button>
                        <button onclick="WebProjectDemo.checkLinks()" class="test-btn">Check Links</button>
                        <button onclick="WebProjectDemo.checkPerformance()" class="test-btn">Performance Test</button>
                        <button onclick="WebProjectDemo.checkAccessibility()" class="test-btn">Accessibility Check</button>
                    </div>
                    <div class="test-results" id="testResults"></div>
                </div>
                
                <div class="deployment-simulator">
                    <h6>Deployment Simulator</h6>
                    <div class="deployment-steps" id="deploymentSteps">
                        <div class="deploy-step">
                            <span class="step-number">1</span>
                            <span class="step-text">Choose deployment platform</span>
                            <select id="platformSelect">
                                <option value="github">GitHub Pages</option>
                                <option value="netlify">Netlify</option>
                                <option value="vercel">Vercel</option>
                            </select>
                        </div>
                        <div class="deploy-step">
                            <span class="step-number">2</span>
                            <span class="step-text">Upload files</span>
                            <button onclick="WebProjectDemo.simulateUpload()" class="upload-btn">Upload Project</button>
                        </div>
                        <div class="deploy-step">
                            <span class="step-number">3</span>
                            <span class="step-text">Configure settings</span>
                            <button onclick="WebProjectDemo.simulateConfigure()" class="config-btn">Configure</button>
                        </div>
                        <div class="deploy-step">
                            <span class="step-number">4</span>
                            <span class="step-text">Deploy website</span>
                            <button onclick="WebProjectDemo.simulateDeploy()" class="deploy-btn">Deploy</button>
                        </div>
                    </div>
                    <div class="deployment-status" id="deploymentStatus"></div>
                </div>
                
                <div class="optimization-analyzer">
                    <h6>Performance Optimization</h6>
                    <div class="file-analyzer">
                        <h7>File Size Analysis:</h7>
                        <div class="file-list">
                            <div class="file-item">
                                <span>index.html</span>
                                <span class="file-size good">3.2 KB</span>
                                <span class="optimization-tip">✅ Good</span>
                            </div>
                            <div class="file-item">
                                <span>style.css</span>
                                <span class="file-size warning">45 KB</span>
                                <span class="optimization-tip">⚠️ Consider minifying</span>
                            </div>
                            <div class="file-item">
                                <span>hero-image.jpg</span>
                                <span class="file-size error">2.1 MB</span>
                                <span class="optimization-tip">❌ Compress image</span>
                            </div>
                        </div>
                        <button onclick="WebProjectDemo.optimizeFiles()" class="optimize-btn">Auto-Optimize</button>
                    </div>
                </div>
                
                <div class="final-checklist">
                    <h6>Pre-Launch Checklist:</h6>
                    <div class="final-checks">
                        <label><input type="checkbox"> All content is complete and proofread</label>
                        <label><input type="checkbox"> Contact information is accurate</label>
                        <label><input type="checkbox"> All images have alt text</label>
                        <label><input type="checkbox"> Website works on mobile devices</label>
                        <label><input type="checkbox"> All links work correctly</label>
                        <label><input type="checkbox"> Page loads quickly (under 3 seconds)</label>
                        <label><input type="checkbox"> SEO meta tags are added</label>
                        <label><input type="checkbox"> Analytics tracking is set up</label>
                    </div>
                    <button onclick="WebProjectDemo.completeLaunch()" class="launch-btn">Launch Website! 🚀</button>
                </div>
            </div>
        `;
    }
    
    // Static methods for interactive elements
    static allowDrop(event) {
        event.preventDefault();
    }
    
    static drop(event) {
        event.preventDefault();
        const elementType = event.dataTransfer.getData("text");
        const canvas = document.getElementById('wireframeCanvas');
        
        // Remove instruction if present
        const instruction = canvas.querySelector('.canvas-instruction');
        if (instruction) instruction.remove();
        
        // Create wireframe element
        const element = document.createElement('div');
        element.className = 'dropped-element';
        element.textContent = elementType;
        element.setAttribute('data-type', elementType);
        
        canvas.appendChild(element);
    }
    
    static clearWireframe() {
        const canvas = document.getElementById('wireframeCanvas');
        canvas.innerHTML = '<div class="canvas-instruction">Drop wireframe elements here to design your layout</div>';
    }
    
    static generateCode() {
        const canvas = document.getElementById('wireframeCanvas');
        const elements = canvas.querySelectorAll('.dropped-element');
        
        let html = '<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>My Portfolio</title>\n    <link rel="stylesheet" href="style.css">\n</head>\n<body>\n';
        
        elements.forEach(element => {
            const type = element.getAttribute('data-type');
            switch (type) {
                case 'header':
                    html += '    <header>\n        <h1>Your Website</h1>\n    </header>\n';
                    break;
                case 'nav':
                    html += '    <nav>\n        <ul>\n            <li><a href="#home">Home</a></li>\n            <li><a href="#about">About</a></li>\n        </ul>\n    </nav>\n';
                    break;
                case 'hero':
                    html += '    <section id="hero">\n        <h2>Welcome!</h2>\n        <p>Your hero message here</p>\n    </section>\n';
                    break;
                case 'content':
                    html += '    <section>\n        <h2>Section Title</h2>\n        <p>Your content here</p>\n    </section>\n';
                    break;
                case 'footer':
                    html += '    <footer>\n        <p>&copy; 2024 Your Name</p>\n    </footer>\n';
                    break;
            }
        });
        
        html += '</body>\n</html>';
        
        document.getElementById('htmlStructure').textContent = html;
        document.getElementById('generatedHtml').style.display = 'block';
    }
    
    static insertTemplate(type) {
        const editor = document.getElementById('codeEditor');
        const templates = {
            header: '    <header>\n        <h1>Your Name</h1>\n    </header>\n',
            nav: '    <nav>\n        <ul>\n            <li><a href="#about">About</a></li>\n            <li><a href="#projects">Projects</a></li>\n            <li><a href="#contact">Contact</a></li>\n        </ul>\n    </nav>\n',
            hero: '    <section id="hero">\n        <h2>Welcome to My Portfolio</h2>\n        <p>I\'m a web developer passionate about creating amazing experiences.</p>\n    </section>\n',
            about: '    <section id="about">\n        <h2>About Me</h2>\n        <p>Tell your story here...</p>\n    </section>\n',
            projects: '    <section id="projects">\n        <h2>My Projects</h2>\n        <div class="project">\n            <h3>Project Name</h3>\n            <p>Project description...</p>\n        </div>\n    </section>\n',
            contact: '    <section id="contact">\n        <h2>Contact Me</h2>\n        <p>Email: your.email@example.com</p>\n    </section>\n',
            footer: '    <footer>\n        <p>&copy; 2024 Your Name. All rights reserved.</p>\n    </footer>\n'
        };
        
        const template = templates[type];
        if (template) {
            const cursorPos = editor.selectionStart;
            const textBefore = editor.value.substring(0, cursorPos);
            const textAfter = editor.value.substring(cursorPos);
            editor.value = textBefore + template + textAfter;
            editor.focus();
            editor.setSelectionRange(cursorPos + template.length, cursorPos + template.length);
        }
    }
    
    static updatePreview() {
        const editor = document.getElementById('codeEditor');
        const preview = document.getElementById('htmlPreview');
        preview.srcdoc = editor.value;
    }
    
    static validateHtml() {
        const editor = document.getElementById('codeEditor');
        const validation = document.getElementById('htmlValidation');
        const html = editor.value;
        
        const errors = [];
        
        if (!html.includes('<!DOCTYPE html>')) {
            errors.push('Missing DOCTYPE declaration');
        }
        
        if (!html.includes('<title>')) {
            errors.push('Missing title element');
        }
        
        if (!html.includes('lang=')) {
            errors.push('Missing language attribute on html element');
        }
        
        if (!html.includes('charset=')) {
            errors.push('Missing charset meta tag');
        }
        
        if (errors.length === 0) {
            validation.innerHTML = '<div class="validation-success">✅ HTML structure looks good!</div>';
        } else {
            validation.innerHTML = `
                <div class="validation-errors">
                    <h6>⚠️ Issues found:</h6>
                    <ul>${errors.map(error => `<li>${error}</li>`).join('')}</ul>
                </div>
            `;
        }
    }
    
    static checkExercise(exerciseNumber) {
        const code = document.getElementById(`exerciseCode${exerciseNumber}`).value;
        const feedback = document.getElementById(`exerciseFeedback${exerciseNumber}`);
        
        let isCorrect = false;
        let feedbackText = '';
        
        switch (exerciseNumber) {
            case 1:
                isCorrect = code.includes('<!DOCTYPE html>') && 
                           code.includes('<header>') && 
                           code.includes('<nav>') &&
                           code.includes('<main>') &&
                           code.includes('<section') &&
                           code.includes('<footer>') &&
                           code.includes('viewport') &&
                           code.includes('<title>');
                feedbackText = isCorrect ? 
                    '✅ Excellent! You created a complete portfolio structure with all required elements.' : 
                    '❌ Make sure to include DOCTYPE, header, nav, main with sections, footer, viewport meta tag, and title.';
                break;
        }
        
        feedback.innerHTML = `
            <div class="feedback-message ${isCorrect ? 'success' : 'error'}">
                ${feedbackText}
            </div>
        `;
        
        if (isCorrect && window.OpenCodeApp?.progressTracker) {
            window.OpenCodeApp.progressTracker.recordExerciseCompletion(false);
            window.OpenCodeApp.markDemoCompleted('web-project');
        }
    }
}

// Setup drag and drop for wireframe elements
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.wireframe-element').forEach(element => {
        element.addEventListener('dragstart', function(e) {
            e.dataTransfer.setData("text", this.textContent);
        });
    });
});

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = WebProjectDemo;
}