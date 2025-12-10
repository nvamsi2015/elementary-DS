// https://nodesource.com/blog/worker-threads-nodejs-multithreading-in-javascript

// Introduced as an experimental feature in Node.js v10.5.0 and stabilized in v12, 
// the worker_threads module allows developers to run JavaScript code in parallel—off the main thread. 

// What Are Worker Threads in Node.js?
// Worker Threads are a native Node.js module that allow you to spawn multiple threads of execution within a single process. 
// Unlike child_process, which spawns a completely new Node.js instance, worker threads share memory and resources while running independently from the main thread.
// Under the hood, each worker runs in its own isolated V8 environment, which means you can execute heavy JavaScript code without blocking the main event loop.



// Worker threads are ideal for CPU intense operations, like:

// Image or video processing
// Data parsing or transformation
// Complex mathematical computations
// Machine learning inference 

// With just a few lines of code, you can spin up a worker and run expensive operations in the background—without freezing your app.



// When to Use Worker Threads
// While Node.js excels at handling I/O-bound tasks thanks to its non-blocking nature, it struggles with CPU-bound operations. 
// These are the kinds of tasks that require intense computation—like 
// image manipulation, complex math, or data processing—which can block the event loop and cause your application to become unresponsive.

// This is where Worker Threads shine.




// fibonacci-worker.js
const { parentPort, workerData } = require('worker_threads');

function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

const result = fibonacci(workerData);
parentPort.postMessage(result);




// main.js
const { Worker } = require('worker_threads');

function runFibonacci(n) {
  return new Promise((resolve, reject) => {
    const worker = new Worker('./fibonacci-worker.js', {
      workerData: n,
    });

    worker.on('message', resolve);
    worker.on('error', reject);
    worker.on('exit', (code) => {
      if (code !== 0)
        reject(new Error(`Worker stopped with exit code ${code}`));
    });
  });
}

(async () => {
  console.time('fibonacci');
  const result = await runFibonacci(40);
  console.timeEnd('fibonacci');
  console.log(`Fibonacci(40) = ${result}`);
})();



// Communication Between Threads
// To build useful multithreaded applications in Node.js, 
// you need to understand how to send and receive messages between the main thread and your worker threads.

// Node.js provides several ways to handle communication using the worker_threads module:


//  Message Passing with parentPort and worker.postMessage()
// The most common way to exchange data is by sending messages using the built-in EventEmitter-like API.















