# ========== clousures

# Closures in Python are like “memory-equipped” functions. They allow a function to remember values from the environment in which it was created even if that environment no longer exists. Closures are used in functional programming, event handling and callback functions where you need to retain some state without using global variables.

# How Closures are Created
# A closure is formed when:

# A function is defined inside another function (nested function).
# The inner function references variables from the outer function.
# The outer function returns the inner function.

# Examples of Closures
# Let's break down examples to understand how closures work.

#--------- Example 1: This code demonstrates a Python closure, where inner function retains outer function’s variable even after outer function has finished executing.
def outer_function(x):
    # Outer function: takes 'x' and defines inner_function
    def inner_function(y):
        return x + y  # 'x' is remembered from outer_function
    return inner_function  # Returns inner function (closure)

# Create a closure with x = 10
closure = outer_function(10)

# Call the closure with different values of 'y'
print(closure(5)) 
print(closure(20))

# 15
# 30

# Explanation:

# outer_function(10) returns inner_function, but with x fixed at 10.
# This returned inner_function still has access to x even though outer_function has finished running.
# When you call closure(5), it adds x = 10 and y = 5.

# -------- Example 2: This code demonstrates a closure that maintains a running counter by remembering and updating a variable from its outer scope.



def make_counter():
    count = 0  # This variable will be remembered
    def counter():
        nonlocal count  # Modify outer variable
        count += 1
        return count
    return counter

counter1 = make_counter()
print(counter1())  # 1
print(counter1())


# 1
# 2


# -------- Example 3: This example shows how a closure can be used for string formatting, outer function stores a prefix and inner function automatically attaches that prefix to any given text.


def pre(p):
    # Outer function stores prefix
    def add(t):
        # Inner function uses stored prefix
        return p + " " + t
    return add  # Return closure

# Create a closure that always prefixes with "Hello"
h = pre("Hello")
print(h("World"))
print(h("Python"))

# Hello World
# Hello Python



#================  How Closures Work Internally?
# When Python creates a closure:

# It stores outer function’s variables in a special attribute called __closure__.
# The inner function keeps a reference, not a copy, to these variables.
# Example: This code shows how closures can create custom multiplier functions by remembering factor value from their enclosing scope.




def make_multiplier(factor):
    def multiply_by(x):
        return x * factor
    return multiply_by

double = make_multiplier(2)
print(double(5)) 

# Check closure variables
print(double.__closure__[0].cell_contents)

# Output
# 10
# 2


# Explanation:

# make_multiplier(2): Creates a closure with factor = 2.
# print(double(5)): Calls closure 5 * 2 = 10.
# print(double.__closure__[0].cell_contents): Accesses the remembered factor value (2).



# Common Use Cases
# Function Factories: Functions that generate other functions with pre-set behavior.
# Data Hiding: Protecting variables from being accessed directly.
# Event Handling: Remembering state between user interactions.
# Callbacks: Functions passed around while keeping context.
