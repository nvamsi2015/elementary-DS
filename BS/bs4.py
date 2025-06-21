# ----------- arrays p14 find only duplicate number in the array --------------- 

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