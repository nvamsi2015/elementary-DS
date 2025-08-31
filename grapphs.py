
#------------ 1. Build Adjacency Matrix  --------------------   

5 5
0 3
0 1
2 3
4 2
1 4

0 1 0 1 0
1 0 0 0 1
0 0 0 1 1
1 0 1 0 0
0 1 1 0 0


def add_edge(adjacency_matrix, a, b):
    adjacency_matrix[a][b] = 1 
    adjacency_matrix[b][a] = 1 
    
def print_matrix(adjacency_matrix):
    for i in adjacency_matrix:
        print(*i, end= '\n')

n,k = [int(x) for x in input().split()]
adjacency_matrix = [[0 for i in range(int(n))] for i in range(int(n)) ]
for i in range(int(k)):
    li = [int(x) for x in input().split()]
    add_edge(adjacency_matrix, li[0], li[1])

print_matrix(adjacency_matrix) 



# ------------ 2. Find vertex with Maximum Edges  --------------------
3
0 1 2 0 -1
1 2 -1
2 -1

0

def addEdge(adj, vertex, destination):
    adj[vertex].append(destination) 
    adj[destination].append(vertex) 

def get_vertex(adj, l):
    maxi = len(adj[0])
    vertex = 0 
    for i in range(1,l):
        if len(adj[i]) > maxi:
            maxi = len(adj[i])
            vertex = i 
    return vertex 
    

n = int(input())
adjacency_list = [[] for _ in range(n+1)]

for _ in range(n):
    li = [int(x) for x in input().split()]
    vertex = li[0]
    l = len(li[1:])
    for i in range(1,l):
        destination = li[i] 
        if destination == -1:
            break 
        addEdge(adjacency_list, vertex, destination)

print(get_vertex(adjacency_list, n))


# ------------ 3. Maximum diff b/w outdegree and indegree   --------------------

3
0 1 1 0 -1
1 1 -1
2 1 -1

0


def get_vertex(outdegree, indegree, n):
    maxi = outdegree[0] - indegree[0] 
    vertex = 0 
    for i in range(1,n):
        if outdegree[i] - indegree[i] >maxi:
            maxi = outdegree[i] - indegree[i] 
            vertex = i 
    return vertex 

n = int(input())
outdegree = [0] * n 
indegree = [0] * n 
for i in range(n):
    li = [int(x) for x in input().split()]
    li = li[1:-1] 
    
    for j in li:
        outdegree[i]+=1 
        indegree[j]+=1 
print(get_vertex(outdegree, indegree,n))

# ------------  4. DFS   --------------------
5
1 4 2 -1
2 5 -1
3 4 -1
4 5 -1
5 -1

1 4 3 5 2

def DFS(adj_list, i, visited):
    visited[i] = True 
    print(i, end= ' ')
    for u in adj_list[i]:
        if not visited[u]:
            DFS(adj_list, u, visited) 


n = int(input())
adj_list = [[] for i in range(n+1)]
for i in range(1, n+1):
    li = [int(x) for x in input().split()]
    li = li[1:len(li)-1]
    for j in li:
        adj_list[i].append(j) 
        adj_list[j].append(i) 

visited = [False for i in range(n+1)]
for i in range(1,n+1):
    if not visited[i]:
        DFS(adj_list, i, visited)
        

# ------------ 5. BFS  --------------------

5
1 4 2 -1
2 5 -1
3 4 -1
4 5 -1
5 -1

1 4 2 3 5 


from collections import deque 

def BFS(adj_list,v, visited):
    visited[v] = True 
    q = deque() 
    q.append(v) 
    while len(q) >0:
        v = q.popleft() 
        print(v, end = " ")
        for u in adj_list[v]:
            if not visited[u]:
                visited[u] = True 
                q.append(u) 


n = int(input())
adj_list = [[] for i in range(n+1)]

for i in range(1,n+1):
    li = [int(x) for x in input().split()]
    li = li[1:-1] 
    for j in li:
        adj_list[i].append(j) 
        adj_list[j].append(i) 

