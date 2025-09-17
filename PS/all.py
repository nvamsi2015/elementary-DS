# ---------- p1 SubArrays with sum as perfect square (p7 in arrays) ------- 
# 3
# 1 3 6
# op:
# 0 0
# 0 1
# 1 2
# --------- using loops --------
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

#------ using prefix sum

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

#----------- p2 subarray with sum divisible by k  (p11 in arrays) ------------------
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

#------------------- p3 subMatrixsum (p17 in arrays) -------------- 
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

# ------- hash tables 17,  Total no of subarrays whose sum is k-----  


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


