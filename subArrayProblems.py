# 1----------------array p3 Min length subArray with sum atleast k (sw) ------------write pgm for with sum exactly k ( modification)
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

# 2-------hash -15 Maximum length  subArray with sum K ------  
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

# ------- 17 Total no of subarrays whose sum is k-----  
# 6
# 1 2 3 4 5 2
# 7
# 2

# 3
# 1 1 2
# 7
# 0

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
