#-------------- p1 Max continuous ones in a binary array (counter) -------------- 
# 5
# 1 1 0 1 1
# op: 2

def max_consq_ones(nums):
    count= max_count = 0 
    for num in nums:
        if num==1:
            count+=1 
        else:
            max_count = max(count, max_count)
            count = 0 
    return max(count, max_count) # to hanle [1, 1] input which never goes to else condition

n = input()
nums = [int(x) for x in input().split()]
print(max_consq_ones(nums))

# ------------ using  two pointer ----------------
def max_consq_ones(nums):
    p1,p2= 0,0
    max_count = 0
    while p1< len(nums) and nums[p1] == 0:
        p1+=1 
    
    if(p1<len(nums)):
        p2 = p1+1
    else:
        p2 = p1      #reached end of nums 
        
    while p2 < len(nums):
        if nums[p2] == 0:
            if p2-p1 > max_count:
                max_count = p2-p1
            p1 = p2+1
            p2 = p2+1    
        else:
            p2=p2+1
    if p2-p1 > 0 and p2-p1 > max_count:    # this block to satisfy array [11] test case   
        max_count = p2-p1    
        
            
    return max_count
    
n = input()
nums = [int(x) for x in input().split()]
print(max_consq_ones(nums))

# ------- p2 Find pairs whose sum is k in a sorted array (TP) --------------
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

# ----------------p3 Min length subArray with sum atleast k (sw) ------------
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


#------------ p4 K closest elements to x  in sorted array ( BS ) --------
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

# ------- p5 Max continous ones with k flips allowed in a binary array (SW) --------------
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

#  -------------------- p6 find number that is repeated by more than n/3 times (loops, tracking 2 numbers and their sums) -----
# 6
# 0 1 2 3 1 1
# op: 1

def repeatedNumber(A,n):
    f=s=c1=c2=0 
    for i in range(n):
        if f == A[i]:
            c1+=1 
        elif s== A[i]:
            c2+=1 
        elif c1 == 0:
            c1+=1
            f= A[i] 
        elif c2 ==0:
            c2+=1
            s = A[i] 
        else:
            c1-=1 
            c2-=1 
    
    c1=c2=0 
    
    for i in range(n):
        if A[i] == f:
            c1+=1 
        elif A[i] == s:
            c2+=1 
    if c1 > n//3 : 
        return f 
    if c2> n//3 : 
        return s 
    return "NONE"
        


n = int(input())
A = [int(x) for x in input().split()]

print(repeatedNumber(A,n))

# ---------- p7 SubArrays with sum as perfect square (loops, best is PSum) ------- 
# 3
# 1 3 6
# op:
# 0 0
# 0 1
# 1 2

import math
def subArrayWithSumAsPSQ(A,n):
    for i in range(n):
        c_sum = 0 
        for j in range(i,n):
            c_sum+=A[j]
            sq_root = int(math.sqrt(c_sum))
            if sq_root * sq_root == c_sum:
                print(i,j, sep=" ")
    return
            
    
n= int(input())
A = [int(x) for x in input().split()]
subArrayWithSumAsPSQ(A,n)

# --------- p8 Maximum subarray sum in circular array 
# 6
# 1 2 3 -3 -4 5

# 11

def max_subarray_sum_circular(A):

    total, cur_max, cur_min = 0, 0, 0
    max_sum, min_sum = A[0], A[0]
    for a in A:
        cur_max = max(cur_max + a, a)
        max_sum = max(max_sum, cur_max)
        cur_min = min(cur_min + a, a)
        min_sum = min(min_sum, cur_min)
        total += a
    if max_sum > 0:
        result = max(max_sum, total - min_sum)
    else:
        result = max_sum

    return result


# main
N = int(input())
A = [int(val) for val in input().split()][:N]
print(max_subarray_sum_circular(A))


#----------p9 set Rows and columns to zero 
# 3 4
# 1 1 1 1
# 1 1 0 1
# 1 1 1 1

