#--------------- 1. Find Kth largest Element -------------
# 5 2
# 4 5 3 1 2
# 4

# 6 3
# 4 -4 5 7 6 8
# 6

from queue import PriorityQueue 

def get_kth_largest(arr, k):
    pq = PriorityQueue() 
    
    for each in arr:
        if pq.qsize() <k:
            pq.put(each) 
        else:
            if pq.queue[0] <each:
                pq.get() 
                pq.put(each) 
    
    return pq.get() 
    
n,k = [int(x) for x in input().split()] 
arr = [int(x) for x in input().split()] 
print(get_kth_largest(arr,k))

#-----------2. Penalty Round --------------------
# 5 4
# 5 10 20 40 50
# 57

# 4 2
# 4 8 16 32
# 36

def minSum(arr,k):
    from queue import PriorityQueue 
    pq = PriorityQueue() 
    
    for each in arr:
        pq.put(-1* each) 
    while not pq.empty() and k>0:
        top = pq.get() 
        top = -1* top//2 
        pq.put(-1* top) 
        k-=1 
    
    total = 0 
    while not pq.empty():
        total+=pq.get() 
    
    return -1* total

n,k = [int(each) for each in  input().split()] 
arr = [int(each) for each in input().split()] 
print(minSum(arr,k))

# ------ 3. minimize the sum of squares of character counts after deleting k characters -------- 
# ljjjkk
# 1
# 9

# aaahhaaha
# 2
# 25
from queue import PriorityQueue 

def min_sum(s,k):
    char_frequency = [ 0 for i in range(26)] 
    for i in s:
        char_frequency[ord(i) -ord('a')] +=1
        pq = PriorityQueue()
        for i in range(26):
            if char_frequency[i] >0:
                pq.put(-char_frequency[i])
    
    pq = PriorityQueue() 
    for i in range(26):
        if char_frequency[i] >0:
            pq.put(-char_frequency[i])
    
    while k>0:
        top = pq.get() 
        top = -top 
        top -=1 
        top = -top 
        pq.put(top) 
        k-=1 
        
    result = sum([each **2 for each in pq.queue])
    return result 

S = input()
K = int(input())
print(min_sum(S,K))

# ----------4.Shrink the array --------
# 5
# 5 10 20 40 50
# 5

# 4
# 4 32 8 16
# 4

from queue import PriorityQueue

def shrink_array(n,arr):
    pq = PriorityQueue() 
    for num in arr:
        pq.put(-1 * num) 
    while pq.qsize()>1:
        top1 = -1 * pq.get()
        top2 = -1 * pq.get()
        
        if top1 != top2:
            diff = abs(top1-top2)
            pq.put(-1* diff)
        
    if pq.qsize() ==1:
        return -1* pq.get() 
    else:
        return -1 
        
n = int(input())
arr = [int(x) for x in input().split()]
print(shrink_array(n,arr))

# -----5 Maximize the profit by selling tickets to m people ------
# 5 5
# 1 2 3 4 5
# 19

# 5 7
# 1 3 2 4 3
# 19

from queue import PriorityQueue

def maxProfit(arr,m):
    pq = PriorityQueue()
    for num in arr:
        pq.put(-1*num) 
    profit = 0 
    while m>0:
        top = pq.get()
        top = -1*top
        if top == 0:
            break 
        profit +=top 
        top -=1 
        top = -top
        pq.put(top) 
        m-=1
    print(profit) 

n,m = map(int,input().split())
arr = [int(x) for x in input().split()]
maxProfit(arr,m)

# --------------6 maximum Player Level ----------
# 7 3 2
# 5 3 8 7 10 15 26

# 6

from queue import PriorityQueue 

def farthest_level(damages, health, slots):
    pq = PriorityQueue() 
    n = len(damages) 
    
    for i in range(n-1):
        if damages[i] >= damages[i+1]: 
            continue
        
        diff = damages[i+1] - damages[i] 
        pq.put(diff) 
        
        if pq.qsize() > slots:
            health -= pq.get() 
            
        if health < 0:
            return i+1 
    
    return n 


n, health, slots = [int(each) for each in input().split()]
damages = [int(each) for each in input().split()]
print(farthest_level(damages, health, slots))

#----------7 Distribution of chocolates -----------
# 2
# 3 3 4
# 1 2 3
# 2 2 3
# 2 2 5
# 1 3
# 3 2

