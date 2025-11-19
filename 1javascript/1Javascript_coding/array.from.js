// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from

// "A".charCodeAt(0)
// String.fromCharCode(x)

// const range = (start, stop, step) =>
//   Array.from(
//     { length: Math.ceil((stop - start) / step) },
//     (_, i) => start + i * step,
//   );


// =================================== mdn documentation ========

// the Array.from() static method creates a new, shallow-copied Arrray instance from an iterable or arrray-like object.Array

console.log(Array.from("foo"));                         // Array ["f", "o", "o"] can be done with split() what is the difference

console.log(Array.from([1, 2, 3], (x) => x + x));       // Array [2, 4, 6]  can be done with map what is the difference.



// syntax:

Array.from(items)
Array.from(items, mapFn)
Array.from(items, mapFn, thisArg)


items: iterable or array-like object 

mapFn: a function to call on every element of the array. if provided, every value to be added to the array is first passed to this function, and mapFn returns value is added to array instead. 
    the function is called with  arguments 
    element: the current value being processed in the array. 
    index: the index of the current value begin processed in the array. 

thisArg: value to use as this when executing mapFn  


return value: a new Array instance 


// Array.from() lets you create Arrays from:
// iterable objects (objects such as Map and Set); or, if the object is not iterable,
// array-like objects (objects with a length property and indexed elements).


// ---------- 1. Array from string -----------

Array.from("foo");  // [ "f", "o", "o" ]

// ------------ 2. Array from set ----------

const set = new Set(["foo", "bar", "baz", "foo"]);
Array.from(set);    // [ "foo", "bar", "baz" ]


// ----------- 3. Array from a map -----------

const map = new Map([
  [1, 2],
  [2, 4],
  [4, 8],
]);

Array.from(map);// [[1, 2], [2, 4], [4, 8]]

const mapper = new Map([
  ["1", "a"],
  ["2", "b"],
]);
Array.from(mapper.values());   // ['a', 'b'];

Array.from(mapper.keys());  // ['1', '2'];

// --------- 4. Array from nodelist --------

// Create an array based on a property of DOM Elements
const images = document.querySelectorAll("img");
const sources = Array.from(images, (image) => image.src);
const insecureSources = sources.filter((link) => link.startsWith("http://"));


// ------5. Array from an Array-like object (arguments) -------

function f() {
  return Array.from(arguments);
}

f(1, 2, 3);

// [ 1, 2, 3 ]



// ---------5. using arrow function as the mapFn to create arrays with Array.from() -----


Array.from([1, 2, 3], (x) => x + x);
// [2, 4, 6]

Array.from({ length: 5 }, (v, i) => i);
// [0, 1, 2, 3, 4]


// -------6. sequence generator ----------

const range = (start, stop, step) =>
  Array.from(
    { length: Math.ceil((stop - start) / step) },
    (_, i) => start + i * step,
  );


range(0, 5, 1);  // [0, 1, 2, 3, 4]

range(1, 10, 2);  // [1, 3, 5, 7, 9]

range("A".charCodeAt(0), "Z".charCodeAt(0) + 1, 1).map((x) => String.fromCharCode(x),);

// ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]


// --------- 7. calling from() on non-array constructors --------
// The from() method can be called on any constructor function that accepts a single argument representing the length of the new array.


function NotArray(len) {
  console.log("NotArray called with length", len);
}

// Iterable
console.log(Array.from.call(NotArray, new Set(["foo", "bar", "baz"])));
// NotArray called with length undefined
// NotArray { '0': 'foo', '1': 'bar', '2': 'baz', length: 3 }

// Array-like
console.log(Array.from.call(NotArray, { length: 1, 0: "foo" }));        // call syntax: functionName.call(thisArg, arg1, arg2, ...argN);
// NotArray called with length 1
// NotArray { '0': 'foo', length: 1 }

// When the this value is not a constructor, a plain Array object is returned.
console.log(Array.from.call({}, { length: 1, 0: "foo" })); // [ 'foo' ]

