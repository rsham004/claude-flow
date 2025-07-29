#!/usr/bin/env python3

"""
Course Template Setup Verification Script (Python Version)

This script verifies that the student's development environment
is properly configured for the course.
"""

import os
import sys
import json
import subprocess
import platform
import shutil
from datetime import datetime
from pathlib import Path
from typing import List, Dict, Tuple, Optional

# ANSI color codes for console output
class Colors:
    GREEN = '\033[32m'
    RED = '\033[31m'
    YELLOW = '\033[33m'
    BLUE = '\033[34m'
    CYAN = '\033[36m'
    RESET = '\033[0m'
    BOLD = '\033[1m'

class Logger:
    @staticmethod
    def success(msg: str) -> None:
        print(f"{Colors.GREEN}✅ {msg}{Colors.RESET}")
    
    @staticmethod
    def error(msg: str) -> None:
        print(f"{Colors.RED}❌ {msg}{Colors.RESET}")
    
    @staticmethod
    def warning(msg: str) -> None:
        print(f"{Colors.YELLOW}⚠️  {msg}{Colors.RESET}")
    
    @staticmethod
    def info(msg: str) -> None:
        print(f"{Colors.BLUE}ℹ️  {msg}{Colors.RESET}")
    
    @staticmethod
    def header(msg: str) -> None:
        print(f"{Colors.BOLD}{Colors.CYAN}\n=== {msg} ==={Colors.RESET}")