# NO
# YES

from queue import PriorityQueue

def check_possibility(old, extra, M,N,K):
    extra.sort(reverse = True) 
    pq = PriorityQueue()
    for x in range(N):
        pq.put(old[x])
    flag = True 
    for i in range(M):
        curr_add = pq.get()+extra[i] 
        if curr_add > K:
            flag = False 
            break 
        pq.put(curr_add) 
    
    if flag:
        print("YES")
    else:
        print('NO')
        
T = int(input())
while T>0:
    N,M,K = [int(x) for x in input().split()]
    old = [int(x) for x in input().split()]
    extra = [int(x) for x in input().split()]
    check_possibility(old, extra, N,M,K)

# -----------8 size of Kth smallest pencil -----
# 3 12
# 5 12
# 10 14
# 13 20
# 13

from queue import PriorityQueue
def kth_smallest_number(arr, n, k):
    pq = PriorityQueue() 
    for each in arr:
        pq.put(each) 
    count= 1 
    while count <k:
        interval = pq.get() 
        if interval[0] < interval[1]:
            pq.put([interval[0]+1, interval[1]])
        count+=1 
    return pq.queue[0][0] 

n,k = [int(each) for each in input().split()]
arr = []
for i in range(n):
    arr.append([int(each) for each in input().split()])

print(kth_smallest_number(arr,n,k))

# -----------9. Seating Arrangement --------
# 5
# 5 10 15 20 25
# 0100100111

# 1 1 2 3 3 4 5 5 4 2

# 5
# 1 2 3 4 7
# 0001010111

# 1 2 3 3 4 4 5 5 2 1

from   queue import PriorityQueue 
def seating_order(width_of_seats, order):
    N = len(width_of_seats) 
    ans = [] 
    
    width_row_details = [[-width_of_seats[i], i+1] for i in range(N)] 
    width_row_details.sort(reverse= True) 
    seats = PriorityQueue() 
    index = 0 
    
    for each in order:
        if each == "0":
            ans.append(width_row_details[index][1])
            seats.put(width_row_details[index])
            index+=1 
        else:
            ans.append(seats.get()[1]) 
    print(*ans) 

N = int(input())
width_of_seats = [int(x) for x in input().split()]
order = input() 
seating_order(width_of_seats, order) 

#----------- 10. minimum cost of hiring --------
# 8 20 5 -1
# 60 50 40 -1
# 2

# 104.000 

# 10 15 20 -1
# 10 20 40 -1
# 2

# 33.333

from queue import PriorityQueue 

def GetWage(quality, wage, num_workers):
    N = len(quality) 
    workers_profile = [] 
    for i in range(N):
        workers_profile.append((wage[i]/quality[i], quality[i]))
    
    workers_profile.sort() 
    
    pq = PriorityQueue() 
    for each in workers_profile[:num_workers]:
        pq.put(-1* each[1]) 
    
    sum_qualities = -1 * sum(pq.queue) 
    total_wage = sum_qualities * workers_profile[num_workers-1][0] 
    
    for i in range(num_workers,N):
        max_ = -1*pq.queue[0] 
        if max_ > workers_profile[i][1]:
            pq.get() 
            pq.put(-1*workers_profile[i][1])
            sum_qualities = sum_qualities+workers_profile[i][1] - max_ 
            
            ratio = workers_profile[i][0] 
            total_wage = min(total_wage, sum_qualities*ratio) 
    
    return total_wage

quality = [int(each) for each in input().split()] 
quality.pop() 
wage = [int(each) for each in input().split()] 
wage.pop() 

num_workers = int(input())
total_wage = GetWage(quality, wage, num_workers) 
print("%.3f" % total_wage) 

#--------- 11. climbing Pillars -----------
# 8 3 1
# 5 2 6 4 7 7 8 10

# 5

# 6 2 2
# 4 8 5 10 7 11

# 4

from queue import PriorityQueue

def futhest_pillar(pillars, bricks, ladders):
    pq = PriorityQueue() 
    for i in range(len(pillars)):
        climb = pillars[i+1] - pillars[i] 
        if climb <=0:
            continue 
        
        pq.put(climb) 
        if pq.qsize() <= ladders:
            continue 
        bricks -=pq.get() 
        if bricks < 0:
            return i 
    return len(pillars) - 1
        

