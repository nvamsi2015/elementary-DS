#  patterns
# 1. returning mid with l<=h condition in while loop
# 1.1 returning ans, with ans = min(ans, mid) with l= mid+1, h = mid-1, ( min x to divide arr such that sum of quotients <= threshold, )

# 2. returning l with l<h condition in while loop, l=mid+1, h= mid will break the loop condition l<h fail ( peak of mountain, helping friend read book, )

# 3. returning l with l<h condition in while loop, l= mid, h= mid-1 will break the loop condition l<h fail ( arranging dustbins,)



#---------- bs1 find element in 1d- array  -----------
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


# ------------------ bs2 find smallest and largest element in a rotated array of a sorted array (p4 in intro) ---------
# learn why l<=h,  mid<n-1, nums[l] <= nums[mid] => l = mid+1  and return 0  are needed needed------------

# 6
# 5 6 1 2 3 4
# output: 1 6

def get_pivot_index(nums, n): # piviot index is index of smallest element
    l= 0 
    h = n-1 
    while l<=h:
        mid = (l+h)//2 
        if mid< n-1 and  nums[mid] > nums[mid+1]: # in rotated array, the sequence will always be increasing and only at one point it will drop, that is the pivot point
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

# ----------- bs3 Peak of a mountain (p6 in intro)  -----------
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

#-------bs4 Minimum time to wait (p8 in intro)-------
# 5
# 1 5 3 4 2
# 3 1

# 3

INT_MAX = 2 ** 31 - 1

def upgrade_possible(cooldown, mid, n, m, k):
    upgrades = 0
    antique = 0
    flag = 0
    for i in range(n):
        if cooldown[i] <= mid:
            antique += 1
        else:
            antique = 0
        if antique == k:
            upgrades += 1
            antique = 0

    if upgrades >= m:
        flag = 1
    return flag

def min_cooldown_time(cooldown, n, m, k):
    if m * k > n:
        return -1

    start = 0
    end = INT_MAX
    while start < end:
        mid = start + (end - start) // 2
        if upgrade_possible(cooldown, mid, n, m, k):
            end = mid
        else:
            start = mid + 1

    return end

if __name__ == "__main__":
    n = int(input())
    cooldown = [int(x) for x in input().split()][:n]
    m, k = map(int, (input().split()))
    print(min_cooldown_time(cooldown, n, m, k))


# -------------bs5  valid perfect square (p10 in intro) 
# 3
# 8
# 1
# 4

# False
# True
# True

def is_valid_perfect_square(val):
    if val == 1:
        return 1

    start = 2
    end = val // 2
    while start <= end:
        mid = start + (end - start) // 2
        is_square = mid * mid
        if is_square == val:
            return 1
        if is_square > val:
            end = mid - 1
        else:
            start = mid + 1
    return 0


t = int(input())
while t:
    n = int(input())
    if is_valid_perfect_square(n):
        print("True")
    else:
        print("False")
    t -= 1



#------------ bs6 helping a friend read book (p11 in intro) --------
# 5
# 2 5 7 8 6
# 8

# 5

# k books : 1 day
# p books : x days

# x = p/k 
# x = ceil(p/k)
# x = (p-1)//k + 1        # in integer math ceil(p / K) is the same as (p - 1) // K + 1.

