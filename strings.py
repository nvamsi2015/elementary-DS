# notes

# string1.find(each)        # find returns the index of each in the string


# 1------------ (hash table 2)2 first unique charecter in a string --------------

# ip: talentaccelerator
# op: 4 (index of n) 

# -----bruteforce ------------
def firstUniqueCharecter(s):
    for i,char in enumerate(s):
        if s.count(char) ==1:
            return i
    return -1 
string = input() 
print(firstUniqueCharecter(string))

# ---------- using counter to create a map to store frequency of character --------
from collections import Counter 

def firstUniqueCharecter(string):
    count = Counter(string) #Counter({'t': 3, 'a': 3, 'e': 3, 'l': 2, 'c': 2, 'r': 2, 'n': 1, 'o': 1})
    for each in string:
        if count[each] == 1:
            return string.find(each) 
    return -1 

string = input() 
print(firstUniqueCharecter(string))

#--------------- usig hastables ---------

def firstUniqueCharecter(s):
    freq_dict = {}
    for char in s:
    #   if char in freq_dict:
    #       freq_dict[char]+=1 
    #   else:
    #         freq_dict[char]=1 
        
        freq_dict[char] =1 if char not in freq_dict else freq_dict[char]+1     #this line working
        
        # freq_dict[char] +=1 if char in freq_dict else 1 # giving keyerror for first letter in string bc freq_dict[char] wont be available to increment for new charecters

    for char in s:
        if freq_dict[char] ==1: 
            return s.find(char) 
    return -1 

s = input()
print(firstUniqueCharecter(s))


