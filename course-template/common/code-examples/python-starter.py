"""
Python Code Examples and Starter Templates
Course Template - Common Resources

This file contains reusable code patterns and examples
that can be used across different modules and lessons.
"""

import asyncio
import json
import re
import random
import string
from datetime import datetime, timedelta
from typing import List, Dict, Optional, Union, Any
from dataclasses import dataclass
from abc import ABC, abstractmethod

# =============================================================================
# BASIC PROGRAMMING CONCEPTS
# =============================================================================

def variables_example():
    """Examples of different variable types and data structures"""
    # Basic data types
    string_var = "Hello, World!"
    integer_var = 42
    float_var = 3.14159
    boolean_var = True
    none_var = None
    
    # Collections
    list_var = [1, 2, 3, "four", True]
    tuple_var = (1, 2, 3, "immutable")
    dict_var = {
        "name": "John",
        "age": 30,
        "is_student": False
    }
    set_var = {1, 2, 3, 4, 5}  # Unique elements only
    
    print("Variables initialized successfully")
    return {
        "string": string_var,
        "integer": integer_var,
        "float": float_var,
        "boolean": boolean_var,
        "list": list_var,
        "dict": dict_var,
        "set": set_var
    }

def control_flow_examples():
    """Examples of control flow statements"""
    
    def check_age(age: int) -> str:
        """Categorize age into groups"""
        if age >= 18:
            return "Adult"
        elif age >= 13:
            return "Teenager"
        else:
            return "Child"
    
    def get_day_type(day_of_week: str) -> str:
        """Determine if day is weekday or weekend"""
        weekdays = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday']
        weekends = ['saturday', 'sunday']
        
        day_lower = day_of_week.lower()
        if day_lower in weekdays:
            return 'Weekday'
        elif day_lower in weekends:
            return 'Weekend'
        else:
            return 'Invalid day'
    
    def loop_examples():
        """Demonstrate different types of loops"""
        results = []
        
        # For loop with range
        for i in range(5):
            results.append(f"For loop iteration: {i}")
        
        # While loop
        counter = 0
        while counter < 3:
            results.append(f"While loop iteration: {counter}")
            counter += 1
        
        # For loop with list
        fruits = ['apple', 'banana', 'orange']
        for fruit in fruits:
            results.append(f"Fruit: {fruit}")
        
        # For loop with dictionary
        person = {'name': 'Alice', 'age': 25, 'city': 'New York'}
        for key, value in person.items():
            results.append(f"{key}: {value}")
        
        # List comprehension
        squares = [x**2 for x in range(1, 6)]
        results.append(f"Squares: {squares}")
        
        # Dictionary comprehension
        square_dict = {x: x**2 for x in range(1, 4)}
        results.append(f"Square dict: {square_dict}")
        
        return results
    
    return {
        "check_age": check_age,
        "get_day_type": get_day_type,
        "loop_examples": loop_examples
    }

def function_examples():
    """Examples of different function types and patterns"""
    
    def regular_function(param1: int, param2: int) -> int:
        """Regular function with type hints"""
        return param1 + param2
    
    def function_with_defaults(name: str = "Anonymous", greeting: str = "Hello") -> str:
        """Function with default parameters"""
        return f"{greeting}, {name}!"
    
    def variable_args(*args, **kwargs):
        """Function with variable arguments"""
        result = {
            "args": args,
            "kwargs": kwargs,
            "total_args": len(args),
            "total_kwargs": len(kwargs)
        }
        return result
    
    def higher_order_function(data: List[int], operation) -> List[int]:
        """Function that takes another function as parameter"""
        return [operation(x) for x in data]
    
    # Lambda function
    square = lambda x: x ** 2
    
    # Decorator example
    def timing_decorator(func):
        """Decorator to measure function execution time"""
        import time
        def wrapper(*args, **kwargs):
            start_time = time.time()
            result = func(*args, **kwargs)
            end_time = time.time()
            print(f"{func.__name__} took {end_time - start_time:.4f} seconds")
            return result
        return wrapper
    
    @timing_decorator
    def slow_function():
        """Function that takes some time to execute"""
        import time
        time.sleep(0.1)  # Simulate slow operation
        return "Operation completed"
    
    return {
        "regular_function": regular_function,
        "function_with_defaults": function_with_defaults,
        "variable_args": variable_args,
        "higher_order_function": higher_order_function,
        "square": square,
        "slow_function": slow_function
    }

