# --------1. Biggest mountain in array -------------
# 7
# 1 2 5 4 0 2 0
# 5

# 3
# 3 4 33
# 3

def biggestMountainInArray(A):
    n = len(A) 
    ans = 0 
    base = 0 
    
    while base<n:
        end = base 
        if end+1 < n and A[end]<A[end+1]:
            while end+1 < n and A[end]<A[end+1]:
                end+=1 
            
            if end+1 <n and A[end] > A[end+1]:
                while end+1 < n and A[end] > A[end+1]:
                    end+=1
        
                ans  = max(ans, end-base+1) 
        
        base = max(end, base+1) 
    return ans



n = int(input())
A = [int(x) for x in input().split()] 
print(biggestMountainInArray(A))

# ------------ 2. SubArray with k odd Numbers ------------
# 5 2
# 2 3 5 7 9
c
# 4

# 6 1
# 1 2 4 6 8 3 

# 10


def num_of_sub_arrays(A, k):
    n = len(A)
    prefix_sum = [0 for _ in range(n)]
    
    for i in range(n):
        if A[i] % 2 == 1:
            prefix_sum[i] = 1

    for i in range(1, n):
        prefix_sum[i] += prefix_sum[i - 1]
    
    evenCounter = [-1 for _ in range(n+1)]
    evenCounter[0] = 0
    ans = 0

    for i in range(n):
        if (prefix_sum[i] - k >= 0):
            ans += evenCounter[prefix_sum[i] - k] + 1
        evenCounter[prefix_sum[i]] += 1

    return ans


# main
n, k = map(int, input().split())
A = [int(val) for val in input().split()]
print(num_of_sub_arrays(A, k))

#--------------- 3. Reverse elements of an array ------------------
4
1 2 3 4
4 3 2 1

def reverse_array(A, left, right):
    while left < right:
        A[left], A[right] = A[right], A[left]
        left += 1
        right -= 1

N = int(input())
A = [int(val) for val in input().split()][:N]
reverse_array(A, 0, N - 1)
for a in A:
    print(a, end=" ")

# ----------------4. no of submatrices with sum k ----------------
3 3 2
1 0 1
3 -1 2
2 5 6

5

def sub_array_target_sum(rowSums, target):
    m = len(rowSums)
    ans = 0
    for i in range(m):
        sum = 0
        for j in range(i, m):
            sum += rowSums[j]
            if (sum == target):
                ans += 1
    return ans


def sub_matrix_target_sum(matrix, target):
    m = len(matrix)
    n = len(matrix[0])
    for i in range(m):
        for j in range(1, n):
            matrix[i][j] += matrix[i][j - 1]
    ans = 0
    for col1 in range(n):
        for col2 in range(col1, n):
            rowSums = [0 for _ in range(m)]
            for k in range(m):
                if (col1 == 0):
                    rowSums[k] = matrix[k][col2]
                else:
                    rowSums[k] = matrix[k][col2] - matrix[k][col1-1]
            ans += sub_array_target_sum(rowSums, target)
    return ans


m, n, k = map(int, input().split())
matrix = []
for i in range(m):
    row = [int(x) for x in input().split()]
    matrix.append(row)
print(sub_matrix_target_sum(matrix, k))


# ---------------- 5. Max rain water ----- 
3
3 6 2

4

def maxArea(heights):
    maxArea = 0
    i, right = 0, len(heights) - 1
    while(i < right):
        maxArea = max(maxArea, min(heights[i], heights[right]) * (right - i))
        if heights[i] < heights[right]:
            i += 1
        else:
            right -= 1
    
    return maxArea


N = input()
heights = [int(each) for each in input().split()]
print(maxArea(heights))

# ---------------- 6. Longest continous integers subarray in any order ------
6
1 3 6 9 7 8

4

def find_max_length(A):
    n = len(A)
    max_len = 1
    for i in range(n-1):
        mini, maxi = A[i], A[i]
        for j in range(i+1, n):
            mini = min(mini, A[j])
            maxi = max(maxi, A[j])

            if ((maxi - mini) == j - i):
                max_len = max(max_len, maxi - mini + 1)
    return max_len

n = int(input())
A = [int(val) for val in input().split()]
print(find_max_length(A))

# ---------------- 7. Interval intersection -------
2
4 6
8 9
5 7
8 10

5 6
8 9

class Interval:
    def __init__(self, start, end):
        self.start = start
        self.end = end


def intervalIntersection(A, B):
    res = []
    i, j = 0, 0
    while i < len(A) and j < len(B):
        if A[i].start <= B[j].end and B[j].start <= A[i].end:
            res.append([max(A[i].start, B[j].start), min(A[i].end, B[j].end)])

        if A[i].end < B[j].end:
            i += 1
        else:
            j += 1
    
    return res


