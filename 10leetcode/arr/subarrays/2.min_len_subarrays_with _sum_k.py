# ---------------leetcode 209, array has only positive numbers (3rd problem in arrays in nxt) -------------------

# Example 1:

# Input: target = 7, nums = [2,3,1,2,4,3]
# Output: 2
# Explanation: The subarray [4,3] has the minimal length under the problem constraint.
# Example 2:

# Input: target = 4, nums = [1,4,4]
# Output: 1
# Example 3:

# Input: target = 11, nums = [1,1,1,1,1,1,1,1]
# Output: 0


class Solution:
    def minSubArrayLen(self, target: int, nums: List[int]) -> int:
        if not nums:
            return -1 
        
        left = 0 
        sum = 0 
        intMax = 1000000 
        ans = intMax
        n = len(nums)

        for i in range(n):
            sum +=nums[i] 
            while sum>=target:
                ans = min(ans, i-left+1)
                sum-=nums[left]
                left+=1
                
        
        if ans != intMax:
            return ans 
        else:
            return 0 

# ---------------leetcode 862, arrays with negative numbers also ---------------------

# Example 1:

# Input: nums = [1], k = 1
# Output: 1
# Example 2:

# Input: nums = [1,2], k = 4
# Output: -1
# Example 3:

# Input: nums = [2,-1,2], k = 3
# Output: 3

# Input: nums = [84,-37,32,40,95]
# output: 3

from collections import deque
import math

class Solution:
    def shortestSubarray(self, nums: List[int], k: int) -> int:
        if not nums:
            return -1 
        
        n = len(nums)
        ps = [0]*(n+1) 
        for i in range(n):
            ps[i+1]=ps[i]+nums[i]

            
        dq = deque() 
        min_len = math.inf

        for j in range(n+1):
            while dq and ps[j]-ps[dq[0]] >=k:
                i= dq.popleft() 
                min_len = min(min_len, j-i)
            while dq and ps[j]<=ps[dq[-1]]:
                dq.pop()
            dq.append(j)
                
        
        if min_len != math.inf:
            return min_len 
        else:
            return -1
        


# ------------------------












