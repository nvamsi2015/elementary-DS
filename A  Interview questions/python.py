# ------------- 1. what is monkey patching in python? ------------------------

# Monkey patching in Python refers to the dynamic modification of a class, module, or function at runtime, 
# without altering its original source code. This technique allows developers to change or extend the behavior of existing code 
# during the execution of a program. 

# original_module.py
class MyClass:
    def say_hello(self):
        return "Hello from MyClass!"

# main.py
import original_module

# Original behavior
obj = original_module.MyClass()
print(obj.say_hello())  # Output: Hello from MyClass!

# Define a new function
def monkey_say_hello(self):
    return "Hello from the monkey patch!"

# Apply the monkey patch
original_module.MyClass.say_hello = monkey_say_hello

# New behavior after patching
obj_patched = original_module.MyClass()
print(obj_patched.say_hello()) # Output: Hello from the monkey patch!


#------------2. what is MRO in python? ---------------

# In Python, MRO stands for Method Resolution Order. It is the set of rules that Python follows to determine the order in which base classes are searched 
# when a method is called on an object, especially in the context of inheritance, and particularly multiple inheritance.






#------------- what is the advantages of node.js over fastapi

# Node.js offers several advantages over FastAPI, particularly in specific use cases and development contexts:
# Unified Language for Frontend and Backend (Full-Stack JavaScript):
# Node.js allows developers to use JavaScript for both frontend and backend development. This can streamline the development process, reduce context switching, and enable code sharing between the client and server.
# Mature and Extensive Ecosystem (NPM):
# Node.js boasts a vast and mature ecosystem of libraries and modules available through NPM (Node Package Manager). This provides readily available solutions for various development needs, from database drivers to utility libraries.
# Real-time Applications and Event-Driven Architecture:
# Node.js's non-blocking, event-driven architecture makes it highly suitable for building real-time applications like chat applications, online games, and streaming services, where handling numerous concurrent connections efficiently is crucial.
# Performance in I/O-Bound Operations:
# Node.js excels at handling I/O-bound operations (e.g., network requests, file system access) due to its asynchronous nature and single-threaded event loop, which can manage many concurrent operations without blocking.
# Scalability for High Concurrency:
# The event-driven model of Node.js allows it to handle a large number of concurrent connections with relatively low overhead, making it well-suited for scalable applications.
# Maturity and Community Support:
# As a more established technology, Node.js has a larger and more active community, which translates to extensive documentation, resources, and support available to developers.







