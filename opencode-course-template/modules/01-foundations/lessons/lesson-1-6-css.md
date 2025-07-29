# Lesson 1.6: CSS Styling and Responsive Design

⏱️ **Duration**: 160 minutes  
🎯 **Objective**: Master CSS fundamentals, responsive design, and modern layout techniques for professional web styling  
📝 **Prerequisites**: Lesson 1.5 (HTML Fundamentals)

## 🎯 Learning Outcomes

By the end of this lesson, you will be able to:
- Style HTML elements using CSS selectors, properties, and values
- Create responsive layouts using Flexbox and CSS Grid
- Implement mobile-first responsive design principles
- Use CSS custom properties (variables) for maintainable styles
- Apply modern CSS techniques including animations and transitions
- Debug CSS layout issues effectively
- Follow CSS best practices and naming conventions
- Build a complete responsive website design system

## 📚 Theory: CSS and Visual Design

### What is CSS?

CSS (Cascading Style Sheets) is the language used to describe the presentation of HTML documents. While HTML provides structure and meaning, CSS controls the visual appearance - colors, fonts, layouts, animations, and responsive behavior.

CSS follows three core principles:
1. **Separation of Concerns**: Keep structure (HTML) separate from presentation (CSS)
2. **Cascading**: Styles can inherit and override each other based on specificity
3. **Responsive**: Designs adapt to different screen sizes and devices

### SPARC Applied to CSS

**Specification**: What visual design is needed? What devices must be supported?  
**Pseudocode**: Plan the layout structure and component styles  
**Architecture**: Organize CSS into logical modules and design systems  
**Refinement**: Optimize for performance and cross-browser compatibility  
**Completion**: Test across devices and validate accessibility

## 🎨 CSS Fundamentals

### CSS Syntax and Selectors

```css
/* Basic syntax: selector { property: value; } */

/* Element selector */
p {
    color: #333;
    font-size: 16px;
    line-height: 1.6;
}

/* Class selector */
.highlight {
    background-color: yellow;
    padding: 0.5rem;
}

/* ID selector */
#header {
    background-color: #2c3e50;
    color: white;
    padding: 2rem 0;
}

/* Attribute selector */
input[type="email"] {
    border: 2px solid #3498db;
}

/* Descendant selector */
.card p {
    margin-bottom: 1rem;
}

/* Child selector */
.nav > li {
    display: inline-block;
}

/* Pseudo-classes */
a:hover {
    color: #e74c3c;
    text-decoration: underline;
}

a:focus {
    outline: 2px solid #3498db;
}

/* Pseudo-elements */
p::first-line {
    font-weight: bold;
}

.quote::before {
    content: """;
    font-size: 2em;
}

/* Complex selectors */
.card:nth-child(odd) {
    background-color: #f8f9fa;
}

.button:not(.disabled):hover {
    transform: translateY(-2px);
}
```

### CSS Box Model

```css
/* Understanding the box model */
.box-model-example {
    /* Content dimensions */
    width: 300px;
    height: 200px;
    
    /* Padding - space inside the element */
    padding: 20px; /* All sides */
    padding: 10px 20px; /* top/bottom left/right */
    padding: 10px 15px 20px 25px; /* top right bottom left */
    
    /* Border - edge of the element */
    border: 2px solid #333;
    border-top: 1px solid #ccc;
    border-radius: 8px;
    
    /* Margin - space outside the element */
    margin: 20px auto; /* top/bottom left/right */
    margin-bottom: 2rem;
    
    /* Box sizing control */
    box-sizing: border-box; /* Include padding and border in width */
}

/* Reset default margins and paddings */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
```

### Typography and Text Styling