if __name__ == "__main__":
    n = int(input())
    A, B = [], []
    A = [Interval(*[int(each) for each in input().split()]) for _ in range(n)]
    B = [Interval(*[int(each) for each in input().split()]) for _ in range(n)]
    
    intersection = intervalIntersection(A, B)

    for each in intersection:
        print(*each)

# ---------------- 8 next miimumm permutation -------------
# 3
# 8 5 8

# 8 8 5

def next_minimum_permutation(A, N):
    i = N - 2
    j = N - 1

    while i >= 0:
        if A[i] < A[i + 1]:
            break
        i -= 1

    if i == -1:
        A.reverse()
        return

    while j > i:
        if A[j] > A[i]:
            break
        j -= 1

    (A[i], A[j]) = (A[j], A[i])

    left = i + 1
    right = N - 1

    while left < right:
        (A[left], A[right]) = (A[right], A[left])
        left += 1
        right -= 1
    return


N = int(input())
A = [int(x) for x in input().split()][:N]
next_minimum_permutation(A, N)
for a in A:
    print(a, end=" ")

# ---------------- 9 sort the array in inc order and print the original indexes -------------
5
4 1 3 5 2

1 4 2 0 3 

def merge(A,start,mid,end):
    n1 = mid-start+1 
    n2 = end-mid 
    left_arr = [0 for _ in range(n1)]
    right_arr = [0 for _ in range(n2)]
    for i in range(n1):
        left_arr[i] = A[start+i] 
    for i in range(n2):
        right_arr[i] = A[mid+1+i] 
    left=right=0 
    k=start 
    
    while k-start < n1+n2:
        if(right>=n2) or ( left<n1 and left_arr[left] <= right_arr[right] ):
            A[k] = left_arr[left] 
            left+=1 
        else:
            A[k] = right_arr[right] 
            right+=1 
        k+=1 

def mergeSort(A,left,right):
    if left<right:
        mid =left + (right-left) //2 
        mergeSort(A,left,mid)
        mergeSort(A,mid+1,right) 
        merge(A,left,mid,right)

n = int(input())
A = [int(x) for x in input().split()]
temp = [x for x in A]
mergeSort(temp, 0,n-1)

for i in range(n):
    for j in range(n):
        if temp[i] == A[j]:
            print(j,end=' ')
            break

# ---------------- 10 Find the median in the arrary -----------
# 4
# 1 2 3 4

# 2.50

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


# ---------------- 11 odd even valley sort -----
# 6
# 4 3 8 7 10 9

# 9 7 3 4 8 10 

def mergeSort(arr): 
    if len(arr) >1: 
        mid = len(arr)//2
        L = arr[:mid]
        R = arr[mid:]

        mergeSort(L)
        mergeSort(R)

        i = j = k = 0
        
        while i < len(L) and j < len(R): 
            if L[i] < R[j]: 
                arr[k] = L[i] 
                i+=1
            else: 
                arr[k] = R[j] 
                j+=1
            k+=1
        
    
        while i < len(L): 
            arr[k] = L[i] 
            i+=1
            k+=1
        
        while j < len(R): 
            arr[k] = R[j] 
            j+=1
            k+=1

n = int(input())
arr = [int(x) for x in input().split()]
mergeSort(arr)
odd_temp = []
even_temp = []
for i in range(n-1, -1, -1):
     if arr[i]%2 == 0:
         even_temp.append(arr[i])
     else:
         odd_temp.append(arr[i])

print(*odd_temp, *even_temp[::-1])

# ---------------- 12- find kth smallest element in subarray[L,R] --
# # 7 3
# 3 2 5 4 7 1 9
# 2 5

# 5

def merge(A, start, mid, end):
    n1 = mid - start + 1
    n2 = end - mid
    left_arr = [0 for _ in range(n1)]
    right_arr = [0 for _ in range(n2)]

    for i in range(n1):
        left_arr[i] = A[start + i]
    for j in range(n2):
        right_arr[j] = A[mid + 1 + j]

    left = right = 0
    k = start
    while k - start < n1 + n2:
        if right >= n2 or (left < n1 and left_arr[left] <= right_arr[right]):
            A[k] = left_arr[left]
            left += 1
        else:
            A[k] = right_arr[right]
            right += 1
        k += 1


def mergeSort(A, left, right):
    if left < right:
        mid = left + (right - left) // 2
        mergeSort(A, left, mid)
        mergeSort(A, mid + 1, right)
        merge(A, left, mid, right)


# main
n, k = map(int, input().split())
A = [int(x) for x in input().split()]
l, r = map(int, input().split())
mergeSort(A, l, r)
print(A[l + k - 1])

# ----- 13- sum of 2 elements in array and 0 should have min absolute diff --
# 7
# 1 2 3 -4 6 10 -13

