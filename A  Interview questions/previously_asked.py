


# //  Turing questions --------

# Scenario 1: Full-Stack Developer Building a Scalable Task Management System

 

# Question 1:  Backend - Task Prioritization Algorithm (Python, Data Structures & Algorithms)

 

# You are developing a task management system where each task has a priority level (1-5, with 1 being highest) and a due date. Tasks must be retrieved in the order of highest priority first and earliest due date in case of tie.

# Problem Statement:

# Implement a TaskManager class with the following methods:
# add_task(name: str, priority: int, due_date: str): Adds a task (due_date in "YYYY-MM-DD" format).
# get_next_task() -> str: Retrieves the next highest-priority task (removes it from the system).
# get_all_tasks() -> List[str]: Returns all tasks sorted by priority and due date.
# Input/Output Examples:

 

# tm = TaskManager()
# tm.add_task("Write report", 3, "2025-02-15")
# tm.add_task("Fix bug", 1, "2025-02-10")
# tm.add_task("Update API", 1, "2025-02-12")
# print(tm.get_next_task()) # Output: "Fix bug"
# print(tm.get_all_tasks()) # Output: ["Update API", "Write report"]
 

#  solved it using priorityQueue from collections;

#  ------------------

# Question 2: Frontend - Optimizing Task List Rendering (React, Performance Optimization)

 

# Context: The frontend React application renders a list of tasks dynamically. A performance issue arises when handling large datasets (5,000+ tasks).

# Problem Statement:

# Optimize the React component to render only visible tasks using virtualization.
# Ensure state updates efficiently when tasks are added or removed.
# Starter Code (Inefficient Rendering):

 

# const TaskList = ({ tasks }) => {
#  return (
 

#  {tasks.map(task => (
 

#  {task.name}
 

#  ))}
 

#  );
# };
 
# solution:

# import { FixedSizeList as List } from "react-window";

# const TaskList = ({ tasks }) => (
#   <List
#     height={400}           // Height of the visible area (px)
#     itemCount={tasks.length}
#     itemSize={35}          // Height of each item (px)
#     width={"100%"}
#   >
#     {({ index, style }) => (
#       <div style={style}>
#         {tasks[index].name}
#       </div>
#     )}
#   </List>
# );

# export default TaskList;


#  -------- other way 
# To add a lazy loader (infinite scroll/loading more data as you scroll) with virtualization in React, you typically:

# Use a virtualization library like react-window.
# Detect when the user scrolls near the end of the list.
# Trigger a callback to load more data.


import { FixedSizeList as List } from "react-window";
import React from "react";

const TaskList = ({ tasks, loadMore }) => (
  <List
    height={400}
    itemCount={tasks.length}
    itemSize={35}
    width={"100%"}
    onItemsRendered={({ visibleStopIndex }) => {
      // If user scrolls near the end, call loadMore
      if (visibleStopIndex >= tasks.length - 5) {
        loadMore();
      }
    }}
  >
    {({ index, style }) => (
      <div style={style}>
        {tasks[index].name}
      </div>
    )}
  </List>
);

export default TaskList;


# Usage:

# Pass a loadMore function from your parent component that fetches more tasks and updates the state.
# The lazy loader triggers when the user scrolls within 5 items of the end.
# Note:
# Make sure loadMore does not fetch repeatedly if already loading or if all data is loaded.


#  --------- what is lazy loading and give some examples ----------


# ========= wexa.ai ========================


leetcode 560: Subarray Sum Equals K


Input: nums = [1,1,1], k = 2
Output: 2
Example 2:

Input: nums = [1,2,3], k = 3
Output: 2

# ------------ my ans  only passing 27/90 testcases -------------
class Solution:
    def subarraySum(self, nums: List[int], k: int) -> int:
        left =0
        # right = 0
        sum = 0 
        count= 0 
        
        for num in nums:
            sum +=num
            if sum== k:
                count+=1
                sum-=nums[left]
                left+=1
                # print(sum, left)
            while sum >k:
                # print(sum, num)
                sum-=nums[left]
                left+=1
                # print(sum, num)
                if sum==k:
                    count+=1

        return count



# ============== intraedge ================

# what is shallow copy and deep copy with example 
i have used spread operator for shallow, 
for deep i have used nagarrows flatten nested object proceducre to get all the keys and values to be copied but there are better ways to do it 

# what is virtual dom and how does it work?


# what is middleware and write an example 

# what are the testing stategies you have used? - only manuel testing 

# what are the deployment procedures you have used?

# in what cases you have used rest api give some examples - loan forms in varthana 

