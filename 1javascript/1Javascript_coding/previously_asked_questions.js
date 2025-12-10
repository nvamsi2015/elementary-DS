// ------------ 1. palindrome or not javascript


const isPalindrome = (inputStr) => {
    // console.log(inputStr[0], inputStr[inputStr.length - 1])

    for (let i in inputStr ){
        if (inputStr[i] !== inputStr[inputStr.length - 1-i]){
            return false
            break
        }
    }
    return true 
}

console.log(isPalindrome('nitin'))
console.log(isPalindrome('palindrome'))
console.log(isPalindrome('hello'))

//  observation
//  1. in js -1 index wont work for accessing last charecter 
//  let i in  loop gives index 
//  let i of loop gives charecter 

// //  ----- with while loop  ----------
// // The while loop is clearer and avoids issues with for...in (which is not recommended for strings).

const isPalindrome = (str) => {
    let left = 0, right = str.length - 1;
    while (left < right) {
        if (str[left] !== str[right]) return false;
        left++;
        right--;
    }
    return true;
}


// --------- nagarro ---------------

const nested = {
  user: {
	name: "Ankur",
	address: {
  	city: "Bangalore",
  	pin: 560001
	}
  },
  active: true
};
 
{
  "user.name": "Ankur",
  "user.address.city": "Bangalore",
  "user.address.pin": 560001,
  "active": true
}

const flatenObject = (inputObj) =>{
    const temp = Object.keys(inputObj)
    for (let key of temp){
    if ( typeof (inputObj[key]) === 'object' && !Array.isArray(inputObj[key]) && inputObj[key] != null ){
        flatenObject(inputObj[key])
    }
    else{
        modified_object[`${key}`] = inputObj[key]
    }
}
}

let modified_object = {}
flatenObject(nested)
console.log(modified_object)

let modified_object  =


for (let key in nested){
    console.log(key.value())
    // let key_values ={}
    // for (let key_name in key){
    //     console.log(key_name)
    //     // key_values[`${key}-${key_name}] = key[key_name]
    // }
    
    
}

const flattenObject = (obj) => Object.assign({}, ...(function flattenObj(o) { return [].concat(...Object.keys(o).map(k => typeof o[k] === 'object' ? flattenObj({ [k]: o[k] }) : { [k]: o[k] }))})(obj));

const o = { a: 1, b: { c: 2, d: { e: 3 } } };
const r = flattenObject(o);
// r: { a: 1, 'b.c': 2, 'b.d.e': 3 }

// console.log(" Start");
// Promise.resolve().then(() => console.log(" Promise.then"));
// process.nextTick(() => console.log(" process.nextTick"));
// setImmediate(() => console.log(" setImmediate"));
// setTimeout(() => console.log(" setTimeout(0)"), 0);
// console.log(" End");


// start
// end
// setTimeout(0)
// process.nextTick
// Promise.then
// setImmediate


// for (var i = 1; i <= 3; i++) {
//   setTimeout(() => {
// 	console.log("hii:", i);
//   }, i * 1000);
// }

// hii 1000
// hii 2000
// hii 3000

const obj = {
  value: 100,
  Func1: () => {
    console.log("A:", this.value);
  }
};
 
obj.Func1();


// const nums = [2, 5, 8, 11, 4, 9, 3];
// // Square each number.
// // Keep only even squares.
// // Find the sum of those even squares.

// let squared_sums = nums.map((each) => each*each)
// let result = squared_sums.filter((each)=> each%2 == 0).reduce((each,acc)=> {
//     acc = acc+each
//     return acc
// }
// ,0)
// console.log(result)



//   ------------- pandora ----------
//  1. vowels in a given string
// 2. sencond largest and second smallest elements in the list 


// --------- purpule talk -------------
differnece between rest api and sop
how do we perform joins in mongodb
how to we do indexing in mongodb

what are diff types of join and what is inner join
why typescrip why not continue using JSON

what is this, how it takes values in differenct places 

difference between class and functional components
how will we achive life cycle methods in functional components
what is the diff bw useCallback and useMemo 
difference between package.json and packagelock.json



console.log(1)
setTimeout({
        console.log(2)
}, 0)
console.log(3)

----------------------------------

a()
function a(){
    console.log("a")
}

b();
var b = function b(){
    console.log("b")
}

Kavitha Kamineni
1:15 PM
-----------------------------------