# -4 3

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


def find_closest_sum_pairs(arr):
    n = len(arr)
    closest_sum = abs(arr[0] + arr[n - 1])
    left = 0
    right = n - 1
    while (left < right):
        sum = arr[left] + arr[right]
        if (sum > 0):
            right -= 1
        elif (sum < 0):
            left += 1
        elif (sum == 0):
            right -= 1
            left += 1
        if (closest_sum > abs(sum)):
            closest_sum = abs(sum)
    return closest_sum


def print_closest_sum_pairs(arr, closest_sum):
    n = len(arr)
    left, right = 0, n-1
    while (left < right):
        sum = arr[left] + arr[right]
        if (closest_sum == abs(sum)):
            print(arr[left], arr[right], sep=" ")

        if (sum > 0):
            right -= 1
        elif (sum < 0):
            left += 1
        else:
            right -= 1
            left += 1
    return


n = int(input())
arr = [int(x) for x in input().split()]
mergeSort(arr, 0, n - 1)
closest_sum = find_closest_sum_pairs(arr)
print_closest_sum_pairs(arr, closest_sum)

# ----------------14 find pairs with minimum absolute diff ----------
# 7
# 4 1 8 10 2 3 7

# 1 2
# 2 3
# 3 4
# 7 8

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


n = int(input())
arr = [int(x) for x in input().split()] 
mergeSort(arr, 0, n-1)
min_diff=arr[1]-arr[0]
for i in range(n-1, 1, -1):
    if arr[i]-arr[i-1] < min_diff:
        min_diff = arr[i]-arr[i-1]
for i in range(n-1):
    if(arr[i+1]-arr[i]==min_diff):
        print(arr[i], arr[i+1])

# ------15 Difference between max sum and min sum of k elements in array -----
# 5 2
# 10 32 21 30 41

# 42 (73-31)

def merge(A, start, mid, end):
    n1 = mid - start + 1
    n2 = end - mid
    left_arr = [0 for _ in range(n1)]
    right_arr = [0 for _ in range(n2)]

    for i in range(n1):
        left_arr[i] = A[start + i]
    for j in range(n2):
        right_arr[j] = A[mid + 1 + j]

    left = right = 0
    k = start
    while k - start < n1 + n2:
        if right >= n2 or (left < n1 and left_arr[left] <= right_arr[right]):
            A[k] = left_arr[left]
            left += 1
        else:
            A[k] = right_arr[right]
            right += 1
        k += 1


def mergeSort(A, left, right):
    if left < right:
        mid = left + (right - left) // 2
        mergeSort(A, left, mid)
        mergeSort(A, mid + 1, right)
        merge(A, left, mid, right)


# main
n, k = map(int, input().split())
A = [int(x) for x in input().split()]
mergeSort(A, 0, n - 1)
minSum = maxSum = 0
for i in range(k):
    minSum += A[i]
    maxSum += A[n - i - 1]
print(maxSum - minSum)

# ----------------16 Maximum points a team of players can get
# 3 4  m,n => m challenges and n players
# 2 3 4    difficulty of each challenge
# 30 50 40    points for each challenge
# 1 2 3 4     n players potential

# 130

def max_points(difficulty, points, potential):
    challenges = []
    n = len(points)
    i = 0
    best_points = 0
    ans = 0

    for j in range(n):
        challenges.append((difficulty[j], points[j]))

    potential.sort()
    challenges.sort()

    for player_level in potential:
        while (i < n and player_level >= challenges[i][0]):
            points_got = challenges[i][1]
            best_points = max(points_got, best_points)
            i += 1
        ans += best_points
    return ans


# main
m, n = map(int, input().split())
difficulty = [int(val) for val in input().split()]
points = [int(val) for val in input().split()]
potential = [int(val) for val in input().split()]
print(max_points(difficulty, points, potential))

# ---------------- 17 Maximum sum  subarray with non negative numbers 
# 4
# 6 -2 3 4
# 7

import math 

def max_subarray(arr, n): 
    total = 0
    i = 0
    max_value = -1

    while (i < n): 
        while (i < n and arr[i] < 0): 
            i += 1
            continue

        while (i < n and 0 <= arr[i]): 
            total += arr[i] 
            i += 1
            max_value = max(max_value, total) 
    
        total = 0; 
    
    return max_value

n = int(input())
arr = [int(x) for x in input().split()]

print(max_subarray(arr, n))

# ----------------18 no of inversion in array, A[i] > A[j] and i<j 
# 5
# 8 10 7 9 11

# 3
# (8,7) (10,7) (10,9)

temp = [0] * 100001

