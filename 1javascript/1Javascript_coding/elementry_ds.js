// ------ strings -------


// JavaScript strings are immutable, which means their content cannot be changed after they are created

const name1 = 'vamsi'

// //length
// const text = "Hello World";
// console.log(text.length); // Output: 11

// charAt(index)   returns the character at a spedified index
// const text = "JavaScript";
// console.log(text.charAt(0)); // Output: J
// console.log(text.charAt(4)); // Output: S

// concat(string2, string3, ...):
const str1 = "Hello";
const str2 = "World";
const result = str1.concat(" ", str2, "!");
console.log(result); // Output: Hello World!


// split 
const name_char_array = name1.split("")
console.log(name_char_array) //[ 'v', 'a', 'm', 's', 'i' ]

// reverse
// const reversed_name = name1.reverse()   
// console.log(reversed_name)              // name1.reverse is not a function
//  The reverse() method in JavaScript is a method of Array.prototype, meaning it is designed to work with arrays, not directly with strings.

// .slice(start, end) extracts part of string and returns new string. takes 2 optional args, start(inclusive) end(exclusive), -ve indexes allowed 
const firstTwoLetters = name1.slice(0,2)
console.log(firstTwoLetters)                // 'va'

console.log(name1.slice())      // 'vamsi'
console.log(name1.slice(0,-2))  // 'vam'
console.log(name1.slice(1))     // 'amsi'

//------- substring(startIndex, endIndex) similar to slice, but handles negative indices differently
// treates any negative startIndex or endIndex as 0

const text = "JavaScript";
console.log(text.substring(0, 4)); // Output: Java
console.log(text.substring(-2, 4)); // Output: Java


//---------- indexOf(searchValue, startIndex):  Returns the index of the first occurrence of a specified value, or -1 if not found, for arrays use as array.indexOf(searchElement, fromIndex)
//case sensitive

// const sentence = "the quick brown fox jumps over the lazy dog.";
// console.log(sentence.indexOf("fox")); // Output: 16
// console.log(sentence.indexOf("the"));   // output: 0
// console.log(sentence.indexOf("the",5)); // Output: 16

// console.log(sentence.indexOf("cat")); // Output: -1


// ------- includes(searchValue, startIndex) -----

const sentence = "the quick brown fox jumps over the lazy dog.";

// console.log(sentence.includes("fox")); // Output: true
// console.log(sentence.includes("fox",17)); // Output: false 


// -------- startsWith(searchValue, startIndex) 

const greeting = "Hello World! Hello";
console.log(greeting.startsWith("Hello")); // Output: true
console.log(greeting.startsWith("Hello",13)); // Output: true
console.log(greeting.startsWith("Hello",14)); // Output: false

console.log(greeting.startsWith("World")); // Output: false

// ------endsWith(searchValue, length)


const filename = "document.pdf";
console.log(filename.endsWith(".pdf")); // Output: true
console.log(filename.endsWith(".doc")); // Output: false

// length (Optional): An integer representing the length of the string to consider for the search. 
// If provided, the method only checks if the searchValue ends within the first length characters of the string. 
// If omitted, the entire string is considered.

let text = "Hello world, welcome to the universe.";


// Check if the first 11 characters of the string end with "world"
console.log(text.endsWith("world", 11)); // true (because "Hello world" ends with "world")

// Check if the first 5 characters of the string end with "world"
console.log(text.endsWith("world", 5)); // false (because "Hello" does not end with "world")

// ----- toUpperCase(), toLowerCase() ------

console.log(message.toUpperCase()); // Output: HELLO WORLD
console.log(message.toLowerCase()); // Output: hello world


// ------- trim() Removes whitespace from both ends of a string.
const paddedText = "   Hello World   ";
console.log(paddedText.trim()); // Output: Hello World

//  -------- replace(searchValue, newValue)  Replaces the first occurrence of a specified value with another value.

const sentence = "I love cats. Cats are great.";
console.log(sentence.replace("cats", "dogs")); // Output: I love dogs. Cats are great.


// --------- replaceAll(searchValue, newValue): Replaces all occurrences of a specified value with another value.

const sentence = "I love cats. Cats are great.";
console.log(sentence.replaceAll("cats", "dogs")); // Output: I love dogs. Dogs are great.

// --------- split(separator, limit) Splits a string into an array of substrings based on a separator.

const csvData = "apple,banana,orange";
const fruitsArray = csvData.split(",");
console.log(fruitsArray); // Output: ["apple", "banana", "orange"]

let text = "apple,banana,orange,grape";