visited = [False for i in range(n+1)]
for i in range(1,n+1):
    if not visited[i]:
        BFS(adj_list,i, visited) 

# ------------ 6. First Idol of the city --------------------               
4
2 3 2 1 1 3 4 3 -1

3

def getDegress(N, edges, outdegress, indegress):
    i = 0 
    while i<len(edges) -1:
        outdegress[edges[i]] +=1 
        indegress[edges[i+1]] +=1 
        i+=2 
    
    for i in range(1,n+1):
        if indegress[i] == n-1 and outdegress[i] ==0:
            return i 
    
    return -1 

n = int(input())
edges = [int(x) for x in input().split()]
edges = edges[:-1] 
indegress = [0 for i in range(n+1)]
outdegress = [0 for i in range(n+1)] 
print(getDegress(n, edges, outdegress, indegress))

# ------------ 7. Palaces and chambers   --------------------
1
4
1 2 -1
2 3 -1
3 4 -1
4 2 -1

Yes

from collections import deque 

def check_access_to_chambers(adj_list, n):
    visited = [False for i in range(n+1)] 
    to_visit = deque() 
    to_visit.append(1) 
    while len(to_visit) > 0:
        cur_cham = to_visit.popleft()
        visited[cur_cham] = True 
        for i in adj_list[cur_cham]:
            if not visited[i]:
                to_visit.append(i) 
    
    for i in range(1, len(visited)):
        if visited[i] == False:
            return "No"
    return "Yes"

t = int(input())
while t:
    t-=1 
    n =int(input())
    
    adj_list = [[] for i in range(n+1)]
    
    for i in range(1,n+1):
        li = [int(x) for x in input().split()]
        li = li[1:-1] 
        adj_list[i] = li 
    
    print(check_access_to_chambers(adj_list,n))
    

# ------------ 8. Detect cycle in directed graph  --------------------

1
5
1 5 2 -1
2 4 5 -1
3 5 -1
4 5 3 1 -1
5 -1

yes

def check_cycle(adj_list,n):
    visited = [False for i in range(n)]
    recursion_stack = [False for i in range(n)]
    for i in range(1,n):
        if is_cycle(i, adj_list, visited, recursion_stack):
            return 'Yes'
    return 'No'

def is_cycle(vertex, adj_list, visited, recursion_stack):
    if visited[vertex]:
        return False
    visited[vertex] = True 
    recursion_stack[vertex] = True 
    
    for i in adj_list[vertex]:
        if not visited[i] and is_cycle(i, adj_list, visited, recursion_stack):
            return True 
        elif recursion_stack[i]:
            return True 
    recursion_stack[vertex] = False 
    return False 
    

t = int(input())
while t:
    n = int(input())
    adj_list = [[] for i in range(n+1)] 
    for i in range(1,n+1):
        li = [int(x) for x in input().split()]
        li = li[1:-1]
        adj_list[i] = li 
    print(check_cycle(adj_list,n+1))
    t-=1 


# ------------ 9. Find the nearest building   --------------------

5 5 2
1 4
2 1 21
2 5 7
4 1 75
2 1 33
1 5 7

5 7

def check_building(edges, hospitals, n):
    min_distance = -1 
    building = n+1 
    
    for i in range(len(edges)):
        source = edges[i][0][0] 
        destination = edges[i][0][1] 
        
        if hospitals.count(source) == hospitals.count(destination):
            continue
        if min_distance < 0 or min_distance>= edges[i][1]:
            if min_distance == edges[i][1]:
                temp = 0 
                if source in hospitals:
                    temp = destination
                else:
                    temp = source
                if building > temp:
                    building = temp 
            else:
                if source in hospitals:
                    building = destination 
                else:
                    building = source 
                min_distance = edges[i][1] 
    if building == n+1:
        p = (-1) 
    else:
        p = building, min_distance
    return p 
    
