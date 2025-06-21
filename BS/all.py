#---------- p1 find element in 1d- array  -----------
# input:
# 4
# 4 8 9 10
# 9
# outpu: 2

def findIndex(nums,n, k):
    l = 0
    h= n-1 
    while l<=h:
        mid = (l+h)//2 
        if nums[mid] == k:
            return mid
        elif nums[mid] < k:
            l = mid+1 
        else: 
            h = mid-1 
    return -1


n= int(input())
nums = [int(x) for x in input().split()]
k = int(input())
print(findIndex(nums,n, k))

# note:
# 1. mid is calculated as (l+h)//2  inside while loop not outside, bc mid calculated only when l<=h condition satisfyies


# ------------------ p2 find smallest and largest element in a rotated array of a sorted array (p4 in intro) ---------learn why l<=h,  mid<n-1, nums[l] <= nums[mid] => l = mid+1  and return 0  are needed needed------------

def get_pivot_index(nums, n):
    l= 0 
    h = n-1 
    while l<=h:
        mid = (l+h)//2 
        if mid< n-1 and  nums[mid] > nums[mid+1]:
            return mid+1 
        elif nums[l] <=  nums[mid]:
            l = mid+1 
        else:
            h = mid-1 
    return 0       
n= int(input())
nums = [int(x) for x in input().split()]
pivot_index = get_pivot_index(nums,n) 
if(pivot_index == 0): 
    print(nums[pivot_index], nums[n-1])
else:
    print(nums[pivot_index], nums[pivot_index-1])

n= int(input())
nums = [int(x) for x in input().split()]
pivot_index = get_pivot_index(nums,n) 
# print(pivot_index)
print(nums[pivot_index], nums[pivot_index-1])

# ----------- p3 Peak of a mountain (p6 in intro)  -----------
# input:
# 6 
# 1 2 3 5 3 2
# output: 5

def peakIndex(arr, n):
    l = 0
    h = n-1 
    while l<h:
        mid = (l+h)//2 
        if arr[mid]< arr[mid+1]:
            l = mid+1 
        else:
            h = mid
    return l

n= int(input())
nums = [int(x) for x in input().split()]
print(peakIndex(nums, n))

#------------ p4 K closest elements to x  in sorted array ( p4 in arrays ) --------
# 5 2 8
# 1 3 6 7 10
# op: 6 7

def k_closest_numbers(A, k, x):
    n= len(nums) 
    low= 0 
    high= n-k 
    while low< high:
        mid = (low+high)//2 
        if x>= A[mid+k]:
            low= mid+1 
        elif x<= A[mid]:
            high = mid 
        elif(A[mid+k] + A[mid])/2 < x:
            low = mid+1 
        else:
            high= mid 
    for i in range(low,low+k):
        print(A[i], end= ' ')
    return 

n,k,x = map(int,input().split())
nums = list(map(int,input().split())) 
k_closest_numbers(nums,k,x)

# ----------- p5 find only duplicate number in the array (p14 in arrays ) --------------- 

# ip: 
# 4
# 1 2 3 2
# op: 2
def duplicateNumber(A):
    left = 1 
    right = len(A) -1 
    while left < right:
        mid = (right + left) //2 
        count = 0 
        for val in A:
            if val <= mid:
                count +=1 
        if count <= mid:
            left = mid+1 
        else:
            right = mid 
    return left 
    
N = int(input())
A = [int(x) for x in input().split()]
print(duplicateNumber(A))

# ------ p6 