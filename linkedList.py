# ------ p1 print elements of a linkedlist  ------

# 1 2 3 4 5 -1

# 1 2 3 4 5

class Node:
    def __init__(self,data):
        self.data = data
        self.next = None
class LinkedList:
    def __init__(self):
        self.head = None 
    def printElements(self):
        temp = self.head 
        while temp:
            print(temp.data, end=" ") 
            temp = temp.next
        
        

llist = LinkedList()
li = [int(x) for x in input().split()]
llist.head = Node(li[0])

temp = llist.head
for val in li[1:-1]:
    temp.next = Node(val) 
    temp=temp.next
# print(llist)        # < _ _ main _ _ .LinkedList object at 0x7f6dc5d83fd0> 
# print(llist.head)   # < _ _ main _ _ .Node object at 0x7f6dc5d83cd0>
# print(llist.head.data) # 1 
# print(llist.head.next.data) # 2
# print(llist.head.next.next.next.next.data) #5
# print(llist.head.next) # < _ _ main _ _ .Node object at 0x7f6dc5d83cd40
llist.printElements()  # 1 2 3 4 5



# ------ p2 print multiples of 7 ------

# 1 3 5 7 11 14 21 22 -1

# 7 14 21
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None 

class LinkedList:
    def __init__(self):
        self.head = None 
    def print7multiples(self):
        temp = self.head 
        seven_multiples_present = False
        while temp:
            if temp.data%7 == 0:
                seven_multiples_present = True 
                print(temp.data, end = " ")
            temp = temp.next 
        if not seven_multiples_present:
            print(-1)

llist = LinkedList() 
li = [int(x) for x in input().split()]
llist.head = Node(li[0]) 
temp = llist.head 
for val in li[1:-1]:
    temp.next = Node(val) 
    temp = temp.next 
llist.print7multiples()





# class Node:
#     def __init__(self, data):
#         self.data = data
#         self.next = None 


# class LinkedList:
#     def __init__(self):
#         self.head = None 
    
#     def print7multiples(self):
#         temp = self.head 
#         flag = True
#         while temp:
#             if temp.data % 7 == 0:
#                 print(temp.data, end=" ")
#                 flag = False
#             temp = temp.next 
#         if flag:
#             print (-1)
        
        

# llist = LinkedList()
# li = [int(x) for x in input().split()]
# llist.head = Node(li[0]) 

# temp = llist.head
# for val in li[1:-1]:
#     temp.next = Node(val)
#     temp = temp.next 

# llist.print7multiples()


# ------ p3 insert node at kth position in LL ------ 

# 1 2 3 4 5 6 -1
# 3

# 1 2 0 3 4 5 6 

class Node:
    def __init__(self,data):
        self.data = data 
        self.next = None 


class LinkedList:
    def __init__(self):
        self.head = None 
        
    def printList(self):
        temp = self.head 
        while temp:
            print(temp.data, end = " ")
            temp = temp.next 
        
    def insertNodeAtKPostion(self, head, k):
        dummy_head, new_node = Node(0), Node(0) 
        dummy_head.next  = head 
        temp = dummy_head 
        for _ in range(k-1):
            temp = temp.next 
        new_node.next = temp.next
        temp.next = new_node
        #if k=1 change head to new_node
        if head == new_node.next:
            head = new_node 
        return head

llist = LinkedList() 
li = [int(x) for x in input().split()]
k = int(input())
llist.head = Node(li[0])
temp = llist.head 
for val in li[1:-1]:
    temp.next = Node(val) 
    temp = temp.next 

llist.insertNodeAtKPostion(llist.head, k)
llist.printList()

# ------ p4 Delete node at kth position in LL  ------

# 1 2 3 4 -1
# 3

# 1 2 4 
class Node:
    def __init__(self,data):
        self.data = data
        self.next= None 
    
class LinkedList:
    def __init__(self):
        self.head = None 
    
    def printList(self):
        if self.head == None:
            print(-1) 
        temp = self.head 
        while temp:
            print(temp.data, end = " ")
            temp = temp.next 
    
    def delete_at_kth_postion(self, head,k):
        if k==1:
            head = head.next 
            return head
        
        dummy_head = Node(0) 
        dummy_head.next = head 
        temp = dummy_head 
        for _ in range(k-1):
            temp = temp.next 
        temp.next = temp.next.next 
        return head 
        
llist = LinkedList() 
li = [int(x) for x in input().split()]
k = int(input())

llist.head = Node(li[0]) 
temp = llist.head
for val in li[1:-1]:
    temp.next = Node(val) 
    temp = temp.next 

llist.head = llist.delete_at_kth_postion(llist.head,k)
llist.printList() 
    
# ------ p5 odd even linked lists ------

# 2 4 6 8 10 -1

# 2 6 10 4 8 

class Node:
    def __init__(self,data):
        self.data = data
        self.next = None 

