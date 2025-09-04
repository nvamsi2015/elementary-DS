#sorting

#------------- 1. max rain water  sorting-6 -----------------
# 3
# 3 6 2

# 4


# 3
# 5 6 2

#5


def maxArea(heights):
    maxArea = 0 
    left = 0 
    right = len(heights)-1 
    
    while left<right:
        maxArea = max(maxArea, min(heights[left], heights[right])*(right-left))
        if heights[left] < heights[right]:
            left+=1 
        else:
            right-=1 
    return maxArea

N = input()
heights = [int(x) for x in input().split()]
print(maxArea(heights))

#stack 
#------------- 1. stack 3 sq3- sort stack recursively without using  loops ---------

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

#-------------2. stack-4 print minimum in the stack before each pop---------
# 4
# 2 4 1 3

# 1 1 2 2 

from collections import deque

INITIAL_STACK = deque()
MIN_STACK = deque()

def push(arr, n):
    INITIAL_STACK.append(arr[0])
    MIN_STACK.append(arr[0])

    for i in range(1, n):
        if arr[i] <= MIN_STACK[-1]:
            MIN_STACK.append(arr[i])
        INITIAL_STACK.append(arr[i])

def get_min_at_pop():
    while INITIAL_STACK:
        print(MIN_STACK[-1], end=" ")
        if MIN_STACK[-1] == INITIAL_STACK[-1]:      #we can access deque[-1] 
            MIN_STACK.pop()
            INITIAL_STACK.pop()
        else:
            INITIAL_STACK.pop()

def main():
    n = int(input())
    nums = [int(i) for i in input().split()]
    push(nums, n)
    get_min_at_pop()

main()

# usage of deque to store elements
# we can access deque[-1] 

#-------------3 stack-5 Length of longest valid substring ---------

# ((())))()
# 6

from collections import deque


def findMaxLenBraces(braces):
    n= len(braces) 
    stack = deque()
    stack.append(-1) 
    result = 0 
    
    for i in range(n):
        if braces[i] == '(':
            stack.append(i) 
        else:
            stack.pop()
            if len(stack) != 0:
                currentValue = i - stack[-1] 
                result  = max(result, currentValue) 
            else:
                stack.append(i) 
    return result 
    
    
braces = input() 
print(findMaxLenBraces(braces))

#why -1 is added to stack initially?
#to handle the edge case when the valid substring starts from index 

#------------- 6- diff of closest smallest element on left and right side of element in array---------
# 3
# 2 1 8

# 1

from collections import deque

def leftSmaller(arr, n, SE):
    num_stack = deque() 
    for i in range(n):
        while ( num_stack and num_stack[-1] >= arr[i]):
            num_stack.pop() 
        
        if num_stack:
            SE[i] = num_stack[-1] 
        else:
            SE[i] =0
        num_stack.append(arr[i]) 

            

def findMaxDiff(arr, n):
    ls = [0]*n 
    rs = [0]*n 
    
    leftSmaller(arr,n,ls) 
    leftSmaller(arr[::-1], n, rs)
    max_diff = -1 
    
    for i in range(n):
        max_diff = max(max_diff, abs(ls[i]- rs[n-1-i]))
    return max_diff
    
    
n= int(input())
arr = [int(x) for x in input().split()] 
print(findMaxDiff(arr,n))



#----------- 17 Find Largest Rectangle -----------

# 6
# 1 4 5 6 2 3
# 12

# 6
# 1 2 3 1 5 6
# 10

from collections import deque

def MaxArea(heights):
    max_area = 0 
    currentIndex = 0 
    indexStack = deque()
    indexStack.append(-1) 
    
    while currentIndex < len(heights):
        while indexStack[-1] != -1 and heights[indexStack[-1]] >= heights[currentIndex]:
            poppedIndex = indexStack.pop()
            max_area = max(max_area, heights[poppedIndex] * (currentIndex - indexStack[-1] -1))
        
        indexStack.append(currentIndex) 
        currentIndex +=1 
    
    while indexStack[-1] != -1:
        poppedIndex = indexStack.pop() 
        max_area = max(max_area, heights[poppedIndex] * (len(heights) - indexStack[-1] -1))
    
    return max_area

n = int(input())
heights = [int(x) for x in input().split()]
max_area = MaxArea(heights)
print(max_area)