// ---------- what is this -----------------
// In JavaScript, the this keyword is a special identifier that refers to the context in which a function is executed. 
// Its value is determined at runtime, based on how the function is called, rather than where it is defined. 

// Global Context:
//     When this is used outside of any function or object, it refers to the global object. 
//     In a web browser, this is typically the window object. 
//     In Node.js, it's the global object. 


// Object Methods:
//     When a function is called as a method of an object (e.g., object.method()), 
//     this inside that method refers to the object itself if it is regular function or function expression.
//     this inside that method refers to global object if it is a arrow function  

// Standalone Functions:
//     When a function is called as a standalone function (not attached to an object, e.g., functionName()), this typically refers to the global object in non-strict mode. 
//     In strict mode ('use strict';), this will be undefined. 


// Constructor Functions:
//     When a function is called with the new keyword (e.g., new ConstructorFunction()), it acts as a constructor. 
//     In this case, this inside the constructor refers to the newly created instance of the object.


// Event Handlers:
//     In an event listener, this typically refers to the DOM element that triggered the event.

// Explicit Binding (call, apply, bind):
//     JavaScript provides methods like call(), apply(), and bind() to explicitly set the value of this for a function call.
//     call() and apply() immediately invoke the function with a specified this value and arguments.
//     bind() creates a new function with a permanently bound this value, which can be invoked later.

// Arrow Functions:
//     Arrow functions (=>) handle this differently. They do not have their own this binding. Instead, they lexically inherit this from their parent scope at the time they are defined. 
//     This makes them useful for preserving context in callbacks and other scenarios where this might otherwise change unexpectedly. 



// ************* If you assign a method to a variable and call it, this is not bound to the object anymore.

// ************* When a method is called without its object, this does not refer to the object anymore.


// ------------ this inside object methods-------

// In JavaScript, the value of this inside an object's method depends on how the method is defined and how it is called. Here’s a summary of all scenarios with examples:

// 1. Regular Function as Method: 
// this refers to the object when called as a method

const obj = {
  value: 100,
  show() {
    console.log(this.value);
  }
};
obj.show(); // 100


//  2.  Function Expression as Method
// Works like a regular function: this refers to the object when called as a method.

const obj = {
  value: 100,
  show: function() {
    console.log(this.value);
  }
};
obj.show(); // 100


//  3. Arrow Function as Method
// Arrow functions do not have their own this.
// this is inherited from the lexical (outer) scope (often the global object).

const obj = {
  value: 100,
  show: () => {
    console.log(this.value);
  }
};
obj.show(); // undefined (or global value if defined)

//  If you must use an arrow function, you can explicitly pass the value:

const obj = {
  value: 100,
  show: () => {
    // 'this' is not obj, so pass obj explicitly
    console.log(obj.value);
  }
};
obj.show(); // 100

// 4. Detached Method (Losing this)
// If you assign a method to a variable and call it, this is not bound to the object anymore.

const obj = {
  value: 100,
  show() {
    console.log(this.value);
  }
};
const fn = obj.show;
fn(); // undefined (or global value if defined)

// ------------ not inside object methods but other cases of functions

// 5. Using bind, call, or apply
// You can explicitly set this using these methods.

const obj = { value: 100 };
function show() {
  console.log(this.value);
}
show.call(obj); // 100

// 6. Constructor Functions
// When used with new, this refers to the newly created object.

function Car() {
  this.brand = "Toyota";
}
const c = new Car();
console.log(c.brand); // Toyota

// 7. Global Scope
// In non-strict mode, this in a function (not a method) refers to the global object (window in browsers).
// In strict mode, this is undefined.

function show() {
  console.log(this);
}
show(); // window (or undefined in strict mode)


// Summary Table

// Function Type	        this Value (when called as method)

// Regular function	        The object (e.g., obj)
// Function expression	    The object (e.g., obj)
// Arrow function	        Lexical scope (outer this, often global)
// Detached method	        Global object or undefined
// With bind/call/apply	Explicitly set
// Constructor (new)	    New instance


// Key Point:

// Regular functions and function expressions: this is dynamic, depends on how the function is called.
// Arrow functions: this is lexical, depends on where the function is defined, not how it is called.

// -------------- Doubts-----------

// ------ purpule talk-----

const carDetails = {
  name: "Tomer",
    getName() {
      return this.name;
}
}
var name = "Joe";
var getCarName = carDetails.getName;
console.log(getCarName());              // Joe or undefined in strict mode or some environments

// while running the above code in node it game undefined 

// explanation

// getCarName is assigned the method carDetails.getName, but not bound to carDetails.
// When you call getCarName(), this refers to the global object (window in browsers, global in Node.js).
// Since var name = "Joe"; sets a global variable name, this.name returns "Joe".


// To get "Tomer" as output, call the method on the object or bind it:

console.log(carDetails.getName()); // "Tomer"
console.log(getCarName.call(carDetails)); // "Tomer"

// *************8 When a method is called without its object, this does not refer to the object anymore.



// --------- nagarro -------

const obj = {
  value: 100,
  Func1: () => {
    console.log("A:", this.value);
  }
};
 
obj.Func1();  //  A: undefined  


// calling object's method(arrow function) directly

// explanation

// 1. Arrow functions do not have their own this.
// 2. this inside Func1 refers to the outer (global) scope, not to obj.

//  if you want this to refer object, use a regular function

const obj = {
  value: 100,
  Func1: function() {
    console.log("A:", this.value);
  }
};
obj.Func1(); // Output: A: 100




























