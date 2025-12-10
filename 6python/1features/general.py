# ------- What is the difference between a list and a tuple? 
# Lists are mutable (can be changed after creation), while tuples are immutable (cannot be changed). Tuples are generally faster and use less memory.
# lists are Slower due to dynamic resizing and modifications.	tuples are Faster due to fixed size and immutability.

#--------- What are mutable vs. immutable objects? 
# Mutable objects (lists, dictionaries, sets) can be modified in place. Immutable objects (integers, floats, strings, tuples) cannot; operations on them create new objects.


#-------- Explain Python's memory management. 
# Python uses a private heap space to store objects and a combination of reference counting and a garbage collector to automatically manage and free up memory.



#------------What is PEP 8? 
# PEP 8 is the official style guide for Python code, emphasizing readability and consistency. Following it demonstrates professionalism.


#------------Explain *args and **kwargs? 
# These special syntaxes are used to pass a variable number of arguments to a function. 
# *args handles non-keyworded arguments (as a tuple), and 
# **kwargs handles keyworded arguments (as a dictionary).


#------------What are generators and iterators? 
# Iterators are objects that can be iterated over using the __next__ method. 
# Generators are a simple way to create iterators using functions with the yield keyword, which produce values one at a time and are memory-efficient for large sequences.


#------------Difference between == and is. 
# The == operator checks for value equality, while the is operator checks for object identity (whether two variables point to the same object in memory). 

# ----------- difference between break and continue

# Break - It exits the loop entirely and continues with the next statement after the loop.
# Continue- It skips the current iteration and moves on to the next iteration of the loop.


#------------ What is a lambda function in Python?
# In Python, a lambda function is a small, anonymous function that can have any number of arguments but can only have one expression. 
# Lambda functions are a shorthand for creating simple functions that are only needed once. 
# They are made using the lambda keyword, followed by the function's arguments and a colon, and then the expression for evaluation. 


##=============== Object-Oriented Programming (OOP) & Advanced Concepts


#------- Explain the __init__ method. 
# It is a constructor method in a class, called automatically when a new object instance is created, to initialize the object's attributes.

#------- What is the Global Interpreter Lock (GIL)? 
# In CPython (the default implementation), the GIL is a mutex that prevents multiple native threads from executing Python bytecodes simultaneously. 
# This means Python threads are better for I/O-bound tasks than CPU-bound tasks.


# ------ https://www.interviewbit.com/python-interview-questions/#python-libraries

# GIL stands for Global Interpreter Lock. This is a mutex used for limiting access to python objects and aids in effective thread synchronization by avoiding deadlocks. 
# GIL helps in achieving multitasking (and not parallel computing). The following diagram represents how GIL works.

# Based on the above diagram, there are three threads. First Thread acquires the GIL first and starts the I/O execution. 
# When the I/O operations are done, thread 1 releases the acquired GIL which is then taken up by the second thread. 
# The process repeats and the GIL are used by different threads alternatively until the threads have completed their execution. 
# The threads not having the GIL lock goes into the waiting state and resumes execution only when it acquires the lock.


# =========== . What are the differences between pickling and unpickling?
# Pickling is the conversion of python objects to binary form. Whereas, unpickling is the conversion of binary form data to python objects. The pickled objects are used for storing in disks or external memory locations. Unpickled objects are used for getting the data back as python objects upon which processing can be done in python.

# Python provides a pickle module for achieving this. Pickling uses the pickle.dump() method to dump python objects into disks. Unpickling uses the pickle.load() method to get back the data as python objects.
    

# =============== PYTHONPATH.
# It is an environment variable used for incorporating additional directories during the import of a module or a package. 
# PYTHONPATH is used for checking if the imported packages or modules are available in the existing directories. 
# Not just that, the interpreter uses this environment variable to identify which module needs to be loaded.

# ==================What is PEP 8 and why is it important?
# PEP stands for Python Enhancement Proposal. A PEP is an official design document providing information to the Python community, or describing a new feature for Python or its processes. PEP 8 is especially important since it documents the style guidelines for Python Code. Apparently contributing to the Python open-source community requires you to follow these style guidelines sincerely and strictly.

