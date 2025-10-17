// Closures

// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). 

// In other words, a closure gives a function access to its outer scope.

// In JavaScript, closures are created every time a function is created, at function creation time.

// --------- closures------------

// The term "closure" in JavaScript comes from the idea that a function "closes over" or "captures" the free variables in its surrounding lexical environment.

// Closures in JavaScript arise from its lexical scoping and first-class functions, a combination less common in languages with different paradigms. 
// While other languages may offer similar functionality through objects or explicit binding mechanisms, JavaScript's design naturally leads to closures.

// Here is why closures are a fundamental part of JavaScript:

// Lexical Scoping: JavaScript uses lexical (or static) scoping, meaning that a function's scope is determined where it is defined, not where it is called. When a function is created, it "remembers" its surrounding lexical environment, including variables and other functions in its parent scope.

// First-Class Functions: Functions in JavaScript are treated as first-class citizens. They can be assigned to variables, passed as arguments to other functions, and returned as values from functions. This capability is crucial for closures to manifest.

// Example: Event Handlers with Data Retention

// Consider a scenario where you want to create multiple buttons, each with a unique ID and a click handler that displays that specific ID.

function createButtonWithId(id) {
  const button = document.createElement('button');
  button.textContent = `Click me, I'm button ${id}`;

  // The click handler forms a closure over the 'id' variable
  button.onclick = function() {                                 // function's scope is determined by where it is defined, not where it is called. 
    console.log(`Button ${id} clicked!`);               // When a function is created(here onclick handler function), it "remembers" its surrounding lexical environment, including variables and other functions in its parent scope.
  };                                                    // the onclick function retains access to that specific id value. This is because each onclick function forms a distinct closure, preserving its own lexical environment

  return button;
}

const container = document.getElementById('buttonContainer');
for (let i = 1; i <= 3; i++) {
  container.appendChild(createButtonWithId(i));
}

// In this example:
// createButtonWithId is called multiple times, each time creating a new id variable in its local scope.
// The onclick function assigned to each button is an inner function that "closes over" the id variable from its parent scope (createButtonWithId).
// Even after createButtonWithId finishes executing for a particular id, the onclick function retains access to that specific id value. This is because each onclick function forms a distinct closure, preserving its own lexical environment.


// Why this is different from other languages:
// Languages without first-class functions: In languages where functions cannot be easily passed around or returned, creating such dynamic event handlers with retained context would likely require more explicit object-oriented approaches or complex data structures to associate data with callbacks.
// Languages with dynamic scoping: In dynamically scoped languages, the id variable in the onclick function would refer to the id in the scope where the onclick function is called, potentially leading to unexpected behavior if not carefully managed. JavaScript's lexical scoping prevents this ambiguity.
// Explicit binding in other languages: Some languages might require explicit binding of variables to a function or object to achieve a similar effect to closures, whereas in JavaScript, it happens naturally due to its scoping rules.
// In essence, JavaScript's combination of lexical scoping and first-class functions makes closures a natural and powerful mechanism for data encapsulation and managing state in asynchronous and event-driven programming.

// ---------------how is closure named as closure in js


// The term "closure" in JavaScript comes from the idea that a function "closes over" or "captures" the free variables in its surrounding lexical environment.

// Here's a breakdown of why it's named "closure":

// Free Variables and Open Expressions: 
// In programming, an expression with variables that are not defined within that expression itself (i.e., they come from an outer scope) is sometimes referred to as an "open expression" because it's incomplete without the values of those external variables. These external variables are called "free variables."

// Closing the Expression: 
// When a function is created, and it references these "free variables" from its outer scope, 
// the JavaScript engine effectively "closes" this open expression by bundling the function with the specific environment (including the values of those free variables) in which it was created. 
// This bundled entity is what we call a closure.

// Lexical Environment Preservation: 
// The key characteristic of a closure is that it preserves access to this lexical environment even after the outer function (where the free variables were defined) has finished executing. 
// The inner function "remembers" the state of its surrounding scope, allowing it to access and manipulate those variables later.

// In essence, the name "closure" signifies that the function is not just a piece of code, but also a complete package including the environment it needs to operate, effectively "closing" any dependencies on external variables.


// my definition
// ******** closure is a function closing over or capturing the variables that it needs from surrounding lexical enviroment while that function is created. **********