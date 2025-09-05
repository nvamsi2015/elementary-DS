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