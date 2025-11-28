// ========== shallow copy (spread, object.assaign, array.slice(), Array.from()) ====================
// Shallow copy and deep copy in JavaScript are fundamental concepts when working with objects and arrays. 
// A shallow copy creates a new object but shares the nested references of the original, while a deep copy creates a fully independent replica [1].Shallow Copy
// A shallow copy creates a new object and copies the top-level properties from the original to the new object. 
// However, if any of the properties are themselves objects or arrays, their references are copied, not the objects themselves. 
// This means changes to a nested object in the copy will affect the original, and vice versa [1]. Common methods for shallow copying include:
// Spread Syntax (...): The most concise and common way to shallow copy objects and arrays.

// spread operator
const original = { a: 1, b: { c: 2 } };
const shallowCopy = { ...original };

shallowCopy.a = 5; // changes top-level value in the copy only
shallowCopy.b.c = 10; // changes the nested value in BOTH the copy and original

console.log(original)      // { a: 1, b: { c: 10 } } 
console.log( shallowCopy)  // { a: 5, b: { c: 10 } }  how do we not mutate the original properties and only work with copy objects without effecting original


// Object.assign(): Another method for objects, often used to merge properties.
const original = { a: 1, b: { c: 2 } };
const shallowCopy = Object.assign({}, original);


console.log(original)       // { a: 1, b: { c: 2 } }
console.log(shallowCopy)    // { a: 1, b: { c: 2 } }

shallowCopy.a =5 
shallowCopy.b.c = 10        // with object.assaign it is shallow copy similar to spread operator and any modifications to shallow copy references affect original object

console.log(original)       // { a: 1, b: { c: 10 } }
console.log(shallowCopy)    //  { a: 5, b: { c: 10 } }

// slice or from for arrays
// Array.prototype.slice() or Array.from(): Used specifically for shallow copying arrays.

const originalArray = [1, { a: 2 }];
const shallowCopyArraySlice = originalArray.slice(); // or Array.from(originalArray)
const shallowCopyFrom = Array.from(originalArray)

console.log(shallowCopyArraySlice)  // [ 1, { a: 2 } ]
console.log(shallowCopyFrom)        // [ 1, { a: 2 } ]

shallowCopyArraySlice[1]={a:3}
console.log(shallowCopyArraySlice)  // [ 1, { a: 3 } ]
console.log(shallowCopyArraySlice)  // [ 1, { a: 3 } ]
 
//=============== Deep Copy () ==================================
// A deep copy creates a completely new, independent object. All levels of nested objects and arrays are duplicated, meaning changes to the copy will not affect the original [1]. 
// Common methods for deep copying include:

// ---------1. JSON.parse(JSON.stringify(obj)) -----------------
// A simple, common method for basic deep copying. It is quick but has limitations, such as not handling functions, Dates, undefined, or circular references [1].
const original = { a: 1, b: { c: 2 } };
const deepCopy = JSON.parse(JSON.stringify(original));

deepCopy.b.c = 10; // changes nested value in the copy ONLY; original remains unchanged

console.log(original)  // { a: 1, b: { c: 2 } }
console.log(deepCopy)  // { a: 1, b: { c: 10 } }





// ---------2. structuredClone()-------------

// The modern, built-in solution available in most modern environments (browsers and Node.js).
//  It handles more data types than the JSON method, including circular references, Dates, and Maps/Sets, but still does not handle functions or DOM nodes [1, 2].

const original = { a: 1, b: { c: 2 } };
const deepCopy = structuredClone(original);

console.log(original)  // { a: 1, b: { c: 2 } }
console.log(deepCopy)  // { a: 1, b: { c: 10 } }


// --------- Libraries (e.g., Lodash): 
// For complex scenarios and environments where structuredClone() is unavailable, libraries like Lodash provide robust deep cloning functions such as _.cloneDeep() [1]. 




