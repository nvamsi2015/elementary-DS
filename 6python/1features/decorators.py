
# In Python, decorators are functions that help the compiler know about the unique property associated with a particular function. 
# By wrapping a function with another function, decorators can modify the input or output values of the function or add functionality to it before or after it executes. 
# Decorators are often used to add cross-cutting concerns like logging, caching, or authentication in a reusable manner. **************************


#------- Explain decorators. 
# Decorators are a way to modify the behavior of a function or class at runtime without changing its source code. They are functions that wrap other functions.

# Python decorators are a design pattern that allows a programmer to modify or extend the behavior of a function or class without changing its actual source code. They are essentially functions that take another function as an argument, add some functionality, and return a new function (often called a "wrapper function"). 

# The @ symbol is used as "syntactic sugar" (shorthand syntax) to apply a decorator to a function or method. 

## How Decorators Work
# The core concepts that allow decorators to work are:
# Functions are First-Class Objects: In Python, functions can be treated like any other variable. They can be passed as arguments to other functions, assigned to variables, and returned from other functions.
# Inner (Nested) Functions: You can define a function inside another function, and the inner function can access variables in the outer function's scope (a concept known as a closure).
# Wrapping: A decorator function typically defines an inner function (the "wrapper") that executes code before and/or after the original function is called. The decorator then returns this new wrapper function in place of the original. 

## Example
# Here is a basic example of a decorator that logs a message before and after a function call:
# ---------------------
def my_decorator(func):
    """A decorator that adds logging around a function."""
    import functools # Use functools.wraps to preserve function metadata
    @functools.wraps(func)
    def wrapper_function(*args, **kwargs):
        print("Before calling the function.")
        result = func(*args, **kwargs) # Call the original function
        print("After calling the function.")
        return result
    return wrapper_function

@my_decorator
def say_hello():
    """Simple function to say hello."""
    print("Hello, World!")

# When you call say_hello(), the wrapper_function is executed
say_hello()

# Before calling the function.
# Hello, World!
# After calling the function.

# The @my_decorator syntax is simply a concise way of writing say_hello = my_decorator(say_hello). 

# ---------------------

def decorator(func):
    def wrapper():
        print("Before calling the function.")
        func()
        print("After calling the function.")
    return wrapper

@decorator # Applying the decorator to a function
def greet():
    print("Hello, World!")
greet()

# Before calling the function.
# Hello, World!
# After calling the function.

# Explanation:

# decorator takes the greet function as an argument.
# It returns a new function (wrapper) that first prints a message, calls greet() and then prints another message.
# @decorator syntax is a shorthand for greet = decorator(greet).

# --------------- Decorators with parameters ---------------------------

# Decorators often need to work with functions that have arguments. We use *args and **kwargs so our wrapper can accept any number of arguments.





def decorator_name(func):
    def wrapper(*args, **kwargs):
        print("Before execution")
        result = func(*args, **kwargs)
        print("After execution")
        return result
    return wrapper

@decorator_name
def add(a, b):
    return a + b

print(add(5, 3))

# Before execution
# After execution
# 8

# Explanation of Parameters
# decorator_name(func): This is the decorator function. It takes another function (func) as input.
# **wrapper(*args, kwargs): A nested function that wraps func. *args collects positional arguments, **kwargs collects keyword arguments, so wrapper works with any function.
# @decorator_name: Syntax sugar for add = decorator_name(add).


## Common Use Cases and Types
# Decorators are widely used in Python and its frameworks for a variety of tasks: 
# Logging: Automatically tracking function calls, arguments, and return values for debugging.
# Authentication & Authorization: Restricting access to certain functions or web application routes (e.g., @login_required in Django/Flask).
# Timing: Measuring the execution time of a function for performance analysis.
# Caching/Memoization: Storing the results of expensive function calls to avoid redundant computations (e.g., @functools.lru_cache).

## Built-in Decorators:
# @property: Allows class methods to be accessed as attributes, providing a clean interface for getters and setters.
# @classmethod: Binds a method to the class rather than the instance, receiving the class itself as the first argument (cls).
# @staticmethod: Defines a method that does not receive an implicit first argument (neither self nor cls), essentially a regular function housed within a class for organizational purposes. 