def merge(A, left, mid, right):
    i = left
    j = mid
    k = left
    inversions = 0
    while i <= mid - 1 and j <= right:
        if A[i] <= A[j]:
            temp[k] = A[i]
            k += 1
            i += 1
        else:
            temp[k] = A[j]
            k += 1
            j += 1
            inversions += mid - i
    while i <= mid - 1:
        temp[k] = A[i]
        k += 1
        i += 1
    while j <= right:
        temp[k] = A[j]
        k += 1
        j += 1
    for i in range(left, right + 1, 1):
        A[i] = temp[i]

    return inversions

def mergeSort(A, left, right):
    leftInv, rightInv, mergeInv, total = 0, 0, 0, 0
    if right > left:
        mid = (left + right) // 2
        leftInv += mergeSort(A, left, mid)
        rightInv += mergeSort(A, mid + 1, right)
        mergeInv += merge(A, left, mid + 1, right)
        total = leftInv + rightInv + mergeInv
    return total

n = int(input())
A = [int(x) for x in input().split()]
ans = mergeSort(A, 0, n - 1)
print(ans)

# ----------------19 maximum j-i, satisying A[i] <= A[j] 
# 5
# 4 8 6 5 4

# 4 (max j-i occurs i=0 and j=4, as A[i]==A[j] at these indices)

def maximum_distance(arr):
    n = len(arr)
    max_right = [0 for _ in range(n)]
    max_right[n - 1] = arr[n - 1]
    for i in reversed(range(n-1)):
        max_right[i] = max(max_right[i + 1], arr[i])
    ans = 0
    i = 0
    j = 0
    while (i < n and j < n):
        if (arr[i] <= max_right[j]):
            ans = max(ans, j - i)
            j += 1
        else:
            i += 1
    return ans

# main
n = int(input())
arr = [int(val) for val in input().split()]
print(maximum_distance(arr))

# ----------------20 no of shifts in insertion sort of A for non decreasing order 
# 4
# 1 2 4 3
# 1

def insertionSort(arr):
    shifts_count=0
    for i in range(1, len(arr)): 
        key = arr[i] 
        j = i - 1
        while j >= 0 and key < arr[j]:
            shifts_count += 1
            arr[j + 1] = arr[j] 
            j -= 1
        arr[j + 1] = key
    return shifts_count

n = int(input())
arr = [int(x) for x in input().split()] 
print(insertionSort(arr))

# -----21 form a largest number from array of integers when combined form left to right ---
# 4
# 13 482 9 15
# 94821513

from functools import cmp_to_key

# Step 1: Define the Comparator
def comparator(a, b):
    ab = str(a) + str(b)
    ba = str(b) + str(a)
    return (int(ba) > int(ab)) - (int(ba) < int(ab))

# Step 2: Sort the Array
n = int(input())
A = [int(x) for x in input().split()][:n]
arr = sorted(A, key=cmp_to_key(comparator))

# Step 3: Form the Largest Number
number = ""
for i in arr:
    number += str(i)

# ----------------22 distribute m coin boxes to n children, diff bw max and min coins in boxes should be min
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

# ----------------23 no of Double reverse pair, if i<j and A[i] > 2*A[j]
# 4
# 24 7 9 12

# 2
def merge(A, start, mid, end):
    n1 = mid - start + 1
    n2 = end - mid
    L = [A[start + i] for i in range(n1)]
    R = [A[mid + 1 + j] for j in range(n2)]

    i, j = 0, 0
    for k in range(start, end + 1):
        if j >= n2 or (i < n1 and L[i] <= R[j]):
            A[k] = L[i]
            i += 1
        else:
            A[k] = R[j]
            j += 1


def mergesort_and_count(A, start, end):
    if start < end:
        mid = (start + end) // 2
        left_rv_count = mergesort_and_count(A, start, mid)
        right_rv_count = mergesort_and_count(A, mid + 1, end)
        count = left_rv_count + right_rv_count
        j = mid + 1
        for i in range(start, mid + 1):
            while j <= end and A[i] > A[j] * 2:
                j += 1
            count += j - (mid + 1)
        
        merge(A, start, mid, end)
        return count
    else:
        return 0


def reversePairs(nums):
    return mergesort_and_count(nums, 0, len(nums) - 1)


n = int(input())
nums = [int(each) for each in input().split()]
print(reversePairs(nums))

# ----------------24 median of 2 sorted array in logarthmic time ---
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

# ----------------25 Merge intervals -------------
# 3
# 1 2
# 2 3
# 5 8

# 1 3
# 5 8

def merge_intervals(intervals):
    size = len(intervals)
    if size <=1:
        return intervals 
    intervals = sorted(intervals) 
    output = [] 
    output.append(intervals[0]) 
    for i in range(1,size):
        if output [-1][1] >= intervals[i][0]:
            output[-1][1] = max(output[-1][1], intervals[i][1])
        else:
            output.append(intervals[i])
    return output
    

