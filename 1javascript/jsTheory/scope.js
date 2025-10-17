// -------- what is scope(mdn)---------

// The scope is the current context of execution in which values and expressions are "visible" or can be referenced. 
// If a variable or expression is not in the current scope, it will not be available for use. 
// Scopes can also be layered in a hierarchy, so that child scopes have access to parent scopes, but not vice versa.

// JavaScript has the following kinds of scopes:

// Global scope: The default scope for all code running in script mode.
// Module scope: The scope for code running in module mode.
// Function scope: The scope created with a function.

// In addition, identifiers declared with certain syntaxes, including let, const, class, or (in strict mode) function, can belong to an additional scope:

// Block scope: The scope created with a pair of curly braces (a block).






// ------- lexical scope ---------

// lexical scoping, which describes how a parser resolves variable names when functions are nested. 

// The word lexical refers to the fact that lexical scoping uses the location where a variable is declared within the source code to determine where that variable is available. 
// Nested functions have access to variables declared in their outer scope

// Lexical Scoping: JavaScript uses lexical (or static) scoping, meaning that a function's scope is determined where it is defined, not where it is called. 
// When a function is created, it "remembers" its surrounding lexical environment, including variables and other functions in its parent scope.

// ------- dynamic scope --------

// Dynamic scoped languages are programming languages where a variable's scope is determined by the program's runtime call stack, not the code's structure. 
// This means a variable is bound to the most recent assignment of that variable during program execution, which can change dynamically based on the order of function calls. 
// Languages like Bash, Emacs Lisp, and the original Lisp use this mechanism, though many modern languages like JavaScript and Python default to lexical scoping. 

// How it works

// When a variable is referenced, the language checks the most recent function call on the call stack.
// It looks for a variable with that name in the current function's scope.
// If it's not found, it looks in the calling function's scope, and continues up the call stack until it finds the variable or reaches the global scope.
// This is different from lexical scoping, where the scope of a variable is determined solely by where it is written in the code. 


// Assume this is a dynamically scoped language
let x = 10;

function f() {
  console.log(x);
}

function g() {
  let x = 20;
  f();
}

g();

// In a dynamically scoped language, this code would print 20.
// When f() is called from within g(), the x variable is resolved by looking up the call stack.
// The most recent x is the one in g()'s scope, so f() accesses that value.
// In a lexically scoped language, it would print 10 because the scope of f() is determined by where it is written, not where it is called. 

// Where it's used
// Bash: A common shell scripting language.
// Emacs Lisp: The extension language for the Emacs editor, although it can be configured to use lexical scoping.
// Logo: A language often used for teaching programming.
// Mathematica: Uses a Block construct that provides dynamic scoping for local variables. 

