// No limit (default)
let result1 = text.split(",");
console.log(result1); // Output: ["apple", "banana", "orange", "grape"]

// Limit of 2
let result2 = text.split(",", 2);
console.log(result2); // Output: ["apple", "banana,orange,grape"]

// When a limit is provided, the split method will perform at most limit - 1 splits. This means the resulting array will contain at most limit elements.








// ---------- loops --------------

// in objects:  for in loop gives key's names, for of loop gives TypeError: obj is not iterable
// in array : for in loop gives index, for of loop gives elements value 


// -------- for loop -------
// for loop iterates a specific no of times, it consists of initialization, a condition, incrment/decrement expression

for (let i=0; i<5; i++){
    console.log(i)              // 1 2 3 4 5 
}

for (let i=10; i<15; i=i+2){
    console.log(i)              // 10, 12, 14
}

// -------- for in loop------
// iterates over the enumerable properties of the object. 
// typically used for iterating over object keys, index in array

const obj1 = {
    'name':'vamsi',
    'age':30,
    'profession':'developer'
}

for (const key in obj1){
    console.log(key)            // name, age, profession
}

const arr1 = [10,20,30]

for (const index in arr1){
    console.log(index)          // 0 1 2 
}

// --------- for of loop
//  This loop iterates over the values of an iterable object (like arrays, strings, Maps, Sets, etc.).

const arr = ['apple', 'banana', 'cherry']
for (const item of arr){
    console.log(item)       // apple banana cherry 
}


const obj1 = {
    'name':'vamsi',
    'age':30,
    'profession':'developer'
}

for (const val of obj1){
    console.log(val)        // TypeError: obj1 is not iterable
}

const arr1 = [10,20,30]

for (const val of arr1){
    console.log(val)          // 10 20 30 
}
for (const val in arr1){
    console.log(val)          // 10 20 30 
}

// ------- while loop -------
//  This loop executes a block of code as long as a specified condition is true. The condition is checked before each iteration. 

let i = 0
while (i<5){         // condition checked before iteration
    console.log(i)  // 0 1 2 3 4 
    i++             // i+=1 also gives same result 
}


// ------ do while loop ----
//  Similar to the while loop, but the code block is executed at least once, and then the condition is checked after each iteration.

let i = 10;
do {
    console.log(i); // Prints 10, 11, 12, 13, 14
    i++;
} while (i < 15);

let i = 10;
do {
    console.log(i); // Prints 10    block executed once
    i++;
} while (i < 9);


// Additionally, while not strictly "loops" in the same structural sense, higher-order array methods like forEach(), map(), filter(), and reduce() also provide ways to iterate and process elements within arrays.

// ---------- array methods -----------
// push() -  Adds one or more elements to the end of an array and returns the new length. 
// pop() - Removes the last element from an array and returns that element. 
// ushift() - Adds one or more elements to the beginning of an array and returns the new length. 
// shift() - Removes the first element from an array and returns that element.

let fruits = ["banana", "orange"];
fruits.unshift("apple"); // fruits is now ["apple", "banana", "orange"]

let fruits = ["apple", "banana", "orange"];
let removedFruit = fruits.shift(); // removedFruit is "apple", fruits is now ["banana", "orange"]


// ----- iterations and transformations ----------

//--- forEach(): Executes a provided function once for each array element.

let numbers = [1, 2, 3];
numbers.forEach(num => console.log(num * 2)); // Outputs: 2, 4, 6

//--- map(): Creates a new array populated with the results of calling a provided function on every element in the calling array.

let numbers = [1, 2, 3];
let doubledNumbers = numbers.map(num => num * 2); // doubledNumbers is [2, 4, 6]


filter(): Creates a new array with all elements that pass the test implemented by the provided function.
reduce(): Executes a reducer function (that you provide) on each element of the array, resulting in a single output value.



// ------------ searching and checking

// --- indexOf(): Returns the first index at which a given element can be found in the array, or -1 if it is not present.

let fruits = ["apple", "banana", "orange"];
let index = fruits.indexOf("banana"); // index is 1

// -- includes(): Determines whether an array includes a certain value among its entries, returning true or false as appropriate.

let fruits = ["apple", "banana", "orange"];
let hasApple = fruits.includes("apple"); // hasApple is true

// ---find(): Returns the value of the first element in the array that satisfies the provided testing function. Otherwise, undefined is returned. 

let users = [{id: 1, name: "Alice"}, {id: 2, name: "Bob"}];
let user = users.find(u => u.id === 2); // user is {id: 2, name: "Bob"}

// -------- utility methods

// ----- concat(): Used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.

