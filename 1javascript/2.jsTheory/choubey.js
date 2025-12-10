// ----  1.Explain the difference between `Array.prototype.filter()` and `Array.prototype.reduce()`.
// -- markdown format for the webpage can be learned from this text-------

// # Question 1

// ### Question

// Explain the difference between `Array.prototype.filter()` and `Array.prototype.reduce()`.

// ### Answer

// **`Array.prototype.filter()`**

// * **Purpose:** Creates a *new* array containing only the elements from the original array that pass a certain test (defined by the provided function).
// * **How it works:** It iterates through each element in the array, calls the provided function for each element, and includes the element in the new array if the function returns `true`.
// * **Result:** A *new* array with elements that meet the condition.

//   ```javascript
//   const numbers = [1, 2, 3, 4, 5];

//   const evenNumbers = numbers.filter(number => number % 2 === 0); 
//   console.log(evenNumbers); // Output: [2, 4]
//   ```

// **`Array.prototype.reduce()`**

// * **Purpose:** Combines all elements of an array into a single value (accumulator). It's great for performing calculations or aggregating data from the array.
// * **How it works:** It iterates through each element in the array, accumulating a value based on the current element and the previously accumulated value (the "reducer" function provides this logic).
// * **Result:** A *single* value representing the aggregated result of all elements in the array.

//   ```javascript
//   const numbers = [1, 2, 3, 4, 5];

//   const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
//   console.log(sum); // Output: 15
//   ```

// **In Essence:**

// * `filter()` creates a new array based on criteria. Think "selection."
// * `reduce()` combines the elements of an array into a single value. Think "aggregation."


// --------- 2.Can you explain how to use Array.prototype.flatMap() for chaining map and flatten operations? -------------

const nestedArray = [[1, 2], [3, 4], [5]];
const flattenedArray = nestedArray.flatMap(subArray => subArray); // Flatten and combine
console.log(flattenedArray); // Output: [1, 2, 3, 4, 5]

// --------- 3. How would you implement a custom method to check if an array contains duplicates?

function hasDuplicates(arr) {
  const seen = new Set(); 

  for (const item of arr) {
    if (seen.has(item)) {
      return true; // Duplicate found!
    }
    seen.add(item);
  }

  return false; // No duplicates found
}

// Example usage:
const array1 = [1, 2, 3, 4, 5];
console.log(hasDuplicates(array1)); // Output: false

const array2 = [1, 2, 3, 2, 4];
console.log(hasDuplicates(array2)); // Output: true



// --------- 4.Can you explain how to use named capture groups and how to access them in JavaScript?  -------------

// Named capture groups add clarity and organization to regular expressions by giving meaningful names to the parts of a string you want to extract.
const regex = /(?<name>\w+)\s+(?<age>\d+)/;
const match = regex.exec("John 30");
if (match) {
  console.log(match.groups.name); // Output: "John"
  console.log(match.groups.age);   // Output: "30"
}

const emailRegex = /(?<username>\w+)\@(?<domain>\w+\.\w+)/;
const email = "john.doe@example.com";

const match = emailRegex.exec(email);

if (match) {
  console.log("Username:", match.groups.username); // Output: Username: john.doe
  console.log("Domain:", match.groups.domain);   // Output: Domain: example.com
}

// Key Advantages:
// Readability: Named groups make your regex patterns much easier to understand and maintain.
// Organization: They clearly label the parts of a string you're capturing, improving code clarity.

// --------- 5.Explain the difference between indexOf(), includes(), and search() methods for string manipulation.  -------------

const text = "Hello world!";

// indexOf(searchString, start)

console.log(text.indexOf("world")); // Output: 6
console.log(text.indexOf("hello", 5)); // Output: -1 (searching from index 5)
console.log(text.indexOf("banana")); // Output: -1 (not found)

// includes(searchString, start)

console.log(text.includes("world"));    // Output: true
console.log(text.includes("example"));  // Output: false 
console.log(text.includes("lo", 4));     // Output: false (searching from index 4)

// search(regexp) returns the index of the first match of the regular expression, -1 if not found

const text2 = "This is a test.";
const regex = /\btest\b/i; // Matches the word "test" (case-insensitive)

console.log(text2.search(regex)); // Output: 10

// --------- 6. Can you explain how to use regular expressions with lookbehind assertions ((?<...))) in JavaScript? -------------

// Regular expressions (regex) are powerful for finding and manipulating text, and lookbehind assertions add another layer of sophistication by allowing you to check for patterns before a specific match.
// Let's say you want to find all instances of the word "match" but only when it follows a digit:



const regex = /(?<=\d)match/; // Lookbehind for any digit followed by "match"
const text = "12 match, 34 match, abc";

const matches = text.match(regex);
console.log(matches); // Output: [" match", " match"]

// --------- 7.Can you explain how to use Number.isFinite(), Number.isNaN(), and Number.isInteger() for type checking? -------------

// Number.isFinite(number)
console.log(Number.isFinite(5));         // Output: true
console.log(Number.isFinite(Infinity));  // Output: false
console.log(Number.isFinite(-10.5));      // Output: true
console.log(Number.isFinite('hello'));    // Output: false 

// Number.isNaN(number)
console.log(Number.isNaN(NaN));            // Output: true
console.log(Number.isNaN(123));          // Output: false
console.log(Number.isNaN('hello'));       // Output: true
console.log(Number.isNaN(Infinity));      // Output: false 