class LinkedList:
    def __init__(self):
        self.head = None 
        
    def printList(self):
        temp = self.head 
        while temp:
            print(temp.data, end = ' ')
            temp = temp.next 
    
    def oddEvenList(self,head):
        dummy1 = odd = Node(0) 
        dummy2 = even = Node(0) 
        while head:
            odd.next = head
            even.next = head.next 
            odd = odd.next 
            even = even.next 
            head = head.next.next if even else None 
        
        odd.next = dummy2.next 
        return dummy1.next 
    



llist = LinkedList()
li = [int(x) for x in input().split()]

llist.head = Node(li[0]) 
temp = llist.head 

for val in li[1:-1]:
    temp.next = Node(val) 
    temp = temp.next 

ans = LinkedList() 
ans.head = ans.oddEvenList(llist.head) 
ans.printList() 


# ------ p6 find middle element of a LL ------

# 1 2 3 4 5 -1

# 3
class Node:
    def __init__(self,data):
        self.data = data 
        self.next = None 

class LinkedList:
    def __init__(self):
        self.head = None 
    
    def printList(self):
        temp = self.head 
        while temp:
            print(temp.data, end = " ")
            temp = temp.next 
            
    def middleNode (self, head):
        slow = fast = head 
        while fast and fast.next:
            slow = slow.next 
            fast = fast.next.next 
        return slow 
        

llist = LinkedList()
li = [int(x) for x in input().split()] 

llist.head = Node(li[0])
temp = llist.head

for val in  li[1:-1]:
    temp.next = Node(val) 
    temp = temp.next 

middle = llist.middleNode(llist.head) 
print(middle.data)

# ------ p7 remove kth node from the last ------
# 1 2 3 4 5 6 -1
# 3

# 1 2 3 5 6 
class Node:
    def __init__(self, data):
        self.data = data 
        self.next = None 
    
class LinkedList: 
    def __init__(self):
        self.head = None 
    
    def printList(self):
        temp = self.head 
        if self.head == None:
            print(-1)
            return 
        while (temp):
            print(temp.data, end= ' ')
            temp = temp.next 
            
    def removeNthFormEnd(self,head,n):
        fast = slow = head 
        for _ in range(n):
            fast = fast.next 
        if not fast:
            return head.next 
        while fast.next:
            fast = fast.next 
            slow = slow.next 
        slow.next = slow.next.next 
        return head
        



llist = LinkedList() 
li = [int(x) for x in input().split()] 

n = int(input())
llist.head = Node(li[0])
temp = llist.head 

for val in li[1:-1]:
    temp.next = Node(val) 
    temp = temp.next 
llist.head = llist.removeNthFormEnd(llist.head,n) 
llist.printList() 

# ------ p8 Delete last occurrence of node in ll ------
# 1 2 3 8 3 4 -1
# 3

# 1 2 3 8 4 


class Node:
    def __init__(self,data):
        self.data = data
        self.next = None 

class LinkedList:
    def __init__(self):
        self.head = None 
    
    def printList(self):
        if self.head == None:
            print(-1) 
            return 
        temp = self.head 
        while temp:
            print(temp.data, end = " ")
            temp = temp.next 
    
    def delete_last_k(self, head, k):
        temp = head 
        k_ptr = None 
        while temp != None:
            if temp.data ==k:
                k_ptr= temp
            temp = temp.next 
        #if there is only one node 
        if k_ptr == head and k_ptr.next == None:
            head = None 
            return head 
        # if k_ptr is last node 
        if k_ptr != None and k_ptr.next == None:
            temp = head 
            while temp.next !=k_ptr:
                temp = temp.next 
            temp.next = None 
            return head 
            # if k_ptr is between 1st and last none 
        if k_ptr!= None and k_ptr.next != None:
            k_ptr.data = k_ptr.next.data 
            k_ptr.next = k_ptr.next.next 
            return head 
            
llist = LinkedList()
li = [int(val) for val in input().split()] 
li = li[:len(li) -1]
k = int(input())

llist.head = Node(li[0])
temp = llist.head 
for val in li[1:]:
    temp.next = Node(val) 
    temp = temp.next 
llist.head = llist.delete_last_k(llist.head, k) 
llist.printList()


# ------ p9 palindrome list or not ------
# 1
# 10 12 12 10 -1

# YES

class Node:
    def __init__(self,data):
        self.data = data 
        self.next = None 

class LinkedList:
    def __init__(self):
        self.head = None 
        
    def printList(self):
        temp = self.head 
        while temp:
            print(temp.data, end= " ")
            temp = temp.next 
    
    def check_palindrome(self,head):
        if head is None:
            return True 
            
        # find the end of the first half and reverse second half 
        first_half_end = self.end_of_first_half(head) 
        second_half_start = self.reverse_list(first_half_end.next) 
        
        result = True 
        first_position  = head 
        second_position = second_half_start
        while result and second_position is not None:
            if first_position.data != second_position.data:
                result = False 
            first_position = first_position.next 
            second_position = second_position.next 
        
        #restore the list and retrun the result
        first_half_end.next = self.reverse_list(second_half_start) 
        return result 
    
    def end_of_first_half(self,head):
        fast = head 
        slow = head 
        while fast.next is not None and fast.next.next is not None:
            fast = fast.next.next 
            slow = slow.next 
        return slow 
    
    def reverse_list(self, head):
        previous = None 
        current = head 
        while current is not None:
            next_node = current.next 
            current.next = previous 
            previous = current  
            current = next_node 
        return previous 
        
