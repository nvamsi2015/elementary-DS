# The main OOP functionalities (concepts) in Python are:

# Classes and Objects: The fundamental building blocks.
# Encapsulation: Bundling data and methods and controlling access.
# Inheritance: Creating a hierarchy and reusing code.
# Polymorphism: Allowing a single interface to have multiple forms.
# Abstraction: Hiding complex implementation details. 


# Encapsulation: Bundles data and methods within a class, hiding internal details from outside access.
# Abstraction: Hides complex implementation details and exposes only necessary functionality.
# Inheritance: Allows a new class to inherit properties and methods from an existing class.
# Polymorphism: Enables a single interface to represent different behaviors.

# ----------1. Classes and Objects
# A class is a blueprint or template, while an object is a specific instance of that class. 

class Dog:
    # Class attribute (shared by all instances)
    species = "Canine"

    def __init__(self, name, age):
        # Instance attributes (unique to each object)
        self.name = name
        self.age = age

    # Instance method
    def bark(self):
        return f"{self.name} barks: Woof!"

# Create objects (instances) of the Dog class
dog1 = Dog("Buddy", 3)
dog2 = Dog("Max", 5)

print(f"{dog1.name} is {dog1.age} years old.")
print(dog2.bark())

# Buddy is 3 years old.
# Max barks: Woof!


# -------------2. Encapsulation
# Encapsulation involves bundling data (attributes) and methods within a class and restricting direct access to some of an object's components. 
# Python uses conventions (e.g., prefixing with _ for protected, __ for private) rather than strict access modifiers. 

class BankAccount:
    def __init__(self, initial_balance):
        self.__balance = initial_balance # Private attribute (by convention)

    def get_balance(self):
        # Public method to access the balance
        return self.__balance

    def deposit(self, amount):
        if amount > 0:
            self.__balance += amount
            print(f"Deposited {amount}.")
        else:
            print("Deposit amount must be positive.")

# Using the class
account = BankAccount(1000)
print(f"Current balance: {account.get_balance()}")

# Trying to access the private attribute directly (discouraged)
# print(account.__balance) # This will raise an AttributeError in practice due to name mangling

account.deposit(200)
print(f"Current balance: {account.get_balance()}")

# Current balance: 1000
# Deposited 200.
# Current balance: 1200

# ----------------abstraction : 
# __account_number and 
# __balance 
# are "private" attributes (indicated by the double underscore).
# 
#  They cannot be directly accessed from outside the class, promoting data hiding. 
# Access and modification are controlled through methods like deposit(), withdraw(), and get_balance().


# ---------3. Inheritance
# Inheritance allows a new class (child/derived class) to inherit attributes and methods from an existing class (parent/base class), promoting code reuse. 

class Animal: # Parent class
    def __init__(self, name):
        self.name = name

    def speak(self):
        # Generic speak method
        return "Some sound"

class Cat(Animal): # Child class inherits from Animal
    def speak(self):
        # Overrides the parent method
        return "Meow"

class Dog(Animal): # Another child class
    def speak(self):
        # Overrides the parent method
        return "Woof"

# Using the classes
animal = Animal("Generic Animal")
cat_obj = Cat("Whiskers")
dog_obj = Dog("Buddy")

print(animal.speak())
print(cat_obj.speak())
print(dog_obj.speak())

# Some sound
# Meow
# Woof

# -----------4. Polymorphism
# Polymorphism allows objects of different classes to be treated as instances of a common base type or interface, responding to the same method call in different ways (one interface, many forms). 

class Bird:
    def fly(self):
        print("Bird is flying.")

class Aeroplane:
    def fly(self):
        print("Aeroplane is flying.")

class Fish:
    def swim(self):
        print("Fish is swimming.")

# A function that takes an object and calls its 'fly' method if it exists (Duck Typing)
def let_it_fly(entity):
    # This function works as long as the object has a 'fly' method
    if hasattr(entity, 'fly'):
        entity.fly()
    else:
        print(f"{type(entity).__name__} cannot fly.")

