/**
 * HTML/CSS Fundamentals Interactive Demonstration
 * Teaches web page structure and styling with live preview
 */

class HtmlCssDemo extends BaseDemo {
    constructor(container) {
        super(container);
        this.livePreview = null;
    }
    
    getTitle() {
        return 'HTML/CSS Fundamentals';
    }
    
    getDemoType() {
        return 'html-css';
    }
    
    setupSteps() {
        this.steps = [
            {
                id: 'web-basics',
                title: 'Web Page Basics',
                description: 'Understand the building blocks of web pages: HTML for structure, CSS for styling.',
                content: this.generateWebBasicsContent(),
                interactive: this.generateWebBasicsInteractive()
            },
            {
                id: 'html-structure',
                title: 'HTML Structure',
                description: 'Learn HTML elements, tags, and how to create the skeleton of a web page.',
                content: this.generateHtmlStructureContent(),
                interactive: this.generateHtmlStructureInteractive(),
                exercise: {
                    description: 'Create a basic HTML page with header, navigation, main content, and footer.',
                    content: this.generateHtmlStructureExercise(),
                    solution: `<!DOCTYPE html>\n<html>\n<head>\n    <title>My First Page</title>\n</head>\n<body>\n    <header><h1>Welcome</h1></header>\n    <nav><ul><li>Home</li><li>About</li></ul></nav>\n    <main><p>Main content here</p></main>\n    <footer><p>&copy; 2024</p></footer>\n</body>\n</html>`
                }
            },
            {
                id: 'css-styling',
                title: 'CSS Styling',
                description: 'Add colors, fonts, spacing, and layout to make your web pages beautiful.',
                content: this.generateCssContent(),
                interactive: this.generateCssInteractive()
            },
            {
                id: 'responsive-design',
                title: 'Responsive Design',
                description: 'Make your web pages look great on all devices with responsive design techniques.',
                content: this.generateResponsiveContent(),
                interactive: this.generateResponsiveInteractive()
            },
            {
                id: 'web-project',
                title: 'Build a Web Page',
                description: 'Combine HTML and CSS to create a complete, responsive web page.',
                content: this.generateWebProjectContent(),
                interactive: this.generateWebProjectInteractive()
            }
        ];
    }
    
    generateWebBasicsContent() {
        return `
            <div class="web-basics">
                <h4>🌐 The Web Development Stack</h4>
                <div class="web-stack">
                    <div class="stack-layer html">
                        <h5>HTML (Structure)</h5>
                        <p>The skeleton - defines content and meaning</p>
                        <div class="example-box">
                            &lt;h1&gt;This is a heading&lt;/h1&gt;<br>
                            &lt;p&gt;This is a paragraph&lt;/p&gt;
                        </div>
                    </div>
                    
                    <div class="stack-layer css">
                        <h5>CSS (Presentation)</h5>
                        <p>The styling - colors, fonts, layout</p>
                        <div class="example-box">
                            h1 { color: blue; }<br>
                            p { font-size: 16px; }
                        </div>
                    </div>
                    
                    <div class="stack-layer js">
                        <h5>JavaScript (Behavior)</h5>
                        <p>The interactions - dynamic functionality</p>
                        <div class="example-box">
                            button.onclick = function() {<br>
                            &nbsp;&nbsp;alert('Hello!');<br>
                            }
                        </div>
                    </div>
                </div>
                
                <h4>🏗️ Building Analogy</h4>
                <div class="building-analogy">
                    <div class="analogy-item">
                        <span class="analogy-icon">🏠</span>
                        <h5>HTML = House Frame</h5>
                        <p>Structure, rooms, walls</p>
                    </div>
                    <div class="analogy-item">
                        <span class="analogy-icon">🎨</span>
                        <h5>CSS = Interior Design</h5>
                        <p>Paint, furniture, decorations</p>
                    </div>
                    <div class="analogy-item">
                        <span class="analogy-icon">⚡</span>
                        <h5>JavaScript = Electricity</h5>
                        <p>Lights, appliances, automation</p>
                    </div>
                </div>
            </div>
        `;
    }
    