llist = LinkedList() 
T = int(input())
for _ in range(T):
    li = [int(val) for val in input().split()]
    llist.head = Node(li[0])
    temp = llist.head 
    for val in li[1:-1]:
        temp.next = Node(val) 
        temp = temp.next 
    
    is_palindrome = LinkedList().check_palindrome(llist.head)
    if is_palindrome:
        print('YES') 
    else:
        print('NO') 


# ------ p10 Delete all duplicate nodes in sorted ll------

# 1 1 2 2 2 3 3 -1

# 1 2 3

class Node:
    def __init__(self,data):
        self.data = data 
        self.next = None 
        
class LinkedList:
    def __init__(self):
        self.head = None 
    
    def delete_duplicate(self):
        current = self.head 
        while current.next:
            if current.data == current.next.data:
                next_node = current.next.next  
                # current.next = None 
                current.next = next_node 
            else:
                current = current.next 
        return self.head 
    
    def print_list(self):
        temp = self.head 
        while temp:
            print(temp.data, end =" ")
            temp = temp.next 
        return 


llist = LinkedList() 
li = [int(val) for val in input().split()] 
llist.head = Node(li[0]) 
temp = llist.head 

for val in li[1:-1]:
    temp.next = Node(val) 
    temp = temp.next 
llist.delete_duplicate()
llist.print_list() 

# ------ p11 Merge linked list in alternate positions ------
# 1 2 3 4 -1
# 5 6 7 8 -1

# 1 5 2 6 3 7 4 8 
# -1

class Node:
    def __init__(self, data):
        self.data = data 
        self.next = None 

class LinkedList:
    def __init__(self):
        self.head = None 
        
    def print_list(self):
        temp = self.head 
        if temp == None:
            print(-1) 
            return 
        while temp:
            print(temp.data, end = " ")
            temp = temp.next 
        print()
        return 
    
    def merge(self,b_head):
        curr_a = self.head 
        curr_b = b_head 
        while curr_a != None and b_head != None:
            a_next = curr_a.next 
            curr_b = b_head 
            b_head = b_head.next 
        
            curr_a.next = curr_b 
            curr_b.next = a_next 
            curr_a = a_next 
        return b_head 
        

a_list = LinkedList()
b_list = LinkedList() 

li_a = [int(val) for val in input().split()]
li_b = [int(val) for val in input().split()]

a_list.head = Node(li_a[0])
temp = a_list.head 

for val in li_a[1: -1]:
    temp.next = Node(val)
    temp = temp.next 
    
b_list.head = Node(li_b[0])
temp = b_list.head 

for val in li_b[1:-1]:
    temp.next = Node(val) 
    temp = temp.next 

b_list.head = a_list.merge(b_list.head) 
a_list.print_list() 
b_list.print_list() 

# ------ p12  Add two large numbers ------
# 1 2 3 -1
# 2 3 4 -1

# 3 5 7 
class Node:
    def __init__(self, data):
        self.data = data 
        self.next = None 
class LinkedList:
    def __init__(self):
        self.head = None 
    
    def PrintList(self):
        temp = self.head 
        while temp.next != None:
            print(temp.data,end = " ")
            temp = temp.next 
        print(temp.data, end= ' ')
    
    def addTwoNumbers(self, l1, l2):
        dummy = cur = Node(0)
        carry = 0 
        while l1 or l2 or carry:
            if l1:
                carry+=l1.data
                l1 = l1.next
            if l2:
                carry += l2.data
                l2 = l2.next 
            cur.next  = Node(carry%10)
            cur = cur.next 
            carry //= 10 
        return dummy.next 
        



llists = LinkedList(), LinkedList() 
li = [int(val) for val in input().split()], [int(val) for val in input().split()]

for i in range(2):
    llists[i].head = Node(li[i][0]) 
    temp = llists[i].head 
    for val in li[i][1:-1]:
        temp.next = Node(val) 
        temp = temp.next 

ans = LinkedList()
ans.head = LinkedList().addTwoNumbers(llists[0].head, llists[1].head) 
ans.PrintList() 

# ------ p13 Max three consecutive nodes sum ------
# 1 3 5 7 11 14 -1

# 32

class Node:
    def __init__(self, data):
        self.data = data 
        self.next = None 
    
