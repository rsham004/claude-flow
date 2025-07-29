/**
 * Enhanced Demo Engine
 * Advanced visualization and interaction capabilities for OpenCode demonstrations
 */

class EnhancedDemoEngine extends BaseDemo {
    constructor(container) {
        super(container);
        this.animations = new Map();
        this.visualizations = new Map();
        this.interactiveElements = new Map();
        this.audioContext = null;
        this.speechSynthesis = window.speechSynthesis;
        this.currentVisualization = null;
        
        this.initializeEnhancements();
    }
    
    /**
     * Initialize enhanced features
     */
    initializeEnhancements() {
        this.setupAudioContext();
        this.setupVisualizationEngine();
        this.setupAccessibilityFeatures();
        this.setupMobileOptimizations();
        this.setupAnalytics();
    }
    
    /**
     * Setup audio context for sound effects and speech
     */
    setupAudioContext() {
        try {
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
        } catch (error) {
            console.warn('Audio context not available:', error);
        }
    }
    
    /**
     * Setup visualization engine
     */
    setupVisualizationEngine() {
        this.visualizationTypes = {
            'memory-diagram': this.createMemoryVisualization.bind(this),
            'algorithm-flow': this.createAlgorithmFlowVisualization.bind(this),
            'code-execution': this.createCodeExecutionVisualization.bind(this),
            'data-structure': this.createDataStructureVisualization.bind(this),
            'network-diagram': this.createNetworkVisualization.bind(this),
            'timeline': this.createTimelineVisualization.bind(this),
            'comparison-chart': this.createComparisonVisualization.bind(this),
            'interactive-canvas': this.createInteractiveCanvas.bind(this)
        };
    }
    
    /**
     * Setup accessibility features
     */
    setupAccessibilityFeatures() {
        this.accessibilityOptions = {
            screenReader: this.enableScreenReaderSupport.bind(this),
            highContrast: this.enableHighContrast.bind(this),
            largeText: this.enableLargeText.bind(this),
            reducedMotion: this.enableReducedMotion.bind(this),
            keyboardNav: this.enableKeyboardNavigation.bind(this),
            audioDescriptions: this.enableAudioDescriptions.bind(this)
        };
        
        // Auto-detect preferences
        this.detectAccessibilityPreferences();
    }
    
    /**
     * Setup mobile optimizations
     */
    setupMobileOptimizations() {
        this.isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        this.isTouch = 'ontouchstart' in window;
        
        if (this.isMobile || this.isTouch) {
            this.enableMobileFeatures();
        }
    }
    
    /**
     * Setup analytics tracking
     */
    setupAnalytics() {
        this.analytics = {
            stepTimes: [],
            interactions: [],
            completionRate: 0,
            hintsUsed: 0,
            errorsEncountered: 0,
            preferredLearningStyle: null
        };
        
        this.startAnalyticsTracking();
    }
    
    /**
     * Create enhanced step content with animations and interactions
     */
    async generateStepContent(step, stepIndex) {
        const baseContent = await super.generateStepContent(step, stepIndex);
        
        // Add enhanced features
        const enhancedContent = `
            <div class="enhanced-step-wrapper" data-step="${stepIndex}">
                ${this.generateProgressIndicator(stepIndex)}
                ${baseContent}
                ${this.generateVisualizationArea(step)}
                ${this.generateInteractiveControls(step)}
                ${this.generateAccessibilityControls()}
                ${this.generateAnalyticsPanel()}
            </div>
        `;
        
        // Initialize step-specific enhancements
        setTimeout(() => this.initializeStepEnhancements(step, stepIndex), 100);
        
        return enhancedContent;
    }
    
