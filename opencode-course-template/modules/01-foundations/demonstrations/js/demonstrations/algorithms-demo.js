/**
 * Algorithms Interactive Demonstration
 * Visualizes sorting and searching algorithms with step-by-step execution
 */

class AlgorithmsDemo extends BaseDemo {
    constructor(container) {
        super(container);
        this.animationSpeed = 1000;
        this.isAnimating = false;
        this.currentAlgorithm = null;
    }
    
    getTitle() {
        return 'Basic Algorithms';
    }
    
    getDemoType() {
        return 'algorithms';
    }
    
    setupSteps() {
        this.steps = [
            {
                id: 'algo-intro',
                title: 'What are Algorithms?',
                description: 'Algorithms are step-by-step procedures for solving problems. Think of them as recipes for computers.',
                content: this.generateAlgorithmIntroContent(),
                interactive: this.generateAlgorithmIntroInteractive()
            },
            {
                id: 'bubble-sort',
                title: 'Bubble Sort',
                description: 'Learn how bubble sort works by repeatedly swapping adjacent elements.',
                content: this.generateBubbleSortContent(),
                interactive: this.generateBubbleSortInteractive(),
                exercise: {
                    description: 'Implement bubble sort algorithm step by step.',
                    content: this.generateBubbleSortExercise(),
                    solution: `function bubbleSort(arr) {\n    const n = arr.length;\n    for (let i = 0; i < n - 1; i++) {\n        for (let j = 0; j < n - i - 1; j++) {\n            if (arr[j] > arr[j + 1]) {\n                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];\n            }\n        }\n    }\n    return arr;\n}`
                }
            },
            {
                id: 'selection-sort',
                title: 'Selection Sort',
                description: 'Understand selection sort by finding the minimum element and placing it at the beginning.',
                content: this.generateSelectionSortContent(),
                interactive: this.generateSelectionSortInteractive()
            },
            {
                id: 'linear-search',
                title: 'Linear Search',
                description: 'Search through arrays one element at a time to find specific values.',
                content: this.generateLinearSearchContent(),
                interactive: this.generateLinearSearchInteractive()
            },
            {
                id: 'binary-search',
                title: 'Binary Search',
                description: 'Efficiently search sorted arrays by dividing the search space in half.',
                content: this.generateBinarySearchContent(),
                interactive: this.generateBinarySearchInteractive()
            },
            {
                id: 'complexity',
                title: 'Algorithm Complexity',
                description: 'Learn about Big O notation and how to analyze algorithm performance.',
                content: this.generateComplexityContent(),
                interactive: this.generateComplexityInteractive()
            }
        ];
    }
    
    generateAlgorithmIntroContent() {
        return `
            <div class="algorithm-intro">
                <h4>🧩 Algorithms in Everyday Life</h4>
                <div class="everyday-examples">
                    <div class="example">
                        <h5>🍳 Cooking Recipe</h5>
                        <ol>
                            <li>Gather ingredients</li>
                            <li>Preheat oven</li>
                            <li>Mix ingredients</li>
                            <li>Bake for 30 minutes</li>
                        </ol>
                    </div>
                    <div class="example">
                        <h5>🚗 GPS Navigation</h5>
                        <ol>
                            <li>Find current location</li>
                            <li>Calculate possible routes</li>
                            <li>Choose fastest route</li>
                            <li>Provide turn-by-turn directions</li>
                        </ol>
                    </div>
                </div>
                
                <h4>💻 Computer Algorithms</h4>
                <p>Computer algorithms solve problems like:</p>
                <ul>
                    <li><strong>Sorting:</strong> Arranging data in order</li>
                    <li><strong>Searching:</strong> Finding specific information</li>
                    <li><strong>Optimization:</strong> Finding the best solution</li>
                    <li><strong>Encryption:</strong> Securing data</li>
                </ul>
            </div>
        `;
    }
    
    generateAlgorithmIntroInteractive() {
        return `
            <div class="algorithm-playground">
                <h5>Algorithm Building Blocks</h5>
                <div class="building-blocks">
                    <div class="block" data-type="input">
                        <span class="block-icon">📥</span>
                        <span class="block-label">Input</span>
                    </div>
                    <div class="block" data-type="process">
                        <span class="block-icon">⚙️</span>
                        <span class="block-label">Process</span>
                    </div>
                    <div class="block" data-type="decision">
                        <span class="block-icon">❓</span>
                        <span class="block-label">Decision</span>
                    </div>
                    <div class="block" data-type="output">
                        <span class="block-icon">📤</span>
                        <span class="block-label">Output</span>
                    </div>
                </div>
                <p>Drag and arrange these blocks to create an algorithm!</p>
            </div>
        `;
    }
    
