# ---------- 1. Level order to pre-order  -------------------
1 2 3 4 5 6

1 2 4 5 3 6 


from collections import deque 
# import sys 

# int_max = sys.maxsize
int_max =100000
class Node:
    def __init__(self,data):
        self.data = data
        self.left = self.right = None 

Q = deque()

def preorder(root):
    if root is None:
        return 
    print(root.data, end=" ") 
    preorder(root.left) 
    preorder(root.right) 

def insert_node(data, root):
    newnode = Node(data) 
    if len(Q) !=0:
        temp = Q[0] 
    if root is None:
        root = newnode 
    
    elif temp.left == None:
        temp.left = newnode 
    elif temp.right == None:
        temp.right = newnode 
        Q.popleft() 
    
    if data != int_max:
        Q.append(newnode) 
    return root 

def remove_null_nodes(root):
    if root is None or root.data == int_max:
        return None 
    root.left = remove_null_nodes(root.left) 
    root.right = remove_null_nodes(root.right) 
    return root 

def build_tree(a,root):
    for i in range(len(a)):
        if a[i] != 'null':
            root = insert_node(a[i], root) 
        else:
            root = insert_node(int_max, root) 
    root = remove_null_nodes(root) 
    return root 
    


arr = [x for x in input().split()] 
root = None 
root = build_tree(arr, root) 
preorder(root) 


# ---------- 2. check perfect Binary tree   -------------------
1
4 8 1 2 3 4 8 -1

True 

class Node:
    def __init__(self,data):
        self.data = data
        self.right = self.left = None 

def insert_nodes(arr,root, i, n):
    if i<n:
        temp = Node(arr[i]) 
        root = temp 
        root.left = insert_nodes(arr,root.left, 2*i+1, n) 
        root.right = insert_nodes(arr, root.right, 2*i+2, n) 
    return root 

def check_perfect_binary_tree(root,d,level = 0):
    if root is None:
        return True
    if root.left is None and root.right is None:
        return d == level+1
    
    if root.left is None or root.right is None:
        return False 
    
    return check_perfect_binary_tree(root.left, d, level+1) and check_perfect_binary_tree(root.right, d, level+1)  

def get_depth(node):
    d = 0 
    while node is not None:
        d+=1 
        node = node.left 
    return d 

t = int(input())
while t:
    A = [int(x) for x in input().split()]
    arr = A[:-1] 
    root = None 
    root = insert_nodes(arr,root,0,len(arr))
    
    if check_perfect_binary_tree(root,get_depth(root)):
        print('True') 
    else:
        print('False') 
    t-=1 
    

# ---------- 3. Maximum Depth  -------------------

1 2 null 3 4 5

4

from collections import deque
import sys 

int_max = sys.maxsize 
# int_max = 1000000 # for debugging
class Node:
    def __init__(self,data):
        self.data = data 
        self.left = self.right = None 

Q = deque() 

def remove_null_nodes(root):
    if root is None or root.data == int_max:
        return None 
    root.left = remove_null_nodes(root.left) 
    root.right = remove_null_nodes(root.right) 
    return root 

def get_max_detpth(root):
    if root is None:
        return 0 
    else:
        return max(get_max_detpth(root.left), get_max_detpth(root.right))+1 

def insert_node(data,root):
    newnode = Node(data) 
    if len(Q) != 0:
        temp = Q[0]
    if root is None:
        root = newnode
    elif temp.left == None:
        temp.left = newnode 
    elif temp.right == None:
        temp.right = newnode 
        Q.popleft() 
    
    if data != int_max:
        Q.append(newnode) 
    return root

def build_tree(a,root):
    for i in range(len(a)):
        if a[i] != 'null':
            root = insert_node(a[i], root)
        else:
            root = insert_node(int_max,root) 
    root = remove_null_nodes(root) 
    return root 
        
arr = [x for x in input().split()]
root = None 
root = build_tree(arr,root) 
print(get_max_detpth(root))


# ---------- 4. Build complete Binary Tree  -------------------
1 2 3 4 5

1 2 4 5 3

class Node:
    def __init__(self, data):
        self.data = data 
        self.left = self.right  = None 

def build_complete_binary_tree(arr,root, i, n):
    if i<n:
        temp = Node(arr[i])
        root = temp 
        root.left = build_complete_binary_tree(arr, root.left, 2*i+1, n) 
        root.right = build_complete_binary_tree(arr, root.right, 2*i+2, n) 
    return root 

def pre_order_traverse(root):
    if root != None:
        print(root.data, end = ' ')
        pre_order_traverse(root.left) 
        pre_order_traverse(root.right) 

arr = [int(x) for x in input().split()]
root = None 
root = build_complete_binary_tree(arr,root, 0, len(arr))
pre_order_traverse(root) 