```css
/* Font properties */
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.6;
    color: #333;
}

/* Headings hierarchy */
h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    margin-bottom: 1rem;
    line-height: 1.2;
}

h1 { font-size: 2.5rem; }
h2 { font-size: 2rem; }
h3 { font-size: 1.75rem; }
h4 { font-size: 1.5rem; }
h5 { font-size: 1.25rem; }
h6 { font-size: 1rem; }

/* Text styling */
.text-styles {
    text-align: center;
    text-decoration: underline;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    word-spacing: 0.2em;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

/* Custom fonts */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&display=swap');

.custom-font {
    font-family: 'Inter', sans-serif;
    font-weight: 500;
}
```

## 📱 Responsive Design Principles

### Mobile-First Approach

```css
/* Base styles - mobile first */
.container {
    width: 100%;
    padding: 0 1rem;
    margin: 0 auto;
}

.nav {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.hero-title {
    font-size: 1.5rem;
    text-align: center;
}

/* Tablet styles */
@media (min-width: 768px) {
    .container {
        max-width: 750px;
        padding: 0 2rem;
    }
    
    .nav {
        flex-direction: row;
        justify-content: space-between;
    }
    
    .hero-title {
        font-size: 2rem;
        text-align: left;
    }
}

/* Desktop styles */
@media (min-width: 1024px) {
    .container {
        max-width: 1200px;
    }
    
    .hero-title {
        font-size: 3rem;
    }
}

/* Large desktop */
@media (min-width: 1440px) {
    .container {
        max-width: 1400px;
    }
}
```

### Responsive Images and Media

```css
/* Responsive images */
img {
    max-width: 100%;
    height: auto;
    display: block;
}

/* Picture element styling */
picture {
    display: block;
    width: 100%;
}

/* Responsive video */
.video-container {
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 56.25%; /* 16:9 aspect ratio */
}

.video-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

/* Media queries for different contexts */
@media (prefers-reduced-motion: reduce) {
    * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
    }
}

@media (prefers-color-scheme: dark) {
    body {
        background-color: #121212;
        color: #ffffff;
    }
}
```

## 🔧 Modern Layout Techniques

### Flexbox Layouts

```css
/* Flex container */
.flex-container {
    display: flex;
    flex-direction: row; /* row | column */
    justify-content: center; /* flex-start | flex-end | center | space-between | space-around | space-evenly */
    align-items: center; /* flex-start | flex-end | center | stretch | baseline */
    flex-wrap: wrap; /* nowrap | wrap | wrap-reverse */
    gap: 1rem; /* Modern gap property */
}

/* Flex items */
.flex-item {
    flex: 1; /* flex-grow: 1, flex-shrink: 1, flex-basis: 0% */
    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: 200px;
}

/* Common flexbox patterns */

/* Navigation bar */
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
}

.nav-links {
    display: flex;
    gap: 2rem;
    list-style: none;
}

/* Card layout */
.card-container {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;
}

.card {
    flex: 1 1 300px; /* grow, shrink, basis */
    max-width: 400px;
    min-width: 250px;
}

/* Centered content */
.centered {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}

/* Sidebar layout */
.sidebar-layout {
    display: flex;
    gap: 2rem;
}

.sidebar {
    flex: 0 0 250px; /* Fixed width sidebar */
}

.main-content {
    flex: 1; /* Take remaining space */
}
```

### CSS Grid Layouts

```css
/* Grid container */
.grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* 3 equal columns */
    grid-template-rows: auto 1fr auto; /* header, content, footer */
    grid-gap: 2rem; /* gap between grid items */
    min-height: 100vh;
}

/* Grid areas */
.grid-layout {
    display: grid;
    grid-template-areas: 
        "header header header"
        "sidebar main main"
        "footer footer footer";
    grid-template-columns: 250px 1fr 1fr;
    grid-template-rows: auto 1fr auto;
    gap: 1rem;
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.footer { grid-area: footer; }

/* Responsive grid */
.responsive-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

/* Complex grid layouts */
.magazine-layout {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 200px);
    gap: 1rem;
}

.featured-article {
    grid-column: 1 / 3; /* Span 2 columns */
    grid-row: 1 / 3; /* Span 2 rows */
}

.sidebar-ad {
    grid-column: 4;
    grid-row: 1 / -1; /* Span all rows */
}

/* Grid alignment */
.grid-alignment {
    display: grid;
    place-items: center; /* justify-items and align-items: center */
    place-content: center; /* justify-content and align-content: center */
}
```

