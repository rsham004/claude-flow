# Quiz Template

## 📋 Quiz Information

- **Module**: [01-04] - [Module Name]
- **Lesson**: [Lesson #] - [Lesson Title]
- **Quiz Type**: [Knowledge Check/Practical Assessment/Comprehensive Review]
- **Duration**: [XX minutes]
- **Total Points**: [XX points]
- **Passing Score**: [XX% or XX points]

## 🎯 Learning Objectives Assessed

This quiz evaluates student understanding of:
- [ ] [Learning objective 1]
- [ ] [Learning objective 2]
- [ ] [Learning objective 3]
- [ ] [Learning objective 4]

## 📚 Prerequisites

Students should have completed:
- [ ] [Required lesson/module]
- [ ] [Practice exercises]
- [ ] [Reading assignments]

## ❓ Questions

### Section A: Multiple Choice (XX points)

**Instructions**: Choose the best answer for each question. Each question is worth [X] points.

#### Question 1 (X points)
[Question text here - clear and concise]

a) [Option A - incorrect but plausible]
b) [Option B - correct answer]
c) [Option C - incorrect but plausible]
d) [Option D - obviously incorrect]

**Correct Answer**: b) [Option B]
**Explanation**: [Brief explanation of why this is correct and why others are wrong]

#### Question 2 (X points)
Which of the following best describes [concept]?

a) [Definition that's too narrow]
b) [Definition that's too broad]
c) [Correct definition]
d) [Completely incorrect definition]

**Correct Answer**: c) [Correct definition]
**Explanation**: [Explanation of the concept and why other options are incorrect]

#### Question 3 (X points)
What will be the output of the following code?

```[language]
// Code example
function example() {
    let result = 0;
    for (let i = 1; i <= 3; i++) {
        result += i;
    }
    return result;
}
console.log(example());
```

a) 3
b) 6
c) 9
d) 0

**Correct Answer**: b) 6
**Explanation**: The loop adds 1 + 2 + 3 = 6

#### Question 4 (X points)
Which statement about [programming concept] is FALSE?

a) [True statement about the concept]
b) [Another true statement]
c) [False statement - correct answer]
d) [Another true statement]

**Correct Answer**: c) [False statement]
**Explanation**: [Explain why this statement is false and why others are true]

### Section B: True/False (XX points)

**Instructions**: Mark each statement as True (T) or False (F). Each question is worth [X] points.

#### Question 5 (X points)
**Statement**: [Programming concept statement]

**Answer**: [T/F]
**Explanation**: [Brief explanation of why the statement is true or false]

#### Question 6 (X points)
**Statement**: In object-oriented programming, inheritance allows a class to inherit methods and properties from another class.

**Answer**: T
**Explanation**: This is the fundamental concept of inheritance in OOP.

#### Question 7 (X points)
**Statement**: Arrays in most programming languages are zero-indexed.

**Answer**: T
**Explanation**: Most programming languages use zero-based indexing for arrays.

### Section C: Fill in the Blanks (XX points)

**Instructions**: Complete each statement by filling in the missing word(s). Each blank is worth [X] points.

#### Question 8 (X points)
A __________ is a named block of code that can be called multiple times and may accept __________ as input.

**Answers**: function, parameters (or arguments)
**Explanation**: Functions are reusable code blocks that can accept parameters.

#### Question 9 (X points)
In object-oriented programming, __________ refers to bundling data and methods together, while __________ allows objects to take multiple forms.

**Answers**: encapsulation, polymorphism
**Explanation**: These are two fundamental OOP principles.

### Section D: Short Answer (XX points)

**Instructions**: Provide brief, clear answers to the following questions. Each question is worth [X] points.

#### Question 10 (X points)
Explain the difference between a parameter and an argument in function calls.

**Sample Answer**: 
A parameter is a variable defined in the function declaration that acts as a placeholder for values. An argument is the actual value passed to the function when it's called. For example, in `function greet(name)`, `name` is a parameter, and in `greet("Alice")`, `"Alice"` is an argument.