# Using the function with different objects
bird = Bird()
plane = Aeroplane()
fish = Fish()

let_it_fly(bird)
let_it_fly(plane)
let_it_fly(fish)

# Bird is flying.
# Aeroplane is flying.
# Fish cannot fly.


# ---------5. Abstraction
# Abstraction involves hiding the complex implementation details and showing only the necessary features of an object. In Python, we can use the abc module (Abstract Base Classes) to achieve abstraction. 

from abc import ABC, abstractmethod

class Vehicle(ABC): # Abstract Base Class
    @abstractmethod
    def start(self):
        pass # Abstract method with no body

    def stop(self):
        print("Vehicle stopped.")

class Car(Vehicle): # Concrete class must implement abstract method
    def start(self):
        print("Car engine started.")

class Bike(Vehicle):
    def start(self):
        print("Bike engine started with a kick start.")

# You cannot instantiate an abstract class directly
# vehicle = Vehicle() # This would raise a TypeError

car = Car()
bike = Bike()

car.start()
car.stop()
bike.start()

# Car engine started.
# Vehicle stopped.
# Bike engine started with a kick start.




# ------------ name mangling -------------
# In Python, name mangling is a mechanism used within classes to automatically change the name of any identifier that starts with two or more leading underscores and at most one trailing underscore. The primary purpose is to help prevent accidental name clashes in subclasses, not to enforce true privacy. 
# How It Works

# When the Python interpreter encounters an attribute name like __attribute inside a class definition, it textually replaces the name with _ClassName__attribute. 

# Original name: __balance
# Class name: Account
# Mangled name (internal): _Account__balance 

# This process happens at compile time and is a syntactic transformation. The resulting mangled name is the actual name stored in the object's internal dictionary. 

class Robot:
    def __init__(self, name):
        self.name = name          # Public attribute
        self.__model = "X-AE"     # Name-mangled attribute

    def get_model(self):
        # Accessible within the class using the original name
        return self.__model 

my_robot = Robot("Buddy")

print(my_robot.name)             # Output: Buddy (Accessible)

# print(my_robot.__model)        # This would raise an AttributeError because __model is mangled

# You can still access the mangled name directly, though it's discouraged
print(my_robot._Robot__model)    # Output: X-AE (Accessible via the mangled name)
 
# Key Points

# Avoids Conflicts: It prevents attributes defined in a parent class from being accidentally overridden by a subclass that uses the same name.
# Not True Privacy: Unlike other languages like Java or C++, Python does not have truly private variables. The mangled names can still be accessed directly if a developer knows the naming convention.
# Convention-based: The use of leading double underscores is a strong signal to other developers that the attribute is for internal use only and should not be accessed externally.
# Exclusions: Names with both leading and trailing double underscores (e.g., __init__, __name__) are reserved for special "magic" methods and are not name-mangled. 


# -------------- what are different types of classes(abstract, concreate and any other?) -----------


# ----------- what are identifiers in python (user defined names for variables, functions, classes, module, objects) ---------------------

# In Python, an identifier is a name used to identify a variable, function, class, module, or any other object. 
# They are user-defined names that make code readable and help the interpreter differentiate between different entities in a program.

#------ Rules for Naming Identifiers, Identifiers in Python must follow specific rules to be valid: 

# Allowed Characters: Identifiers can only contain letters (A-Z, a-z), digits (0-9), and underscores (_).
# Cannot Start with a Digit: An identifier must begin with a letter or an underscore, never a number (e.g., _age or name1 is valid, but 1name is not).
# Case-Sensitive: Python treats identifiers as case-sensitive. Thus, myVar and myvar are two different identifiers.
# No Special Characters or Spaces: Punctuation characters like !, @, #, $, %, or spaces are not allowed.
# Avoid Reserved Keywords: You cannot use any of Python's reserved keywords (e.g., if, for, class, None, True, False) as an identifier name. 