// Summary of differences:
// Feature 	            Shallow Copy	                Deep Copy
Independence	    New top-level object	        Fully independent object
Nested Objects	    References shared	            Duplicated recursively
Changes	Affect      original (nested)	            Never affect original



//  -------- deep copy -----------

// In JavaScript, the modern and most robust way to create a deep copy is by using the built-in structuredClone() function. 
// Other methods like JSON.parse(JSON.stringify()) or using a library like Lodash are also common, each with its own advantages and limitations. 

//----------- Using structuredClone() (Recommended)
// The structuredClone() global function is the modern, native way to create a deep copy of JavaScript values. 
// It handles many data types, including nested objects, arrays, Date objects, and even circular references. 


const original = {
  name: "Alice",
  details: {
    age: 30,
    hobbies: ["coding", "reading"]
  },
  date: new Date()
};

const deepCopy = structuredClone(original);
const deepCopy2 = JSON.parse(JSON.stringify(original))

// Modify the deep copy
deepCopy.details.age = 31;
deepCopy.details.hobbies.push("hiking");

console.log(deepCopy.details.age); // Output: 31
console.log(original.details.age); // Output: 30 (original is untouched)
console.log(original.date instanceof Date); // Output: true (Date object type is preserved)
console.log(deepCopy.date instanceof Date)  // output true 
console.log(deepCopy2.date instanceof Date, typeof(deepCopy2.date)) // false, string    JSON.parse(JSON.stringify(obj)) has some limitations with functions, Dates, undefined, or circular references


// Limitations: 
// structuredClone() cannot clone functions, DOM nodes, or certain other host objects; attempting to do so will throw an error. 

//-----------  JSON.parse(JSON.stringify())  
// This method has long been a popular workaround for deep copying objects that are "JSON-serializable" (simple data that can be represented in JSON format). 

const original = {
  name: "Bob",
  details: {
    age: 25
  }
};

const deepCopy = JSON.parse(JSON.stringify(original));

// Modify the deep copy
deepCopy.details.age = 26;

console.log(deepCopy.details.age); // Output: 26
console.log(original.details.age); // Output: 25 (original is untouched)

// Limitations: This method has several significant shortcomings: 

// Functions, undefined, and Symbol values are completely ignored and removed from the resulting object.
// Date objects are converted into strings, not back into Date objects.
// Circular references will cause an error.
// Prototypes are discarded. 


//----------------  Using a Library (Lodash's cloneDeep())
For complex scenarios involving functions, specific object types, or circular references, a well-tested library function like Lodash's _.cloneDeep() is often the most reliable choice. It handles edge cases that native methods might miss. 
You would need to install the library (e.g., via npm: npm install lodash or include it as a script) and then use the function: 

// Example using Lodash
const _ = require('lodash');

const original = {
  name: "Charlie",
  sayHello: function() { return "Hello"; }
};

const deepCopy = _.cloneDeep(original);

console.log(deepCopy.sayHello()); // Output: "Hello" (function is copied)

// Summary of Methods
// Method 	                                            Pros	                                                                                            Cons
structuredClone()	                Native, fast, handles nested objects, arrays, Dates, circular refs	                                Cannot clone functions, DOM nodes, or specific host objects
JSON.parse(JSON.stringify())	    Simple, no libraries needed, works for basic JSON data	Ignores functions, undefined, Symbols;      converts Dates to strings; fails on circular refs
Lodash _.cloneDeep()	            Most robust, handles functions, circular refs, and many edge cases	                                Requires adding an external library dependency








// follow up on circular reference  ------------------
A circular reference in JavaScript occurs when an object, either directly or indirectly through a chain of other objects, refers back to itself, creating a closed loop. 
Examples of Circular References
Direct Reference: An object has a property that points to itself.
javascript
const circularReference = {
  otherData: 123
};
circularReference.myself = circularReference; // The object refers to itself
Indirect Reference: Two or more objects refer to each other.
javascript
let person = {};
let friend = {};

person.bestFriend = friend; // Person refers to friend
friend.bestFriend = person; // Friend refers back to person
 