n,m,k = [int(x) for x in input().split()]
hospitals = [int(x) for x in input().split()]
edges = []
for i in range(m):
    source, destination, distance = [int(x) for x in input().split()] 
    edges.append([[source, destination], distance])

print(*check_building(edges, hospitals, n))



# ------------ 10. Hopping indices of Array  --------------------
2
8 3
7 2 1 0 3 5 4 6
6 4
3 1 0 2 5 4

Yes
No

def dfs(vec, start):
    if start>=0 and start<len(vec) and vec[start] >=0:
        if vec[start] == 0:
            return True 
        vec[start] = -vec[start] 
        return dfs(vec, start+vec[start]) or dfs(vec, start - vec[start]) 
    return False 

t = int(input())
while t:
    t-=1 
    n,k = [int(x) for x in input().split()] 
    arr = [int(x) for x in input().split()] 
    
    if dfs(arr,k):
        print('Yes') 
    else:
        print('No')
    

# ------------ 11. Eventaul safe nodes  --------------------
3
2
1 2
0

2
0 1

op: 1



def eventaulSafeNodes(graph):
    size = len(graph)
    visited = [0]*size 
    ans = []
    for i in range(size):
        if dfs(i, graph, visited):
            ans.append(i) 
    return ans 

def dfs(node, graph, visited):
    if visited[node] > 0:
        return visited[node] ==2 
    visited[node] =1 
    for each in graph[node]:
        if visited[each] ==1 or not dfs(each, graph, visited):
            return False 
    
    visited[node] = 2 
    return True 


N = int(input())
graph = [] 
for _ in range(N):
    nodes_count = int(input())
    if not nodes_count:
        input()
        graph.append([])
        continue 
    row = [int(each) for each in input().split()]
    graph.append(row) 

ans = eventaulSafeNodes(graph)
print(*ans) 

# ------------ 12. Reach Destination  --------------------

1
3 3
0 1
0 2
2 1
0 2

NO 



def leadsToDestination(n, edges, source, destination):
    graph = [[] for _ in range(n+1)]
    
    for each in edges:
        graph[each[0]].append(each[1])
    
    visited = [0 for _ in range(n+1)] 
    return DFS(graph, source, destination, visited) 

def DFS(graph, node, destination, visited):
    if len(graph[node]) == 0 and node != destination:
        return False 
    
    visited[node] = 1 
    
    for neighbour in graph[node]:
        if visited[neighbour] ==1:
            return False 
        if visited[neighbour] ==0 and not DFS(graph, neighbour, destination, visited):
            return False 
    visited[node] =2 
    return True 

t = int(input())
output = [] 
for _ in range(t):
    nodes, no_of_edges = [int(each) for each in input().split()]
    edges = []
    for _ in range(no_of_edges):
        edges.append([int(each) for each in input().split()])
    source, destination = [int(each) for each in input().split()]
    
    if leadsToDestination(nodes, edges, source, destination):
        output.append('YES') 
    else:
        output.append('NO') 

print(*output) 



# ------------ 13. Friend Circles  --------------------









4
1 1 0 0
1 1 0 0
0 0 1 0
0 0 0 1

3

def DFS(M,n, ind, visited):
    visited[ind] = 1 
    for i in range(n):
        if M[ind][i] and not visited[i]:
            DFS(M,n,i,visited) 

def findCircleNum(M):
    n = len(M)
    ans = 0 
    visited = [0 for _ in range(n)]
    
    for i in range(n):
        if not visited[i]:
            ans +=1                         # from this step and diagonal= 1 , we can assume by default every row or every person is default has his own friend circle with himself for a start 
            DFS(M,n,i,visited)              #  ... continution for row 0 and 1 since there is direct connection no of friend circles reduced from 4 to 3 as we skiped ans+=1 for i=1 
    return ans                              # the purpose of DFS is to fill visited, visited[1]=1 filled in i=0 itself to skip i=1 as i=0 and i=1 persons are already friends
                                            # test case 2 is a great example how all 4 becomes one friend circle, by seeing we can tell now

N = int(input())
matrix = []
for _ in range(N):
    matrix.append([int(each) for each in input().split()])

