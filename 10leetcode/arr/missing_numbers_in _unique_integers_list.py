# --------- q1. find missing elements in unique array --------

# You are given an integer array nums consisting of unique integers.
# Originally, nums contained every integer within a certain range. However, some integers might have gone missing from the array.
# The smallest and largest integers of the original range are still present in nums.
# Return a sorted list of all the missing integers in this range. If no integers are missing, return an empty list.
# Note: Please do not copy the description during the contest to maintain the integrity of your submissions.

input: nums = [1,4,2,5]
output: [3]

input: nums: [7,8,6.9]
output: []

imput: nums = [5,1]
output: [2,3,4]

# ----- solution -----

from queue import PriorityQueue


class Solution:
    def findMissingElements(self, nums: List[int]) -> List[int]:
        ans = []
        pq = PriorityQueue()
        for num in nums:
            pq.put(num)

        temp1 = pq.get()

        while  not pq.empty():
            temp2 = pq.get() 

            if temp2-temp1 ==1 and not pq.empty() :
                temp1 = temp2 
                temp2 = pq.get() 

            if temp2-temp1>1:
                for missing_num in range(temp1+1, temp2):
                    ans.append(missing_num) 
            
            temp1 = temp2 

        return ans