## 🎨 Advanced CSS Features

### CSS Custom Properties (Variables)

```css
/* Define custom properties */
:root {
    /* Colors */
    --primary-color: #3498db;
    --secondary-color: #2ecc71;
    --accent-color: #e74c3c;
    --text-color: #333333;
    --bg-color: #ffffff;
    --border-color: #dddddd;
    
    /* Typography */
    --font-family-base: 'Inter', sans-serif;
    --font-family-heading: 'Georgia', serif;
    --font-size-base: 1rem;
    --font-size-small: 0.875rem;
    --font-size-large: 1.125rem;
    --line-height-base: 1.6;
    
    /* Spacing */
    --spacing-xs: 0.25rem;
    --spacing-sm: 0.5rem;
    --spacing-md: 1rem;
    --spacing-lg: 2rem;
    --spacing-xl: 4rem;
    
    /* Layout */
    --container-max-width: 1200px;
    --border-radius: 8px;
    --box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    
    /* Transitions */
    --transition-fast: 0.15s ease-in-out;
    --transition-base: 0.3s ease-in-out;
    --transition-slow: 0.5s ease-in-out;
}

/* Dark theme override */
[data-theme="dark"] {
    --primary-color: #5dade2;
    --text-color: #ffffff;
    --bg-color: #121212;
    --border-color: #333333;
}

/* Using custom properties */
.button {
    background-color: var(--primary-color);
    color: var(--bg-color);
    padding: var(--spacing-sm) var(--spacing-md);
    border: 1px solid var(--border-color);
    border-radius: var(--border-radius);
    font-family: var(--font-family-base);
    transition: all var(--transition-base);
}

.button:hover {
    background-color: var(--secondary-color);
    transform: translateY(-2px);
    box-shadow: var(--box-shadow);
}

/* Responsive custom properties */
@media (min-width: 768px) {
    :root {
        --font-size-base: 1.125rem;
        --spacing-md: 1.5rem;
        --spacing-lg: 3rem;
    }
}
```

### Animations and Transitions

```css
/* Transitions */
.smooth-transition {
    transition: all 0.3s ease-in-out;
}

.button-transition {
    background-color: var(--primary-color);
    transform: translateY(0);
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    transition: 
        background-color 0.3s ease,
        transform 0.2s ease,
        box-shadow 0.3s ease;
}

.button-transition:hover {
    background-color: var(--secondary-color);
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
}

/* Keyframe animations */
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes slideInFromLeft {
    from {
        transform: translateX(-100%);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
}

@keyframes pulse {
    0%, 100% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.05);
    }
}

/* Applying animations */
.fade-in {
    animation: fadeIn 0.6s ease-out forwards;
}

.slide-in {
    animation: slideInFromLeft 0.8s ease-out;
}

.pulse-animation {
    animation: pulse 2s infinite;
}

/* Animation delays and staggering */
.card:nth-child(1) { animation-delay: 0.1s; }
.card:nth-child(2) { animation-delay: 0.2s; }
.card:nth-child(3) { animation-delay: 0.3s; }
.card:nth-child(4) { animation-delay: 0.4s; }

/* Loading spinner */
@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}

.spinner {
    width: 40px;
    height: 40px;
    border: 4px solid #f3f3f3;
    border-top: 4px solid var(--primary-color);
    border-radius: 50%;
    animation: spin 1s linear infinite;
}
```