    generateBubbleSortContent() {
        return `
            <div class="bubble-sort-explanation">
                <h4>🫧 Bubble Sort Algorithm</h4>
                <p>Bubble sort repeatedly compares adjacent elements and swaps them if they're in the wrong order.</p>
                
                <div class="algorithm-steps">
                    <h5>How it works:</h5>
                    <ol>
                        <li>Compare first two elements</li>
                        <li>If first > second, swap them</li>
                        <li>Move to next pair</li>
                        <li>Repeat until end of array</li>
                        <li>Start over until no swaps needed</li>
                    </ol>
                </div>
                
                <div class="bubble-sort-example">
                    <h5>Example with [64, 34, 25, 12, 22, 11, 90]:</h5>
                    <div class="sort-steps">
                        <div class="step">
                            <strong>Pass 1:</strong> [34, 25, 12, 22, 11, 64, 90] (64 bubbles to end)
                        </div>
                        <div class="step">
                            <strong>Pass 2:</strong> [25, 12, 22, 11, 34, 64, 90] (34 bubbles to position)
                        </div>
                        <div class="step">
                            <strong>Continue...</strong> until array is sorted
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
    
    generateBubbleSortInteractive() {
        return `
            <div class="sorting-visualizer">
                <h5>Interactive Bubble Sort</h5>
                <div class="array-input">
                    <label>Enter numbers to sort (comma-separated):</label>
                    <input type="text" id="sortArray" value="64, 34, 25, 12, 22, 11, 90" />
                    <button onclick="AlgorithmsDemo.initializeSort()" class="init-btn">Initialize</button>
                </div>
                
                <div class="sort-controls">
                    <button onclick="AlgorithmsDemo.stepSort()" class="step-btn">Step</button>
                    <button onclick="AlgorithmsDemo.playSort()" class="play-btn">Play</button>
                    <button onclick="AlgorithmsDemo.resetSort()" class="reset-btn">Reset</button>
                    <label>Speed: <input type="range" id="speedSlider" min="100" max="2000" value="1000" /></label>
                </div>
                
                <div class="visualization-area" id="sortVisualization">
                    <!-- Bars will be generated here -->
                </div>
                
                <div class="sort-info" id="sortInfo">
                    <div class="info-item">Pass: <span id="currentPass">0</span></div>
                    <div class="info-item">Comparisons: <span id="comparisons">0</span></div>
                    <div class="info-item">Swaps: <span id="swaps">0</span></div>
                </div>
            </div>
        `;
    }
    
    generateBubbleSortExercise() {
        return `
            <div class="exercise-workspace">
                <div class="instructions">
                    <p><strong>Task:</strong> Implement the bubble sort algorithm:</p>
                    <ul>
                        <li>Create a function that takes an array as input</li>
                        <li>Use nested loops to compare adjacent elements</li>
                        <li>Swap elements if they're in wrong order</li>
                        <li>Return the sorted array</li>
                    </ul>
                </div>
                <div class="code-workspace">
                    <textarea id="exerciseCode1" placeholder="function bubbleSort(arr) {
    // Your implementation here
    // Remember: compare adjacent elements and swap if needed
    
    return arr;
}

// Test your function
const testArray = [64, 34, 25, 12, 22, 11, 90];
console.log('Original:', testArray);
console.log('Sorted:', bubbleSort([...testArray]));" rows="12"></textarea>
                    <button onclick="AlgorithmsDemo.checkExercise(1)" class="check-btn">Check Answer</button>
                </div>
                <div class="exercise-feedback" id="exerciseFeedback1"></div>
            </div>
        `;
    }
    
    // Placeholder implementations for other sort methods
    generateSelectionSortContent() {
        return `
            <div class="selection-sort-explanation">
                <h4>🎯 Selection Sort Algorithm</h4>
                <p>Selection sort finds the smallest element and moves it to the beginning, then repeats for the remaining elements.</p>
                
                <div class="algorithm-steps">
                    <h5>How it works:</h5>
                    <ol>
                        <li>Find the minimum element in the unsorted portion</li>
                        <li>Swap it with the first element of unsorted portion</li>
                        <li>Move the boundary of sorted/unsorted portions</li>
                        <li>Repeat until entire array is sorted</li>
                    </ol>
                </div>
                
