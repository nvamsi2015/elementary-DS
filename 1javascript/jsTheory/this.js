// ---------- what is this -----------------

// In JavaScript, the this keyword is a special identifier that refers to the context in which a function is executed. 
// Its value is determined at runtime, based on how the function is called, rather than where it is defined. 

// Global Context:
//     When this is used outside of any function or object, it refers to the global object. 
//     In a web browser, this is typically the window object. 
//     In Node.js, it's the global object. 


// Inside Object Methods:
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



// ************* If you assign a object method to a variable and call it, this is not bound to the object anymore.

// ************* When a method is called without its object, this does not refer to the object anymore.

// ************  In Node.js, global variables declared with var are not attached to the global object, so this.name is undefined. (see purpule talk example below)

// ------------ this inside object methods-------

// In JavaScript, the value of this inside an object's method depends on how the method is defined and how it is called. Here’s a summary of all scenarios with examples:

//---------- 1. Regular Function as object Method: 
// this refers to the object when called as a method

const obj = {
  value: 100,
  show() {
    console.log(this.value);
  }
};
obj.show(); // 100  
// this inside the object method refers to the object itself if it is regular function or function expression.


// ---------- 2.  Function Expression as Object Method
// Works like a regular function: this refers to the object when called as a method.

const obj = {
  value: 100,
  show: function() {
    console.log(this.value);
  }
};
obj.show(); // 100
// Works like a regular function: this refers to the object when called as a method.

// --------------- 3. Arrow Function as Object Method
// Arrow functions do not have their own this value.  They do not have their own this binding.
// this is inherited from the lexical (outer) scope (often the global object).they lexically inherit this from their parent scope at the time they are defined. 

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

// ---------- 4. Detached Method (Losing this)
// If you assign a method to a variable and call it, this is not bound to the object anymore.

// ------ regular function 
const obj = {
  value: 100,
  show() {
    console.log(this.value);
  }
};
const fn = obj.show;
fn(); // undefined (or global value if defined)

// ------ function expression
const obj = {
  value: 100,
  show: function() {
    console.log(this.value);
  }
};
const fn = obj.show;
fn(); // undefined (or global value if defined)

// ------ arrow function
const obj = {
  value: 100,
  show: () => {
    console.log(this.value);
  }
};
const fn = obj.show;
fn(); // undefined (or global value if defined)



// ------------ not inside object methods but other cases of functions

//---------- 5. Using bind, call, or apply
// You can explicitly set this using these methods.

const obj = { value: 100 };
function show() {
  console.log(this.value);
}
show.call(obj); // 100
show.apply(obj); // 100

const boundShow = show.bind(obj);
boundShow(); // 100

// --- with aruguments

const obj = { value: 100 };
function show(arg1, arg2) {
  console.log(this.value, arg1, arg2);
}
show.call(obj,1,2); // 100 1 2
show.apply(obj,[1,2]); // 100 1 2

const boundShow = show.bind(obj,1,2);
boundShow(); // 100 1 2

// --------- 6. Constructor Functions
// When used with new, this refers to the newly created object.

function Car() {
  this.brand = "Toyota";
}
const c = new Car();
console.log(c.brand); // Toyota

//----------- 7. Global Scope
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
console.log(getCarName());              //  undefined in node js, In Node.js, global variables declared with var are not attached to the global object, so this.name is undefined.
                                        //  Since var name = "Joe"; sets a global variable name, this.name returns "Joe" in browsers.

// while running the above code in node it gives undefined 

// explanation

// getCarName is assigned the method carDetails.getName, but not bound to carDetails.
// When you call getCarName(), this refers to the global object (window in browsers, global in Node.js).
// Since var name = "Joe"; sets a global variable name, this.name returns "Joe" in browsers but not in node.js bc var declarations are not attached to global object in node.js.


// To get "Tomer" as output, call the method on the object or bind it:

console.log(carDetails.getName()); // "Tomer" // calling method on the object
console.log(getCarName.call(carDetails)); // "Tomer" //  using call to set this explicitly

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




// ---------- choubey 44. how js determines value of this in nested functions?    -------------

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

