N, bricks, ladders = [int(x) for x in input().split()]
pillars = [int(x) for x in input().split()]
print(futhest_pillar(pillars, bricks, ladders))

# --------- 12. Kth smallest element in a sorted martrix ------
# each of the rows and columns is sorted in non decreasing order

# 3 5
# 1 2 3
# 3 3 4
# 5 5 5

# 3

# 3 5
# 1 2 3
# 4 5 6
# 7 8 9

# 5


from queue import PriorityQueue

def kth_smallest_number(matrix,k):
    size = len(matrix) 
    pq = PriorityQueue() 
    suitable_rows = min(size,k)

    # Picking up first element of each row, for the first iteration 
    for i in range(suitable_rows):
        pq.put((matrix[i][0], (i,0)))
        
    while k:
        least_value, (i,j) = pq.get() 

        if j < size-1:
            pq.put((matrix[i][j+1], (i,j+1)))
        k-=1 
    
    return least_value    

n,k= [int(each) for each in input().split()]
i=0 
matrix=[]
while i<n:
    row = [int(each) for each in input().split()]
    matrix.append(row) 
    i+=1 

print(kth_smallest_number(matrix,k))


# -----------13 Medians of array ----------- 
# 5 3
# 1 2 4 5 3
# 0 1 4 [ 0- range] to get median

# 1.00 1.50 3.00 

# 6 4
# 4 1 5 6 -8 2
# 0 1 3 4

# 4.00 2.50 4.50 4.00 


from queue import PriorityQueue 

small = PriorityQueue() 
large = PriorityQueue() 
itr = 0 

def find_median(arr, index):
    global itr 
    while itr<=index:
        small.put(-1 * arr[itr]) 
        large.put(-1 * small.queue[0]) 
        small.get() 
        if small.qsize() < large.qsize():
            small.put(-1 * large.queue[0]) 
            large.get() 
        itr+=1 
    
    if small.qsize() > large.qsize():
        print("%.2f" % (-1 * small.queue[0]), end= " ") 
    else:
        print("%.2f" % (-1 * (small.queue[0] - large.queue[0]) / 2.0), end= " ") 
        
def solve_queries(arr, queries):
    for i in queries:
        find_median(arr, i) 

N,K = [int(x) for x in input().split()] 
arr = [int(x) for x in input().split()][:N]
queries = [int(x) for x in input().split()][:K] 
solve_queries(arr, queries)

# ----------14 Pairs with smallest sums --------------
# 3
# 1 2 3
# 3
# 4 5 6
# 3

# 1 4
# 1 5
# 2 4

# 4
# 1 2 3 4
# 4
# 4 5 6 7
# 6

# 1 4
# 1 5
# 2 4
# 1 6
# 2 5
# 3 4

from queue import PriorityQueue

def smallestPairs(array1, array2, num_pairs):
    pq = PriorityQueue() 
    length_array1 = len(array1) 
    length_array2 = len(array2) 
    
    for i in range(length_array1):
        if i < num_pairs:
            pq.put((array1[i] + array2[0], (i,0))) 
        
    result = [] 
    while pq and num_pairs:
        (least_sum, (i,j)) = pq.get() 
        result.append((array1[i], array2[j]))
        if j+1 < length_array2:
            pq.put((array1[i] + array2[j+1], (i,j+1)))
        num_pairs -=1 
    return result

m= input() 
array1 = [int(each) for each in input().split()] 
n= input() 
array2 = [int(each) for each in input().split()]
num_pairs = int(input())

pairs = smallestPairs(array1, array2, num_pairs) 

for each in pairs:
    print(*each) 

# ----------------15. Leader of Tribe ---------------- 
# 4 5
# 2023 4
# 2021 3
# 2021 2
# 2024 8
# 2022 10

# 2023

# 4 5
# 2021 1
# 2023 4
# 2021 10
# 2024 6
# 2022 8
# -1

from queue import PriorityQueue 

def find_year(arr, n):
    curr_year = 0 
    alpha = arr[0] 
    arr.sort(key=lambda x:x[1]) 
    
    pq = PriorityQueue() 
    pq.put(arr[0]) 
    for i in range(1,len(arr)):
        if arr[i][1] == arr[i-1][1]:
            pq.put(arr[i])
        else:
            curr_year +=1 
            temp = pq.get() 
            if temp == alpha and curr_year <=n:
                return 2020 + curr_year 
            
            pq.put(arr[i]) 

    while curr_year < n and pq.qsize() >0:
        curr_year +=1 
        if curr_year >n:
            break 
        temp = pq.get() 
        if temp == alpha:
            return 2020 + curr_year 
    return -1 