**Grading Criteria**:
- Full points: Clearly distinguishes parameters from arguments with examples
- Partial points: Explains one concept correctly but confuses the other
- No points: Incorrect or no explanation

#### Question 11 (X points)
What are the advantages of using loops instead of writing repetitive code?

**Sample Answer**:
Loops provide several advantages: 1) Reduce code duplication and improve maintainability, 2) Make code more flexible by allowing dynamic repetition based on conditions, 3) Reduce the chance of errors from copy-paste mistakes, 4) Make code more readable and concise.

**Grading Criteria**:
- Full points: Mentions 3+ advantages with clear explanations
- Partial points: Mentions 1-2 advantages correctly
- No points: Incorrect or vague explanations

### Section E: Code Analysis (XX points)

**Instructions**: Analyze the given code and answer the questions. Each question is worth [X] points.

#### Question 12 (X points)
Examine the following code and identify any errors or issues:

```[language]
function calculateAverage(numbers) {
    let sum = 0;
    for (let i = 0; i <= numbers.length; i++) {
        sum += numbers[i];
    }
    return sum / numbers.length;
}
```

**Issues to identify**:
1. Off-by-one error: loop condition should be `i < numbers.length`
2. No input validation (what if numbers is empty or null?)
3. No error handling for non-numeric values

**Sample Answer**:
The main issue is in the loop condition `i <= numbers.length` which will cause an index out of bounds error. It should be `i < numbers.length`. Additionally, the function doesn't handle edge cases like empty arrays or null input.

**Grading Criteria**:
- Full points: Identifies the main error and mentions edge cases
- Partial points: Identifies the main error only
- No points: Doesn't identify the main error

#### Question 13 (X points)
What will this code print? Trace through the execution step by step.

```[language]
let x = 10;
let y = 5;

function swap(a, b) {
    let temp = a;
    a = b;
    b = temp;
    console.log(`Inside function: a=${a}, b=${b}`);
}

swap(x, y);
console.log(`Outside function: x=${x}, y=${y}`);
```

**Expected Output**:
```
Inside function: a=5, b=10
Outside function: x=10, y=5
```

**Explanation**: The function parameters are passed by value, so changes inside the function don't affect the original variables.

**Grading Criteria**:
- Full points: Correct output and explanation of pass-by-value
- Partial points: Correct output but incomplete explanation
- No points: Incorrect output

### Section F: Problem Solving (XX points)

**Instructions**: Solve the following programming problems. Show your work and reasoning.

#### Question 14 (X points)
Write a function that takes an array of numbers and returns the second largest number. Handle edge cases appropriately.

**Sample Solution**:
```javascript
function findSecondLargest(numbers) {
    // Input validation
    if (!Array.isArray(numbers) || numbers.length < 2) {
        return null; // or throw an error
    }
    
    // Remove duplicates and sort
    const uniqueNumbers = [...new Set(numbers)].sort((a, b) => b - a);
    
    // Check if we have at least 2 unique numbers
    return uniqueNumbers.length >= 2 ? uniqueNumbers[1] : null;
}
```

**Grading Criteria**:
- Full points (X points): Correct logic, handles edge cases, clean code
- Good (X-2 points): Correct logic, minor issues with edge cases
- Partial (X/2 points): Basic logic correct but significant issues
- No points: Incorrect logic or doesn't work

#### Question 15 (X points)
Describe the steps you would take to debug a program that's not producing the expected output.

**Sample Answer**:
1. **Understand the problem**: Re-read requirements and expected behavior
2. **Identify the issue**: Compare actual output with expected output
3. **Check inputs**: Verify that input data is correct and in expected format
4. **Use debugging tools**: Set breakpoints, use console.log, or step through code
5. **Trace program flow**: Follow the execution path step by step
6. **Check logic**: Verify that conditions, loops, and calculations are correct
7. **Test with simple cases**: Use minimal test data to isolate the problem
8. **Review recent changes**: If it worked before, check what changed
9. **Seek help**: Ask colleagues or search documentation/forums
10. **Document the fix**: Record what caused the issue and how it was resolved