# =============================================================================
# INTERMEDIATE CONCEPTS
# =============================================================================

class PersonClass:
    """Example class demonstrating OOP concepts"""
    
    # Class variable
    species = "Homo sapiens"
    
    def __init__(self, name: str, age: int, email: str):
        """Initialize a Person instance"""
        self.name = name
        self.age = age
        self.email = email
        self._private_var = "This is private"
    
    def introduce(self) -> str:
        """Return an introduction string"""
        return f"Hi, I'm {self.name}, {self.age} years old."
    
    @property
    def info(self) -> str:
        """Getter property for formatted info"""
        return f"{self.name} ({self.email})"
    
    @property
    def age(self) -> int:
        """Getter for age"""
        return self._age
    
    @age.setter
    def age(self, value: int):
        """Setter for age with validation"""
        if not isinstance(value, int) or value < 0 or value > 150:
            raise ValueError("Age must be a positive integer less than 150")
        self._age = value
    
    @classmethod
    def create_anonymous(cls):
        """Class method to create anonymous person"""
        return cls("Anonymous", 0, "no-email@example.com")
    
    @staticmethod
    def is_adult(age: int) -> bool:
        """Static method to check if age represents an adult"""
        return age >= 18
    
    def __str__(self) -> str:
        """String representation"""
        return f"Person(name='{self.name}', age={self.age})"
    
    def __repr__(self) -> str:
        """Developer representation"""
        return f"PersonClass('{self.name}', {self.age}, '{self.email}')"

class StudentClass(PersonClass):
    """Student class inheriting from Person"""
    
    def __init__(self, name: str, age: int, email: str, student_id: str, major: str):
        super().__init__(name, age, email)
        self.student_id = student_id
        self.major = major
        self.grades: List[Dict[str, Union[str, float]]] = []
    
    def add_grade(self, subject: str, grade: float):
        """Add a grade for a subject"""
        if not 0 <= grade <= 100:
            raise ValueError("Grade must be between 0 and 100")
        self.grades.append({"subject": subject, "grade": grade})
    
    def get_average_grade(self) -> float:
        """Calculate average grade"""
        if not self.grades:
            return 0.0
        total = sum(grade["grade"] for grade in self.grades)
        return total / len(self.grades)
    
    def introduce(self) -> str:
        """Override parent method"""
        parent_intro = super().introduce()
        return f"{parent_intro} I'm studying {self.major}."
    
    def get_transcript(self) -> Dict[str, Any]:
        """Get full transcript"""
        return {
            "student_info": self.info,
            "student_id": self.student_id,
            "major": self.major,
            "grades": self.grades,
            "gpa": self.get_average_grade()
        }

@dataclass
class Product:
    """Dataclass example for product information"""
    name: str
    price: float
    quantity: int = 0
    description: str = ""
    
    def total_value(self) -> float:
        """Calculate total value of product stock"""
        return self.price * self.quantity
    
    def __post_init__(self):
        """Validation after initialization"""
        if self.price < 0:
            raise ValueError("Price cannot be negative")
        if self.quantity < 0:
            raise ValueError("Quantity cannot be negative")

def list_methods_examples():
    """Examples of common list operations and methods"""
    numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    people = [
        {"name": "Alice", "age": 25},
        {"name": "Bob", "age": 30},
        {"name": "Charlie", "age": 35}
    ]
    
    # Map equivalent - list comprehension
    doubled = [num * 2 for num in numbers]
    
    # Filter - list comprehension with condition
    even_numbers = [num for num in numbers if num % 2 == 0]
    
    # Using filter() and map() functions
    filtered_numbers = list(filter(lambda x: x > 5, numbers))
    mapped_numbers = list(map(lambda x: x ** 2, numbers))
    
    # Reduce equivalent
    from functools import reduce
    sum_result = reduce(lambda acc, num: acc + num, numbers, 0)
    
    # Finding elements
    found_person = next((person for person in people if person["age"] > 25), None)
    
    # Sorting
    sorted_by_age = sorted(people, key=lambda x: x["age"])
    
    # Any and all
    has_adults = any(person["age"] >= 18 for person in people)
    all_adults = all(person["age"] >= 18 for person in people)
    
    return {
        "doubled": doubled,
        "even_numbers": even_numbers,
        "filtered_numbers": filtered_numbers,
        "mapped_numbers": mapped_numbers,
        "sum_result": sum_result,
        "found_person": found_person,
        "sorted_by_age": sorted_by_age,
        "has_adults": has_adults,
        "all_adults": all_adults
    }