// Number.isInteger(number)
console.log(Number.isInteger(5));       // Output: true
console.log(Number.isInteger(3.14));     // Output: false
console.log(Number.isInteger(-7));      // Output: true

// ---------8.implement a custom range checking function that uses Number.isFinite() internally?  -------------
// incorporating the power of Number.isFinite() for robust validation:

function isInRange(value, min, max) {
  return Number.isFinite(value) && value >= min && value <= max; 
}

// Examples:
console.log(isInRange(5, 1, 10));    // Output: true (5 is within the range)
console.log(isInRange(20, 1, 10));   // Output: false (20 is outside the range)
console.log(isInRange(-1, 1, 10));  // Output: false (-1 is outside the range)
console.log(isInRange(NaN, 1, 10));  // Output: false (NaN is not finite)

// --------- 9.Can you explain how NaN === NaN evaluates to false -------------

// It seems counterintuitive that NaN === NaN would evaluate to false. Here's the explanation:

// NaN's Special Nature: NaN (Not a Number) isn't just any regular value. It represents an undefined or unrepresentable numerical result in JavaScript. Because of this unique status, it doesn't behave like other numbers when compared using the strict equality operator (===).

// The === Operator: The strict equality operator (===) checks for both value and type equality. For most data types (numbers, strings, booleans), this means:
// If two values have the same value and are of the same type, they are considered strictly equal.

// NaN's Exception: When you compare NaN to itself (NaN === NaN), JavaScript doesn't find a true match based on its value or type because NaN isn't a recognizable numerical value in the first place. Therefore, === returns false.

// Practical Implications:
// Careful Comparison: Never rely on === to check if something is NaN. Use the dedicated isNaN() function instead:

if (isNaN(value)) { 
  // Handle NaN values appropriately
}


// --------- 10. How would you determine if a value is an integer without using typeof or any other built-in methods? -------------

function isInteger(value) {
  return (
    Number.isFinite(value) && // Ensures it's a finite number 
    value % 1 === 0 // Checks for divisibility by 1, a key property of integers
  );
}

console.log(isInteger(5));   // Output: true
console.log(isInteger(3.14)); // Output: false
console.log(isInteger(-7));  // Output: true

// --------- 11. How would you determine if two objects are structurally equal (e.g., object shapes)? -------------

// Determining structural equality means checking if two objects have the same properties and values, regardless of their order or nesting depth.

function areStructurallyEqual(obj1, obj2) {
  // Handle cases where one or both objects are not plain objects
  if (typeof obj1 !== 'object' || typeof obj2 !== 'object') {
    return obj1 === obj2; // Primitive values should be compared directly
  }

  // Check if both objects have the same number of properties
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length) {
    return false; 
  }

  // Compare property values recursively
  for (let i = 0; i < keys1.length; i++) {
    const key = keys1[i];
    if (!areStructurallyEqual(obj1[key], obj2[key])) {
      return false; // Mismatch found in a nested property
    }
  }

  return true; 
}

// Example usage:
const objA = { a: 1, b: { c: 2 } };
const objB = { a: 1, b: { c: 2 } };
const objC = { a: 1, b: 3 }; // Different value in property 'b'

console.log(areStructurallyEqual(objA, objB)); // true
console.log(areStructurallyEqual(objA, objC)); // false

// ---------12. Can you explain how JavaScript handles type coercion and when it occurs? -------------

// Type coercion is the automatic conversion of a value from one data type to another. While often convenient, it can lead to unexpected results if not understood carefully.

// When Type Coercion Happens:

// 1. Implicit Type Coercion: This occurs automatically in operations where JavaScript determines that converting a value to a different type is necessary for the operation to make sense.

// Arithmetic Operations (+, -, , /): When you mix numbers and strings, JavaScript will attempt to convert the string to a number first.
console.log(5 + "10"); // Output: 15 (String "10" is coerced to number 10)


// Comparison Operators (==, ===, <, >): JavaScript will often coerce values on either side of a comparison before making the evaluation. This can lead to surprising results if not careful.
console.log(5 == "5"); // Output: true (String "5" is coerced to number 5)
console.log(5 === "5"); // Output: false (Types are different after coercion)

// 2. Explicit Type Coercion: You can also force type conversion using explicit methods:

// Number(): Converts a value to a number.
// String(): Converts a value to a string.
// Boolean(): Converts a value to a boolean (true/false).
// parseInt(), parseFloat(): Parse strings as integers or floating-point numbers.

// Why Type Coercion Exists:
// Convenience: It simplifies many operations by automatically handling type conversions in common scenarios.
// Duck Typing: JavaScript emphasizes "duck typing," where the type of an object matters less than its behavior.

// Potential Pitfalls:
// Unexpected Results: Coercion can lead to bugs if you're not aware it's happening and how it affects your code.
// Loss of Precision: Converting between number types (e.g., float to integer) can result in data loss.

// Best Practices:
// Be mindful of where type coercion occurs in your code.
// Use explicit type conversions when you need to guarantee a specific data type.
// Favor strict equality comparisons (===) over loose comparisons (==) to avoid unexpected coerced results.

// --------- 13. Explain the difference between null, undefined, and NaN. -------------

// null: Represents the intentional absence of a value. It signifies that a variable or property is explicitly set to nothing.
let myVariable = null;  //  We intentionally assigned 'nothing' to myVariable