# ------------------ functions as first class objects -----------

# In Python, functions are first-class objects, meaning they can be treated like any other object (such as integers, strings or lists). This allows functions to be assigned to variables, passed as arguments, returned from other functions and stored in data structures enabling flexible programming patterns, including decorators.

# Example: This code demonstrates all four properties of functions as first-class objects in Python

# Assigning a function to a variable
def greet(n):
    return f"Hello, {n}!"
say_hi = greet  # Assign the greet function to say_hi
print(say_hi("Alice")) 

# Passing a function as an argument
def apply(f, v):
    return f(v)
res = apply(say_hi, "Bob")
print(res) 

# Returning a function from another function
def make_mult(f):
    def mult(x):
        return x * f
    return mult
dbl = make_mult(2)
print(dbl(5))

# Hello, Alice!
# Hello, Bob!
# 10

# Role of First-Class Functions in Decorators
# Decorators take a function as input to modify or enhance its behavior.
# They return a new function that wraps the original, adding behavior before or after execution.
##################### The original function is replaced by decorated function when assigned to same name.




# ================ higher order functions ================

# Higher-order functions are functions that take one or more functions as arguments, return a function as a result or do both.
# Essentially, a higher-order function is a function that operates on other functions. 
# This is a powerful concept in ########### functional programming and is a key component in understanding how decorators work.



# Key Properties of Higher-Order Functions
# Taking functions as arguments: A higher-order function can accept other functions as parameters.
# Returning functions: A higher-order function can return a new function that can be called later.



# Example: This code shows a higher-order function that takes another function as an argument and applies it to a given value.

# A higher-order function that takes another function as an argument
def fun(f, x):
    return f(x)

# A simple function to pass
def square(x):
    return x * x
res = fun(square, 5) # Using apply_function to apply the square function
print(res)

# Output
# 25

# Explanation: fun is a higher-order function because it takes another function f as an argument and applies it to the value x.

# Role of Higher-Order Functions in Decorators
# Decorators are higher-order functions that take a function, modify it and return a new one with extended or altered behavior.


# ================== types of Decorators ===============
# ----------1. Function Decorators
# The most common decorators in Python, used to wrap and enhance functions by adding extra behavior before or after the original function runs.

# Example: In this Example, a decorator prints a message before and after executing wrapped function.

def simple_decorator(func):
    def wrapper():
        print(">>> Starting function")
        func()
        print(">>> Function finished")
    return wrapper

@simple_decorator
def greet():
    print("Hello, World!")
greet()

# Output
# >>> Starting function
# Hello, World!
# >>> Function finished


# Explanation:

# simple_decorator(func): This decorator takes the function greet as an argument (func) and returns a new function (wrapper) that adds some functionality before and after calling original function.
# @simple_decorator: This is the decorator syntax. It applies simple_decorator to greet function.
# Calling greet(): When greet() is called, it doesn't just execute original function but first runs added behavior from wrapper function.


#----------- 2. Method Decorators
# Special decorators used for methods inside a class. They work like function decorators but handle the ########## self parameter for instance methods.



#  Example: Here, a decorator prints a message before and after a method is executed, while correctly handling self argument.

def method_decorator(func):
    def wrapper(self, *args, **kwargs):         ###### self parameter
        print("Before method execution")
        res = func(self, *args, **kwargs)
        print("After method execution")
        return res
    return wrapper

class MyClass:
    @method_decorator
    def say_hello(self):
        print("Hello!")

obj = MyClass()
obj.say_hello()

# Output
# Before method execution
# Hello!
# After method execution
# Explanation:

# method_decorator(func): The decorator takes method (say_hello) as an argument (func). It returns a wrapper function that adds behavior before and after calling original method.
# wrapper(self, *args, **kwargs): wrapper must accept self because it is a method of an instance. self is instance of class and *args and **kwargs allow for other arguments to be passed if needed.
# @method_decorator: This applies method_decorator to say_hello method of MyClass.
# Calling obj.say_hello(): say_hello method is now wrapped with additional behavior.


#------------- 3. Class Decorators
# Class decorators are used to modify or enhance behavior of a class. Like function decorators, class decorators are applied to class definition. They work by taking class as an argument and returning a modified version of class.

