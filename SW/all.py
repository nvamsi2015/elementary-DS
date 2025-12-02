# -------------- sw1 Min lenth subArray with sum atleast k (p3 in arrays) ------------
# 7 9
# 5 3 1 2 4 3 6
# op: 2

INT_MAX = float("inf")

def min_length_subarray_with_sum_atleast_k(nums,k):
    if not nums:
        return 0 
    ans = INT_MAX 
    left  = 0 
    sum = 0 
    for i in range(len(nums)):
        sum += nums[i]
        while sum>=k:
            ans = min(ans, i+1-left) 
            sum = sum-nums[left]
            left = left+1 
    
    if ans != INT_MAX:
        print (ans) 
    else:
        print("0")

n,k = map(int,input().split())
nums = [int(x) for x in input().split()]
min_length_subarray_with_sum_atleast_k(nums,k)

# ------- sw2 Max continous ones with k flips allowed in a binary array (p5 in arrays) --------------
# 9 1
# 0 1 1 0 1 0 0 0 1
# op: 1 4

def MaxContinuousOnes(A,n,k):
    left=right=start_index=0 
    maxLength= 0 
    
    while right<len(A):
        while right < len(A) and (A[right]==1 or k>0):
            if A[right] == 0:
                k-=1 
            right+=1 
        
        length = right - left 
        if(length> maxLength):
            maxLength = length 
            start_index = left  
        
        while left< len(A) and A[left] == 1:
            left +=1 
        
        left+=1 
        k+=1 
    
    print(start_index, start_index+maxLength-1, end=' ')

n,k = map(int,input().split())
A = [int(x) for x in input().split()]
MaxContinuousOnes(A,n,k)
#----------- sw3  Find triplets with sum k in a sorted array (p10 in arrays)------ 
# 8 4
# -2 -1 0 1 2 4 4 4
# op: 
# -2 2 4
# -1 1 4

flag = 0 
def findPairs(A,index, k):
    global flag
    low, high = index+1, len(A)-1 
    while low<high:
        total = A[index] + A[low]+ A[high] 
        if total < k:
            low+=1 
        elif total>k:
            high-=1 
        else:
            print(A[index], A[low], A[high])
            low+=1 
            high-=1 
            while low<high and A[low] == A[low-1]:
                low+=1 
            flag=1

def tripletsWithSumK(A,n,k):
    global flag 
    for i in range(n-2):
        if i==0 or A[i-1] != A[i]: 
            findPairs(A, i, k) 
    if flag ==0:
        print(-1) 

    

n,k = map(int, input().split())
A = [int(x) for x in input().split()]
tripletsWithSumK(A,n,k)

# -------- sw3 Minimum swaps to group all ones in Binary array (p12 in arrays)--------------

def minSwapsReqToGroupAllOnes(A,n):
    total_ones =0 

    for i in range(n):
        if A[i] == 1:
            total_ones+=1 
            
    left=right = 0
    
    ones_in_window_count = 0 
    max_ones_in_window = 0 
    
    while right<n:
        while right<n and right-left <total_ones:
            if A[right] == 1:
                ones_in_window_count+=1 
            right+=1 
        max_ones_in_window = max(ones_in_window_count, max_ones_in_window) 
 
        if right == n:
            break 
        
        if A[left] == 1:
            ones_in_window_count-=1 
        left+=1
    return total_ones - max_ones_in_window


n = int(input())
A = [int(x) for x in input().split()]
print(minSwapsReqToGroupAllOnes(A,n))

#-------sw4 maximize happy customers (p13 in arrays) (p13 in arrays)-------------

# 9 3
# 1 0 1 2 4 3 7 0 5
# 0 1 1 1 0 1 0 1 0
# op: 22

def getMaxInWindowX(customers, x):
    maxi = 0 
    sum = 0 
    for i in range(len(customers)):
        sum +=customers[i]
        if i>=x:
            sum -= customers[i - x ]
        maxi = max(maxi, sum)
    return maxi
        

def MaxSatisfiedCustomers(customersArray, sleepArray, x):
    satisfy = 0  
    
    for i in range(len(customersArray)):
        if sleepArray[i] == 0:
            satisfy+=customersArray[i] 
        customersArray[i] = sleepArray[i]*customersArray[i] # because customers at sleepArray[i] == 0 are happy and we already counted them om satisfy, now we only deal with sleepy[i] ==1, so making customersArray[i] = 0 for already satisfied customers 
    return satisfy + getMaxInWindowX(customersArray,x)

n,x = map(int, input().split())
customersArray = [int(x) for x in input().split()]
sleepArray = [int(x) for x in input().split()]

print(MaxSatisfiedCustomers(customersArray, sleepArray, x))

# ----------------sw5  SubArray with product less than k (p16 in arrays -------------------
# 5 7
# 9 10 3 2 7
# op: 3 [{2},{3},{2,3}]

def noOf_subArrays_withProduct_lessthan_k(A,k):
    if k<2:
        return 0 
    count,product = 0,1 
    left = 0 
    
    for right in range (len(A)):
        product *= A[right] 
        while left<= right and product >= k:
            product /= A[left] 
            left+=1 
        count += right-left+1 
    
    return count
        
    

n,k = map(int,input().split())
A = [int(x) for x in input().split()]

print(noOf_subArrays_withProduct_lessthan_k(A,k))

# ----------------sw6 distribute m coin boxes to n children, diff bw max and min coins in boxes should be min (22 in sorting)
# 5 3
# 4 8 6 5 4

# 1 (min difference)

from sys import maxsize 

def find_min_diff(coins, m,n):
    coins.sort() 
    min_diff = maxsize 
    i=0 
    while i+n-1 < m:
        diff = coins[i+n-1] -coins[i] 
        min_diff = min(min_diff,diff) 
        i+=1 
    return min_diff

m,n = map(int,input().split())
coins = [int(x) for x in input().split()] 
print(find_min_diff(coins, m,n))
