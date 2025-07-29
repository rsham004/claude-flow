# Lesson 1.5: HTML Fundamentals and Semantic Structure

⏱️ **Duration**: 140 minutes  
🎯 **Objective**: Master HTML5 structure, semantic elements, and accessibility for professional web development  
📝 **Prerequisites**: Lesson 1.4 (Functions and Code Organization)

## 🎯 Learning Outcomes

By the end of this lesson, you will be able to:
- Build semantic HTML5 documents with proper structure
- Use appropriate HTML elements for different types of content
- Create accessible web forms with validation
- Implement SEO-friendly markup
- Understand and apply web accessibility principles
- Debug HTML validation errors
- Apply SPARC methodology to web page structure
- Build responsive, mobile-friendly HTML foundations

## 📚 Theory: HTML and Web Standards

### What is HTML?

HTML (HyperText Markup Language) is the foundation of all web pages. It provides structure and meaning to content, similar to how a building's framework provides structure for walls, rooms, and utilities.

HTML uses "elements" (tags) to mark up different types of content:
- **Headings** for titles and section headers
- **Paragraphs** for body text
- **Lists** for related items
- **Links** for navigation
- **Images** for visual content

### Why Semantic HTML Matters

Semantic HTML means using elements for their intended purpose, not just their appearance. This matters because:

1. **Accessibility**: Screen readers and assistive technologies understand content structure
2. **SEO**: Search engines better understand your content
3. **Maintainability**: Code is easier to read and modify
4. **Future-proofing**: Works across different devices and browsers
5. **Performance**: Faster loading and rendering

### SPARC Applied to HTML

**Specification**: What content needs to be displayed? What's the purpose of each section?  
**Pseudocode**: Outline the page structure in plain English  
**Architecture**: Plan the hierarchy and semantic meaning of elements  
**Refinement**: Optimize for accessibility, SEO, and maintainability  
**Completion**: Validate HTML and test across devices

## 🏗️ HTML5 Document Structure

### Basic HTML5 Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="A comprehensive guide to HTML fundamentals">
    <meta name="keywords" content="HTML, web development, semantic markup">
    <meta name="author" content="Your Name">
    <title>HTML Fundamentals - Learn Web Development</title>
    
    <!-- Open Graph tags for social media -->
    <meta property="og:title" content="HTML Fundamentals - Learn Web Development">
    <meta property="og:description" content="Master HTML5 structure and semantic elements">
    <meta property="og:image" content="https://example.com/preview-image.jpg">
    <meta property="og:url" content="https://example.com/html-fundamentals">
    
    <!-- Favicon -->
    <link rel="icon" type="image/x-icon" href="/favicon.ico">
    
    <!-- Stylesheets -->
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- Page content goes here -->
    
    <!-- Scripts -->
    <script src="script.js"></script>
</body>
</html>
```

### Understanding the Head Section

```html
<head>
    <!-- Character encoding - ALWAYS first in head -->
    <meta charset="UTF-8">
    
    <!-- Responsive design viewport -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!-- SEO meta tags -->
    <meta name="description" content="Concise description under 160 characters">
    <meta name="keywords" content="relevant, keywords, for, content">
    <meta name="robots" content="index, follow">
    
    <!-- Page title (shows in browser tab and search results) -->
    <title>Page Title - Keep under 60 characters</title>
    
    <!-- Preload critical resources for performance -->
    <link rel="preload" href="important-font.woff2" as="font" type="font/woff2" crossorigin>
    
    <!-- DNS prefetch for external domains -->
    <link rel="dns-prefetch" href="//fonts.googleapis.com">
    
    <!-- Stylesheet links -->
    <link rel="stylesheet" href="main.css">
    
    <!-- Structured data for rich snippets -->
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "HTML Fundamentals",
        "description": "Learn HTML5 structure and semantic elements"
    }
    </script>
</head>
```

## 🏢 Semantic HTML5 Elements

### Document Structure Elements

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Semantic HTML Example</title>
</head>
<body>
    <!-- Site header with navigation -->
    <header>
        <nav aria-label="Main navigation">
            <ul>
                <li><a href="/" aria-current="page">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
    </header>

    <!-- Main content area -->
    <main>
        <!-- Article content -->
        <article>
            <header>
                <h1>Understanding Semantic HTML</h1>
                <p>
                    <time datetime="2024-01-15">January 15, 2024</time> by 
                    <address>
                        <a rel="author" href="/author/jane-doe">Jane Doe</a>
                    </address>
                </p>
            </header>

            <section>
                <h2>What is Semantic HTML?</h2>
                <p>Semantic HTML uses elements that clearly describe their meaning...</p>
                
                <figure>
                    <img src="semantic-html-diagram.png" 
                         alt="Diagram showing semantic HTML structure"
                         width="600" 
                         height="400">
                    <figcaption>
                        Visual representation of semantic HTML structure
                    </figcaption>
                </figure>
            </section>

            <section>
                <h2>Benefits of Semantic Markup</h2>
                <ul>
                    <li><strong>Accessibility:</strong> Better screen reader support</li>
                    <li><strong>SEO:</strong> Search engines understand content better</li>
                    <li><strong>Maintainability:</strong> Code is self-documenting</li>
                </ul>
            </section>
        </article>

        <!-- Sidebar content -->
        <aside>
            <section>
                <h3>Related Articles</h3>
                <nav aria-label="Related articles">
                    <ul>
                        <li><a href="/css-fundamentals">CSS Fundamentals</a></li>
                        <li><a href="/javascript-basics">JavaScript Basics</a></li>
                        <li><a href="/web-accessibility">Web Accessibility</a></li>
                    </ul>
                </nav>
            </section>

            <section>
                <h3>Quick Tips</h3>
                <blockquote cite="https://developer.mozilla.org/en-US/docs/Web/HTML">
                    <p>"Use HTML elements for their semantic meaning, not their appearance."</p>
                    <footer>— MDN Web Docs</footer>
                </blockquote>
            </section>
        </aside>
    </main>

    <!-- Site footer -->
    <footer>
        <p>&copy; 2024 Web Development Course. All rights reserved.</p>
        <nav aria-label="Footer navigation">
            <ul>
                <li><a href="/privacy">Privacy Policy</a></li>
                <li><a href="/terms">Terms of Service</a></li>
                <li><a href="/sitemap">Sitemap</a></li>
            </ul>
        </nav>
    </footer>
</body>
</html>
```