// undefined: Indicates that a variable has been declared but hasn't been assigned a value yet. It's the default state of a variable until you give it a specific value.
let anotherVariable; //  anotherVariable is now 'undefined' because we declared it but didn't assign a value 
console.log(anotherVariable); // Output: undefined

// NaN (Not a Number): Meaning: Represents an invalid or unrepresentable numerical value. This usually occurs when you perform mathematical operations that result in a non-numeric outcome.
console.log(Math.sqrt(-1)); // Output: NaN 

// Key Differences:
// Intent: null is explicit (intentional absence), while undefined is implicit (no value assigned). NaN indicates a computation error.
// Comparison: You cannot directly compare null, undefined, and NaN using == or ===. Use specific checks:

if (value === null) { /* Handle null */ }
else if (typeof value === 'undefined') { /* Handle undefined */ }
else if (isNaN(value)) { /* Handle NaN */ }



// --------- 14. How would you check if a value is a promise in JavaScript? -------------

function isPromise(value) {
  return typeof value === 'object' && value !== null && 
         typeof value.then === 'function';
}

// typeof value === 'object' && value !== null: This part ensures we're dealing with an object, not a primitive type like a number or string. It also excludes null.
// typeof value.then === 'function': The key check! Promises have a .then() method that is used to handle their resolution or rejection. If this method exists and is a function, we've likely found a Promise.

// This method works reliably for standard Promises created with new Promise().
// Some libraries might implement custom Promise-like objects. The above check should catch most common cases, but it might not cover every edge case.

// --------- 15.Can you explain how JavaScript handles big integers internally? -------------



// --------- 16. What are some valid use cases for using BigInt in JavaScript? -------------



// --------- 17.Explain the difference between Math.max() and the spread operator (...) when used with arguments  -------------

const max = Math.max(5, 12, 3, 8); // Returns 12

const numbers = [5, 12, 3, 8];
const max = Math.max(...numbers); // Returns 12

// --------- 18. How would you implement a custom deepCopy() method? -------------

function deepCopy(obj) {
  return JSON.parse(JSON.stringify(obj));
}

// --------- 18.How would you implement a custom deepCopy() method? -------------

function deepCopy(obj) {
  return JSON.parse(JSON.stringify(obj));
}

const originalObject = {
  name: "Alice",
  age: 30,
  address: {
    street: "123 Main St",
    city: "Anytown"
  }
};

const copiedObject = deepCopy(originalObject);

copiedObject.name = "Bob"; // Change the name in the copy
console.log(originalObject); // Still outputs: { name: "Alice", age: 30, ... }

const originalObject = {
  name: "Alice",
  age: 30,
  address: {
    street: "123 Main St",
    city: "Anytown"
  }
};

const copiedObject = deepCopy(originalObject);

copiedObject.name = "Bob"; // Change the name in the copy
console.log(originalObject); // Still outputs: { name: "Alice", age: 30, ... }

// Important Notes:
// Circular References: JSON.stringify() and JSON.parse() will handle simple circular references (objects referencing each other). However, for complex nested cycles, you might need a more robust solution.
// Non-Serializables: Be mindful that not all data types are serializable by JSON. For example, functions, custom objects with non-serializable properties, or large binary data might cause issues.


// --------- 19. difference between Promise.all(), Promise.allSettled(), Promise.race(), and Promise.any() -------------

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
  

// --------- 20. Handling asynchronous errors without using promises and async/await -------------

// While Promises and async/await offer a more structured approach to handling asynchronous operations, it's possible to manage asynchronous errors in JavaScript without them. Here's how:

// 1. Callback Functions:
// This is the traditional method predating Promises. When making an asynchronous call (e.g., network request), you pass a callback function as an argument.
// This function will be executed when the operation completes, receiving either the result or an error object.

function fetchData(url, callback) {
  // Simulate a network request with setTimeout
  setTimeout(() => {
    if (Math.random() < 0.8) { // 80% chance of success
      callback(null, "Data fetched successfully!");
    } else {
      callback("Network error occurred");
    }
  }, 1000);
}

fetchData('https://example.com/api', (error, data) => {
  if (error) {
    console.error("Error:", error);
  } else {
    console.log("Data:", data);
  }
});


// 2. Error Handling with try...catch Blocks:
// While try...catch is primarily used for synchronous errors, it can be incorporated within callback functions to handle potential asynchronous errors more explicitly.

function fetchData(url) {
  return new Promise((resolve, reject) => {
    // ... Network request logic ...
    if (error) {
      reject(error); // Reject the promise with an error
    } else {
      resolve(data); // Resolve the promise with data
    }
  });
}

fetchData('https://example.com/api')
  .then((data) => {
    console.log("Data:", data); 
  })
  .catch((error) => {
    console.error("Error:", error);
  });


// Key Considerations:
// Callback Hell: Deeply nested callbacks can lead to "callback hell," making code difficult to read and maintain. This is where Promises and async/await shine, providing a cleaner structure for handling asynchronous operations.
// Error Propagation: Ensure errors are properly propagated through your application's call stack. In callback functions, this often involves passing an error object as the first argument to the nested callbacks.

// --------- 21. Explain the event loop, task queue, and how JavaScript handles asynchronous operations -------------



// --------- 22. difference between .then() and .catch() in promise chains? -------------