# 1 1 0 1 
# 0 0 0 0 
# 1 1 0 1 

def set_zeroes(matrix, m, n):
    delete_first_row = False
    delete_first_col = False

    for i in range(m):
        if matrix[i][0] == 0:
            delete_first_row = True
            break
    for i in range(n):
        if matrix[0][i] == 0:
            delete_first_col = True
            break

    for i in range(m):
        for j in range(n):
            if matrix[i][j] == 0:
                matrix[i][0] = 0
                matrix[0][j] = 0

    for i in range(1, m):
        for j in range(1, n):
            if matrix[i][0] == 0 or matrix[0][j] == 0:
                matrix[i][j] = 0

    for i in range(m):
        if delete_first_row:
            matrix[i][0] = 0
    for i in range(n):
        if delete_first_col:
            matrix[0][i] = 0

    for i in range(m):
        for j in range(n):
            if j < n - 1:
                print(matrix[i][j], end=" ")
            else:
                print(matrix[i][j], end="")
        if i < m - 1:
            print()
    return


m, n = input().split()
m = int(m)
n = int(n)
matrix = []
for i in range(m):
    col = [int(x) for x in input().split()]
    matrix.append(col)

set_zeroes(matrix, m, n)

#----------- p10  Find triplets with sum k in a sorted array ------ 
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

#----------- p11 subarray with sum divisible by k  (PS) ------------------
# 3 2
# 3 3 4
# op: 3
# {3,3},{3,3,4}, {4}

def count_subArrays_with_sum_divisibleby_K(A,k):
    counter = [0 for i in range(k)]
    s  = 0
    for i in range(len(A)):
        s += A[i] 
        counter[s%k]+=1 
    
    ans = 0 
    for x in counter:
        ans+= x* (x-1) // 2 
    ans += counter[0] 
    return ans
    
n,k = map(int, input().split())
A = [int(x) for x in input().split()]
print(count_subArrays_with_sum_divisibleby_K(A,k))

#------ p12 Minimum swaps required to group all ones (SW) ----------- 
# 8
# 1 1 0 1 1 0 1 0
# op: 1

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

#-------p13 maximize happy customers (SW) -------------

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


# ----------- p14 find only duplicate number in the array (BS) --------------- 

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

# ----------- p15 Find quadraplets in sorted array with sum k (if-else conditions) ----------------

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

#--------- p16 SubArray with product less than k (SW) -------------------
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

#------------ p17 subMatrixsum (PS) -------------- 
# 4 4 1
# 1 2 3 4
# 5 6 7 8
# 9 1 2 3
# 4 5 6 7

# op: 
# 14 24 30 22 
# 24 36 36 27 
# 30 45 45 33 
# 19 27 24 18 


def subMatrixSum(matrix,m,n,k):
    
    for i in range(1,m):
        for j in range(n):
            matrix[i][j] += matrix[i-1][j] 

    for j in range(1,n):
        for i in range(m):
            matrix[i][j] +=matrix[i][j-1]  
    
    ans = [[0 for _ in range(n)] for _ in range(m)]
    
    for i in range(m):
        for j in range(n):
            x = min(i+k, m-1) 
            y = min(j+k, n-1)
            ans[i][j]  = matrix[x][y] 
            
            rowBound = i-k-1 
            colBound = j-k-1 
            is_rowBound_valid = False
            is_columnBound_valid = False 
            
            if(rowBound >= 0) :
                ans[i][j] -= matrix[rowBound][y]
                is_rowBound_valid = True 
            if(colBound >= 0): 
                ans[i][j] -= matrix[x][colBound] 
                is_columnBound_valid = True 
            if(is_rowBound_valid and is_columnBound_valid): 
                ans[i][j] += matrix[rowBound][colBound] 
    
    for row in ans:
        for val in row:
            print(val,end=' ')
        print()
    

m,n,k = map(int,input().split())
matrix = [] 
for i in range(m):
    row = [int(x) for x in input().split()]
    matrix.append(row) 

subMatrixSum(matrix,m,n,k)