# Example: This code demonstrates a class decorator that adds a class_name attribute to a class, storing class’s name.

def fun(cls):
    cls.class_name = cls.__name__
    return cls

@fun
class Person:
    pass
print(Person.class_name)

# Output
# Person


# Explanation:
# fun(cls): This decorator adds a new attribute, class_name, to class cls. The value of class_name is set to the name of class (cls.__name__).
# @add_class_name: This applies the add_class_name decorator to the Person class.



# =============== built in decorators 

# Python provides several built-in decorators that are used in class definitions. 
# These decorators modify behavior of methods and attributes in a class, making it easier to manage and use them effectively. 
# The most frequently used built-in decorators are @staticmethod, @classmethod and @property.

# ------------- @staticmethod
# It is used to define a method that doesn't operate on an instance of class (i.e., it doesn't use self). ******************
# Static methods are called on class itself, not on an instance of class.

# Example: This example shows how to define and use a @staticmethod inside a class.

class MathOperations:
    @staticmethod
    def add(x, y):
        return x + y

# Using the static method
res = MathOperations.add(5, 3)
print(res)

# Output
# 8

# Explanation:

# add is a static method defined with @staticmethod decorator.
# It can be called directly on class MathOperations without creating an instance.


# -------------- @classmethod
# It is used to define a method that operates on class itself (i.e., it uses cls). 
# Class methods can access and modify class state that applies across all instances of class.

# Example: This code defines a class Employee with a class variable raise_amount and a class method set_raise_amount that updates this variable for entire class.




class Employee:
    raise_amount = 1.05
    def __init__(self, name, salary):
        self.name = name
        self.salary = salary
        
    @classmethod
    def set_raise_amount(cls, amount):          # cls not self like in other methods 
        cls.raise_amount = amount

# Using the class method
Employee.set_raise_amount(1.10)
print(Employee.raise_amount)

# Output
# 1.1

# Explanation:

# set_raise_amount is a class method defined with @classmethod decorator.
# It can modify class variable raise_amount for class Employee and all its instances.

# -------------- @property
# It is used to define a method as a property, which allows you to access it like an attribute. This is useful for encapsulating implementation of a method while still providing a simple interface.



# Example: This code defines a circle class demonstrating @property for controlled attribute access, allowing safe updates to radius.

class Circle:
    def __init__(self, radius):
        self._radius = radius
        
    @property
    def radius(self):
        return self._radius

    @radius.setter
    def radius(self, value):
        if value >= 0:
            self._radius = value
        else:
            raise ValueError("Radius cannot be negative")

    @property
    def area(self):
        return 3.14159 * (self._radius ** 2)

# Using the property
c = Circle(5)
print(c.radius) 
print(c.area)    
c.radius = 10
print(c.area)

# Output
# 5
# 78.53975
# 314.159

## Explanation:

# radius and area are properties defined with @property decorator.
# radius property also has a setter method to allow modification with validation.
# These properties provide a way to access and modify private attributes while maintaining encapsulation.


# ============ Chaining Multiple Decorators
# Chaining decorators means applying multiple decorators to same function. Each decorator wraps function in sequence, adding layered behavior.

# Example: This example shows how chaining decorators works by applying two decorators in different orders to see how output changes.

def decor1(func): 
    def inner(): 
        x = func() 
        return x * x 
    return inner 

def decor(func): 
    def inner(): 
        x = func() 
        return 2 * x 
    return inner 

@decor1
@decor
def num(): 
    return 10

@decor
@decor1
def num2():
    return 10
  
print(num()) 
print(num2())


# 400
# 200

# Explanation:

# In num(), decor runs first -> 10 becomes 20, then decor1 squares it -> 400.
# In num2(), decor1 runs first -> 10 becomes 100, then decor doubles it -> 200.

# Real-World Uses of Decorators
# Logging: Track function calls (e.g., @logger).
# Authentication: Restrict access in web apps (e.g., Flask/Django).
# Rate Limiting: Control API usage per user.
# Caching: Store results using functools.lru_cache.
# Retry Logic: Automatically retry failed network calls.

