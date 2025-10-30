// ------- promises (mdn) --------

// Promises are the foundation of asynchronous programming in modern JavaScript. A promise is an object returned by an asynchronous function, which represents the current state of the operation. 
// At the time the promise is returned to the caller, the operation often isn't finished, but the promise object provides methods to handle the eventual success or failure of the operation.

// --------- choubey 19. difference between Promise.all(), Promise.allSettled(), Promise.race(), and Promise.any() -------------

// Each of the methods Promise.all(), Promise.allSettled(), Promise.race(), and Promise.any() provides a unique way to manage the resolution or rejection of multiple promises, catering to different use cases. Let's examine their distinct behaviors:



// Promise.all() accepts an iterable of promises as input and returns a new promise that resolves when all the input promises resolve successfully. If any of the input promises rejects, the returned promise also rejects with the reason from the first rejected promise. Essentially, Promise.all() acts as a collective success checkpoint for multiple asynchronous operations.

const promise1 = Promise.resolve(1);
const promise2 = new Promise((resolve, reject) => { 
  setTimeout(() => resolve('Resolved'), 1000); 
});
const promise3 = Promise.reject('Rejected');

Promise.all([promise1, promise2, promise3])
  .then((values) => {
    console.log("All promises resolved:", values); // This block will not execute
  })
  .catch((error) => {
    console.error("At least one promise rejected:", error); // Outputs: At least one promise rejected: Rejected
  });

// Promise.allSettled() behaves similarly to Promise.all(), but it returns an array of settled promises, regardless of whether they resolved or rejected. Each element in the returned array represents the state and result (if any) of the corresponding input promise. This method is useful when you need information about the status of all promises, even if some failed.
Promise.allSettled([promise1, promise2, promise3])
  .then((results) => {
    console.log("All promises settled:", results); 
  });

// Promise.race() accepts an iterable of promises and returns a new promise that resolves or rejects as soon as one of the input promises does so. It prioritizes speed, resolving or rejecting based on the fastest outcome among the given promises. This method is useful when you need to handle the first completed promise without waiting for others.
const fastPromise = Promise.resolve('Fast');
const slowPromise = new Promise((resolve) => setTimeout(resolve, 1000, 'Slow'));

Promise.race([fastPromise, slowPromise])
  .then((result) => {
    console.log("First promise resolved:", result); // Outputs: First promise resolved: Fast
  });


// Promise.any() accepts an iterable of promises and returns a new promise that resolves with the value of the first promise to resolve in the input iterable. If all input promises reject, Promise.any() rejects with an AggregateError containing information about all rejected promises. Thi/s method is useful when you need to wait for at least one promise to succeed, regardless of how many others might fail.
const successfulPromise = Promise.resolve('Success');
const failingPromises = [
  new Promise((_, reject) => reject('Rejected 1')),
  new Promise((_, reject) => reject('Rejected 2'))
];

Promise.any([successfulPromise, ...failingPromises])
  .then((result) => {
    console.log("First resolved promise:", result); // Outputs: First resolved promise: Success
  })
  .catch((error) => {
    console.error("All promises rejected:", error); 
  });



// --------- 27. implement a custom promise that tracks the number of fulfilled/rejected promises created?-------------

class CustomPromise {
  constructor() {
    this.fulfilledCount = 0;
    this.rejectedCount = 0;
    this.state = 'pending'; // Initial state

    this._resolve = (value) => {
      if (this.state !== 'pending') return;
      this.state = 'fulfilled';
      this.fulfilledCount++;
      // Resolve callback if it exists
      if (this._onFulfilled) {
        this._onFulfilled(value);
      }
    };

    this._reject = (reason) => {
      if (this.state !== 'pending') return;
      this.state = 'rejected';
      this.rejectedCount++;
      // Reject callback if it exists
      if (this._onRejected) {
        this._onRejected(reason);
      }
    };
  }

  then(onFulfilled, onRejected) {
    this._onFulfilled = onFulfilled;
    this._onRejected = onRejected;
    return this; // Allow chaining
  }

  // Example: Public method to handle resolve/reject
  resolve(value) {
    this._resolve(value);
  }

  reject(reason) {
    this._reject(reason);
  }

  get fulfillmentCount() {
    return this.fulfilledCount;
  }

  get rejectionCount() {
    return this.rejectedCount;
  }
}


// Example Usage:

const promise1 = new CustomPromise();

promise1
  .then((value) => console.log('Fulfilled:', value))
  .catch((error) => console.error('Rejected:', error));

promise1.resolve(42); // Logs 'Fulfilled: 42'

console.log("Fulfillment Count:", promise1.fulfillmentCount); // Output: 1

// Explanation:
// fulfilledCount and rejectedCount: These properties track the number of times the Promise has been successfully fulfilled or rejected, respectively.
// _resolve and _reject: Private methods to handle fulfillment and rejection internally.
// then Method: Allows you to register callbacks for fulfillment (onFulfilled) and rejection (onRejected).
// Public Methods resolve and reject: Provide a way to externally resolve or reject the Promise.