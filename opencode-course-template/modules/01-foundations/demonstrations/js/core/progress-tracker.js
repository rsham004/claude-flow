/**
 * OpenCode Progress Tracker
 * Handles learning progress, achievements, and analytics
 */

class ProgressTracker {
    constructor(initialState = {}) {
        this.state = {
            completedDemos: [],
            achievements: [],
            timeSpent: 0,
            skillPoints: 0,
            streakDays: 0,
            lastAccessDate: null,
            exercisesCompleted: 0,
            codeExecutions: 0,
            mistakesMade: 0,
            hintsUsed: 0,
            ...initialState
        };
        
        this.achievementDefinitions = this.initializeAchievements();
        this.startSession();
    }
    
    /**
     * Initialize achievement definitions
     */
    initializeAchievements() {
        return {
            'first-step': {
                id: 'first-step',
                title: 'First Steps',
                description: 'Complete your first demonstration',
                icon: '🎯',
                condition: (state) => state.completedDemos.length >= 1,
                points: 10
            },
            'code-runner': {
                id: 'code-runner',
                title: 'Code Runner',
                description: 'Execute code 10 times',
                icon: '🏃',
                condition: (state) => state.codeExecutions >= 10,
                points: 15
            },
            'problem-solver': {
                id: 'problem-solver',
                title: 'Problem Solver',
                description: 'Complete all demonstrations',
                icon: '🧩',
                condition: (state) => state.completedDemos.length >= 6,
                points: 50
            },
            'speed-learner': {
                id: 'speed-learner',
                title: 'Speed Learner',
                description: 'Complete a demo in under 30 minutes',
                icon: '⚡',
                condition: () => false, // Special condition handled elsewhere
                points: 20
            },
            'perfectionist': {
                id: 'perfectionist',
                title: 'Perfectionist',
                description: 'Complete 10 exercises without mistakes',
                icon: '💎',
                condition: (state) => state.exercisesCompleted >= 10 && state.mistakesMade === 0,
                points: 30
            },
            'collaborator': {
                id: 'collaborator',
                title: 'Collaborator',
                description: 'Share your work or help others',
                icon: '🤝',
                condition: () => false, // Special condition
                points: 25
            },
            'persistent': {
                id: 'persistent',
                title: 'Persistent Learner',
                description: 'Learn for 3 consecutive days',
                icon: '🔥',
                condition: (state) => state.streakDays >= 3,
                points: 20
            },
            'explorer': {
                id: 'explorer',
                title: 'Explorer',
                description: 'Try all programming languages in console',
                icon: '🗺️',
                condition: () => false, // Special condition
                points: 15
            },
            'debugger': {
                id: 'debugger',
                title: 'Debugger',
                description: 'Successfully fix 5 code errors',
                icon: '🐛',
                condition: () => false, // Special condition
                points: 25
            },
            'mentor': {
                id: 'mentor',
                title: 'Mentor',
                description: 'Help someone learn programming',
                icon: '🎓',
                condition: () => false, // Special condition
                points: 40
            }
        };
    }
    
    /**
     * Start a new learning session
     */
    startSession() {
        this.sessionStartTime = Date.now();
        this.sessionDemoStartTime = null;
        
        // Update streak
        this.updateStreak();
        
        // Load from localStorage
        this.loadFromStorage();
    }
    
    /**
     * Update learning streak
     */
    updateStreak() {
        const today = new Date().toDateString();
        const lastAccess = this.state.lastAccessDate;
        
        if (lastAccess) {
            const lastAccessDate = new Date(lastAccess);
            const todayDate = new Date(today);
            const diffDays = Math.floor((todayDate - lastAccessDate) / (1000 * 60 * 60 * 24));
            
            if (diffDays === 1) {
                // Consecutive day
                this.state.streakDays++;
            } else if (diffDays > 1) {
                // Streak broken
                this.state.streakDays = 1;
            }
            // Same day: no change
        } else {
            // First time
            this.state.streakDays = 1;
        }
        
        this.state.lastAccessDate = today;
        this.checkAchievements();
    }
    
    /**
     * Start tracking a demonstration
     */
    startDemo(demoType) {
        this.sessionDemoStartTime = Date.now();
        this.currentDemo = demoType;
    }
    
    /**
     * Complete a demonstration
     */
    completeDemo(demoType) {
        if (!this.state.completedDemos.includes(demoType)) {
            this.state.completedDemos.push(demoType);
            this.state.skillPoints += 10;
            
            // Check for speed learner achievement
            if (this.sessionDemoStartTime) {
                const demoTime = (Date.now() - this.sessionDemoStartTime) / (1000 * 60); // minutes
                if (demoTime < 30) {
                    this.awardAchievement('speed-learner');
                }
            }
            
            this.checkAchievements();
            this.saveToStorage();
        }
    }
    
