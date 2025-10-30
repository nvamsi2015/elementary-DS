// Hoisting in JavaScript is a behavior where declarations of variables and functions are conceptually moved to the top of their containing scope during the compilation phase, before the code is executed. 
// This means that you can use a variable or call a function before it is declared in your code. 


// Declarations are hoisted: Only the declaration part of a variable or function is moved to the top, not its assignment, not initializations or function definition.

// Variable Hoisting (with var): When var is used, the declaration is hoisted to the top of its function or global scope, and the variable is initialized with undefined.

// let and const declarations are also hoisted, they are not initialized with undefined like var
// Instead, they enter a "Temporal Dead Zone" (TDZ) from the beginning of their block scope until their actual declaration line. 
// Accessing them within the TDZ will result in a ReferenceError.



// Function Hoisting: Function declarations are fully hoisted, meaning both the function name and its definition are available at the top of their scope( contradicting the above point).

// Function Expressions and Arrow Functions: These are not hoisted in the same way as function declarations. They behave like var, let, or const variables depending on how they are declared.

    // myFuncExpression();  // TypeError: myFuncExpression is not a function (if declared with var)
    // myArrowFunc();       // ReferenceError: Cannot access 'myArrowFunc' before initialization (if declared with let/const as in TDZ)

    var myFuncExpression = function() {         
      console.log("Hello from function expression!");
    };
    const myArrowFunc = () => {
      console.log("Hello from arrow function!");
    };

// Function expressions and arrow functions are not hoisted like function declarations because only their variable declarations are hoisted, not their assignments.

// For var myFuncExpression, the variable is hoisted and initialized as undefined.
// So calling myFuncExpression() before assignment gives TypeError: myFuncExpression is not a function.

// For const myArrowFunc, the variable is hoisted but not initialized (it’s in the "Temporal Dead Zone").
// So calling myArrowFunc() before assignment gives ReferenceError: Cannot access 'myArrowFunc' before initialization.

// Only function declarations are fully hoisted (name and definition).
// Function expressions and arrow functions are treated as variables, so their assignments are not available until the code reaches them.


a()
function a(){
    console.log("a")
}

b();
var b = function b(){
    console.log("b")
}

// a
// TypeError: b is not a function