class LinkedList:
    def __init__(self):
        self.head = None 
    
    def max_three_consecutive_sum(self,head, tail):
        start, ans = head, 0 
        while True:
            temp = 0
            temp+=start.data 
            temp+=start.next.data 
            temp+=start.next.next.data 
            
            if temp>ans:
                ans = temp 
            if start == tail:
                return ans 
            start= start.next 
        
        return ans 

llist = LinkedList() 
li = [int(val) for val in input().split()]

llist.head = Node(li[0]) 
temp = llist.head 
for val in li[1:-1]:
    temp.next = Node(val)
    temp = temp.next 
temp.next = llist.head 
llist.tail = temp 

ans = llist.max_three_consecutive_sum(llist.head, llist.tail) 
print(ans) 

# ------ p14 split circulat LL ------
# 1 2 3 4 -1

# 1 2 
# 3 4 

class Node:
    def __init__(self,data):
        self.data = data 
        self.next = None 

class CircularLinkedList:
    def __init__(self):
        self.head = None 
    
    def printList(self):
        temp = self.head 
        if self.head is not None:
            while True:
                print(temp.data, end = ' ')
                temp = temp.next 
                if temp == self.head:
                    break 
    
    def splitList(self, head1, head2):
        slow_ptr = self.head 
        fast_ptr = self.head 
        
        if self.head is None:
            return 
        
        while fast_ptr.next != self.head and fast_ptr.next.next != self.head:
            fast_ptr = fast_ptr.next.next 
            slow_ptr = slow_ptr.next 
        
        if fast_ptr.next.next == self.head:
            fast_ptr = fast_ptr.next 
        
        head1.head = self.head 
        
        if self.head.next !=self.head:
            head2.head= slow_ptr.next 
        
        fast_ptr.next = slow_ptr.next 
        slow_ptr.next = self.head 
        
llist = CircularLinkedList() 
li = [int(val) for val in input().split()] 

llist.head = Node(li[0])
temp = llist.head 

for val in li[1:-1]:
    temp.next = Node(val)
    temp = temp.next 
temp.next = llist.head 

head1 = CircularLinkedList()
head2 = CircularLinkedList() 

llist.splitList(head1, head2) 
head1.printList() 
print()
head2.printList() 

# ------ p15 Josephus circle ------
# 4 3

# 1
class Node:
    def __init__(self,x):
        self.data = x 
        self.next = None 
    
def getJosephusPosition(m,n):
    head = Node(1) 
    prev = head 
    for i in range(2,n+1):
        prev.next = Node(i)
        prev = prev.next 
    prev.next = head 
    
    ptr1 = head
    ptr2 = head 
    
    while (ptr1.next != ptr1):
        count = 1 
        while (count!= m):
            ptr2 = ptr1 
            ptr1 = ptr1.next 
            count += 1 
        
        ptr2.next = ptr1.next 
        ptr1 = ptr2.next 
    return ptr1.data 



n,m = [int(each) for each in input().split()]
print(getJosephusPosition(m,n))

# ------ p16 Determine the position of car B ------

# 1 2 3 4 5 6 -1
# 2 1

# 4
class Node:
    def __init__(self, data):
        self.data = data 
        self.next = None 

class LinkedList:
    def __init__(self):
        self.head = None 
        self.tail = None 
    
    def printList(self):
        temp = self.head 
        while temp:
            print(temp.data, end = " ")
            temp = temp.next 
    
    def find_B_position(self, head, tail, a1,b1):
        A = B = head 
        while True:
            temp = 0 
            while temp<a1:
                A = A.next 
                temp+=1 
                if A==tail:
                    break 
            if temp == a1 and A!=tail:
                temp = 0 
            elif A ==tail:
                if b1>temp:
                    b1=temp 
                temp = 0 
            
            while temp<b1:
                B = B.next 
                temp+=1 
            
            if A == tail:
                break 
        
        return B.data 
            

llist = LinkedList() 
li = [int(x) for x in input().split()]
a1, b1 = tuple(map(int,input().split()))

llist.head = Node(li[0])
temp = llist.head 

for val in li[1:-1]:
    temp.next = Node(val) 
    temp = temp.next 

temp.next = llist.head 
llist.tail = temp 

ans = llist.find_B_position(llist.head, llist.tail, a1, b1)
print(ans) 

# ------ p17 Remove elements of LL of value k ------

# 1 2 3 4 5 6 -1
# 3

# 1 2 4 5 6 
class Node:
    def __init__(self,data):
        self.data  = data 
        self.next = None 

class LinkedList:
    def __init__(self):
        self.head = None 
    
    def delete_key(self,head, val):
        prev = None 
        cur = head 
        while cur is not None:
            if cur.data == val:
                if prev is not None:
                    prev.next = cur.next 
                else:
                    head = cur.next 
            else:
                prev = cur 
            cur = cur.next 
        return head 
    
    def printList(self):
        temp = self.head 
        while temp:
            print(temp.data, end = ' ')
            temp = temp.next 

