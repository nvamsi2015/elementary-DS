#--------- 1 Minimize difference after removing k elements in sorted array -------------------
# 5 2
# 1 5 8 11 17
# 3 ( after removing 2 elements 1 and 17, adjacent differences are 3,3)

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

# approach: 

# The intuition is, to iterate over all the subarrays of size N – K and for each subarray find the maximum difference between adjacent elements. Finally, find the minimum of all the maximum differences of adjacent elements.
# First, take all elements from the array and calculate the difference between two adjacent elements in the subarray. We will get a total of N-1 elements. Store them in an array diff_A. Now we have to remove K elements from an array of N-1 elements.
# Create a deque dq with size N-K-1. It stores the indices of diff_A. At first dq is empty so we add the first element from diff_A. Next, we compare the element of A with the last index present in the queue and pop the element if it less than or equal to current element. From this process, we get dq for the current window with the index of the first maximum as the front element. The next element will be the index of the maximum after the previous index, and so on.
# Next, we use min_of_diffs to store the minimum of the maximum difference values up to the previous window and compare it with a maximum difference in the present window, and we update the min_of_diffs.
# For each window, if the front element of dq(max of the previous window) is not present in the current window then remove the front element.
# Update the position of the current element in dq by removing all the values that are less than it. 
# After the window reaches the end of the array return min_of_diffs.


# Complexity Analysis:
# Time complexity: The deque adds K elements from starting of the array upto the last element. So the time complexity is O(N).

#--------- 2 Rectify string '<' represent backspace -------------------
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

#--------- 4 change to uppercase, change previous letter to @  to upper case  -------------------
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

# > represents add the following alphabetical characters till the next spacial character, at the end
# < represents add the following alphabetical characters till the next spacial character, at the start

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

#approach:

# The intuition is to use deque so that elements can be added at either end and a boolean flag direction which helps in deciding from which end the elements have to be added.

# Create a deque and let it be dq. Let the end(front or back) where an element is added be represented by a boolean flag direction.
# direction can only have two values - 1 which signifies that elements are to be added in the front and 0 which signifies that elements are to be added in the back.
# In each iteration check for the direction. If direction = 0, add all the alphabets from the current alphabet in the word into dq until < is encountered.
# Skip adding > to dq if it is encountered and add the alphabets next to it. As we are currently adding the alphabets at the end of dq, encountering > does not change the current order of adding the alphabets.
# When < is encountered, update the direction to 1. Form a temporary string temp by joining only the alphabets after < till you encounter another special character(< or >).
# There are 2 possible scenarios of encountering special characters after <.
# Case 1: < is encountered again. Add the alphabets in temp at the front of dq and reset temp to an empty string. Start adding the alphabets from the word to temp again.
# Case 2: > is encountered. Add the alphabets in temp at the front of dq and reset temp to an empty string. Change the direction to 0.
# After all the alphabets from word are arranged in dq, join all the alphabets in dq and return it.


# Complexity Analysis
# Time Complexity: At most, we push and pop N times from the deque. So the time complexity of each test case in T tests is O(N) where N is the length of S.

#--------- 6 Multiple queries  -------------------

# given an array of N integers and Q integers representing no of queries. In each query, you are given an integer K. 
# You have to perform the following operation K times on the array and print the first two elements of the array after K operations.

# The operation is as follows:
# 1. Pop the first two elements of the array say A and B.
# 2. If A > B, then push A at the front of the array and B at the back of the array.
# 3. Else, push B at the front of the array and A at the back of the array.

#----------------
# 2 1
# 4 5
# 2

#o/p
# 5 4
#----------------
# 4 3
# 5 6 7 8
# 1 2 4

#o/p 
# 6 7
# 7 8
# 8 6

# ex: A = [5,6,7,8], queries = [1,2,4]

# operation count  A before   A after
# 1               [5,6,7,8]     [6,7,8,5]
# 2               [6,7,8,5]     [7,8,5,6]
# 3               [7,8,5,6]     [8,5,6,7]
# 4               [8,5,6,7]     [8,6,7,5]

# ouput is first 2 lines of the given queries 1,2,4
# 6, 7
# 7, 8
# 8, 6

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
#given an array of N integers and Q queries. The queries can be of the following four types:
# 0: left shift the array by one position.
# 1: right shift the array by one position.
# 2 A B: update the value at index A to B.
# 3 A: print the value at index A.  

# 5
# 1 2 3 4 5

# 5 (Q, no of queries)      1 2 3 4 5
# 0          left shift     2 3 4 5 1
# 1          right shift    1 2 3 4 5
# 3 1                       1 2 3 4 5     print element at 1 index => 2 
# 2 2 54                    1 2 54 4 5   update index 2 to 54
# 3 2                       1 2 54 4 5     print element at index 2 => 54  

# 2 54
#----------------
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
# in a city there is a ticket counter where people stand to buy a ticket. to buy a ticket everyone has to show their membership card which is Id from 1 to P. 
# initially people stand according to their membership id in increasing order. Each person has to enter the countert to buy a ticket and comes out to join the queue again at the rear EncodingWarning

# there is a machine at entrance displays instructions
# - N : next person in the queue enters the counter to buy a ticket
# - E X : person with membership id X can come to the front of the queue 

# you are given T sets of C instructions. Return the order in which they entered the counter. 


# 1

# 4 6       P, C => p =[1,2,3,4] c= no of instructions
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


#--------- 9 Distribute K Bonus points to N students  -------------------

# - maximizw the no of students who got new points
# - select a group of adjacent students of any size before awarding points
# - after the selection of group, start awarding points so that all the students in that group have equal points by the end of distribution 

# find the max no of students in the group you have selected ( for distribution of points) as mentioned above
# note: you need not distribute all the k points among students 

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

# R -> reverse the array
# D -> delete the first element from left in the array

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


# approach: 

# We take advantage of the way instructions are designed using a deque to avoid reversing the array whenever the instruction asks us.
# As we have to delete only the first element, if at all the array is reversed, the element to be deleted is the last element. Otherwise, we can delete the first element itself. So we use a deque for this functionality.
# Coming to the implementation, we traverse the string and use a bool to store the current order of the array (normal or reversed) whenever we counter 'R'. When we encounter 'D', based on this boolean value, we either delete the first element or the last element.
# In the end, we print all the remaining elements in the deque either from the front or from the back based on this bool value.

# Complexity Analysis:
# Time complexity: We traverse through every character of the string and then traverse at most N times to print remaining elements. So the time complexity of the solution is O(N).