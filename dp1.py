# ----------------- 1. coinchange    --------------
# N rupees, M diff valued coins, no of unique coin combinations that sum upto N
# 3 4
# 1 2 3
# 4

# 7 10
# 10 4 7 2 12 19 3
# 7

def coinChange(diff_coins,n):
    m = len(diff_coins)
    table = [[0 for x in range(m)] for x in range(n+1)]
    for i in range(n+1):
        for j in range(m):
            if i ==0:
                table[0][j] =1 
            else:
                x = table[i- diff_coins[j]][j] if ( i-diff_coins[j] >= 0) else 0 
                y = table[i][j-1] if (j>=1) else 0 
                table[i][j] = x+y
    
    return table[n][m-1] 


m,n = map(int,input().split())
arr = [int(x) for x in input().split()][:m]
print(coinChange(arr,n))

# ----------------- 2. Nth catalan Number   --------------
# formed by counting no of expressions containing N pairs or matching parentheses  
# 2 -2
# 3-5

def get_catalan_number(n):
    if n==0 or n==1:
        return 1 
    
    catalan = [0 for i in range(n+1)]
    catalan[0] = catalan[1] = 1 
    for i in range(2, n+1):
        catalan[i] = 0 
        for j in range(i):
            catalan[i] = catalan[i] + catalan[j] *catalan[i-j-1] 
    
    return catalan[n] 

n = int(input())
print(get_catalan_number(n))

# -----------------3. check subset sum N   --------------
# given set of M non negative integers, and an integer N, check if subset sum of elements equal to N

# 1
# 6 9
# 34 3 2 12 5 4
# True

def isSubsetSum(nums,m,n):
    subset = [[False for i in range(n+1)] for i in range(m+1)]
    
    for i in range(m+1):
        subset[i][0] = True 
    for i in range(1, n+1):
        subset[0][i] = False 
    
    for i in range(1, m+1):
        for j in range(1, n+1):
            if j < nums[i-1]:
                subset[i][j] = subset[i-1][j] 
            if j>= nums[i-1]:
                subset[i][j] = subset[i-1][j] or subset[i-1][j-nums[i-1]]
    return subset[m][n] 

t = int(input())
while t:
    m,n = [int(x) for x in input().split()]
    nums = [int(x) for x in input().split()][:m]
    print(isSubsetSum(nums, m, n))
    t-=1 


# ----------------- 4. Tiling Problem, no of unique ways    --------------
# fill 2*N board with 2*1 tiles, find no of unique ways
# 3-3
# 4-5

def count(n):
    tiles = []
    for i in range(3):
        tiles.append(i) 
    if n==1 or n==2:
        return tiles[n]
    
    for i in range(3,n+1):
        tiles.append(tiles[i-2] + tiles[i-1])
    
    return tiles[n] 

n = int(input())
print(count(n))

# --------- 5. Max profit from rod cutting  --------------
# 4
# 1 2 3 4
# 4

# 2
# 3 4
# 6


# import sys 
# int_min = -sys.maxsize

int_min = -1000000

def cutRod(prices):
    n = len(prices)
    val = [0 for x in range(n+1)]
    val[0] = 0 
    
    for i in range(1,n+1):
        max_val = int_min
        
        for j in range(0,i):
            max_val = max(max_val, prices[j] + val[i-j-1] )
        val[i] = max_val 
    
    return val[n] 

size = int(input())
arr = [int(x) for x in input().split()][:size]
print(cutRod(arr))

# -------- 6. Min cost to paint fence -----------
# fence with N columns, colors Red, Blue, Black, no two adjacent columns share the same colour
# 3
# 2 1 3
# 4 8 3
# 1 3 2
# 5

def get_min_cost(mat,n):
    for i in range(n-2, -1, -1):
        mat[i][0] += min(mat[i+1][1], mat[i+1][2])
        mat[i][1] += min(mat[i+1][0], mat[i+1][2]) 
        mat[i][2] += min(mat[i+1][0], mat[i+1][1]) 
        
    return min(mat[0][0], mat[0][1], mat[0][2])
    