async def async_examples():
    """Examples of asynchronous programming"""
    
    async def fetch_data(url: str) -> Dict[str, Any]:
        """Simulate fetching data from URL"""
        await asyncio.sleep(1)  # Simulate network delay
        
        if not url:
            raise ValueError("URL is required")
        
        return {
            "data": f"Data from {url}",
            "status": 200,
            "timestamp": datetime.now().isoformat()
        }
    
    async def fetch_multiple_urls(urls: List[str]) -> List[Dict[str, Any]]:
        """Fetch data from multiple URLs concurrently"""
        tasks = [fetch_data(url) for url in urls]
        results = await asyncio.gather(*tasks, return_exceptions=True)
        return results
    
    try:
        # Single async call
        result = await fetch_data("https://api.example.com/data")
        print("Data received:", result)
        
        # Multiple concurrent calls
        urls = [
            "https://api1.example.com",
            "https://api2.example.com",
            "https://api3.example.com"
        ]
        concurrent_results = await fetch_multiple_urls(urls)
        print("Concurrent results:", len(concurrent_results))
        
        return result
    except ValueError as e:
        print(f"Validation error: {e}")
        raise
    except Exception as e:
        print(f"Unexpected error: {e}")
        raise

# =============================================================================
# ERROR HANDLING PATTERNS
# =============================================================================

class ValidationError(Exception):
    """Custom exception for validation errors"""
    
    def __init__(self, message: str, field: str = None):
        super().__init__(message)
        self.field = field

class APIError(Exception):
    """Custom exception for API-related errors"""
    
    def __init__(self, message: str, status_code: int = None):
        super().__init__(message)
        self.status_code = status_code

def error_handling_examples():
    """Examples of error handling patterns"""
    
    def safe_division(a: float, b: float) -> Optional[float]:
        """Safely divide two numbers"""
        try:
            if b == 0:
                raise ZeroDivisionError("Division by zero is not allowed")
            return a / b
        except ZeroDivisionError as e:
            print(f"Error in division: {e}")
            return None
        except TypeError as e:
            print(f"Type error: {e}")
            return None
    
    def validate_email(email: str) -> bool:
        """Validate email format"""
        email_pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
        if not re.match(email_pattern, email):
            raise ValidationError("Invalid email format", "email")
        return True
    
    def validate_user_data(data: Dict[str, Any]) -> Dict[str, Any]:
        """Validate user data with multiple checks"""
        errors = []
        
        # Required fields
        required_fields = ['name', 'email', 'age']
        for field in required_fields:
            if field not in data or not data[field]:
                errors.append(f"{field} is required")
        
        # Email validation
        if 'email' in data:
            try:
                validate_email(data['email'])
            except ValidationError as e:
                errors.append(str(e))
        
        # Age validation
        if 'age' in data:
            try:
                age = int(data['age'])
                if age < 0 or age > 150:
                    errors.append("Age must be between 0 and 150")
            except (ValueError, TypeError):
                errors.append("Age must be a valid number")
        
        if errors:
            raise ValidationError(f"Validation failed: {'; '.join(errors)}")
        
        return data
    
    async def safe_async_operation(data: Any) -> Dict[str, Any]:
        """Safely perform async operation with error handling"""
        try:
            # Simulate async operation
            await asyncio.sleep(0.1)
            
            if not data:
                raise ValueError("Data is required")
            
            # Simulate potential network error
            if isinstance(data, str) and "error" in data.lower():
                raise APIError("Simulated API error", 500)
            
            return {"success": True, "data": data}
        
        except ValueError as e:
            print(f"Validation error: {e}")
            return {"success": False, "error": str(e), "error_type": "validation"}
        
        except APIError as e:
            print(f"API error: {e} (Status: {e.status_code})")
            return {"success": False, "error": str(e), "error_type": "api"}
        
        except Exception as e:
            print(f"Unexpected error: {e}")
            return {"success": False, "error": str(e), "error_type": "unexpected"}
    
    return {
        "safe_division": safe_division,
        "validate_email": validate_email,
        "validate_user_data": validate_user_data,
        "safe_async_operation": safe_async_operation
    }

