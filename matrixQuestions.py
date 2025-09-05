#------------mtx1  Diagonal traversal of matrix (p13 in intro)
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

#------------ mtx2  spiral matrix (p15 in intro)
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

#------------mtx3  right rotate matrix (p17 in intro)

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


#----------mtx4 set Rows and columns to zero (p9 in arrays) -----------------
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

#------------ mtx5, prefix sum  subMatrixsum (PS) (p17 in arrays) -------------- 
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