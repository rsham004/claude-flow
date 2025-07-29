/**
 * Git Workflow Interactive Demonstration
 * Teaches version control concepts with simulated Git commands
 */

class GitDemo extends BaseDemo {
    constructor(container) {
        super(container);
        this.repository = {
            commits: [],
            branches: ['main'],
            currentBranch: 'main',
            files: {}
        };
        this.commitCount = 0;
    }
    
    getTitle() {
        return 'Git Workflow Basics';
    }
    
    getDemoType() {
        return 'git';
    }
    
    setupSteps() {
        this.steps = [
            {
                id: 'version-control-intro',
                title: 'What is Version Control?',
                description: 'Learn why version control is essential for any development project.',
                content: this.generateVersionControlContent(),
                interactive: this.generateVersionControlInteractive()
            },
            {
                id: 'git-basics',
                title: 'Git Basics',
                description: 'Understand repositories, commits, and the basic Git workflow.',
                content: this.generateGitBasicsContent(),
                interactive: this.generateGitBasicsInteractive(),
                exercise: {
                    description: 'Initialize a repository and make your first commit.',
                    content: this.generateGitBasicsExercise(),
                    solution: `git init\ngit add README.md\ngit commit -m "Initial commit"`
                }
            },
            {
                id: 'branching',
                title: 'Branching and Merging',
                description: 'Learn how to create branches for features and merge them back.',
                content: this.generateBranchingContent(),
                interactive: this.generateBranchingInteractive()
            },
            {
                id: 'collaboration',
                title: 'Collaboration with Git',
                description: 'Work with remote repositories and collaborate with others.',
                content: this.generateCollaborationContent(),
                interactive: this.generateCollaborationInteractive()
            },
            {
                id: 'best-practices',
                title: 'Git Best Practices',
                description: 'Learn professional Git workflows and best practices.',
                content: this.generateBestPracticesContent(),
                interactive: this.generateBestPracticesInteractive()
            }
        ];
    }
    
    generateVersionControlContent() {
        return `
            <div class="version-control-intro">
                <h4>📚 Why Version Control?</h4>
                
                <div class="problem-solution">
                    <div class="problem">
                        <h5>❌ Without Version Control</h5>
                        <ul>
                            <li>project_final.docx</li>
                            <li>project_final_v2.docx</li>
                            <li>project_final_REALLY_FINAL.docx</li>
                            <li>project_final_v3_johns_changes.docx</li>
                            <li>😵 Which one is the real final version?</li>
                        </ul>
                    </div>
                    
                    <div class="solution">
                        <h5>✅ With Version Control</h5>
                        <ul>
                            <li>📁 project/</li>
                            <li>📖 Complete history of all changes</li>
                            <li>👥 Multiple people can work together</li>
                            <li>🔄 Easy to revert mistakes</li>
                            <li>🌿 Parallel development with branches</li>
                        </ul>
                    </div>
                </div>
                
                <h4>🎯 Git Benefits</h4>
                <div class="benefits-grid">
                    <div class="benefit">
                        <span class="benefit-icon">📈</span>
                        <h5>Track Changes</h5>
                        <p>See exactly what changed, when, and who changed it</p>
                    </div>
                    <div class="benefit">
                        <span class="benefit-icon">👥</span>
                        <h5>Collaboration</h5>
                        <p>Multiple developers can work on the same project</p>
                    </div>
                    <div class="benefit">
                        <span class="benefit-icon">⏪</span>
                        <h5>Revert Changes</h5>
                        <p>Go back to any previous version instantly</p>
                    </div>
                    <div class="benefit">
                        <span class="benefit-icon">🌿</span>
                        <h5>Branching</h5>
                        <p>Work on features in isolation</p>
                    </div>
                </div>
            </div>
        `;
    }
    