const carDetails = {
  name: "Tomer",
    getName() {
      return this.name;
}
}
var name = "Joe";
var getCarName = carDetails.getName;
console.log(getCarName());              // my answer is Tomer, but correct ans is Joe

// ---------- explanation--------
undefined in Node.js, In Node.js, global variables declared with var are not attached to the global object, so this.name is undefined.
Joe in browsers, Since var name = "Joe"; sets a global variable name, this.name returns "Joe".


Explanation:

// getCarName is assigned the method carDetails.getName, but not bound to carDetails.
// When you call getCarName(), this refers to the global object (window in browsers, global in Node.js).
// Since var name = "Joe"; sets a global variable name, this.name returns "Joe".
// To fix and get "Tomer" as output, bind the method:

// console.log(carDetails.getName()); // "Tomer"
// console.log(getCarName.call(carDetails)); // "Tomer"

// Summary:
// When a method is called without its object, this does not refer to the object anymore.

// ============ innovaptive ========= 

function sum(a,b){
  var x= 10 
  return a+b
}

console.log(x)

//  ReferenceError: x is not defined in node .js
//  Uncaught ReferenceError: x is not defined in browser

how can you improve the api performace 

destruction nested object same problem everyone is asking 

given array and Number, find indexes of pair of number whose sum in given number 

// ========= mediamint======

what is uvicorm, what is fastapi 

how do you use types in fastapi 

how do you declare a client component in next.js 

what are dynamic routes in next.js 

what is wsgi 

what is the comparision for the django and flask and fastapi 

what are web apis 







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



// ============== iicl ==============================
// how do you handle mongodb connections failure to update db?

Handling MongoDB connection failures for updates involves using built-in driver mechanisms, implementing application-level retry logic with exponential backoff, and designing for resilience using replica sets and transactional operations. 
Driver-Level Handling (Recommended)
Modern MongoDB drivers handle many transient network errors and replica set elections automatically via retryable writes. This is the most effective and simplest approach for the developer. 
Enable Retryable Writes: For MongoDB version 4.2 and higher, this is enabled by default. For earlier versions, add retryWrites=true to your connection string. This allows the driver to automatically retry certain write operations once if they fail due to a temporary network issue or a primary node change.
Connection Pooling: Use the driver's built-in connection pooling. Configure options like maxPoolSize, connectTimeoutMS, and socketTimeoutMS to manage connection limits and timeouts effectively, preventing the application from hanging indefinitely on a bad connection. 
Application-Level Handling
For persistent errors or specific business logic, you must implement error handling in your application code. 
Use try-catch blocks or Promises: Wrap your database operations in error handling structures (e.g., try-catch in Node.js) to catch exceptions thrown by the driver.
Implement Custom Retry Logic: For errors that are transient (like network glitches or a temporary lack of a primary node during an election), you can implement custom retry logic. Use an exponential backoff strategy (increasing the delay between retries) to avoid overwhelming the database server.
Identify Transient Errors: Differentiate between transient errors (e.g., network timeout, MongoTimeoutError) and permanent errors (e.g., duplicate key error E11000, invalid command). Only retry transient faults.
Limit Retries: Set a maximum number of retries to prevent endless loops and potentially use a "circuit breaker" pattern to stop attempts if failures are persistent.
Log Errors: Always log errors in detail for debugging. Transient errors can be logged as warnings, while persistent failures should be logged as errors that may trigger alerts in your monitoring system.
Graceful Degradation/Fallback: If the update is not critical, consider writing the data to a local queue or a backup store (e.g., a message queue like Kafka) to be processed later when the connection is restored, rather than failing the user request. 
System & Infrastructure Best Practices
Use Replica Sets: Deploy MongoDB as a replica set (multiple servers). This provides high availability; if the primary node fails, the driver automatically finds the new primary, minimizing downtime during an update.
Monitor and Alert: Use monitoring tools (like MongoDB Atlas or Datadog) to track connection health, latency, and failure rates to proactively address underlying infrastructure issues.
Firewall & Network Configuration: Ensure firewall rules and network settings (e.g., IP access lists) are correctly configured to allow traffic between your application and all MongoDB instances. 

// ============= qx impact ======================

// console.log("A");
 
// setTimeout(() => {    
//   console.log("B");
// }, 0);
 
// fs.readFile("data.txt", () => { 
//   console.log("C");
// });
 
// console.log("D");



// A 
// D 
// B 
// C 





