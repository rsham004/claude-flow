/**
 * OpenCode Demo Loader
 * Manages loading and displaying interactive demonstrations
 */

class DemoLoader {
    constructor() {
        this.currentDemo = null;
        this.currentStep = 0;
        this.totalSteps = 0;
        this.demoContainer = document.getElementById('demoContainer');
        this.demonstrations = new Map();
        
        this.initializeDemonstrations();
    }
    
    /**
     * Initialize available demonstrations
     */
    initializeDemonstrations() {
        // Register all available demonstrations
        this.demonstrations.set('variables', VariablesDemo);
        this.demonstrations.set('enhanced-variables', EnhancedVariablesDemo);
        this.demonstrations.set('functions', FunctionsDemo);
        this.demonstrations.set('algorithms', AlgorithmsDemo);
        this.demonstrations.set('html-css', HtmlCssDemo);
        this.demonstrations.set('git', GitDemo);
        this.demonstrations.set('web-project', WebProjectDemo);
    }
    
    /**
     * Load a demonstration
     */
    async loadDemo(demoType) {
        try {
            const DemoClass = this.demonstrations.get(demoType);
            if (!DemoClass) {
                throw new Error(`Demo type '${demoType}' not found`);
            }
            
            // Clean up previous demo
            if (this.currentDemo) {
                await this.currentDemo.cleanup();
            }
            
            // Create new demo instance
            this.currentDemo = new DemoClass(this.demoContainer);
            
            // Initialize the demo
            await this.currentDemo.initialize();
            
            // Update step tracking
            this.currentStep = 0;
            this.totalSteps = this.currentDemo.getTotalSteps();
            
            // Update application state
            if (window.OpenCodeApp) {
                window.OpenCodeApp.state.currentStep = this.currentStep;
                window.OpenCodeApp.state.totalSteps = this.totalSteps;
            }
            
            console.log(`Loaded demo: ${demoType}`);
            
        } catch (error) {
            console.error('Failed to load demo:', error);
            this.showError(`Failed to load demonstration: ${error.message}`);
        }
    }
    
    /**
     * Go to a specific step
     */
    async goToStep(stepIndex) {
        if (!this.currentDemo) {
            console.warn('No demo loaded');
            return;
        }
        
        if (stepIndex < 0 || stepIndex >= this.totalSteps) {
            console.warn(`Invalid step index: ${stepIndex}`);
            return;
        }
        
        try {
            await this.currentDemo.goToStep(stepIndex);
            this.currentStep = stepIndex;
            
            // Update application state
            if (window.OpenCodeApp) {
                window.OpenCodeApp.state.currentStep = this.currentStep;
            }
            
        } catch (error) {
            console.error('Failed to go to step:', error);
        }
    }
    
    /**
     * Go to next step
     */
    async nextStep() {
        if (this.currentStep < this.totalSteps - 1) {
            await this.goToStep(this.currentStep + 1);
            return true;
        }
        return false;
    }
    
    /**
     * Go to previous step
     */
    async previousStep() {
        if (this.currentStep > 0) {
            await this.goToStep(this.currentStep - 1);
            return true;
        }
        return false;
    }
    
    /**
     * Get current demo progress
     */
    getProgress() {
        return {
            currentStep: this.currentStep,
            totalSteps: this.totalSteps,
            percentage: this.totalSteps > 0 ? (this.currentStep / this.totalSteps) * 100 : 0
        };
    }
    
    /**
     * Show error message
     */
    showError(message) {
        if (this.demoContainer) {
            this.demoContainer.innerHTML = `
                <div class="demo-error">
                    <div class="error-icon">⚠️</div>
                    <h2>Demo Loading Error</h2>
                    <p>${message}</p>
                    <button onclick="location.reload()" class="retry-btn">Retry</button>
                </div>
            `;
        }
    }
}

/**
 * Base Demo Class
 * All demonstrations should extend this class
 */