# ===============  What is an Interpreted language?
# An Interpreted language executes its statements line by line. Languages such as Python, Javascript, R, PHP, and Ruby are prime examples of Interpreted languages. Programs written in an interpreted language runs directly from the source code, with no intermediary compilation step.

# ===================  What is a dynamically typed language?
# Before we understand a dynamically typed language, we should learn about what typing is. Typing refers to type-checking in programming languages. In a strongly-typed language, such as Python, "1" + 2 will result in a type error since these languages don't allow for "type-coercion" (implicit conversion of data types). On the other hand, a weakly-typed language, such as Javascript, will simply output "12" as result.

# Type-checking can be done at two stages -

# Static - Data Types are checked before execution.
# Dynamic - Data Types are checked during execution.
# Python is an interpreted language, executes each statement line by line and thus type-checking

# =========== What are Python namespaces? Why are they used?
# A namespace in Python ensures that object names in a program are unique and can be used without any conflict. Python implements these namespaces as dictionaries with 'name as key' mapped to a corresponding 'object as value'. This allows for multiple namespaces to use the same name and map it to a separate object. A few examples of namespaces are as follows:

# Local Namespace includes local names inside a function. the namespace is temporarily created for a function call and gets cleared when the function returns.
# Global Namespace includes names from various imported packages/ modules that are being used in the current project. This namespace is created when the package is imported in the script and lasts until the execution of the script.
# Built-in Namespace includes built-in functions of core Python and built-in names for various types of exceptions.
# The lifecycle of a namespace depends upon the scope of objects they are mapped to. If the scope of an object ends, the lifecycle of that namespace comes to an end. Hence, it isn't possible to access inner namespace objects from an outer namespace.


#------- What is monkey patching? 

# Monkey patching in Python involves changing a module, class, or function at runtime without modifying its original source code. 
# It is often used for testing, mocking external dependencies, or applying temporary fixes to third-party libraries. 

##------------ Example: Patching a Function within a Module
# This example demonstrates how to replace a function in a separate module at runtime. 

# ---------- The Original Module (original_module.py)
# original_module.py

def say_hello():
    """An original function that we want to modify."""
    return "Hello, Welcome to the world!"

# -------- The Monkey Patching Script (patch_script.py)
# This script imports the original module, defines a new function, and then replaces the original function with the new one. 
# patch_script.py

import original_module

# 1. Define a new function with the desired behavior
def new_say_hello():
    return "Greetings, the module has been patched!"

# 2. Apply the monkey patch by assigning the new function
#    to the original function's name in the module
original_module.say_hello = new_say_hello

# 3. Test the patched function
#    It now executes the new_say_hello logic
print(original_module.say_hello())

# Output when running patch_script.py:
# Greetings, the module has been patched!


# Explanation:
# The output shows that even though the original source code of original_module.py was never opened or edited, its behavior was changed dynamically at runtime by the assignment original_module.say_hello = new_say_hello. 

## ----------Example: Patching a Class Method
# You can similarly patch methods within a class:

class MyClass:
    def original_method(self):
        return "Original method behavior"

# Define a new, separate function
def patched_method(self):
    return "Patched method behavior"

# Apply the monkey patch to the class
MyClass.original_method = patched_method

# Test the patched method on a new instance
obj = MyClass()
print(obj.original_method())


# Output:
# Patched method behavior

# Note: For testing purposes, it is generally recommended to use Python's built-in unittest.mock library or the monkeypatch fixture in pytest documentation, as they provide safer and less error-prone ways to temporarily modify behavior with automatic cleanup. 



## ============== Common Coding Challenges
# Interviewers often ask you to write code to solve problems. 
# Reverse a string (string[::-1] is a common concise answer).
# Check if a string or number is a palindrome.
# Find the factorial of a number (often using recursion).
# Implement sorting algorithms (e.g., bubble sort, merge sort).
# Find the largest or smallest element in a list.
# Remove duplicates from a list (often solved by converting to a set and back to a list: list(set(my_list))). 

## Specialized Role Questions
# For specific roles, be prepared for questions on relevant libraries. 
# Data Science: Pandas DataFrames vs. Series, NumPy array efficiency, handling missing values, data visualization with Matplotlib.
# Web Development: Differences between frameworks like Django and Flask, how to set up databases, MVC architecture discussions. 