# ---------- 5  check full binary tree  -------------------
1
8 4 3 null 5 6 7 -1

False 

from collections import deque 
import sys 

int_max = sys.maxsize 

class Node:
    def __init__(self,data):
        self.data = data 
        self.left = self.right = None 

def build_tree(a, root):
    for i in range(len(a)):
        if a[i]  != 'null':
            root = insert_node(a[i], root) 
        else:
            root = insert_node(int_max, root) 
    root = remove_null_nodes(root) 
    return root 

def check_full_binary_tree(root):
    if root is None:
        return True 
    if root.left is None and root.right is None:
        return True
    if root.left is not None and root.right is not None:
        return check_full_binary_tree(root.left) and check_full_binary_tree(root.right) 
    return False 
    

def insert_node(data, root):
    newnode = Node(data) 
    if len(Q) != 0:
        temp = Q[0] 
    if root is None:
        root = newnode
    
    elif temp.left ==None:
        temp.left = newnode 
    elif temp.right == None:
        temp.right = newnode
        Q.popleft() 
    
    if data != int_max:
        Q.append(newnode) 
    return root 

def remove_null_nodes(root):
    if root is None or root.data == int_max:
        return None 
    root.left = remove_null_nodes(root.left) 
    root.right = remove_null_nodes(root.right) 
    return root 

t = int(input())
while t:
    Q = deque() 
    A = [x for x in  input().split()] 
    root = None 
    arr = A[:-1] 
    root = build_tree(arr, root) 
    
    if check_full_binary_tree(root):
        print('True') 
    else:
        print('False') 
    t-=1 

# ---------- 6 Left corner nodes  -------------------
1 2 3 4 5

4


from collections import deque
# import sys 
# int_max = sys.maxsize 

int_max = 10000 

class Node:
    def __init__(self, data):
        self.data = data 
        self.left = self.right = None 
    
    def get_bottom_left_node(self, root):
        if not root:
            return 
    
        max_depth = 0 
        queue = [(root,1)]
        
        while queue:
            curr, level = queue.pop(0) 
            if curr:
                if level > max_depth:
                    max_depth = level 
                    ans = curr.data 
                queue.append((curr.left, level + 1)) 
                queue.append((curr.right, level + 1))
        return ans 

Q = deque() 

def build_tree(a, root):
    for i in range(len(a)):
        if a[i] != 'null':
            root = insert_node(int(a[i]), root)
        else:
            root = insert_node(int_max, root) 
    root = remove_all_nodes(root) 
    return root 
        

def insert_node(data, root):
    newnode = Node(data) 
    if len(Q) != 0:
        temp = Q[0] 
    if root is None:
        root = newnode
    
    elif temp.left == None:
        temp.left = newnode 
    
    elif temp.right == None:
        temp.right = newnode 
        Q.popleft() 
    
    if data != int_max:
        Q.append(newnode) 
    return root 

def remove_all_nodes(root):
    if root is None or root.data == int_max:
        return None 
    root.left = remove_all_nodes(root.left) 
    root.right = remove_all_nodes(root.right) 
    return root 


arr = [x for x in input().split()] 
root = None 
root = build_tree(arr, root) 
print(root.get_bottom_left_node(root))


# ---------- 7 Level order to post order -------------------
1 2 3 4 5 6

4 5 2 6 3 1 

from collections import deque
import sys 

int_max = sys.maxsize

class Node:
    def __init__(self,data):
        self.data = data 
        self.left = self.right = None 

def insert_node(data, root):
    newnode = Node(data) 
    
    if len(Q) != 0:
        temp = Q[0] 
    if root is None:
        root = newnode 
    
    elif temp.left is None:
        temp.left = newnode 
    elif temp.right is None:
        temp.right = newnode 
        Q.popleft() 
    
    if data != int_max:
        Q.append(newnode)
    return root 

def remove_null_nodes(root):
    if root is None or  root.data == int_max:
        return None 
    root.left = remove_null_nodes(root.left) 
    root.right = remove_null_nodes(root.right) 
    return root 

def postorder(root):
    if root is None:
        return 
    postorder(root.left) 
    postorder(root.right) 
    print(root.data, end = ' ')
    

def build_tree(a, root):
    for i in range(len(a)):
        if a[i] != 'null':
            root = insert_node(a[i], root) 
        else:
            root = insert_node(int_max, root) 
    root = remove_null_nodes(root) 
    return root 

Q = deque()     

arr = [x for x in input().split()]
root = None 
root = build_tree(arr, root) 
postorder(root) 

# ---------- 8 Level order to inorder -------------------          


# ---------- 9  Build Binary tree -------------------

8 4 7 3 15 10 -1
7 4 3 8 10 15 -1

7 3 4 10 15 8 