n = int(input())
intervals = [[int(each) for each in input().split()] for _ in range(n)]
output = merge_intervals(intervals) 
for each in output:
    print(*each)

# ----------------26 max no of chunks we can make to sort array 
# 6
# 0 5 4 3 1 2
# 2

# 4
# 0 2 1 3
# 3

def max_divisioins_to_sort(A):
    n = len(A) 
    if n==0:
        return 0 
    count = maximum = 0 
    for i, x in enumerate(A):
        maximum = max(maximum, x)
        if maximum == i:
            count+=1 
    return count

n= int(input())
A = [int(x) for x in input().split()][:n]
print(max_divisioins_to_sort(A))

# ----------------27 can a person could attend all meetings with diff intervals -
# 2 2
# 1 5 6 8
# 2 5 3 9

# YES NO 

def canAttendMeetings(intervals):
    intervals = sorted(intervals) 
    for i in range(1,len(intervals)):
        if intervals[i][0] < intervals[i-1][1]:
            return "NO"
    return "YES"

n,t = [int(each) for each in input().split()] 
for _ in range(t):
    nums = input().split() 
    nums = [int(each) for each in nums] 
    intervals = [[nums[i], nums[i+1]] for i  in range(0, 2*n, 2)] 
    
print(canAttendMeetings(intervals), end= " ")

# ----------------28 Diagonally sort a matrix
# 3 3
# 0 2 1
# 7 0 5
# 6 3 8

# 0 2 1 
# 3 0 5 
# 6 7 8 

def fillMatrix(matrix, m, n, r, c):

    temp = []
    for i in range(min(m - r, n - c)):
        temp.append(matrix[r + i][c + i])
    temp = sorted(temp)
    for i in range(min(m - r, n - c)):
        matrix[r + i][c + i] = temp[i]


def diagonalSort(matrix):

    m = len(matrix)
    n = len(matrix[0])
    for r in range(m - 1, -1, -1):
        c = 0
        fillMatrix(matrix, m, n, r, c)
    for c in range(1, n - 1):
        r = 0
        fillMatrix(matrix, m, n, r, c)
    return matrix


A = []
M, N = map(int, input().split())
for i in range(M):
    col = [int(x) for x in input().split()]
    A.append(col)
A = diagonalSort(A)

for r in A:
    for c in r:
        print(c, end=" ")
    print()

# ----------------29 count of no of smaller elements on right of each element
# 5
# 5 6 4 8 7
# 1 1 0 1 0

def merge(nums_with_index, count, low, mid, high):
    n1 = mid - low + 1
    n2 = high - mid
    leftList = [tup for tup in nums_with_index[low:mid+1]]
    rightList = [tup for tup in nums_with_index[mid+1:high+1]]
    left = 0
    right = 0
    cur = low
    smallerNumberinRight = 0
    while (cur - low < n1 + n2):
        if (left >= n1 or (right < n2 and leftList[left][0] > rightList[right][0])):
            smallerNumberinRight += 1
            nums_with_index[cur] = rightList[right]
            right += 1
            cur += 1
        else:
            count[leftList[left][1]] += smallerNumberinRight
            nums_with_index[cur] = leftList[left]
            left += 1
            cur += 1


def merge_sort(nums_with_index, count, low, high):
    if (low >= high):
        return
    mid = low + (high-low)//2
    merge_sort(nums_with_index, count, low, mid)
    merge_sort(nums_with_index, count, mid + 1, high)
    merge(nums_with_index, count, low, mid, high)
    return


def count_smaller_values(nums):
    count = [0 for _ in range(len(nums))]
    nums_with_index = []
    for i in range(len(nums)):
        nums_with_index.append((nums[i], i))
    merge_sort(nums_with_index, count, 0, len(nums) - 1)
    return count


n = int(input())
nums = [int(val) for val in input().split()]
count = count_smaller_values(nums)
for val in count:
    print(val, end=" ")

# ----------------30 max perimeter of valid triangle formed by 3 side length in array
# 4
# 5 6 4 7
# 10

def largetPerimeter(arr):
    arr.sort()
    n=len(arr) 
    for i in range(n-3, -1, -1):
        if arr[i] + arr[i+1] >arr[i+2]:
            return arr[i] + arr[i+1] +arr[i+2] 
    return 0

n= int(input()) 
arr = [int(val) for val in input().split()] 
print(largetPerimeter(arr))

# ----------------31 max no of chunks to sort array -2 
# 5
# 1 0 2 4 4
# 4

# 5
# 4 1 2 3 4
# 2

def maxChunksToSorted(arr):
    sum1, sum2, ans = 0, 0, 0
    sorted_arr = sorted(arr)
    for i in range(len(arr)):
        sum1 += sorted_arr[i]
        sum2 += arr[i]
        if sum1 == sum2:
            ans += 1
    return ans