N,M = [int(x) for x in input().split()]
arr = []
for i in range(M):
    inp = [int(x) for x in input().split()]
    arr.append((-inp[1], inp[0])) 
print(find_year(arr, N))

# ------ 16. Kth smallest Prime Freaction -------- 
# 5 4
# 1 2 3 5 7

# 1 3

# 4 3
# 1 2 2 3

# 1 2

from queue import PriorityQueue 

def kthSmallestFraction(primes, k):
    fractions_mineheap = PriorityQueue() 
    for i in range(len(primes)):
        fractions_mineheap.put((primes[i]/primes[-1], (i, len(primes) -1)))
    while k:
        (least_fraction, (p,q)) = fractions_mineheap.get() 
        
        if primes[p] < primes[q-1]:
            fractions_mineheap.put((primes[p] / primes[q-1], (p,q-1))) 
        k-=1 
        
    return [primes[p], primes[q]]

n,k = [int(each) for each in input().split()] 
primes = [int(each) for each in input().split()] 

result = kthSmallestFraction(primes, k) 
print(*result)


# --------- 17.  Maximum Team performance ---------

# 5 2
# 2 3 4 5 8
# 5 4 3 1 2

# 24

# 7 3
# 1 2 10 3 1 5 8
# 5 1 4 3 9 7 2

# 64


import heapq
from queue import PriorityQueue 
mod = 10**9 + 7 

def maxPerformance(n, speed, efficiency, k):
    pq = PriorityQueue() 
    result = speedSum = 0 
    for e,s in sorted(zip(efficiency, speed), reverse = 1):
        pq.put(s) 
        speedSum += s 
        if pq.qsize() > k:
            speedSum -= pq.get() 
        result = max(result, speedSum*e) 
    result = result % mod 
    return result 
    
n,k = [int(x) for x in input().split()]
speed = [int(x) for x in input().split()]
efficiency = [int(x) for x in input().split()]
print(maxPerformance(n, speed, efficiency, k))


# ------------------ 18 Minimize Difference ---- 
# 5
# 1 2 3 4 5

# 3

# 4
# 10 7 5 6

# 2

from queue import PriorityQueue 

def minimum_difference(arr):
    pq = PriorityQueue() 
    min_val = float("inf") 
    
    for val in arr:
        if val%2 ==1:
            val*=2 
        if val < min_val:
            min_val = val 
        pq.put(-val) 
    
    curr_max = pq.get() 
    res = (-curr_max) -min_val 
    
    while curr_max %2 ==0:
        pq.put(curr_max /2) 
        if (-curr_max) / 2 < min_val:
            min_val = (-curr_max) /2 
        curr_max = pq.get() 
        res = min(res, (-curr_max) - min_val) 
    return res 

n = int(input())
arr = [int(val) for val in input().split()] 
print(int(minimum_difference(arr)))

# ----------- 19 Students Partial Score ------
# 7 3 6
# 20 8 22 4 12 10 14

# 26

# 9 5 8
# 1 2 3 4 5 6 7 8 9

13

import heapq 

def get_total(min_heap, p, q):
    heapq.heapify(min_heap)
    count = p 
    while count:
        heapq.heappop(min_heap) 
        count-=1 
    count = q-p 
    total = 0 
    while count>1:
        total += heapq.heappop(min_heap) 
        count-=1 
    
    return total 

n,p,q = [int(each) for each in input().split()] 
min_heap = [int(each) for each in input().split()] 
print(get_total(min_heap, p,q))

# ---------- 20 Rearrange Students --------
# 7 3
# 6 5 4 3 8 10 9

# 3 4 5 6 8 9 10


# 8 4
# 10 9 8 7 4 70 60 50

# 4 7 8 9 10 50 60 70

from heapq import heappop, heappush, heapify 

def sort_k(student_ids, k):
    heap = student_ids[:k+1] 
    heapify(heap) 
    
    target_index = 0 
    for rem_elmnts_index in range(k+1, n):
        student_ids[target_index] = heappop(heap) 
        heappush(heap, student_ids[rem_elmnts_index]) 
        target_index +=1 
    
    while heap:
        student_ids[target_index] = heappop(heap) 
        target_index +=1 
        