print(findCircleNum(matrix))



# ------------ 14. Maximum Area island   --------------------

4 4
1 0 0 0
0 1 0 0
0 0 1 0
0 0 0 1

op: 1

4 4
1 0 0 1
0 1 1 1
0 0 1 0
0 0 0 1

op: 5


class Graph:
    def __init__(self, maxi, temp_max, rows, cols):
        self.temp_max = temp_max
        self.maxi = maxi 
        self.rows = rows 
        self.cols = cols 
    
    def max_area(self, grid):
        for i in range(rows):
            for j in range(cols):
                if grid[i][j] ==1:
                    self.DFS(grid, i, j)
                    if self.temp_max > self.maxi:
                        self.maxi = self.temp_max
                    self.temp_max = 0 
        return self.maxi 
    
    def DFS(self, grid, i, j):
        if grid[i][j] == -1 or grid[i][j] ==0:
            return 
        
        if grid[i][j] ==1:
            self.temp_max +=1 
            grid[i][j] = -1 
            
        if 0<=i+1 <rows:
            self.DFS(grid, i+1, j)
        if 0<=i-1 < rows:
            self.DFS(grid, i-1, j)
        if 0>=j+1 <cols:
            self.DFS(grid, i,j+1)
        if 0<=j-1 <cols:
            self.DFS(grid, i,j-1) 


maxi = 0 
temp_max = 0 
rows, cols = [int(each) for each in input().split()]
mat = []

for _ in range(rows):
    mat.append([int(each) for each in input().split()])

g = Graph(maxi, temp_max, rows, cols)
print(g.max_area(mat)) 

# ------------ 15. lexocographically smallest topological order of a graph  --------------------   
5
1 -1
2 5 -1
3 5 -1
4 2 -1
5 1 -1

3 4 2 5 1 

#
5
1 3 5 -1
2 4 1 -1
3 -1
4 -1
5 -1

2 1 3 4 5 


# To solve the lexicographically smallest topological order problem, you need to perform a topological sort on a directed acyclic graph (DAG), but always pick the smallest-numbered node available at each step.

# Steps:
# Build the Graph: Parse the input to create an adjacency list and compute the indegree for each node.
# Use a Min-Heap (Priority Queue): At each step, always select the node with the smallest number among all nodes with indegree 0.
# Kahn's Algorithm: This is a BFS-based topological sort. Instead of a normal queue, use a min-heap to ensure lexicographical order.

# ...existing code...

import heapq

def lex_smallest_topo_sort(n, adj):
    indegree = [0] * (n + 1)
    for u in range(1, n + 1):
        for v in adj[u]:
            indegree[v] += 1

    heap = []
    for i in range(1, n + 1):
        if indegree[i] == 0:
            heapq.heappush(heap, i)

    result = []
    while heap:
        u = heapq.heappop(heap)
        result.append(u)
        for v in adj[u]:
            indegree[v] -= 1
            if indegree[v] == 0:
                heapq.heappush(heap, v)
    return result

# Read input
n = int(input())
adj = [[] for _ in range(n + 1)]
for i in range(1, n + 1):
    li = list(map(int, input().split()))
    for v in li[1:]:
        if v == -1:
            break
        adj[i].append(v)

ans = lex_smallest_topo_sort(n, adj)
print(*ans)
# ...existing code...

# Key Points
# Always use a min-heap to get the smallest available node.
# Works only for DAGs (no cycles).
# If the graph is not a DAG, topological sort is not possible.



#--------- 16 check if team violated failr play -------
3 3
1 2
2 3
1 3

no

4 4
1 3
2 3
4 1
4 2

yes 
2 




#--------- 17. Optional allocation of doctors ---------

1
3 1
1 2 -1
2 3 -1
3 1 -1
1 1

yes

2
3 2
1 2 -1
2 3 -1
3 1 -1
1 1
3 0
3 3
1 2 -1
2 3 -1
3 1 -1
1 0
2 0
3 0

no 
yes 