    generateWebBasicsInteractive() {
        return `
            <div class="web-preview">
                <h5>Live Web Page Preview</h5>
                <div class="preview-tabs">
                    <button class="tab-btn active" data-tab="html">HTML</button>
                    <button class="tab-btn" data-tab="css">CSS</button>
                    <button class="tab-btn" data-tab="preview">Preview</button>
                </div>
                
                <div class="tab-content">
                    <div class="tab-pane active" id="html-tab">
                        <textarea id="htmlCode" placeholder="Enter HTML here...">&lt;h1&gt;Hello World!&lt;/h1&gt;
&lt;p&gt;This is my first web page.&lt;/p&gt;</textarea>
                    </div>
                    
                    <div class="tab-pane" id="css-tab">
                        <textarea id="cssCode" placeholder="Enter CSS here...">h1 {
    color: blue;
    text-align: center;
}

p {
    font-size: 18px;
    color: #333;
}</textarea>
                    </div>
                    
                    <div class="tab-pane" id="preview-tab">
                        <iframe id="livePreview" class="preview-frame"></iframe>
                    </div>
                </div>
                
                <button onclick="HtmlCssDemo.updatePreview()" class="update-preview-btn">Update Preview</button>
            </div>
        `;
    }
    
    generateHtmlStructureContent() {
        return `
            <div class="html-structure">
                <h4>📄 HTML Document Structure</h4>
                
                <div class="html-anatomy">
                    <pre><code>&lt;!DOCTYPE html&gt;  ← Document type declaration
&lt;html&gt;            ← Root element
&lt;head&gt;            ← Document metadata
    &lt;title&gt;Page Title&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;            ← Visible content
    &lt;h1&gt;Main Heading&lt;/h1&gt;
    &lt;p&gt;A paragraph of text.&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
                </div>
                
                <h4>🏷️ Common HTML Elements</h4>
                <div class="html-elements">
                    <div class="element-category">
                        <h5>Text Elements</h5>
                        <ul>
                            <li><code>&lt;h1&gt; to &lt;h6&gt;</code> - Headings</li>
                            <li><code>&lt;p&gt;</code> - Paragraphs</li>
                            <li><code>&lt;strong&gt;</code> - Important text</li>
                            <li><code>&lt;em&gt;</code> - Emphasized text</li>
                        </ul>
                    </div>
                    
                    <div class="element-category">
                        <h5>Structure Elements</h5>
                        <ul>
                            <li><code>&lt;header&gt;</code> - Page header</li>
                            <li><code>&lt;nav&gt;</code> - Navigation</li>
                            <li><code>&lt;main&gt;</code> - Main content</li>
                            <li><code>&lt;footer&gt;</code> - Page footer</li>
                        </ul>
                    </div>
                    
                    <div class="element-category">
                        <h5>List Elements</h5>
                        <ul>
                            <li><code>&lt;ul&gt;</code> - Unordered list</li>
                            <li><code>&lt;ol&gt;</code> - Ordered list</li>
                            <li><code>&lt;li&gt;</code> - List item</li>
                        </ul>
                    </div>
                    
                    <div class="element-category">
                        <h5>Media Elements</h5>
                        <ul>
                            <li><code>&lt;img&gt;</code> - Images</li>
                            <li><code>&lt;a&gt;</code> - Links</li>
                            <li><code>&lt;video&gt;</code> - Videos</li>
                        </ul>
                    </div>
                </div>
            </div>
        `;
    }
    
    generateHtmlStructureInteractive() {
        return `
            <div class="html-builder">
                <h5>HTML Element Builder</h5>
                <div class="element-selector">
                    <label>Choose an element:</label>
                    <select id="elementType">
                        <option value="h1">Heading 1</option>
                        <option value="p">Paragraph</option>
                        <option value="div">Division</option>
                        <option value="img">Image</option>
                        <option value="a">Link</option>
                        <option value="ul">Unordered List</option>
                    </select>
                </div>
                
                <div class="element-properties" id="elementProperties">
                    <!-- Properties will be populated based on element type -->
                </div>
                
                <button onclick="HtmlCssDemo.generateElement()" class="generate-btn">Generate HTML</button>
                
                <div class="generated-html" id="generatedHtml">
                    <h6>Generated HTML:</h6>
                    <pre><code id="htmlOutput"></code></pre>
                </div>
                
                <div class="html-validator">
                    <h6>HTML Validator</h6>
                    <textarea id="htmlToValidate" placeholder="Paste HTML here to validate..."></textarea>
                    <button onclick="HtmlCssDemo.validateHtml()" class="validate-btn">Validate HTML</button>
                    <div class="validation-results" id="validationResults"></div>
                </div>
            </div>
        `;
    }
    
