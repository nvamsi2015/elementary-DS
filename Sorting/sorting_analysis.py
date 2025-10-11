# --------  merge sort -------------
# ---------------- sorting 10 Find the median in the arrary -----------
# 4
# 1 2 3 4

# 2.50

# 5 
# 10 8 6 3 11

#8.00



def merge(arr, start, mid, end):
    n1 = mid - start + 1
    n2 = end - mid

    left_arr = [0 for _ in range(n1)]
    right_arr = [0 for _ in range(n2)]

    for i in range(n1):
        left_arr[i] = arr[start + i]
    for j in range(n2):
        right_arr[j] = arr[mid + 1 + j]

    k = start
    left, right = 0, 0
    while (k - start < n1 + n2):
        if (right >= n2 or (left < n1 and left_arr[left] <= right_arr[right])):
            arr[k] = left_arr[left]
            left += 1
        else:
            arr[k] = right_arr[right]
            right += 1
        k += 1


def mergeSort(arr, left, right):
    if (left < right):
        mid = left + (right - left) // 2
        mergeSort(arr, left, mid)
        mergeSort(arr, mid + 1, right)

        merge(arr, left, mid, right)


# main
n = int(input())
arr = [int(x) for x in input().split()]

if n == 1:
    print("%.2f" % arr[0])
else:
    if n > 2:
        mergeSort(arr, 0, n-1)
    if n % 2 == 0:
        a = arr[(n//2)-1]
        b = arr[n//2]
        print("%.2f" % ((a+b)/2))
    else:
        print("%.2f" % arr[n//2])

# Time Complexity: O(n log n)
# Space Complexity: O(n) (due to temporary arrays)
# Stable, efficient, and works for large datasets
# Widely used in practice

# Merge Sort (O(n log n) Time Complexity)
# Merge sort divides the array into halves recursively (log n levels).
# At each level, it merges all elements (n operations per level).
# Total operations:
# log n levels × n operations per level = O(n log n)

# ---------- recursively sorting using stack --------
#------------- 3 sq3- sort stack recursively without using  loops ---------

# 5
# 43 64 32 74 75

# 75 74 64 43 32 


def sortedPush(s, element):
    if len(s)==0 or element>s[-1]:
        s.append(element)
    else:
        temp = s.pop()
        sortedPush(s,element)
        s.append(temp)


def sortStack(s):
    if len(s) !=0:
        temp = s.pop()
        sortStack(s)
        sortedPush(s,temp)
        

def printStack(s):
    if len(stack) ==0:
        return 
    else:
        x = s[-1] 
        s.pop(-1)
        print(x, end= ' ')
        printStack(s) 
        s.append(x)


stack = []
n = int(input())
A = [int(x) for x in input().split()][:n]
for i in range(n):
    stack.append(A[i])

sortStack(stack)
# print(stack)
printStack(stack)


# Recursive Stack Sort
# Time Complexity: O(n²) (worst case, due to repeated popping and pushing)
# Space Complexity: O(n) (due to recursion and stack)
# Mainly for educational purposes or when you must use stack operations only
# Not efficient for large datasets

# Stack Recursive Sort (O(n²) Time Complexity)
# Each time you pop an element from the stack in sortStack, you recursively sort the remaining stack.
# Then, in sortedPush, you may pop all elements again to insert the current element in the correct position.
# For each of the n elements, you may do up to n operations (inserting into the sorted stack).
# Total operations:
# First element: 1 push
# Second element: up to 2 pops/pushes
# ...
# nth element: up to n pops/pushes
# Sum: 1 + 2 + ... + n = O(n²)