class Node:
    def __init__(self,data, left = None, right = None):
        self.data = data 
        self.left = self.right = None 

def build(inorder, preorder):
    inorder_map ={} 
    for i,e in enumerate(inorder):
        inorder_map[e] = i 
    pre_index = 0 
    
    return build_tree(0,len(inorder) -1, preorder, pre_index, inorder_map)[0]

def build_tree(start, end, preorder, pre_index, inorder_map):
    if start>end:
        return None, pre_index 
    
    root = Node(preorder[pre_index])
    pre_index +=1 
    index = inorder_map[root.data] 
    
    root.left, pre_index = build_tree(start, index-1, preorder, pre_index, inorder_map) 
    
    root.right, pre_index = build_tree(index+1, end, preorder, pre_index, inorder_map) 
    return root, pre_index
    
def post_order_traversal(root):
    if root != None:
        post_order_traversal(root.left) 
        post_order_traversal(root.right) 
        print(root.data, end = ' ')


preorder = [int(x) for x in input().split()]
inorder = [int(x) for x in input().split()]
inorder = inorder[:-1] 
root = build(inorder, preorder) 
post_order_traversal(root) 

# ---------- 10 Add two binary trees -------------------
1 2 3 -1
1 2 -1

4 2 3


from collections  import deque
# import sys 
# int_max = sys.maxsize

int_max = 100000


class newNode:
    def __init__(self, data):
        self.data =data 
        self.left = self.right = None 

def create_node(a,root):
    Q = deque() 
    for i in range(len(a)):
        if a[i] != 'null':
            root = insert_node(a[i], root,Q) 
        else:
            root = insert_node(int_max, root, Q) 
    root = remove_null_nodes(root) 
    return root 
    
def merge_trees(t1, t2):
    if t1==None:
        return t2 
    if t2 == None:
        return t1 
    t1.data = t1.data + t2.data 
    t1.left = merge_trees(t1.left, t2.left)
    t1.right = merge_trees(t1.right, t2.right)
    
    return t1 
    
def remove_null_nodes(root):
    if root is None or root.data == int_max:
        return None 
    root.left = remove_null_nodes(root.left) 
    root.right = remove_null_nodes(root.right) 
    return root 

def inorder_traversal(root):
    if root != None:
        inorder_traversal(root.left) 
        print(root.data, end= ' ') 
        inorder_traversal(root.right) 

def insert_node(data, root,Q):
    data = int(data) 
    newnode = newNode(data) 
    if len(Q) != 0 :
        temp = Q[0]
    if root is None:
        root = newnode 
    elif temp.left == None:
        temp.left = newnode 
    elif temp.right == None:
        temp.right = newnode 
        Q.popleft() 
    if data != int_max:
        Q.append(newnode) 
    return root 


arr1 = [x for x in input().split()] 
arr1 = arr1[:len(arr1) -1]
root1 = None 
root1 = create_node(arr1, root1) 

arr2 = [x for x in input().split()] 
arr2 = arr2[:len(arr2) -1]
root2 = None 
root2 = create_node(arr2, root2) 

root1 = merge_trees(root1, root2) 
inorder_traversal(root1) 

# ---------- 11 Invert complete binary tree -------------------
4 1 5 6 7 8

8 5 7 6 1 4 

class Node:
    def __init__( self, data):
        self.data = data 
        self.left = self.right = None 
    
    def invertTree(self, root):
        if root is None:
            return None 
        root.left, root.right = root.right, root.left 
        self.invertTree(root.left) 
        self.invertTree(root.right) 
        return root 

def insertLevelOrder(arr, root, i, n):
    if i<n:
        temp = Node(arr[i]) 
        root = temp
        root.left = insertLevelOrder(arr,root.left,2*i+1, n)
        root.right = insertLevelOrder(arr, root.right, 2*i+2, n) 
    return root 


def postOrder(root):
    if root != None:
        postOrder(root.left) 
        postOrder(root.right) 
        print(root.data, end= ' ')

arr = [int(x) for x in input().split()]
root = None 
root = insertLevelOrder(arr, root, 0 , len(arr))
root.invertTree(root) 

postOrder(root) 

# ---------- 12 Maximum sum path  -------------------
-2 3 0 -1 8 7 6

16


from collections import deque 
import sys 

int_max = sys.maxsize

class Node:
    def __init__(self, data):
        self.data = data 
        self.left = self.right = None 

Q= deque() 

def build_tree(a, root):
    for i in range(len(a)):
        if a[i] != 'null':
            root = insert_node(int(a[i]), root)
        else:
            root = insert_node(int_max, root)
    root = remove_null_nodes(root) 
    return root 
    