n = int(input())
mat = [] 
for x in range(n):
    mat.append([int(y) for y in input().split()])

print(get_min_cost(mat,n))

# --------- 7. Longest common subsequence of 3 strings    -----
# demostration implementation explanation
# 6

# impulsive important improvement
# 3

a,b,c = input().split()
m = len(a) 
n = len(b)
o = len(c)

dp = [[[-1 for i in range(100)] for j in range(100)] for k in range(100)]

def longestCommonSubsequence(i,j,k):
    if i==-1 or j==-1 or k==-1:
        return 0 
    
    if dp[i][j][k] != -1:
        return dp[i][j][k] 
    
    if a[i] == b[j] and b[j] == c[k]:
        dp[i][j][k] = 1+longestCommonSubsequence(i-1, j-1, k-1) 
        return dp[i][j][k]
    else:
        dp[i][j][k] = max(
            max(
                longestCommonSubsequence(i-1,j, k), 
                longestCommonSubsequence(i,j-1,k)
            ),
            longestCommonSubsequence(i,j,k-1)
        )
        
        return dp[i][j][k] 
        

print( longestCommonSubsequence (m-1, n-1, o-1))

# ----------------- 8. Maximum Loot in a Mtx    --------------
# initally in first column, you can move right or diagnolly right, find max sum
# 3 3
# 1 3 3
# 2 1 4
# 0 6 4
# 12

def getMaxLoot(loot, m,n):
    table = [[0 for i in range(n)] for j in range(m)]
    
    for col in range(n-1, -1, -1):
        for row in range(m):
            if col==n-1:
                right = 0 
            else:
                right = table[row][col+1] 
            
            if row==0 or col==n-1:
                right_up = 0 
            else:
                right_up = table[row-1][col+1] 
            
            if row==m-1 or col==n-1:
                right_down = 0 
            else:
                right_down = table[row+1][col+1] 
            
            table[row][col] = loot[row][col] + max(right, right_up, right_down) 
    
    res = table[0][0]
    for i in range(1,m):
        res = max(res, table[i][0]) 
    return res 
    
loot = []
m,n = [int(x) for x in input().split()]
for x in range(m):
    loot.append([int(y) for y in input().split()])
print(getMaxLoot(loot,m,n)) 

# ------ 9. total no of ways to decode a secrete code   --------
# mapping A=1,... Z=26, a letter with two digtis in this coding can be decoded in two diff ways, find no of unique ways to decode these types of secrete codes 

# 2
# 15114
# 3333333333

# 6
# 1

t = int(input())
dp = [0 for i in range(100)]
while t:
    digits = input()
    l = len(digits) 
    dp[0] = dp[1] = 1 
    for i in range(2,l+1):
        dp[i] = 0 
        digit_1 = int(digits[i-2])
        digit_2 = int(digits[i-1])
        
        if digit_1 ==1 or (digit_1 == 2 and digit_2 <= 6):
            dp[i]+=dp[i-2]
        if digit_2 !=0:
            dp[i] += dp[i-1] 
    print(dp[l])
    t-=1

# ---- 10 len of  Largest palindrome  subsequence   --------
# abcda -3
# abbcdc -3

def longestPalindromeSubseq(s):
    n = len(s) 
    dp = [[0 for _ in range(n)] for _ in range(n)]
    
    for i in range(n-1, -1, -1):
        dp[i][i] = 1 
        for j in range(i+1, n):
            if s[i] ==s[j]:
                dp[i][j] = dp[i+1][j-1] + 2
            else:
                dp[i][j] = max(dp[i+1][j], dp[i][j-1])
    return dp[0][n-1] 
        

s = input()
print(longestPalindromeSubseq(s)) 

# -----------------    --------------

# -----------------    --------------

# -----------------    --------------

# -----------------    --------------

# -----------------    --------------

# -----------------    --------------

# -----------------    --------------

# -----------------    --------------

# -----------------    --------------

# -----------------    --------------

# -----------------    --------------

# -----------------    --------------

# -----------------    --------------

# -----------------    --------------

# -----------------    --------------

# -----------------    --------------

# -----------------    --------------

# -----------------    --------------

# -----------------    --------------