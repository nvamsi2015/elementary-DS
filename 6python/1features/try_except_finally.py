# ======== finalized in py =============

# In Python, the concept of "finalized" is primarily used in two distinct areas: the finally block for guaranteed code execution and the weakref.finalize function for object cleanup. 


# 1. ---------- The finally block for exception handling

# The finally keyword is used in a try...except...finally block to define a block of code that will always execute, regardless of whether an exception occurred or not. This is essential for cleanup operations that must happen deterministically, such as: 
# Closing files: Ensuring a file handle is released, even if an error occurs while processing the file's contents.
# Releasing resources: Guaranteeing that network connections or database connections are closed.
# Ensuring program stability: Performing necessary finalization tasks to maintain consistent program behavior. 

try:
    f = open("myfile.txt", "r")
    # Perform operations with the file
    result = 10 / 0 # This will raise a ZeroDivisionError
except ZeroDivisionError:
    print("Caught division by zero error.")
finally:
    f.close() # This line runs regardless of the exception
    print("File closed.")


The with statement and context managers (__enter__ and __exit__ methods) are the preferred, more robust way to handle resource cleanup in modern Python, as they handle the finally logic automatically. 


#-------------  2. weakref.finalize for object garbage collection 
# The weakref module provides the weakref.finalize function, which registers a cleanup function to be called when a specific object is garbage collected. 
# Purpose: It's used for cleaning up "unmanaged" resources (like memory allocated outside of Python's garbage collector, or system-level resources) associated with an object's lifecycle.
# Advantage over __del__: Unlike the __del__ method (Python's traditional "destructor"), weakref.finalize is guaranteed to be called at interpreter shutdown. The timing of __del__ is non-deterministic and can be problematic with reference cycles.
# Usage: The cleanup function (callback) should not hold direct references to the object it's finalizing to avoid preventing garbage collection. 

# --------- 3. @typing.final for type hinting 
# As of Python 3.8, the typing module introduced the @final decorator and Final annotation. 
# Purpose: These are used by static type checkers (like Mypy) to indicate that a variable, method, or class should not be reassigned, overridden, or subclassed, respectively.
# Runtime behavior: These are purely hints and do not enforce any restrictions at runtime. The code will still run even if the "final" constraint is violated; the type checker simply raises a warning during development. 

# Summary

# The term "finalized" in Python is not a single, general-purpose keyword like in some other languages (such as Java's final, finally, and finalize keywords, which have distinct roles). Instead, Python uses different mechanisms tailored to specific needs: 
# finally keyword: For guaranteed execution of code blocks (usually resource cleanup).
# weakref.finalize function: For reliable, albeit non-deterministic, object-specific cleanup upon garbage collection.
# @typing.final annotation: For static analysis to enforce design constraints (e.g., immutability) during development. 


# ========= Ever heard of finalize() in Python?

# Here’s what it does — and why it matters 👇

# finalize() is used to clean up unmanaged resources before the object is garbage collected.

# That means:
# → Releasing file handles
# → Closing network connections
# → Cleaning up system-level resources

# It gives you a last chance to run some cleanup code before Python reclaims the object’s memory.

# In other words —
# It’s like a destructor for cleanup.

# Think of it as:
# ✅ A safety net
# ✅ A memory management helper
# ✅ A clean exit strategy for your object

# But remember —
# Don’t rely on it for critical operations, because the timing of garbage collection isn’t guaranteed.






# ============= 