    generateHtmlStructureExercise() {
        return `
            <div class="exercise-workspace">
                <div class="instructions">
                    <p><strong>Task:</strong> Create a complete HTML page with proper structure:</p>
                    <ul>
                        <li>DOCTYPE declaration</li>
                        <li>HTML, head, and body elements</li>
                        <li>Title in the head</li>
                        <li>Header with a main heading</li>
                        <li>Navigation with at least 3 links</li>
                        <li>Main content area with a paragraph</li>
                        <li>Footer with copyright information</li>
                    </ul>
                </div>
                <div class="code-workspace">
                    <textarea id="exerciseCode1" placeholder="<!DOCTYPE html>
<html>
<head>
    <!-- Add title here -->
</head>
<body>
    <!-- Add header, nav, main, and footer here -->
</body>
</html>" rows="15"></textarea>
                    <button onclick="HtmlCssDemo.checkExercise(1)" class="check-btn">Check Answer</button>
                </div>
                <div class="exercise-feedback" id="exerciseFeedback1"></div>
            </div>
        `;
    }
    
    generateCssContent() {
        return `
            <div class="css-fundamentals">
                <h4>🎨 CSS Fundamentals</h4>
                
                <div class="css-concepts">
                    <div class="css-concept">
                        <h5>Selectors</h5>
                        <p>Target specific HTML elements for styling</p>
                        <pre><code>h1 { }           /* Element selector */
.class-name { }  /* Class selector */
#id-name { }     /* ID selector */</code></pre>
                    </div>
                    
                    <div class="css-concept">
                        <h5>Properties</h5>
                        <p>Define how elements should look</p>
                        <pre><code>color: blue;          /* Text color */
background: #f0f0f0;  /* Background color */
font-size: 18px;      /* Text size */
margin: 10px;         /* Outside spacing */
padding: 15px;        /* Inside spacing */</code></pre>
                    </div>
                    
                    <div class="css-concept">
                        <h5>Box Model</h5>
                        <p>Every element is a rectangular box</p>
                        <div class="box-model-demo">
                            <div class="box-margin">Margin
                                <div class="box-border">Border
                                    <div class="box-padding">Padding
                                        <div class="box-content">Content</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <h4>📐 Layout Fundamentals</h4>
                <div class="layout-concepts">
                    <div class="layout-concept">
                        <h5>Display Property</h5>
                        <ul>
                            <li><code>block</code> - Full width, stacks vertically</li>
                            <li><code>inline</code> - Only as wide as content</li>
                            <li><code>flex</code> - Flexible layout system</li>
                            <li><code>grid</code> - Two-dimensional layout</li>
                        </ul>
                    </div>
                    
                    <div class="layout-concept">
                        <h5>Position Property</h5>
                        <ul>
                            <li><code>static</code> - Default flow</li>
                            <li><code>relative</code> - Relative to normal position</li>
                            <li><code>absolute</code> - Relative to positioned parent</li>
                            <li><code>fixed</code> - Relative to viewport</li>
                        </ul>
                    </div>
                </div>
            </div>
        `;
    }
    