# ---Naming Conventions (PEP 8)  While not mandatory rules, Python's official style guide (PEP 8) recommends the following best practices for better code readability and consistency: 

# Variables and Functions: Use lowercase letters with words separated by underscores (snake_case) (e.g., calculate_total, user_age).
# Classes: Use PascalCase (capitalize the first letter of each word) (e.g., StudentRecord, BankAccount).
# Constants: Use all uppercase letters with underscores (e.g., MAX_LIMIT, PI_VALUE).
# Private Identifiers: Start an identifier with a single leading underscore (e.g., _internal_value) to indicate it is for internal use. 

# -------------- what are protected and private variables in pythons ------------

# In Python, protected and private variables use specific naming conventions to control their intended visibility and access, as Python does not enforce strict access modifiers like other languages (e.g., C++ or Java). This is a convention for programmers to follow, promoting encapsulation in object-oriented programming. 


# Feature 	                            Protected Variables	                                                        Private Variables

# Naming Syntax	                Prefix with a single underscore (_variableName).	                        Prefix with double underscores (__variableName).
# Intended Access	            Accessible within the class and by its subclasses (derived classes).	        Accessible only within the class they are defined in.
# Enforcement	        Python does not strictly restrict access; it's a naming convention for developers.	    Python uses name mangling to make direct external access difficult, but not impossible.

## Protected Variables
# Purpose: The single underscore (_) prefix is a convention indicating that the variable is for internal use within the class or its subclasses. Other developers are expected to respect this convention and not access it directly from outside the class.
# Access: They can technically be accessed from anywhere in the code, but it's discouraged as it violates the intended design.
# Example: self._salary 

## Private Variables
# Purpose: The double underscore (__) prefix signifies that a variable is strictly internal and should not be accessed from outside the defining class, even by subclasses. This helps prevent accidental modification or name collisions in derived classes.
# Name Mangling: Python automatically renames these variables internally to _ClassName__variableName. This mangled name makes it harder to access the variable directly, but it can still be accessed if a programmer explicitly uses the mangled name (e.g., obj._ClassName__variableName).
# Example: self.__max_rating

# ------------ what is duck typing in python ---------------------
# Duck typing in Python is a programming concept where the type or class of an object is less important than the methods and attributes it implements. It is a form of polymorphism in dynamically-typed languages that focuses on an object's behavior, not its explicit type or inheritance hierarchy. 

# The name comes from the saying: "If it walks like a duck and it quacks like a duck, then it must be a duck". In programming, this means if an object can perform the necessary actions (e.g., has a specific method), Python treats it as though it is the appropriate type for that context. 

## Key Characteristics
# Focus on Behavior: Code doesn't check for a specific class but simply attempts to use the expected methods or properties.
# Runtime Type Checking: Type compatibility is determined at runtime. If an object lacks a required method during execution, an AttributeError (or similar exception) is raised.
# Flexibility and Reusability: It allows objects from unrelated classes to be used interchangeably, as long as they share a common interface (an "implied interface" or "protocol"), leading to less rigid and more adaptable code.
# Supports EAFP: Duck typing aligns well with the "Easier to Ask for Forgiveness than Permission" (EAFP) coding style, where you assume an operation will work and handle exceptions if it doesn't, rather than checking types beforehand. 

## Example
# Consider a function that operates on objects that can "fly". With duck typing, you can pass instances of different, unrelated classes (like a Bird and a Plane) to the function, as long as both classes define a fly() method. 

class Bird:
    def fly(self):
        print("The bird is flying.")

class Plane:
    def fly(self):
        print("The plane is flying.")

def make_it_fly(flyer):
    # Python doesn't care about the object's type, only if it has a fly() method
    flyer.fly()

# Both objects work, even though they have no common parent class
bird = Bird()
plane = Plane()

make_it_fly(bird)  # Output: The bird is flying.
make_it_fly(plane) # Output: The plane is flying.

# If you were to pass an object without a fly() method, the program would stop with an AttributeError at runtime. 

# ---------- how memory is managed in python ----------------