let arr1 = [1, 2];
let arr2 = [3, 4];
let combinedArr = arr1.concat(arr2); // combinedArr is [1, 2, 3, 4]


// --- slice(): Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included).

let fruits = ["apple", "banana", "orange", "grape"];
let citrus = fruits.slice(1, 3); // citrus is ["banana", "orange"]

// ----- splice(startIndex, deleteCount, item1, itme2,..): Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

let fruits = ["apple", "banana", "orange"];
fruits.splice(1, 1, "kiwi", "mango"); // fruits is now ["apple", "kiwi", "mango", "orange"]

// removing elements
let arr = ["apple", "banana", "cherry", "date"];
arr.splice(1, 2); // Removes 2 elements starting from index 1 ("banana", "cherry")
console.log(arr); // Output: ["apple", "date"]

//adding elements
let arr = ["apple", "date"];
arr.splice(1, 0, "banana", "cherry"); // Adds "banana", "cherry" at index 1, removes 0 elements
console.log(arr); // Output: ["apple", "banana", "cherry", "date"]

// replacing elements
let arr = ["cat", "dog", "elephant"];
arr.splice(1, 1, "giraffe"); // Removes 1 element at index 1 ("dog"), adds "giraffe"
console.log(arr); // Output: ["cat", "giraffe", "elephant"]

// ------------ Type checking of array and objects 

//------- Arrays:

// Array.isArray(value): This is the most reliable way to check if a value is an array.
// value instanceof Array: This also works but can be problematic when dealing with multiple JavaScript contexts (e.g., iframes).
// Object.prototype.toString.call(value) === '[object Array]': Another robust method.

const myArr = [1, 2, 3];
console.log(Array.isArray(myArr)); // true
console.log(myArr instanceof Array); // true
console.log(Object.prototype.toString.call(myArr) === '[object Array]'); // true

// ------- Objects:

// typeof value === 'object' && value !== null && !Array.isArray(value): This combination checks for generic objects, excluding null and arrays.
// value instanceof Object: Similar to arrays, this can be used but has the same limitations in multi-context environments.
// Object.prototype.toString.call(value) === '[object Object]': A reliable way to specifically check for plain JavaScript objects.


const myObj = { a: 1, b: 2 };
console.log(typeof myObj === 'object' && myObj !== null && !Array.isArray(myObj)); // true
console.log(myObj instanceof Object); // true
console.log(Object.prototype.toString.call(myObj) === '[object Object]'); // true


// --- object modifications

// Adding/Modifying Properties: Assign directly using dot or bracket notation: myObj.newProp = value;, myObj['otherProp'] = value;.
// Removing Properties: delete myObj.property;.
// Creating New Objects (non-mutating): Object.assign({}, obj1, obj2);, spread syntax ({ ...obj1, ...obj2 }).

const obj = { name: 'Alice', age: 30 };
obj.city = 'New York'; // { name: 'Alice', age: 30, city: 'New York' }
obj.age = 31; // { name: 'Alice', age: 31, city: 'New York' }
delete obj.city; // { name: 'Alice', age: 31 }
const newObj = { ...obj, country: 'USA' }; // { name: 'Alice', age: 31, country: 'USA' }

const product = {
  item: "Laptop",
  price: 1200,
  brand: "TechCo"
};

console.log(Object.keys(product));   // Output: ["item", "price", "brand"]
console.log(Object.values(product)); // Output: ["Laptop", 1200, "TechCo"]
console.log(Object.entries(product));// Output: [["item", "Laptop"], ["price", 1200], ["brand", "TechCo"]]

// ---Object.assign(): This method copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object. 

const target = { a: 1, b: 2 };
const source1 = { b: 4, c: 5 };
const source2 = { d: 6 };

Object.assign(target, source1, source2);
console.log(target); // Output: { a: 1, b: 4, c: 5, d: 6 }

// Note: Object.assign() performs a shallow copy. If a source property's value is a reference to an object, only the reference is copied, not the object itself.

// The spread syntax provides a concise way to merge objects, creating a new object without modifying the original sources.

const obj1 = { x: 1, y: 2 };
const obj2 = { y: 3, z: 4 };

const mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj); // Output: { x: 1, y: 3, z: 4 }

// structuredClone() for Deep Copying: For deep cloning objects (including nested objects and arrays), structuredClone() is a modern and robust solution.

const original = {
  name: "Parent",
  details: { id: 1, data: [10, 20] }
};

const deepCopy = structuredClone(original);
deepCopy.details.data.push(30);

console.log(original.details.data); // Output: [10, 20] (original unaffected)
console.log(deepCopy.details.data);   // Output: [10, 20, 30]