    generateCssInteractive() {
        return `
            <div class="css-playground">
                <h5>CSS Style Playground</h5>
                
                <div class="playground-interface">
                    <div class="style-editor">
                        <h6>CSS Editor</h6>
                        <textarea id="cssEditor" placeholder="Enter CSS here...">/* Try styling the box below */
.demo-box {
    background: lightblue;
    padding: 20px;
    border: 2px solid navy;
    border-radius: 10px;
    text-align: center;
    font-family: Arial, sans-serif;
}</textarea>
                        <button onclick="HtmlCssDemo.applyCssStyles()" class="apply-btn">Apply Styles</button>
                    </div>
                    
                    <div class="style-preview">
                        <h6>Live Preview</h6>
                        <div class="demo-box" id="demoBox">
                            This is a demo box. Change the CSS to style it!
                        </div>
                    </div>
                </div>
                
                <div class="css-tools">
                    <h6>Quick Style Tools</h6>
                    <div class="tool-grid">
                        <button onclick="HtmlCssDemo.setColor()" class="tool-btn">Change Color</button>
                        <button onclick="HtmlCssDemo.setBackground()" class="tool-btn">Background</button>
                        <button onclick="HtmlCssDemo.setSize()" class="tool-btn">Font Size</button>
                        <button onclick="HtmlCssDemo.setBorder()" class="tool-btn">Border</button>
                        <button onclick="HtmlCssDemo.setSpacing()" class="tool-btn">Spacing</button>
                        <button onclick="HtmlCssDemo.resetStyles()" class="tool-btn reset">Reset</button>
                    </div>
                </div>
                
                <div class="property-explorer">
                    <h6>CSS Property Explorer</h6>
                    <select id="propertySelect" onchange="HtmlCssDemo.exploreProperty()">
                        <option value="">Select a property to explore...</option>
                        <option value="color">color</option>
                        <option value="background">background</option>
                        <option value="font-size">font-size</option>
                        <option value="border">border</option>
                        <option value="margin">margin</option>
                        <option value="padding">padding</option>
                        <option value="display">display</option>
                        <option value="position">position</option>
                    </select>
                    <div class="property-info" id="propertyInfo"></div>
                </div>
            </div>
        `;
    }
    
    generateResponsiveContent() {
        return `
            <div class="responsive-design">
                <h4>📱 Responsive Design</h4>
                <p>Make your websites look great on all devices - from phones to desktops!</p>
                
                <div class="responsive-concepts">
                    <div class="concept">
                        <h5>1. Flexible Grid System</h5>
                        <p>Use percentages instead of fixed pixels</p>
                        <pre><code>.container {
    width: 100%;        /* Full width */
    max-width: 1200px;  /* Don't get too wide */
}

.column {
    width: 50%;    /* Half width */
    float: left;
}</code></pre>
                    </div>
                    
                    <div class="concept">
                        <h5>2. Media Queries</h5>
                        <p>Apply different styles for different screen sizes</p>
                        <pre><code>/* Mobile first - default styles */
.header {
    font-size: 24px;
}

/* Tablet and up */
@media (min-width: 768px) {
    .header {
        font-size: 32px;
    }
}

/* Desktop and up */
@media (min-width: 1024px) {
    .header {
        font-size: 40px;
    }
}</code></pre>
                    </div>
                    
                    <div class="concept">
                        <h5>3. Flexible Images</h5>
                        <p>Images that scale with their container</p>
                        <pre><code>img {
    max-width: 100%;
    height: auto;
}</code></pre>
                    </div>
                </div>
                
                <div class="breakpoint-guide">
                    <h5>📏 Common Breakpoints</h5>
                    <div class="breakpoint-list">
                        <div class="breakpoint">📱 Mobile: 320px - 767px</div>
                        <div class="breakpoint">📺 Tablet: 768px - 1023px</div>
                        <div class="breakpoint">💻 Desktop: 1024px - 1199px</div>
                        <div class="breakpoint">🖥️ Large: 1200px+</div>
                    </div>
                </div>
            </div>
        `;
    }
    
