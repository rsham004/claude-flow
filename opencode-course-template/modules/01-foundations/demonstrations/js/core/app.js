/**
 * OpenCode Interactive Demonstrations - Main Application
 * Manages the overall application state and coordination between components
 */

class OpenCodeApp {
    constructor() {
        this.currentDemo = 'variables';
        this.theme = localStorage.getItem('opencode-theme') || 'light';
        this.progressTracker = null;
        this.consoleEngine = null;
        this.demoLoader = null;
        this.isInitialized = false;
        
        // Application state
        this.state = {
            completedDemos: this.getCompletedDemos(),
            currentStep: 0,
            totalSteps: 0,
            timeSpent: 0,
            achievements: this.getAchievements(),
            preferences: this.getPreferences()
        };
        
        // Bind methods
        this.handleNavigation = this.handleNavigation.bind(this);
        this.handleThemeToggle = this.handleThemeToggle.bind(this);
        this.handleProgressToggle = this.handleProgressToggle.bind(this);
        this.handleHelpToggle = this.handleHelpToggle.bind(this);
        this.handleKeyboardShortcuts = this.handleKeyboardShortcuts.bind(this);
    }
    
    /**
     * Initialize the application
     */
    static init() {
        if (window.OpenCodeApp?.isInitialized) {
            return window.OpenCodeApp;
        }
        
        window.OpenCodeApp = new OpenCodeApp();
        window.OpenCodeApp.initialize();
        return window.OpenCodeApp;
    }
    
    /**
     * Initialize all components and event listeners
     */
    async initialize() {
        try {
            this.showLoading('Initializing OpenCode Demonstrations...');
            
            // Apply theme
            this.applyTheme();
            
            // Initialize core components
            await this.initializeComponents();
            
            // Set up event listeners
            this.setupEventListeners();
            
            // Load initial demo
            await this.loadDemo(this.currentDemo);
            
            // Start time tracking
            this.startTimeTracking();
            
            this.isInitialized = true;
            this.hideLoading();
            
            // Show welcome message
            this.showToast('Welcome to OpenCode Foundations! 🚀', 'success');
            
            console.log('OpenCode App initialized successfully');
        } catch (error) {
            console.error('Failed to initialize OpenCode App:', error);
            this.showToast('Failed to initialize application. Please refresh the page.', 'error');
        }
    }
    
    /**
     * Initialize core components
     */
    async initializeComponents() {
        // Initialize progress tracker
        this.progressTracker = new ProgressTracker(this.state);
        
        // Initialize console engine
        this.consoleEngine = new ConsoleEngine();
        
        // Initialize demo loader
        this.demoLoader = new DemoLoader();
        
        // Update progress display
        this.updateProgressDisplay();
    }
    