    /**
     * Generate enhanced progress indicator
     */
    generateProgressIndicator(stepIndex) {
        const progress = ((stepIndex + 1) / this.steps.length) * 100;
        
        return `
            <div class="enhanced-progress-indicator">
                <div class="progress-visual">
                    <div class="progress-circle" style="--progress: ${progress}%">
                        <span class="progress-text">${stepIndex + 1}/${this.steps.length}</span>
                    </div>
                </div>
                <div class="progress-details">
                    <div class="time-estimate">
                        <span class="icon">⏱️</span>
                        <span class="text">Est. ${this.getStepTimeEstimate(stepIndex)}min</span>
                    </div>
                    <div class="difficulty-indicator">
                        <span class="icon">📊</span>
                        <span class="text">${this.getStepDifficulty(stepIndex)}</span>
                    </div>
                </div>
            </div>
        `;
    }
    
    /**
     * Generate visualization area
     */
    generateVisualizationArea(step) {
        if (!step.visualization) return '';
        
        return `
            <div class="visualization-container" id="viz-${step.id}">
                <div class="visualization-header">
                    <h4>Visual Learning</h4>
                    <div class="viz-controls">
                        <button class="viz-btn" data-action="play" title="Play animation">▶️</button>
                        <button class="viz-btn" data-action="pause" title="Pause animation">⏸️</button>
                        <button class="viz-btn" data-action="reset" title="Reset animation">🔄</button>
                        <button class="viz-btn" data-action="fullscreen" title="Fullscreen mode">⛶</button>
                    </div>
                </div>
                <div class="visualization-content" id="viz-content-${step.id}">
                    <!-- Visualization will be rendered here -->
                </div>
                <div class="visualization-description">
                    <p>${step.visualization.description || ''}</p>
                </div>
            </div>
        `;
    }
    
    /**
     * Generate interactive controls
     */
    generateInteractiveControls(step) {
        const controls = [];
        
        // Speed control
        controls.push(`
            <div class="control-group">
                <label for="speed-${step.id}">Animation Speed:</label>
                <input type="range" id="speed-${step.id}" min="0.5" max="3" value="1" step="0.1" 
                       class="speed-control" data-step="${step.id}">
                <span class="speed-value">1x</span>
            </div>
        `);
        
        // Theme controls
        controls.push(`
            <div class="control-group">
                <label>Visual Style:</label>
                <select class="theme-select" data-step="${step.id}">
                    <option value="default">Default</option>
                    <option value="high-contrast">High Contrast</option>
                    <option value="colorblind-friendly">Colorblind Friendly</option>
                    <option value="minimal">Minimal</option>
                </select>
            </div>
        `);
        
        // Interactive features
        if (step.interactive) {
            controls.push(`
                <div class="control-group">
                    <button class="interactive-btn" data-action="hint" data-step="${step.id}">
                        💡 Get Hint
                    </button>
                    <button class="interactive-btn" data-action="explain" data-step="${step.id}">
                        🗣️ Explain Code
                    </button>
                    <button class="interactive-btn" data-action="practice" data-step="${step.id}">
                        🛠️ Practice Mode
                    </button>
                </div>
            `);
        }
        
        return `
            <div class="interactive-controls-panel">
                <div class="controls-header">
                    <h4>Interactive Controls</h4>
                    <button class="toggle-controls" title="Toggle controls">⚙️</button>
                </div>
                <div class="controls-content">
                    ${controls.join('')}
                </div>
            </div>
        `;
    }
    
    /**
     * Generate accessibility controls
     */
    generateAccessibilityControls() {
        return `
            <div class="accessibility-panel" id="accessibilityPanel">
                <div class="accessibility-header">
                    <h4>Accessibility Options</h4>
                    <button class="toggle-accessibility" title="Toggle accessibility panel">♿</button>
                </div>
                <div class="accessibility-content">
                    <div class="accessibility-option">
                        <label>
                            <input type="checkbox" id="screenReader" class="accessibility-toggle">
                            <span>Screen Reader Support</span>
                        </label>
                    </div>
                    <div class="accessibility-option">
                        <label>
                            <input type="checkbox" id="highContrast" class="accessibility-toggle">
                            <span>High Contrast Mode</span>
                        </label>
                    </div>
                    <div class="accessibility-option">
                        <label>
                            <input type="checkbox" id="largeText" class="accessibility-toggle">
                            <span>Large Text</span>
                        </label>
                    </div>
                    <div class="accessibility-option">
                        <label>
                            <input type="checkbox" id="reducedMotion" class="accessibility-toggle">
                            <span>Reduce Motion</span>
                        </label>
                    </div>
                    <div class="accessibility-option">
                        <label>
                            <input type="checkbox" id="audioDescriptions" class="accessibility-toggle">
                            <span>Audio Descriptions</span>
                        </label>
                    </div>
                </div>
            </div>
        `;
    }
    
