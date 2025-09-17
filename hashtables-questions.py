# notes 

#-----------
freq_dict[char] =1 if char not in freq_dict else freq_dict[char]+1

#--------------
count = Counter(string) #Counter({'t': 3, 'a': 3, 'e': 3, 'l': 2, 'c': 2, 'r': 2, 'n': 1, 'o': 1})

#----------------
map = defaultdict(int) 
for i in range(len(s)):
    map[s[i]]+=1 

#----------
dictionary.values()

#----------- diff bw 

frequency = defaultdict(int) # frequency ={}  or dict() will give key error in the increment step bc it is not initialised
for number in A:
    for number in A:
        frequency[number] +=1   # didfference bw {} and defaultdict(int), this will inidiate default values to 0, while {} dont initiate[number] +=1   # didfference bw {} and defaultdict(int), this will inidiate default values to 0, while {} dont initiate



# ---------1  Find pairs with sum k -----------
# ip1: 
# 5 3
# 2 4 7 1 5
# op1:
# 0 3 

# ip2:
# 6 4
# 1 2 3 4 5 6
# op2:
# 0 2

# ------ n2 solution (brute force) ------
def get_two_sum(arr, k):
    for i in range(len(arr)-1):
        for j in range(i+1,len(arr)):
            if arr[i]+arr[j] == k:
                print(str(i) + ' '+str(j))


num_of_ints, two_sum = map(int,input().split())
list_of_ints = [int(val) for val in input().split()]
get_two_sum(list_of_ints, two_sum)

#------------- O(n) using dictionaries --------
def get_two_sum(arr, k ):
    dict1, index = {}, 0 
    for val in arr:
        if k - val in dict1:
            print(dict1[k-val], index)
            break 
        dict1[val] = index 
        index+=1 

n, k = map(int,input().split())
arr = [int(val) for val in input().split()]
get_two_sum(arr, k)

# ------------2 first unique charecter in a string --------------
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

# ------------------3 Happy Number ---------------------------------------
# ip:
# 1
# 82
# op:Happy Number

def is_happy(num):
    sum_keys = set() 
    while num != 1:
        total = 0 
        while num>0:
            total+= (num%10) * (num%10)
            num//=10 
        if total in sum_keys: #condition to avoid checking the same number again and again
            return False 
        
        sum_keys.add(total) 
        num = total 
    return True 
    
test_cases = int(input())
for i in range(test_cases):
    if is_happy(int(input())):
        print('Happy Number') 
    else:
        print('Not a Happy Number')


# ---------------------4 Permutation palindrom ---------------------------
# 1
# ssmmllp

# YES

from collections import defaultdict 

def is_permute_palidrome(s):
    max_odd_count = 0 if len(s)%2 ==0 else 1 
    map = defaultdict(int) 
    for i in range(len(s)):
        map[s[i]]+=1 
    odd_count = 0 
    for key in map:
        if map[key] %2 ==1:
            odd_count+=1 
            if odd_count>max_odd_count:
                return False 
    return True
    
t = int(input())
for _ in range(t):
    if is_permute_palidrome(input()):
        print('YES')
    else:
        print('NO')


# -------------------------------------------5 check for anagrams ---------------------------------------
# 2
# aba aa
# aba baa

# No
# Yes

from collections import defaultdict 

def isAnagram(A,B):
    dictionary  = defaultdict(int) 
    if len(A) != len(B):
        return False 
    n = len(A) 
    for i in range(n):
        dictionary[A[i]] +=1 
        dictionary[B[i]] -=1 
    for val in dictionary.values():
        if val !=0:
            return False
    return True 

t = int(input())
while t:
    A,B = input().split() 
    if isAnagram(A,B):
        print("Yes") 
    else:
        print("No")
    t-=1


# -------------------------------------------6 largest unique number  ---------------------------------------
# 5
# 1 2 3 4 5
# 5

from collections import defaultdict 

def largestUniqueNumber(A):
    frequency = defaultdict(int) 
    for number in A:
        frequency[number] +=1   # didfference bw {} and defaultdict(int), this will inidiate default values to 0, while {} dont initiate
    result = -1 
    for key in frequency.keys():
        if frequency[key]  == 1:
            result = max(result, key) 
    return result

n = int(input())
A = [int(x) for x in input().split()] 
print(largestUniqueNumber(A)) 


# -------------------------------------------7 unique number of occurences ---------------------------------------
# 1
# 14
# 1 1 2 2 2 3 3 3 3 4 4 4 4 4
# True