// --------- 23. difference between async/await and traditional callbacks for handling asynchronous operations? -------------



// --------- 24. implement a Promise-based API client with retries, timeouts, and cancellations? -------------
// Here's a blueprint for implementing a Promise-based API client with retries, timeouts, and cancellations in JavaScript. This example focuses only on the core concepts. This can be adapted to your specific API requirements:

class ApiClient {
  constructor(baseUrl) {
    this.baseUrl = baseUrl; // Your base API URL
  }

  async request(method, path, data = null, options = {}) {
    const defaultOptions = {
      retries: 3, 
      retryDelay: 1000, // Initial retry delay in milliseconds
      timeout: 5000, // Timeout duration in milliseconds
    };

    options = { ...defaultOptions, ...options }; // Merge defaults with provided options

    return new Promise((resolve, reject) => {
      const controller = new AbortController(); // For cancellation
      let retriesLeft = options.retries;

      const makeRequest = async () => {
        try {
          const response = await fetch(`${this.baseUrl}${path}`, {
            method, 
            headers: { 'Content-Type': 'application/json' }, 
            body: JSON.stringify(data),
            signal: controller.signal, // Pass cancellation signal to fetch
          });

          if (!response.ok) {
            const error = await response.text();
            throw new Error(`API Request Failed: ${error}`); // Handle non-successful responses
          }
          return resolve(await response.json()); 
        } catch (err) {
          if (retriesLeft > 0) {
            console.warn(`Request failed, retrying... (${retriesLeft} attempts left)`);
            retriesLeft--;
            setTimeout(() => makeRequest(), options.retryDelay);
          } else {
            reject(err);
          }
        }
      };

      makeRequest(); // Initiate the first request
    });
  }

  // Example API calls (you'd add more based on your API)
  async getUsers() {
    return this.request('GET', '/users'); 
  }

  async createUser(user) {
    return this.request('POST', '/users', user); 
  }
}


// Usage Example:
const client = new ApiClient('https://api.example.com'); // Your API base URL

client.getUsers()
  .then((data) => console.log(data))
  .catch((error) => console.error('Error:', error)); 


// Explanation:

// ApiClient Class: Represents the client that interacts with your API. It holds the base URL and provides methods for making requests.

// request() Method: The core method to handle all API calls.
//   Takes method, path, data, and options.
//   Merges default retry, timeout, etc., options with any provided by the caller.
//   Uses AbortController for cancellation (more on this later).

// Promise Handling:
//   Returns a Promise that resolves with the API response data or rejects with an error.
//   Implements retry logic within a loop using setTimeout. If retries fail, it rejects the promise.

// Timeout: Uses fetch's timeout option (signal: controller.signal) to abort requests exceeding the specified time. You can integrate this with your own timeout handling if needed.

// Cancellation:
//   The AbortController object allows you to signal cancellation of a request using controller.abort().

// Example API Calls (getUsers, createUser): Demonstrates how to use the request() method for different API endpoints.

// Key Points and Enhancements:

// Error Handling: Consider adding more granular error handling, logging, and potential fallback mechanisms within your API client.
// Rate Limiting: Implement logic to handle rate limiting by the API you're interacting with (e.g., by pausing requests or using exponential backoff).
// Caching: Implement a simple caching mechanism for frequently accessed data to improve performance.


// --------- 25. Explain how to use async/await with non-Promise values. -------------

async function myAsyncFunction() {
  const someValue = 42; // Non-Promise value

  // Wrap it in a promise that immediately resolves
  const promiseValue = new Promise(resolve => resolve(someValue));

  const result = await promiseValue; 
  console.log(result); // Output: 42
}

myAsyncFunction(); 

// -------- 26. difference between async IIFE and an immediately invoked async function expression (IIAFE)?  -------------



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

// -------- 28. diff bw iterators, generators, promises, observables?  -------------


// ----------29. How would you create an infinite async iterator using Symbol.asyncIterator?----


// ----------30. explain how to use Symbol.asyncIterator with generators for creating async iterable objects?   -------------




// ---------- 31. implement a custom coroutine library that supports cooperative multitasking using generators and async/await?   -------------




// ---------- 32. explain how to use Symbols as private properties in ES6 classes?    -------------
// Symbols are perfect for creating private properties within ES6 classes

// The Problem with Traditional Private Properties:
// No True Privacy: In plain JavaScript, methods like _property (using an underscore prefix) aren't truly private. They can be accessed and modified from outside the class if someone really tries.
// Limited Encapsulation: This lack of strong privacy makes it harder to maintain code integrity and enforce intended behavior.

// Symbols to the Rescue!
// Unique Identifiers: Symbols create unique, non-enumerable keys that are ideal for private properties. Since they're not part of the standard object enumeration, they're hidden from casual inspection.
// Symbol() Function: Use Symbol() to generate a new symbol.

class BankAccount {
  constructor(initialBalance) {
    this[Symbol('balance')] = initialBalance; // Using Symbol as the key
  }

  deposit(amount) {
    this[Symbol('balance')] += amount;
  }

  withdraw(amount) {
    if (this[Symbol('balance')] >= amount) {
      this[Symbol('balance')] -= amount;
      return true; // Success
    } else {
      return false; // Insufficient funds
    }
  }

  getBalance() {
    return this[Symbol('balance')]; 
  }
}

// Create an account
const myAccount = new BankAccount(100);

