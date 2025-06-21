#find element in 1d- array 
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

# this can be solved better by pq or heap using dictionary's with frequency counting