from collections import defaultdict 

def unique_values(A):
    maps = defaultdict(int) 
    maps1 = defaultdict(int) 
    for val in A:
        maps[val] +=1
    for value in maps.values():
        if maps1[value] > 0: # if value already exists its not unique
            return False 
        maps1[value] +=1    # first time adding into maps1
    return True

t = int(input())
while t:
    n = int(input()) 
    A = [int(x) for x in input().split()] 
    print(unique_values(A)) 
    t-=1 

# -------------------------------------------8 K-diff paris in array  ---------------------------------------
# count of unique pairs that satisfy following conditions
# - A pair should be formed by two integers {A[i], A[j]} where i != j 
# - |A[i] - A[j]| must be equal to k 

# 5 2
# 3 2 4 2 5

# 2

from collections import Counter

def findPairs(A,k):
    count = 0 
    if k <0:
        return 0 
    c = Counter(A)  #Counter({2: 2, 3: 1, 4: 1, 5: 1})
    for i in c:
        if k>0 and i+k in c or k==0 and c[i] > 1:
            count+=1 
    return count 
    
n,k = [int(x) for x in input().split()]
A = [int(x) for x in input().split()] 
print(findPairs(A,k))

# -----9 length of Longest Harmonious subsequence (diff of max and min value in array is 1) ------
# 4
# 1 2 3 4

# 2
from collections import defaultdict 

def findLHS(nums):
    maps = defaultdict(int) 
    result = 0 
    for element in nums:
        maps[element] +=1 
    for key in maps:
        if key+1 in maps.keys():
            result = max(result, maps[key] + maps[key+1])
        if key-1 in maps.keys():
            result = max(result, maps[key] + maps[key-1])
    return result 
        
n = int(input())
nums = [int(x) for x in input().split()] 
print(findLHS(nums)) 

# -------10 Find unique Triplets with sum 0 ----  
# 6
# 2 0 5 -3 1 -2

# 2 -3 1
# 2 0 -2
# 5 -3 -2

def get_threesum(nums,n):
    triplets = [] 
    unique_pairs = set() 
    for i in range(n):
        seen = set() 
        for j in range(i+1,n):
            complement = -nums[i] - nums[j]
            if complement in seen:
                min_val = min(nums[i], min(complement, nums[j]))
                max_val = max(nums[i], max(complement, nums[j]))
                if (min_val, max_val) not in unique_pairs:
                    triplets.append([nums[i], complement, nums[j]])
                    unique_pairs.add((min_val, max_val))
            seen.add(nums[j]) 
    return triplets 

nums_of_ints = int(input())
list_of_ints = [value for value in map(int,input().split())]
result = get_threesum(list_of_ints, nums_of_ints) 
for i in range(len(result)):
    print(result[i][0], result[i][1], result[i][2])

# ---------11 Longest Unique Charecters Substring ---------  
# 1
# abcadb 

# 4
from collections import defaultdict 

def long_unique_str_len(given_str):
    max_len, start_index, char_dict = 0, -1, defaultdict(int) 
    for i in range(len(given_str)):
        if given_str[i] in char_dict:
            start_index = max(start_index, char_dict[given_str[i]])
        max_len = max(max_len, i - start_index)
        char_dict[given_str[i]] = i 
    return max_len

T = int(input())
for i in range(T):
    print(long_unique_str_len(input()))

# -----12 starting indices of concatinated substrings occurences  in main string  ------
# earthhplanetgalaxy
# 2 planet earthh
# 0

# areforareformanarearefor
# 3 are for are
# 0 15

from collections import defaultdict 

def find_and_print_substring_index(string, words):
    flag = 1 
    if len(string) < len(words[0]) * len(words) or len(words) == 0:
        print(-1) 
        return 
    mp = defaultdict(int) 
    for i in words:
        if i in mp.keys():
            mp[i]+=1 
        else:
            mp[i] = 1 
    w = len(words[0]) 
    
    i = 0  
    while len(string) -i >= w *len(words): 
        if string[i:i+w] in mp.keys():
            mp_temp = mp.copy() 
            j = i 
            wrd = string[j:j+w] 
            while 1: 
                if wrd not in mp_temp.keys():
                    break 
                if mp_temp[wrd] ==1:
                    mp_temp.pop(wrd) 
                else:
                    mp_temp[wrd] -=1 
                j+=w 
                if j+w-1 <len(string):
                    wrd = string[j:j+w] 
                else:
                    break 
            
            if len(mp_temp) ==0:
                print(i, end= ' ') 
                flag = 0 
        i+=1 
    
    if flag ==1:
        print(-1) 
        
    return 
                