llist = LinkedList() 
li = [int(x) for x in input().split()] 
k = int(input())
llist.head = Node(li[0])
temp = llist.head 
for val in li[1:-1]:
    temp.next = Node(val)
    temp = temp.next
llist.head = llist.delete_key(llist.head, k)
llist.printList() 

# ------ p18 Reverse ll------
# 1 2 3 4 5 -1

# 5 4 3 2 1 

class Node:
    def __init__(self,data):
        self.data = data 
        self.next = None 

class LinkedList:
    def __init__(self):
        self.head = None 
    
    def reverse_list(self):
        prev = None 
        current = self.head 
        while current is not None:
            next = current.next 
            current.next = prev 
            prev = current 
            current = next 
        self.head = prev 
    
    def print_list(self):
        temp = self.head 
        while temp:
            print(temp.data, end= " ")
            temp = temp.next 
        return 

llist = LinkedList() 
li = [int(x) for x in input().split()]
llist.head = Node(li[0])

temp = llist.head 
for val in li[1:-1]:
    temp.next = Node(val)  
    temp = temp.next 
    
llist.reverse_list()
llist.print_list()

# ------ p19 Rotate LL ------

# 3
# 1 2 3 4 5 6 7 -1

# 5 6 7 1 2 3 4 

class Node:
    def __init__(self, value = None):
        self.value = value 
        self.next = None 
    
def RotateList(nums, numOfPlaces):
    head = Node(nums[0]) 
    length = 1 
    tmpPtr = head 
    
    for each in nums[1:]:
        tmpPtr.next = Node(each) 
        tmpPtr = tmpPtr.next
        length+=1 
    
    tail = tmpPtr 
    
    if head is None or head.next is None:
        new_head = head 
    else:
        tail.next = head 
        numOfPlaces = numOfPlaces % length 
        ptr = head 
        
        for _ in range(length - numOfPlaces-1):
            ptr = ptr.next 
        
        new_tail =ptr 
        new_head = new_tail.next 
        new_tail.next = None 
    
    ptr = new_head 
    
    while ptr is not None:
        print(ptr.value, end= " ")
        ptr = ptr.next 


numOfPlaces = int(input())
nums = [int(x) for x in input().split(" ")]
nums.pop() 
RotateList(nums, numOfPlaces)



# ------ p20 Insert Node at Sorted position - DLL ------

# 2 6 8 10 12 -1
# 9

# 2 6 8 9 10 12 

class Node:
    def __init__(self,data):
        self.data = data 
        self.next = None 
class LinkedList:
    def __init__(self):
        self.head = None 
    def printList(self):
        temp = self.head 
        while temp:
            print(temp.data, end = " ")
            temp = temp.next 
    
    def insert(self,head, tail,k):
        temp, new_node = head, Node(k)
        if new_node.data <= head.data:
            new_node.next = head 
            head.prev = new_node 
            head = new_node 
            return head 
        if new_node.data >= tail.data:
            tail.next = new_node
            new_node.prev = tail 
            tail = new_node
            return head 
        while temp != None and temp.data < new_node.data:
            temp = temp.next 
        new_node.prev = temp.prev 
        temp.prev = new_node 
        new_node.next = temp 
        new_node.prev.next = new_node
        return head 

llist = LinkedList() 
li = [int(val) for val in input().split()]
k = int(input())

llist.head = Node(li[0])
temp = llist.head 
prev = None 

for val in li[1:-1]:
    temp.next = Node(val) 
    temp.prev = prev 
    prev = temp 
    temp = temp.next 
temp.prev = prev 
llist.tail = temp 
llist.head = llist.insert(llist.head, llist.tail, k)
llist.printList() 

# ------ p21 swap nodes a kth from start with kth from last of a DLL ------

# 1 2 3 4 5 -1
# 2

# 1 4 3 2 5 

class Node:
    def __init__(self,data):
        self.data = data 
        self.next = None 
        self.prev = None 