**Grading Criteria**:
- Full points: Mentions systematic approach with 5+ specific steps
- Partial points: Mentions some debugging techniques but lacks systematic approach
- No points: Vague or incorrect debugging approach

## 📊 Answer Key Summary

### Section A: Multiple Choice
1. b) [Correct answer] - [Points]
2. c) [Correct answer] - [Points]
3. b) 6 - [Points]
4. c) [False statement] - [Points]

### Section B: True/False
5. [T/F] - [Points]
6. T - [Points]
7. T - [Points]

### Section C: Fill in the Blanks
8. function, parameters - [Points]
9. encapsulation, polymorphism - [Points]

### Section D: Short Answer
10. [Key points for full credit] - [Points]
11. [Key points for full credit] - [Points]

### Section E: Code Analysis
12. [Main issues to identify] - [Points]
13. [Expected output and explanation] - [Points]

### Section F: Problem Solving
14. [Solution criteria] - [Points]
15. [Systematic debugging approach] - [Points]

**Total Points**: [XX points]

## 📈 Grading Rubric

| Grade | Percentage | Points Range | Description |
|-------|------------|--------------|-------------|
| A+ | 97-100% | [XX-XX] | Exceptional understanding, all concepts mastered |
| A | 93-96% | [XX-XX] | Excellent understanding, minor gaps |
| A- | 90-92% | [XX-XX] | Good understanding, few misconceptions |
| B+ | 87-89% | [XX-XX] | Above average, some concepts need reinforcement |
| B | 83-86% | [XX-XX] | Satisfactory understanding, several gaps |
| B- | 80-82% | [XX-XX] | Below average, needs review |
| C+ | 77-79% | [XX-XX] | Minimal understanding, significant gaps |
| C | 73-76% | [XX-XX] | Poor understanding, major review needed |
| C- | 70-72% | [XX-XX] | Very poor understanding, remediation required |
| F | Below 70% | [Below XX] | Failing, must retake after study |

## 📚 Study Resources

### For Review
- [Lesson materials and examples]
- [Practice exercises]
- [Textbook chapters]
- [Online tutorials]

### Common Mistakes to Avoid
- [Common error 1 and how to avoid it]
- [Common error 2 and how to avoid it]
- [Common error 3 and how to avoid it]

### Exam Preparation Tips
1. **Review Key Concepts**: Focus on learning objectives
2. **Practice Code Reading**: Work through code examples step by step
3. **Solve Similar Problems**: Practice with similar exercises
4. **Time Management**: Practice completing sections within time limits
5. **Ask Questions**: Clarify doubts before the quiz

## 🔄 Retake Policy

Students who score below [XX%] may:
- [ ] Retake the quiz once after [time period]
- [ ] Complete additional practice exercises
- [ ] Attend review session with instructor
- [ ] Demonstrate understanding through alternative assessment

## 📝 Quiz Administration

### For Instructors
- **Time Limit**: [XX minutes]
- **Open Book**: [Yes/No]
- **Calculator Allowed**: [Yes/No]
- **Collaboration**: [Individual/Pair/Group]
- **Platform**: [Online/Paper/Hybrid]

### Technical Requirements (if online)
- Stable internet connection
- Updated web browser
- Backup device recommended
- Quiet testing environment

---

## 📊 Quiz Metadata

- **Created**: [Date]
- **Last Updated**: [Date]
- **Version**: [Version number]
- **Author**: [Creator name]
- **Reviewers**: [Reviewer names]
- **Difficulty Level**: [Beginner/Intermediate/Advanced/Expert]
- **Average Completion Time**: [XX minutes]
- **Average Score**: [XX%]
- **Question Bank Pool**: [Total questions available]

---

**Good Luck! 🍀**

*Remember: This quiz is a learning tool. Focus on understanding concepts rather than just memorizing answers.*