s = input() 
words = input().split() 
words = words[1::]
find_and_print_substring_index(s, words)




# -----13 Max subarray length with equal 0 and 1 s in it ------  
# 4
# 1 0 1 0
# 4 op

def max_length(binary_array):
    prefix_sums = {} 
    prefix_sums[0] = -1 
    maxlen = 0 
    count = 0 
    for i in range(len(binary_array)):
        count += -1 if binary_array[i] ==0 else 1 
        if count in prefix_sums:
            value = prefix_sums[count] 
            maxlen = max(maxlen, i - value) 
        else:
            prefix_sums[count] = i 
    return maxlen 
    
_  = input() 
binary_array = [int(each) for each in input().split()]
maxlen = max_length(binary_array) 
print(maxlen) 


# -------------------------------------------14 Avoid floods --------------------------------------  
# 6 
# 5 6 0 0 5 6
# -1 -1 5 6 -1 -1

# 7 
# 0 5 0 5 0 5 5 
# -2 

def get_lower_bound(nums_set, num): #(2,3},0)
    nums = list(nums_set) #[2,3]
    if not nums:
        return None 
    if num in nums:
        lower_bound = num 
    else:
        lower_bound = pow(10,6) 
        for each in nums:
            if each>num:
                lower_bound = min(lower_bound,each) 
    
    lower_bound = None if lower_bound == pow(10,6) else lower_bound #2
    return lower_bound #2

def avoid_lakes(lakes):
    ans = [] 
    full_lakes = {}     # Lake number,day when it become full  {5:0, 6:1}
    dry_days = set() # Available days that can be used for drying a lake, {2,3}
    for i,each in enumerate(lakes):
        if not each:
            dry_days.add(i) 
            ans.append(0) 
        else:
            if each in full_lakes:
                lb = get_lower_bound(dry_days, full_lakes[each]) #({2,}, full_lakes[5]=0) => lb=2
                if lb is None:
                    return [-2] 
                
                ans[lb] = each          # ans[2] = 5 means we are drying 5 on day 2 
                dry_days.remove(lb) 
            full_lakes[each] = i        #{5:4, 6:1}
            ans.append(-1)              # on rainy day append -1 
    return ans



_  = input() 
lakes = [int(each) for each in input().split()]
rains_status = avoid_lakes(lakes) 
print(*rains_status) 

# -------15 Maximum length  subArray with sum K ------  
# 5 3
# 6 1 -1 -2 -1
# 5

# 4 4
# 1 1 1 1
# 4

def lenofSubArray(arr,k):
    n = len(arr) 
    mydict = dict() 
    total = 0 
    maxLen = 0 
    for i in range(n):
        total+=arr[i] 
        if total == k:
            maxLen = i+1 
        elif (total - k) in mydict:
            maxLen = max(maxLen, i- mydict[total -k])
            
        if total not in mydict:
            mydict[total] = i 
    return maxLen

n,k = map(int,input().split())
arr = [int(x) for x  in input().split()] 
print(lenofSubArray(arr, k)) 

# --------16 Alert using Same card -----------  
# 7
# daniel daniel daniel luis luis luis luis
# 10:00 10:40 11:00 09:00 11:00 13:00 15:00
# daniel

# 4
# a b a a
# 9:00 10:00 9:45 9:30
# a

from collections import defaultdict 

def alertNames(keyName, keyTime):
    usage = defaultdict(list) 
    for k,name in enumerate(keyName):
        hour,minute = keyTime[k].split(":", 2) 
        time_minutes = 60* int(hour)+int(minute) 
        usage[name].append(time_minutes) 
        
    alert_list = [] 
    for name in usage:
        times = sorted(usage[name]) 
        low = 0 
        high = 2 
        len_times = len(times) 
        while high<len_times:
            if times[high] -times[low] <=60:
                alert_list.append(name) 
                break 
            else:
                low+=1 
                high+=1 
    return sorted(alert_list) 

n = int(input())
keyName = [str(x) for x in input().split()]
keyTime = [str(x) for x in input().split()]
alert = alertNames(keyName, keyTime) 
print(*alert) 