## 🛠️ Complete Responsive Website Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Modern Responsive Website</title>
    <style>
        /* CSS Custom Properties */
        :root {
            --primary-color: #2c3e50;
            --secondary-color: #3498db;
            --accent-color: #e74c3c;
            --text-color: #333;
            --text-light: #666;
            --bg-color: #ffffff;
            --bg-light: #f8f9fa;
            --border-color: #e9ecef;
            
            --font-primary: 'Inter', system-ui, sans-serif;
            --font-secondary: 'Georgia', serif;
            
            --spacing-xs: 0.5rem;
            --spacing-sm: 1rem;
            --spacing-md: 2rem;
            --spacing-lg: 4rem;
            --spacing-xl: 6rem;
            
            --border-radius: 8px;
            --box-shadow: 0 2px 20px rgba(0,0,0,0.1);
            --transition: all 0.3s ease;
        }

        /* Reset and base styles */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: var(--font-primary);
            line-height: 1.6;
            color: var(--text-color);
            background-color: var(--bg-color);
        }

        img {
            max-width: 100%;
            height: auto;
            display: block;
        }

        a {
            text-decoration: none;
            color: inherit;
        }

        /* Container */
        .container {
            width: 100%;
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 var(--spacing-sm);
        }

        /* Header */
        .header {
            background: var(--bg-color);
            box-shadow: var(--box-shadow);
            position: fixed;
            top: 0;
            width: 100%;
            z-index: 1000;
        }

        .header-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: var(--spacing-sm) 0;
        }

        .logo {
            font-size: 1.5rem;
            font-weight: 700;
            color: var(--primary-color);
        }

        .nav {
            display: none;
        }

        .nav ul {
            display: flex;
            list-style: none;
            gap: var(--spacing-md);
        }

        .nav a {
            font-weight: 500;
            transition: var(--transition);
        }

        .nav a:hover {
            color: var(--secondary-color);
        }

        .mobile-menu-toggle {
            display: block;
            background: none;
            border: none;
            font-size: 1.5rem;
            cursor: pointer;
        }

        /* Hero Section */
        .hero {
            background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
            color: white;
            padding: var(--spacing-xl) 0 var(--spacing-lg);
            margin-top: 70px;
            text-align: center;
        }

        .hero h1 {
            font-size: 2rem;
            margin-bottom: var(--spacing-sm);
            animation: fadeInUp 0.8s ease-out;
        }

        .hero p {
            font-size: 1.1rem;
            margin-bottom: var(--spacing-md);
            opacity: 0.9;
            animation: fadeInUp 0.8s ease-out 0.2s both;
        }

        .cta-button {
            display: inline-block;
            background: var(--accent-color);
            color: white;
            padding: var(--spacing-sm) var(--spacing-md);
            border-radius: var(--border-radius);
            font-weight: 600;
            transition: var(--transition);
            animation: fadeInUp 0.8s ease-out 0.4s both;
        }

        .cta-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 20px rgba(231, 76, 60, 0.3);
        }

        /* Features Section */
        .features {
            padding: var(--spacing-lg) 0;
            background: var(--bg-light);
        }

        .section-title {
            text-align: center;
            font-size: 2rem;
            margin-bottom: var(--spacing-lg);
            color: var(--primary-color);
        }

        .features-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: var(--spacing-md);
        }

        .feature-card {
            background: var(--bg-color);
            padding: var(--spacing-md);
            border-radius: var(--border-radius);
            box-shadow: var(--box-shadow);
            text-align: center;
            transition: var(--transition);
        }

        .feature-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 30px rgba(0,0,0,0.15);
        }

        .feature-icon {
            font-size: 3rem;
            margin-bottom: var(--spacing-sm);
        }

        .feature-card h3 {
            margin-bottom: var(--spacing-sm);
            color: var(--primary-color);
        }

        .feature-card p {
            color: var(--text-light);
        }

        /* Portfolio Section */
        .portfolio {
            padding: var(--spacing-lg) 0;
        }

        .portfolio-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: var(--spacing-md);
        }

        .portfolio-item {
            position: relative;
            border-radius: var(--border-radius);
            overflow: hidden;
            box-shadow: var(--box-shadow);
            transition: var(--transition);
        }

        .portfolio-item:hover {
            transform: scale(1.02);
        }

        .portfolio-item img {
            width: 100%;
            height: 250px;
            object-fit: cover;
        }

        .portfolio-overlay {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(44, 62, 80, 0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            transition: var(--transition);
        }

        .portfolio-item:hover .portfolio-overlay {
            opacity: 1;
        }

        .portfolio-overlay h3 {
            color: white;
            font-size: 1.5rem;
        }

        /* Contact Section */
        .contact {
            padding: var(--spacing-lg) 0;
            background: var(--bg-light);
        }

        .contact-form {
            max-width: 600px;
            margin: 0 auto;
        }

        .form-group {
            margin-bottom: var(--spacing-sm);
        }

        .form-group label {
            display: block;
            margin-bottom: 0.5rem;
            font-weight: 500;
        }

        .form-group input,
        .form-group textarea {
            width: 100%;
            padding: var(--spacing-sm);
            border: 1px solid var(--border-color);
            border-radius: var(--border-radius);
            font-family: var(--font-primary);
            transition: var(--transition);
        }

        .form-group input:focus,
        .form-group textarea:focus {
            outline: none;
            border-color: var(--secondary-color);
            box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.1);
        }

        .submit-btn {
            background: var(--secondary-color);
            color: white;
            padding: var(--spacing-sm) var(--spacing-md);
            border: none;
            border-radius: var(--border-radius);
            cursor: pointer;
            font-size: 1rem;
            font-weight: 600;
            transition: var(--transition);
        }

        .submit-btn:hover {
            background: var(--primary-color);
            transform: translateY(-2px);
        }

        /* Footer */
        .footer {
            background: var(--primary-color);
            color: white;
            text-align: center;
            padding: var(--spacing-md) 0;
        }

        /* Animations */
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        /* Media Queries */
        @media (min-width: 768px) {
            .nav {
                display: block;
            }
            
            .mobile-menu-toggle {
                display: none;
            }
            
            .hero h1 {
                font-size: 3rem;
            }
            
            .features-grid {
                grid-template-columns: repeat(2, 1fr);
            }
            
            .portfolio-grid {
                grid-template-columns: repeat(2, 1fr);
            }
        }

        @media (min-width: 1024px) {
            .container {
                padding: 0 var(--spacing-md);
            }
            
            .features-grid {
                grid-template-columns: repeat(3, 1fr);
            }
            
            .portfolio-grid {
                grid-template-columns: repeat(3, 1fr);
            }
        }

        @media (min-width: 1200px) {
            .hero h1 {
                font-size: 3.5rem;
            }
        }

        /* Dark mode support */
        @media (prefers-color-scheme: dark) {
            :root {
                --text-color: #f8f9fa;
                --text-light: #adb5bd;
                --bg-color: #121212;
                --bg-light: #1e1e1e;
                --border-color: #343a40;
            }
        }

        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
            * {
                animation-duration: 0.01ms !important;
                animation-iteration-count: 1 !important;
                transition-duration: 0.01ms !important;
            }
        }
    </style>