// Deposit and withdraw
myAccount.deposit(50);
console.log(myAccount.getBalance()); // Accessing the balance directly is harder

// Can't access directly through `myAccount.balance` or similar

// Explanation:
// Symbol as Key: We use Symbol('balance') to create a unique symbol key. This becomes our private property identifier.
// Setting and Accessing Values: Inside the class constructor, we assign an initial balance using this symbol key. When we need to get or modify the balance later (e.g., in deposit, withdraw, or getBalance), we access it through the same symbol key.

// Benefits:
// Strong Privacy: Symbols make it much harder for external code to directly manipulate private properties, protecting your class's internal state.
// Improved Encapsulation: Private properties reinforce the principles of encapsulation, making your classes more robust and maintainable.


// ---------- 33. How would you create a custom symbol registry to prevent collision of Symbol values?  -------------
// While the Symbol() function generates unique symbols in most cases, creating a custom symbol registry can be beneficial for specific scenarios where you need finer control and predictability over symbol assignments.

// Here's how you could implement a basic custom symbol registry:

class SymbolRegistry {
  constructor() {
    this.symbols = {}; // Map to store registered symbols
  }

  register(name) {
    if (!this.hasSymbol(name)) {
      const symbol = Symbol(name); 
      this.symbols[name] = symbol;
      return symbol;
    } else {
      console.warn(`Symbol '${name}' already exists in the registry`);
      return this.symbols[name];
    }
  }

  hasSymbol(name) {
    return !!this.symbols[name];
  }

  getSymbol(name) {
    return this.symbols[name];
  }
}

// Usage Example:
const registry = new SymbolRegistry();

const mySymbol1 = registry.register('data');
const mySymbol2 = registry.register('view'); 

console.log(mySymbol1); // Output unique symbol for 'data'
console.log(registry.getSymbol('data')); // Accessing the registered symbol

// Explanation:

// SymbolRegistry Class: We create a class to manage our symbols. It has a symbols map to store registered symbols using names as keys.

// register(name) Method:

// Checks if a symbol with the given name already exists in the registry.

// If not, it generates a new symbol using Symbol(name) and stores it in the symbols map, returning the newly created symbol.

// hasSymbol(name) Method:

// Checks if a symbol with the given name is present in the registry.

// getSymbol(name) Method:

// Returns the previously registered symbol associated with the given name.

// Benefits of Using a Symbol Registry:

// Controlled Namespace: Ensures that symbols used within your application are unique and avoid collisions, even across different modules or components.

// Readability and Maintainability: Makes it easier to understand which symbols represent specific concepts in your code.

// Testability: You can easily mock or stub symbol values during testing.


// ----------  34. difference between Symbol.iterator and Symbol.toStringTag in JavaScript?  -------------




// ---------- 35. How would you use generators to create a custom iterator?   -------------




// ---------- 36. How would you use default parameters with rest parameters in JavaScript?   -------------

function greet(name = "World", ...greetings) {
  console.log(`Hello ${name}!`); 
  for (const greeting of greetings) {
    console.log(`${greeting}`);
  }
}

greet(); // Output: Hello World!

greet("Alice", "Nice to meet you", "How are you?"); // Output: Hello Alice!
                                            //          Nice to meet you
                                            //          How are you?

greet("Bob", "Hi there");                      // Output: Hello Bob!
                                            //          Hi there


// ---------- 37. explain how to use dynamic imports with import() function in ES6 modules with 1 practical use case?    -------------

const modulePromise = import('./myModule.js'); // Imports 'myModule.js' asynchronously

modulePromise.then(
    // Resolve: Module loaded successfully
    ({ default, ... }) => {
        console.log("Module imported:", default); 
        // Use the imported functions/variables
        default.doSomething();  
    },
    // Reject: Error loading module
    error => {
        console.error("Error importing module:", error);
    }
);

// Practical Use Case: On-Demand Loading of Features
// Imagine building a web application with different features (e.g., a chat, image editor, analytics dashboard). You don't want to load all these features at once, as it might slow down the initial page load. Dynamic imports let you load them only when needed.


// index.js (main app file)
console.log("App loading...");

const chatModuleButton = document.getElementById('chat-module-button');

chatModuleButton.addEventListener('click', async () => {
    try {
        const chatModule = await import('./modules/chat'); // Import only when clicked
        chatModule.init(); // Initialize the chat module 
    } catch (error) {
        console.error("Error loading chat module:", error);
    }
});

// ./modules/chat.js (Chat module code)
export function init() {
    console.log("Chat module loaded!");
    // ... Chat functionality implementation 
}

// Explanation:

// The chatModuleButton triggers the dynamic import of ./modules/chat.
// The await keyword pauses execution until the import is complete.
// Once imported, chatModule.init() initializes the chat module's functionality.

// ---------- 38.  how to use named exports and default exports together in a single module.   -------------

// Named exports and default exports are both powerful features of ES6 modules, allowing for organized and flexible code sharing.
// Here's how you can use them together in a single module:

// myModule.js

export function greet(name) {
  return `Hello, ${name}!`;
}

export const PI = 3.14159; // Named export - constant

export default function add(a, b) { 
  return a + b;
}


// Named Exports:
// export function greet(name) and export const PI = 3.14159; use the export keyword to make these specific functions and constants available for import as named exports.

// Default Export:
// export default function add(a, b) uses the default keyword before the function declaration. This makes the add function the primary exported entity from this module.