class LinkedList:
    def __init__(self):
        self.head = None 
        self.tail = None 
    
    def printList(self):
        temp = self.head 
        while temp:
            print(temp.data, end = " ")
            temp = temp.next 
    
    def swap_nodes(self, head, tail, k):
        # if there is only one node 
        if head.next == None:   
            return head 
            
        temp_start, temp_end, K1, K2 = head, tail, head, tail 
        
        # find the kth node from start and end, store them in K1 and K2
        for _ in range(1,k):
            temp_start, temp_end = temp_start.next, temp_end.prev 
            K1, K2 = temp_start, temp_end 
        if K1 == K2:
            return head 
        
        #if we have to swap head and tail nodes 
        if K1.prev == None or K1.next == None:
            temp = head 
            
            #if there are only two nodes in list:
            if head.next == tail:
                head.next = None 
                head.prev = tail 
                tail.prev = None 
                tail.next = head 
                
                head,tail = tail, temp 
                return head 
                
            tail.next = head.next 
            head.prev = tail.prev 
            
            tail.prev.next = head 
            head.next.prev = tail 
            
            head.next, tail.prev = None, None 
            head,tail = tail, head 
            return head 
            
            #if the nodes are not head and tail, but consecutive 
        if K1.next == K2 or K1.prev == K2:
            if K1.next == K2:
                K1.next = K2.nxt 
                K2.next.prev = K1 
                
                K2.next = K1 
                K1.prev.next = K2 
                
                K2.prev = K1.prev 
                K1.prev = K2 
            else:
                K2.next = K1.next 
                K1.next.prev = K2
                
                K1.next = K2
                K2.prev.next = K1 
                
                K1.prev = K2.prev 
                K2.prev = K1 
            return head 
        
        #if the nodes are not consecutive 
        k1_prev, k1_next = K1.prev, K1.next 
        k2_prev, k2_next = K2.prev, K2.next 
        
        K1.next.prev = K2 
        K1.prev.next = K2 
        K2.next.prev = K1 
        K2.prev.next = K1 
        
        K1.prev, K1.next = k2_prev, k2_next 
        K2.prev, K2.next = k1_prev, k1_next 
        
        return head 
    
llist = LinkedList() 
li = [int(val) for val in input().split()]
k = int(input())

llist.head = Node(li[0]) 
temp = llist.head 
prev = None 
for val in li[1:-1]:
    temp.next = Node(val) 
    temp.prev = prev 
    prev = temp 
    temp = temp.next 
    
temp.prev = prev 
llist.tail = temp 
llist.head = llist.swap_nodes(llist.head, llist.tail, k) 
llist.printList() 
    
# ------ p 22 Delete k consecutive nodes ------

# 1 2 3 4 5 6 -1
# 3 3

# 1 2 3 

class Node:
    def __init__(self,data):
        self.data = data
        self.next = None 

class LinkedList:
    def __init__(self):
        self.head = None 
    
    def delete_nodes(self,m,k):
        curr_node = last_m_node = self.head 
        while curr_node != None:
            m_count, k_count = m,k 
            while curr_node != None and m_count !=0:
                last_m_node = curr_node 
                curr_node = curr_node.next 
                m_count -=1 
            while curr_node != None and k_count !=0:
                curr_node = curr_node.next 
                k_count -=1 
            last_m_node.next = curr_node 
    
    def print_list(self):
        temp = self.head 
        while temp:
            print(temp.data, end=" ")
            temp = temp.next 
            



llist  = LinkedList()
li = [int(x) for x in input().split()]
M,K = map(int,input().split())
llist.head = Node(li[0]) 
temp = llist.head 
for val in li[1:-1]:
    temp.next = Node(val)
    temp = temp.next 

llist.delete_nodes(M,K)
llist.print_list()


# ------ p 23 reverse every k consecutive nodes ------

# 1 2 3 4 5 6 -1
# 2

# 2 1 4 3 6 5 

class Node:
    def __init__(self,data):
        self.data = data 
        self.next = None 
        
class LinkedList:
    def __init__(self):
        self.head = None  
        
    def reverse_list(self,k):
        head = self.head 
        new_head,ptr = None,head 
        while k>0:
            next_node = ptr.next 
            ptr.next = new_head 
            new_head = ptr 
            ptr= next_node 
            k-=1 
        return new_head

        
    def reverse(self,k):
        head = self.head 
        ptr = head 
        prev_tail = None 
        new_head = None 
        while ptr:
            count = 0 
            ptr = head 
            while count<k and ptr:
                ptr = ptr.next 
                count+=1 
            if count == k:
                rev_head = self.reverse_list(k)
                if not new_head:
                    new_head = rev_head 
                if prev_tail:
                    prev_tail.next = rev_head 
                prev_tail = head 
                head = self.head = ptr 
        
        if prev_tail:
            prev_tail.next = head 
        if new_head:
            self.head = new_head 
    
    def print_list(self):
        temp = self.head 
        while temp:
            print(temp.data, end = " ")
            temp = temp.next 


llist = LinkedList() 
li = [int(x) for x in input().split()]
K = int(input())
llist.head = Node(li[0]) 
temp = llist.head 
for val in li[1:-1]:
    temp.next = Node(val) 
    temp = temp.next 
llist.reverse(K)
llist.print_list() 



# ----- p24 Partition ll  -------
#all the nodes that are less than k come before the nodes that are grater than or equal to k

# 1 4 3 1 2 3 -1
# 3

# 1 1 2 4 3 3 

class Node:
    def __init__(self,data):
        self.data = data
        self.next = None 

class LinkedList:
    def __init__(self):
        self.head = None 

    def partition(self,x):
        head = self.head 
        before = before_head = Node(0)
        after = after_head = Node(0)
        while head:
            if head.data < x:
                before.next = head 
                before = before.next 
            else:
                after.next = head 
                after = after.next 
            head = head.next 
        
        after.next = None 
        before.next = after_head.next 
        self.head = before_head.next 
    
    def print_list(self):
        temp = self.head 
        while temp:
            print(temp.data, end= " ") 
            temp = temp.next 
        return 

