# ------- tp1 Find pairs whose sum is k in a sorted array ( arrays p2) --------------
# 5 10
# 2 3 5 6 8  
# op: 0 4

def indices_of_pairs(nums, k):
    p1 = 0
    p2 = len(nums)-1 
    while p1<p2:
        sum = nums[p1]+nums[p2] 
        if sum == k:
            return p1, p2
        if sum < k:
            p1+=1 
        else:
            p2-=1 
    return p1, p2 # to handle i/p:  5 6 8 11 14 15 16 18 20 where no pair is there. still we return p1, p2
            
    

n,k = map(int,input().split())
nums = [int(x) for x in input().split()]
indices_of_pairs(nums, k)
p1,p2 = indices_of_pairs(nums, k)
if(p1==p2):
    print('-1')
else:
    print(str(p1) + " " + str(p2))


# ----------- tp2  Find quadraplets in sorted array with sum k (p15 in arrays, if-else conditions) ----------------

# 6 1
# -2 -1 0 1 2 3

# 2

def count_four_sums(A, target):
    total = 0
    n = len(A)
    for i in range(n-3):
        if (i > 0 and A[i] == A[i - 1]):
            continue
        if (A[i] + A[i + 1] + A[i + 2] + A[i + 3] > target):
            break
        if (A[i] + A[n - 3] + A[n - 2] + A[n - 1] < target):
            continue
        for j in range(i+1, n-2):
            if (j > i + 1 and A[j] == A[j - 1]):
                continue
            if (A[i] + A[j] + A[j + 1] + A[j + 2] > target):
                break
            if (A[i] + A[j] + A[n - 2] + A[n - 1] < target):
                continue
            left, right = j + 1, n - 1
            while (left < right):
                sum = A[left] + A[right] + A[i] + A[j]
                if (sum < target):
                    left += 1
                elif (sum > target):
                    right -= 1
                else:
                    total += 1
                    left += 1
                    while (A[left] == A[left - 1] and left < right):
                        left += 1

                    right -= 1
                    while (A[right] == A[right + 1] and left < right):
                        right -= 1

    return total


# main function
n, target = map(int, input().split())
A = [int(val) for val in input().split()]
print(count_four_sums(A, target))


#------------- tp3 max rain water  (p6 in sorting) -----------------
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

# ----- 2p4  sum of 2 elements in array and 0 should have min absolute diff (13 sorting)--
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


# ----------------2p5  maximum j-i, satisying A[i] <= A[j] (19 sorting) ------
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

# ----------------2p6  sort Binary Array (42 sorting) ------
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


# ---------------- 2p7  union intersection of arrays (46 sorting) ------
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


# ----------------2p8 Remove subarray to maked sorted Array (51 sorting) ------
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