Problems Caused by Circular References
While modern JavaScript garbage collectors can handle circular references and prevent memory leaks that were common in older browsers like Internet Explorer 6 and 7, they can still cause issues: 
JSON.stringify() Error: The most common problem is that the built-in JSON.stringify() method cannot serialize objects with circular references. It throws a TypeError: cyclic object value because the JSON format doesn't support object references and the stringification process would run infinitely.
Infinite Loops: If not handled properly, functions that recursively traverse an object's properties can enter infinite loops when encountering a circular reference.
Tight Coupling: From a design perspective, circular references can lead to tight coupling between objects, making the code harder to maintain and test. 
How to Handle Circular References
Avoid them: The best practice is to design your data structures to avoid circular references if possible, promoting loose coupling.
Use the replacer argument: When using JSON.stringify(), you can provide a replacer function to modify or omit circular references during serialization.
javascript
const me = { id: 1, name: 'Luke' };
const him = { id: 2, name: 'Darth Vader' };
me.father = him;
him.father = me; // Circular reference

JSON.stringify(me, function(key, value) {
  if (key === 'father') {
    return value.id; // Replace circular reference with just the ID
  }
  return value;
});
Use specialized libraries: For complex scenarios, libraries like cycle.js (by JSON inventor Douglas Crockford) can encode and decode cyclical structures into a format that can be safely serialized to and from JSON.
For debugging: When logging objects in the console, modern environments often indicate a circular reference with notations like [Circular *1] or [...] to prevent infinite output. 


// -------- serializable object -------------


In JavaScript, a serializable object is a generic concept for any object that can be converted into a format (like a string of bytes or a text format) for storage or transmission. A JSON object in JS refers to an object that specifically adheres to the strict rules of the JSON data interchange format, and is thus easily serializable using the built-in JSON.stringify() method. 
Serializable Objects
Definition: The term "serializable object" describes any object whose state (its property values) can be translated into a storable or transmittable format (a process called serialization) and later reconstructed.
Purpose: This allows objects to be saved to a file, sent over a network, or shared between different environments (e.g., between web workers).
Implementation: The exact definition of "serializable" can vary depending on the serialization method used. For example, some specialized serialization methods might handle complex object references or specific data types that others do not. 
JSON Objects in JS
Definition: A JSON object is a JavaScript object that strictly adheres to the rules of the JSON (JavaScript Object Notation) data interchange format. The JSON format is a subset of JavaScript's object literal syntax.
Purpose: It is a language-independent, human-readable text format designed for easy data exchange between different systems and programming languages.
Implementation: In JavaScript, the JSON.stringify() method converts a compliant JS object into a JSON string, and JSON.parse() converts a JSON string back into a JS object. 


Key Differences
Feature 	Serializable Object (General Concept)	JSON Object (Specific JS Object Type)
Concept	A broad concept for any object that can be put into a transmittable format using any method.	A specific type of JS object that meets strict criteria for the JSON data format.
Allowed Data Types	Can include various data types, functions, methods, and circular references, depending on the serialization method.	Limited to simple data types: strings, numbers, arrays, booleans, null, and other JSON objects. Cannot contain functions, undefined, Date objects (they become strings), or circular references.
Syntax Rules	Flexible (standard JavaScript syntax).	Strict: object keys must be enclosed in double quotes, no comments, no trailing commas.
Portability	Can be platform-dependent if using a language-specific serialization method (e.g., Java's built-in serialization).	Highly portable; it's a universal standard for data interchange across different languages/platforms.
Usage	Used internally within a program or specific system for saving/transferring complex in-memory state.	Used for transmitting data between clients and servers (APIs), or storing data in formats like localStorage.
In short, a JSON object is a specific kind of JavaScript object that is easily serializable because it adheres to the JSON standard's limitations, making it universally portable. A general "serializable object" is any object, potentially more complex than JSON allows, that has a defined mechanism for saving and restoring its state. 