# ------- 17 Total no of subarrays whose sum is k-----  
# 6
# 1 2 3 4 5 2
# 7
# 2

# 3
# 1 1 2
# 7
# 0

from collections import defaultdict 

def subarray_sum(integer_array, target_sum):
    count = 0 
    total = 0 
    prefix_sum = defaultdict(int) 
    prefix_sum[0]+=1 
    for each in integer_array:
        total +=each 
        count += prefix_sum[total - target_sum]
        prefix_sum[total] += 1 
    return count 

_ = int(input())
integer_array = [int(each) for each in input().split()]
target_sum = int(input())
count = subarray_sum(integer_array, target_sum) 
print(count)

# # ------18 Longest substring with k distinct unique charecters ------  
# 1
# 2
# goodday
# 4(oodd) 

# 1
# 1
# aaaaaa
# 6(aaaaaa)

from collections import defaultdict 
def get_substring_length(s,k):
    start,length = 0, 0 
    window = defaultdict(int) 
    for end in range(len(s)):
        window[s[end]] +=1 
        while len(window) == k+1:
            window[s[start]] -= 1 
            if window[s[start]] == 0:
                del window[s[start]] 
            start+=1 
        length = max(length, end-start+1) 
    return length 
    
t = int(input())
for i in range(t):
    k = int(input())
    s = input() 
    print(get_substring_length(s,k))

# ------19 consecutive sets  --------------------------------------  
# 1
# 6 3
# 1 4 6 5 3 2
# 1(yes) 
   
# 1
# 7 4
# 1 2 3 4 5 6 7
# 0(no)

from collections import defaultdict 

def check_sets(nums,k):
    if len(nums) %k !=0:
        return 0 
    freq = defaultdict(int) 
    for i in nums:
        freq[i] +=1 
    freq_details = sorted(freq.items())
    while len(freq_details) >= k:
        num,count = freq_details.pop(0)
        itr = 0 

    for i in range(1,k):
        num+=1 
        key,value = freq_details[itr] 
        if key!= num or value <count:
            return 0 
        elif value>count:
            value = value-count 
            freq_details[itr] = (key,value) 
            itr+=1 
        else:
            freq_details.pop(itr) 
    
    if len(freq_details) >0:
        return 0 
    return 1
    
t = int(input())
while t>0:
    n,k = map(int,input().split())
    arr = [int(x) for x in input().split()] 
    print(check_sets(arr,k)) 
    t-=1 
    
# ------20 Brick wall ------  
# find out how to draw least bricks and return the crossed bridge

# 3
# 6 3 -1
# 3 6 -1
# 3 2 4 -1
# 1


from collections import defaultdict 

def least_bricks(brick_widths):
    edges = defaultdict(int) 
    for row in brick_widths:
        width = 0 
        for j in range(0,len(row)-1 ):
            width +=row[j] 
            edges[width] +=1 

    rows_common_edge = max(edges.values()) if edges else 0 
    return len(brick_widths) - rows_common_edge

brick_widths = [] 
n = int(input())
for _ in range(n):
    line = [int(each) for each in input().split()] 
    line.pop() 
    brick_widths.append(line) 
count = least_bricks(brick_widths)
print(count) 

# ---21 length of smallest subarray to remove for remaining subarray to be divisible by k  -----  
# 5 9
# 3 5 1 6 2
# 2 (2 length subarrays +> 3,5 or 6,2)

# 5 7
# 10 20 30 40 50
# 1

def sum_divisible_by_k(A,k):
    remainder = sum(A)%k 
    last = {0:-1} 
    current_sum = 0 
    min_length = n = len(A) 
    for i,a in enumerate(A):
        current_sum = (current_sum+a) %k 
        last[current_sum] = i 
        want = (current_sum-remainder) %k 
        if want in last:
            min_length = min(min_length, i - last[want])
    return min_length if min_length <n else -1 
    
n,k = map(int,input().split())
A = [int(x) for x in input().split()] 
print(sum_divisible_by_k(A,k))

# -------22 Four sum  ----------------  
# 6 1
# 1 0 -1 0 -2 2

# -2 0 1 2
# -1 0 0 2

# 4 4
# 1 1 1 1

# 1 1 1 1

def twoSum(nums,target):
    res = [] 
    lo, hi = 0, len(nums)-1 
    while lo<hi:
        total = nums[lo]+nums[hi] 
        if total<target:
            lo+=1 
        elif total>target:
            hi-=1 
        elif (nums[lo], nums[hi]) not in res: 
            res.append((nums[lo], nums[hi]))
            lo+=1 
            hi-=1 
    return res 