// You have a Redux store that keeps track of a single number called count.
// Write a reducer that handles these two actions:
// INCREMENT → increases count by 1
// DECREMENT → decreases count by 1
 




// const CountReducer = (state, action) =>{
//     switch(action.type){
//       case('increment'){
//         return count: state.count+1 
//       }
//       case('decrement'){
//         return count: state.count-1
//       }
//       default:
//         return state
//     }
// }




// FastAPI endpoint /greet/{name} that returns a JSON response like:
// { "message": "Hello, Pooji!" }


// from FastAPI import {FastAPIResponse}

// @App.get
// def greet(req, res):
//   const{name} = req.params 
//   res.data ={
//     'message': 'Hello, pooji'
//   }
//   FastAPIResponse(res) 


// acid properties 

//==================== difference between left join and inner join ===================

// ============= caw studio ceo round questions ========
1. what is the use of refresh token why not only use access token and keeep generation new token when it expired why such complex logic with two tokens 



// ==================== intellectdesignArena ================

// -------------- what is the need for storing token in db?
i answered we dont store users in db but tokens will be stored in browser cache 

he counterd with how will know if the token is tampred or theft how will you handle 

the actual answer should be to store tokens in the db to know a lot of things like managing device sessions




2. ER diagram for autho flow with o auth logins tables 
3. bluetooh signal, direction, blutooth id to get total no students attended every class where to place the device for optimal working ?



1. what are the apis you will design for login flow 
// ---------- 2. in frontend a user is uploading json file but only csv file is valid, frontend allowed it how do you handle it in backend 

//  Verify the MIME Type
// The browser sends a Content-Type header with the file, which indicates the file's MIME type (e.g., text/csv for a CSV file). 
// Action: In your backend code, access the uploaded file's MIME type information provided in the request.
// Validation: Compare the MIME type against an allow-list of valid CSV types (e.g., text/csv, application/vnd.ms-excel, etc., as some programs handle CSVs differently).
// Caution: The MIME type can be spoofed, so this check is also not foolproof and must be combined with content inspection. 


<input type="file" id="fileInput" accept=".jpg, .png">
<p id="messageArea"></p>



// 3. same question how do you keep a limit on the filesize the user is uploading 

// const fileInput = document.getElementById('fileInput');
// const messageArea = document.getElementById('messageArea');
// const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB in bytes

// fileInput.addEventListener('change', function() {
//     // Clear previous messages
//     messageArea.textContent = '';
    
//     // Check if files were selected
//     if (this.files && this.files.length > 0) {
//         const file = this.files[0];
        
//         if (file.size > MAX_FILE_SIZE) {
//             messageArea.textContent = `Error: The file size (${(file.size / (1024 * 1024)).toFixed(2)} MB) exceeds the 5 MB limit.`;
//             messageArea.style.color = 'red';
//             // Optional: clear the input to prevent submission
//             this.value = ''; 
//         } else {
//             messageArea.textContent = `File selected: ${file.name} (Valid size)`;
//             messageArea.style.color = 'green';
//         }
//     }
// });



//------------  4. how will you know how many users are using our frontend and backend ( session management if we are storing token in db)

// To determine the number of users interacting with your frontend and backend applications, you need to implement application performance monitoring (APM) and analytics tools [2, 3, 4]. These tools capture metrics and report them to a central dashboard where you can monitor usage in real-time and over time [2, 3]. 
// Here is a breakdown of the methods and tools used for monitoring frontend and backend usage:
// Monitoring Frontend Application Usage
// Frontend monitoring focuses on client-side activity within the user's web browser or mobile app. 
// Analytics Tools:
// Tools like Google Analytics track user sessions, page views, unique users, active users in real-time, and user journeys [2].
// By embedding a small tracking snippet (usually JavaScript) in your application's code, you can send data points (events) back to the analytics service [2].
// APM Tools:
// Services like Datadog, New Relic, or Sentry provide "Real User Monitoring" (RUM) features [2].
// RUM tracks metrics such as the number of active users, session duration, geographical distribution, and the performance (e.g., load times, errors) they experience [2]. 
// Monitoring Backend Application Usage
// Backend monitoring focuses on server-side requests, processing, and database interactions. 
// APM Tools:
// APM agents (e.g., Datadog APM, New Relic APM, Dynatrace) are installed within your backend server's environment or application code [2, 3].
// These agents track the volume of requests (throughput), number of active server instances, active user sessions managed by the backend, and server resource utilization (CPU, memory) [2, 3].
// Log Management Tools:
// Centralized logging systems like Elasticsearch (ELK stack) or Splunk collect all server logs [3].
// You can analyze these logs to count unique user IDs, unique IP addresses, or unique session tokens to estimate the number of active users [3].
// Database Monitoring:
// You can monitor the number of concurrent connections to your database [3].
// By querying user data tables, you can count the number of sessions created or recently updated within a specific time window [3]. 
// By integrating these solutions across your stack, you can get a comprehensive view of how many users are actively engaging with your entire application ecosystem.

