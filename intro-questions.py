#----- p1 lower case to uppercease and vice versa --------------
# HelloWORLD
# hELLOworld

string = input()
result = ""
for i in range(len(string)):
    if(string[i].islower()):
        result += string[i].upper()
    else:
        result += string[i].lower()
print(result)

# ------ p2 indices of peak element, elements that are grater than their adjacent elements -----------------
# 7
# 1 2 -1 3 1 10 1
# op: 1 3 5 

# 04-01-2025 
def findPeakElements(nums, n):
    flag = 0
    for i in range(n):
        if i==0 or i==n-1:
            if i==0 and  nums[i]>nums[i+1]:
                flag= 1
                print(i, end = " ")
            
            if i== n-1 and nums[i] > nums[i-1]:
                flag = 1
                print(i, end=" ")
        else:
            if(nums[i]> nums[i+1] and nums[i]>nums[i-1]):
                flag=1
                print(i, end=' ')
    if flag ==0:
        print(-1)
               

n= int(input())
nums = [int(x) for x in input().split()]
findPeakElements(nums, n)

# notes: looping through array comparing neighbouring values and printing if condition satisfied
# usp: handling edge cases like i = 0 and i==n-1 and handling if no peaks found with flag

# ----p3 fibonochi number -----------

# 04-01-2025
def fib(n):
    if n==0 or n==1:
        return n 
    else:
        return fib(n-1)+fib(n-2)

def main ():
    n = int(input())
    print(fib(n))

main()

# if __name__ == "__main__":
#     n= int(input())
#     print(fib(n))
# main()


# ---------- p4 find index of  element k in 1 d array sorted array (Binary search) -------------
# 04-01-2025

# 4 
# 4 8 9 10 
# op: 9

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

# --------- p5  p4 find smallest and largest element in a rotated array of a sorted array ---------learn why l<=h,  mid<n-1, nums[l] <= nums[mid] => l = mid+1  and return 0  are needed needed------------
#  in a rotated array largest and smallest array will be neighbours or largest will be at one end and smallest at one end
#  pivot index is index which has smallest value 

# i/p
# 6
# 5 6 1 2 3 4

# o/p 
# 1 6


def get_pivot_index(nums, n): # logic for pivote is to find the largest number in the arr and its next num will be sallest number in the arr which is pivot index.
    l= 0 
    h = n-1 
    while l<=h:                                 # l=h conditon should be considered not just l<h
        mid = (l+h)//2                              #  nums[mid] > nums[mid+1] is the condition to find largest element in the right rotated array
        if mid< n-1 and  nums[mid] > nums[mid+1]:   # without mid < n-1 you will get index error as arr[mid+1] is out of index when mid = n-1
            return mid+1 
        elif nums[l] <=  nums[mid]:         # nums < nums[mid] will give time limit exceeded error 
            l = mid+1 
        else:
            h = mid-1 
    return 0                                # low>high => searched whole array entire array and did not find the pivot index. so pivot index is 0.
nums = [int(x) for x in input().split()]
pivot_index = get_pivot_index(nums,n) 
if(pivot_index == 0): 
    print(nums[pivot_index], nums[n-1])
else:
    print(nums[pivot_index], nums[pivot_index-1])


#  nums[mid] > nums[mid+1] is the condition for the mid to be largest and mid+1 to be smallest   

# ----------- p6 pattern printing triangle -----------
# 4

#    *
#   ***
#  *****
# *******


def triangle(N):
    for i in range(1, N + 1):
        for spaces in range(N - i):
            print(" ", end="")
        for k in range(2 * i - 1):
            print("*", end="")
        print()
    return

N = int(input())
triangle(N)


# ----------- p7 Peak of a mountain  -----------
# input:
# 6 
# 1 2 3 5 3 2
# output: 5



rotated array will only have one index where arr[i] > arr[i+1]
but mountain will have arr[i] > arr [i+1] for all the indexes after the peak index, if mid<n-1 and arr[mid]> arr[mid+1]: will be true 

approch to solve:

left of peak pattern: arr[i] < arr[i+1] => left should move to mid+1  to ignore l to mid range 
right of peak pattern: arr[i] > arr[i+1] => high should be move mid  to ignore mid to high range

perform binary search till you have l = h = mid, the value with that index will not follow both the above conditions as it is not in left side or right side pattern



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
    return l  # or h => not h, bc while loop stops at l==h or l>h => exhaust all the possible indexes for h and break the while loop and ans will be l

n= int(input())
nums = [int(x) for x in input().split()]
print(peakIndex(nums, n))

#-------p8 Minimum time to wait -------
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


# ------------ p9 Right rotate array -------------
# input1: 
# 5
# 1 2 3 4 5
# 3

# 3 4 5 1 2 #o/p

# input2: 
# 7
# 1 4 5 2 6 3 7
# 4
# 2 6 3 7 1 4 5  #o/p

def right_rotate_array (arr, n, k):
    k = k%n 
    count = 0 
    si = 0 
    ci = si 
    pv = arr[si] 
    while count < n:
        ni = (ci+k)%n 
        temp = arr[ni] 
        
        arr[ni] = pv 
        pv = temp 
        
        ci  = ni 
        count +=1
        if si == ci:
            break 

    for num in arr:
        print(num , end= " ") 
    return 
    

n = int(input())
nums = [int(x) for x in input().split()]
k = int(input())

right_rotate_array(nums, n, k)

            


----------- failed for this input -------------
10
92 69 22 99 43 72 3 56 29 65
6

reason: for the given input when count =5, ci =0  si = 0 and si == ci staisfied to break while loop 