def insert_node(data, root):
    newnode = Node(data) 
    if len(Q) != 0:
        temp = Q[0] 
    if root is None:
        root = newnode
    
    elif temp.left == None:
        temp.left = newnode
    elif temp.right == None:
        temp.right = newnode
        Q.popleft() 
    
    if data != int_max:
        Q.append(newnode) 
    return root 

def remove_null_nodes(root):
    if root is None or root.data == int_max:
        return None 
    root.left = remove_null_nodes(root.left) 
    root.right = remove_null_nodes(root.right) 
    return root 
    
class  Solution:
    def __init__(self):
        self.max_sum = float("-inf")
    
    def get_max_sum(self, node):
        if not node:
            return 0 
        
        left_max = max(self.get_max_sum(node.left), 0)
        right_max = max(self.get_max_sum(node.right),0)
        max_sum = node.data + left_max + right_max
        self.max_sum = max(self.max_sum, max_sum) 
        
        return node.data + max(left_max, right_max) 
        
    
    


arr = [x for x in input().split()] 
root = None 
root = build_tree(arr,root) 
result = Solution() 
result.get_max_sum(root) 
print(result.max_sum) 

# ---------- 13  Right side view -------------------
1 2 3 4 null 5 null

1 3 5

from collections import deque 
import sys 

int_max = sys.maxsize
 
class Node:
    def __init__(self, data):
        self.data = data 
        self.left = self.right = None 
    
Q = deque() 

def remove_all_nodes(root):
    if root is None or root.data == int_max:
        return None 
    root.left = remove_all_nodes(root.left) 
    root.right = remove_all_nodes(root.right)
    return root 

def insert_node(data, root):
    newnode = Node(data) 
    if len(Q) != 0:
        temp = Q[0] 
    if root is None:
        root = newnode 
        
    elif temp.left == None:
        temp.left = newnode 
    elif temp.right == None:
        temp.right = newnode
        Q.popleft() 
    if data != int_max:
        Q.append(newnode) 
    return root 
    
def createTree(a, root):
    for i in range(len(a)):
        if a[i] != 'null':
            root = insert_node(int(a[i]), root) 
        else:
            root = insert_node(int_max, root) 
    root = remove_all_nodes(root) 
    return root 

def preOrder(root):
    if root != None:
        print(root.data, end= ' ')
        preOrder(root.left)
        preOrder(root.right) 
    
def get_right_side_view(root,level, right_side_view):
    if root is None:
        return None 
    if level == len(right_side_view):
        right_side_view.append(root.data) 
    
    get_right_side_view(root.right, level+1, right_side_view) 
    get_right_side_view(root.left, level+1, right_side_view) 
    
    
arr= [x for x in input().split()]
root = createTree(arr, None) 

right_side_view = [] 
get_right_side_view(root, 0, right_side_view) 
print(*right_side_view) 


# ---------- 14 Longest path between two nodes  -------------------
1 2 null 3 4

2

from collections import deque 
import sys 

int_max = sys.maxsize

class Node:
    def __init__(self, data):
        self.data = data
        self.left = self.right = None 
Q = deque() 

def build_tree(a, root):
    for i in range(len(a)):
        if a[i] != 'null':
            root = insert_node(a[i], root) 
        else:
            root = insert_node(int_max, root) 
    root = remove_null_nodes(root) 
    return root 

def insert_node(data, root):
    newnode = Node(data)
    if len(Q) != 0:
        temp = Q[0] 
    if root is None:
        root = newnode 
    elif temp.left == None:
        temp.left = newnode
    elif temp.right == None:
        temp.right = newnode
        Q.popleft() 
    
    if data != int_max:
        Q.append(newnode) 
    return root 

def remove_null_nodes(root):
    if root is None or root.data == int_max:
        return None 
    root.left = remove_null_nodes(root.left) 
    root.right = remove_null_nodes(root.right) 
    return root 

class Solution(object):
    def __init__(self, ans = 1):
        self.ans = ans 
    def depth(self, node):
        if not node:
            return 0 
        L = self.depth(node.left) 
        R = self.depth(node.right) 
        self.ans = max(self.ans, L+R)
        return max(L,R) + 1 
    
    def get_longest_path(self,root):
        self.depth(root) 
        return self.ans
        
arr = [x for x in input().split()]
root = None 
root = build_tree(arr, root) 
result = Solution(1) 
print(result.get_longest_path(root))

# ---------- 15 Lowest common ancestor -------------------


# ---------- 16 Build binary tree-2 -------------------


# ---------- 17 Boundary of binary tree -------------------      


# ---------- 18  -------------------


# ---------- 19  -------------------


# ---------- 20  -------------------


# ---------- 21  -------------------


# ---------- 22  -------------------


# ---------- 23  -------------------


# ---------- 24  -------------------


# ---------- 25  -------------------


# ---------- 26  -------------------