    /**
     * Generate analytics panel
     */
    generateAnalyticsPanel() {
        return `
            <div class="analytics-panel" id="analyticsPanel">
                <div class="analytics-header">
                    <h4>Learning Analytics</h4>
                    <button class="toggle-analytics" title="Toggle analytics">📊</button>
                </div>
                <div class="analytics-content">
                    <div class="analytics-metric">
                        <span class="metric-label">Time on Step:</span>
                        <span class="metric-value" id="stepTime">0:00</span>
                    </div>
                    <div class="analytics-metric">
                        <span class="metric-label">Interactions:</span>
                        <span class="metric-value" id="interactionCount">0</span>
                    </div>
                    <div class="analytics-metric">
                        <span class="metric-label">Accuracy:</span>
                        <span class="metric-value" id="accuracyRate">100%</span>
                    </div>
                    <div class="analytics-metric">
                        <span class="metric-label">Learning Style:</span>
                        <span class="metric-value" id="learningStyle">Analyzing...</span>
                    </div>
                </div>
            </div>
        `;
    }
    
    /**
     * Initialize step-specific enhancements
     */
    async initializeStepEnhancements(step, stepIndex) {
        // Setup event listeners
        this.setupStepEventListeners(step, stepIndex);
        
        // Initialize visualization
        if (step.visualization) {
            await this.initializeVisualization(step);
        }
        
        // Start analytics tracking for this step
        this.startStepAnalytics(stepIndex);
        
        // Setup accessibility features
        this.initializeAccessibilityForStep(step);
        
        // Apply mobile optimizations
        if (this.isMobile) {
            this.applyMobileOptimizations(step);
        }
    }
    
