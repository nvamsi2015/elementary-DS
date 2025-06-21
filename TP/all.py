# ------- p1 Find pairs whose sum is k in a sorted array ( arrays p2) --------------
# 5 10
# 2 3 5 6 8  
# op: 0 4

def indices_of_pairs(nums, k):
    p1 = 0
    p2 = len(nums)-1 
    while p1<p2:
        sum = nums[p1]+nums[p2] 
        if sum == k:
            return p1, p2
        if sum < k:
            p1+=1 
        else:
            p2-=1 
    return p1, p2 # to handle i/p:  5 6 8 11 14 15 16 18 20 where no pair is there. still we return p1, p2
            
    

n,k = map(int,input().split())
nums = [int(x) for x in input().split()]
indices_of_pairs(nums, k)
p1,p2 = indices_of_pairs(nums, k)
if(p1==p2):
    print('-1')
else:
    print(str(p1) + " " + str(p2))

#---------