n,k = [int(x) for x in input().split()] 
student_ids = [int(each) for each in input().split()]
sort_k(student_ids, k)
print(*student_ids) 

#------ 21 Buildings Outline -----------
# 2
# 1 12 1
# 2 14 2

# 1 1
# 2 2
# 14 0

# 4
# 1 8 9
# 2 6 14
# 4 11 11
# 14 19 9

# 1 9
# 2 14
# 6 11
# 11 0
# 14 9
# 19 0

from heapq import * 

def print_building_outline(buildings):
    cur = 0 
    curr_endpoint = 0 
    curr_height = -1 
    n = len(buildings) 
    res, pq = [], [] 
    
    while (cur < n or len(pq) != 0):
        if len(pq) == 0:
            curr_endpoint = buildings[cur][0] 
        else:
            curr_endpoint = pq[0][1] 
        
        if (cur >= n or buildings[cur][0] >curr_endpoint):
            while(len(pq)  !=0  and pq[0][1] <=curr_endpoint):
                heappop(pq) 
        else:
            curr_endpoint = buildings[cur][0] 
            while cur<n and buildings[cur][0] == curr_endpoint:
                heappush(pq, (-buildings[cur][2], buildings[cur][1]))
                cur+=1 
        
        curr_height = 0 if len(pq) ==0 else -pq[0][0] 
        if(len(res) ==0 or (res[-1][1] != curr_height)):
            res.append([curr_endpoint, curr_height])
            print(curr_endpoint, curr_height)
    return 
              
n = int(input())
buildings = [] 
for i in range(n):
    l,r,h = map(int, input().split())
    buildings.append([l,r,h]) 
print_building_outline(buildings) 


# ------------- 22. reminder Jarvis -----------
# 2 5
# 2012 200
# 2015 300

# 2012 2015 2012 2012 2015

# 3 6
# 100 100
# 101 200
# 102 300

# 100 100 101 100 102 100


import heapq
def tasks_order(tasks, k):
    heapq.heapify(tasks) 
    
    outputs = [] 
    while k:
        task = heapq.heappop(tasks) 
        outputs.append(task[1]) 
        new_interval = task[0] + task[2]
        heapq.heappush(tasks, [new_interval, task[1], task[2]])
        k -=1 
        
    return outputs
    
n,k = [int(x) for x in input().split()] 
tasks = [] 

for i in range(n):
    nums = [int(x) for x in input().split()] 
    nums = nums[::-1] 
    nums.append(nums[0]) 
    tasks.append(nums) 

print(*tasks_order(tasks,k)) 

# ------------- 23. Juggling Problem ------ 
# 1
# 31
# VALID

# 1
# 321
# INVALID

# 1
# 76
# INVALID

from heapq import heappush, heappop
def check_siteswap(pattern):
    pattern_len = len(pattern) 
    total_sum = 0 
    for c in pattern:
        total_sum += int(c) 
    
    if total_sum %pattern_len !=0:
        return False 
    
    balls = total_sum//pattern_len 
    
    pq = [] 
    for i in range(pattern_len * 100):
        if pattern[i% pattern_len] == '0':
            if len(pq) != 0 and pq[0] == i:
                return False 
        else:
            if balls > 0 and len(pq) == 0 or pq[0] > i:
                balls -=1 
                heappush(pq,i+ ord(pattern[i%pattern_len]) - ord("0"))
                continue 
            
            if len(pq) !=0:
                if pq[0] == i:
                    heappop(pq) 
                    if len(pq) != 0 and pq[0] == i:
                        return False 
                else:
                    return False 
            heappush(pq, i+ord(pattern[i % pattern_len]) - ord('0'))
    
    return True

T = int(input())
for _ in range(T):
    pattern = input() 
    if check_siteswap(pattern):
        print("VALID") 
    else:
        print("INVALID") 
        
# ------------ 24.  Find minimum range --------- 

# 3
# 3 1 4 7
# 3 4 6 9
# 3 8 11 15

# 6 8

# 2
# 2 5 5
# 2 7 8

# 5 7

import heapq 