</head>
<body>
    <!-- Header -->
    <header class="header">
        <div class="container">
            <div class="header-content">
                <div class="logo">ModernWeb</div>
                <nav class="nav">
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#features">Features</a></li>
                        <li><a href="#portfolio">Portfolio</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
                <button class="mobile-menu-toggle">☰</button>
            </div>
        </div>
    </header>

    <!-- Hero Section -->
    <section id="home" class="hero">
        <div class="container">
            <h1>Beautiful Responsive Websites</h1>
            <p>Creating modern, accessible, and high-performance web experiences that engage and convert.</p>
            <a href="#contact" class="cta-button">Get Started</a>
        </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="features">
        <div class="container">
            <h2 class="section-title">Why Choose Us</h2>
            <div class="features-grid">
                <div class="feature-card">
                    <div class="feature-icon">📱</div>
                    <h3>Responsive Design</h3>
                    <p>Mobile-first approach ensuring perfect display on all devices and screen sizes.</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">⚡</div>
                    <h3>Fast Performance</h3>
                    <p>Optimized code and modern techniques for lightning-fast loading speeds.</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">♿</div>
                    <h3>Accessibility</h3>
                    <p>WCAG compliant designs that work for everyone, including users with disabilities.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Portfolio Section -->
    <section id="portfolio" class="portfolio">
        <div class="container">
            <h2 class="section-title">Our Work</h2>
            <div class="portfolio-grid">
                <div class="portfolio-item">
                    <img src="https://picsum.photos/400/250?random=1" alt="E-commerce Website">
                    <div class="portfolio-overlay">
                        <h3>E-commerce Platform</h3>
                    </div>
                </div>
                <div class="portfolio-item">
                    <img src="https://picsum.photos/400/250?random=2" alt="Corporate Website">
                    <div class="portfolio-overlay">
                        <h3>Corporate Website</h3>
                    </div>
                </div>
                <div class="portfolio-item">
                    <img src="https://picsum.photos/400/250?random=3" alt="Portfolio Site">
                    <div class="portfolio-overlay">
                        <h3>Portfolio Site</h3>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="contact">
        <div class="container">
            <h2 class="section-title">Let's Work Together</h2>
            <form class="contact-form">
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" id="name" name="name" required>
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" required>
                </div>
                <div class="form-group">
                    <label for="message">Message</label>
                    <textarea id="message" name="message" rows="5" required></textarea>
                </div>
                <button type="submit" class="submit-btn">Send Message</button>
            </form>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <p>&copy; 2024 ModernWeb. All rights reserved.</p>
        </div>
    </footer>

    <script>
        // Add smooth scrolling for navigation links
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

        // Add scroll effect to header
        window.addEventListener('scroll', () => {
            const header = document.querySelector('.header');
            if (window.scrollY > 100) {
                header.style.background = 'rgba(255, 255, 255, 0.95)';
                header.style.backdropFilter = 'blur(10px)';
            } else {
                header.style.background = 'var(--bg-color)';
                header.style.backdropFilter = 'none';
            }
        });

        // Form submission
        document.querySelector('.contact-form').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! We\'ll get back to you soon.');
            this.reset();
        });
    </script>