class BaseDemo {
    constructor(container) {
        this.container = container;
        this.steps = [];
        this.currentStepIndex = 0;
        this.isInitialized = false;
    }
    
    /**
     * Initialize the demonstration
     */
    async initialize() {
        if (this.isInitialized) return;
        
        this.setupSteps();
        await this.render();
        this.setupEventListeners();
        this.isInitialized = true;
    }
    
    /**
     * Setup demonstration steps (to be overridden)
     */
    setupSteps() {
        // Override in subclasses
        this.steps = [];
    }
    
    /**
     * Render the demonstration UI
     */
    async render() {
        if (!this.container) return;
        
        this.container.innerHTML = `
            <div class="demo-content">
                <div class="demo-header">
                    <h2>${this.getTitle()}</h2>
                    <div class="step-navigation">
                        <button class="nav-btn" id="prevStep" disabled>← Previous</button>
                        <span class="step-indicator">Step <span id="currentStep">1</span> of <span id="totalSteps">${this.steps.length}</span></span>
                        <button class="nav-btn" id="nextStep">Next →</button>
                    </div>
                </div>
                <div class="step-content" id="stepContent">
                    <!-- Step content will be rendered here -->
                </div>
                <div class="demo-controls">
                    <div class="progress-bar">
                        <div class="progress-fill" id="progressFill" style="width: 0%"></div>
                    </div>
                </div>
            </div>
        `;
        
        // Render first step
        await this.renderStep(0);
    }
    
    /**
     * Setup event listeners
     */
    setupEventListeners() {
        const prevBtn = this.container.querySelector('#prevStep');
        const nextBtn = this.container.querySelector('#nextStep');
        
        if (prevBtn) {
            prevBtn.addEventListener('click', () => this.previousStep());
        }
        
        if (nextBtn) {
            nextBtn.addEventListener('click', () => this.nextStep());
        }
    }
    
    /**
     * Render a specific step
     */
    async renderStep(stepIndex) {
        if (stepIndex < 0 || stepIndex >= this.steps.length) return;
        
        const step = this.steps[stepIndex];
        const stepContent = this.container.querySelector('#stepContent');
        
        if (stepContent && step) {
            stepContent.innerHTML = await this.generateStepContent(step, stepIndex);
            
            // Update navigation
            this.updateNavigation(stepIndex);
            
            // Update progress
            this.updateProgress(stepIndex);
            
            // Execute step-specific logic
            if (step.onEnter) {
                await step.onEnter();
            }
        }
    }
    
    /**
     * Generate content for a step
     */
    async generateStepContent(step, stepIndex) {
        return `
            <div class="step-wrapper">
                <div class="step-title">
                    <h3>${step.title}</h3>
                </div>
                <div class="step-description">
                    <p>${step.description}</p>
                </div>
                <div class="step-content-area">
                    ${step.content || ''}
                </div>
                ${step.interactive ? this.generateInteractiveSection(step) : ''}
                ${step.exercise ? this.generateExerciseSection(step) : ''}
            </div>
        `;
    }
    
    /**
     * Generate interactive section
     */
    generateInteractiveSection(step) {
        return `
            <div class="interactive-section">
                <h4>Try it yourself:</h4>
                <div class="interactive-area" id="interactive-${step.id}">
                    ${step.interactive}
                </div>
            </div>
        `;
    }
    
    /**
     * Generate exercise section
     */
    generateExerciseSection(step) {
        return `
            <div class="exercise-section">
                <h4>Practice Exercise:</h4>
                <div class="exercise-content">
                    <p>${step.exercise.description}</p>
                    <div class="exercise-area" id="exercise-${step.id}">
                        ${step.exercise.content || ''}
                    </div>
                    ${step.exercise.solution ? `
                        <button class="show-solution-btn" onclick="this.nextElementSibling.style.display='block'; this.style.display='none';">Show Solution</button>
                        <div class="solution" style="display: none;">
                            <h5>Solution:</h5>
                            <pre><code>${step.exercise.solution}</code></pre>
                        </div>
                    ` : ''}
                </div>
            </div>
        `;
    }
    