    generateResponsiveInteractive() {
        return `
            <div class="responsive-tester">
                <h5>Responsive Design Tester</h5>
                
                <div class="device-simulator">
                    <div class="device-controls">
                        <button onclick="HtmlCssDemo.setDevice('mobile')" class="device-btn">📱 Mobile</button>
                        <button onclick="HtmlCssDemo.setDevice('tablet')" class="device-btn">📺 Tablet</button>
                        <button onclick="HtmlCssDemo.setDevice('desktop')" class="device-btn">💻 Desktop</button>
                        <button onclick="HtmlCssDemo.setDevice('custom')" class="device-btn">🔧 Custom</button>
                    </div>
                    
                    <div class="viewport-controls" id="viewportControls" style="display: none;">
                        <label>Width: <input type="range" id="widthSlider" min="320" max="1200" value="768" /></label>
                        <span id="widthDisplay">768px</span>
                    </div>
                    
                    <div class="device-frame" id="deviceFrame">
                        <iframe id="responsivePreview" class="responsive-frame" srcdoc="
                            <!DOCTYPE html>
                            <html>
                            <head>
                                <meta name='viewport' content='width=device-width, initial-scale=1'>
                                <style>
                                    body { font-family: Arial, sans-serif; margin: 0; padding: 20px; }
                                    .header { background: #333; color: white; padding: 1rem; }
                                    .content { padding: 1rem; }
                                    .grid { display: flex; flex-wrap: wrap; gap: 1rem; }
                                    .column { flex: 1; min-width: 250px; background: #f0f0f0; padding: 1rem; }
                                    
                                    @media (max-width: 768px) {
                                        .header { font-size: 18px; }
                                        .column { min-width: 100%; }
                                    }
                                </style>
                            </head>
                            <body>
                                <div class='header'>
                                    <h1>Responsive Demo</h1>
                                </div>
                                <div class='content'>
                                    <div class='grid'>
                                        <div class='column'>
                                            <h3>Column 1</h3>
                                            <p>This layout adapts to different screen sizes.</p>
                                        </div>
                                        <div class='column'>
                                            <h3>Column 2</h3>
                                            <p>Try the different device buttons above!</p>
                                        </div>
                                    </div>
                                </div>
                            </body>
                            </html>
                        "></iframe>
                    </div>
                </div>
                
                <div class="responsive-info" id="responsiveInfo">
                    <div class="info-item">Device: <span id="currentDevice">Tablet</span></div>
                    <div class="info-item">Width: <span id="currentWidth">768px</span></div>
                    <div class="info-item">Breakpoint: <span id="currentBreakpoint">Tablet</span></div>
                </div>
            </div>
        `;
    }
    
    generateWebProjectContent() {
        return `
            <div class="web-project-guide">
                <h4>🏗️ Build Your First Complete Web Page</h4>
                <p>Put together everything you've learned to create a professional-looking web page!</p>
                
                <div class="project-checklist">
                    <h5>Project Requirements:</h5>
                    <div class="checklist">
                        <div class="checklist-item">✅ Semantic HTML structure</div>
                        <div class="checklist-item">✅ CSS styling and layout</div>
                        <div class="checklist-item">✅ Responsive design</div>
                        <div class="checklist-item">✅ Navigation menu</div>
                        <div class="checklist-item">✅ Multiple content sections</div>
                        <div class="checklist-item">✅ Images and media</div>
                        <div class="checklist-item">✅ Contact information</div>
                    </div>
                </div>
                
                <div class="project-structure">
                    <h5>📁 Project Structure:</h5>
                    <pre><code>my-website/
├── index.html     (Main page)
├── style.css      (Styles)
├── images/        (Photos)
└── README.md      (Documentation)</code></pre>
                </div>
                
                <div class="design-tips">
                    <h5>🎨 Design Tips:</h5>
                    <ul>
                        <li><strong>Keep it simple:</strong> Clean, uncluttered design</li>
                        <li><strong>Use contrast:</strong> Ensure text is readable</li>
                        <li><strong>Be consistent:</strong> Use consistent colors and fonts</li>
                        <li><strong>Make it responsive:</strong> Test on different screen sizes</li>
                        <li><strong>Optimize images:</strong> Use appropriate file sizes</li>
                    </ul>
                </div>
            </div>
        `;
    }
    
