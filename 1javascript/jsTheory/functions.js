// ---------- different types of functions in js ----------

//----- 1. Function Declaration:

function functionName(parameters) {
  // function body
}

function greet(name) {
  console.log("Hello, " + name + "!");
}
greet("Alice"); // Output: Hello, Alice!

// Hoisted: Yes (can be called before its definition).

//------2. Function expression

const variableName = function(parameters) {
  // function body
};

greet("Bob")                        //ReferenceError: Cannot access 'greet' before initialization

const greet = function(name) {
  console.log("Hello, " + name + "!");
};
greet("Bob"); // Output: Hello, Bob!

// Hoisted: Only the variable declaration is hoisted, not the assignment. 
// ( greet is hoisted and is in TDZ as it is const, calling before initialization will give reference error)
// Cannot be called before its definition.


// ------3. Arrow functions

const variableName = (parameters) => {
  // function body
};


const greet = (name) => {
  console.log("Hello, " + name + "!");
};
greet("Charlie"); // Output: Hello, Charlie!


// Hoisted: Only the variable declaration is hoisted (if using let or const, in TDZ).
// No own this: Arrow functions inherit this from their parent scope.