    /**
     * Record code execution
     */
    recordCodeExecution() {
        this.state.codeExecutions++;
        this.checkAchievements();
    }
    
    /**
     * Record exercise completion
     */
    recordExerciseCompletion(hasErrors = false) {
        this.state.exercisesCompleted++;
        if (hasErrors) {
            this.state.mistakesMade++;
        }
        this.state.skillPoints += hasErrors ? 3 : 5;
        this.checkAchievements();
    }
    
    /**
     * Record hint usage
     */
    recordHintUsed() {
        this.state.hintsUsed++;
    }
    
    /**
     * Award achievement
     */
    awardAchievement(achievementId) {
        if (!this.state.achievements.includes(achievementId)) {
            this.state.achievements.push(achievementId);
            const achievement = this.achievementDefinitions[achievementId];
            if (achievement) {
                this.state.skillPoints += achievement.points;
                this.notifyAchievement(achievement);
            }
            this.saveToStorage();
        }
    }
    
    /**
     * Check for new achievements
     */
    checkAchievements() {
        Object.values(this.achievementDefinitions).forEach(achievement => {
            if (!this.state.achievements.includes(achievement.id) && 
                achievement.condition(this.state)) {
                this.awardAchievement(achievement.id);
            }
        });
    }
    
    /**
     * Notify about new achievement
     */
    notifyAchievement(achievement) {
        if (window.OpenCodeApp) {
            window.OpenCodeApp.showToast(
                `Achievement unlocked: ${achievement.title}! ${achievement.icon} (+${achievement.points} points)`,
                'success'
            );
        }
        
        // Trigger celebration animation
        this.triggerCelebration();
    }
    
