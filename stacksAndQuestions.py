# -------1 operations on stacks ----------------

# 4
# A 2
# A 3
# B
# A 2

# 3

def createStack():
    return []


# Stack is empty when stack size is 0
def isEmpty(stack):
    return (len(stack) == 0 )


# Function to add an item to stack. It increases size by 1
def push(stack, item):
    stack.append(item)


# Function to remove an item from stack. It decreases size by 1
def pop(stack):
    if isEmpty(stack):
        return -1 
    return stack.pop()


# main function
n= int(input())
stack = createStack()

for i in range(n):
    operation = input().split()
    if operation[0] == 'A':
        push(stack, int(operation[1]))
    elif operation[0] == 'B':
        print(pop(stack))
    
#-------- 2 pop operations on two stacks ------------

# 3 2 3
# 2 4 6
# 3 5
# A B B

# 6 5 3 

class twoStacks:
    def __init__(self, size):
        # Fill in the code here
        self.arr = [ None for _ in range(size)]
        self.size = size
        self.top1 = -1
        self.top2 = size
        

    def push1(self, x):
        # Fill in the code here
        self.top1 += 1 
        self.arr[self.top1] = x

    def push2(self, x):
        # Fill in the code here
        self.top2 -= 1 
        self.arr[self.top2] = x

    def pop1(self):
        # Fill in the code here
        x = self.arr[self.top1] 
        self.top1 -= 1 
        return x 
    
    def pop2(self):
        # Fill in the code here
        x = self.arr[self.top2]
        self.top2 +=1 
        return x


def main():
    m, n, t = [int(each) for each in input().split()]

    F = [int(each) for each in input().split()]
    S = [int(each) for each in input().split()]    
    T = input().split()
    
    ts = twoStacks(m + n)

    for i in range(m):
        ts.push1(F[i])
    for i in range(n):
        ts.push2(S[i])
    # print(ts.arr)           #[2,4,6,5,3]

    for i in range(t):
        if T[i] == 'A':
            print(ts.pop1(), end=" ")
        elif T[i] == 'B':
            print(ts.pop2(), end=" ")

main()

#------------- 3 sq3- sort stack recursively without using  loops ---------

def sortedPush(s, element):
    if len(s)==0 or element>s[-1]:
        s.append(element)
    else:
        temp = s.pop()
        sortedPush(s,element)
        s.append(temp)


def sortStack(s):
    if len(s) !=0:
        temp = s.pop()
        sortStack(s)
        sortedPush(s,temp)
        

def printStack(s):
    if len(stack) ==0:
        return 
    else:
        x = s[-1] 
        s.pop(-1)
        print(x, end= ' ')
        printStack(s) 
        s.append(x)


stack = []
n = int(input())
A = [int(x) for x in input().split()][:n]
for i in range(n):
    stack.append(A[i])

sortStack(stack)
# print(stack)
printStack(stack)

#------------- 4 print minimum in the stack before each pop---------
# 4
# 2 4 1 3

# 1 1 2 2 

from collections import deque

INITIAL_STACK = deque()
MIN_STACK = deque()

def push(arr, n):
    INITIAL_STACK.append(arr[0])
    MIN_STACK.append(arr[0])

    for i in range(1, n):
        if arr[i] <= MIN_STACK[-1]:
            MIN_STACK.append(arr[i])
        INITIAL_STACK.append(arr[i])

def get_min_at_pop():
    while INITIAL_STACK:
        print(MIN_STACK[-1], end=" ")
        if MIN_STACK[-1] == INITIAL_STACK[-1]:
            MIN_STACK.pop()
            INITIAL_STACK.pop()
        else:
            INITIAL_STACK.pop()

def main():
    n = int(input())
    nums = [int(i) for i in input().split()]
    push(nums, n)
    get_min_at_pop()

main()

#------------- 5 Length of longest valid substring ---------

# ((())))()
# 6

from collections import deque


def findMaxLenBraces(braces):
    n= len(braces) 
    stack = deque()
    stack.append(-1) 
    result = 0 
    
    for i in range(n):
        if braces[i] == '(':
            stack.append(i) 
        else:
            stack.pop()
            if len(stack) != 0:
                currentValue = i - stack[-1] 
                result  = max(result, currentValue) 
            else:
                stack.append(i) 
    return result 
    
    
braces = input() 
print(findMaxLenBraces(braces))


#------------- 6- diff of closest smallest element on left and right side of element in array---------
# 3
# 2 1 8

# 1

from collections import deque

def leftSmaller(arr, n, SE):
    num_stack = deque() 
    for i in range(n):
        while ( num_stack and num_stack[-1] >= arr[i]):
            num_stack.pop() 
        
        if num_stack:
            SE[i] = num_stack[-1] 
        else:
            SE[i] =0
        num_stack.append(arr[i]) 

            

