
# condition to check all elements are same in list => len(set(temp_list2))==1
# array to string => " ".join(list1[::-1]) or " ".join(list1)
#  to get product of all the elements or list => math.prod(arr)
# to delete ith element in list => del nums[i]





# ------------ 2. 1071. Greatest Common Divisor of Strings

# For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t (i.e., t is concatenated with itself one or more times).

# Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

 

# Example 1:

# Input: str1 = "ABCABC", str2 = "ABC"
# Output: "ABC"
# Example 2:

# Input: str1 = "ABABAB", str2 = "ABAB"
# Output: "AB"
# Example 3:

# Input: str1 = "LEET", str2 = "CODE"
# Output: ""

class Solution:
    def gcdOfStrings(self, str1: str, str2: str) -> str:
        l1 = len(str1)
        l2 = len(str2)
        lmin = min(l1,l2) 

        temp_str = str2 if l2<l2 else str1 

        ans =''
        for i in range(len(temp_str)):
            char = temp_str[:i+1]
            temp_list1 = str1.split(char)
            temp_list2 = str2.split(char)

            if(len(set(temp_list1))==1 and len(set(temp_list2))==1) and len(str1)/len(char) == len(temp_list1)-1 and len(str2)/len(char) == len(temp_list2)-1 :
                if(len(char)>len(ans)):
                    ans = char
                
                if ans ==str1:
                    return str1 
                
                if ans ==str2:
                    return str2
        
        return ans

    


class Solution:
    def gcdOfStrings(self, str1: str, str2: str) -> str:
        len1, len2 = len(str1), len(str2)
        
        def valid(k):
            if len1 % k or len2 % k: 
                return False
            n1, n2 = len1 // k, len2 // k
            base = str1[:k]
            return str1 == n1 * base and str2 == n2 * base 
        
        for i in range(min(len1, len2), 0, -1):
            if valid(i):
                return str1[:i]
        return ""

#  --------------3        1431. Kids With the Greatest Number of Candies

# Example 1:

# Input: candies = [2,3,5,1,3], extraCandies = 3
# Output: [true,true,true,false,true] 
# Explanation: If you give all extraCandies to:
# - Kid 1, they will have 2 + 3 = 5 candies, which is the greatest among the kids.
# - Kid 2, they will have 3 + 3 = 6 candies, which is the greatest among the kids.
# - Kid 3, they will have 5 + 3 = 8 candies, which is the greatest among the kids.
# - Kid 4, they will have 1 + 3 = 4 candies, which is not the greatest among the kids.
# - Kid 5, they will have 3 + 3 = 6 candies, which is the greatest among the kids.
# Example 2:

# Input: candies = [4,2,1,1,2], extraCandies = 1
# Output: [true,false,false,false,false] 
# Explanation: There is only 1 extra candy.
# Kid 1 will always have the greatest number of candies, even if a different kid is given the extra candy.
# Example 3:

# Input: candies = [12,1,12], extraCandies = 10
# Output: [true,false,true]


class Solution:
    def kidsWithCandies(self, candies: List[int], extraCandies: int) -> List[bool]:
        maxCandie = max(candies)
        ans = []
        for num in candies:
            if num+extraCandies >= maxCandie:
                ans.append(True)
            else:
                ans.append(False)
        
        return ans
    

# ----------4 605. Can Place Flowers

# You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

# Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

 

# Example 1:

# Input: flowerbed = [1,0,0,0,1], n = 1
# Output: true
# Example 2:

# Input: flowerbed = [1,0,0,0,1], n = 2
# Output: false


class Solution:
    def canPlaceFlowers(self, flowerbed: List[int], n: int) -> bool:

        # count = 0 

        if n==0:
            return True

        if len(flowerbed)<n:
            return False

        if len(flowerbed)==1:
            return True if flowerbed[0]==0 else False
        



        for i in range(len(flowerbed)):

            

            
            if i==0 and flowerbed[i]==0 and flowerbed[i+1]==0:
                n-=1
                flowerbed[i]=1
            
            elif i==len(flowerbed)-1 and flowerbed[i]==0 and flowerbed[i-1]==0:
                n-=1
                flowerbed[i]=1
        
            elif flowerbed[i]==0 and flowerbed[i-1]==0 and flowerbed[i+1]==0:
                n-=1
                flowerbed[i]=1
            


            
        
        return n<=0

# ----------- 5. 345. Reverse Vowels of a String
#     
# Given a string s, reverse only all the vowels in the string and return it.
# The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

# Example 1:
# Input: s = "IceCreAm"
# Output: "AceCreIm"

# Explanation:
# The vowels in s are ['I', 'e', 'e', 'A']. On reversing the vowels, s becomes "AceCreIm".

# Example 2:
# Input: s = "leetcode"
# Output: "leotcede"

class Solution:
    def reverseVowels(self, s: str) -> str:
        vowels = 'aeiouAEIOU'
        
        vowels_in_s = []
        ans = ''
        for char in s:
            if char in vowels:
                vowels_in_s.append(char)

        for char in s:
            if char in vowels:
                ans+=vowels_in_s.pop()
            else:
                ans+=char 
        return ans

#---------- 6. 151 Reverse Words in a String

#   Example 1:

# Input: s = "the sky is blue"
# Output: "blue is sky the"


class Solution:
    def reverseWords(self, s: str) -> str:
        list1 = s.split()

        return " ".join(list1[::-1])


# ----------- 7. 