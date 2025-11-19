

// JavaScript has several data types, categorized into primitive types and object types.


// Data Type                                       Description                                                 Example

// Primitive Types

// Number                          Represents both integer and floating-point numbers.                         10, 3.14, -5
// String                              Represents a sequence of characters.                            "Hello World", 'JavaScript'
// Boolean                 Represents a logical entity and can have two values: true or false.                  true, false
// Undefined               A variable that has been declared but not yet assigned a value.             let x; (x is undefined)
// Null                        Represents the intentional absence of any object value.                     let y = null;
// Symbol                  A unique and immutable data type, often used as object property keys.               Symbol('id')
// BigInt                          Represents whole numbers larger than 2^53 - 1.                          9007199254740991n


// Object Type

// Object                  A collection of properties, where each property has a name (key) and a value.          let person = { name: "Alice", age: 30 };
// Array                       A special type of object used to store ordered collections of data.                   let colors = ["red", "green", "blue"];
// Function                        A block of code designed to perform a particular task.                          function greet() { console.log("Hi"); }
// Date                                Represents dates and times.                                                     new Date();
// RegExp                          Represents regular expressions for pattern matching.                                /[a-z]+/







// ============= // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from

// "A".charCodeAt(0)
// String.fromCharCode(x)

// const range = (start, stop, step) =>
//   Array.from(
//     { length: Math.ceil((stop - start) / step) },
//     (_, i) => start + i * step,
//   );


// function f() {  
//   return Array.from(arguments);
// }

// console.log(f(1, 2, 3)); // [ 1, 2, 3 ]
// This behavior in JavaScript is due to the presence of an automatic local variable called arguments inside every function body (except for arrow functions).

//================ Map() ================

    const myMap = new Map([
    [1, "one"],
    [2, "two"],
    [3, "three"],
    ]);

    console.log(myMap)  // Map(3) { 1 => 'one', 2 => 'two', 3 => 'three' }

// Map.groupBy(items, callbackFn)

    const inventory = [
        { name: "asparagus", type: "vegetables", quantity: 9 },
        { name: "bananas", type: "fruit", quantity: 5 },
        { name: "goat", type: "meat", quantity: 23 },
        { name: "cherries", type: "fruit", quantity: 12 },
        { name: "fish", type: "meat", quantity: 22 },
    ];

    const restock = { restock: true };
    const sufficient = { restock: false };
    const result = Map.groupBy(inventory, ({ quantity }) => quantity < 6 ? restock : sufficient, );

    console.log(result) 
    Map(2) {
                { restock: false } => [
                    { name: 'asparagus', type: 'vegetables', quantity: 9 },
                    { name: 'goat', type: 'meat', quantity: 23 },
                    { name: 'cherries', type: 'fruit', quantity: 12 },
                    { name: 'fish', type: 'meat', quantity: 22 }
                ],
                { restock: true } => [ { name: 'bananas', type: 'fruit', quantity: 5 } ]
            }

    
    console.log(result.get(restock));
    // [{ name: "bananas", type: "fruit", quantity: 5 }]

    console.log(result.get(sufficient));
    // [
    //   { name: 'asparagus', type: 'vegetables', quantity: 9 },
    //   { name: 'goat', type: 'meat', quantity: 23 },
    //   { name: 'cherries', type: 'fruit', quantity: 12 },
    //   { name: 'fish', type: 'meat', quantity: 22 }
    // ]

    Map.groupBy() with an arrow function that returns the object keys named restock or sufficient, depending on whether the element has quantity < 6. 
    The returned result object is a Map so we need to call get() with the key to obtain the array.

    The key to a Map can be modified and still used. However you can't recreate the key and still use it. 
    For this reason it is important that anything that needs to use the map keeps a reference to its keys.

    // The key can be modified and still used
    restock["fast"] = true;
    console.log(result.get(restock));
    // [{ name: "bananas", type: "fruit", quantity: 5 }]

    // A new key can't be used, even if it has the same structure!
    const restock2 = { restock: true };
    console.log(result.get(restock2)); // undefined

// =========== symbols in js =============