    /**
     * Setup event listeners for enhanced features
     */
    setupStepEventListeners(step, stepIndex) {
        const container = this.container.querySelector(`[data-step="${stepIndex}"]`);
        if (!container) return;
        
        // Visualization controls
        container.querySelectorAll('.viz-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const action = e.target.dataset.action;
                this.handleVisualizationControl(action, step);
            });
        });
        
        // Speed control
        const speedControl = container.querySelector('.speed-control');
        if (speedControl) {
            speedControl.addEventListener('input', (e) => {
                this.updateAnimationSpeed(step, parseFloat(e.target.value));
                e.target.nextElementSibling.textContent = `${e.target.value}x`;
            });
        }
        
        // Theme control
        const themeSelect = container.querySelector('.theme-select');
        if (themeSelect) {
            themeSelect.addEventListener('change', (e) => {
                this.updateVisualizationTheme(step, e.target.value);
            });
        }
        
        // Interactive buttons
        container.querySelectorAll('.interactive-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const action = e.target.dataset.action;
                this.handleInteractiveAction(action, step);
            });
        });
        
        // Accessibility toggles
        container.querySelectorAll('.accessibility-toggle').forEach(toggle => {
            toggle.addEventListener('change', (e) => {
                this.handleAccessibilityToggle(e.target.id, e.target.checked);
            });
        });
        
        // Panel toggles
        this.setupPanelToggles(container);
    }
    
    /**
     * Setup panel toggle functionality
     */
    setupPanelToggles(container) {
        const toggles = [
            { selector: '.toggle-controls', panel: '.controls-content' },
            { selector: '.toggle-accessibility', panel: '.accessibility-content' },
            { selector: '.toggle-analytics', panel: '.analytics-content' }
        ];
        
        toggles.forEach(({ selector, panel }) => {
            const toggle = container.querySelector(selector);
            const content = container.querySelector(panel);
            
            if (toggle && content) {
                toggle.addEventListener('click', () => {
                    content.classList.toggle('collapsed');
                    this.trackInteraction('panel_toggle', selector);
                });
            }
        });
    }
    
    /**
     * Initialize visualization for a step
     */
    async initializeVisualization(step) {
        const vizContainer = document.getElementById(`viz-content-${step.id}`);
        if (!vizContainer || !step.visualization) return;
        
        const vizType = step.visualization.type;
        const vizData = step.visualization.data || {};
        
        if (this.visualizationTypes[vizType]) {
            try {
                const visualization = await this.visualizationTypes[vizType](vizContainer, vizData);
                this.visualizations.set(step.id, visualization);
                this.currentVisualization = visualization;
            } catch (error) {
                console.error('Failed to initialize visualization:', error);
                vizContainer.innerHTML = `
                    <div class="viz-error">
                        <span class="error-icon">⚠️</span>
                        <p>Failed to load visualization</p>
                    </div>
                `;
            }
        }
    }
    
    /**
     * Create memory visualization
     */
    createMemoryVisualization(container, data) {
        const canvas = document.createElement('canvas');
        canvas.width = container.clientWidth || 600;
        canvas.height = 400;
        container.appendChild(canvas);
        
        const ctx = canvas.getContext('2d');
        const memoryBlocks = data.blocks || [];
        
        const visualization = {
            canvas,
            ctx,
            data: memoryBlocks,
            isPlaying: false,
            currentFrame: 0,
            
            render() {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                
                // Draw memory layout
                const blockWidth = 80;
                const blockHeight = 60;
                const startX = 50;
                const startY = 100;
                
                memoryBlocks.forEach((block, index) => {
                    const x = startX + (index * (blockWidth + 20));
                    const y = startY;
                    
                    // Draw memory block
                    ctx.fillStyle = block.occupied ? '#6366f1' : '#e5e7eb';
                    ctx.fillRect(x, y, blockWidth, blockHeight);
                    
                    // Draw border
                    ctx.strokeStyle = '#374151';
                    ctx.lineWidth = 2;
                    ctx.strokeRect(x, y, blockWidth, blockHeight);
                    
                    // Draw label
                    ctx.fillStyle = block.occupied ? '#ffffff' : '#374151';
                    ctx.font = '12px Inter';
                    ctx.textAlign = 'center';
                    ctx.fillText(block.label || `Block ${index}`, x + blockWidth/2, y + blockHeight/2 + 4);
                    
                    // Draw address
                    ctx.fillStyle = '#6b7280';
                    ctx.font = '10px JetBrains Mono';
                    ctx.fillText(block.address || `0x${(1000 + index * 4).toString(16)}`, x + blockWidth/2, y - 10);
                });
                
                // Draw title
                ctx.fillStyle = '#1f2937';
                ctx.font = 'bold 16px Inter';
                ctx.textAlign = 'left';
                ctx.fillText('Memory Layout', 50, 50);
            },
            
            play() {
                this.isPlaying = true;
                this.animate();
            },
            
            pause() {
                this.isPlaying = false;
            },
            
            reset() {
                this.currentFrame = 0;
                this.render();
            },
            
            animate() {
                if (!this.isPlaying) return;
                
                this.render();
                this.currentFrame++;
                
                requestAnimationFrame(() => this.animate());
            }
        };
        
        visualization.render();
        return visualization;
    }
    
    /**
     * Create algorithm flow visualization
     */
    createAlgorithmFlowVisualization(container, data) {
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('width', '100%');
        svg.setAttribute('height', '400');
        svg.setAttribute('viewBox', '0 0 800 400');
        container.appendChild(svg);
        
        const steps = data.steps || [];
        const nodeWidth = 120;
        const nodeHeight = 60;
        const startX = 50;
        const startY = 50;
        
        const visualization = {
            svg,
            steps,
            currentStep: -1,
            isPlaying: false,
            
            render() {
                // Clear existing content
                svg.innerHTML = '';
                
                steps.forEach((step, index) => {
                    const x = startX + (index % 4) * (nodeWidth + 40);
                    const y = startY + Math.floor(index / 4) * (nodeHeight + 40);
                    
                    // Create node group
                    const group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
                    
                    // Create rectangle
                    const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
                    rect.setAttribute('x', x);
                    rect.setAttribute('y', y);
                    rect.setAttribute('width', nodeWidth);
                    rect.setAttribute('height', nodeHeight);
                    rect.setAttribute('rx', '8');
                    rect.setAttribute('fill', index <= this.currentStep ? '#10b981' : '#e5e7eb');
                    rect.setAttribute('stroke', '#374151');
                    rect.setAttribute('stroke-width', '2');
                    
                    // Create text
                    const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
                    text.setAttribute('x', x + nodeWidth/2);
                    text.setAttribute('y', y + nodeHeight/2 + 4);
                    text.setAttribute('text-anchor', 'middle');
                    text.setAttribute('fill', index <= this.currentStep ? '#ffffff' : '#374151');
                    text.setAttribute('font-family', 'Inter');
                    text.setAttribute('font-size', '12');
                    text.textContent = step.title || `Step ${index + 1}`;
                    
                    group.appendChild(rect);
                    group.appendChild(text);
                    svg.appendChild(group);
                    
                    // Draw arrow to next step
                    if (index < steps.length - 1 && (index + 1) % 4 !== 0) {
                        const arrow = this.createArrow(
                            x + nodeWidth,
                            y + nodeHeight/2,
                            x + nodeWidth + 40,
                            y + nodeHeight/2
                        );
                        svg.appendChild(arrow);
                    }
                });
            },
            
            createArrow(x1, y1, x2, y2) {
                const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
                line.setAttribute('x1', x1);
                line.setAttribute('y1', y1);
                line.setAttribute('x2', x2);
                line.setAttribute('y2', y2);
                line.setAttribute('stroke', '#6b7280');
                line.setAttribute('stroke-width', '2');
                line.setAttribute('marker-end', 'url(#arrowhead)');
                
                // Create arrowhead marker if it doesn't exist
                if (!svg.querySelector('#arrowhead')) {
                    const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
                    const marker = document.createElementNS('http://www.w3.org/2000/svg', 'marker');
                    marker.setAttribute('id', 'arrowhead');
                    marker.setAttribute('markerWidth', '10');
                    marker.setAttribute('markerHeight', '7');
                    marker.setAttribute('refX', '0');
                    marker.setAttribute('refY', '3.5');
                    marker.setAttribute('orient', 'auto');
                    
                    const polygon = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
                    polygon.setAttribute('points', '0 0, 10 3.5, 0 7');
                    polygon.setAttribute('fill', '#6b7280');
                    
                    marker.appendChild(polygon);
                    defs.appendChild(marker);
                    svg.appendChild(defs);
                }
                
                return line;
            },
            
            play() {
                this.isPlaying = true;
                this.animate();
            },
            
            pause() {
                this.isPlaying = false;
            },
            
            reset() {
                this.currentStep = -1;
                this.render();
            },
            
            animate() {
                if (!this.isPlaying) return;
                
                setTimeout(() => {
                    if (this.currentStep < this.steps.length - 1) {
                        this.currentStep++;
                        this.render();
                        
                        if (this.isPlaying) {
                            this.animate();
                        }
                    } else {
                        this.isPlaying = false;
                    }
                }, 1000);
            }
        };
        
        visualization.render();
        return visualization;
    }
    
    /**
     * Handle visualization controls
     */
    handleVisualizationControl(action, step) {
        const visualization = this.visualizations.get(step.id);
        if (!visualization) return;
        
        switch (action) {
            case 'play':
                visualization.play();
                this.trackInteraction('visualization_play', step.id);
                break;
            case 'pause':
                visualization.pause();
                this.trackInteraction('visualization_pause', step.id);
                break;
            case 'reset':
                visualization.reset();
                this.trackInteraction('visualization_reset', step.id);
                break;
            case 'fullscreen':
                this.enterFullscreenMode(step.id);
                this.trackInteraction('visualization_fullscreen', step.id);
                break;
        }
    }
    
    /**
     * Handle interactive actions
     */
    handleInteractiveAction(action, step) {
        switch (action) {
            case 'hint':
                this.showHint(step);
                break;
            case 'explain':
                this.explainCode(step);
                break;
            case 'practice':
                this.enterPracticeMode(step);
                break;
        }
        
        this.trackInteraction('interactive_action', action);
        this.analytics.hintsUsed++;
    }
    
    /**
     * Show contextual hint
     */
    showHint(step) {
        const hints = step.hints || [
            "Try breaking down the problem into smaller steps",
            "Look at the example code and identify the pattern",
            "Consider the data types you're working with"
        ];
        
        const randomHint = hints[Math.floor(Math.random() * hints.length)];
        
        this.showToast(`💡 Hint: ${randomHint}`, 'info');
        
        if (this.accessibilityOptions.audioDescriptions) {
            this.speakText(`Hint: ${randomHint}`);
        }
    }
    
    /**
     * Explain code with speech synthesis
     */
    explainCode(step) {
        if (!step.explanation) {
            this.showToast('No explanation available for this step', 'warning');
            return;
        }
        
        if (this.speechSynthesis) {
            const utterance = new SpeechSynthesisUtterance(step.explanation);
            utterance.rate = 0.8;
            utterance.pitch = 1;
            this.speechSynthesis.speak(utterance);
        }
        
        // Also show text explanation
        this.showModal('Code Explanation', step.explanation);
    }
    
    /**
     * Enter practice mode
     */
    enterPracticeMode(step) {
        // Implementation would create an interactive coding environment
        this.showToast('Practice mode activated! Try modifying the code below.', 'success');
        
        // Focus on the console editor
        const editor = document.getElementById('codeEditor');
        if (editor) {
            editor.focus();
            
            // Pre-fill with practice code if available
            if (step.practiceCode) {
                editor.textContent = step.practiceCode;
            }
        }
    }
    
    // Additional methods would continue here...
    // (Accessibility features, mobile optimizations, analytics tracking, etc.)
    
    /**
     * Track user interactions for analytics
     */
    trackInteraction(type, data) {
        this.analytics.interactions.push({
            type,
            data,
            timestamp: Date.now(),
            stepIndex: this.currentStepIndex
        });
        
        // Update interaction counter in UI
        const counter = document.getElementById('interactionCount');
        if (counter) {
            counter.textContent = this.analytics.interactions.length;
        }
    }
    
    /**
     * Get step time estimate
     */
    getStepTimeEstimate(stepIndex) {
        const estimates = {
            0: 5,   // Introduction steps
            1: 8,   // Basic concepts
            2: 12,  // Interactive examples
            3: 15,  // Complex topics
            4: 10,  // Practice exercises
            5: 5    // Summary steps
        };
        
        return estimates[stepIndex % 6] || 10;
    }
    
    /**
     * Get step difficulty
     */
    getStepDifficulty(stepIndex) {
        const difficulties = ['Beginner', 'Easy', 'Medium', 'Advanced', 'Expert'];
        const difficultyIndex = Math.floor(stepIndex / 2) % difficulties.length;
        return difficulties[difficultyIndex];
    }
    
    /**
     * Show modal dialog
     */
    showModal(title, content) {
        // Implementation for modal dialog
        console.log(`Modal: ${title} - ${content}`);
    }
    
    /**
     * Show toast notification
     */
    showToast(message, type = 'info') {
        if (window.OpenCodeApp) {
            window.OpenCodeApp.showToast(message, type);
        }
    }
    
    /**
     * Speak text using speech synthesis
     */
    speakText(text) {
        if (this.speechSynthesis && !this.speechSynthesis.speaking) {
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.rate = 0.8;
            this.speechSynthesis.speak(utterance);
        }
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = EnhancedDemoEngine;
}