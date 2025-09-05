#stacks
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

# ------------- 20 Min no of parantheses to add at any position so that resulting expression is valid  -----------

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

# logic: return left+right (unmatched), not related to stack or queue