                <div class="selection-sort-example">
                    <h5>Example with [64, 25, 12, 22, 11]:</h5>
                    <div class="sort-steps">
                        <div class="step">
                            <strong>Step 1:</strong> Find min (11), swap with first → [11, 25, 12, 22, 64]
                        </div>
                        <div class="step">
                            <strong>Step 2:</strong> Find min in remaining (12), swap → [11, 12, 25, 22, 64]
                        </div>
                        <div class="step">
                            <strong>Step 3:</strong> Continue until sorted → [11, 12, 22, 25, 64]
                        </div>
                    </div>
                </div>
                
                <div class="complexity-info">
                    <h5>⏱️ Time Complexity:</h5>
                    <p><strong>O(n²)</strong> - Always performs the same number of comparisons regardless of input</p>
                </div>
            </div>
        `;
    }
    
    generateSelectionSortInteractive() {
        return `
            <div class="selection-sort-demo">
                <h5>Interactive Selection Sort</h5>
                <div class="array-display" id="selectionArray">
                    <div class="array-item" data-value="64">64</div>
                    <div class="array-item" data-value="25">25</div>
                    <div class="array-item" data-value="12">12</div>
                    <div class="array-item" data-value="22">22</div>
                    <div class="array-item" data-value="11">11</div>
                </div>
                
                <div class="sort-controls">
                    <button onclick="AlgorithmsDemo.stepSelectionSort()" class="step-btn">Next Step</button>
                    <button onclick="AlgorithmsDemo.resetSelectionSort()" class="reset-btn">Reset</button>
                </div>
                
                <div class="sort-explanation" id="selectionExplanation">
                    Click "Next Step" to see how selection sort works!
                </div>
            </div>
        `;
    }
    
    generateLinearSearchContent() {
        return `
            <div class="linear-search-explanation">
                <h4>🔍 Linear Search Algorithm</h4>
                <p>Linear search checks each element in an array sequentially until the target is found or the end is reached.</p>
                
                <div class="algorithm-steps">
                    <h5>How it works:</h5>
                    <ol>
                        <li>Start at the first element</li>
                        <li>Compare current element with target</li>
                        <li>If match found, return the index</li>
                        <li>If not, move to next element</li>
                        <li>Repeat until found or end of array</li>
                    </ol>
                </div>
                
                <div class="search-example">
                    <h5>Example: Search for 25 in [10, 23, 45, 25, 67, 89]:</h5>
                    <div class="search-steps">
                        <div class="step">Check index 0: 10 ≠ 25</div>
                        <div class="step">Check index 1: 23 ≠ 25</div>
                        <div class="step">Check index 2: 45 ≠ 25</div>
                        <div class="step">Check index 3: 25 = 25 ✅ Found at index 3!</div>
                    </div>
                </div>
                
                <div class="complexity-info">
                    <h5>⏱️ Time Complexity:</h5>
                    <ul>
                        <li><strong>Best case:</strong> O(1) - Element is first</li>
                        <li><strong>Worst case:</strong> O(n) - Element is last or not found</li>
                        <li><strong>Average case:</strong> O(n/2) - Element is in middle</li>
                    </ul>
                </div>
            </div>
        `;
    }
    
    generateLinearSearchInteractive() {
        return `
            <div class="search-demo">
                <h5>Interactive Linear Search</h5>
                
                <div class="search-input">
                    <label>Array: </label>
                    <input type="text" id="searchArray" value="10, 23, 45, 25, 67, 89, 12" />
                    <label>Search for: </label>
                    <input type="number" id="searchTarget" value="25" />
                    <button onclick="AlgorithmsDemo.startLinearSearch()" class="search-btn">Start Search</button>
                </div>
                
                <div class="search-visualization" id="searchVisualization">
                    <!-- Search visualization will appear here -->
                </div>
                
                <div class="search-info" id="searchInfo">
                    <div class="info-item">Current index: <span id="currentIndex">-</span></div>
                    <div class="info-item">Comparisons: <span id="searchComparisons">0</span></div>
                    <div class="info-item">Status: <span id="searchStatus">Ready</span></div>
                </div>
            </div>
        `;
    }
    
    generateBinarySearchContent() {
        return `
            <div class="binary-search-explanation">
                <h4>🎯 Binary Search Algorithm</h4>
                <p>Binary search efficiently finds elements in sorted arrays by repeatedly dividing the search space in half.</p>
                
                <div class="algorithm-steps">
                    <h5>How it works:</h5>
                    <ol>
                        <li>Start with entire sorted array</li>
                        <li>Find middle element</li>
                        <li>If middle = target, found!</li>
                        <li>If target < middle, search left half</li>
                        <li>If target > middle, search right half</li>
                        <li>Repeat until found or no elements left</li>
                    </ol>
                </div>
                
