
#-------- Explain Python's memory management. 
# Python uses a private heap space to store objects and a combination of reference counting and a garbage collector to automatically manage and free up memory.

# ============= How is memory managed in Python? ( https://www.interviewbit.com/python-interview-questions/#built-in-data-types-in-python)

# Memory management in Python is handled by the Python Memory Manager. The memory allocated by the manager is in form of a private heap space dedicated to Python. 
# All Python objects are stored in this heap and being private, it is inaccessible to the programmer. 
# Though, python does provide some core API functions to work upon the private heap space.
# Additionally, Python has an in-built garbage collection to recycle the unused memory for the private heap space.





# ============== gemini =========
# Python manages memory automatically primarily through a private heap space, using reference counting as the main mechanism for deallocation, supplemented by a generational garbage collector to handle complex cases like circular references. 
# Key Components of Python Memory Management
# Private Heap Space: All Python objects and data structures are stored in a dedicated private heap. The Python interpreter manages this space internally, and the programmer does not have direct access to it.
# Memory Manager: This internal component of the Python interpreter is responsible for allocating and deallocating memory within the private heap. The default implementation (CPython) uses a specialized allocator called pymalloc for small objects (up to 512 bytes) to optimize performance, avoiding frequent interactions with the operating system's malloc and free functions.
# Stack Memory: For function calls and local variables (which are actually references to objects in the heap), Python uses stack memory. This memory is automatically freed when the function returns. 

# Automatic Deallocation Mechanisms
# Python employs two main strategies to reclaim memory from objects that are no longer in use: 

## Reference Counting: This is the primary and real-time garbage collection mechanism. Each object in Python has a counter that tracks how many references (variables, container items, etc.) point to it.
# The count increases when a new reference is created (e.g., y = x).
# The count decreases when a reference is removed or goes out of scope (e.g., using del, or when a function finishes).
# When the reference count drops to zero, the object's memory is immediately deallocated.

## Generational Garbage Collection: Reference counting cannot detect circular references (e.g., Object A refers to Object B, and Object B refers back to Object A) where the reference counts never reach zero, even if the objects are no longer accessible by the program. To address this, Python's garbage collector runs periodically to identify and reclaim these unreachable objects.
# Objects are grouped into three generations (0, 1, and 2) based on how long they have existed.
# Most objects die young and are collected in the first generation, which is checked most frequently, optimizing performance. 

# Programmer Interaction
# While memory management is largely automatic, the gc module allows developers to interact with the garbage collector. You can manually trigger a collection using gc.collect(), check current thresholds with gc.get_threshold(), or disable it if necessary. Developers can also use tools like tracemalloc to monitor memory usage and identify potential leaks. 


# ============= different type of memory ============
# In Python, memory is divided mainly into two parts:

# Stack Memory
# Heap Memory
# Both play different roles in how variables and objects are stored and accessed.


# In simple terms: Heap memory is like a storage area where all values/objects live and stack memory just keeps directions (references) to them.

# -========== https://www.geeksforgeeks.org/python/memory-management-in-python/



