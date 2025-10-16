1. what is monkey patching in python
2. what importannt properties of oops and explain them, ( polymorphism, inheritance.. etc in details)
3. what is constructors
4. what are decorators 
5. what are generators 
6. How memory management is done in python
7. difference between django vs fast api 
8. what are important features of fast api 
9. why python instead of other langauages 
10. what is multithreading and multiprocessing in python
11. what is Pythons GIL -  Global Interpreter Lock (GIL), lock, race condition












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


# ----------  3. what is Pythons GIL -  Global Interpreter Lock (GIL), lock, race condition


# vLock-related questions in a Python interview focus on concurrency, multi-threading, and multi-processing. You may be asked about fundamental concepts, how to use specific primitives, and how to apply them to solve common problems like race conditions. 
# Core concepts and definitions
# What is a lock and why is it needed?
# A lock (or mutex, for mutual exclusion) is a synchronization primitive used to protect access to a shared resource from multiple threads or processes. It ensures that only one thread can modify a critical section of code at any given time, preventing race conditions where multiple threads corrupt data by accessing it simultaneously.
# What is a race condition?
# A race condition occurs when the correct output of a program depends on the sequence or timing of uncontrollable events, such as which of several threads runs first. This can lead to unpredictable behavior and data corruption.
# Explain Python's Global Interpreter Lock (GIL).
# The GIL is a mutex that protects access to Python objects, preventing multiple native threads from executing Python bytecode at once, even on multi-core processors. For I/O-bound tasks (e.g., network requests, disk I/O), the GIL is released during wait times, allowing other threads to run concurrently. However, for CPU-bound tasks, the GIL makes multi-threading ineffective for achieving true parallelism. 
# The threading module
# How do you create and use a threading.Lock?
# You instantiate a threading.Lock() object. Before accessing a shared resource, a thread must call lock.acquire() and then lock.release() when it is finished. The best practice is to use the lock as a context manager with a with statement, which automatically handles releasing the lock even if errors occur.
# What is the difference between threading.Lock and threading.RLock?
# Lock: A simple lock that can only be acquired once by a thread. A thread attempting to acquire it again will cause a deadlock.
# RLock (reentrant lock): A lock that can be acquired multiple times by the same thread without blocking. It must be released the same number of times it was acquired. RLock is useful for recursive functions that need to acquire the same lock more than once.
# Demonstrate a race condition and how to fix it with a lock.



import threading
import time

counter = 0

def worker():
    global counter
    for _ in range(1_000_000):
        counter += 1

threads = [threading.Thread(target=worker) for _ in range(2)]

for t in threads:
    t.start()

for t in threads:
    t.join()

print("Final counter (with race condition):", counter)

# Fix with a lock
counter = 0
lock = threading.Lock()

def worker_safe():
    global counter
    for _ in range(1_000_000):
        with lock:
            counter += 1

threads_safe = [threading.Thread(target=worker_safe) for _ in range(2)]

for t in threads_safe:
    t.start()

for t in threads_safe:
    t.join()

print("Final counter (with lock):", counter)
 
# Advanced concurrency topics
# How does a threading.Semaphore differ from a Lock?
# A lock provides exclusive access, allowing only one thread to enter a critical section. A semaphore controls access to a resource by a limited number of threads. You initialize a semaphore with a counter value; the acquire() method decrements it and release() increments it. If the counter is zero, acquire() blocks until a thread calls release().
# What is a deadlock and how can it be avoided?
# A deadlock is a state where two or more threads are blocked forever, waiting for each other to release a resource. A classic example involves two threads needing two different locks, with each holding one and waiting for the other to be released.
# Avoiding deadlocks:
# Lock ordering: Always acquire locks in the same order.
# Use timeouts: Use lock.acquire(timeout=...) to prevent indefinite waiting.
# Design carefully: Minimize the number of locks and the time they are held.
# When would you use multiprocessing.Lock instead of threading.Lock?
# You would use a multiprocessing.Lock when working with multiple processes, as these locks can be shared between processes. Since each process has its own memory space and Python interpreter (bypassing the GIL), multiprocessing.Lock is used to synchronize access to shared memory objects created with multiprocessing.Manager.
# What are other synchronization primitives in Python besides locks?
# The threading module offers several other primitives for more complex synchronization patterns:
# Condition: Allows one or more threads to wait for a specific condition to be met by another thread.
# Event: A simple communication flag. Threads can wait for the event to be set and be notified when it changes.
# Barrier: Blocks a fixed number of threads until all threads have reached it. 


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