### Content Elements

```html
<!-- Headings - Use hierarchically -->
<h1>Main Page Title</h1>
<h2>Section Title</h2>
<h3>Subsection Title</h3>
<h4>Sub-subsection Title</h4>
<h5>Minor Heading</h5>
<h6>Smallest Heading</h6>

<!-- Text content -->
<p>This is a paragraph with <strong>important text</strong> and <em>emphasized text</em>.</p>

<p>You can also use <mark>highlighted text</mark> and <small>fine print</small>.</p>

<p>For code: <code>console.log('Hello World')</code></p>

<p>For keyboard input: Press <kbd>Ctrl</kbd> + <kbd>S</kbd> to save.</p>

<!-- Preformatted text -->
<pre><code>
function greet(name) {
    console.log(`Hello, ${name}!`);
}
</code></pre>

<!-- Quotations -->
<blockquote cite="https://example.com/source">
    <p>"The best way to learn programming is by doing."</p>
    <footer>— <cite>Programming Wisdom</cite></footer>
</blockquote>

<p>As they say, <q>practice makes perfect</q>.</p>

<!-- Lists -->
<ul>
    <li>Unordered list item 1</li>
    <li>Unordered list item 2
        <ul>
            <li>Nested item 1</li>
            <li>Nested item 2</li>
        </ul>
    </li>
</ul>

<ol>
    <li>First step</li>
    <li>Second step</li>
    <li>Third step</li>
</ol>

<dl>
    <dt>HTML</dt>
    <dd>HyperText Markup Language</dd>
    <dt>CSS</dt>
    <dd>Cascading Style Sheets</dd>
    <dt>JS</dt>
    <dd>JavaScript</dd>
</dl>

<!-- Details and summary for collapsible content -->
<details>
    <summary>Click to expand more information</summary>
    <p>This content is hidden by default and can be expanded by clicking the summary.</p>
</details>
```

## 📝 Forms and User Input

### Comprehensive Form Example

```html
<form action="/submit-contact" method="POST" novalidate>
    <fieldset>
        <legend>Personal Information</legend>
        
        <!-- Text inputs -->
        <div class="form-group">
            <label for="first-name">First Name *</label>
            <input type="text" 
                   id="first-name" 
                   name="firstName" 
                   required 
                   autocomplete="given-name"
                   aria-describedby="first-name-help">
            <small id="first-name-help">Enter your first name</small>
        </div>

        <div class="form-group">
            <label for="last-name">Last Name *</label>
            <input type="text" 
                   id="last-name" 
                   name="lastName" 
                   required 
                   autocomplete="family-name">
        </div>

        <!-- Email input with validation -->
        <div class="form-group">
            <label for="email">Email Address *</label>
            <input type="email" 
                   id="email" 
                   name="email" 
                   required 
                   autocomplete="email"
                   aria-describedby="email-error"
                   pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$">
            <div id="email-error" class="error-message" aria-live="polite"></div>
        </div>

        <!-- Phone input -->
        <div class="form-group">
            <label for="phone">Phone Number</label>
            <input type="tel" 
                   id="phone" 
                   name="phone" 
                   autocomplete="tel"
                   placeholder="(555) 123-4567"
                   pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}">
        </div>

        <!-- Date input -->
        <div class="form-group">
            <label for="birth-date">Birth Date</label>
            <input type="date" 
                   id="birth-date" 
                   name="birthDate" 
                   autocomplete="bdate"
                   min="1900-01-01" 
                   max="2010-12-31">
        </div>
    </fieldset>

    <fieldset>
        <legend>Preferences</legend>
        
        <!-- Radio buttons -->
        <div class="form-group">
            <fieldset>
                <legend>Preferred Contact Method</legend>
                <div class="radio-group">
                    <input type="radio" id="contact-email" name="contactMethod" value="email" checked>
                    <label for="contact-email">Email</label>
                </div>
                <div class="radio-group">
                    <input type="radio" id="contact-phone" name="contactMethod" value="phone">
                    <label for="contact-phone">Phone</label>
                </div>
                <div class="radio-group">
                    <input type="radio" id="contact-mail" name="contactMethod" value="mail">
                    <label for="contact-mail">Postal Mail</label>
                </div>
            </fieldset>
        </div>

        <!-- Checkboxes -->
        <div class="form-group">
            <fieldset>
                <legend>Interests (select all that apply)</legend>
                <div class="checkbox-group">
                    <input type="checkbox" id="interest-web" name="interests" value="web-development">
                    <label for="interest-web">Web Development</label>
                </div>
                <div class="checkbox-group">
                    <input type="checkbox" id="interest-mobile" name="interests" value="mobile-development">
                    <label for="interest-mobile">Mobile Development</label>
                </div>
                <div class="checkbox-group">
                    <input type="checkbox" id="interest-design" name="interests" value="design">
                    <label for="interest-design">UI/UX Design</label>
                </div>
            </fieldset>
        </div>

        <!-- Select dropdown -->
        <div class="form-group">
            <label for="experience">Programming Experience</label>
            <select id="experience" name="experience" required>
                <option value="">Choose your level</option>
                <option value="beginner">Beginner (0-1 years)</option>
                <option value="intermediate">Intermediate (1-3 years)</option>
                <option value="advanced">Advanced (3-5 years)</option>
                <option value="expert">Expert (5+ years)</option>
            </select>
        </div>

        <!-- Range input -->
        <div class="form-group">
            <label for="budget">Project Budget Range: $<span id="budget-value">5000</span></label>
            <input type="range" 
                   id="budget" 
                   name="budget" 
                   min="1000" 
                   max="50000" 
                   step="1000" 
                   value="5000"
                   oninput="document.getElementById('budget-value').textContent = this.value">
        </div>
    </fieldset>

    <fieldset>
        <legend>Message</legend>
        
        <!-- Textarea -->
        <div class="form-group">
            <label for="message">Your Message *</label>
            <textarea id="message" 
                      name="message" 
                      required 
                      rows="5" 
                      cols="50"
                      maxlength="500"
                      placeholder="Tell us about your project..."
                      aria-describedby="message-counter"></textarea>
            <small id="message-counter">0/500 characters</small>
        </div>

        <!-- File upload -->
        <div class="form-group">
            <label for="portfolio">Portfolio/Resume (PDF only)</label>
            <input type="file" 
                   id="portfolio" 
                   name="portfolio" 
                   accept=".pdf"
                   aria-describedby="file-help">
            <small id="file-help">Maximum file size: 5MB</small>
        </div>
    </fieldset>

    <!-- Form submission -->
    <div class="form-group">
        <input type="checkbox" id="terms" name="terms" required>
        <label for="terms">I agree to the <a href="/terms" target="_blank">Terms of Service</a> *</label>
    </div>

    <div class="form-group">
        <input type="checkbox" id="newsletter" name="newsletter">
        <label for="newsletter">Subscribe to our newsletter</label>
    </div>

    <div class="form-actions">
        <button type="submit">Send Message</button>
        <button type="reset">Clear Form</button>
    </div>
</form>
```