def findMaxDiff(arr, n):
    ls = [0]*n 
    rs = [0]*n 
    
    leftSmaller(arr,n,ls) 
    leftSmaller(arr[::-1], n, rs)
    max_diff = -1 
    
    for i in range(n):
        max_diff = max(max_diff, abs(ls[i]- rs[n-1-i]))
    return max_diff
    
    
n= int(input())
arr = [int(x) for x in input().split()] 
print(findMaxDiff(arr,n))


#------------- 7   card game ---------

# 7 ,given n cards 1-N with one on top, remove the top card and move the next card to the bottom of the deck.continue this until one card is left.

# 1 3 5 7 4 2  (sequence of removed cards cards)
# 6 (remaining card)

from collections import deque
def print_cards(n):
    q = list(range(1,n+1)) 
    q = deque(q) 
    
    while (len(q)>1):
        print(q.popleft(), end=" ")
        x= q.popleft() 
        q.append(x)
    print() 
    print(q[0])

n = int(input())
print_cards(n)

#---------- 8 implement queue operation using array, A is push, B is pop ----------
# 5
# A 2
# A 3
# B
# A 4
# B

# 2 3 

from collections import deque
def enqueue(queue, element):
    queue.append(element) 

def dequeue(queue):
    if not bool(queue):
        return -1 
    return queue.popleft()

n = int(input())
queue = deque() 
A = [] 

for i in range(n):
    arr = [str(x) for x in input().split()]
    A.append(arr) 

for i in range(n):
    if A[i][0] =='A':
        enqueue(queue, int(A[i][1]))
    elif A[i][0] =='B':
        print(dequeue(queue), end = " ")
        


#---------- 9 check if a queue can be sorted using stack -----------

# 1
# 6 6 1 2 3 4 5
# YES

# 1
# 6 5 1 2 6 3 4
# NO

from collections import deque

def check_sorted(q):
    n = len(q) 
    st = deque() 
    expected = 1 
    
    while len(q) != 0:
        fnt = q[0] 
        q.popleft() 
        if fnt == expected:
            expected+=1 
        else:
            if(len(st) == 0):
                st.append(fnt) 
            elif st[0] <fnt:
                return False 
            else:
                st.append(fnt) 
        
        while len(st) != 0 and st[-1] == expected:
            st.pop() 
            expected+=1 
    
    if (expected-1 ==n and len(st) == 0):
        return True 
    return False



T = int(input())
for _ in range(T):
    q = [int(val) for val in input().split()][1:]
    q= deque(q) 
    if check_sorted(q):
        print('YES') 
    else:
        print('NO')
    
#------- 10 card game - no of cards left after even sum pairs are removed -----------
# 5
# 1 2 3 4 5
# 5

# 10
# 1 3 3 4 2 4 1 3 7 1 ((1,3)(4,2)(1,3)(7,1)) remaining are 3 and 4
# 2 ans

from collections import deque 

def cards(stack, card):
    if len(stack) != 0 and (stack[len(stack)-1] + card) %2 ==0:
        stack.pop() 
    else:
        stack.append(card) 

n = int(input())
stack = deque()

[ cards(stack, int(x)) for x in input().split()] 
print(len(stack))

#------- 11 Decode string ----------
# x3[yz]
# xyzyzyz

# 2[b2[a]]
# baabaa

from collections import deque 

def decodeString(word):
    stack = deque([])
    current_string = "" 
    k = 0 
    
    for char in word:
        if char == '[':
            stack.append((current_string, k))
            current_string= ''
            k = 0 
        elif char == ']':
            last_string, last_k = stack.pop() 
            current_string = last_string + last_k * current_string
        elif char.isdigit():
            k = k*10 + int(char)
        else:
            current_string+= char 
            
    return current_string

word = input() 
print(decodeString(word))

#-------- 12. Score of Paranthesis -----------
# (()(()))
# 6

# (())
# 2

from collections import deque

def getScore(paranthesis):
    scores_stack = deque() 
    scores_stack.append(0) 
    
    for each in paranthesis:
        if each== '(':
            scores_stack.append(0) 
        else:
            score_currentLevel = scores_stack.pop() 
            score_prevLevel = scores_stack.pop() 
            score_currentLevel = score_prevLevel + max(2* score_currentLevel, 1) 
            scores_stack.append(score_currentLevel) 
    final_score = scores_stack.pop() 
    
    return final_score

paranthesis = input() 
final_score = getScore(paranthesis) 
print(final_score)

#----------- 13 shark Royale -----------
# 4
# 65 15 -20 45
# 45 65 

# 3
# 30 -20 -10
# 30

# 3
# -20 30 -10
# 30 -20

from collections import deque