// app.js (example importing)
import { greet, PI } from './myModule.js'; 
import add from './myModule.js'; // Import default export directly

console.log(greet("Alice"));  // Output: Hello, Alice!
console.log(PI);            // Output: 3.14159
console.log(add(2, 3));       // Output: 5

// Key Points:
// A module can have both named exports and a default export.
// You import named exports individually using curly braces ({}), specifying the desired names.
// To import a default export, you just use the module's filename as the imported value.



// ---------- 39. How would you implement a custom bundler using ES6 modules and dynamic imports?   -------------

// Building a custom bundler from scratch is a great way to deeply understand how module systems work.
// Here's a conceptual outline of how you could approach it using ES6 modules and dynamic imports:

// Simplified Bundler Example (Conceptual)
class CustomBundler {
  constructor(entryPoint) {
    this.entryPoint = entryPoint; // Main module to start bundling from
    this.modules = {}; // Store loaded modules
  }

  async bundle() {
    await this._loadModule(this.entryPoint); 

    // After loading dependencies recursively, generate the bundled output:
    const bundledCode = `
      import('${this.entryPoint}'); // Start with entry point
      ${Object.values(this.modules).map((module) => module.code)} // Include other modules
    `;

    console.log(bundledCode); 
  }

  async _loadModule(moduleName) {
    try {
      const module = await import(moduleName); // Dynamically load the module

      this.modules[moduleName] = {
        name: moduleName,
        code: module.default || module.toString(), // Get module's code
        dependencies: module.exports ? Object.keys(module.exports) : [], 
      };

      // Recursively load dependencies
      for (const dependency of this.modules[moduleName].dependencies) {
        await this._loadModule(dependency);
      }
    } catch (error) {
      console.error(`Error loading module '${moduleName}':`, error);
    }
  }
}

// Usage example:
const bundler = new CustomBundler('./src/index.js'); 
bundler.bundle(); // Start the bundling process

// Important Considerations:
// Dependency Management: Implement a robust system to track module dependencies (use a dependency graph if needed). Resolve circular dependencies carefully.
// Code Transformation: Bundlers often perform code transformations (e.g., minification, tree shaking) for optimization. Consider using a library like Babel or Terser to handle this.
// Output Format: Decide on the output format (e.g., CommonJS, AMD, UMD).
// Build Process: Design a build pipeline that handles different environments (development, production) and optimizes code for performance.

// ---------- 40. What is the difference between Object.create(null) and {}   -------------

Object.create(null):

Creates an empty object with no prototype chain. This means it won't inherit properties or methods from any other object.

Useful when you want a completely isolated object, preventing accidental inheritance conflicts.

{} (object literal):

Also creates an empty object, but by default, it gets set up with the Object.prototype as its prototype. This means:

It inherits properties and methods from Object.prototype. For example, it will have toString(), hasOwnProperty(), etc., built in.

Key Differences:

Feature       Object.create(null)                 {}
Prototype    No prototype chain           Inherits from Object.prototype
Inheritance     None                      Has inherited properties/methods

// When to Use Each:

// Object.create(null): When you want absolute isolation, preventing unexpected inheritance. Common use cases:
//   Creating utility objects where you don't want them to inherit anything from other prototypes.
//   Building your own custom object structures from scratch.

// {} (object literal): In most general scenarios where you need a basic empty object, the default behavior of inheriting from Object.prototype is usually fine.


// ----------  41. Explain the prototype chain in JavaScript. -------------




// ---------- 42. explain how closures work in js   -------------




// ----------  43. How would you create a private method using closures?  -------------

// Closures are fantastic for achieving "private" methods in JavaScript.

function Counter() {
  let count = 0; // Private variable accessible only within the closure

  return {
    increment: function() {
      count++;
    },
    getCount: function() {
      return count; 
    }
  };
}

const myCounter = Counter(); 
console.log(myCounter.getCount()); // Output: 0
myCounter.increment();
console.log(myCounter.getCount()); // Output: 1

// Explanation:

// The Outer Function (Factory): Counter() acts like a factory, creating and returning a new counter object. Inside it:
//   We declare count as our private variable. It's only visible within the scope of the Counter function.

// Return Object: The Counter function returns an object containing methods (increment and getCount).

// Closure Magic: Each method (increment, getCount) is a closure. They "remember" the count variable from their surrounding scope (the Counter function). Even after Counter() finishes executing, these methods still have access to count.

// Why This Works:
// When you call myCounter.increment(), the increment method remembers its count and increments it.
// Similarly, when you call myCounter.getCount(), the getCount method can read the value of count.

// ---------- 44. how js determines value of this in nested functions?    -------------

this in nested functions is determined by several factors working together. It's all about lexical scoping and how execution context is set up.

Here's the breakdown:
1. Lexical Scope: JavaScript looks for this value based on where the function was defined, not where it's called. This is why it's often said that this is determined by lexical scoping.
2. Execution Context Stack: Each time a function is called, a new execution context is created and pushed onto a stack. The top of the stack determines the current context and therefore the value of this.

// 1. Regular funciton calls: 

function outer() {
  const value = 'hello'; // This is part of the outer function's scope

  function inner() {
    console.log(this); // In this case, 'this' refers to the global object (window in browsers)
  }

  inner(); 
}

outer(); 

//  this inside inner() is bound to the global object because it's a regular function call.

