#--------- 1  -------------------
# 5 2
# 1 5 8 11 17
# 3

# 5 3
# 5 7 9 10 12
# 1

import sys 
from collections import deque 

INT_MAX = sys.maxsize 

def get_diff(A,n,k):
    i = 0 
    min_of_diffs = INT_MAX 
    dq = deque() 
    
    while i<k:
        while len(dq) >0 and A[i] >= A[dq[len(dq) - 1]]:
            dq.pop() 
        dq.append(i) 
        i+=1 
    
    while 1:
        min_of_diffs = min(min_of_diffs, A[dq[0]])
        if i == n:
            break 
        while len(dq) >0 and dq[0] <= i-k:
            dq.popleft() 
        while len(dq) >0 and A[i] >=  A[dq[len(dq) - 1]]:
            dq.pop() 
        dq.append(i) 
        i+=1 
    return min_of_diffs


def minimumAdjacentDifference(A,n,k):
    diff_A = [ 0 for i in range(n-1)]
    for i in range(0,n-1):
        diff_A[i] = A[i+1] - A[i] 
    return get_diff(diff_A, n-1, n-k-1) 


n,k = map(int,  input().split())
A = [int(x) for x in input().split()] 
print(minimumAdjacentDifference(A,n,k)) 


#--------- 2 Rectify string -------------------
# 1
# happi<y
# happy

# 1
# seee<<a 
# sea


from collections import deque
def rectify_string(word):
    dq = deque() 
    for char in word:
        if char !="<":
            dq.append(char) 
        elif len(dq) >0:
            dq.pop() 
    
    result = "".join(dq) 
    
    return result

t= int(input())
while t>0:
    word = input() 
    
    correct_word = rectify_string(word) 
    correct_word = correct_word if correct_word else -1 
    print(correct_word) 
    t-=1 
#--------- 3 Palindrome check  -------------------
# 2
# madam
# palindrome
# Yes
# No

# 2
# abbaababbb
# baabaaaabb
# No
# No

from collections import deque 

def check_palindrom(s):
    dq = deque(s) 
    while len(dq) >1:
        front = dq[0] 
        last = dq[len(dq) -1] 
        if front != last:
            return "No"
        dq.pop()
        dq.popleft() 
    return "Yes"

t = int(input())
while t>0:
    s = input() 
    print(check_palindrom(s))
    t-=1

#--------- 4 change previous letter to @  to upper case  -------------------
# 1
# happi@y
# happIy

# 1
# seee@@a
# seEEa

from collections import deque 

def get_string(word):
    dq = deque() 
    
    i = 0 
    while i<len(s):
        if word[i] != '@':
            dq.append(word[i]) 
            i+=1 
        else:
            frequency = 0 
            while i<len(word) and word[i] == '@':
                frequency+=1 
                i+=1 
            
            temp = ""
            while len(dq) >0 and frequency>0:
                ch = dq[len(dq) -1] 
                dq.pop() 
                temp+= ch.upper() 
                frequency -= 1 
            
            for j in range(len(temp)-1, -1, -1):
                dq.append(temp[j]) 
    
    result = "".join(dq) 
    return result 

t = int(input())
while t>0:
    s = input() 
    print(get_string(s)) 
    t-=1 

#--------- 5 Decode string  -------------------
# 1
# p<ap>le
# apple 

# 1
# w>li<bo>ng
# bowling 

import collections 

def get_string(word):
    dq = collections.deque() 
    i, direction = 0, 0 
    
    while i<len(word):
        if direction == 0:
            while i<len(word) and word[i] != "<":
                if word[i] != ">":
                    dq.append(word[i]) 
                i+=1 
            direction = 1 
        elif direction ==1:
            temp = ""
            while i<len(word) and word[i] != ">":
                if word[i] != "<":
                    temp +=word[i] 
                elif word[i] == '<':
                    for j in range(len(temp) -1,-1,-1):
                        dq.append(temp[j])
                    temp = ""
                i+=1
            for j in range(len(temp)-1, -1, -1):
                dq.appendleft(temp[j])
            direction = 0 
        i+=1 
        
    result = "".join(dq) 
    return result

t= int(input())
while t>0:
    s = input() 
    final_string = get_string(s) 
    print(final_string) if final_string else print(-1)
    t-=1 
#--------- 6 Multiple queries  -------------------
# 2 1
# 4 5
# 2

# 5 4

# 4 3
# 5 6 7 8
# 1 2 4

# 6 7
# 7 8
# 8 6