n = int(input())
arr = [int(each) for each in input().split()]

print(maxChunksToSorted(arr))

# ----------------32 no of non overlapping intervals
# 4
# 1 2
# 1 4
# 4 6
# 6 8

# 3

def compare(x):
    return (x[0], -x[1])


def non_overlapping_intervals(intervals):
    # If two intervals share the same starting point,
    # then put the one with max ending point one to be the first.
    intervals.sort(key=compare)
    count = 0
    end = prev_end = 0
    for interval in intervals:
        end = interval[1]
        if prev_end < end:
            count += 1
            prev_end = end

    return count


# main function
n = int(input())
intervals = [[int(x) for x in input().split()] for _ in range(n)]
count = non_overlapping_intervals(intervals)
print(count)

# ----------------33 max toffes you can get when you got second priority but can select 3 boxes to choose bw 3 people
# 2
# 1 2 3 4 5 6

# 8

def maxToffees(arr):
    sorted_arr = sorted(arr)
    toffees = sorted_arr[len(arr) // 3::2]

    return sum(toffees)


n = int(input())
arr = [int(each) for each in input().split()]

print(maxToffees(arr))

# ----------------34 wiggle sorting
# 5
# -1 0 7 6 5

# -1 5 0 7 6 

def swap(nums, i, j):
    nums[i], nums[j] = nums[j], nums[i]


def wiggleSort(nums):
    n = len(nums)
    nums = sorted(nums)
    for i in range(1, n - 1, 2):
        swap(nums, i, i + 1)
    print(*nums)


# main
n = int(input())
nums = [int(x) for x in input().split()][:n]
wiggleSort(nums)

# ----------------35 kth smallest subarray sum
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

# ----------------36 len of longest subsequence of A whose sum is grater than or equal to corresponding indexes subsequence of B
# 3
# 50 50 5
# 10 10 500

# 2

def longest_subsequence_length(A, B):
    length = 0
    diffSum = 0
    remainingDiff = []
    for i in range(n):
        d = A[i] - B[i]
        if(d >= 0):
            length += 1
            diffSum += d
        else:
            remainingDiff.append(-d)

    remainingDiff.sort()

    for i in remainingDiff:
        if i > diffSum:
            break
        length += 1
        diffSum -= i

    return length


n = int(input())
A = [int(x) for x in input().split()]
B = [int(x) for x in input().split()]
print(longest_subsequence_length(A, B))

# ----------------37 best meeting point in a binary mtx, to minimize the 
# 3 3
# 1 0 0
# 0 1 0
# 0 0 1

# 4(total distance travelled by all people)

def min_total_distance(grid):
    row,col = [],[]
    m,n = len(grid), len(grid[0])
    
    for i in range(m):
        for j in range(n):
            if grid[i][j] ==1:
                row.append(i)
                col.append(j)
    
    col.sort()
    r_size = len(row) 
    c_size = len(col) 
    mid_row = row[r_size // 2] if r_size % 2 else (row[r_size//2 -1] + row[r_size//2])//2
    mid_col = col[c_size // 2] if c_size % 2 else (col[c_size//2 -1] + col[c_size//2])//2
    
    dist  = 0 
    for i in range(len(row)):
        dist+=abs(mid_row - row[i])
    for j in range(len(col)):
        dist+=abs(mid_col - col[j])

    return dist
        
m,n = [int(each) for each in input().split()] 
grid = [] 
for _ in range(m):
    grid.append([int(each) for each in input().split()])
    
print(min_total_distance(grid))

# ----------------38 Modulo sort 
# 10 3
# 1 2 3 4 5 6 7 8 9 10

# 9 3 6 7 1 4 10 5 2 8 

import math
from functools import cmp_to_key

global m

def modulus(i):
    val = math.fmod(i, m)
    return val

def compare(a, b):
    x = modulus(a)
    y = modulus(b)
    a_s = a & 1  # check if odd
    b_s = b & 1  # check if odd
    if x != y:
        return (x > y) - (x < y)  # default increasing order
    elif a_s == 1 and b_s == 0:
        return -1
    elif a_s == 0 and b_s == 1:
        return 1
    elif a_s == 0 and b_s == 0:  # both evens
        return (a > b) - (a < b)  # increasing order
    elif a_s == 1 and b_s == 1:  # both odds
        return (a < b) - (a > b)  # decreasing order

n, m = map(int, input().split())
A = [int(x) for x in input().split()][:n]
A = sorted(A, key=cmp_to_key(compare))
print(*A)

# ----------------39 Beautifu array 
# 3
# 3 1 2
# 1

def minSwaps(arr):
    arr_size = len(arr) 
    sorted_arr = sorted(arr) 
    ret = 0 
    
    for i in range(arr_size):
        if arr[i] != sorted_arr[i]:
            ret+=1 
            
            ind_to_swap = arr.index(sorted_arr[i])
            arr[i], arr[ind_to_swap] = sorted_arr[i], arr[i] 
    
    return ret 

n = int(input())
arr1 = [int(i) for i in input().split()]
arr2 = arr1[::-1] 

a = minSwaps(arr1) 
b = minSwaps(arr2) 
print(min(a,b))

# ----------------40 dictionary order
# 4
# mango banana grapes apple
# banana apple mango grapes 

def compare(x):
    return x[::-1]

def process(words):
    return sorted(words, key=compare)

n = int(input())
words = input().split()

print(*process(words))

# ----------------41 unique puzzles
# 3 4 5
# 1 2 3
# 4 5 6 7
# 8 9 10 11 12

# 3 5 8 9 10 11 12

def problemsSolved(A, puzzles):
    repeated = [0 for i in range(10001)]
    for i in range(3):
        for j in range(A[i]):
            repeated[puzzles[i][j]] += 1
        puzzles[i].sort()

    maximum = 0
    solve = [0 for i in range(3)]
    for i in range(3):
        temp = 0
        for j in range(A[i]):
            if repeated[puzzles[i][j]] == 1:
                temp += 1
        if temp > maximum:
            maximum = temp
        solve[i] = temp

    for i in range(3):
        if solve[i] == maximum:
            print(i + 1, solve[i], end="")
            for j in range(A[i]):
                if repeated[puzzles[i][j]] == 1:
                    print("", puzzles[i][j], end="")
            print()


# main function
A = [int(x) for x in input().split()]
inp1 = [int(x) for x in input().split()]
inp2 = [int(x) for x in input().split()]
inp3 = [int(x) for x in input().split()]
puzzles = [inp1, inp2, inp3]
problemsSolved(A, puzzles)

# ----------------42 sort Binary Array
# 4
# 1 0 0 1

# 0 0 1 1
#------ simple approach -----
def sort_binary_arry(arr):
    ones = zeros = 0 
    n = len(arr) 
    for i in range(n):
        if arr[i] ==0:
            zeros +=1 
        else:
            ones+=1 
    for i in range(zeros):
        A[i] = 0 
    for i in range(zeros, zeros+ones):
        A[i] = 1 
    print(*A)

N = int(input())
A = [int(val) for val in input().split()][:N]
sort_binary_arry(A) 

# --- 2pointer approach
 def sort_binary_arry(arr):
    left,right = 0, len(arr)-1 
    while left<right:
        while arr[left] == 0 and left<right:
            left+=1 
        while arr[right] ==1 and left<right:
            right-=1 
        
        if left<right:
            arr[left] = 0 
            arr[right] = 1 
            left+=1 
            right-=1 
    return arr 

N = int(input())
A = [int(val) for val in input().split()][:N]
A = sort_binary_arry(A)
print(*A) 

# ----------------43 car fleet
# 5 12
# 10 8 0 5 3
# 2 4 1 1 3

# 3

def carFleet(target, position, speed):
    n = len(speed) 
    vec = [[position[i], speed[i]] for i in range(n)]
    vec.sort() 
    
    count = 0 
    time = [0] * len(speed) 
    time = [(target- vec[i][0]) / vec[i][1] for i in range(n)]
    
    maxi = 0 
    
    for i in range(len(speed) -1, -1, -1):
        if i == len(speed) -1:
            maxi = time[i] 
            count +=1 
        elif time[i] > maxi:
            maxi = time[i] 
            count+=1 
            
    return count

n,t = [int(each) for each in input().split(' ')]
position = [int(each) for each in input().split(' ')]
speed = [int(each) for each in input().split(' ')]
print(carFleet(t, position, speed))

# ----------------44 matrix searching
# 3 3
# 1 2 3
# 4 5 6
# 7 8 9
# 2

# 0 1

def searchMatrix(matrix, target):
    m = len(matrix)
    if m < 1:
        return False
    n = len(matrix[0])
    if n < 1:
        return False
    i = 0
    while i < m and target >= matrix[i][0]:
        low, high = 0, n
        while low < high:
            mid = (low + high) // 2
            if target > matrix[i][mid]:
                low = mid + 1
            elif target < matrix[i][mid]:
                high = mid
            else:
                print(i, mid)
                return True
        i += 1
    return False

# main
A = []
M, N = map(int, input().split())
for i in range(M):
    col = [int(x) for x in input().split()][:N]
    A.append(col)
target = int(input())
if searchMatrix(A, target) == True:
    pass
elif searchMatrix(A, target) == False:
    print(-1)

# ----------------45 competetion preparation
# 3
# 1 3 4  

# 3

def getAssignmentCount(questions):
    questions.sort()
    day = 1 
    for each in questions:
        if each>= day:
            day+=1 
    return day-1 

n = int(input()) 
questions = [int(each) for each in input().split()] 
print(getAssignmentCount(questions))

# ----------------46 union intersection of arrays 
# 4 5
# 1 2 3 4
# 3 4 5 6 7

# 3 4 
# 1 2 3 4 5 6 7 

def printIntersection(A, B):
    i, j = 0, 0
    m, n = len(A), len(B)
    while i < m and j < n:
        if A[i] < B[j]:
            i += 1
        elif B[j] < A[i]:
            j += 1
        else:
            print(B[j], end=" ")
            j += 1
            i += 1


def printUnion(A, B):
    i, j = 0, 0
    m, n = len(A), len(B)
    while i < m and j < n:
        if A[i] < B[j]:
            print(A[i], end=" ")
            i += 1
        elif B[j] < A[i]:
            print(B[j], end=" ")
            j += 1
        else:
            print(B[j], end=" ")
            j += 1
            i += 1

    while i < m:
        print(A[i], end=" ")
        i += 1

    while j < n:
        print(B[j], end=" ")
        j += 1


m, n = map(int, input().split())
A = [int(x) for x in input().split()][:m]
B = [int(x) for x in input().split()][:n]
printIntersection(A, B)
print()
printUnion(A, B)

# ----------------47 player vs zombies 
# 3
# 3 1 2
# 3 1 2

# 8
from bisect import bisect_left, bisect_right

def getPower(l, r, zombies, P, Q):
    i = bisect_left(zombies, l)
    j = bisect_right(zombies, r)
    count = j - i
    if count == 0:
        energy_consumed = P
    else:
        energy_consumed = Q * count * (r - l + 1)
    if l == r or count == 0:
        return energy_consumed
    mid = (l + r) // 2
    minPower = min(energy_consumed, getPower(l, mid, zombies, P, Q) + getPower(mid + 1, r, zombies, P, Q))
    return minPower

n = int(input())
zombies = [int(each) for each in input().split()]
zombies.sort()
s, p, r = [int(each) for each in input().split()]
x = 1 << s
print(getPower(1, x, zombies, p, r))

# ----------------48  max no of non overlapping subarrays
# 4 1 2
# 9 99 1 12

# 120

def maxSum(arr, l, m):
    for i in range(1, len(arr)):
        arr[i] += arr[i - 1]
    
    res = arr[l + m - 1]
    l_max = arr[l - 1]
    m_max = arr[m - 1]

    for i in range(l + m, len(arr)):
        l_max = max(l_max, arr[i - m] - arr[i - l - m])
        res_1 = l_max + arr[i] - arr[i - m]
        m_max = max(m_max, arr[i - l] - arr[i - l - m])
        res_2 = m_max + arr[i] - arr[i - l]
        res = max(res, res_1, res_2)
    
    return res


n, l, m = [int(each) for each in input().split()]
arr = [int(each) for each in input().split()]

print(maxSum(arr, l, m))

# ----------------49 total no of packets 
# 5 10
# 1 5 10 1 9
# 3

def packets(weight, x):
    i, j = 0, len(weight) - 1
    weight.sort()
    count = 0
    while i <= j:
        if weight[i] + weight[j] > x:
            j -= 1
        else:
            i += 1
            j -= 1
        count += 1
    return count


N, X = map(int, input().split())
weight = [int(x) for x in input().split()][:N]

print(packets(weight, X))

# ----------------50 no of pairs 
# 7
# 1 2 1 1 2 2 1  

# 8

import sys
from bisect import bisect_left

def merge(ll, temp, indices):
    a, b, c, d = indices
    all_nums = ll[a:b] + ll[c:d]
    temp[0 : d - a] = sorted(all_nums)

def solve(l, r, Left, Right, temp):
    if r - l < 2:
        return 0
    mid = (l + r) // 2
    pair_count = solve(l, mid, Left, Right, temp) + solve(mid, r, Left, Right, temp)
    p1, p2 = l, mid
    while p1 != mid or p2 != r:
        val1 = Left[p1] if mid > p1 else sys.maxsize

# ----------------51 Remove subarray to maked sorted Array
# 8
# 1 3 5 10 4 2 6 9

# 3

def shortestSubarrayLength(A):
    n = len(A) 
    j = n-1 
    while j>0:
        if A[j-1] > A[j]:
            break 
        j -=1 
    
    if j == 0:
        return 0 
    
    res = j 
    for i in range(n):
        if i>0 and A[i-1] > A[i]:
            break 
        while j<n and A[i] > A[j]:
            j +=1 
        res = min(res,j-i-1) 
    return res 

n = int(input())
A = [int(each) for each in input().split()] 
print(shortestSubarrayLength(A))
