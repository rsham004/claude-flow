#!/usr/bin/env node

/**
 * Course Template Setup Verification Script
 * 
 * This script verifies that the student's development environment
 * is properly configured for the course.
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const os = require('os');

// ANSI color codes for console output
const colors = {
    green: '\x1b[32m',
    red: '\x1b[31m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    cyan: '\x1b[36m',
    reset: '\x1b[0m',
    bold: '\x1b[1m'
};

// Helper functions
const log = {
    success: (msg) => console.log(`${colors.green}✅ ${msg}${colors.reset}`),
    error: (msg) => console.log(`${colors.red}❌ ${msg}${colors.reset}`),
    warning: (msg) => console.log(`${colors.yellow}⚠️  ${msg}${colors.reset}`),
    info: (msg) => console.log(`${colors.blue}ℹ️  ${msg}${colors.reset}`),
    header: (msg) => console.log(`${colors.bold}${colors.cyan}\n=== ${msg} ===${colors.reset}`)
};

class SetupVerifier {
    constructor() {
        this.checks = [];
        this.passed = 0;
        this.failed = 0;
        this.warnings = 0;
        this.results = [];
    }

    async runAllChecks() {
        log.header('Course Template Setup Verification');
        console.log(`Platform: ${os.platform()} ${os.arch()}`);
        console.log(`Node.js Version: ${process.version}`);
        console.log(`Timestamp: ${new Date().toISOString()}\n`);

        // System checks
        await this.checkNodeVersion();
        await this.checkNpmVersion();
        await this.checkGitInstallation();
        await this.checkCodeEditor();
        
        // Project structure checks
        await this.checkProjectStructure();
        await this.checkDependencies();
        await this.checkEnvironmentFiles();
        
        // Optional tool checks
        await this.checkOptionalTools();
        
        // Network and permissions
        await this.checkNetworkAccess();
        await this.checkFilePermissions();
        
        // Generate summary
        this.generateSummary();
    }

    async checkNodeVersion() {
        log.header('Node.js Version Check');
        try {
            const version = process.version;
            const majorVersion = parseInt(version.slice(1).split('.')[0]);
            
            if (majorVersion >= 16) {
                log.success(`Node.js ${version} - Compatible`);
                this.recordResult('Node.js Version', 'PASS', `Version ${version} meets requirements (>=16)`);
            } else {
                log.error(`Node.js ${version} - Too old! Please upgrade to Node.js 16 or higher`);
                this.recordResult('Node.js Version', 'FAIL', `Version ${version} is too old. Requires >=16`);
            }
        } catch (error) {
            log.error('Node.js not found or not accessible');
            this.recordResult('Node.js Version', 'FAIL', 'Node.js not found');
        }
    }

    async checkNpmVersion() {
        log.header('npm Version Check');
        try {
            const npmVersion = execSync('npm --version', { encoding: 'utf8' }).trim();
            const majorVersion = parseInt(npmVersion.split('.')[0]);
            
            if (majorVersion >= 7) {
                log.success(`npm ${npmVersion} - Compatible`);
                this.recordResult('npm Version', 'PASS', `Version ${npmVersion} meets requirements (>=7)`);
            } else {
                log.warning(`npm ${npmVersion} - Consider upgrading to npm 7+`);
                this.recordResult('npm Version', 'WARNING', `Version ${npmVersion} works but upgrade recommended`);
            }
        } catch (error) {
            log.error('npm not found or not accessible');
            this.recordResult('npm Version', 'FAIL', 'npm not found');
        }
    }

    async checkGitInstallation() {
        log.header('Git Installation Check');
        try {
            const gitVersion = execSync('git --version', { encoding: 'utf8' }).trim();
            log.success(`${gitVersion} - Installed`);
            
            // Check git configuration
            try {
                const userName = execSync('git config user.name', { encoding: 'utf8' }).trim();
                const userEmail = execSync('git config user.email', { encoding: 'utf8' }).trim();
                
                if (userName && userEmail) {
                    log.success(`Git configured with: ${userName} <${userEmail}>`);
                    this.recordResult('Git Configuration', 'PASS', `Configured as ${userName} <${userEmail}>`);
                } else {
                    log.warning('Git not configured. Run: git config --global user.name "Your Name" && git config --global user.email "your.email@example.com"');
                    this.recordResult('Git Configuration', 'WARNING', 'Git not configured');
                }
            } catch (configError) {
                log.warning('Git not configured globally');
                this.recordResult('Git Configuration', 'WARNING', 'Not configured');
            }
            
            this.recordResult('Git Installation', 'PASS', gitVersion);
        } catch (error) {
            log.error('Git not found. Please install Git from https://git-scm.com/');
            this.recordResult('Git Installation', 'FAIL', 'Git not found');
        }
    }

    async checkCodeEditor() {
        log.header('Code Editor Check');
        const editors = [
            { name: 'VS Code', command: 'code --version', recommended: true },
            { name: 'Visual Studio', command: 'devenv /?', recommended: false },
            { name: 'Sublime Text', command: 'subl --version', recommended: false },
            { name: 'Atom', command: 'atom --version', recommended: false }
        ];

        let editorFound = false;
        for (const editor of editors) {
            try {
                execSync(editor.command, { stdio: 'ignore' });
                const status = editor.recommended ? '(Recommended)' : '';
                log.success(`${editor.name} found ${status}`);
                this.recordResult('Code Editor', 'PASS', `${editor.name} available`);
                editorFound = true;
                break;
            } catch (error) {
                // Editor not found, continue checking
            }
        }

        if (!editorFound) {
            log.warning('No recognized code editor found. We recommend VS Code: https://code.visualstudio.com/');
            this.recordResult('Code Editor', 'WARNING', 'No editor detected');
        }
    }

    async checkProjectStructure() {
        log.header('Project Structure Check');
        const requiredDirectories = [
            'course-template',
            'course-template/01-fundamentals',
            'course-template/02-intermediate',
            'course-template/03-advanced',
            'course-template/04-expert',
            'course-template/common',
            'course-template/templates',
            'course-template/assessments',
            'course-template/tools'
        ];

        const requiredFiles = [
            'course-template/README.md',
            'course-template/common/code-examples/javascript-starter.js',
            'course-template/common/code-examples/python-starter.py',
            'course-template/templates/lesson-template/README.md',
            'course-template/templates/exercise-template/README.md',
            'course-template/templates/project-template/README.md'
        ];

        let structureValid = true;

        // Check directories
        for (const dir of requiredDirectories) {
            if (fs.existsSync(dir) && fs.statSync(dir).isDirectory()) {
                log.success(`Directory: ${dir}`);
            } else {
                log.error(`Missing directory: ${dir}`);
                structureValid = false;
            }
        }

        // Check files
        for (const file of requiredFiles) {
            if (fs.existsSync(file) && fs.statSync(file).isFile()) {
                log.success(`File: ${file}`);
            } else {
                log.error(`Missing file: ${file}`);
                structureValid = false;
            }
        }

        this.recordResult('Project Structure', structureValid ? 'PASS' : 'FAIL', 
            structureValid ? 'All required files and directories present' : 'Missing required files/directories');
    }

    async checkDependencies() {
        log.header('Dependencies Check');
        
        // Check if package.json exists in course-template
        const packageJsonPath = path.join('course-template', 'package.json');
        
        if (fs.existsSync(packageJsonPath)) {
            try {
                const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
                log.success('package.json found');
                
                // Check if node_modules exists
                const nodeModulesPath = path.join('course-template', 'node_modules');
                if (fs.existsSync(nodeModulesPath)) {
                    log.success('node_modules directory found');
                    this.recordResult('Dependencies', 'PASS', 'Dependencies installed');
                } else {
                    log.warning('node_modules not found. Run: cd course-template && npm install');
                    this.recordResult('Dependencies', 'WARNING', 'Dependencies not installed');
                }
            } catch (error) {
                log.error('Invalid package.json format');
                this.recordResult('Dependencies', 'FAIL', 'Invalid package.json');
            }
        } else {
            log.info('No package.json found (optional for this template)');
            this.recordResult('Dependencies', 'INFO', 'No package.json required');
        }
    }

    async checkEnvironmentFiles() {
        log.header('Environment Files Check');
        
        const envFiles = [
            { path: 'course-template/.env.example', required: false, description: 'Environment template' },
            { path: 'course-template/.gitignore', required: true, description: 'Git ignore file' }
        ];

        for (const envFile of envFiles) {
            if (fs.existsSync(envFile.path)) {
                log.success(`${envFile.description}: ${envFile.path}`);
            } else if (envFile.required) {
                log.error(`Missing required file: ${envFile.path}`);
                this.recordResult('Environment Files', 'FAIL', `Missing ${envFile.path}`);
                continue;
            } else {
                log.info(`Optional file not found: ${envFile.path}`);
            }
        }

        this.recordResult('Environment Files', 'PASS', 'Environment setup acceptable');
    }

    async checkOptionalTools() {
        log.header('Optional Tools Check');
        
        const optionalTools = [
            { name: 'Python', command: 'python --version', alt: 'python3 --version' },
            { name: 'Java', command: 'java -version' },
            { name: 'Docker', command: 'docker --version' },
            { name: 'Yarn', command: 'yarn --version' }
        ];

        for (const tool of optionalTools) {
            try {
                const version = execSync(tool.command, { encoding: 'utf8', stdio: 'pipe' });
                log.success(`${tool.name}: Available`);
            } catch (error) {
                if (tool.alt) {
                    try {
                        const version = execSync(tool.alt, { encoding: 'utf8', stdio: 'pipe' });
                        log.success(`${tool.name}: Available (via ${tool.alt})`);
                        continue;
                    } catch (altError) {
                        // Fall through to not found
                    }
                }
                log.info(`${tool.name}: Not found (optional)`);
            }
        }

        this.recordResult('Optional Tools', 'INFO', 'Optional tools checked');
    }

    async checkNetworkAccess() {
        log.header('Network Access Check');
        
        const testUrls = [
            'https://registry.npmjs.org/',
            'https://github.com',
            'https://api.github.com'
        ];

        let networkIssues = false;
        for (const url of testUrls) {
            try {
                // Simple network check using Node.js built-ins
                const https = require('https');
                await new Promise((resolve, reject) => {
                    const req = https.get(url, { timeout: 5000 }, (res) => {
                        log.success(`Network access to ${url}: OK`);
                        resolve();
                    });
                    req.on('error', reject);
                    req.on('timeout', () => reject(new Error('Timeout')));
                });
            } catch (error) {
                log.warning(`Network access to ${url}: Failed (${error.message})`);
                networkIssues = true;
            }
        }

        this.recordResult('Network Access', networkIssues ? 'WARNING' : 'PASS', 
            networkIssues ? 'Some network issues detected' : 'Network access OK');
    }

    async checkFilePermissions() {
        log.header('File Permissions Check');
        
        try {
            // Test write permissions in current directory
            const testFile = path.join(process.cwd(), '.setup-test-' + Date.now());
            fs.writeFileSync(testFile, 'test');
            fs.unlinkSync(testFile);
            
            log.success('File write permissions: OK');
            this.recordResult('File Permissions', 'PASS', 'Write permissions available');
        } catch (error) {
            log.error(`File permission issue: ${error.message}`);
            this.recordResult('File Permissions', 'FAIL', `Permission error: ${error.message}`);
        }
    }

    recordResult(category, status, details) {
        this.results.push({ category, status, details });
        
        switch (status) {
            case 'PASS':
                this.passed++;
                break;
            case 'FAIL':
                this.failed++;
                break;
            case 'WARNING':
                this.warnings++;
                break;
        }
    }

    generateSummary() {
        log.header('Setup Verification Summary');
        
        console.log(`${colors.green}✅ Passed: ${this.passed}${colors.reset}`);
        console.log(`${colors.red}❌ Failed: ${this.failed}${colors.reset}`);
        console.log(`${colors.yellow}⚠️  Warnings: ${this.warnings}${colors.reset}`);
        
        if (this.failed === 0) {
            log.success('🎉 Congratulations! Your development environment is ready for the course.');
        } else {
            log.error('⚠️  Please fix the failed checks before starting the course.');
        }

        // Generate detailed report
        console.log('\n' + colors.bold + 'Detailed Results:' + colors.reset);
        console.log('='.repeat(80));
        
        for (const result of this.results) {
            const statusColor = result.status === 'PASS' ? colors.green : 
                              result.status === 'FAIL' ? colors.red : colors.yellow;
            
            console.log(`${statusColor}${result.status.padEnd(8)}${colors.reset} ${result.category.padEnd(20)} ${result.details}`);
        }

        // Save report to file
        this.saveReport();
        
        console.log('\n' + colors.cyan + 'Next Steps:' + colors.reset);
        if (this.failed > 0) {
            console.log('1. Fix the failed checks listed above');
            console.log('2. Re-run this verification script');
            console.log('3. Contact your instructor if you need help');
        } else {
            console.log('1. Start with Module 01 - Fundamentals');
            console.log('2. Read the course README.md for detailed instructions');
            console.log('3. Join the course discussion forum');
        }
        
        console.log('\n' + colors.blue + 'Support Resources:' + colors.reset);
        console.log('- Course Documentation: README.md');
        console.log('- Setup Guide: docs/setup.md');
        console.log('- Discussion Forum: [course-forum-url]');
        console.log('- Instructor Email: [instructor-email]');
    }

    saveReport() {
        const report = {
            timestamp: new Date().toISOString(),
            platform: `${os.platform()} ${os.arch()}`,
            nodeVersion: process.version,
            summary: {
                passed: this.passed,
                failed: this.failed,
                warnings: this.warnings
            },
            results: this.results
        };

        try {
            fs.writeFileSync('setup-verification-report.json', JSON.stringify(report, null, 2));
            log.info('📄 Detailed report saved to: setup-verification-report.json');
        } catch (error) {
            log.warning('Could not save detailed report file');
        }
    }
}

// Main execution
async function main() {
    const verifier = new SetupVerifier();
    
    try {
        await verifier.runAllChecks();
        
        // Exit with appropriate code
        process.exit(verifier.failed > 0 ? 1 : 0);
    } catch (error) {
        log.error(`Verification script error: ${error.message}`);
        process.exit(1);
    }
}

// Handle command line arguments
const args = process.argv.slice(2);
if (args.includes('--help') || args.includes('-h')) {
    console.log(`
Course Template Setup Verification

Usage: node setup-verification.js [options]

Options:
  --help, -h     Show this help message
  --version, -v  Show version information
  --verbose      Enable verbose output
  --json         Output results in JSON format

This script verifies that your development environment is properly
configured for the software development course.

Examples:
  node setup-verification.js
  node setup-verification.js --verbose
  node setup-verification.js --json > report.json
`);
    process.exit(0);
}

if (args.includes('--version') || args.includes('-v')) {
    console.log('Course Template Setup Verification v1.0.0');
    process.exit(0);
}

// Run the main function
if (require.main === module) {
    main();
}

module.exports = SetupVerifier;