    /**
     * Trigger celebration animation
     */
    triggerCelebration() {
        // Create confetti effect
        const confettiContainer = document.createElement('div');
        confettiContainer.className = 'confetti-container';
        confettiContainer.innerHTML = '🎉🎊✨🌟⭐🎈';
        confettiContainer.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 2rem;
            z-index: 10000;
            pointer-events: none;
            animation: confetti 2s ease-out forwards;
        `;
        
        document.body.appendChild(confettiContainer);
        
        setTimeout(() => {
            document.body.removeChild(confettiContainer);
        }, 2000);
    }
    
    /**
     * Get progress statistics
     */
    getStats() {
        const totalDemos = 6;
        const completionRate = (this.state.completedDemos.length / totalDemos) * 100;
        
        return {
            completedDemos: this.state.completedDemos.length,
            totalDemos: totalDemos,
            completionRate: Math.round(completionRate),
            achievements: this.state.achievements.length,
            totalAchievements: Object.keys(this.achievementDefinitions).length,
            skillPoints: this.state.skillPoints,
            timeSpent: this.getSessionTime(),
            streakDays: this.state.streakDays,
            skillLevel: this.calculateSkillLevel(),
            exercisesCompleted: this.state.exercisesCompleted,
            codeExecutions: this.state.codeExecutions,
            accuracy: this.calculateAccuracy()
        };
    }
    
    /**
     * Calculate skill level
     */
    calculateSkillLevel() {
        const points = this.state.skillPoints;
        
        if (points < 25) return 'Beginner';
        if (points < 75) return 'Learning';
        if (points < 150) return 'Progressing';
        if (points < 250) return 'Advanced';
        return 'Expert';
    }
    
    /**
     * Calculate accuracy rate
     */
    calculateAccuracy() {
        if (this.state.exercisesCompleted === 0) return 100;
        const correctExercises = this.state.exercisesCompleted - this.state.mistakesMade;
        return Math.round((correctExercises / this.state.exercisesCompleted) * 100);
    }
    
    /**
     * Get session time in minutes
     */
    getSessionTime() {
        if (!this.sessionStartTime) return 0;
        return Math.floor((Date.now() - this.sessionStartTime) / (1000 * 60));
    }
    
    /**
     * Get total time spent (including previous sessions)
     */
    getTotalTime() {
        return this.state.timeSpent + this.getSessionTime();
    }
    
    /**
     * Get achievements with details
     */
    getAchievements() {
        return this.state.achievements.map(id => this.achievementDefinitions[id]).filter(Boolean);
    }
    
    /**
     * Get available achievements (not yet earned)
     */
    getAvailableAchievements() {
        return Object.values(this.achievementDefinitions)
            .filter(achievement => !this.state.achievements.includes(achievement.id));
    }
    
    /**
     * Get learning analytics
     */
    getAnalytics() {
        const stats = this.getStats();
        const timePerDemo = stats.completedDemos > 0 ? 
            Math.round(stats.timeSpent / stats.completedDemos) : 0;
        
        return {
            ...stats,
            averageTimePerDemo: timePerDemo,
            learningVelocity: this.calculateLearningVelocity(),
            strongAreas: this.identifyStrongAreas(),
            improvementAreas: this.identifyImprovementAreas(),
            nextMilestone: this.getNextMilestone()
        };
    }
    
    /**
     * Calculate learning velocity (demos per session)
     */
    calculateLearningVelocity() {
        // Simple calculation based on recent activity
        const sessionsCount = Math.max(1, this.state.streakDays);
        return Math.round((this.state.completedDemos.length / sessionsCount) * 10) / 10;
    }
    
    /**
     * Identify strong areas based on completion patterns
     */
    identifyStrongAreas() {
        const areas = [];
        
        if (this.state.completedDemos.includes('variables')) areas.push('Variables & Data Types');
        if (this.state.completedDemos.includes('functions')) areas.push('Functions & Logic');
        if (this.state.completedDemos.includes('algorithms')) areas.push('Problem Solving');
        if (this.state.completedDemos.includes('html-css')) areas.push('Web Development');
        if (this.state.completedDemos.includes('git')) areas.push('Version Control');
        if (this.state.completedDemos.includes('web-project')) areas.push('Project Development');
        
        return areas;
    }
    
    /**
     * Identify areas for improvement
     */
    identifyImprovementAreas() {
        const areas = [];
        
        if (this.state.mistakesMade > this.state.exercisesCompleted * 0.3) {
            areas.push('Code Accuracy');
        }
        
        if (this.state.hintsUsed > this.state.exercisesCompleted * 0.5) {
            areas.push('Problem Solving Independence');
        }
        
        if (this.state.streakDays < 3) {
            areas.push('Consistent Practice');
        }
        
        return areas;
    }
    
    /**
     * Get next milestone
     */
    getNextMilestone() {
        const available = this.getAvailableAchievements();
        if (available.length === 0) return null;
        
        // Return the closest achievement
        return available.sort((a, b) => a.points - b.points)[0];
    }
    
    /**
     * Export progress data
     */
    exportData() {
        return {
            ...this.state,
            exportDate: new Date().toISOString(),
            version: '1.0'
        };
    }
    
    /**
     * Import progress data
     */
    importData(data) {
        if (data && data.version === '1.0') {
            this.state = { ...this.state, ...data };
            this.saveToStorage();
            this.checkAchievements();
        }
    }
    
    /**
     * Save progress to localStorage
     */
    saveToStorage() {
        try {
            // Update total time before saving
            this.state.timeSpent = this.getTotalTime();
            
            localStorage.setItem('opencode-progress', JSON.stringify(this.state));
        } catch (error) {
            console.error('Failed to save progress:', error);
        }
    }
    
    /**
     * Load progress from localStorage
     */
    loadFromStorage() {
        try {
            const saved = localStorage.getItem('opencode-progress');
            if (saved) {
                const data = JSON.parse(saved);
                this.state = { ...this.state, ...data };
                this.checkAchievements();
            }
        } catch (error) {
            console.error('Failed to load progress:', error);
        }
    }
    
    /**
     * Clear all progress data
     */
    clearProgress() {
        this.state = {
            completedDemos: [],
            achievements: [],
            timeSpent: 0,
            skillPoints: 0,
            streakDays: 0,
            lastAccessDate: null,
            exercisesCompleted: 0,
            codeExecutions: 0,
            mistakesMade: 0,
            hintsUsed: 0
        };
        
        localStorage.removeItem('opencode-progress');
    }
    
    /**
     * End current session
     */
    endSession() {
        this.saveToStorage();
    }
}

// Add confetti animation CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes confetti {
        0% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(0.5) rotate(0deg);
        }
        50% {
            opacity: 1;
            transform: translate(-50%, -60%) scale(1.2) rotate(180deg);
        }
        100% {
            opacity: 0;
            transform: translate(-50%, -70%) scale(0.8) rotate(360deg);
        }
    }
    
    .confetti-container {
        animation: confetti 2s ease-out forwards;
    }
`;
document.head.appendChild(style);

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ProgressTracker;
}