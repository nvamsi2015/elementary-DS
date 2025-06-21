# ------------ 1. match elements in sets ---

# 4 4
# 12 13 14 12
# 10 12 13 16

# 0

set1_len, set2_len = [int(x) for x in input().split()] 
if set1_len <= set2_len:
    print(0)
else:
    set1 = [int(x) for x in input().split()]
    set2 = [int(x) for x in input().split()]
    print(set1_len - set2_len, min(set1))

#------- 2. plant scarecrows ---    0000000000000000021
# 4
# 0 0 1 0
## 2

def get_count(field):
    s,k = 0,1 
    while k <= len(field):
        if field[k-1] == 0:
            s+=1 
            k+=3
        else:
            k+=1 
    return s
N = input()
field = [int(x) for x in input().split()]

print(get_count(field))

#------- 3.


#-------


#-------

#-------

#-------

#-------

#-------

#-------

#-------

#-------

#-------

#-------

#-------

#-------

#-------

#-------

#-------

#-------

#-------