from collections import deque

def operator(arr,n,k):
    result = [] 
    dq = deque() 
    
    for i in range(len(arr)):
        dq.append(arr[i]) 
    first,second = 0, 0 
    
    for i in range(max_k):
        first = dq[0] 
        dq.popleft() 
        second = dq[0] 
        dq.popleft() 
        if first >second:
            dq.appendleft(first) 
            dq.append(second)
        else:
            dq.appendleft(second)
            dq.append(first)
        result.append([dq[0], dq[1]])
        
    return result
        

n,q = [int(x) for x in input().split()]
arr = [int(x) for x in input().split()] 
queries = [int(x) for x in input().split()] 
max_k = max(queries) 

result = operator(arr,n,max_k) 

for x in queries:
    print(*result[x-1]) 
    
#--------- 7 Queries on Deque  -------------------
# 5
# 1 2 3 4 5
# 5
# 0
# 1
# 3 1
# 2 2 54
# 3 2

# 2 54

# 3
# 1 2 3
# 4
# 0
# 1
# 2 1 3
# 3 1

# 3

from collections  import deque

def left(arr, dq):
    front = dq[0] 
    dq.popleft() 
    dq.append(front) 
    
def right(arr, dq):
    back = dq[len(arr) -1] 
    dq.pop() 
    dq.appendleft(back) 

def update(arr, dq,A, B):
    dq[A] = B 

def display(arr, dq,A):
    print(dq[A], end= " ") 

N = int(input())
arr = [int(x) for x in input().split()][:N] 
Q = int(input())
dq = deque(arr)
for i in range(Q):
    q1 = [int(x) for x in input().split()] 
    if q1[0] == 0:
        left(arr, dq)
    elif q1[0] == 1:
        right(arr, dq) 
    elif q1[0] == 2:
        A = q1[1] 
        B = q1[2] 
        update(arr, dq, A,B) 
    else:
        A = q1[1] 
        display(arr, dq, A)


#--------- 8 Ticket Counter -------------------
# 1
# 4 6
# N
# N
# N
# E 2
# N
# N

# 1 2 3 2 4 

# 2
# 3 6
# N
# N
# E 1
# N
# N
# N
# 10 2
# N
# N

# 1 2 1 3 2 
# 1 2 

from collections import deque 

t = int(input())
while t:
    t -=1 
    dq = deque() 
    people,c = [int(each) for each in input().split()] 
    l = min(people, 1000) 
    dq = deque(range(1,l+1))
    dq = deque(range(1,l+1)) 
    
    for i in range(c):
        v = input().split() 
        if v[0] == 'N':
            print(dq[0], end=' ') 
            dq.append(dq[0]) 
            dq.popleft() 
        else:
            m_id = int(v[1]) 
            dq.remove(m_id) 
            dq.appendleft(m_id) 
    print() 


#--------- 9 Distribute Bonus points  -------------------
# 6 6
# 2 4 8 5 9 6

# 3

# 4 3
# 6 7 8 9

# 3

from collections import deque

def maxSubarray(arr, k):
    n = len(arr) 
    answer = 0 
    window_start = 0 
    window_sum = 0 
    dq = deque() 
     
    for i in range(n):
        x = arr[i]
        
        while dq and arr[dq[-1]] <= x:
            dq.pop()
        
        dq.append(i) 
        
        window_sum +=x 
        cost = arr[dq[0]] * (answer+1) - window_sum 
        
        if (cost <=k):
            answer +=1 
        else:
            if (dq[0] == window_start):
                dq.popleft() 
            
            window_sum -= arr[window_start]
            window_start +=1 
    return answer
            
         
    

n,k = [int(each) for each in input().split()] 
arr = [int(each) for each in input().split()] 
print(maxSubarray(arr,k))

#--------- 10 Print integer list -------------------
# RD
# 4 1 2 3 4

# 3 2 1

# R
# 4 1 2 3 4

# 4 3 2 1

from collections import deque

def print_integer_list(word, d):
    beg = True 
    printed = False 
    for i in word:
        if i == 'R':
            beg = not beg
        if i == 'D':
            if beg:
                d.popleft() 
            else:
                d.pop() 
    
    while (len(d) != 0 ):
        if beg:
            print(d[0], end= " ")
            d.popleft() 
        else:
            print(d[-1], end= " ")
            d.pop() 

word = input() 
d = [int(val) for val in input().split()][1:] 
d = deque(d) 
print_integer_list(word,d) 