def fourSum(nums,target):
    details = {}
    n = len(nums) 
    for i in range(n-3):
        for j in range(i+1, n-2):
            t = target - (nums[i] + nums[j])
            key = (nums[i], nums[j])
            if key in details:
                continue 
            if t< nums[j+1]:
                continue 
            details[(nums[i],nums[j])] = twoSum(nums[j+1: ], t)
    all_quads = []
    for key, value in details.items():
        for each in value:
            quad = list(key) + list(each) 
            all_quads.append(quad) 
    return all_quads
        
n,k = [int(each) for each in input().split()]
nums = [int(each) for each in input().split()]
nums.sort() 

ans = fourSum(nums,k) 
for each in ans:
    print(*each) 


# -------------23 Rabbits in Forest --------------  
#each student answers total no of students in their section excluding them. return min number of students that could be in all the sections.

# 3
# 1 1 3
# 6

# 4
# 1 2 3 4
# 14

from collections import defaultdict 

def min_students(answers):
    c = defaultdict(int)
    res = 0 
    for i in answers:
        if c[i] % (i+1) ==0:
            res+=i+1 
        c[i] +=1 
    return res 

n = int(input())
answers = [int(x) for x in input().split()] 
print(min_students(answers)) 


# -----------------24 Top frequent words --------------  
# 6
# the sun rises in the east
# 3
# the east in

# 8
# the sun rises in the east the sun
# 3
# the sun east


import heapq 
from collections import defaultdict 

def kFrequentWords(words,k):
    freq = defaultdict(int) 
    for each in words:
        freq[each] -=1 
    words_Heap = [] 
    words_Heap = [(value, key) for key,value in freq.items()] 
    heapq._heapify_max(words_Heap) 
    
    while len(words_Heap)>k:
        heapq._heappop_max(words_Heap) 
    
    result = [] 
    heapq.heapify(words_Heap) 
    while words_Heap:
        _,word = heapq.heappop(words_Heap) 
        result.append(word) 
    return result 

_ = input() 
words_array = input().split()
k = int(input())
result = kFrequentWords(words_array,k)
print(*result) 

# --------25 Minimum length substring in S which contains all characters of T  -------
# a*bbcs?ddd
# bcd
# bcs?d

# abcdabcdefgh
# abcdef
# abcdef
from collections import defaultdict 

def get_min_window(g_str, target_str):
    curr_sub_str_len = 100000000 
    t_dict, window = defaultdict(int) , defaultdict(int) 
    for char in target_str:
        t_dict[char] +=1 
        
    unique_count,start = 0,0 
    for end in range(len(g_str)):
        ch = g_str[end] 
        
        if ch in t_dict:
            window[ch]+=1 
            if window[ch]<=t_dict[ch]:
                unique_count+=1 
                
        if unique_count >= len(target_str):
            while (
                g_str[start] not in t_dict 
                or window[g_str[start]] > t_dict[g_str[start]]
            ):
                window[g_str[start]] -=1 
                start +=1 
            if end-start+1 < curr_sub_str_len:
                curr_sub_str_len = end-start+1 
                start_index, len_of_ans = start, curr_sub_str_len 
            window[g_str[start]]-=1 
            unique_count -=1 
            start +=1 
    return g_str[start_index: start_index+len_of_ans]
                
first_str, target_str = input(), input() 
print(get_min_window(first_str,target_str)) 

# ---------26 count of all subarray with exactly k distinct elements -
# 1
# 6 3
# 4 4 5 6 5 8
# 6

# 1
# 5 4
# 1 2 3 4 5
# 2

import collections 

def atmost_k(arr,k):
    map_k = collections.Counter() 
    result = i = 0 
    for j in range(len(arr)):
        if map_k[arr[j]] ==0:
            k-=1 
        map_k[arr[j]]+=1 
        
        while k<0:
            map_k[arr[i]] -=1 
            if map_k[arr[i]] ==0:
                k+=1 
            i+=1 
        
        result +=j-i+1 
    return result 
                


def count_subarrays(arr,k):
    return atmost_k(arr,k) - atmost_k(arr,k-1) 

T = int(input()) 
while T>0:
    n,k = [int(x) for x in input().split()] 
    arr = [int(x) for x in input().split()] 
    print(count_subarrays(arr,k))
    T-=1 