class SetupVerifier:
    """Main class for verifying course setup requirements"""
    
    def __init__(self):
        self.results: List[Dict[str, str]] = []
        self.passed = 0
        self.failed = 0
        self.warnings = 0
    
    async def run_all_checks(self) -> None:
        """Run all verification checks"""
        Logger.header('Course Template Setup Verification (Python)')
        print(f"Platform: {platform.system()} {platform.machine()}")
        print(f"Python Version: {sys.version}")
        print(f"Timestamp: {datetime.now().isoformat()}\n")
        
        # System checks
        await self.check_python_version()
        await self.check_pip_installation()
        await self.check_git_installation()
        await self.check_code_editor()
        
        # Project structure checks
        await self.check_project_structure()
        await self.check_python_dependencies()
        await self.check_environment_files()
        
        # Optional tool checks
        await self.check_optional_tools()
        
        # Network and permissions
        await self.check_network_access()
        await self.check_file_permissions()
        
        # Generate summary
        self.generate_summary()
    
    async def check_python_version(self) -> None:
        """Check if Python version meets requirements"""
        Logger.header('Python Version Check')
        
        version_info = sys.version_info
        version_str = f"{version_info.major}.{version_info.minor}.{version_info.micro}"
        
        if version_info >= (3, 8):
            Logger.success(f"Python {version_str} - Compatible")
            self.record_result('Python Version', 'PASS', 
                             f"Version {version_str} meets requirements (>=3.8)")
        else:
            Logger.error(f"Python {version_str} - Too old! Please upgrade to Python 3.8 or higher")
            self.record_result('Python Version', 'FAIL', 
                             f"Version {version_str} is too old. Requires >=3.8")
    
    async def check_pip_installation(self) -> None:
        """Check if pip is installed and working"""
        Logger.header('pip Installation Check')
        
        try:
            result = subprocess.run([sys.executable, '-m', 'pip', '--version'], 
                                  capture_output=True, text=True, check=True)
            pip_version = result.stdout.strip()
            Logger.success(f"{pip_version} - Available")
            self.record_result('pip Installation', 'PASS', pip_version)
        except (subprocess.CalledProcessError, FileNotFoundError):
            Logger.error('pip not found or not working')
            self.record_result('pip Installation', 'FAIL', 'pip not available')
    
    async def check_git_installation(self) -> None:
        """Check Git installation and configuration"""
        Logger.header('Git Installation Check')
        
        try:
            result = subprocess.run(['git', '--version'], capture_output=True, text=True, check=True)
            git_version = result.stdout.strip()
            Logger.success(f"{git_version} - Installed")
            
            # Check git configuration
            try:
                user_name = subprocess.run(['git', 'config', 'user.name'], 
                                         capture_output=True, text=True, check=True).stdout.strip()
                user_email = subprocess.run(['git', 'config', 'user.email'], 
                                          capture_output=True, text=True, check=True).stdout.strip()
                
                if user_name and user_email:
                    Logger.success(f"Git configured with: {user_name} <{user_email}>")
                    self.record_result('Git Configuration', 'PASS', 
                                     f"Configured as {user_name} <{user_email}>")
                else:
                    Logger.warning('Git not configured. Run: git config --global user.name "Your Name" && git config --global user.email "your.email@example.com"')
                    self.record_result('Git Configuration', 'WARNING', 'Git not configured')
            except subprocess.CalledProcessError:
                Logger.warning('Git not configured globally')
                self.record_result('Git Configuration', 'WARNING', 'Not configured')
            
            self.record_result('Git Installation', 'PASS', git_version)
        except (subprocess.CalledProcessError, FileNotFoundError):
            Logger.error('Git not found. Please install Git from https://git-scm.com/')
            self.record_result('Git Installation', 'FAIL', 'Git not found')
    
    async def check_code_editor(self) -> None:
        """Check for available code editors"""
        Logger.header('Code Editor Check')
        
        editors = [
            {'name': 'VS Code', 'command': ['code', '--version'], 'recommended': True},
            {'name': 'PyCharm', 'command': ['pycharm', '--version'], 'recommended': True},
            {'name': 'Sublime Text', 'command': ['subl', '--version'], 'recommended': False},
            {'name': 'Vim', 'command': ['vim', '--version'], 'recommended': False},
            {'name': 'Nano', 'command': ['nano', '--version'], 'recommended': False}
        ]
        
        editor_found = False
        for editor in editors:
            try:
                subprocess.run(editor['command'], capture_output=True, check=True)
                status = '(Recommended)' if editor['recommended'] else ''
                Logger.success(f"{editor['name']} found {status}")
                self.record_result('Code Editor', 'PASS', f"{editor['name']} available")
                editor_found = True
                break
            except (subprocess.CalledProcessError, FileNotFoundError):
                continue
        
        if not editor_found:
            Logger.warning('No recognized code editor found. We recommend VS Code or PyCharm')
            self.record_result('Code Editor', 'WARNING', 'No editor detected')
    
    async def check_project_structure(self) -> None:
        """Check if required project structure exists"""
        Logger.header('Project Structure Check')
        
        required_directories = [
            'course-template',
            'course-template/01-fundamentals',
            'course-template/02-intermediate',
            'course-template/03-advanced',
            'course-template/04-expert',
            'course-template/common',
            'course-template/templates',
            'course-template/assessments',
            'course-template/tools'
        ]
        
        required_files = [
            'course-template/README.md',
            'course-template/common/code-examples/javascript-starter.js',
            'course-template/common/code-examples/python-starter.py',
            'course-template/templates/lesson-template/README.md',
            'course-template/templates/exercise-template/README.md',
            'course-template/templates/project-template/README.md'
        ]
        
        structure_valid = True
        
        # Check directories
        for directory in required_directories:
            if Path(directory).is_dir():
                Logger.success(f"Directory: {directory}")
            else:
                Logger.error(f"Missing directory: {directory}")
                structure_valid = False
        
        # Check files
        for file_path in required_files:
            if Path(file_path).is_file():
                Logger.success(f"File: {file_path}")
            else:
                Logger.error(f"Missing file: {file_path}")
                structure_valid = False
        
        self.record_result('Project Structure', 'PASS' if structure_valid else 'FAIL',
                          'All required files and directories present' if structure_valid 
                          else 'Missing required files/directories')
    
    async def check_python_dependencies(self) -> None:
        """Check Python dependencies and virtual environment"""
        Logger.header('Python Dependencies Check')
        
        # Check if requirements.txt exists
        requirements_path = Path('course-template/requirements.txt')
        
        if requirements_path.exists():
            Logger.success('requirements.txt found')
            
            # Check if virtual environment is activated
            if hasattr(sys, 'real_prefix') or (hasattr(sys, 'base_prefix') and sys.base_prefix != sys.prefix):
                Logger.success('Virtual environment detected')
                self.record_result('Virtual Environment', 'PASS', 'Virtual environment active')
            else:
                Logger.warning('No virtual environment detected. Consider using: python -m venv venv && source venv/bin/activate')
                self.record_result('Virtual Environment', 'WARNING', 'No virtual environment')
            
            # Try to check installed packages
            try:
                with open(requirements_path, 'r') as f:
                    requirements = [line.strip() for line in f if line.strip() and not line.startswith('#')]
                
                missing_packages = []
                for requirement in requirements:
                    package_name = requirement.split('==')[0].split('>=')[0].split('<=')[0]
                    try:
                        __import__(package_name)
                    except ImportError:
                        missing_packages.append(package_name)
                
                if missing_packages:
                    Logger.warning(f'Missing packages: {", ".join(missing_packages)}. Run: pip install -r requirements.txt')
                    self.record_result('Python Dependencies', 'WARNING', f'Missing: {", ".join(missing_packages)}')
                else:
                    Logger.success('All required packages appear to be installed')
                    self.record_result('Python Dependencies', 'PASS', 'All dependencies available')
                    
            except Exception as e:
                Logger.warning(f'Could not verify package installation: {e}')
                self.record_result('Python Dependencies', 'WARNING', 'Could not verify packages')
        else:
            Logger.info('No requirements.txt found (may be optional)')
            self.record_result('Python Dependencies', 'INFO', 'No requirements.txt')
    
    async def check_environment_files(self) -> None:
        """Check for environment configuration files"""
        Logger.header('Environment Files Check')
        
        env_files = [
            {'path': 'course-template/.env.example', 'required': False, 'description': 'Environment template'},
            {'path': 'course-template/.gitignore', 'required': True, 'description': 'Git ignore file'}
        ]
        
        all_good = True
        for env_file in env_files:
            if Path(env_file['path']).exists():
                Logger.success(f"{env_file['description']}: {env_file['path']}")
            elif env_file['required']:
                Logger.error(f"Missing required file: {env_file['path']}")
                all_good = False
            else:
                Logger.info(f"Optional file not found: {env_file['path']}")
        
        self.record_result('Environment Files', 'PASS' if all_good else 'FAIL',
                          'Environment setup acceptable' if all_good else 'Missing required files')
    
    async def check_optional_tools(self) -> None:
        """Check for optional development tools"""
        Logger.header('Optional Tools Check')
        
        optional_tools = [
            {'name': 'Node.js', 'command': ['node', '--version']},
            {'name': 'npm', 'command': ['npm', '--version']},
            {'name': 'Java', 'command': ['java', '-version']},
            {'name': 'Docker', 'command': ['docker', '--version']},
            {'name': 'curl', 'command': ['curl', '--version']},
            {'name': 'wget', 'command': ['wget', '--version']}
        ]
        
        for tool in optional_tools:
            try:
                subprocess.run(tool['command'], capture_output=True, check=True)
                Logger.success(f"{tool['name']}: Available")
            except (subprocess.CalledProcessError, FileNotFoundError):
                Logger.info(f"{tool['name']}: Not found (optional)")
        
        self.record_result('Optional Tools', 'INFO', 'Optional tools checked')
    
    async def check_network_access(self) -> None:
        """Check network connectivity to important services"""
        Logger.header('Network Access Check')
        
        test_urls = [
            'https://pypi.org/',
            'https://github.com',
            'https://api.github.com'
        ]
        
        network_issues = False
        for url in test_urls:
            try:
                # Use urllib for simple network check
                import urllib.request
                import urllib.error
                
                with urllib.request.urlopen(url, timeout=5) as response:
                    if response.status == 200:
                        Logger.success(f"Network access to {url}: OK")
                    else:
                        Logger.warning(f"Network access to {url}: Status {response.status}")
                        network_issues = True
            except (urllib.error.URLError, TimeoutError) as e:
                Logger.warning(f"Network access to {url}: Failed ({e})")
                network_issues = True
        
        self.record_result('Network Access', 'WARNING' if network_issues else 'PASS',
                          'Some network issues detected' if network_issues else 'Network access OK')
    
    async def check_file_permissions(self) -> None:
        """Check file system permissions"""
        Logger.header('File Permissions Check')
        
        try:
            # Test write permissions in current directory
            test_file = Path(f'.setup-test-{datetime.now().timestamp()}')
            test_file.write_text('test')
            test_file.unlink()
            
            Logger.success('File write permissions: OK')
            self.record_result('File Permissions', 'PASS', 'Write permissions available')
        except Exception as e:
            Logger.error(f"File permission issue: {e}")
            self.record_result('File Permissions', 'FAIL', f"Permission error: {e}")
    
    def record_result(self, category: str, status: str, details: str) -> None:
        """Record a verification result"""
        self.results.append({
            'category': category,
            'status': status,
            'details': details
        })
        
        if status == 'PASS':
            self.passed += 1
        elif status == 'FAIL':
            self.failed += 1
        elif status == 'WARNING':
            self.warnings += 1
    
    def generate_summary(self) -> None:
        """Generate and display verification summary"""
        Logger.header('Setup Verification Summary')
        
        print(f"{Colors.GREEN}✅ Passed: {self.passed}{Colors.RESET}")
        print(f"{Colors.RED}❌ Failed: {self.failed}{Colors.RESET}")
        print(f"{Colors.YELLOW}⚠️  Warnings: {self.warnings}{Colors.RESET}")
        
        if self.failed == 0:
            Logger.success('🎉 Congratulations! Your development environment is ready for the course.')
        else:
            Logger.error('⚠️  Please fix the failed checks before starting the course.')
        
        # Generate detailed report
        print('\n' + Colors.BOLD + 'Detailed Results:' + Colors.RESET)
        print('=' * 80)
        
        for result in self.results:
            status_color = (Colors.GREEN if result['status'] == 'PASS' else
                          Colors.RED if result['status'] == 'FAIL' else Colors.YELLOW)
            
            print(f"{status_color}{result['status']:<8}{Colors.RESET} "
                  f"{result['category']:<20} {result['details']}")
        
        # Save report to file
        self.save_report()
        
        print('\n' + Colors.CYAN + 'Next Steps:' + Colors.RESET)
        if self.failed > 0:
            print('1. Fix the failed checks listed above')
            print('2. Re-run this verification script')
            print('3. Contact your instructor if you need help')
        else:
            print('1. Start with Module 01 - Fundamentals')
            print('2. Read the course README.md for detailed instructions')
            print('3. Join the course discussion forum')
        
        print('\n' + Colors.BLUE + 'Support Resources:' + Colors.RESET)
        print('- Course Documentation: README.md')
        print('- Setup Guide: docs/setup.md')
        print('- Discussion Forum: [course-forum-url]')
        print('- Instructor Email: [instructor-email]')
    
    def save_report(self) -> None:
        """Save verification report to JSON file"""
        report = {
            'timestamp': datetime.now().isoformat(),
            'platform': f"{platform.system()} {platform.machine()}",
            'python_version': sys.version,
            'summary': {
                'passed': self.passed,
                'failed': self.failed,
                'warnings': self.warnings
            },
            'results': self.results
        }
        
        try:
            with open('setup-verification-report-python.json', 'w') as f:
                json.dump(report, f, indent=2)
            Logger.info('📄 Detailed report saved to: setup-verification-report-python.json')
        except Exception as e:
            Logger.warning(f'Could not save detailed report file: {e}')

async def main():
    """Main function to run verification"""
    verifier = SetupVerifier()
    
    try:
        await verifier.run_all_checks()
        
        # Exit with appropriate code
        sys.exit(1 if verifier.failed > 0 else 0)
    except Exception as e:
        Logger.error(f"Verification script error: {e}")
        sys.exit(1)

def show_help():
    """Show help message"""
    print("""
Course Template Setup Verification (Python)

Usage: python setup-verification.py [options]

Options:
  --help, -h     Show this help message
  --version, -v  Show version information
  --verbose      Enable verbose output
  --json         Output results in JSON format only

This script verifies that your Python development environment is properly
configured for the software development course.

Examples:
  python setup-verification.py
  python setup-verification.py --verbose
  python setup-verification.py --json > report.json
""")

if __name__ == '__main__':
    import asyncio
    
    # Handle command line arguments
    args = sys.argv[1:]
    
    if '--help' in args or '-h' in args:
        show_help()
        sys.exit(0)
    
    if '--version' in args or '-v' in args:
        print('Course Template Setup Verification (Python) v1.0.0')
        sys.exit(0)
    
    # Run async main function
    asyncio.run(main())