                <div class="binary-search-example">
                    <h5>Example: Search for 25 in [11, 12, 22, 25, 64, 67, 89]:</h5>
                    <div class="search-steps">
                        <div class="step">Middle: 25 = 25 ✅ Found immediately!</div>
                    </div>
                    <h5>Search for 67:</h5>
                    <div class="search-steps">
                        <div class="step">Middle: 25 < 67, search right half</div>
                        <div class="step">Middle of [64, 67, 89]: 67 = 67 ✅ Found!</div>
                    </div>
                </div>
                
                <div class="complexity-info">
                    <h5>⏱️ Time Complexity:</h5>
                    <p><strong>O(log n)</strong> - Much faster than linear search for large datasets!</p>
                    <div class="comparison">
                        <div>Array size 1,000: Linear = 1,000 steps, Binary = 10 steps</div>
                        <div>Array size 1,000,000: Linear = 1,000,000 steps, Binary = 20 steps</div>
                    </div>
                </div>
            </div>
        `;
    }
    
    generateBinarySearchInteractive() {
        return `
            <div class="binary-search-demo">
                <h5>Interactive Binary Search</h5>
                
                <div class="search-input">
                    <label>Sorted Array: </label>
                    <input type="text" id="binaryArray" value="11, 12, 22, 25, 64, 67, 89" />
                    <label>Search for: </label>
                    <input type="number" id="binaryTarget" value="67" />
                    <button onclick="AlgorithmsDemo.startBinarySearch()" class="search-btn">Start Search</button>
                </div>
                
                <div class="binary-visualization" id="binaryVisualization">
                    <!-- Binary search visualization will appear here -->
                </div>
                
                <div class="binary-info" id="binaryInfo">
                    <div class="info-item">Left: <span id="leftPointer">-</span></div>
                    <div class="info-item">Middle: <span id="middlePointer">-</span></div>
                    <div class="info-item">Right: <span id="rightPointer">-</span></div>
                    <div class="info-item">Comparisons: <span id="binaryComparisons">0</span></div>
                </div>
            </div>
        `;
    }
    
    generateComplexityContent() {
        return `
            <div class="complexity-explanation">
                <h4>📊 Algorithm Complexity (Big O)</h4>
                <p>Big O notation describes how algorithm performance scales with input size.</p>
                
                <div class="complexity-types">
                    <div class="complexity-item excellent">
                        <h5>O(1) - Constant</h5>
                        <p>Same time regardless of input size</p>
                        <div class="example">Array access: arr[5]</div>
                    </div>
                    
                    <div class="complexity-item good">
                        <h5>O(log n) - Logarithmic</h5>
                        <p>Time increases slowly with input size</p>
                        <div class="example">Binary search</div>
                    </div>
                    
                    <div class="complexity-item fair">
                        <h5>O(n) - Linear</h5>
                        <p>Time increases proportionally with input</p>
                        <div class="example">Linear search, simple loops</div>
                    </div>
                    
                    <div class="complexity-item poor">
                        <h5>O(n²) - Quadratic</h5>
                        <p>Time increases with square of input</p>
                        <div class="example">Bubble sort, nested loops</div>
                    </div>
                    
                    <div class="complexity-item terrible">
                        <h5>O(2ⁿ) - Exponential</h5>
                        <p>Time doubles with each additional input</p>
                        <div class="example">Naive recursive algorithms</div>
                    </div>
                </div>
                
                <div class="growth-comparison">
                    <h5>Growth Comparison (n = input size):</h5>
                    <table>
                        <tr><th>n</th><th>O(1)</th><th>O(log n)</th><th>O(n)</th><th>O(n²)</th><th>O(2ⁿ)</th></tr>
                        <tr><td>10</td><td>1</td><td>3</td><td>10</td><td>100</td><td>1,024</td></tr>
                        <tr><td>100</td><td>1</td><td>7</td><td>100</td><td>10,000</td><td>1.3×10³⁰</td></tr>
                        <tr><td>1,000</td><td>1</td><td>10</td><td>1,000</td><td>1,000,000</td><td>∞</td></tr>
                    </table>
                </div>
            </div>
        `;
    }
    
    generateComplexityInteractive() {
        return `
            <div class="complexity-calculator">
                <h5>Algorithm Performance Calculator</h5>
                
                <div class="calculator-input">
                    <label>Input size (n): </label>
                    <input type="number" id="inputSize" value="100" min="1" max="10000" />
                    <button onclick="AlgorithmsDemo.calculateComplexity()" class="calc-btn">Calculate</button>
                </div>
                
                <div class="complexity-results" id="complexityResults">
                    <!-- Results will appear here -->
                </div>
                
