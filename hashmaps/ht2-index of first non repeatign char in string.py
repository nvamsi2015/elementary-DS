

# ---------- given ans using Counter -------------
from collections import Counter 

def firstUniqueCharecter(s):
    freqency_obj = Counter(s) 
    
    for char in s:
        if freqency_obj[char] ==1:
            return s.find(char) 
    return -1 

s = input()
print(firstUniqueCharecter(s))

# -----bruteforce ------------
# def firstUniqueCharecter(s):
#     for i,char in enumerate(s):
#         if s.count(char) ==1:
#             return i
#     return -1 
# string = input() 
# print(firstUniqueCharecter(string))

# -------
# from collections import Counter 
# def firstUniqueCharecter(string):
#     count = Counter(string) 
#     print(count) 
#     for each in string:
#         if count[each] == 1:
#             return string.find(each) 
#     return -1 

# string = input() 
# print(firstUniqueCharecter(string))