92* 69	22	99	43	72	3* 	56	29	65
92	69	22*	99	43	72	92*	56	29	65
92	69	3*	99	43	72	92	56	29*	65
92	69	3	99	43*	72	92	56	22*	65
92*	69	3	99	29*	72	92	56	22	65
43*	69	3	99	29	72	92*	56	22	65

we have to break the loop as we dont want the above above steps repeated with differnt numbers in the same positions

so we increment the start index si from 0 to 1 and start the while loop again => 
we can run the while loop till count < n, but when si = ci => we increment si => run another while loop without any conditons

ci = si 
pv = arr[si] 
move the above two steps into first while loop to get updated with the new si value:

------- modified code ----------
def right_rotate_array (arr, n, k):
    k = k%n 
    count = 0 
    si = 0 
   
    while count < n:
        ci = si 
        pv = arr[si] 
        while True:
            ni = (ci+k)%n 
            temp = arr[ni] 
            
            arr[ni] = pv 
            pv = temp 
            
            ci  = ni 
            count +=1
            if si == ci:
                break 
        si +=1

    for num in arr:
        print(num , end= " ") 
    return 
    

n = int(input())
nums = [int(x) for x in input().split()]
k = int(input())

right_rotate_array(nums, n, k)

# ------------- removing temp and refactoring ---------------- 

def right_rotate_array (arr, n, k):
    k = k%n 
    count = 0 
    si = 0 
   
    while count < n:
        ci, pv = si, arr[si]
        while True:
            ni = (ci+k)%n 
            arr[ni], pv = pv, arr[ni]

            ci  = ni 
            count +=1
            if si == ci:
                break 
        si +=1

    for num in arr:
        print(num , end= " ") 
    return 
    

n = int(input())
nums = [int(x) for x in input().split()]
k = int(input())

right_rotate_array(nums, n, k)

# ------------- p10 valid perfect square 
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


#------------ p11 helping a friend read book
# 5
# 2 5 7 8 6
# 8

# 5

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

#------------ p12 total sum of quotients
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
            high = mid - 1
    return ans

def main():
    n, threshold = map(int, input().split())
    arr = list(map(int, input().split()))
    print(smallestDivisor(arr, n, threshold))
main()

#------------ p13 Diagonal traversal of matrix
# 3 3
# 1 2 3 
# 4 5 6 
# 7 8 9 

# 1 2 4 7 5 3 6 8 9 
def print_diagonal_order(matrix):
    if not matrix or not matrix[0]:
        return []

    M, N = len(matrix), len(matrix[0])

    row, column = 0, 0
    direction = 1
    while row < M and column < N:
        print(matrix[row][column], end=" ")

        new_row = row + (-1 if direction == 1 else 1)
        new_column = column + (1 if direction == 1 else -1)

        if new_row < 0 or new_row == M or new_column < 0 or new_column == N:
            if direction:
                row += column == N - 1
                column += column < N - 1
            else:
                column += row == M - 1
                row += row < M - 1
            direction = 1 - direction
        else:
            row = new_row
            column = new_column
    return


def main():
    M, N = map(int, input().split())
    matrix = []
    for _ in range(M):
        row = [int(val) for val in input().split()]
        matrix.append(row)
    print_diagonal_order(matrix)
    return


main()

#------------ p14 search range of k
# 5
# 1 2 2 2 3
# 2

# 1 3

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
        mid = (start + end) // 2 + 1
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

#------------ p15 spiral matrix 
# 3 3
# 1 2 3 
# 4 5 6 
# 7 8 9 

# 1 2 3 6 9 8 7 4 5 

def print_spiral_order(matrix):
    m = len(matrix)
    n = len(matrix[0])

    visited = [[False] * n for i in range(m)]

    count = 0

    i = 0
    j = -1

    while count < (m * n):

        j += 1
        while j < n and not (visited[i][j]):
            print(matrix[i][j], end=" ")
            count += 1
            visited[i][j] = True
            j += 1
        j -= 1

        i += 1
        while i < m and not (visited[i][j]):
            print(matrix[i][j], end=" ")
            count += 1
            visited[i][j] = True
            i += 1
        i -= 1

        j -= 1
        while j >= 0 and not (visited[i][j]):
            print(matrix[i][j], end=" ")
            count += 1
            visited[i][j] = True
            j -= 1
        j += 1

        i -= 1
        while i >= 0 and not (visited[i][j]):
            print(matrix[i][j], end=" ")
            count += 1
            visited[i][j] = True
            i -= 1
        i += 1

    return


def main():
    m, n = map(int, input().split())
    matrix = []
    for _ in range(m):
        row = [int(val) for val in input().split()]
        matrix.append(row)
    print_spiral_order(matrix)


main()

#------------ p16 Arranging dustbins
# 5
# 1 3 5 7 10
# 3

# 4

def max_distance(position, m):
    n = len(position)

    def is_possible(d):
        ans, curr = 1, position[0]
        for i in range(1, n):
            if position[i] - curr >= d:
                ans += 1
                curr = position[i]
        return ans >= m

    low, high = 0, position[-1] - position[0]
    while low < high:
        mid = high - (high - low) // 2
        if is_possible(mid):
            low = mid
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
#------------ p17 right rotate matrix 

# 3
# 1 2 3
# 4 5 6
# 7 8 9

# 7 4 1 
# 8 5 2 
# 9 6 3 

def rotate_and_print(matrix):
    matrix = matrix[::-1]
    for i in range(len(matrix)):
        for j in range(i + 1, len(matrix[0])):
            matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]

    for i in range(len(matrix)):
        for j in range(len(matrix[0])):
            print(matrix[i][j], end=" ")
        print()
    return


def main():
    n = int(input())
    matrix = []
    for _ in range(n):
        row = [int(val) for val in input().split()]
        matrix.append(row)

    rotate_and_print(matrix)
    return


main()