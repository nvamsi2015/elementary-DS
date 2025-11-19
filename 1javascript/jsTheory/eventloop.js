Call stack keeps track of the functions being executed in a program. When a function is called, it is added to the top of the call stack. 
When the function completes, it is removed from the call stack. 


Web APIs/Node.js APIs
Asynchronous operations like setTimeout(), HTTP requests, file I/O, etc., are handled by Web APIs (in the browser) or C++ APIs (in Node.js). 
These APIs are not part of the JavaScript engine and run on separate threads, allowing them to execute concurrently without blocking the call stack.

Task queue / Macrotask queue / Callback queue
The task queue, also known as the macrotask queue / callback queue / event queue, is a queue that holds tasks that need to be executed. 
These tasks are typically asynchronous operations, such as callbacks passed to web APIs (setTimeout(), setInterval(), HTTP requests, etc.), and user interface event handlers like clicks, scrolls, etc.

Microtasks queue
Microtasks are tasks that have a higher priority than macrotasks and are executed immediately after the currently executing script is completed and before the next macrotask is executed. 
Microtasks are usually used for more immediate, lightweight operations that should be executed as soon as possible after the current operation completes. 
There is a dedicated microtask queue for microtasks. Microtasks include promises callbacks (then(), catch(), and finally()), await statements, queueMicrotask(), and MutationObserver callbacks.

// examples from https://www.jsv9000.app/

// ================= TaskQueu/callbackQueue/messageQueue working ==========

setTimeout(function a() { console.log('a')}, 1000);

setTimeout(function b() {console.log('b')}, 500);

setTimeout(function c() {console.log('c')}, 0);

function d() {}

d();

// c
// b
// a

// Here is a step-by-step explanation:1. 

// Execution of Synchronous CodeWhen the JavaScript engine first encounters your code, it executes it synchronously, line by line, 
// pushing function calls onto the Call Stack.setTimeout(function a() { ... }, 1000);:setTimeout is a Web API function (provided by the browser or Node.js, not by the JS engine itself).
// It is called and immediately passes the callback function a and the delay 1000ms to the Web APIs environment.The setTimeout call is then popped off the Call Stack.setTimeout(function b() { ... }, 500);
// The same process happens. Callback b and a delay of 500ms are passed to the Web APIs environment.The setTimeout call is popped off the Call Stack.setTimeout(function c() { ... }, 0);
// Again, callback c and a delay of 0ms are passed to the Web APIs environment.The setTimeout call is popped off the Call Stack.function d() {} and d();
// The function d is defined and immediately called. This is synchronous code.d() is pushed onto the Call Stack, executed (it does nothing), and then popped off.2. 

// ⏳ Web APIs and Timer ManagementThe Web APIs environment starts the timers concurrently for the three setTimeout calls:

// CallbackDelayTimer Finishes (Relative Time)
// c()  0ms    ~0 ms
// b()  500ms  ~500 ms
// a()  1000ms ~1000 ms

// When a timer expires, the Web API does NOT put the callback directly onto the Call Stack.Instead, it moves the callback function to the Callback Queue.
// The order they enter the Callback Queue is determined by when their timers expire:Callback c is moved to the Queue almost immediately (at $\approx 0$ms).
// Callback b is moved to the Queue next (at $\approx 500$ms).Callback a is moved to the Queue last (at $\approx 1000$ms).3. 

// 🔁 The Event Loop's RoleThe Event Loop is a constantly running process that performs a single, critical check:
// Is the Call Stack empty?After all the synchronous code (setTimeout calls and d()) finishes, the Call Stack is empty.
// The Event Loop sees the Stack is empty and checks the Callback Queue.Processing the Queue:Call Stack is empty.The Event Loop takes Callback c (the first one in the Queue) and pushes it onto the Call Stack.
// c() executes, calls console.log('c'), and is popped off.Output: cThe Event Loop repeats. The Call Stack is empty. It waits until $\approx 500$ms when Callback b is available in the Queue.
// The Event Loop takes Callback b and pushes it onto the Call Stack.b() executes, calls console.log('b'), and is popped off.Output: bThe Event Loop repeats. The Call Stack is empty. 