    generateVersionControlInteractive() {
        return `
            <div class="version-timeline">
                <h5>Version Control Timeline Simulator</h5>
                <div class="timeline-controls">
                    <button onclick="GitDemo.addVersion()" class="add-version-btn">Make a Change</button>
                    <button onclick="GitDemo.revertVersion()" class="revert-btn">Revert to Previous</button>
                    <button onclick="GitDemo.clearTimeline()" class="clear-btn">Start Over</button>
                </div>
                
                <div class="timeline-display" id="versionTimeline">
                    <div class="timeline-item initial">
                        <div class="timeline-marker">v1</div>
                        <div class="timeline-content">
                            <h6>Initial Version</h6>
                            <p>Created project structure</p>
                            <small>Just now</small>
                        </div>
                    </div>
                </div>
                
                <div class="current-state">
                    <h6>Current Project State:</h6>
                    <div class="project-files" id="projectFiles">
                        <div class="file">📄 README.md</div>
                        <div class="file">📁 src/</div>
                    </div>
                </div>
            </div>
        `;
    }
    
    generateGitBasicsContent() {
        return `
            <div class="git-basics">
                <h4>🏗️ Git Repository Structure</h4>
                
                <div class="git-areas">
                    <div class="git-area working">
                        <h5>Working Directory</h5>
                        <p>Your actual files - where you make changes</p>
                        <div class="area-files">
                            📄 index.html<br>
                            📄 style.css<br>
                            📄 script.js
                        </div>
                    </div>
                    
                    <div class="git-arrow">git add →</div>
                    
                    <div class="git-area staging">
                        <h5>Staging Area</h5>
                        <p>Files ready to be committed</p>
                        <div class="area-files">
                            ✅ index.html<br>
                            ✅ style.css
                        </div>
                    </div>
                    
                    <div class="git-arrow">git commit →</div>
                    
                    <div class="git-area repository">
                        <h5>Repository</h5>
                        <p>Permanent snapshot of your project</p>
                        <div class="area-files">
                            📸 Commit #123<br>
                            📸 Commit #122<br>
                            📸 Commit #121
                        </div>
                    </div>
                </div>
                
                <h4>📋 Essential Git Commands</h4>
                <div class="git-commands">
                    <div class="command-category">
                        <h5>Setup & Status</h5>
                        <div class="command">
                            <code>git init</code>
                            <span>Initialize a new repository</span>
                        </div>
                        <div class="command">
                            <code>git status</code>
                            <span>Check what's changed</span>
                        </div>
                        <div class="command">
                            <code>git log</code>
                            <span>View commit history</span>
                        </div>
                    </div>
                    
                    <div class="command-category">
                        <h5>Making Changes</h5>
                        <div class="command">
                            <code>git add &lt;file&gt;</code>
                            <span>Stage a file for commit</span>
                        </div>
                        <div class="command">
                            <code>git add .</code>
                            <span>Stage all changed files</span>
                        </div>
                        <div class="command">
                            <code>git commit -m "message"</code>
                            <span>Save changes with a message</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
    
    generateGitBasicsInteractive() {
        return `
            <div class="git-simulator">
                <h5>Git Command Simulator</h5>
                
                <div class="simulator-interface">
                    <div class="file-editor">
                        <h6>File Editor</h6>
                        <div class="file-tabs">
                            <button class="file-tab active" data-file="README.md">README.md</button>
                            <button class="file-tab" data-file="index.html">index.html</button>
                            <button class="add-file-btn" onclick="GitDemo.addFile()">+ New File</button>
                        </div>
                        <textarea id="fileContent" placeholder="Edit your file content here..."># My Project
This is a sample project to learn Git.</textarea>
                        <button onclick="GitDemo.saveFile()" class="save-file-btn">Save File</button>
                    </div>
                    
                    <div class="git-status">
                        <h6>Git Status</h6>
                        <div class="status-display" id="gitStatus">
                            <div class="status-section">
                                <strong>Untracked files:</strong>
                                <ul id="untrackedFiles"></ul>
                            </div>
                            <div class="status-section">
                                <strong>Modified files:</strong>
                                <ul id="modifiedFiles"></ul>
                            </div>
                            <div class="status-section">
                                <strong>Staged files:</strong>
                                <ul id="stagedFiles"></ul>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="git-commands-panel">
                    <h6>Git Commands</h6>
                    <div class="command-buttons">
                        <button onclick="GitDemo.gitInit()" class="git-cmd-btn">git init</button>
                        <button onclick="GitDemo.gitStatus()" class="git-cmd-btn">git status</button>
                        <button onclick="GitDemo.gitAdd()" class="git-cmd-btn">git add .</button>
                        <button onclick="GitDemo.gitCommit()" class="git-cmd-btn">git commit</button>
                        <button onclick="GitDemo.gitLog()" class="git-cmd-btn">git log</button>
                    </div>
                    
                    <div class="command-output" id="commandOutput">
                        <div class="output-line">Welcome to Git Simulator! Run 'git init' to start.</div>
                    </div>
                </div>
                
                <div class="commit-history">
                    <h6>Commit History</h6>
                    <div class="history-display" id="commitHistory">
                        <!-- Commits will appear here -->
                    </div>
                </div>
            </div>
        `;
    }
    
    generateGitBasicsExercise() {
        return `
            <div class="exercise-workspace">
                <div class="instructions">
                    <p><strong>Task:</strong> Practice the basic Git workflow:</p>
                    <ol>
                        <li>Initialize a new repository</li>
                        <li>Create a README.md file</li>
                        <li>Add the file to staging</li>
                        <li>Make your first commit</li>
                        <li>Check the commit history</li>
                    </ol>
                </div>
                <div class="terminal-workspace">
                    <div class="terminal-output" id="terminalOutput">
                        <div class="prompt-line">$ <span class="cursor">|</span></div>
                    </div>
                    <div class="terminal-input">
                        <span class="prompt">$ </span>
                        <input type="text" id="commandInput" placeholder="Enter git command..." onkeypress="GitDemo.handleCommand(event)" />
                    </div>
                </div>
                <div class="exercise-feedback" id="exerciseFeedback1"></div>
            </div>
        `;
    }
    
    generateBranchingContent() {
        return `
            <div class="branching-explanation">
                <h4>🌳 Git Branching and Merging</h4>
                <p>Branches allow you to work on different features simultaneously without affecting the main codebase.</p>
                
                <div class="branching-concepts">
                    <div class="concept">
                        <h5>Why Use Branches?</h5>
                        <ul>
                            <li><strong>Isolation:</strong> Work on features without breaking main code</li>
                            <li><strong>Collaboration:</strong> Multiple developers can work simultaneously</li>
                            <li><strong>Experimentation:</strong> Try new ideas safely</li>
                            <li><strong>Organization:</strong> Keep different features separate</li>
                        </ul>
                    </div>
                    
                    <div class="concept">
                        <h5>Common Branch Workflow:</h5>
                        <ol>
                            <li><code>git checkout -b feature-login</code> - Create new branch</li>
                            <li>Make changes and commit to the branch</li>
                            <li><code>git checkout main</code> - Switch back to main</li>
                            <li><code>git merge feature-login</code> - Merge changes</li>
                            <li><code>git branch -d feature-login</code> - Delete old branch</li>
                        </ol>
                    </div>
                </div>
                
                <div class="merge-types">
                    <h5>Types of Merges:</h5>
                    <div class="merge-type">
                        <h6>Fast-Forward Merge</h6>
                        <p>Simply moves the main branch pointer forward</p>
                        <div class="merge-diagram">main → A → B → C (feature)</div>
                    </div>
                    
                    <div class="merge-type">
                        <h6>Three-Way Merge</h6>
                        <p>Creates a new merge commit combining both branches</p>
                        <div class="merge-diagram">main → A → D<br>         └─ B → C (feature)</div>
                    </div>
                </div>
            </div>
        `;
    }
    
    generateBranchingInteractive() {
        return `
            <div class="branch-visualizer">
                <h5>Interactive Branch Visualizer</h5>
                
                <div class="branch-controls">
                    <input type="text" id="branchName" placeholder="Enter branch name..." />
                    <button onclick="GitDemo.createBranch()" class="branch-btn">Create Branch</button>
                    <button onclick="GitDemo.switchBranch()" class="switch-btn">Switch Branch</button>
                    <button onclick="GitDemo.mergeBranch()" class="merge-btn">Merge to Main</button>
                    <button onclick="GitDemo.resetBranches()" class="reset-branches-btn">Reset</button>
                </div>
                
                <div class="current-branch-info">
                    <strong>Current Branch:</strong> <span id="currentBranchDisplay">main</span>
                </div>
                
                <div class="branch-visualization" id="branchViz">
                    <div class="branch-line main-branch">
                        <div class="branch-label">main</div>
                        <div class="commit-dot" data-commit="initial">Initial</div>
                    </div>
                </div>
                
                <div class="branch-list">
                    <h6>Available Branches:</h6>
                    <ul id="branchList">
                        <li class="active-branch">main</li>
                    </ul>
                </div>
            </div>
        `;
    }
    
    generateCollaborationContent() {
        return `
            <div class="collaboration-guide">
                <h4>👥 Git Collaboration</h4>
                <p>Learn how to work with remote repositories and collaborate with other developers.</p>
                
                <div class="remote-concepts">
                    <div class="concept">
                        <h5>Remote Repositories</h5>
                        <p>Remote repositories are hosted on services like GitHub, GitLab, or Bitbucket.</p>
                        <div class="workflow-steps">
                            <div class="step">
                                <code>git clone &lt;url&gt;</code>
                                <span>Download a remote repository</span>
                            </div>
                            <div class="step">
                                <code>git remote -v</code>
                                <span>View configured remotes</span>
                            </div>
                            <div class="step">
                                <code>git push origin main</code>
                                <span>Upload changes to remote</span>
                            </div>
                            <div class="step">
                                <code>git pull origin main</code>
                                <span>Download remote changes</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="concept">
                        <h5>Collaboration Workflow</h5>
                        <ol>
                            <li><strong>Fork:</strong> Create your own copy of the project</li>
                            <li><strong>Clone:</strong> Download to your computer</li>
                            <li><strong>Branch:</strong> Create a feature branch</li>
                            <li><strong>Commit:</strong> Make and save changes</li>
                            <li><strong>Push:</strong> Upload to your fork</li>
                            <li><strong>Pull Request:</strong> Request to merge changes</li>
                        </ol>
                    </div>
                </div>
                
                <div class="conflict-resolution">
                    <h5>⚠️ Handling Merge Conflicts</h5>
                    <p>Conflicts occur when the same code is changed in different ways:</p>
                    <pre><code>&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD
Your changes
=======
Other person's changes
&gt;&gt;&gt;&gt;&gt;&gt;&gt; branch-name</code></pre>
                    <p><strong>Resolution steps:</strong></p>
                    <ol>
                        <li>Choose which changes to keep</li>
                        <li>Remove conflict markers (&lt;&lt;&lt;, ===, &gt;&gt;&gt;)</li>
                        <li>Test the code</li>
                        <li>Commit the resolution</li>
                    </ol>
                </div>
            </div>
        `;
    }
    
    generateCollaborationInteractive() {
        return `
            <div class="collaboration-simulator">
                <h5>Team Collaboration Simulator</h5>
                
                <div class="team-setup">
                    <h6>Team Members:</h6>
                    <div class="team-members">
                        <div class="member active">
                            <span class="member-avatar">👨‍💻</span>
                            <span class="member-name">You</span>
                            <span class="member-status">Active</span>
                        </div>
                        <div class="member">
                            <span class="member-avatar">👩‍💻</span>
                            <span class="member-name">Alice</span>
                            <span class="member-status">Working on feature-auth</span>
                        </div>
                        <div class="member">
                            <span class="member-avatar">👨‍💻</span>
                            <span class="member-name">Bob</span>
                            <span class="member-status">Working on feature-ui</span>
                        </div>
                    </div>
                </div>
                
                <div class="collaboration-actions">
                    <h6>Collaboration Actions:</h6>
                    <div class="action-buttons">
                        <button onclick="GitDemo.simulatePush()" class="collab-btn push-btn">Push Changes</button>
                        <button onclick="GitDemo.simulatePull()" class="collab-btn pull-btn">Pull Updates</button>
                        <button onclick="GitDemo.simulateConflict()" class="collab-btn conflict-btn">Create Conflict</button>
                        <button onclick="GitDemo.simulatePullRequest()" class="collab-btn pr-btn">Pull Request</button>
                    </div>
                </div>
                
                <div class="activity-feed" id="activityFeed">
                    <h6>Recent Activity:</h6>
                    <div class="activity-item">
                        <span class="activity-time">2 min ago</span>
                        <span class="activity-message">Alice pushed changes to feature-auth</span>
                    </div>
                    <div class="activity-item">
                        <span class="activity-time">5 min ago</span>
                        <span class="activity-message">Bob created pull request #42</span>
                    </div>
                </div>
                
                <div class="remote-status">
                    <h6>Repository Status:</h6>
                    <div class="status-info">
                        <div class="status-item">Local commits ahead: <span id="commitsAhead">0</span></div>
                        <div class="status-item">Remote commits behind: <span id="commitsBehind">2</span></div>
                        <div class="status-item">Active branches: <span id="activeBranches">3</span></div>
                    </div>
                </div>
            </div>
        `;
    }
    
    generateBestPracticesContent() {
        return `
            <div class="best-practices">
                <h4>✨ Git Best Practices</h4>
                <p>Professional Git workflows and conventions used in the industry.</p>
                
                <div class="practice-categories">
                    <div class="practice-category">
                        <h5>📝 Commit Messages</h5>
                        <div class="good-bad">
                            <div class="good">
                                <h6>✅ Good Messages</h6>
                                <ul>
                                    <li>"Add user authentication system"</li>
                                    <li>"Fix navigation menu bug on mobile"</li>
                                    <li>"Update README with installation steps"</li>
                                    <li>"Refactor user service for better performance"</li>
                                </ul>
                            </div>
                            <div class="bad">
                                <h6>❌ Bad Messages</h6>
                                <ul>
                                    <li>"fix"</li>
                                    <li>"stuff"</li>
                                    <li>"asdfasdf"</li>
                                    <li>"more changes"</li>
                                </ul>
                            </div>
                        </div>
                        <p><strong>Format:</strong> Start with verb, use present tense, be specific</p>
                    </div>
                    
                    <div class="practice-category">
                        <h5>🌳 Branch Naming</h5>
                        <div class="naming-conventions">
                            <div class="convention">
                                <strong>Feature branches:</strong> <code>feature/user-login</code>
                            </div>
                            <div class="convention">
                                <strong>Bug fixes:</strong> <code>bugfix/header-alignment</code>
                            </div>
                            <div class="convention">
                                <strong>Hot fixes:</strong> <code>hotfix/security-patch</code>
                            </div>
                            <div class="convention">
                                <strong>Experiments:</strong> <code>experiment/new-ui</code>
                            </div>
                        </div>
                    </div>
                    
                    <div class="practice-category">
                        <h5>🔄 Workflow Strategies</h5>
                        <div class="workflow">
                            <h6>Git Flow</h6>
                            <p>Structured workflow with specific branch types:</p>
                            <ul>
                                <li><code>main</code> - Production-ready code</li>
                                <li><code>develop</code> - Integration branch</li>
                                <li><code>feature/*</code> - New features</li>
                                <li><code>release/*</code> - Release preparation</li>
                                <li><code>hotfix/*</code> - Emergency fixes</li>
                            </ul>
                        </div>
                        
                        <div class="workflow">
                            <h6>GitHub Flow</h6>
                            <p>Simpler workflow for continuous deployment:</p>
                            <ol>
                                <li>Create branch from main</li>
                                <li>Make changes and commit</li>
                                <li>Open pull request</li>
                                <li>Review and merge</li>
                                <li>Deploy to production</li>
                            </ol>
                        </div>
                    </div>
                </div>
                
                <div class="common-mistakes">
                    <h5>⚠️ Common Mistakes to Avoid</h5>
                    <ul>
                        <li>Committing directly to main branch</li>
                        <li>Not pulling before pushing</li>
                        <li>Committing sensitive information (passwords, keys)</li>
                        <li>Making huge commits with many unrelated changes</li>
                        <li>Not using .gitignore file</li>
                        <li>Force pushing to shared branches</li>
                    </ul>
                </div>
            </div>
        `;
    }
    
    generateBestPracticesInteractive() {
        return `
            <div class="practice-checker">
                <h5>Git Practice Checker</h5>
                
                <div class="commit-message-tester">
                    <h6>Commit Message Quality Check</h6>
                    <input type="text" id="commitMessageInput" placeholder="Enter a commit message..." />
                    <button onclick="GitDemo.checkCommitMessage()" class="check-btn">Check Quality</button>
                    <div class="message-feedback" id="messageFeedback"></div>
                </div>
                
                <div class="branch-name-tester">
                    <h6>Branch Name Validator</h6>
                    <input type="text" id="branchNameInput" placeholder="Enter a branch name..." />
                    <button onclick="GitDemo.checkBranchName()" class="check-btn">Validate Name</button>
                    <div class="branch-feedback" id="branchFeedback"></div>
                </div>
                
                <div class="workflow-quiz">
                    <h6>Git Workflow Quiz</h6>
                    <div class="quiz-question">
                        <p>What should you do before pushing to a shared branch?</p>
                        <div class="quiz-options">
                            <label><input type="radio" name="q1" value="a"> Push immediately</label>
                            <label><input type="radio" name="q1" value="b"> Pull latest changes first</label>
                            <label><input type="radio" name="q1" value="c"> Delete the branch</label>
                        </div>
                    </div>
                    <button onclick="GitDemo.checkQuizAnswer()" class="quiz-btn">Check Answer</button>
                    <div class="quiz-result" id="quizResult"></div>
                </div>
                
                <div class="gitignore-generator">
                    <h6>.gitignore Generator</h6>
                    <p>Select your project type to generate a .gitignore file:</p>
                    <select id="projectType">
                        <option value="">Choose project type...</option>
                        <option value="node">Node.js</option>
                        <option value="python">Python</option>
                        <option value="java">Java</option>
                        <option value="web">Web Frontend</option>
                    </select>
                    <button onclick="GitDemo.generateGitignore()" class="generate-btn">Generate</button>
                    <div class="gitignore-output" id="gitignoreOutput"></div>
                </div>
            </div>
        `;
    }
    
    // Static methods for interactive elements
    static addVersion() {
        const timeline = document.getElementById('versionTimeline');
        const versionNumber = timeline.children.length + 1;
        
        const changes = [
            'Added new feature',
            'Fixed bug in navigation',
            'Updated styling',
            'Added user authentication',
            'Optimized performance',
            'Added error handling'
        ];
        
        const randomChange = changes[Math.floor(Math.random() * changes.length)];
        
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        timelineItem.innerHTML = `
            <div class="timeline-marker">v${versionNumber}</div>
            <div class="timeline-content">
                <h6>Version ${versionNumber}</h6>
                <p>${randomChange}</p>
                <small>Just now</small>
            </div>
        `;
        
        timeline.appendChild(timelineItem);
        timelineItem.scrollIntoView({ behavior: 'smooth' });
    }
    
    static revertVersion() {
        const timeline = document.getElementById('versionTimeline');
        if (timeline.children.length > 1) {
            timeline.removeChild(timeline.lastElementChild);
        }
    }
    
    static clearTimeline() {
        const timeline = document.getElementById('versionTimeline');
        timeline.innerHTML = `
            <div class="timeline-item initial">
                <div class="timeline-marker">v1</div>
                <div class="timeline-content">
                    <h6>Initial Version</h6>
                    <p>Created project structure</p>
                    <small>Just now</small>
                </div>
            </div>
        `;
    }
    
    static gitInit() {
        const output = document.getElementById('commandOutput');
        output.innerHTML += '<div class="output-line">$ git init</div>';
        output.innerHTML += '<div class="output-success">Initialized empty Git repository in /project/.git/</div>';
        output.scrollTop = output.scrollHeight;
    }
    
    static gitStatus() {
        const output = document.getElementById('commandOutput');
        output.innerHTML += '<div class="output-line">$ git status</div>';
        output.innerHTML += `<div class="output-text">On branch main
Untracked files:
  README.md
  index.html

nothing added to commit but untracked files present</div>`;
        output.scrollTop = output.scrollHeight;
    }
    
    static gitAdd() {
        const output = document.getElementById('commandOutput');
        output.innerHTML += '<div class="output-line">$ git add .</div>';
        output.innerHTML += '<div class="output-success">Files staged for commit</div>';
        output.scrollTop = output.scrollHeight;
    }
    
    static gitCommit() {
        const commitMessage = prompt('Enter commit message:') || 'Initial commit';
        const output = document.getElementById('commandOutput');
        output.innerHTML += `<div class="output-line">$ git commit -m "${commitMessage}"</div>`;
        output.innerHTML += `<div class="output-success">[main abc123] ${commitMessage}
 2 files changed, 10 insertions(+)
 create mode 100644 README.md
 create mode 100644 index.html</div>`;
        
        // Add to commit history
        const history = document.getElementById('commitHistory');
        const commit = document.createElement('div');
        commit.className = 'commit-item';
        commit.innerHTML = `
            <div class="commit-hash">abc123</div>
            <div class="commit-message">${commitMessage}</div>
            <div class="commit-meta">by Developer • just now</div>
        `;
        history.appendChild(commit);
        
        output.scrollTop = output.scrollHeight;
    }
    
    static gitLog() {
        const output = document.getElementById('commandOutput');
        output.innerHTML += '<div class="output-line">$ git log</div>';
        output.innerHTML += `<div class="output-text">commit abc123def456 (HEAD -> main)
Author: Developer <dev@example.com>
Date: ${new Date().toDateString()}

    Initial commit</div>`;
        output.scrollTop = output.scrollHeight;
    }
    
    static handleCommand(event) {
        if (event.key === 'Enter') {
            const input = event.target;
            const command = input.value.trim();
            const output = document.getElementById('commandOutput');
            
            // Add command to output
            output.innerHTML += `<div class="output-line">$ ${command}</div>`;
            
            // Process command
            if (command === 'git init') {
                GitDemo.gitInit();
            } else if (command === 'git status') {
                GitDemo.gitStatus();
            } else if (command === 'git add .') {
                GitDemo.gitAdd();
            } else if (command.startsWith('git commit')) {
                GitDemo.gitCommit();
            } else if (command === 'git log') {
                GitDemo.gitLog();
            } else {
                output.innerHTML += `<div class="output-error">Command not recognized: ${command}</div>`;
            }
            
            input.value = '';
            output.scrollTop = output.scrollHeight;
        }
    }
    
    static saveFile() {
        console.log('Saving file...');
    }
    
    static addFile() {
        const fileName = prompt('Enter file name:');
        if (fileName) {
            console.log('Adding file:', fileName);
        }
    }
    
    static checkExercise(exerciseNumber) {
        // Exercise checking logic would go here
        console.log('Checking Git exercise:', exerciseNumber);
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = GitDemo;
}