# =============================================================================
# UTILITY FUNCTIONS
# =============================================================================

class Utils:
    """Collection of utility functions"""
    
    @staticmethod
    def generate_random_id(length: int = 8) -> str:
        """Generate a random alphanumeric ID"""
        characters = string.ascii_letters + string.digits
        return ''.join(random.choice(characters) for _ in range(length))
    
    @staticmethod
    def format_date(date: datetime, format_str: str = "%Y-%m-%d") -> str:
        """Format date according to specified format"""
        return date.strftime(format_str)
    
    @staticmethod
    def deep_merge_dicts(dict1: Dict, dict2: Dict) -> Dict:
        """Deep merge two dictionaries"""
        result = dict1.copy()
        for key, value in dict2.items():
            if key in result and isinstance(result[key], dict) and isinstance(value, dict):
                result[key] = Utils.deep_merge_dicts(result[key], value)
            else:
                result[key] = value
        return result
    
    @staticmethod
    def flatten_list(nested_list: List) -> List:
        """Flatten a nested list"""
        result = []
        for item in nested_list:
            if isinstance(item, list):
                result.extend(Utils.flatten_list(item))
            else:
                result.append(item)
        return result
    
    @staticmethod
    def chunk_list(data: List, chunk_size: int) -> List[List]:
        """Split list into chunks of specified size"""
        return [data[i:i + chunk_size] for i in range(0, len(data), chunk_size)]
    
    @staticmethod
    def remove_duplicates(data: List) -> List:
        """Remove duplicates while preserving order"""
        seen = set()
        result = []
        for item in data:
            if item not in seen:
                seen.add(item)
                result.append(item)
        return result
    
    class Validators:
        """Nested class for validation utilities"""
        
        @staticmethod
        def is_email(email: str) -> bool:
            """Check if string is valid email"""
            pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
            return bool(re.match(pattern, email))
        
        @staticmethod
        def is_phone(phone: str) -> bool:
            """Check if string is valid phone number"""
            pattern = r'^\+?[\d\s\-\(\)]+$'
            return bool(re.match(pattern, phone))
        
        @staticmethod
        def is_strong_password(password: str) -> bool:
            """Check if password meets strength requirements"""
            if len(password) < 8:
                return False
            
            has_upper = any(c.isupper() for c in password)
            has_lower = any(c.islower() for c in password)
            has_digit = any(c.isdigit() for c in password)
            has_special = any(c in "!@#$%^&*()_+-=[]{}|;:,.<>?" for c in password)
            
            return all([has_upper, has_lower, has_digit, has_special])
        
        @staticmethod
        def is_required(value: Any) -> bool:
            """Check if value is not None, empty string, or empty collection"""
            if value is None:
                return False
            if isinstance(value, (str, list, dict, tuple, set)):
                return len(value) > 0
            return True

# =============================================================================
# DESIGN PATTERNS EXAMPLES
# =============================================================================

# Singleton Pattern
class DatabaseConnection:
    """Singleton pattern example"""
    _instance = None
    _connection = None
    
    def __new__(cls):
        if cls._instance is None:
            cls._instance = super().__new__(cls)
        return cls._instance
    
    def connect(self, connection_string: str):
        """Simulate database connection"""
        if not self._connection:
            self._connection = f"Connected to {connection_string}"
            print(self._connection)
        return self._connection
    
    def get_connection(self):
        """Get current connection"""
        return self._connection

# Factory Pattern
class Animal(ABC):
    """Abstract base class for animals"""
    
    @abstractmethod
    def make_sound(self) -> str:
        pass
    
    @abstractmethod
    def get_species(self) -> str:
        pass

class Dog(Animal):
    def make_sound(self) -> str:
        return "Woof!"
    
    def get_species(self) -> str:
        return "Canis familiaris"

