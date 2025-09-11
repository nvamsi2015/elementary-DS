# Notes
#1. one common pattern is stack.append(-1) at the start of the function to avoid empty stack issues
#2. another common pattern is while stack and stack[-1] == -1 and stack values are increasing stoped => stack.pop() to check maximum area unitil it is again increasing

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
# given a balanced paranthesis string, return score of the string based on below rules
# () has score 1
# AB has score A+B where A and B are balanced paranthesis strings
# (A) has score 2*A where A is a balanced paranthesis string


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

#(()(()))

#((
# [0,0,0] initially 0 is added and other 2 zeros are for two "("
# first ")"
# cl =0, pl = 0
# cl = pl + max(2*cl, 1) = 0 + max(0,1) = 1
# [0,1]

# "(("
# [0,1,0,0]

#")"
# cl=0, pl=0
# [0,1,1]

#")"
# cl=1, pl=1
# cl=pl + max(2*cl,1) = 1 + max(2*1,1) = 3
# [0,3]

# final ")"
# cl=3, pl=0
# cl=pl + max(2*cl,1) = 0 + max(6,1) = 6
# [6]


#----------- 13 shark Royale -----------
# given N sharks with value as size and + => defenders and - => attackers always initiate fight, 
# rules
# -smaller size shark dies
# -if both same size and are differenct clans both die
# -winner shark of each fight moves to left in the arena if there is vacant space
# -sharks from same clan never fight
# -sharks will fight until it finds same clan or it is dead
# pgm to find sharks left in the arena after all fights in increasing order of its duration in the arena

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
    for shark in sharks:                        # shark < 0 < ans[-1] condition for one shark is -ve and other is +ve for a fight to happen
        while ans and shark < 0 < ans[-1]:                     # shark = -20                     shark = 45
            if ans[-1] < -shark:                               # if 15<20 (T)   #if 65<20 (F)   
                ans.pop()                                      # [0,65] 
                continue 
            elif ans[-1] == -shark:  #conditon for both sharks to die                                           
                ans.pop()                #([0, 65, 15])                                           #([0, 65,45])
            break                                                               #break 
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
            bracket.append(i)   # 0, 2, 4
        if c == ')':            # 9, 10, 11
            j = bracket.pop()
            pair[i], pair[j] = j,i   # pair={ 9:4, 4:9, 10:2, 2:10, 11:0, 0:11}

    res = [] 
    i, direction = 0,1 
    while i < len(s):               #i=0                i=10      i=3          i=4    i=8       i=7           i=6           i=5                 i=4     i=10    i=1                    i=0
        if s[i] in "()":                            
            i = pair[i]             #i=11               i=2                    i=9                                                              i=9     i=2                             i=11
            direction = -direction  #d=-1               d=1                    d=-1                                                             d=1     d=-1                            d=1
        else:
            res.append(s[i])                                      #res=[x]            res=[x,a]  res=[x,a,b]  res=[x,a,b,c]  res=[x,a,b,c,d]                     res=[x,a,b,c,d,z] 
        i+= direction               #i=10               i=3        i=4         i=8    i=7        i=6          i=5            i=4                i=10    i=1      i=0                    i=12 (while loop ends)
    
    result = "".join(res) 
    if len(result) == 0:
        return "-1" 
    return result
            
s = input() 
print(reversParantheses(s))

#----------- 17 Find Largest Rectangle in histogram -----------

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
                                                                                                    
    while currentIndex < len(heights):                                                              #    ci =  0                    ci=1          ci=2           ci=3             ci=4                                                                                                           ci=5           while ci< len(heights): F (6<6)
        while indexStack[-1] != -1 and heights[indexStack[-1]] >= heights[currentIndex]:            # indexStack = deque([-1])      T&F (1>=4)    T&F (4>=5)     T&F (5>=6)       T&T (6>=2)                            T&T (5>=2)                  T&T (4>=2)                  T&F (1>=2)      T&F (2>=3)
            poppedIndex = indexStack.pop()                                                                                                                                       # poppedIndex = 3  [-1,0,1,2]          poppedIndex = 2 [-1,0,1]    poppedIndex = 1 [-1,0]            
            max_area = max(max_area, heights[poppedIndex] * (currentIndex - indexStack[-1] -1))                                                                                  # max_area = max(0, 6*(4-2-1)) = 6     max(6, 5*(4-1-1)) = 10      max(10,4*(4-0-1))=12           
                                                                                                    #                                                                                                  (4-poppedIndex) will also work
        indexStack.append(currentIndex)                                                             # indexStack = deque([-1,0])    d([-1,0,1])   d([-1,0,1,2])  d([-1,0,1,2,3])                                                                                                [-1,0,4]         [-1,0,4,5]           
        currentIndex +=1                                                                            #    ci =  1                    ci=2          ci=3           ci=4                                                                                                           ci=5             ci=6   
    
    while indexStack[-1] != -1:                                                                 #[-1,0,4,5]                  [-1,0,4]                       [-1,0]                           while indexStack[-1] != -1  False        
        poppedIndex = indexStack.pop()                                                          #pi = 5                         pi=4                        pi=0
        max_area = max(max_area, heights[poppedIndex] * (len(heights) - indexStack[-1] -1))     #max(12, 3*(6-4-1)) = 12      max(12, 2*(6-0-1)) = 12       max(12, 1*(6-(-1)-1)) = 12
    
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
# no need of stack here just count left and right brackets counts, if matched decrease left count else increase right count

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