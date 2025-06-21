# -- p4 find smallest and largest element in a rotated array of a sorted array ------learn why l<=h,  mid<n-1, nums[l] <= nums[mid] => l = mid+1  and return 0  are needed needed------------
#  in a rotated array largest and smallest array will be neighbours or largest will be at one end and smallest at one end
#  pivot index is index which has smallest value 

# 6
# 5 6 1 2 3 4

# 1 6 
# ---------
# 7
# -2 -1 4 5 6 7 -3

# -3 7

def get_pivot_index(nums, n):
    l= 0 
    h = n-1 
    while l<=h:
        mid = (l+h)//2 
        if nums[mid] > nums[mid+1]:
            return mid+1 
        elif nums[0] <  nums[mid]:
            l = mid+1 
        else:
            h = mid-1 
            
n= int(input())
nums = [int(x) for x in input().split()]
pivot_index = get_pivot_index(nums,n) 
# print(pivot_index)
print(nums[pivot_index], nums[pivot_index-1])


# above code works for most of the inputs like: 
# input: 
# 5
# 5 6 1 2 3 4

# but fiails for edge cases like :
# input: 
# 1
# 2

# Traceback (most recent call last):
#   File "main.py", line 16, in <module>
#     pivot_index = get_pivot_index(nums,n) 
#   File "main.py", line 7, in get_pivot_index
#     if nums[mid] > nums[mid+1]:
# IndexError: list index out of range

nums = [2]
n= 1
l = 0
h = 0 # n-1

while (0 <= 0): #     while l<=h:
    m = 0 
    if arr[0] > arr[1]  # if nums[mid] > nums[mid+1]: here index error occurs as arr[1] is not defined
    # to handle this we add an extra conditon mid < n-1 befor checking nums[mid] > nums[mid+1] as when mid == n-1 there wont be mid+1 defined
    if mid < n-1 and arr[mid] > arr[mid] + 1:   #this conditoin will be false for the given mid, l, h, arr values 
        return mid+1 
    elif arr[l] < arr[mid] :    # this condition ensues largest number is not at l and from l to mid there is not largest number
        l = mid + 1     # l = 0+1 =1 
    else:               # not executed 
        high = mid - 1     

# l= 1, h=0
while l<= h: # false while loop break
    # but nothing is returned till now, so we return 0 to handle all such cases 
return 0 # when l crosses h => Binary search cound't find smallest element in the middle of the array => smallest element at starting only 

# -------- modified code --------------------------  
def get_pivot_index(nums, n):
    l= 0 
    h = n-1 
    while l<=h:                                 # l=h conditon should be considered not just l<h
        mid = (l+h)//2 
        if mid< n-1 and  nums[mid] > nums[mid+1]:   # without mid < n-1 you will get index error as arr[mid+1] is out of index when mid = n-1
            return mid+1 
        elif nums[l] <=  nums[mid]:         # nums < nums[mid] will give time limit exceeded error 
            l = mid+1 
        else:
            h = mid+1 
    return 0                                # you have to return something when loop didn't return anything 
n= int(input())
nums = [int(x) for x in input().split()]
pivot_index = get_pivot_index(nums,n) 
if(pivot_index == 0): 
    print(nums[pivot_index], nums[n-1])
else:
    print(nums[pivot_index], nums[pivot_index-1])
# ------------------------------------------------------
# above code failed for the input     gave time limit exceede error 
# 5 
# 6 2 3 4 5

# reson: for l= 0 and h=2, mid =1 at else condition h = mid+1 always sets h = 2 again which is the current values and loops runs infinitely 
# typo error: else condition should be h = mid - 1

# --------- modified code  -------------- 

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
# ------------------------------------ 