def smallest_range(nums):
    pq = [(row[0], i, 0) for i, row in enumerate(nums)] 
    heapq.heapify(pq)
    
    cur_max = max(row[0] for row in nums) 
    cur_range = 1e9 
    while pq:
        cur_min, i, j = heapq.heappop(pq)
        if cur_max - cur_min < cur_range:
            start = cur_min 
            end = cur_max 
            cur_range = cur_max -cur_min 
            
        if j+1 == len(nums[i]):
            return (start,end) 
        
        v = nums[i][j+1] 
        cur_max = max(cur_max,v) 
        heapq.heappush(pq,(v,i,j+1)) 

k = int(input())
nums = [] 
for _ in range(k):
    lis = [int(val) for val in input().split()][1:] 
    nums.append(lis) 
ans = smallest_range(nums) 
print(ans[0], ans[1]) 

# ----------- 25 Hungry Merchant ------------ 
# 1
# 2 10
# 100 15
# 95

# 1
# 4 20
# 1 50 70 100
# 165


import math 
from heapq import heappop, heappush 

def total_chocolates(chocolates,k):
    heap = []
    for each_box in chocolates:
        heappush(heap, -each_box)
        max_chocolates = -heappop(heap) 
        if max_chocolates >k:
            remaining_chocolates = min(math.ceil(0.9 * max_chocolates), max_chocolates-k) 
            heappush(heap, -remaining_chocolates) 
    return -sum(heap)

t = int(input())
while t:
    n,k = [int(x) for x in input().split()]
    chocolates = [int(x) for x  in input().split()]
    print(total_chocolates(chocolates,k))
    t-=1 
    

#--------- 26 Ravi's Book Reading -------
# 2 2 592
# PRIDEANDPREJUDICE 432 
# DONQUIXOTE 863
# 863 GREATGATSBY 218
# 1082 CRIMEANDPUNISHMENT 545
# 1673

# 3 1 300
# ABC 600
# BCA 200
# CAB 700
# 1000 Killer 400
# 2200


from heapq import heappop, heappush

def totalpages(books_to_read, gifts):
    target_book = 'MAGYK'
    time_taken_to_read = 0 
    lastbook = None 
    while lastbook != target_book:
        while len(gifts) != 0 and time_taken_to_read >= gifts[0][0]:
            _, name, pages = heappop(gifts) 
            heappush(books_to_read, (name, pages))
        lastbook,pages = heappop(books_to_read) 
        time_taken_to_read +=pages 
    return time_taken_to_read

n,m,k = [int(i) for i in input().split()] 
books_to_read = []
for i in range(n):
    name, pages = input().split() 
    pages = int(pages) 
    heappush(books_to_read, (name, pages))

heappush(books_to_read, ("MAGYK", k))

gifts = [] 
for i in range(m):
    gift_time, name, pages = input().split() 
    gift_time = int(gift_time) 
    pages = int(pages) 
    heappush(gifts, (gift_time, name, pages))

print(totalpages(books_to_read, gifts))

#-------------- 27 Free Time of Employees ------------
# 3
# 3 4 7 8 -1
# 3 5 -1
# 8 9 -1

# 5 7

# 3
# 2 6 12 14 -1
# 4 8 -1
# 4 10 18 20 -1

# 10 12
# 14 18

from queue import PriorityQueue 

def get_free_times(intervals):
    result = []
    pq = PriorityQueue() 
    for i in intervals:
        for j in i:
            pq.put(j) 
    prev_start = pq.queue[0][0] 
    prev_end = pq.queue[0][1] 
    pq.get() 
    
    while pq.qsize() > 0:
        curr_start = pq.queue[0][0] 
        curr_end = pq.queue[0][1] 
        if curr_start > prev_end:
            result.append([prev_end, curr_start]) 
            prev_start = curr_start 
            prev_end = curr_end 
        elif curr_start <= prev_end:
            if prev_end < curr_end:
                prev_end = curr_end 
        
        pq.get() 
    
    return result 
        

N = int(input())
intervals = [] 
for i in range(N):
    employee = [int(x) for x in input().split()] 
    employee.pop() 
    employee= [
            [employee[2*i], employee[2*i+1]] for i in range(len(employee) //2)
        ]
    intervals.append(employee) 
    
result  = get_free_times(intervals) 
if len(result) !=0:
    for i in result:
        print(i[0], i[1]) 
else:
    print(-1) 
    