// 2. Nested  Function calls with Contextual Binding 

const obj = {
  value: 'world', // Property of the object
  outer: function() {
    function inner() {
      console.log(this); // 'this' refers to the object (obj) itself
    }
    inner(); 
  }
};

obj.outer();


// this inside inner() is bound to the object (obj) on which the outer method was called. This happens because of lexical scoping and how inner's context inherits from outer.

// Key Points:
// The lexical scope (where a function is defined) determines the initial binding of this.
// However, contextual binding can override the default value of this, for example, with functions like call(), apply(), or bind().






// ---------- 45. Explain how to use bind, call, and apply methods together with new operator.   -------------




// ---------- 46.  explain how JavaScript implements mixins for multiple inheritance?  -------------




// ---------- 47. How would you create a shallow copy of an object using prototypes?   -------------

// Here's how you can create a shallow copy of an object in JavaScript, leveraging prototypes:
function shallowCopy(obj) {
  const newObj = Object.create(Object.getPrototypeOf(obj)); // Create a new object with the same prototype

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) { 
      newObj[key] = obj[key];
    }
  }
  return newObj;
}

// Example usage:
const originalObj = { name: "Alice", age: 30, hobbies: ["reading", "coding"] };
const copiedObj = shallowCopy(originalObj);

console.log(copiedObj); // Output: { name: "Alice", age: 30, hobbies: [ 'reading', 'coding' ] }
console.log(copiedObj === originalObj); // false (different objects)



// Explanation:

// Object.create(Object.getPrototypeOf(obj)):
//   Object.getPrototypeOf(obj) retrieves the prototype of the original object.
//   Object.create() creates a new object with this retrieved prototype. This ensures that the newly copied object inherits from the same prototype chain as the original object, meaning its methods will likely be identical.

// Iterating and Copying Properties:
//   The for...in loop iterates over each property in the original object.
//   Object.prototype.hasOwnProperty.call(obj, key) checks if a property belongs to the original object itself (and not inherited from its prototype). This is important because we only want to copy properties directly owned by the original object.

// newObj[key] = obj[key]:
//   Each property of the original object is copied to the new object (newObj).

// Important Notes about Shallow Copies:
// Nested Objects: A shallow copy will only create a reference to nested objects within the original object. Changes to nested objects in the copy will affect the original object, as they share the same references.
// Arrays: Shallow copies of arrays also maintain references to their elements. Modifications to elements within the copied array will affect the original array.


// ---------- 48.  difference between instanceof and checking for constructor property in JavaScript.   -------------




// ---------- 49. explain how to implement a singleton pattern in JavaScript using closures?   -------------

// The singleton pattern ensures that only one instance of a class is ever created. Here's how to implement it effectively in JavaScript using closures:

const Singleton = (function() {
  let instance; 

  function init() {
    console.log("Singleton instance created!");
    // Initialize any properties or methods here if needed
  }

  return function() { // Returned function acts as the constructor
    if (!instance) {
      instance = {}; // Create the singleton object
      init();             // Call initialization only once
    }
    return instance; 
  };
})();

// Accessing and using the singleton:
const firstInstance = Singleton(); 
const secondInstance = Singleton(); 

console.log(firstInstance === secondInstance); // Output: true (They both reference the same object)

// Explanation:

// Immediately Invoked Function Expression (IIFE): The code is wrapped in an IIFE (function() { ... })(). This creates a private scope, preventing accidental external access to variables within the closure.

// instance Variable: A let variable instance is declared inside the IIFE. It's initially undefined and will hold the singleton instance once created.

// init() Function: This function (optional) initializes any properties or methods that your singleton needs when it's first created.

// Returned Constructor-like Function: The IIFE returns another function. This returned function acts as the constructor for the singleton pattern.

// Singleton Logic: Inside the returned function:
//   if (!instance) checks if an instance already exists. If not, it creates a new empty object (instance) and calls init() to initialize it.
//   In either case, it returns the existing or newly created instance.

// Benefits of Closures for Singleton:
// Encapsulation: The closure hides the internal workings of the singleton from outside code, making it more robust.
// Controlled Access: You can explicitly control how the singleton is accessed through the returned constructor function.


// ---------- 50. create a regular expression that matches a valid IP address?    -------------

const ipRegex = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

// Explanation:

// ^ and $: Match the beginning and end of the string, ensuring the entire input is an IP address.

// (?:...): Non-capturing groups – used to group parts of the regex without creating separate capture groups. This keeps things clean and readable.

// (?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.: Matches a single byte of an IP address (0-255):

  // 25[0-5]: Matches 250 to 255.
  // 2[0-4][0-9]: Matches 200 to 249.
  // [01]?[0-9][0-9]?: Matches 0 to 199, allowing for optional leading "0" or "1".
  // \.: Matches a literal period (.), separating the bytes.

// {3}: Repeats the preceding group (a byte and period) three times, ensuring there are four bytes in total.

// (?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$: Matches the final byte of the IP address, using the same pattern as before.

const ipAddress = "192.168.1.1";

if (ipRegex.test(ipAddress)) {
  console.log("Valid IP address");
} else {
  console.log("Invalid IP address");
}

// Important Notes:
// This regex only validates the format of an IP address. It doesn't check if the address is actually reachable or assigned to a device.
// For more complex validation needs (e.g., IPv6, network ranges), you might need a more sophisticated regex or consider using a dedicated library.