class Cat(Animal):
    def make_sound(self) -> str:
        return "Meow!"
    
    def get_species(self) -> str:
        return "Felis catus"

class AnimalFactory:
    """Factory for creating animals"""
    
    @staticmethod
    def create_animal(animal_type: str) -> Animal:
        animals = {
            "dog": Dog,
            "cat": Cat
        }
        
        if animal_type.lower() not in animals:
            raise ValueError(f"Unknown animal type: {animal_type}")
        
        return animals[animal_type.lower()]()

# Observer Pattern
class Subject:
    """Subject in observer pattern"""
    
    def __init__(self):
        self._observers = []
        self._state = None
    
    def attach(self, observer):
        """Add observer"""
        if observer not in self._observers:
            self._observers.append(observer)
    
    def detach(self, observer):
        """Remove observer"""
        if observer in self._observers:
            self._observers.remove(observer)
    
    def notify(self):
        """Notify all observers"""
        for observer in self._observers:
            observer.update(self._state)
    
    def set_state(self, state):
        """Set state and notify observers"""
        self._state = state
        self.notify()

class Observer:
    """Observer interface"""
    
    def __init__(self, name: str):
        self.name = name
    
    def update(self, state):
        """Update method called by subject"""
        print(f"{self.name} received update: {state}")

# =============================================================================
# EXAMPLE USAGE AND TESTING
# =============================================================================

async def demonstrate_examples():
    """Demonstrate usage of all code examples"""
    print("=== Python Course Template Code Examples ===")
    
    # Variables example
    print("\n1. Variables Example:")
    vars_result = variables_example()
    print(f"Variables: {list(vars_result.keys())}")
    
    # Control flow example
    print("\n2. Control Flow Example:")
    control_flow = control_flow_examples()
    print(f"Age check (25): {control_flow['check_age'](25)}")
    print(f"Day type (Monday): {control_flow['get_day_type']('Monday')}")
    loop_results = control_flow['loop_examples']()
    print(f"Loop examples (first 3): {loop_results[:3]}")
    
    # Class example
    print("\n3. Class Example:")
    student = StudentClass("Alice", 20, "alice@email.com", "S123", "Computer Science")
    student.add_grade("Math", 95.0)
    student.add_grade("Physics", 87.5)
    print(student.introduce())
    print(f"Average grade: {student.get_average_grade():.2f}")
    
    # List methods example
    print("\n4. List Methods Example:")
    list_results = list_methods_examples()
    print(f"Doubled numbers: {list_results['doubled']}")
    print(f"Even numbers: {list_results['even_numbers']}")
    print(f"Sum: {list_results['sum_result']}")
    
    # Async example
    print("\n5. Async Example:")
    try:
        async_result = await async_examples()
        print(f"Async result status: {async_result['status']}")
    except Exception as e:
        print(f"Async error: {e}")
    
    # Error handling example
    print("\n6. Error Handling Example:")
    error_handlers = error_handling_examples()
    print(f"Safe division (10/2): {error_handlers['safe_division'](10, 2)}")
    print(f"Safe division (10/0): {error_handlers['safe_division'](10, 0)}")
    
    # Utility functions example
    print("\n7. Utility Functions Example:")
    print(f"Random ID: {Utils.generate_random_id()}")
    print(f"Formatted date: {Utils.format_date(datetime.now())}")
    print(f"Email validation: {Utils.Validators.is_email('test@example.com')}")
    
    # Design patterns example
    print("\n8. Design Patterns Example:")
    
    # Singleton
    db1 = DatabaseConnection()
    db2 = DatabaseConnection()
    print(f"Singleton test - Same instance: {db1 is db2}")
    
    # Factory
    dog = AnimalFactory.create_animal("dog")
    print(f"Factory created dog: {dog.make_sound()}")
    
    # Observer
    subject = Subject()
    observer1 = Observer("Observer1")
    observer2 = Observer("Observer2")
    subject.attach(observer1)
    subject.attach(observer2)
    subject.set_state("New State")
    
    print("\n=== Examples completed successfully! ===")

# Run examples if this file is executed directly
if __name__ == "__main__":
    asyncio.run(demonstrate_examples())