def sharkWar (sharks):
    ans = deque([0]) 
    for shark in sharks:
        while ans and shark < 0 < ans[-1]:
            if ans[-1] < -shark:
                ans.pop() 
                continue 
            elif ans[-1] == -shark:
                ans.pop() 
            break 
        else:
            ans.append(shark) 
    return ans
        

n = int(input()) 
sharks = [int(each) for each in input().split()] 
final_sharks = sharkWar(sharks) 

if final_sharks[-1] == 0:
    print(final_sharks[-1]) 

while final_sharks[-1] !=0:
    print(final_sharks.pop(), end= ' ')


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

#---------- 15 no of unique pairs (x,y) where x is max and y is 2nd max of some subarray  in given array ----------
# 3
# 3 1 2

# 3

# 3
# 1 2 3

# 2

from collections import deque

def countPairs(arr):
    n = len(arr) 
    forward = [0 for _ in range(n)] 
    
    sForward = deque() 
    for i in range(n):
        while (len(sForward) != 0  and arr[i] > arr[sForward[-1]]):
            forward[sForward[-1]] = 1 
            sForward.pop() 
        sForward.append(i) 
        
    backward = [0 for _ in range(n)]
    sBackward = deque() 
    for i in reversed(range(n)):
        while (len(sBackward) != 0  and arr[i] > arr[sBackward[-1]]):
            backward[sBackward[-1]] = 1 
            sBackward.pop() 
        sBackward.append(i) 
    
    res = 0 
    for i in range(n):
        res+= forward[i] + backward[i] 
    
    return res

n = int(input()) 
arr = [int(x) for x in input().split()] 
print(countPairs(arr))

#----------- 16 Reverse Substring at each pair of parenthesis -----------
# (z(x(dcba)))
# xabcdz

# (ab(cde)fg)
# gfcdeba

from collections import deque 

def reversParantheses(s):
    bracket = deque() 
    pair = {}
    for i,c in enumerate(s):
        if c == '(':
            bracket.append(i) 
        if c == ')':
            j = bracket.pop()
            pair[i], pair[j] = j,i 
    res = [] 
    i, direction = 0,1 
    while i < len(s):
        if s[i] in "()":
            i = pair[i] 
            direction = -direction 
        else:
            res.append(s[i]) 
        i+= direction 
    
    result = "".join(res) 
    if len(result) == 0:
        return "-1" 
    return result
            
s = input() 
print(reversParantheses(s))

#----------- 17 Find Largest Rectangle -----------

# 6
# 1 4 5 6 2 3
# 12

# 6
# 1 2 3 1 5 6
# 10

from collections import deque

def MaxArea(heights):
    max_area = 0 
    currentIndex = 0 
    indexStack = deque()
    indexStack.append(-1) 
    
    while currentIndex < len(heights):
        while indexStack[-1] != -1 and heights[indexStack[-1]] >= heights[currentIndex]:
            poppedIndex = indexStack.pop()
            max_area = max(max_area, heights[poppedIndex] * (currentIndex - indexStack[-1] -1))
        
        indexStack.append(currentIndex) 
        currentIndex +=1 
    
    while indexStack[-1] != -1:
        poppedIndex = indexStack.pop() 
        max_area = max(max_area, heights[poppedIndex] * (len(heights) - indexStack[-1] -1))
    
    return max_area

n = int(input())
heights = [int(x) for x in input().split()]
max_area = MaxArea(heights)
print(max_area)

#----------- 18 simplify path -----------
# /a/b/../d
# /a/d

# /a/./b
# /a/b

from collections import deque

def simplifiedPath(path):
    stack = deque() 
    
    for portion in path.split('/'):
        if portion == '..':
            if stack:
                stack.pop()
        elif portion == '.' or not portion:
            continue 
        else:
            stack.append(portion) 
    
    final_str = "/" + "/".join(stack) 
    return final_str

path = input()
print(simplifiedPath(path))

#----------- 19  min no of bracket flips to make expression balanced -----------
# {{
# 1

# {{{}
# 1

from collections import deque

def countMinFlips(expression):
    length = len(expression) 
    if length % 2:
        return -1 
    
    stack = deque() 
    for char in expression:
        if char == '}' and stack:
            if stack[-1] == '{':
                stack.pop()
            else:
                stack.append(char) 
        else:
            stack.append(char) 
    
    lonely_braces = len(stack) 
    n = 0 
    while stack and stack[-1] == '{':
        stack.pop() 
        n+=1 
    return lonely_braces//2 + n % 2
    
expression = input() 
print(countMinFlips(expression))

#------------- 20 Min no of parantheses to add at any position so that resulting expression is valid  -----------

# ()))(
# 3

# )())()
# 2

def minAddToMakeValid(brackets):
    left = right = 0 
    for i in brackets:
        if i == '(':
            left+=1 
        elif left > 0 and i == ')':
            left -=1 
        else:
            right+=1 
    return left+right

brackets = input() 
print(minAddToMakeValid(brackets))
