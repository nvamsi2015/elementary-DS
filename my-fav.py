#sorting
#two pointer 
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


#priority queue

# -----------------1. (pq-12) find kth largest element in sorted matrix -----------
# each of the rows and columns is sorted in non decreasing order

# 3 5
# 1 2 3
# 3 3 4
# 5 5 5

# 3

# 3 5
# 1 2 3
# 4 5 6
# 7 8 9

# 5

from queue import PriorityQueue

def kth_smallest_number(matrix,k):
    size = len(matrix) 
    pq = PriorityQueue() 
    suitable_rows = min(size,k) #min(3,5) = 3,   in a 10*1 matrix to get 5th smallest number  suitable rows will only be min(10,5) = 5

    # Picking up first element of each row, for the first iteration 
    for i in range(suitable_rows):
        pq.put((matrix[i][0], (i,0)))
        # print(pq.queue) or print(list(pq.queue)) #[(1,(0,0)), (3,(1,0)), (5,(2,0))]
        
    while k:
        least_value, (i,j) = pq.get() 

        if j < size-1:
            pq.put((matrix[i][j+1], (i,j+1))) #[(2,(0,1)), (3,(1,0)), (5,(2,0))]
        k-=1 
    
    return least_value    

n,k= [int(each) for each in input().split()]
i=0 
matrix=[]
while i<n:
    row = [int(each) for each in input().split()]
    matrix.append(row) 
    i+=1 

print(kth_smallest_number(matrix,k))

#----- hashtable
#--------10 Find unique Triplets with sum 0 ----  
# 6
# 2 0 5 -3 1 -2

# 2 -3 1
# 2 0 -2
# 5 -3 -2

def get_threesum(nums,n):
    triplets = [] 
    unique_pairs = set() 
    for i in range(n):
        seen = set() 
        for j in range(i+1,n):
            complement = -nums[i] - nums[j]
            if complement in seen:
                min_val = min(nums[i], min(complement, nums[j]))
                max_val = max(nums[i], max(complement, nums[j]))
                if (min_val, max_val) not in unique_pairs:
                    triplets.append([nums[i], complement, nums[j]])
                    unique_pairs.add((min_val, max_val))
            seen.add(nums[j]) 
    return triplets 

nums_of_ints = int(input())
list_of_ints = [value for value in map(int,input().split())]
result = get_threesum(list_of_ints, nums_of_ints) 
for i in range(len(result)):
    print(result[i][0], result[i][1], result[i][2])

# ---------11 Longest Unique Charecters Substring ---------  
# 1
# abcadb 

# 4
from collections import defaultdict 

def long_unique_str_len(given_str):
    max_len, start_index, char_dict = 0, -1, defaultdict(int) 
    for i in range(len(given_str)):
        if given_str[i] in char_dict:
            start_index = max(start_index, char_dict[given_str[i]])
        max_len = max(max_len, i - start_index)
        char_dict[given_str[i]] = i 
    return max_len

T = int(input())
for i in range(T):
    print(long_unique_str_len(input()))

# -----13 Max subarray length with equal 0 and 1 s in it ------  
# 4
# 1 0 1 0
# 4 op

def max_length(binary_array):
    prefix_sums = {} 
    prefix_sums[0] = -1 
    maxlen = 0 
    count = 0 
    for i in range(len(binary_array)):
        count += -1 if binary_array[i] ==0 else 1 
        if count in prefix_sums:
            value = prefix_sums[count] 
            maxlen = max(maxlen, i - value) 
        else:
            prefix_sums[count] = i 
    return maxlen 
    
_  = input() 
binary_array = [int(each) for each in input().split()]
maxlen = max_length(binary_array) 
print(maxlen) 

# -------------------------------------------14 Avoid floods --------------------------------------  
# 6 
# 5 6 0 0 5 6
# -1 -1 5 6 -1 -1

# 7 
# 0 5 0 5 0 5 5 
# -2 

def get_lower_bound(nums_set, num): #(2,3},0)
    nums = list(nums_set) #[2,3]
    if not nums:
        return None 
    if num in nums:
        lower_bound = num 
    else:
        lower_bound = pow(10,6) 
        for each in nums:
            if each>num:
                lower_bound = min(lower_bound,each) 
    
    lower_bound = None if lower_bound == pow(10,6) else lower_bound #2
    return lower_bound #2

def avoid_lakes(lakes):
    ans = [] 
    full_lakes = {}     # Lake number,day when it become full  {5:0, 6:1}
    dry_days = set() # Available days that can be used for drying a lake, {2,3}
    for i,each in enumerate(lakes):
        if not each:
            dry_days.add(i) 
            ans.append(0) 
        else:
            if each in full_lakes:
                lb = get_lower_bound(dry_days, full_lakes[each]) #({2,}, full_lakes[5]=0) => lb=2
                if lb is None:
                    return [-2] 
                
                ans[lb] = each          # ans[2] = 5 means we are drying 5 on day 2 
                dry_days.remove(lb) 
            full_lakes[each] = i        #{5:4, 6:1}
            ans.append(-1)              # on rainy day append -1 
    return ans



_  = input() 
lakes = [int(each) for each in input().split()]
rains_status = avoid_lakes(lakes) 
print(*rains_status) 

# -------15 Maximum length  subArray with sum K ------  
# arrays p3 gives min length subarray with sum k 

# 5 3
# 6 1 -1 -2 -1
# 5

# 4 4
# 1 1 1 1
# 4

def lenofSubArray(arr,k):
    n = len(arr) 
    mydict = dict() 
    total = 0 
    maxLen = 0 
    for i in range(n):
        total+=arr[i] 
        if total == k:
            maxLen = i+1 
        elif (total - k) in mydict:
            maxLen = max(maxLen, i- mydict[total -k])
            
        if total not in mydict:
            mydict[total] = i 
    return maxLen

n,k = map(int,input().split())
arr = [int(x) for x  in input().split()] 
print(lenofSubArray(arr, k)) 

# ------- hash tables 17,  Total no of subarrays whose sum is k-----  


from collections import defaultdict 

def subarray_sum(integer_array, target_sum):
    count = 0 
    total = 0 
    prefix_sum = defaultdict(int) 
    prefix_sum[0]+=1 
    for each in integer_array:
        total +=each 
        count += prefix_sum[total - target_sum]
        prefix_sum[total] += 1 
    return count 

_ = int(input())
integer_array = [int(each) for each in input().split()]
target_sum = int(input())
count = subarray_sum(integer_array, target_sum) 
print(count) 