def min_reading_speed_k(book_piles, D):
    def possible(K):
        return sum((p - 1) // K + 1 for p in book_piles) <= D

    low, high = 1, int(1e9)
    while low < high:
        mi = (low + high) // 2
        if not possible(mi):
            low = mi + 1
        else:
            high = mi
    return low


def main():
    int(input())
    book_piles = [int(x) for x in input().split()]
    Days = int(input())
    print(min_reading_speed_k(book_piles, Days))

main()

#------------ bs7 total sum of quotients (p12 in intro)
#pgm to find minimum x, when x divides all elements in arr, the sum of quotients does not exceed threshold s.

# N S
# 6 27
# 10 8 8 11 14 19

# 3

def valid_contender(arr, mid, n, threshold):
    sum = 0
    for i in range(n):
        sum += arr[i] // mid
    return sum <= threshold

def smallestDivisor(arr, n, threshold):
    maximum = max(arr)
    low = 1
    high = maximum + 1
    ans = high
    while low <= high:
        mid = (low + high) // 2
        if not valid_contender(arr, mid, n, threshold):
            low = mid + 1
        else:
            ans = min(ans, mid)
            high = mid - 1                  #this line will break the loop when high<low
    return ans

def main():
    n, threshold = map(int, input().split())
    arr = list(map(int, input().split()))
    print(smallestDivisor(arr, n, threshold))
main()

#------------ bs8 search range of k (p14 in intro)
# 5
# 1 2 2 2 3
# 2

# 1 3


#We will do binary search twice. 
# The first time, we will find the first position of K. 
# The second time, we will find the last position of K.


def search_range(A, n, k):
    start, end = 0, n - 1
    start_index, end_index = -1, -1
    while start < end:
        mid = (start + end) // 2
        if A[mid] < k:
            start = mid + 1
        else:
            end = mid

    if A[start] != k:
        print("-1")
        return
    else:
        start_index = start

    end = n - 1
    while start < end:
        mid = (start + end) // 2 + 1  #The + 1 is to ensure that the search range narrows down when A[mid] is equal to k.
        if A[mid] > k:
            end = mid - 1
        else:
            start = mid
    end_index = end
    print(start_index, end_index)
    return


def main():
    N = int(input())
    A = [int(x) for x in input().split()][:N]
    K = int(input())
    search_range(A, N, K)


main()


#------------bs9  Arranging dustbins (p16 in intro)
# given N places and M dustbins, place the dustbins in such a way that the minimum distance between any two dustbins is maximized.

# 5
# 1 3 5 7 10
# 3

# 4 (maximum possible minimum distance between any two dustbins)

def max_distance(position, m):
    n = len(position)

    def is_possible(d):
        ans, curr = 1, position[0]
        for i in range(1, n):
            if position[i] - curr >= d:
                ans += 1
                curr = position[i]
        return ans >= m
                                               # condition is to place all m dustbins
    low, high = 0, position[-1] - position[0]  #high = 9 => min distance bw 2 dustbins can be in range 0 to 9, we have find max value in this range that satisfies the condition
    while low < high:
        mid = high - (high-low)//2              # this line always chooses higher value as mid, which is different to (high+low)//2
        if is_possible(mid):                    # ex: low=0, high=9 => mid = 5, while (high+low)//2 normally gives mid =4
            low = mid                           # ex: low=3, high=4 => mid = 4, while (high+low)//2 normally gives mid =3
        else:
            high = mid - 1
    return low


def main():
    int(input())
    positions = [int(x) for x in input().split()]
    M = int(input())
    print(max_distance(positions, M))
    return


main()


#------------ bs10 K closest elements to x  in sorted array ( p4 in arrays ) --------
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

# ----------- bs11 find only duplicate number in the array (p14 in arrays ) --------------- 

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

# ------bs12 median of 2 sorted array in logarthmic time (p24 sorting---
# 4 4
# 1 2 4 6
# 3 6 8 

# 5.0

from sys import maxsize


def get_median_of_sorted_arrays(nums1, nums2):
    if len(nums1) > len(nums2):
        # we want first part to be smaller than second
        nums1, nums2 = nums2, nums1

    x = len(nums1)
    y = len(nums2)

    low = 0
    high = x

    while low <= high:
        # basic selection of the partitioner
        partitionX = (low + high) // 2
        # partitioning of the second array
        partitionY = (x + y + 1) // 2 - partitionX
        partitionY = int(partitionY)
        partitionX = int(partitionX)

        # getting values. sometimes max_left_x index can be 0
        max_left_x = nums1[partitionX - 1] if partitionX > 0 else -maxsize
        min_right_x = maxsize if partitionX == x else nums1[partitionX]

        max_left_y = nums2[partitionY - 1] if partitionY > 0 else -maxsize
        min_right_y = maxsize if partitionY == y else nums2[partitionY]

        # let's check if partiiton was selected correctly
        if max_left_x <= min_right_y and min_right_x >= max_left_y:
            if (x + y) % 2 == 0:
                return (
                    max(max_left_x, max_left_y) + min(min_right_x, min_right_y)
                ) / 2.0
            else:
                return max(max_left_x, max_left_y)
        # if not - move partitioning region
        elif max_left_x > min_right_y:
            high = partitionX - 1
        else:
            low = partitionX + 1
    return


# main
m, n = input().split()
arr1 = [int(x) for x in input().split()]
arr2 = [int(x) for x in input().split()]

print("%.1f" % get_median_of_sorted_arrays(arr1, arr2))

# ----------------bs13  kth smallest subarray sum (35 in sorting)
# 3 4
# 5 6 4

# 10

from bisect import bisect_right

def CalculateRank(prefix, n, x):

    rank = 0
    sumBeforeIthindex = 0
    for i in range(n):
        cnt = bisect_right(prefix, sumBeforeIthindex + x)
        cnt -= i
        rank += cnt
        sumBeforeIthindex = prefix[i]
    return rank

def findKthSmallestSum(a, n, k):

    prefix = []
    total_sum = 0
    for i in range(n):
        total_sum += a[i]
        prefix.append(total_sum)
    ans = 0
    start = 0
    end = total_sum
    while (start <= end):

        mid = (start + end)//2
        if (CalculateRank(prefix, n, mid) >= k):
            ans = mid
            end = mid - 1
        else:
            start = mid + 1
    return ans

n, k = map(int, input().split())
a = [int(val) for val in input().split()]
print(findKthSmallestSum(a, n, k))