                <div class="complexity-chart" id="complexityChart">
                    <!-- Chart visualization will appear here -->
                </div>
                
                <div class="algorithm-comparison">
                    <h6>Real-world Algorithm Comparison:</h6>
                    <div class="comparison-grid">
                        <div class="comparison-item">
                            <strong>Linear Search:</strong> O(n)
                            <div class="use-case">Good for small, unsorted lists</div>
                        </div>
                        <div class="comparison-item">
                            <strong>Binary Search:</strong> O(log n)
                            <div class="use-case">Best for large, sorted lists</div>
                        </div>
                        <div class="comparison-item">
                            <strong>Bubble Sort:</strong> O(n²)
                            <div class="use-case">Educational only, too slow for real use</div>
                        </div>
                        <div class="comparison-item">
                            <strong>Quick Sort:</strong> O(n log n)
                            <div class="use-case">Industry standard for sorting</div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
    
    // Static methods for interactive elements
    static initializeSort() {
        const input = document.getElementById('sortArray');
        const values = input.value.split(',').map(n => parseInt(n.trim())).filter(n => !isNaN(n));
        
        if (values.length === 0) {
            alert('Please enter valid numbers');
            return;
        }
        
        this.sortData = {
            array: [...values],
            original: [...values],
            pass: 0,
            i: 0,
            j: 0,
            comparisons: 0,
            swaps: 0,
            isComplete: false
        };
        
        this.renderVisualization();
        this.updateInfo();
    }
    
    static renderVisualization() {
        const container = document.getElementById('sortVisualization');
        const array = this.sortData.array;
        const maxValue = Math.max(...array);
        
        container.innerHTML = '';
        
        array.forEach((value, index) => {
            const bar = document.createElement('div');
            bar.className = 'sort-bar';
            bar.style.height = `${(value / maxValue) * 200}px`;
            bar.style.width = `${Math.max(30, 300 / array.length)}px`;
            bar.textContent = value;
            
            if (index === this.sortData.j || index === this.sortData.j + 1) {
                bar.classList.add('comparing');
            }
            
            container.appendChild(bar);
        });
    }
    
    static updateInfo() {
        document.getElementById('currentPass').textContent = this.sortData.pass;
        document.getElementById('comparisons').textContent = this.sortData.comparisons;
        document.getElementById('swaps').textContent = this.sortData.swaps;
    }
    
    static stepSort() {
        if (!this.sortData || this.sortData.isComplete) {
            return;
        }
        
        const { array, pass, j } = this.sortData;
        const n = array.length;
        
        if (j < n - pass - 1) {
            this.sortData.comparisons++;
            
            if (array[j] > array[j + 1]) {
                // Swap elements
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
                this.sortData.swaps++;
            }
            
            this.sortData.j++;
        } else {
            // End of pass
            this.sortData.pass++;
            this.sortData.j = 0;
            
            if (this.sortData.pass >= n - 1) {
                this.sortData.isComplete = true;
            }
        }
        
        this.renderVisualization();
        this.updateInfo();
        
        if (this.sortData.isComplete) {
            setTimeout(() => {
                alert('Sorting complete!');
            }, 100);
        }
    }
    
    static playSort() {
        if (!this.sortData || this.sortData.isComplete) {
            return;
        }
        
        const speed = parseInt(document.getElementById('speedSlider').value);
        
        const animate = () => {
            if (!this.sortData.isComplete) {
                this.stepSort();
                setTimeout(animate, 2100 - speed);
            }
        };
        
        animate();
    }
    
    static resetSort() {
        if (this.sortData) {
            this.sortData.array = [...this.sortData.original];
            this.sortData.pass = 0;
            this.sortData.i = 0;
            this.sortData.j = 0;
            this.sortData.comparisons = 0;
            this.sortData.swaps = 0;
            this.sortData.isComplete = false;
            
            this.renderVisualization();
            this.updateInfo();
        }
    }
    
    static checkExercise(exerciseNumber) {
        const code = document.getElementById(`exerciseCode${exerciseNumber}`).value;
        const feedback = document.getElementById(`exerciseFeedback${exerciseNumber}`);
        
        let isCorrect = false;
        let feedbackText = '';
        
        switch (exerciseNumber) {
            case 1:
                isCorrect = code.includes('function bubbleSort') && 
                           code.includes('for') && 
                           code.includes('if') &&
                           (code.includes('swap') || code.includes('[') && code.includes(']'));
                feedbackText = isCorrect ? 
                    '✅ Great! You implemented bubble sort with the correct structure.' : 
                    '❌ Make sure to use nested loops and swap adjacent elements when needed.';
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
    module.exports = AlgorithmsDemo;
}