// It waits until $\approx 1000$ms when Callback a is available in the Queue.The Event Loop takes Callback a and pushes it onto the Call Stack.a() executes, calls console.log('a'), and is popped off.Output: a 

// Conclusion

// The output is c, b, a because:Synchronous code runs first. All three setTimeout calls are merely initialized immediately.
// The delay time (0ms, 500ms, 1000ms) dictates the order the callbacks enter the Callback Queue (c, then b, then a).
// The Event Loop strictly processes the callbacks from the Queue in First-In, First-Out (FIFO) order, but only after the Call Stack is completely clear of all synchronous code.

// ======== why fecth becomes macrotask eventhough it gives promises, synchronous promises go to microtask, fetch's resove callback comes to microtask but fetch resource will be in macrotask ============ 

fetch('https://www.google.com')
  .then(function a() {console.log('a')});

Promise.resolve()
  .then(function b() {console.log('b')});

Promise.reject()
  .catch(function c() {console.log('c')});

// b
// c
// a

JavaScript Event Loop prioritizes Microtasks (Promises) over Macrotasks (like fetch's callback).

// // Synchronous Execution

// All synchronous code runs first, pushing items onto the Call Stack:
// fetch('...'): The fetch function is called. It immediately initiates a network request in the Web APIs environment. The function call is popped off the stack.
// Promise.resolve().then(function b() { ... }): The resolved promise callback b() is immediately scheduled as a Microtask.
// Promise.reject().catch(function c() { ... }): The rejected promise callback c() is immediately scheduled as a Microtask.

// At this point, the synchronous code is finished, and the Call Stack is empty. The Microtask Queue contains the callbacks for the native promises. b, c is output
// Now, the Microtask Queue is empty.

// // Handling the fetch Callback
// The fetch API is considered a Macrotask because its resolution, after the network request completes, is handled in a similar way to setTimeout.
// The network request initiated by fetch('...') is running in the background (Web APIs).
// Once the response is received (which takes time, even if it's minimal), the Web API pushes the associated .then() callback, a(), onto the Macrotask Queue (also known as the Task Queue).

//  The reason fetch's resolution is considered a Macrotask is to prevent the completion of a potentially long-running network request from monopolizing the thread. 
// If all I/O operations (like fetch) were Microtasks, a continuous stream of network activity could starve other important processes (like rendering updates, user input, or other timers) that rely on the Macrotask Queue.

// he Event Loop takes Macrotask a and pushes it onto the Call Stack. It executes console.log('a').

// so the output is b c a


// point of confusion

// fetch() returns a Promise, and the then() and catch() methods attached to that returned Promise are, by definition, Microtasks.
// However, the key distinction lies in when the callback (like function a() in your example) is actually scheduled.


// The Dual-Phase Nature of fetch *********************

// The fetch operation has two major asynchronous phases that determine where its callbacks are queued:

// Phase 1: Initiation and Network Completion (Macrotask)
// Phase 2: Promise Resolution (Microtask)

// phase1 involves the browser's Web APIs environment handling the actual I/O (Input/Output)—the network request.
// When you call fetch(), the browser initiates the network request. This process happens outside the JavaScript engine.
// The browser waits for the entire response to be downloaded, including the headers and the body.
// Once the browser has the full response, it must signal the JavaScript engine that the network I/O is complete and the first Promise (the one returned by fetch) is ready to resolve.
// The mechanism used to signal the completion of this I/O and schedule the resolution of the initial fetch promise is categorized as a Macrotask. This is often compared to a setTimeout(..., 0).

// in phase2, Once the resolution of the fetch Promise is scheduled as a Macrotask and eventually executes, 
// the subsequent operations—like calling the then(function a() { ... }) handler—are then handled as Microtasks.
// This means that while the core network completion is treated as a Macrotask, the subsequent .then() chaining within the fetch result utilizes the Microtask Queue.

// The Macrotask is the moment the external event (the network completion) crosses the boundary back into the JavaScript runtime. 
// Only after that Macrotask runs and resolves the initial promise does the .then(a) callback get scheduled into the Microtask Queue.


// //  // Summary
// Because the initial I/O completion is handled via the Macrotask mechanism, the callback for fetch's first .then() must wait for the Event Loop to clear all Macrotasks and all Microtasks that were scheduled earlier.

// In your original code:
// Synchronous Promises (Promise.resolve(), Promise.reject()) immediately schedule their handlers (b and c) into the Microtask Queue.
// The Event Loop clears all Microtasks first: b, then c.
// Only after the Microtask Queue is empty can the Event Loop process the Macrotask that signals the fetch completion, which then allows a to run.


// ============= synchronous promises directly go to microtasks, setTimeouts go to macrotask =============

setTimeout(function a() {console.log('aaa')}, 0);
Promise.resolve().then(function b() {console.log('bbb')});

// bbb
// aaa

// =================== promise.all() vs promise.race() ======================

E = 'https://www.google.com';
const NEWS = 'https://www.news.google.com';

/* b, c, after */
Promise.all([
  fetch(GOOGLE).then(function b() {console.log('b')}),
  fetch(GOOGLE).then(function c() {console.log('c')}),
]).then(function after() {console.log('a')});

/* 
b, after, c 
*/
Promise.race([
  fetch(GOOGLE).then(function b() {console.log('b')}),
  fetch(GOOGLE).then(function c() {console.log('c')}),
]).then(function after() {console.log('a')});

/* c, after, b */
Promise.race([
  fetch(NEWS).then(function b() {console.log('b')}),
  fetch(GOOGLE).then(function c() {console.log('c')}),
]).then(function after() {console.log('a')});

// ----------- promises and errors ------

Promise.resolve()
  .then(function a() {
    Promise.resolve().then(function d() {console.log('d')})
    Promise.resolve().then(function e() {console.log('e')})
    throw new Error('OH TEH NOEZ!')
    Promise.resolve().then(function f() {console.log('f')})
  })
  .catch(function b() {console.log('b')})
  .then(function c() {console.log('c')})


// d
// e
// b
// c

// ------- nested promises --------
Promise.resolve()
  .then(function a() {
    Promise.resolve().then(function c() {console.log('c')});
  })
  .then(function b() {
    Promise.resolve().then(function d() {console.log('d')});
  });

// c 
// d

// ========= wrapping setTimeouts in promise ========
const pause = (millis) =>
  new Promise(resolve => setTimeout(resolve, millis));

const start = Date.now();
console.log('Start');

pause(1000).then(() => {
  const end = Date.now();
  const secs = (end - start) / 1000;
  console.log('End:', secs);
});

// ============


// -------- ex1 ----------------
console.log('Start');

setTimeout(() => {
  console.log('Timeout 1');
}, 0);

Promise.resolve().then(() => {
  console.log('Promise 1');
});

setTimeout(() => {
  console.log('Timeout 2');
}, 0);

console.log('End');

// Console output:
// Start
// End
// Promise 1      Promise 1 is logged next because promises are microtasks and microtasks are executed immediately after the items on the call stack.
// Timeout 1      Timeout 1 and Timeout 2 are logged last because they are macrotasks and are processed after the microtasks.  
// Timeout 2


// =========== ex2=============

console.log(1);

setTimeout(function () {
  console.log(2);
}, 0);

Promise.resolve()
  .then(function () {
    console.log(3);
  })
  .then(function () {
    console.log(4);
  });

// 1
// 3
// 4
// 2

// ============= ex3 ========== 

// promises directly doesnt got to microtask queue, first promises go to taskqueue/macrotaskqueue only but when callback function of promise like resolve gets called, then that calback goes to microtask queue 

// run this example in https://www.jsv9000.app/

console.log("begins");

setTimeout(() => {
  console.log("setTimeout 1");
  Promise.resolve().then(() => {
    console.log("promise 1");
  });
}, 0);

new Promise(function (resolve, reject) {
  console.log("promise 2");
  setTimeout(function () {
    console.log("setTimeout 2");
    resolve("resolve 1");
  }, 0);
}).then((res) => {
  console.log("dot then 1");
  setTimeout(() => {
    console.log(res);
  }, 0);
});


// begins
// promise 2
// setTimeout 1
// promise 1
// setTimeout 2
// dot then 1
// resolve 1


// ========== how eventloop handles async functions with await steps ================

// ****************************************************************************************************
// await keyword is the critical part, it pauses the execution of logic after await step,  It wraps the rest of the async1 function (i.e., console.log("async1 end")) into a Promise callback.
// This callback is immediately placed into the Microtask Queue.


async function async1() {
  console.log("async1 start");
  await async2();
  console.log("async1 end");
}

async function async2() {
  console.log("async2");
}

console.log("script start");

setTimeout(function () {
  console.log("setTimeout");
}, 0);

async1();

new Promise(function (resolve) {
  console.log("promise1");
  resolve();
}).then(function () {
  console.log("promise2");
});

console.log("script end");


// script start
// async1 start
// async2
// promise1
// script end
// async1 end
// promise2
// setTimeout


// To understand this output, we need to follow the execution order dictated by the Call Stack, Microtask Queue (for Promises/await), and Macrotask Queue (for setTimeout/setInterval).

// Here is a step-by-step trace:

// 1. Initial Synchronous Execution (Call Stack)
// The JavaScript engine reads the script line by line and executes synchronous code immediately.

// console.log("script start") runs.

// Output: script start

// setTimeout(...) is encountered. The callback function is handed off to the Web APIs timer and will be placed in the Macrotask Queue after 0ms (but only after the Call Stack is empty).

// async1() is called.

// 2. Executing async1()
// Inside async1, console.log("async1 start") runs.

// Output: async1 start

// await async2() is called.

// async2() runs immediately.

// Inside async2, console.log("async2") runs.

// Output: async2

// The await keyword is the critical part:

// It pauses the execution of async1.

// It wraps the rest of the async1 function (i.e., console.log("async1 end")) into a Promise callback.

// This callback is immediately placed into the Microtask Queue.

// The async1 function execution finishes for now, and control returns to the main script.

// 3. Back to Synchronous Execution
// The new Promise(...) constructor is encountered. The function passed to new Promise runs synchronously.

// console.log("promise1") runs.

// Output: promise1

// resolve() is called. The .then() callback (which prints "promise2") is placed into the Microtask Queue, behind the pending async1 continuation.

// console.log("script end") runs.

// Output: script end

// At this point, the Call Stack is empty.

// ⏳ Event Loop Phases (Task Queues)
// The Event Loop now takes over. It always prioritizes the Microtask Queue before checking the Macrotask Queue.

// Phase 1: Processing Microtasks
// The Microtask Queue now contains two items, in this order:

// The continuation of async1 (to print "async1 end").

// The .then() callback from new Promise (to print "promise2").

// Microtask 1 runs: console.log("async1 end") runs.

// Output: async1 end

// Microtask 2 runs: console.log("promise2") runs.

// Output: promise2

// The Microtask Queue is now empty.

// Phase 2: Processing Macrotasks
// The Event Loop moves to the Macrotask Queue (where the setTimeout callback is waiting).

// Macrotask 1 runs: console.log("setTimeout") runs.

// Output: setTimeout

// The Macrotask Queue is now empty, and the script finishes.

// Summary of Execution Order:
// Synchronous Code (script start, async1 start, async2, promise1, script end)

// Microtask Queue (async1 end, promise2)

// Macrotask Queue (setTimeout)