### Form Validation with HTML5

```html
<!-- Built-in validation attributes -->
<input type="email" required>                    <!-- Required email -->
<input type="text" minlength="3" maxlength="20">  <!-- Length constraints -->
<input type="number" min="1" max="100">          <!-- Number range -->
<input type="url" pattern="https://.*">          <!-- Custom pattern -->

<!-- Custom validation messages -->
<input type="email" 
       required 
       title="Please enter a valid email address"
       oninvalid="this.setCustomValidity('Please enter a valid email')"
       oninput="this.setCustomValidity('')">
```

## 🎨 Media Elements

### Images with Responsive and Accessibility Features

```html
<!-- Basic image with alt text -->
<img src="web-development.jpg" 
     alt="Developer working on code in modern IDE"
     width="800" 
     height="600">

<!-- Responsive images with srcset -->
<img src="hero-image-800.jpg"
     srcset="hero-image-400.jpg 400w,
             hero-image-800.jpg 800w,
             hero-image-1200.jpg 1200w"
     sizes="(max-width: 600px) 400px,
            (max-width: 1000px) 800px,
            1200px"
     alt="Team collaborating on web development project"
     loading="lazy">

<!-- Picture element for art direction -->
<picture>
    <source media="(max-width: 600px)" srcset="mobile-hero.jpg">
    <source media="(max-width: 1024px)" srcset="tablet-hero.jpg">
    <img src="desktop-hero.jpg" alt="Responsive web design showcase">
</picture>

<!-- Figure with caption -->
<figure>
    <img src="code-example.png" 
         alt="JavaScript function demonstrating closure concept"
         width="600" 
         height="400">
    <figcaption>
        Example of a JavaScript closure that maintains private state
    </figcaption>
</figure>
```

### Audio and Video Elements

```html
<!-- Audio element with multiple sources -->
<audio controls preload="metadata">
    <source src="podcast-episode.mp3" type="audio/mpeg">
    <source src="podcast-episode.ogg" type="audio/ogg">
    <p>Your browser doesn't support audio. 
       <a href="podcast-episode.mp3">Download the audio file</a>.
    </p>
</audio>

<!-- Video element with captions -->
<video width="800" height="450" controls poster="video-thumbnail.jpg">
    <source src="tutorial-video.mp4" type="video/mp4">
    <source src="tutorial-video.webm" type="video/webm">
    <track kind="captions" 
           src="tutorial-captions-en.vtt" 
           srclang="en" 
           label="English captions"
           default>
    <track kind="captions" 
           src="tutorial-captions-es.vtt" 
           srclang="es" 
           label="Spanish captions">
    <p>Your browser doesn't support video. 
       <a href="tutorial-video.mp4">Download the video</a>.
    </p>
</video>

<!-- Embedded content -->
<iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
        width="560" 
        height="315" 
        title="Educational Video: HTML Fundamentals"
        frameborder="0" 
        allowfullscreen>
</iframe>
```

## ♿ Accessibility (A11y) Best Practices

### ARIA Attributes and Roles

```html
<!-- Landmarks for screen readers -->
<nav role="navigation" aria-label="Main site navigation">
    <ul>
        <li><a href="/" aria-current="page">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
</nav>

<!-- Live regions for dynamic content -->
<div id="status" aria-live="polite" aria-atomic="true">
    <!-- Status messages appear here -->
</div>

<div id="alerts" aria-live="assertive">
    <!-- Critical alerts appear here -->
</div>

<!-- Descriptive elements -->
<button aria-describedby="save-help">Save Document</button>
<div id="save-help">
    Saves your current document to the cloud storage
</div>

<!-- Expandable content -->
<button aria-expanded="false" 
        aria-controls="advanced-options"
        onclick="toggleAdvanced()">
    Advanced Options
</button>
<div id="advanced-options" hidden>
    <!-- Advanced options content -->
</div>

<!-- Complex widgets -->
<div role="tablist" aria-label="Settings categories">
    <button role="tab" 
            aria-selected="true" 
            aria-controls="general-panel" 
            id="general-tab">
        General
    </button>
    <button role="tab" 
            aria-selected="false" 
            aria-controls="privacy-panel" 
            id="privacy-tab">
        Privacy
    </button>
</div>

<div role="tabpanel" 
     id="general-panel" 
     aria-labelledby="general-tab">
    <!-- General settings content -->
</div>
```

### Focus Management

```html
<!-- Skip links for keyboard navigation -->
<a href="#main-content" class="skip-link">Skip to main content</a>
<a href="#navigation" class="skip-link">Skip to navigation</a>

<!-- Proper focus indicators -->
<style>
    .skip-link {
        position: absolute;
        top: -40px;
        left: 6px;
        background: #000;
        color: #fff;
        padding: 8px;
        text-decoration: none;
        transition: top 0.3s;
    }
    
    .skip-link:focus {
        top: 6px;
    }
    
    /* Ensure focus is visible */
    button:focus,
    input:focus,
    select:focus,
    textarea:focus,
    a:focus {
        outline: 2px solid #007cba;
        outline-offset: 2px;
    }
</style>

<!-- Logical tab order -->
<form>
    <input type="text" tabindex="1" placeholder="First field">
    <input type="text" tabindex="2" placeholder="Second field">
    <button type="submit" tabindex="3">Submit</button>
    <a href="/help" tabindex="4">Need help?</a>
</form>
```

## 🛠️ Hands-On Exercises