    /**
     * Set up event listeners
     */
    setupEventListeners() {
        // Navigation buttons
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.addEventListener('click', this.handleNavigation);
        });
        
        // Theme toggle
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', this.handleThemeToggle);
        }
        
        // Progress toggle
        const progressBtn = document.getElementById('progressBtn');
        if (progressBtn) {
            progressBtn.addEventListener('click', this.handleProgressToggle);
        }
        
        // Help toggle
        const helpToggle = document.getElementById('helpToggle');
        if (helpToggle) {
            helpToggle.addEventListener('click', this.handleHelpToggle);
        }
        
        // Close progress panel
        const closeProgress = document.getElementById('closeProgress');
        if (closeProgress) {
            closeProgress.addEventListener('click', () => {
                document.getElementById('progressTracker').classList.remove('open');
            });
        }
        
        // Keyboard shortcuts
        document.addEventListener('keydown', this.handleKeyboardShortcuts);
        
        // Window events
        window.addEventListener('beforeunload', () => {
            this.saveState();
        });
        
        // Console events
        const runCode = document.getElementById('runCode');
        const clearConsole = document.getElementById('clearConsole');
        const languageSelect = document.getElementById('languageSelect');
        
        if (runCode) {
            runCode.addEventListener('click', () => {
                this.consoleEngine.runCode();
            });
        }
        
        if (clearConsole) {
            clearConsole.addEventListener('click', () => {
                this.consoleEngine.clearOutput();
            });
        }
        
        if (languageSelect) {
            languageSelect.addEventListener('change', (e) => {
                this.consoleEngine.setLanguage(e.target.value);
            });
        }
    }
    
    /**
     * Handle navigation between demonstrations
     */
    async handleNavigation(event) {
        const demoType = event.target.dataset.demo;
        if (!demoType || demoType === this.currentDemo) {
            return;
        }
        
        // Update active navigation
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        event.target.classList.add('active');
        
        // Load new demo
        await this.loadDemo(demoType);
    }
    
    /**
     * Load a demonstration
     */
    async loadDemo(demoType) {
        try {
            this.showLoading(`Loading ${this.getDemoTitle(demoType)}...`);
            
            // Save current progress
            this.saveCurrentProgress();
            
            // Load new demo
            await this.demoLoader.loadDemo(demoType);
            
            this.currentDemo = demoType;
            this.state.currentStep = 0;
            
            // Update help content
            this.updateHelpContent(demoType);
            
            this.hideLoading();
        } catch (error) {
            console.error('Failed to load demo:', error);
            this.showToast(`Failed to load ${this.getDemoTitle(demoType)}`, 'error');
            this.hideLoading();
        }
    }
    
    /**
     * Handle theme toggle
     */
    handleThemeToggle() {
        const themes = ['light', 'dark', 'high-contrast'];
        const currentIndex = themes.indexOf(this.theme);
        const nextIndex = (currentIndex + 1) % themes.length;
        
        this.theme = themes[nextIndex];
        this.applyTheme();
        this.savePreferences();
        
        const themeNames = {
            light: 'Light Theme',
            dark: 'Dark Theme',
            'high-contrast': 'High Contrast Theme'
        };
        
        this.showToast(`Switched to ${themeNames[this.theme]}`, 'info');
    }
    
    /**
     * Apply current theme
     */
    applyTheme() {
        document.documentElement.setAttribute('data-theme', this.theme);
        localStorage.setItem('opencode-theme', this.theme);
        
        // Update theme toggle icon
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            const icons = {
                light: '🌙',
                dark: '☀️',
                'high-contrast': '🔆'
            };
            themeToggle.textContent = icons[this.theme] || '🌙';
        }
    }
    
    /**
     * Handle progress panel toggle
     */
    handleProgressToggle() {
        const progressTracker = document.getElementById('progressTracker');
        if (progressTracker) {
            progressTracker.classList.toggle('open');
            this.updateProgressDisplay();
        }
    }
    
    /**
     * Handle help panel toggle
     */
    handleHelpToggle() {
        const helpPanel = document.getElementById('helpPanel');
        if (helpPanel) {
            helpPanel.classList.toggle('open');
        }
    }
    
    /**
     * Handle keyboard shortcuts
     */
    handleKeyboardShortcuts(event) {
        // Ctrl/Cmd + Enter: Run code
        if ((event.ctrlKey || event.metaKey) && event.key === 'Enter') {
            event.preventDefault();
            this.consoleEngine.runCode();
        }
        
        // Ctrl/Cmd + /: Toggle help
        if ((event.ctrlKey || event.metaKey) && event.key === '/') {
            event.preventDefault();
            this.handleHelpToggle();
        }
        
        // Escape: Close panels
        if (event.key === 'Escape') {
            document.getElementById('progressTracker')?.classList.remove('open');
            document.getElementById('helpPanel')?.classList.remove('open');
        }
        
        // Arrow keys: Navigate steps (when not in input)
        if (!event.target.matches('input, textarea, [contenteditable]')) {
            if (event.key === 'ArrowLeft') {
                this.previousStep();
            } else if (event.key === 'ArrowRight') {
                this.nextStep();
            }
        }
    }
    
    /**
     * Navigate to previous step
     */
    previousStep() {
        if (this.state.currentStep > 0) {
            this.state.currentStep--;
            this.demoLoader.goToStep(this.state.currentStep);
        }
    }
    
    /**
     * Navigate to next step
     */
    nextStep() {
        if (this.state.currentStep < this.state.totalSteps - 1) {
            this.state.currentStep++;
            this.demoLoader.goToStep(this.state.currentStep);
        }
    }
    
    /**
     * Update progress display
     */
    updateProgressDisplay() {
        const completedDemos = document.getElementById('completedDemos');
        const totalTime = document.getElementById('totalTime');
        const skillLevel = document.getElementById('skillLevel');
        const achievementList = document.getElementById('achievementList');
        
        if (completedDemos) {
            completedDemos.textContent = this.state.completedDemos.length;
        }
        
        if (totalTime) {
            const hours = Math.floor(this.state.timeSpent / 60);
            const minutes = this.state.timeSpent % 60;
            totalTime.textContent = hours > 0 ? `${hours}h ${minutes}m` : `${minutes}m`;
        }
        
        if (skillLevel) {
            skillLevel.textContent = this.calculateSkillLevel();
        }
        
        if (achievementList) {
            this.renderAchievements(achievementList);
        }
    }
    
    /**
     * Calculate current skill level
     */
    calculateSkillLevel() {
        const completed = this.state.completedDemos.length;
        const totalDemos = 6; // Total number of demonstrations
        
        if (completed === 0) return 'Beginner';
        if (completed < totalDemos * 0.5) return 'Learning';
        if (completed < totalDemos * 0.8) return 'Progressing';
        if (completed < totalDemos) return 'Advanced';
        return 'Expert';
    }
    
    /**
     * Render achievements
     */
    renderAchievements(container) {
        const achievements = [
            { id: 'first-step', title: 'First Steps', description: 'Complete your first demonstration', icon: '🎯' },
            { id: 'code-runner', title: 'Code Runner', description: 'Execute code 10 times', icon: '🏃' },
            { id: 'problem-solver', title: 'Problem Solver', description: 'Complete all exercises in a module', icon: '🧩' },
            { id: 'speed-learner', title: 'Speed Learner', description: 'Complete a demo in under 30 minutes', icon: '⚡' },
            { id: 'perfectionist', title: 'Perfectionist', description: 'Get 100% on all quizzes', icon: '💎' },
            { id: 'collaborator', title: 'Collaborator', description: 'Share your work with others', icon: '🤝' }
        ];
        
        container.innerHTML = achievements.map(achievement => {
            const earned = this.state.achievements.includes(achievement.id);
            return `
                <div class="achievement ${earned ? 'earned' : ''}">
                    <div class="achievement-icon">${achievement.icon}</div>
                    <div class="achievement-text">
                        <div class="achievement-title">${achievement.title}</div>
                        <div class="achievement-description">${achievement.description}</div>
                    </div>
                </div>
            `;
        }).join('');
    }
    
    /**
     * Update help content based on current demo
     */
    updateHelpContent(demoType) {
        const helpContent = document.getElementById('helpContent');
        if (!helpContent) return;
        
        const helpTexts = {
            variables: `
                <h4>Variables & Data Types</h4>
                <p>Learn about storing and manipulating data in programming.</p>
                <ul>
                    <li>Declare variables with <code>let</code>, <code>const</code>, or <code>var</code></li>
                    <li>Understand different data types: strings, numbers, booleans</li>
                    <li>Practice type conversion and manipulation</li>
                </ul>
            `,
            functions: `
                <h4>Functions & Control Flow</h4>
                <p>Master the building blocks of programming logic.</p>
                <ul>
                    <li>Write reusable functions with parameters</li>
                    <li>Use conditional statements (if/else)</li>
                    <li>Implement loops for repetitive tasks</li>
                </ul>
            `,
            algorithms: `
                <h4>Algorithms</h4>
                <p>Visualize how common algorithms work step by step.</p>
                <ul>
                    <li>See sorting algorithms in action</li>
                    <li>Understand search techniques</li>
                    <li>Analyze time and space complexity</li>
                </ul>
            `,
            'html-css': `
                <h4>HTML/CSS Fundamentals</h4>
                <p>Build and style web pages from scratch.</p>
                <ul>
                    <li>Structure content with semantic HTML</li>
                    <li>Style elements with CSS properties</li>
                    <li>Create responsive layouts</li>
                </ul>
            `,
            git: `
                <h4>Git Workflow</h4>
                <p>Learn version control and collaboration.</p>
                <ul>
                    <li>Initialize repositories and make commits</li>
                    <li>Work with branches and merging</li>
                    <li>Collaborate with remote repositories</li>
                </ul>
            `,
            'web-project': `
                <h4>Your First Web Page</h4>
                <p>Build a complete web project step by step.</p>
                <ul>
                    <li>Plan and structure your project</li>
                    <li>Implement features incrementally</li>
                    <li>Test and deploy your work</li>
                </ul>
            `
        };
        
        helpContent.innerHTML = helpTexts[demoType] || helpTexts.variables;
    }
    
    /**
     * Show loading spinner
     */
    showLoading(message = 'Loading...') {
        const spinner = document.getElementById('loadingSpinner');
        if (spinner) {
            spinner.querySelector('p').textContent = message;
            spinner.classList.add('show');
        }
    }
    
    /**
     * Hide loading spinner
     */
    hideLoading() {
        const spinner = document.getElementById('loadingSpinner');
        if (spinner) {
            spinner.classList.remove('show');
        }
    }
    
    /**
     * Show toast notification
     */
    showToast(message, type = 'info') {
        const toast = document.getElementById('toast');
        if (!toast) return;
        
        const icons = {
            success: '✅',
            error: '❌',
            warning: '⚠️',
            info: 'ℹ️'
        };
        
        toast.querySelector('.toast-icon').textContent = icons[type] || icons.info;
        toast.querySelector('.toast-message').textContent = message;
        
        toast.classList.add('show');
        
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    }
    
    /**
     * Get demo title from type
     */
    getDemoTitle(demoType) {
        const titles = {
            variables: 'Variables & Data Types',
            functions: 'Functions & Control Flow',
            algorithms: 'Basic Algorithms',
            'html-css': 'HTML/CSS Fundamentals',
            git: 'Git Workflow',
            'web-project': 'Your First Web Page'
        };
        
        return titles[demoType] || 'Demonstration';
    }
    
    /**
     * Save current progress
     */
    saveCurrentProgress() {
        localStorage.setItem('opencode-progress', JSON.stringify(this.state));
    }
    
    /**
     * Save application state
     */
    saveState() {
        this.saveCurrentProgress();
        this.savePreferences();
    }
    
    /**
     * Save user preferences
     */
    savePreferences() {
        const preferences = {
            theme: this.theme,
            language: this.consoleEngine?.currentLanguage || 'javascript'
        };
        
        localStorage.setItem('opencode-preferences', JSON.stringify(preferences));
    }
    
    /**
     * Get completed demonstrations from storage
     */
    getCompletedDemos() {
        const saved = localStorage.getItem('opencode-progress');
        if (saved) {
            const progress = JSON.parse(saved);
            return progress.completedDemos || [];
        }
        return [];
    }
    
    /**
     * Get achievements from storage
     */
    getAchievements() {
        const saved = localStorage.getItem('opencode-progress');
        if (saved) {
            const progress = JSON.parse(saved);
            return progress.achievements || [];
        }
        return [];
    }
    
    /**
     * Get user preferences from storage
     */
    getPreferences() {
        const saved = localStorage.getItem('opencode-preferences');
        if (saved) {
            return JSON.parse(saved);
        }
        return {};
    }
    
    /**
     * Award achievement
     */
    awardAchievement(achievementId) {
        if (!this.state.achievements.includes(achievementId)) {
            this.state.achievements.push(achievementId);
            this.saveCurrentProgress();
            this.updateProgressDisplay();
            
            // Show achievement notification
            const achievement = this.getAchievementById(achievementId);
            if (achievement) {
                this.showToast(`Achievement unlocked: ${achievement.title}! ${achievement.icon}`, 'success');
            }
        }
    }
    
    /**
     * Get achievement by ID
     */
    getAchievementById(id) {
        const achievements = {
            'first-step': { title: 'First Steps', icon: '🎯' },
            'code-runner': { title: 'Code Runner', icon: '🏃' },
            'problem-solver': { title: 'Problem Solver', icon: '🧩' },
            'speed-learner': { title: 'Speed Learner', icon: '⚡' },
            'perfectionist': { title: 'Perfectionist', icon: '💎' },
            'collaborator': { title: 'Collaborator', icon: '🤝' }
        };
        
        return achievements[id];
    }
    
    /**
     * Mark demonstration as completed
     */
    markDemoCompleted(demoType) {
        if (!this.state.completedDemos.includes(demoType)) {
            this.state.completedDemos.push(demoType);
            this.saveCurrentProgress();
            this.updateProgressDisplay();
            
            // Award first-step achievement
            if (this.state.completedDemos.length === 1) {
                this.awardAchievement('first-step');
            }
            
            // Award problem-solver achievement if all completed
            if (this.state.completedDemos.length === 6) {
                this.awardAchievement('problem-solver');
            }
        }
    }
    
    /**
     * Start time tracking
     */
    startTimeTracking() {
        setInterval(() => {
            this.state.timeSpent++;
            if (this.state.timeSpent % 5 === 0) { // Save every 5 minutes
                this.saveCurrentProgress();
            }
        }, 60000); // 1 minute intervals
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = OpenCodeApp;
}