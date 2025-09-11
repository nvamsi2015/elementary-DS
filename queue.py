#----------- 14 Generate Binary Numbers -----------
5
1
10
11
100
101

from collections import deque 

def generateBinary(n):
    queue = deque() 
    queue.append("1")
    while n>0:
        n -= 1 
        s1 = queue.popleft() 
        print(s1) 
        queue.append(s1 + "0") 
        queue.append(s1+ "1") 
        
n  = int(input()) 
generateBinary(n) 