llist = LinkedList() 
li = [int(val) for val in input().split()] 
K = int(input())
llist.head = Node(li[0])
temp = llist.head 
for val in li[1:-1]:
    temp.next = Node(val) 
    temp = temp.next 

llist.partition(K)
llist.print_list() 




# ----- p25  Reverse a DLL   -------
# 1 2 3 4 5 -1

# 5 4 3 2 1

class Node:
    def __init__(self,data):
        self.data = data 
        self.next = None 

class DoublyLinkedList:
    def __init__(self):
        self.head = None 
    def reverse(self):
        temp = None 
        current = self.head 
        
        while current is not None:
            temp = current.prev 
            current.prev = current.next 
            current.next = temp 
            current = current.prev 
        
        if temp is not None:
            self.head = temp.prev 
    
    def push(self,new_data):
        new_node = Node(new_data)
        last = self.head 
        new_node.next = None 
        
        if self.head is None:
            new_node.prev = None 
            self.head = new_node
            return 
        
        while last.next is not None:
            last = last.next 
        last.next = new_node
        new_node.prev = last 
        
    def print_list(self):
        temp = self.head 
        while temp:
            print(temp.data, end= " ")
            temp = temp.next 

dll = DoublyLinkedList() 
li = [int(val) for val in input().split()] 
i = 0 
while li[i] != -1:
    dll.push(li[i]) 
    i+=1 
dll.reverse() 
dll.print_list() 

# ----- p26 Implement stack using LL  -------
# 5
# 1 2 1 3 2 1 4 2

# 3
# 4
class StackNode:
    def __init__(self,data):
        self.data = data 
        self.next = None 
    


class Stack:

    # Constructor to initialize the root of linked list
    def __init__(self):
        self.root = None
    
    def isEmpty(self):
        return True if self.root is None else False 
    
    def push(self,data):
        newNode = StackNode(data) 
        newNode.next = self.root 
        self.root = newNode


    def pop(self):
        if self.isEmpty():
            return -1 
        temp = self.root 
        self.root = self.root.next 
        popped = temp.data 
        return popped 

stack = Stack() 
n = int(input())

enter = False 
for x in input().split():
    if enter == True:
        stack.push(x)
        enter = False 
        continue 
    if int(x) ==1:
        enter = True 
    elif int(x) ==2:
        print(stack.pop()) 
    else:
        break 
        


# ----- p27 Implement queue using LL  -------
# 1 2 1 3 2 1 4 2 0

# 2
# 3

class Node:
    def __init__(self, data):
        self.data = data
        self.next = None


class Queue:
    def __init__(self):
        self.front = self.rear = None
        
    def isEmpty(self):
        return self.front ==None 

    def enQueue(self, item):
        temp=Node(item)
        
        if self.rear == None:
            self.front = self.rear = temp 
            return 
        self.rear.next = temp 
        self.rear = temp 
    

    def deQueue(self):
        if self.isEmpty():
            return -1 
        temp = self.front 
        self.front = temp.next 
        
        if self.front == None:
            self.rear = None 
        return temp.data 

q= Queue() 
enter = False 
for x in input().split():
    if enter == True:
        q.enQueue(x) 
        enter = False 
        continue 
    if int(x) ==1:
        enter = True 
        continue 
    if int(x) ==1:
        enter = True 
    elif int(x) ==2:
        print(q.deQueue())
    else:
        break 

# ----- p28 Reorder list   -------
# 1 3 5 7 9 11 -1

# 1 11 3 9 5 7 

class Node:
    def __init__(self,value):
        self.value = value 
        self.next = None 
    
def reverse_list(nums):
    head = Node(nums[0]) 
    tmPtr = head 
    for each in nums[1:]:
        node = Node(each) 
        tmPtr.next = node 
        tmPtr = tmPtr.next 
    slow = head 
    fast = head 
    while fast is not None and fast.next is not None:
        slow = slow.next 
        fast = fast.next.next 
    
    # "slow" points to the middle of the list 
    
    prev = None 
    curr = slow 
    
    #Reverse the 2nd half of the list 
    while curr is not None:
        tmp = curr.next 
        
        curr.next = prev 
        prev = curr 
        curr = tmp 
    
    firstList = head 
    secondList = prev 
    
    # merge the 1st half & the reversed 2nd half 
    
    while secondList.next is not None:
        tmp = firstList.next 
        firstList.next = secondList
        firstList = tmp 
        
        tmp = secondList.next 
        secondList.next = firstList 
        secondList = tmp 
    
    ptr = head 
    while ptr is not None:
        print(ptr.value, end= " ")
        ptr =ptr.next 

nums = [int(each) for each in input().split()]
nums.pop() 
reverse_list(nums) 


# ----- p29 Merge elements in LL  -------