//----------------------  5. sql query to get earliest emplyee in each department given dept_id and joining date for all emloyees 
// SELECT DISTINCT ON (dept_id)
//     dept_id,
//     employee_name,
//     joining_date
// FROM
//     employees
// ORDER BY
//     dept_id,
//     joining_date ASC;

6. lowest salaried employee in every department.A

// 7. A user crashed a server by uploadin a 1gb file how will you handle it in you backend.?

// To handle a 1GB file upload without crashing the server, implement chunked uploads, breaking the file into smaller pieces on the client, sending them sequentially, and reassembling on the backend, alongside server-side limits, validation, and efficient storage (like cloud services or S3) to manage memory/bandwidth, ensuring resilience and scalability. 
// Backend Strategies:
// Implement Chunked Uploads:
// Client-Side: Use JavaScript (like File API) to slice the large file into smaller chunks (e.g., 5-10MB).
// Server-Side: Receive each chunk as a separate request, store them temporarily, and then combine them into the original file once all chunks arrive. Libraries/frameworks often support this (e.g., resumable.js, plupload for JavaScript).
// Set Server Limits & Timeouts (Prevent Crashes):
// Adjust PHP settings (upload_max_filesize, post_max_size, max_input_time, max_execution_time) to allow larger uploads but also prevent indefinite hangs.
// For Node.js, use middleware like express-fileupload or multer with size limits.
// Asynchronous Processing:
// After a successful upload (or chunk assembly), don't process the file directly in the request-response cycle. Instead, place a job (e.g., to a queue like RabbitMQ, Redis) to handle heavy processing (like resizing images, virus scans).
// Use Dedicated Storage (S3, Cloud):
// Upload large files directly to scalable cloud storage (AWS S3, Google Cloud Storage) using their SDKs rather than saving directly to the local server's disk. This offloads storage and bandwidth pressure.
// Validation & Error Handling:
// Validate File Type/Size: Check file type (MIME type) and size before heavy processing.
// Check for Errors: Verify move_uploaded_file() or equivalent functions didn't fail.
// Optimize Network & Server Resources:
// Concurrency: Allow multiple chunk uploads in parallel to speed up transfer.
// Compression: Compress files before upload if possible. 
// Example Flow for a 1GB File:
// User selects 1GB file.
// Client splits file into 100 x 10MB chunks.
// Client uploads chunks 1-100 to the server via separate HTTP requests.
// Server receives chunks, stores them temporarily (e.g., in a Redis temp store or S3).
// Once last chunk arrives, server reassembles the 1GB file.
// Server places a job (e.g., "process_large_video") in a queue.
// A worker process picks up the job, processes the video (e.g., transcode), and saves the final output.
// By chunking and offloading processing, the server's main request thread remains responsive, preventing crashes from a single, massive file. 


//-----------------------  8. how will the web page know which os you are using whiel downloading vscode for the first time in the pc ? 

// The web page uses specific technologies within your web browser to detect your operating system (OS) [1, 2, 3]. Here is how it typically works: 
// User-Agent String: When your browser requests a web page, it sends an "HTTP User-Agent" string to the web server [1, 2]. This string contains information about your browser name and version, and crucial details about your operating system (e.g., Windows 10, macOS Ventura, or a Linux distribution) [1, 2].
// JavaScript: The web page also runs client-side JavaScript code after it loads [1, 3]. This script can access additional browser properties and environmental variables to confirm the OS and sometimes the CPU architecture (like x64 or ARM) [3].
// Server-Side Logic: The web server or content delivery system reads this information and dynamically customizes the download link you see on the page to point to the correct installation file (e.g., a .exe for Windows, a .dmg for macOS, or a .deb/.rpm for Linux) [1, 3]. 
// This process allows the site to automatically recommend the correct version for your PC without you having to manually select your OS [1]. 