# Python manages memory automatically primarily through a private heap space, using reference counting and a generational garbage collector to reclaim unused memory. This automatic system simplifies development by removing the need for manual memory allocation and deallocation. 

## Key Mechanisms of Python Memory Management

# 1. Private Heap Space
# All Python objects and data structures are stored in a private heap that is managed internally by the Python Memory Manager. This memory is not accessible to other processes and the programmer has no direct control over this area. The memory manager interacts with the operating system to request more memory for the heap or release large chunks of it when necessary. 

# 2. Reference Counting
# Reference counting is the primary and most immediate form of garbage collection in Python. 
# Tracking References: Every object maintains a count of how many references (variables or other objects) are pointing to it.
# Automatic Deallocation: When an object's reference count drops to zero, it means it is no longer accessible or needed by the program. The Python interpreter immediately deallocates the memory for that object. 

# 3. Generational Garbage Collection (Cycle Detection)
# Reference counting alone cannot handle circular references, where two or more objects refer to each other in a loop, preventing their reference counts from ever reaching zero, even if they are unreachable from the rest of the program. 
# Cycle Detection: Python's garbage collector (accessible via the gc module) periodically runs a cycle-detection algorithm to identify and reclaim these unreachable circular objects.
# Generations: The collector categorizes objects into three generations (0, 1, and 2) based on how long they have existed. Objects that survive a collection cycle are promoted to an older generation. The idea is that most objects die young, so the collector checks the youngest generation (generation 0) more frequently, which is more efficient. 

# Memory Allocation in CPython
# The default and most widely used implementation of Python, CPython, uses a hierarchical system of memory allocators (called pymalloc for small objects) on top of the operating system's general-purpose malloc. 
# Arenas, Pools, and Blocks: For small objects (<= 512 bytes), CPython optimizes allocation by dividing the memory into large chunks called arenas (256 KB), which are further split into pools (4 KB), and then into individual blocks. This reduces the overhead of requesting memory from the operating system for every single small object. 

## Key Takeaway for Developers
# As a developer, you generally don't need to manually manage memory. Python handles the complexities automatically. However, understanding these mechanisms helps in writing memory-efficient code, especially when dealing with large datasets or long-running applications. Techniques like using generators for large data streams or explicitly breaking circular references with the del keyword or the gc.collect() function can help optimize performance and prevent memory leaks.


# ---------what is diff bw multiprocessing and multitasking -------


# Multitasking allows a single CPU to handle multiple tasks by rapidly switching between them, giving the illusion of simultaneous execution. In contrast, multiprocessing achieves true parallelism by using multiple CPUs (or cores) to run multiple tasks simultaneously. 

# Here are the key differences, especially in the context of Python:

# Feature 	            Multitasking (via Threads)	                                                                            Multiprocessing

# Execution	        Achieves concurrency (interleaved execution on a single core                                            Achieves true parallelism (simultaneous execution on multiple cores)
# CPUs Required	    Only one CPU core is required	                                                                        Multiple CPU cores/processors are required
# Python GIL	    Limited by the Global Interpreter Lock (GIL), preventing parallel execution of Python bytecode	        Bypasses the GIL by using separate processes, allowing full use of multiple cores
# Memory	        Threads share the same memory space, making data sharing easy but synchronization complex	            Each process has its own private memory space, requiring explicit Inter-Process Communication (IPC) mechanisms like pipes or queues for data sharing
# Overhead	        Lower overhead for creation and switching between tasks (lightweight)	                                Higher overhead for creating and managing processes (heavyweight)
# Best For	        I/O-bound tasks (e.g., network requests, file I/O) that spend time waiting for external operations	    CPU-bound tasks (e.g., heavy calculations, data analysis) that benefit from raw processing power

# In summary, for CPU-intensive tasks in Python, multiprocessing is generally the better choice as it leverages multiple cores for faster performance. For I/O-intensive tasks, multitasking (using the threading module) is sufficient to manage waiting times efficiently. 