    /**
     * Update navigation buttons
     */
    updateNavigation(stepIndex) {
        const prevBtn = this.container.querySelector('#prevStep');
        const nextBtn = this.container.querySelector('#nextStep');
        const currentStepSpan = this.container.querySelector('#currentStep');
        
        if (prevBtn) {
            prevBtn.disabled = stepIndex === 0;
        }
        
        if (nextBtn) {
            nextBtn.disabled = stepIndex === this.steps.length - 1;
            nextBtn.textContent = stepIndex === this.steps.length - 1 ? 'Complete' : 'Next →';
        }
        
        if (currentStepSpan) {
            currentStepSpan.textContent = stepIndex + 1;
        }
    }
    
    /**
     * Update progress bar
     */
    updateProgress(stepIndex) {
        const progressFill = this.container.querySelector('#progressFill');
        if (progressFill) {
            const percentage = ((stepIndex + 1) / this.steps.length) * 100;
            progressFill.style.width = `${percentage}%`;
        }
    }
    
    /**
     * Go to specific step
     */
    async goToStep(stepIndex) {
        if (stepIndex >= 0 && stepIndex < this.steps.length) {
            // Execute exit logic for current step
            const currentStep = this.steps[this.currentStepIndex];
            if (currentStep && currentStep.onExit) {
                await currentStep.onExit();
            }
            
            this.currentStepIndex = stepIndex;
            await this.renderStep(stepIndex);
        }
    }
    
    /**
     * Go to next step
     */
    async nextStep() {
        if (this.currentStepIndex < this.steps.length - 1) {
            await this.goToStep(this.currentStepIndex + 1);
        } else {
            // Demo completed
            await this.onComplete();
        }
    }
    
    /**
     * Go to previous step
     */
    async previousStep() {
        if (this.currentStepIndex > 0) {
            await this.goToStep(this.currentStepIndex - 1);
        }
    }
    
    /**
     * Handle demo completion
     */
    async onComplete() {
        // Mark demo as completed
        if (window.OpenCodeApp) {
            window.OpenCodeApp.markDemoCompleted(this.getDemoType());
        }
        
        // Show completion message
        const stepContent = this.container.querySelector('#stepContent');
        if (stepContent) {
            stepContent.innerHTML = `
                <div class="completion-message">
                    <div class="completion-icon">🎉</div>
                    <h3>Congratulations!</h3>
                    <p>You've completed the ${this.getTitle()} demonstration!</p>
                    <div class="completion-stats">
                        <div class="stat">
                            <span class="stat-value">${this.steps.length}</span>
                            <span class="stat-label">Steps Completed</span>
                        </div>
                        <div class="stat">
                            <span class="stat-value">100%</span>
                            <span class="stat-label">Progress</span>
                        </div>
                    </div>
                    <button class="continue-btn" onclick="OpenCodeApp.handleNavigation({target: {dataset: {demo: '${this.getNextDemo()}'}}})">
                        Continue to Next Topic →
                    </button>
                </div>
            `;
        }
    }
    
    /**
     * Get demonstration title (to be overridden)
     */
    getTitle() {
        return 'Demo Title';
    }
    
    /**
     * Get demonstration type (to be overridden)
     */
    getDemoType() {
        return 'base';
    }
    
    /**
     * Get next demo type
     */
    getNextDemo() {
        const demoOrder = ['variables', 'functions', 'algorithms', 'html-css', 'git', 'web-project'];
        const currentIndex = demoOrder.indexOf(this.getDemoType());
        return currentIndex < demoOrder.length - 1 ? demoOrder[currentIndex + 1] : 'variables';
    }
    
    /**
     * Get total number of steps
     */
    getTotalSteps() {
        return this.steps.length;
    }
    
    /**
     * Cleanup resources
     */
    async cleanup() {
        // Override in subclasses if needed
        if (this.container) {
            this.container.innerHTML = '';
        }
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { DemoLoader, BaseDemo };
}