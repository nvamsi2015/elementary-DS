# ----------- p6 Peak of a mountain  -----------
# input:
# 6 
# 1 2 3 5 3 2
# output: 5



# rotated array will only have one index where arr[i] > arr[i+1]
# but mountain will have arr[i] > arr [i+1] for all the indexes after the peak index, if mid<n-1 and arr[mid]> arr[mid+1]: will be true 

# approch to solve:

# left of peak pattern: arr[i] < arr[i+1] => left shoule move to mid+1  toignore l to mid range 
# right of peak pattern: arr[i] > arr[i+1] => high should be move mid  to ignore mid to high range

# perform binary search till you have l = h = mid, the value with that index will not follow both the above conditions as it is not in left side or right side pattern



#04-04-2025
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




            