# 11 12 13 14 15 -1
# 5 6 7 8 -1
# 1 3

class Node:
    def __init__(self,data):
        self.data = data 
        self.next  = None 
class LinkedList:
    def __init__(self):
        self.head = None 
    
    def merge_in_between(self, list1, a,b, list2):
        start, end = None, list1 
        for i in range(b):
            if i==a-1:
                start = end 
            end = end.next
        start.next = list2 
        
        while list2.next:
            list2 = list2.next 
        list2.next = end.next 
        end.next = None 
        return list1 
    
    def print_list(self):
        temp = self.head 
        while temp:
            print(temp.data, end=" ")
            temp = temp.next 

linkedList1 = LinkedList() 
list_1 = [int(val) for val in input().split()] 
linkedList1.head = Node(list_1[0]) 
temp = linkedList1.head 
for val in list_1[1:-1]:
    temp.next = Node(val) 
    temp = temp.next 

linkedList2 = LinkedList() 
list_2 = [int(val) for val in input().split()] 
linkedList2.head = Node(list_2[0])
temp = linkedList2.head 
for val in list_2[1:-1]:
    temp.next = Node(val)
    temp = temp.next 
a,b = [int(each) for each in input().split()] 

linkedList1.head = linkedList1.merge_in_between(linkedList1.head, a,b, linkedList2.head) 
linkedList1.print_list() 

# ----- p30 Swap adjacent nodes  -------

# 3 4 5 6 7 8 -1

# 4 3 6 5 8 7 
class Node:
    def __init__(self,value = None):
        self.value = value 
        self.next = None 
    
def SwapNodes(nums):
    head = Node(nums[0]) 
    tmPtr = head 
    for each in nums[1:]:
        tmPtr.next = Node(each) 
        tmPtr = tmPtr.next 
    
    dummyPrev = Node() 
    dummyPrev.next = head 
    prevNode = dummyPrev
    firstNode = head 
    secondNode = head.next 
    
    while firstNode is not None and firstNode.next is not None:
        secondNode = firstNode.next
        
        prevNode.next = secondNode 
        firstNode.next = secondNode.next 
        secondNode.next = firstNode 
        prevNode = firstNode 
        firstNode = prevNode.next 
    
    head = dummyPrev.next 
    ptr = head 
    while ptr is not None:
        print(ptr.value, end= " ")
        ptr = ptr.next 

nums = [int(each) for each in input().split()]
nums.pop() 
SwapNodes(nums) 

# ----- p31  Merge K sorted lists  -------
#  given k sorted non decreasing lls. pgm to merge them into a single sorted ll in non decreasing order

# 1
# 3
# 1 4 5

# 1 -> 4 -> 5 -> NULL

class Node:
    def __init__(self, val= 0, next = None):
        self.val = val 
        self.next = next 

class LinkedList:
    def mergeKlists(self, lists):
        if not lists:
            return 
        if len(lists) ==1:
            return lists[0] 
        mid = len(lists)//2 
        left = self.mergeKlists(lists[:mid]) 
        right = self.mergeKlists(lists[mid:]) 
        
        return self.mergeTwoLists(left,right) 
    
    def mergeTwoLists(self, l, r):
        dummy = cur = Node(0) 
        while l and r:
            if l.val < r.val:
                cur.next = l  
                l = l.next 
            else:
                cur.next = r
                r = r.next 
            cur = cur.next 
        cur.next = l or r  
        return dummy.next 

def printLinkedList(head):
    temp = head 
    k = ""
    while temp  is not None:
        k += str(temp.val) 
        k += " -> "
        temp = temp.next 
    
    k+= "NULL"
    print(k) 
    
lists = [] 
listsCount = int(input())

for _ in range(listsCount):
    listLength = int(input()) 
    
    dummyHead = Node() 
    temp = dummyHead
    nums = input() 
    nums = [int(each) for each in nums.split(" ")]
    
    for each in nums:
        node = Node(each) 
        temp.next = node 
        temp = temp.next 
    lists.append(dummyHead.next) 
s = LinkedList() 

printLinkedList(s.mergeKlists(lists)) 



# ----- p32 Delete nodes having greater value on right  -------

# 1 2 3 4 2 0 -1

# 4 2 0 

class Node:
    def __init__(self, x):
        self.data = x 
        self.next = None 

def compute(head):
    if head.next is None:
        return head 
    
    temp = compute(head.next) 
    if temp.data >head.data:
        return temp 
    
    head.next = temp 
    return head 

def print_list(head):
    temp = head 
    while temp is not None:
        print(temp.data, end = " ")
        temp = temp.next 
        

vals = [int(x) for x in input().split()] 

head = Node(vals[0]) 
temp = head 
for val in vals[1:-1]:
    temp.next = Node(val) 
    temp = temp.next 

result = compute(head) 
print_list(result) 

# ----- p33   -------


# ----- p   -------


# ----- p   -------


# ----- p   -------