    generateWebProjectInteractive() {
        return `
            <div class="project-builder">
                <h5>Complete Web Page Builder</h5>
                
                <div class="builder-tabs">
                    <button class="tab-btn active" data-tab="html-build">HTML</button>
                    <button class="tab-btn" data-tab="css-build">CSS</button>
                    <button class="tab-btn" data-tab="preview-build">Preview</button>
                </div>
                
                <div class="tab-content">
                    <div class="tab-pane active" id="html-build-tab">
                        <div class="code-templates">
                            <h6>Quick Templates:</h6>
                            <button onclick="HtmlCssDemo.insertSection('navigation')" class="template-btn">Navigation</button>
                            <button onclick="HtmlCssDemo.insertSection('hero')" class="template-btn">Hero Section</button>
                            <button onclick="HtmlCssDemo.insertSection('about')" class="template-btn">About</button>
                            <button onclick="HtmlCssDemo.insertSection('services')" class="template-btn">Services</button>
                            <button onclick="HtmlCssDemo.insertSection('contact')" class="template-btn">Contact</button>
                            <button onclick="HtmlCssDemo.insertSection('footer')" class="template-btn">Footer</button>
                        </div>
                        <textarea id="projectHtml" rows="20" placeholder="Build your HTML structure here..."><!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Website</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- Add your content here -->
</body>
</html></textarea>
                    </div>
                    
                    <div class="tab-pane" id="css-build-tab">
                        <div class="css-templates">
                            <h6>Style Templates:</h6>
                            <button onclick="HtmlCssDemo.insertStyle('reset')" class="template-btn">CSS Reset</button>
                            <button onclick="HtmlCssDemo.insertStyle('layout')" class="template-btn">Layout</button>
                            <button onclick="HtmlCssDemo.insertStyle('colors')" class="template-btn">Color Scheme</button>
                            <button onclick="HtmlCssDemo.insertStyle('typography')" class="template-btn">Typography</button>
                            <button onclick="HtmlCssDemo.insertStyle('responsive')" class="template-btn">Responsive</button>
                        </div>
                        <textarea id="projectCss" rows="20" placeholder="Add your CSS styles here...">/* Add your styles here */</textarea>
                    </div>
                    
                    <div class="tab-pane" id="preview-build-tab">
                        <div class="preview-controls">
                            <button onclick="HtmlCssDemo.updateProjectPreview()" class="update-btn">Update Preview</button>
                            <button onclick="HtmlCssDemo.downloadProject()" class="download-btn">Download Project</button>
                        </div>
                        <iframe id="projectPreview" class="project-frame"></iframe>
                    </div>
                </div>
            </div>
        `;
    }
    
    // Static methods for interactive elements
    static updatePreview() {
        const htmlCode = document.getElementById('htmlCode').value;
        const cssCode = document.getElementById('cssCode').value;
        const preview = document.getElementById('livePreview');
        
        const fullHtml = `
            <!DOCTYPE html>
            <html>
            <head>
                <style>${cssCode}</style>
            </head>
            <body>
                ${htmlCode}
            </body>
            </html>
        `;
        
        preview.srcdoc = fullHtml;
    }
    
    static generateElement() {
        const elementType = document.getElementById('elementType').value;
        const output = document.getElementById('htmlOutput');
        
        let html = '';
        switch (elementType) {
            case 'h1':
                html = '<h1>Your heading text here</h1>';
                break;
            case 'p':
                html = '<p>Your paragraph text here</p>';
                break;
            case 'div':
                html = '<div>Your content here</div>';
                break;
            case 'img':
                html = '<img src="image.jpg" alt="Description">';
                break;
            case 'a':
                html = '<a href="https://example.com">Link text</a>';
                break;
            case 'ul':
                html = '<ul>\n    <li>Item 1</li>\n    <li>Item 2</li>\n    <li>Item 3</li>\n</ul>';
                break;
        }
        
        output.textContent = html;
    }
    
    static validateHtml() {
        const html = document.getElementById('htmlToValidate').value;
        const results = document.getElementById('validationResults');
        
        // Simple HTML validation
        const errors = [];
        
        if (!html.includes('<!DOCTYPE html>')) {
            errors.push('Missing DOCTYPE declaration');
        }
        
        if (!html.includes('<html>') || !html.includes('</html>')) {
            errors.push('Missing html element');
        }
        
        if (!html.includes('<head>') || !html.includes('</head>')) {
            errors.push('Missing head element');
        }
        
        if (!html.includes('<body>') || !html.includes('</body>')) {
            errors.push('Missing body element');
        }
        
        if (errors.length === 0) {
            results.innerHTML = '<div class="validation-success">✅ HTML structure looks good!</div>';
        } else {
            results.innerHTML = `
                <div class="validation-errors">
                    <h6>❌ Issues found:</h6>
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
                           code.includes('<html>') && 
                           code.includes('<head>') &&
                           code.includes('<title>') &&
                           code.includes('<body>') &&
                           code.includes('<header>') &&
                           code.includes('<nav>') &&
                           code.includes('<main>') &&
                           code.includes('<footer>');
                feedbackText = isCorrect ? 
                    '✅ Perfect! You created a properly structured HTML page with all required elements.' : 
                    '❌ Make sure to include all required elements: DOCTYPE, html, head, title, body, header, nav, main, and footer.';
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
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = HtmlCssDemo;
}