### Exercise 1: Personal Portfolio Website (60 minutes)

Create a complete portfolio website using semantic HTML.

#### SPARC Planning
**Specification**: Build a professional portfolio showcasing skills and projects  
**Pseudocode**:
```
1. Header with navigation
2. Hero section with introduction
3. About section with bio
4. Skills section with technical abilities
5. Projects section with portfolio items
6. Contact section with form
7. Footer with links and copyright
```

#### Implementation

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="John Doe - Web Developer Portfolio. Showcasing modern web development projects and skills.">
    <meta name="keywords" content="web developer, portfolio, HTML, CSS, JavaScript, frontend, fullstack">
    <meta name="author" content="John Doe">
    
    <!-- Open Graph tags -->
    <meta property="og:title" content="John Doe - Web Developer Portfolio">
    <meta property="og:description" content="Explore my web development projects and skills">
    <meta property="og:image" content="https://johndoe.dev/og-image.jpg">
    <meta property="og:url" content="https://johndoe.dev">
    <meta property="og:type" content="website">
    
    <title>John Doe - Web Developer Portfolio</title>
    
    <!-- Structured data for SEO -->
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "John Doe",
        "jobTitle": "Web Developer",
        "url": "https://johndoe.dev",
        "sameAs": [
            "https://github.com/johndoe",
            "https://linkedin.com/in/johndoe"
        ]
    }
    </script>
    
    <style>
        /* Basic styling for demonstration */
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
        .sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0,0,0,0); border: 0; }
        .skip-link { position: absolute; top: -40px; left: 6px; background: #000; color: #fff; padding: 8px; text-decoration: none; }
        .skip-link:focus { top: 6px; }
        header { background: #2c3e50; color: white; padding: 1rem 0; }
        nav ul { list-style: none; display: flex; gap: 2rem; }
        nav a { color: white; text-decoration: none; }
        section { padding: 3rem 0; }
        h1, h2, h3 { margin-bottom: 1rem; }
        .hero { background: #ecf0f1; text-align: center; }
        .skills-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem; }
        .project-card { border: 1px solid #ddd; padding: 1.5rem; border-radius: 8px; }
        .form-group { margin-bottom: 1rem; }
        label { display: block; margin-bottom: 0.5rem; }
        input, textarea, select { width: 100%; padding: 0.5rem; border: 1px solid #ddd; border-radius: 4px; }
        button { background: #3498db; color: white; padding: 1rem 2rem; border: none; border-radius: 4px; cursor: pointer; }
        footer { background: #2c3e50; color: white; text-align: center; padding: 2rem 0; }
    </style>
</head>
<body>
    <!-- Skip navigation links -->
    <a href="#main-content" class="skip-link">Skip to main content</a>
    <a href="#navigation" class="skip-link">Skip to navigation</a>

    <!-- Header and Navigation -->
    <header>
        <div class="container">
            <nav id="navigation" aria-label="Main navigation">
                <ul>
                    <li><a href="#hero" aria-current="page">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <!-- Main Content -->
    <main id="main-content">
        <!-- Hero Section -->
        <section id="hero" class="hero">
            <div class="container">
                <h1>John Doe</h1>
                <p>Full-Stack Web Developer</p>
                <p>Creating modern, accessible, and performant web experiences</p>
                
                <figure>
                    <img src="profile-photo.jpg" 
                         alt="Professional headshot of John Doe, smiling in business attire"
                         width="200" 
                         height="200"
                         loading="eager">
                </figure>
            </div>
        </section>

        <!-- About Section -->
        <section id="about">
            <div class="container">
                <h2>About Me</h2>
                <div class="about-content">
                    <p>
                        I'm a passionate web developer with 5 years of experience creating 
                        digital solutions that make a difference. I specialize in modern 
                        JavaScript frameworks and have a strong foundation in web standards 
                        and accessibility.
                    </p>
                    
                    <p>
                        When I'm not coding, you can find me contributing to open source 
                        projects, mentoring junior developers, or exploring the latest 
                        web technologies.
                    </p>

                    <details>
                        <summary>Education & Certifications</summary>
                        <dl>
                            <dt>Bachelor of Science in Computer Science</dt>
                            <dd>University of Technology, 2019</dd>
                            <dt>AWS Certified Developer</dt>
                            <dd>Amazon Web Services, 2022</dd>
                            <dt>Google Analytics Certified</dt>
                            <dd>Google, 2023</dd>
                        </dl>
                    </details>
                </div>
            </div>
        </section>

        <!-- Skills Section -->
        <section id="skills">
            <div class="container">
                <h2>Technical Skills</h2>
                <div class="skills-grid">
                    <article class="skill-category">
                        <h3>Frontend Development</h3>
                        <ul>
                            <li>HTML5 & Semantic Markup</li>
                            <li>CSS3 & Sass/SCSS</li>
                            <li>JavaScript (ES6+)</li>
                            <li>React & Vue.js</li>
                            <li>Responsive Design</li>
                            <li>Web Accessibility (WCAG)</li>
                        </ul>
                    </article>

                    <article class="skill-category">
                        <h3>Backend Development</h3>
                        <ul>
                            <li>Node.js & Express</li>
                            <li>Python & Django</li>
                            <li>Database Design (SQL/NoSQL)</li>
                            <li>RESTful APIs</li>
                            <li>GraphQL</li>
                            <li>Authentication & Security</li>
                        </ul>
                    </article>

                    <article class="skill-category">
                        <h3>Tools & Technologies</h3>
                        <ul>
                            <li>Git & GitHub</li>
                            <li>Docker & Kubernetes</li>
                            <li>AWS & Cloud Services</li>
                            <li>Webpack & Build Tools</li>
                            <li>Testing (Jest, Cypress)</li>
                            <li>CI/CD Pipelines</li>
                        </ul>
                    </article>
                </div>
            </div>
        </section>

        <!-- Projects Section -->
        <section id="projects">
            <div class="container">
                <h2>Featured Projects</h2>
                
                <article class="project-card">
                    <header>
                        <h3>E-Commerce Platform</h3>
                        <p>
                            <time datetime="2023-06">June 2023</time> - 
                            <time datetime="2023-09">September 2023</time>
                        </p>
                    </header>
                    
                    <figure>
                        <img src="ecommerce-project.jpg" 
                             alt="Screenshot of e-commerce website homepage showing product grid and navigation"
                             width="400" 
                             height="250"
                             loading="lazy">
                        <figcaption>Modern e-commerce platform with mobile-first design</figcaption>
                    </figure>
                    
                    <p>
                        A full-stack e-commerce solution built with React, Node.js, and MongoDB. 
                        Features include user authentication, payment processing, inventory management, 
                        and real-time order tracking.
                    </p>
                    
                    <h4>Technologies Used:</h4>
                    <ul>
                        <li>React with Redux for state management</li>
                        <li>Node.js and Express backend</li>
                        <li>MongoDB with Mongoose ODM</li>
                        <li>Stripe payment integration</li>
                        <li>JWT authentication</li>
                    </ul>
                    
                    <p>
                        <a href="https://github.com/johndoe/ecommerce-platform" 
                           target="_blank" 
                           rel="noopener noreferrer">
                            View Source Code
                        </a> | 
                        <a href="https://ecommerce-demo.johndoe.dev" 
                           target="_blank" 
                           rel="noopener noreferrer">
                            Live Demo
                        </a>
                    </p>
                </article>

                <article class="project-card">
                    <header>
                        <h3>Task Management App</h3>
                        <p>
                            <time datetime="2023-03">March 2023</time> - 
                            <time datetime="2023-05">May 2023</time>
                        </p>
                    </header>
                    
                    <figure>
                        <img src="task-app-project.jpg" 
                             alt="Task management application interface showing kanban board with drag-and-drop functionality"
                             width="400" 
                             height="250"
                             loading="lazy">
                        <figcaption>Collaborative task management with real-time updates</figcaption>
                    </figure>
                    
                    <p>
                        A collaborative task management application with real-time updates, 
                        drag-and-drop functionality, and team collaboration features. 
                        Built with modern web technologies and focusing on user experience.
                    </p>
                    
                    <h4>Key Features:</h4>
                    <ul>
                        <li>Real-time collaboration with WebSockets</li>
                        <li>Drag-and-drop task organization</li>
                        <li>Team management and permissions</li>
                        <li>Progressive Web App (PWA)</li>
                        <li>Offline functionality</li>
                    </ul>
                </article>
            </div>
        </section>
    </main>

    <!-- Contact Section -->
    <section id="contact">
        <div class="container">
            <h2>Get In Touch</h2>
            <p>I'm always interested in hearing about new opportunities and collaborations.</p>
            
            <form action="/contact" method="POST" novalidate>
                <div class="form-group">
                    <label for="contact-name">Name *</label>
                    <input type="text" 
                           id="contact-name" 
                           name="name" 
                           required 
                           autocomplete="name"
                           aria-describedby="name-help">
                    <small id="name-help">Please enter your full name</small>
                </div>

                <div class="form-group">
                    <label for="contact-email">Email Address *</label>
                    <input type="email" 
                           id="contact-email" 
                           name="email" 
                           required 
                           autocomplete="email">
                </div>

                <div class="form-group">
                    <label for="contact-subject">Subject</label>
                    <select id="contact-subject" name="subject">
                        <option value="">Select a topic</option>
                        <option value="project">Project Inquiry</option>
                        <option value="collaboration">Collaboration</option>
                        <option value="job">Job Opportunity</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                <div class="form-group">
                    <label for="contact-message">Message *</label>
                    <textarea id="contact-message" 
                              name="message" 
                              rows="5" 
                              required
                              placeholder="Tell me about your project or opportunity..."></textarea>
                </div>

                <button type="submit">Send Message</button>
            </form>

            <!-- Alternative contact methods -->
            <address>
                <h3>Other Ways to Reach Me</h3>
                <p>Email: <a href="mailto:john@johndoe.dev">john@johndoe.dev</a></p>
                <p>LinkedIn: <a href="https://linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer">linkedin.com/in/johndoe</a></p>
                <p>GitHub: <a href="https://github.com/johndoe" target="_blank" rel="noopener noreferrer">github.com/johndoe</a></p>
            </address>
        </div>
    </section>

    <!-- Footer -->
    <footer>
        <div class="container">
            <p>&copy; 2024 John Doe. All rights reserved.</p>
            <nav aria-label="Footer navigation">
                <ul>
                    <li><a href="/privacy">Privacy Policy</a></li>
                    <li><a href="/terms">Terms of Use</a></li>
                    <li><a href="/sitemap.xml">Sitemap</a></li>
                </ul>
            </nav>
        </div>
    </footer>

    <!-- JavaScript for form validation and interactions -->
    <script>
        // Basic form validation
        document.querySelector('form').addEventListener('submit', function(e) {
            const email = document.getElementById('contact-email');
            const name = document.getElementById('contact-name');
            const message = document.getElementById('contact-message');
            
            if (!email.validity.valid) {
                e.preventDefault();
                email.focus();
                alert('Please enter a valid email address');
            }
            
            if (name.value.trim().length < 2) {
                e.preventDefault();
                name.focus();
                alert('Please enter your full name');
            }
            
            if (message.value.trim().length < 10) {
                e.preventDefault();
                message.focus();
                alert('Please provide a more detailed message');
            }
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    </script>
</body>
</html>
```

### Exercise 2: Company Landing Page (50 minutes)

Create a professional company landing page with multiple sections and forms.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="TechFlow Solutions - Leading web development agency specializing in modern, scalable web applications and digital transformation.">
    <title>TechFlow Solutions - Web Development Agency</title>
    
    <style>
        /* Comprehensive styling for the landing page */
        :root {
            --primary-color: #2c3e50;
            --secondary-color: #3498db;
            --accent-color: #e74c3c;
            --text-color: #333;
            --bg-light: #ecf0f1;
            --bg-white: #ffffff;
        }
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: var(--text-color);
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }
        
        /* Header styles */
        .site-header {
            background: var(--bg-white);
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
            position: fixed;
            width: 100%;
            top: 0;
            z-index: 1000;
        }
        
        .header-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem 0;
        }
        
        .logo {
            font-size: 1.5rem;
            font-weight: bold;
            color: var(--primary-color);
        }
        
        .main-nav ul {
            display: flex;
            list-style: none;
            gap: 2rem;
        }
        
        .main-nav a {
            text-decoration: none;
            color: var(--text-color);
            font-weight: 500;
            transition: color 0.3s;
        }
        
        .main-nav a:hover {
            color: var(--secondary-color);
        }
        
        /* Hero section */
        .hero {
            background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
            color: white;
            padding: 8rem 0 4rem;
            text-align: center;
        }
        
        .hero h1 {
            font-size: 3rem;
            margin-bottom: 1rem;
        }
        
        .hero p {
            font-size: 1.2rem;
            margin-bottom: 2rem;
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
        }
        
        .cta-button {
            display: inline-block;
            background: var(--accent-color);
            color: white;
            padding: 1rem 2rem;
            text-decoration: none;
            border-radius: 5px;
            font-weight: bold;
            transition: transform 0.3s, box-shadow 0.3s;
        }
        
        .cta-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        }
        
        /* Services section */
        .services {
            padding: 4rem 0;
            background: var(--bg-light);
        }
        
        .services h2 {
            text-align: center;
            margin-bottom: 3rem;
            font-size: 2.5rem;
        }
        
        .services-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
        }
        
        .service-card {
            background: var(--bg-white);
            padding: 2rem;
            border-radius: 10px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
            text-align: center;
            transition: transform 0.3s;
        }
        
        .service-card:hover {
            transform: translateY(-5px);
        }
        
        .service-icon {
            font-size: 3rem;
            margin-bottom: 1rem;
        }
        
        /* About section */
        .about {
            padding: 4rem 0;
        }
        
        .about-content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 3rem;
            align-items: center;
        }
        
        /* Team section */
        .team {
            padding: 4rem 0;
            background: var(--bg-light);
        }
        
        .team-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
        }
        
        .team-member {
            background: var(--bg-white);
            padding: 2rem;
            border-radius: 10px;
            text-align: center;
        }
        
        .team-member img {
            width: 150px;
            height: 150px;
            border-radius: 50%;
            margin-bottom: 1rem;
            object-fit: cover;
        }
        
        /* Contact section */
        .contact {
            padding: 4rem 0;
        }
        
        .contact-content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 3rem;
        }
        
        .form-group {
            margin-bottom: 1rem;
        }
        
        .form-group label {
            display: block;
            margin-bottom: 0.5rem;
            font-weight: 500;
        }
        
        .form-group input,
        .form-group textarea,
        .form-group select {
            width: 100%;
            padding: 0.75rem;
            border: 1px solid #ddd;
            border-radius: 5px;
            font-size: 1rem;
        }
        
        .form-group textarea {
            height: 120px;
            resize: vertical;
        }
        
        .submit-btn {
            background: var(--secondary-color);
            color: white;
            padding: 1rem 2rem;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 1rem;
            transition: background 0.3s;
        }
        
        .submit-btn:hover {
            background: var(--primary-color);
        }
        
        /* Footer */
        .site-footer {
            background: var(--primary-color);
            color: white;
            padding: 3rem 0 1rem;
        }
        
        .footer-content {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
            margin-bottom: 2rem;
        }
        
        .footer-section h3 {
            margin-bottom: 1rem;
        }
        
        .footer-section ul {
            list-style: none;
        }
        
        .footer-section a {
            color: white;
            text-decoration: none;
        }
        
        .footer-bottom {
            text-align: center;
            padding-top: 2rem;
            border-top: 1px solid rgba(255,255,255,0.2);
        }
        
        /* Responsive design */
        @media (max-width: 768px) {
            .header-content {
                flex-direction: column;
                gap: 1rem;
            }
            
            .main-nav ul {
                flex-direction: column;
                text-align: center;
                gap: 1rem;
            }
            
            .hero h1 {
                font-size: 2rem;
            }
            
            .about-content,
            .contact-content {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <!-- Header -->
    <header class="site-header">
        <div class="container">
            <div class="header-content">
                <div class="logo">TechFlow Solutions</div>
                <nav class="main-nav" aria-label="Main navigation">
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#team">Team</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>

    <main>
        <!-- Hero Section -->
        <section id="home" class="hero">
            <div class="container">
                <h1>Transform Your Business with Modern Web Solutions</h1>
                <p>We create stunning, high-performance web applications that drive growth and deliver exceptional user experiences.</p>
                <a href="#contact" class="cta-button">Start Your Project</a>
            </div>
        </section>

        <!-- Services Section -->
        <section id="services" class="services">
            <div class="container">
                <h2>Our Services</h2>
                <div class="services-grid">
                    <article class="service-card">
                        <div class="service-icon" aria-hidden="true">🌐</div>
                        <h3>Web Development</h3>
                        <p>Custom web applications built with modern technologies like React, Vue.js, and Node.js. Scalable, secure, and optimized for performance.</p>
                        <ul>
                            <li>Frontend Development</li>
                            <li>Backend APIs</li>
                            <li>Database Design</li>
                            <li>Cloud Deployment</li>
                        </ul>
                    </article>

                    <article class="service-card">
                        <div class="service-icon" aria-hidden="true">📱</div>
                        <h3>Mobile Solutions</h3>
                        <p>Responsive web apps and progressive web applications that work seamlessly across all devices and platforms.</p>
                        <ul>
                            <li>Responsive Design</li>
                            <li>Progressive Web Apps</li>
                            <li>Mobile Optimization</li>
                            <li>Cross-Platform Testing</li>
                        </ul>
                    </article>

                    <article class="service-card">
                        <div class="service-icon" aria-hidden="true">⚡</div>
                        <h3>Performance Optimization</h3>
                        <p>Speed up your existing applications with our performance audit and optimization services. Improve user experience and SEO rankings.</p>
                        <ul>
                            <li>Performance Audits</li>
                            <li>Code Optimization</li>
                            <li>SEO Improvements</li>
                            <li>Accessibility Testing</li>
                        </ul>
                    </article>
                </div>
            </div>
        </section>

        <!-- About Section -->
        <section id="about" class="about">
            <div class="container">
                <div class="about-content">
                    <div>
                        <h2>About TechFlow Solutions</h2>
                        <p>With over 8 years of experience in web development, TechFlow Solutions has helped hundreds of businesses transform their digital presence. We specialize in creating modern, scalable web applications that drive real business results.</p>
                        
                        <h3>Why Choose Us?</h3>
                        <ul>
                            <li><strong>Expertise:</strong> Deep knowledge of modern web technologies</li>
                            <li><strong>Quality:</strong> Rigorous testing and code review processes</li>
                            <li><strong>Speed:</strong> Efficient development with agile methodologies</li>
                            <li><strong>Support:</strong> Ongoing maintenance and support services</li>
                        </ul>

                        <details>
                            <summary>Our Development Process</summary>
                            <ol>
                                <li><strong>Discovery:</strong> Understanding your business needs and goals</li>
                                <li><strong>Planning:</strong> Creating detailed project specifications and timelines</li>
                                <li><strong>Design:</strong> User experience and interface design</li>
                                <li><strong>Development:</strong> Agile development with regular updates</li>
                                <li><strong>Testing:</strong> Comprehensive quality assurance</li>
                                <li><strong>Launch:</strong> Deployment and go-live support</li>
                                <li><strong>Maintenance:</strong> Ongoing support and updates</li>
                            </ol>
                        </details>
                    </div>
                    
                    <figure>
                        <img src="team-collaboration.jpg" 
                             alt="TechFlow team collaborating on a web development project in modern office"
                             width="500" 
                             height="400"
                             loading="lazy">
                        <figcaption>Our team collaborating on innovative web solutions</figcaption>
                    </figure>
                </div>
            </div>
        </section>

        <!-- Team Section -->
        <section id="team" class="team">
            <div class="container">
                <h2>Meet Our Team</h2>
                <div class="team-grid">
                    <article class="team-member">
                        <img src="sarah-johnson.jpg" 
                             alt="Sarah Johnson, CEO and Lead Developer"
                             width="150" 
                             height="150"
                             loading="lazy">
                        <h3>Sarah Johnson</h3>
                        <p><strong>CEO & Lead Developer</strong></p>
                        <p>10+ years in web development, specializing in React and Node.js. Former senior engineer at Google.</p>
                        <address>
                            <a href="mailto:sarah@techflow.com">sarah@techflow.com</a>
                        </address>
                    </article>

                    <article class="team-member">
                        <img src="mike-chen.jpg" 
                             alt="Mike Chen, Frontend Specialist"
                             width="150" 
                             height="150"
                             loading="lazy">
                        <h3>Mike Chen</h3>
                        <p><strong>Frontend Specialist</strong></p>
                        <p>Expert in modern JavaScript frameworks and responsive design. Passionate about user experience and accessibility.</p>
                        <address>
                            <a href="mailto:mike@techflow.com">mike@techflow.com</a>
                        </address>
                    </article>

                    <article class="team-member">
                        <img src="lisa-martinez.jpg" 
                             alt="Lisa Martinez, UX/UI Designer"
                             width="150" 
                             height="150"
                             loading="lazy">
                        <h3>Lisa Martinez</h3>
                        <p><strong>UX/UI Designer</strong></p>
                        <p>Creates beautiful, intuitive user interfaces. Background in psychology and human-computer interaction.</p>
                        <address>
                            <a href="mailto:lisa@techflow.com">lisa@techflow.com</a>
                        </address>
                    </article>

                    <article class="team-member">
                        <img src="david-kim.jpg" 
                             alt="David Kim, Backend Engineer"
                             width="150" 
                             height="150"
                             loading="lazy">
                        <h3>David Kim</h3>
                        <p><strong>Backend Engineer</strong></p>
                        <p>Specializes in scalable server architecture and database optimization. Cloud infrastructure expert.</p>
                        <address>
                            <a href="mailto:david@techflow.com">david@techflow.com</a>
                        </address>
                    </article>
                </div>
            </div>
        </section>
    </main>

    <!-- Contact Section -->
    <section id="contact" class="contact">
        <div class="container">
            <h2>Get Started Today</h2>
            <div class="contact-content">
                <div>
                    <h3>Let's Discuss Your Project</h3>
                    <p>Ready to transform your business with a modern web solution? Get in touch with us today for a free consultation.</p>
                    
                    <h4>What You Can Expect:</h4>
                    <ul>
                        <li>✅ Free initial consultation</li>
                        <li>✅ Detailed project proposal</li>
                        <li>✅ Transparent pricing</li>
                        <li>✅ Regular progress updates</li>
                        <li>✅ Post-launch support</li>
                    </ul>

                    <address>
                        <h4>Contact Information</h4>
                        <p><strong>Phone:</strong> <a href="tel:+1234567890">(123) 456-7890</a></p>
                        <p><strong>Email:</strong> <a href="mailto:hello@techflow.com">hello@techflow.com</a></p>
                        <p><strong>Address:</strong> 123 Tech Street, Innovation District, San Francisco, CA 94105</p>
                    </address>
                </div>

                <form action="/contact" method="POST" novalidate>
                    <h3>Send Us a Message</h3>
                    
                    <div class="form-group">
                        <label for="company">Company Name</label>
                        <input type="text" 
                               id="company" 
                               name="company"
                               autocomplete="organization">
                    </div>

                    <div class="form-group">
                        <label for="contact-name">Your Name *</label>
                        <input type="text" 
                               id="contact-name" 
                               name="name" 
                               required
                               autocomplete="name">
                    </div>

                    <div class="form-group">
                        <label for="contact-email">Email Address *</label>
                        <input type="email" 
                               id="contact-email" 
                               name="email" 
                               required
                               autocomplete="email">
                    </div>

                    <div class="form-group">
                        <label for="phone">Phone Number</label>
                        <input type="tel" 
                               id="phone" 
                               name="phone"
                               autocomplete="tel">
                    </div>

                    <div class="form-group">
                        <label for="project-type">Project Type</label>
                        <select id="project-type" name="projectType">
                            <option value="">Select project type</option>
                            <option value="new-website">New Website</option>
                            <option value="redesign">Website Redesign</option>
                            <option value="web-app">Web Application</option>
                            <option value="e-commerce">E-commerce Site</option>
                            <option value="maintenance">Website Maintenance</option>
                            <option value="consultation">Consultation Only</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="budget">Estimated Budget</label>
                        <select id="budget" name="budget">
                            <option value="">Select budget range</option>
                            <option value="under-10k">Under $10,000</option>
                            <option value="10k-25k">$10,000 - $25,000</option>
                            <option value="25k-50k">$25,000 - $50,000</option>
                            <option value="50k-100k">$50,000 - $100,000</option>
                            <option value="over-100k">Over $100,000</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="timeline">Project Timeline</label>
                        <select id="timeline" name="timeline">
                            <option value="">Select timeline</option>
                            <option value="asap">ASAP</option>
                            <option value="1-3-months">1-3 months</option>
                            <option value="3-6-months">3-6 months</option>
                            <option value="6-12-months">6-12 months</option>
                            <option value="flexible">Flexible</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="message">Project Details *</label>
                        <textarea id="message" 
                                  name="message" 
                                  required
                                  placeholder="Tell us about your project goals, requirements, and any specific features you need..."></textarea>
                    </div>

                    <div class="form-group">
                        <input type="checkbox" id="newsletter" name="newsletter">
                        <label for="newsletter">Subscribe to our newsletter for web development tips and updates</label>
                    </div>

                    <button type="submit" class="submit-btn">Send Message</button>
                </form>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="site-footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>TechFlow Solutions</h3>
                    <p>Transforming businesses through innovative web solutions. Based in San Francisco, serving clients worldwide.</p>
                </div>

                <div class="footer-section">
                    <h3>Services</h3>
                    <ul>
                        <li><a href="#services">Web Development</a></li>
                        <li><a href="#services">Mobile Solutions</a></li>
                        <li><a href="#services">Performance Optimization</a></li>
                        <li><a href="/consulting">Consulting Services</a></li>
                    </ul>
                </div>

                <div class="footer-section">
                    <h3>Company</h3>
                    <ul>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#team">Our Team</a></li>
                        <li><a href="/careers">Careers</a></li>
                        <li><a href="/blog">Blog</a></li>
                    </ul>
                </div>

                <div class="footer-section">
                    <h3>Connect</h3>
                    <ul>
                        <li><a href="#contact">Contact Us</a></li>
                        <li><a href="mailto:hello@techflow.com">hello@techflow.com</a></li>
                        <li><a href="tel:+1234567890">(123) 456-7890</a></li>
                        <li><a href="/privacy">Privacy Policy</a></li>
                    </ul>
                </div>
            </div>

            <div class="footer-bottom">
                <p>&copy; 2024 TechFlow Solutions. All rights reserved.</p>
            </div>
        </div>
    </footer>

    <script>
        // Form validation and interaction
        document.addEventListener('DOMContentLoaded', function() {
            const form = document.querySelector('form');
            const nameField = document.getElementById('contact-name');
            const emailField = document.getElementById('contact-email');
            const messageField = document.getElementById('message');

            form.addEventListener('submit', function(e) {
                let isValid = true;
                
                // Reset previous error states
                document.querySelectorAll('.error').forEach(el => el.classList.remove('error'));
                
                // Validate name
                if (nameField.value.trim().length < 2) {
                    nameField.classList.add('error');
                    isValid = false;
                }
                
                // Validate email
                if (!emailField.validity.valid) {
                    emailField.classList.add('error');
                    isValid = false;
                }
                
                // Validate message
                if (messageField.value.trim().length < 10) {
                    messageField.classList.add('error');
                    isValid = false;
                }
                
                if (!isValid) {
                    e.preventDefault();
                    alert('Please fill in all required fields correctly.');
                }
            });

            // Smooth scrolling for navigation
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                });
            });
        });
    </script>
</body>
</html>
```

## 🐛 Common HTML Mistakes

### 1. Missing Alt Text
```html
<!-- Wrong -->
<img src="important-chart.png">

<!-- Right -->
<img src="important-chart.png" alt="Sales growth chart showing 25% increase over 6 months">
```

### 2. Incorrect Heading Hierarchy
```html
<!-- Wrong -->
<h1>Main Title</h1>
<h3>Skipped h2</h3>
<h2>Out of order</h2>

<!-- Right -->
<h1>Main Title</h1>
<h2>Section Title</h2>
<h3>Subsection Title</h3>
```

### 3. Form Labels Not Associated
```html
<!-- Wrong -->
<label>Email</label>
<input type="email" name="email">

<!-- Right -->
<label for="email">Email</label>
<input type="email" id="email" name="email">
```

## 📝 Assessment Questions

### Quick Knowledge Check
1. What's the difference between `<article>` and `<section>`?
2. When should you use `<strong>` vs `<b>`?
3. How do you make images responsive?
4. What attributes are essential for form accessibility?
5. Why is semantic HTML important for SEO?

### Problem-Solving Challenges
1. **Accessibility Audit**: Review an existing website and identify accessibility issues.
2. **Form Enhancement**: Add comprehensive validation to a contact form.
3. **SEO Optimization**: Optimize a page for search engines using semantic markup.

## 🚀 Challenge Project: Multi-Page Website

Create a complete multi-page website for a fictional business with proper navigation, forms, and content structure.

### Requirements:
1. Homepage with hero section and overview
2. About page with company history and team
3. Services/Products page with detailed listings
4. Contact page with multiple contact methods
5. Blog page with article listings
6. Consistent navigation and footer across all pages
7. Responsive design and accessibility features

## 📚 Additional Resources

### Documentation
- [MDN HTML Reference](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [HTML5 Specification](https://html.spec.whatwg.org/)
- [WebAIM Accessibility Guidelines](https://webaim.org/)

### Validation Tools
- [W3C HTML Validator](https://validator.w3.org/)
- [WAVE Accessibility Checker](https://wave.webaim.org/)
- [axe DevTools](https://www.deque.com/axe/devtools/)

## 🤔 Reflection Questions

1. **Semantic Meaning**: How do you decide which HTML element to use for different content?
2. **Accessibility**: What steps do you take to ensure your HTML is accessible to all users?
3. **SEO Impact**: How does semantic HTML improve search engine optimization?
4. **Future-Proofing**: How does semantic markup help with long-term maintenance?

## 🔗 Next Lesson Preview

In **Lesson 1.6: CSS Styling and Responsive Design**, we'll bring your HTML to life:
- **CSS fundamentals** - selectors, properties, and values
- **Responsive design** - mobile-first development
- **Layout techniques** - Flexbox and Grid
- **Modern CSS** - custom properties and animations
- **Design systems** - building consistent, scalable styles

---

**🎉 Excellent progress! You now have a solid foundation in HTML and can create well-structured, accessible web pages. This knowledge forms the backbone of all web development!**

**⏭️ Next Lesson**: CSS Styling and Responsive Design