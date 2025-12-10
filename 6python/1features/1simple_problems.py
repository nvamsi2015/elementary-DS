# =======1 write factorial program without using if-else ro ternary operators =========
def factorial(n):
   return (n==1) or (n * factorial(n-1))
print(factorial(4)) #24

# =How do you copy an object in Python?
# In Python, the assignment statement (= operator) does not copy objects. Instead, it creates a binding between the existing object and the target variable name. To create copies of an object in Python, we need to use the copy module. Moreover, there are two ways of creating copies for the given object using the copy module -

# Shallow Copy is a bit-wise copy of an object. The copied object created has an exact copy of the values in the original object. If either of the values is a reference to other objects, just the reference addresses for the same are copied.
# Deep Copy copies all values recursively from source to target object, i.e. it even duplicates the objects referenced by the source object.

from copy import copy, deepcopy
list_1 = [1, 2, [3, 5], 4]
## shallow copy
list_2 = copy(list_1) 
list_2[3] = 7
list_2[2].append(6)
list_2    # output => [1, 2, [3, 5, 6], 7]
list_1    # output => [1, 2, [3, 5, 6], 4]
## deep copy
list_3 = deepcopy(list_1)
list_3[3] = 8
list_3[2].append(7)
list_3    # output => [1, 2, [3, 5, 6, 7], 8]
list_1    # output => [1, 2, [3, 5, 6], 4]


# ============= check if all char in string are alphanumeric or not ============

"abdc1321".isalnum() #Output: True
"xyz@123$".isalnum() #Output: False

# ============ checking if refreeing to same memory ==============

a = [1, 2, 3]
b = a

print(id(a), id(b))   # Same ID → both point to same list

b.append(4)
print(a)


# 140645192555456 140645192555456
# [1, 2, 3, 4]

# ======================== 