</body>
</html>
```

## 📝 Assessment Questions

### Quick Knowledge Check
1. What's the difference between Flexbox and CSS Grid?
2. How does the CSS cascade work with specificity?
3. What are CSS custom properties and how do they help?
4. When should you use `rem` vs `em` vs `px`?
5. How do you make images responsive?

### Problem-Solving Challenges
1. **Layout Debugging**: Fix a broken responsive layout
2. **Performance Optimization**: Improve CSS loading and rendering
3. **Cross-browser Compatibility**: Handle browser-specific issues

## 🚀 Challenge Project: Design System

Create a complete design system with reusable components, color schemes, typography, and responsive patterns.

### Requirements:
1. Color palette with semantic naming
2. Typography scale and hierarchy
3. Component library (buttons, cards, forms, navigation)
4. Responsive grid system
5. Animation and transition library
6. Dark/light theme support
7. Accessibility considerations

## 📚 Additional Resources

### Documentation
- [MDN CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [CSS Grid Complete Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [Flexbox Complete Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

### Tools
- [Can I Use](https://caniuse.com/) - Browser compatibility
- [CSS Validator](https://jigsaw.w3.org/css-validator/)
- [Responsive Design Checker](https://responsivedesignchecker.com/)

---

**🎉 Fantastic work! You now have comprehensive CSS skills and can create beautiful, responsive websites. These styling techniques will make your web projects stand out!**

**⏭️ Next Lesson**: JavaScript DOM Manipulation and Events