// ----------  51. xplain how to use WeakMap for private data storage in ES6 classes.   -------------




// ----------  52. Can you explain why WeakSet does not have a forEach() method?  -------------




// ----------  53. How would you create an interdependent object graph using WeakMap and WeakSet  -------------




// ----------  54. What is the difference between WeakMap and regular map for caching objects?  -------------




// ----------  55. Can you explain how to use WeakRef to prevent circular references in JavaScript?  -------------




// ----------  56. How would you implement a custom getter/setter using Object.defineProperty() or using proxies?  -------------




// ---------- 57. Explain the difference between Reflect.get() and Reflect.set() methods   -------------




// ---------- 58. Can you explain how to use proxy.revocable property to revoke a proxy object?   -------------




// ---------- 59. How would you implement a custom observable pattern using proxies and Symbol.iterator   -------------




// ---------- 60. Explain how to use ReadableStream and WritableStream APIs for asynchronous data processing.   -------------




// ----------  61. How would you implement a custom event in JavaScript?  -------------




// ---------- 62. Explain the difference between event.preventDefault() and event.stopPropagation().    -------------




// ---------- 63. How would you create a virtual DOM in JavaScript?  -------------




// ----------  64. How would you implement a custom event that bubbles up and can be canceled?  -------------




// ---------- 65. Explain the difference between EventTarget.dispatchEvent() and EventTarget.addEventListener().   -------------




// ---------- 66  How would you implement a custom debounce function for handling event throttling? -------------




// ---------- 67. Explain the difference between Worker and SharedWorker in web workers.    -------------




// ---------- 68. Can you explain how to use service workers to cache assets and improve performance?   -------------




// ----------  69.How would you implement a background sync strategy using service workers and the Background Sync API?   -------------




// ----------  70.Can you explain how to use web workers with BroadcastChannel API for communication between windows?-------------




// ----------  71. How do you implement module pattern in JavaScript?  -------------




// ----------  72. Explain the difference between function composition and method chaining.   -------------

function square(x) { return x * x; }
function addOne(x) { return x + 1; }

const composedFunction = compose(square, addOne);  // 'composedFunction' is now our pipeline
console.log(composedFunction(2)); // Output: 9 (because: 2 + 1 = 3, then 3 * 3 = 9)


const myElement = document.getElementById('myDiv'); 
myElement
  .style.color = 'red' // Changes the text color to red
  .style.fontSize = '20px' // Sets the font size
  .classList.add('important'); // Adds a CSS class named "important"


// ----------  73. Describe the concept of currying and its applications.  -------------

// Currying is a powerful function transformation technique that takes a function with multiple arguments and converts it into a sequence of functions, each taking a single argument.

// Imagine you have a function add(x, y) that adds two numbers. With currying, you'd transform it into:

function add(x) {
  return function(y) {
    return x + y;
  };
}

const add5 = add(5); // Now add5 is a function that takes one argument and adds 5 to it
console.log(add5(3)); // Output: 8 (because 5 + 3 = 8)

// ----------  74. How does prototype pollution occur and how can it be prevented?  -------------




// ---------- 75. Explain the concept of temporal dead zone in JavaScript.s   -------------




// ---------- 76. Describe the concept of memoization and its implementation in JavaScript.   -------------




// ---------- 77. Describe the concept of event delegation and its benefits.   -------------




// ----------  78. Explain the concept of function borrowing in JavaScript.  -------------




// ----------  79. What are the security concerns with using innerHTML and how can they be mitigated?  -------------




// ----------  80. Describe the concept of thunks in JavaScript.  -------------




// ----------  81. Describe how to implement a basic Promise polyfill.  -------------




// ----------  82. Describe the implementation of the Observable pattern in JavaScript.  -------------




// ----------  83. How does JavaScript handle memory leaks in closures?  -------------




// ----------  8. What are the performance implications of using Object.freeze()?  -------------




// ----------  85. Explain how to implement a basic pub/sub system from scratch.  -------------




// ---------- 86. What are the security implications of using eval() and new Function()?   -------------




// ---------- 87. Describe the concept of function overloading in JavaScript.   -------------




// ----------  88. How does JavaScript handle circular references during JSON serialization?  -------------




// ----------   89. Describe the concept of higher-order functions and provide advanced examples. -------------




// ----------  90. How does JavaScript's event loop handle microtasks vs macrotasks?  -------------




// ----------  91. Explain how to implement a simple dependency injection container.  -------------




// ----------  92. Describe the concept of JavaScript engine's hidden classes and inline caching.  -------------




// ----------  93. Describe the concept of JavaScript engine's hidden classes and inline caching.  -------------




// ----------  94. What is WebAssembly, and why would you use it in JavaScript development?  -------------




// ----------  95. What are some common JavaScript security vulnerabilities, and how can they be prevented?  -------------




// ----------  96. Explain cross-site scripting (XSS) attacks and how to prevent them.  -------------




// ---------- 97. Can you explain how to debug JavaScript applications using modern tools?  -------------




// ----------  98.Describe the concept of AST (Abstract Syntax Tree) manipulation and its applications in JavaScript tooling.   -------------




// ----------  99. What are some strategies for optimizing JavaScript applications? -------------




// ---------- 100 Describe the intricacies of memory management in large-scale JavaScript applications and strategies to optimize it.  -------------






