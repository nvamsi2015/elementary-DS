https://medium.com/deno-the-complete-reference/10-javascript-coding-interview-questions-part-1-a0e5bb606eaf
https://medium.com/deno-the-complete-reference/10-javascript-coding-interview-questions-part-2-42250060345c
https://medium.com/deno-the-complete-reference/10-javascript-coding-interview-questions-part-3-2250ed68f614

https://choubey.gitbook.io/javascript-interview-questions/question-95

https://medium.com/deno-the-complete-reference/10-use-cases-of-closures-in-javascript-98fe0eab36db  // 10 closure use cases
// --------------- 1. reverse the order of words in String. 

let name1 = 'vamsi krishna nagendla'

const reversed_name = str => str.split(' ').reverse().join(' ');
const result  = reversed_name(name1)
console.log(result) // nagendla krishna vamsi



// let splited_name = name1.split()              [ 'vamsi krishna nagendla' ]  split without argument wont take space as default like in python
// default argument is undefined, so str.split() does not split the string and returns the whole string as a single element in the array.

let splited_name_array = name1.split(' ')     // [ 'vamsi', 'krishna', 'nagendla' ]


let reversed_array = splited_name_array.reverse()   // [ 'nagendla', 'krishna', 'vamsi' ]

// let joined_string = reversed_array.join()   // nagendla,krishna,vamsi   // join in js takes default argument as comma
let joined_string = reversed_array.join(' ')    // nagendla krishna vamsi

// ------------- 2. function in js to remove duplicates in array -----------
const uniqueArray = arr => [...new Set(arr)];



// ------------ 3. function to merge two objects without overwriting existing properties ----------

const mergeObjects = (obj1, obj2) => {
  const result = { ...obj1 };
  for (const key in obj2) {
    if (!result.hasOwnProperty(key)) {
      result[key] = obj2[key];
    }
  }
  return result;
};


// Shallow copy of obj1
// Using { …obj1 } ensures we don’t modify the original object. All keys from obj1 are preserved in result.

// Preventing overwrites
// The if (!result.hasOwnProperty(key)) check ensures that if obj1 already has a key, its value is not overwritten by obj2.

// Merging new keys
// Any key in obj2 that does not exist in obj1 is added to result.

// Result
// The returned object contains all original keys from obj1, plus any additional keys from obj2, without overwriting.

// ----------- 4. function to get current date in the format “YYYY-MM-DD” -----------

const currentDate = () => new Date().toISOString().split('T')[0]; 


// const currentDate = () => new Date() // 2025-10-15T07:41:50.137Z                typeof(currentDate())  = object
// const currentDate = () => new Date().toISOString() // 2025-10-15T07:42:28.962Z  typeof(currentDate())  = string
// const currentDate = () => new Date().toISOString().split('T')[0]    // 2025-10-15   string

console.log(currentDate(), typeof(currentDate()));

//------------- 5. cummulative sum of array  ----------- 
const cumulativeSum = arr => arr.reduce((acc, num) => [...acc, acc.length ? acc[acc.length - 1] + num : num], []);

console.log(cumulativeSum([1,5,9,4,8,6,12]))  // [ 1, 6, 15, 19,  27, 33, 45]  

//  The spread operator (...) is used to create a new array at each step, ensuring that the original array remains unchanged. This approach provides a concise way to calculate the cumulative sum of the input array.

// ----------- 6. function in js to split an array into chunks of a specified size -----------

const chunkArray = (arr, size) => Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size));

console.log(chunkArray([1,5,9,4,8,6,12],3))  // [ [ 1, 5, 9 ], [ 4, 8, 6 ], [ 12 ] ]

// This one-liner function uses Array.from to create a new array based on the length of the original array divided by the specified chunk size. 
// The arrow function inside Array.from then uses slice to extract chunks of the array, ensuring that the chunks do not exceed the array's boundaries.

// ------------ 7. js oneliner to find the longest consecutive sequence of a specific element in an array? --------

const longestConsecutiveSequence = (arr, element) => Math.max(...arr.join('').split(element).map(group => group.length));

console.log(longestConsecutiveSequence([1, 2, 3, 7, 8, 9, 4, 5, 6]),3)  // this needs further research 

// ----------- 8. transpose a 2d matrix ---------------
const transposeMatrix = matrix => matrix[0].map((col, i) => matrix.map(row => row[i]));

//------------ 9. convert a string containing hyphens and underscores to camel case ----------
const toCamelCase = str => str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());

// ------------  10 swap two variables without using a temporary variables -----------
[a, b] = [b, a];


// ----------11. js countdown from a given number -------
const countdown = n => Array.from({ length: n }, (_, i) => n - i);


const countdownResult = countdown(5);
console.log(countdownResult); // Output: [5, 4, 3, 2, 1]

//-----------12. convert string to integer and handle non-numeric charecters gracefully ---

const stringToInteger = str => +str === +str ? +str : 0;

stringToInteger("123"); // Output: 123
stringToInteger("abc"); // Output: 0

// This function utilizes the unary plus (+) operator along with the isNaN function to convert a string to an integer.
// The isNaN function checks if the result of the conversion is not a number, and in such cases, it returns a default value (0 in this case).

// In the first example, the stringToInteger function successfully converts the string "123" to the integer 123. 
// In the second example, it returns 0 as the string "abc" cannot be converted to a number.

// -----------13. convert a decimal number to its binary representation ----------

const decimalToBinary = num => num.toString(2);

const decimalNumber = 10;
const binaryRepresentation = decimalToBinary(decimalNumber);
// binaryRepresentation: "1010"

//  This function leverages the built-in toString method with a base argument of 2 to convert a decimal number to its binary representation. 
// It's a concise and built-in way to achieve this conversion in JavaScript.

//---------- 14. factorial of a given non-negative integer ------------

const factorial = (n) => n === 0 ? 1 : Array.from({length: n}, (_, i) => i + 1).reduce((acc, num) => acc * num, 1);

const number = 5;
const result = factorial(number);
// result: 120

// This function uses a ternary operator to check if the input n is 0.
// If true, it returns 1, as the factorial of 0 is 1. 
// If false, it uses Array.from to create an array of numbers from 1 to n and then uses the reduce method to calculate the factorial.

//---------- 15. consise func to safely access a deeply nested property of an object without throwing an error if any intermediate property is undefined

// With the new version of JavaScript, we can use the optional chaining operator. However, for this interview question, we’ll write a function ourselves.

const deepAccess = (obj, path) => path.split('.').reduce((acc, key) => acc && acc[key], obj);

const nestedObject = { a: { b: { c: 42 } } };
const propertyPath = 'a.b.c';
const result = deepAccess(nestedObject, propertyPath);
// result: 42

// This one-liner function utilizes the reduce method on the result of splitting the path string by dots. 
// It iteratively accesses nested properties, ensuring that each intermediate property exists before attempting to access the next one.

// --------16. fun in js to generate a random integer bw specified min and max value(inclusive) ---------

const randomInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const minValue = 5;
const maxValue = 10;
const result = randomInRange(minValue, maxValue);
// result: 7

// This simple function uses Math.random() to generate a random decimal between 0 (inclusive) and 1 (exclusive). 
// By multiplying this value by the range (max - min + 1), it ensures that the result covers the entire specified range. 
// Math.floor is then applied to round down to the nearest integer, and min is added to ensure the result falls within the desired range.


// ------17 count occurences of each element in array and return result as object ---------

const countOccurrences = (arr) => arr.reduce((acc, val) => (acc[val] = (acc[val] || 0) + 1, acc), {});

const inputArray = [1, 2, 2, 3, 4, 4, 4, 5];
const result = countOccurrences(inputArray);
// result: { 1: 1, 2: 2, 3: 1, 4: 3, 5: 1 }


// --------18. capitalize  first letter of each word in the given sentence ------

const capitalizeWords = (sentence) => sentence.replace(/\b\w/g, char => char.toUpperCase());

const inputSentence = 'hello world, this is a test';
const result = capitalizeWords(inputSentence);  // result: 'Hello World, This Is A Test'

// This one-liner uses a regular expression (/\b\w/g) to match the first character of each word in the sentence. 
// The replace method is then used to replace each matched character with its uppercase equivalent, effectively capitalizing the first letter of each word.

// ---------19.  reverse a given string ----------

const reverseString = (str) => str.split('').reverse().join('');


//---------20. find longest word in a given sentence -------------

const longestWord = (sentence) => sentence.split(' ').reduce((longest, word) => word.length > longest.length ? word : longest, '');



// --------------21. rename a specific property in an object ----------

const renameProperty = (obj, oldName, newName) => ({ ...obj, [newName]: obj[oldName], ...(delete obj[oldName], obj) });

const person = { firstName: 'John', lastName: 'Doe', age: 30 };
const updatedPerson = renameProperty(person, 'firstName', 'first');
// updatedPerson: { first: 'John', lastName: 'Doe', age: 30 }

// -------22. second largest element in the array -----------

const secondLargest = (arr) => [...new Set(arr)].sort((a, b) => b - a)[1];
const array = [5, 2, 8, 9, 2, 4, 7];
const result = secondLargest(array);
// result: 7

// ------------ 23 group an array of objects by a specific property ---------

const groupByProperty = (arr, property) => arr.reduce((grouped, obj) => ({ ...grouped, [obj[property]]: [...(grouped[obj[property]] || []), obj] }), {});


const people = [
  { id: 1, name: 'Alice', age: 25 },
  { id: 2, name: 'Bob', age: 30 },
  { id: 3, name: 'Alice', age: 28 },
];

const result = groupByProperty(people, 'name');
// result: { 'Alice': [ { id: 1, name: 'Alice', age: 25 }, { id: 3, name: 'Alice', age: 28 } ],
//           'Bob': [ { id: 2, name: 'Bob', age: 30 } ] }

// ---------24. Missing number in array of consecutive numbers from 1 to N -----------

const findMissingNumber = (arr) => (arr.length + 1) * (arr.length + 2) / 2 - arr.reduce((sum, num) => sum + num, 0);

const arr = [1, 2, 3, 5, 6, 7, 8];
const result = findMissingNumber(arr);s
// result: 4

// This moderately complicated function uses the formula for the sum of consecutive integers from 1 to N 
// and subtracts the sum of the array to find the missing number.


// ------25. js function to reversee the key-value pairs of an object ---------

const reverseObject = (obj) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [value, key]));

const originalObject = { a: 1, b: 2, c: 3 };
const reversedObject = reverseObject(originalObject);
// reversedObject: { '1': 'a', '2': 'b', '3': 'c' }

// This function uses Object.entries to get an array of key-value pairs, then map is used to swap the positions of keys and values, 
// and finally, Object.fromEntries is used to create a new object.

// ------- 26. js func to check if given string has balanced parenthesis ------------

const isBalancedParentheses = (str) => str.split('').reduce((count, char) => count >= 0 ? count + (char === '(' ? 1 : char === ')' ? -1 : 0) : -1, 0) === 0;

const str = '(a + b) * (c - d)';
const result = isBalancedParentheses(str);
// result: true

// This moderately complex function once again uses reduce to iterate over each character in the string, updating a count variable based on the presence of open and close parentheses. 
// It checks if the count stays non-negative and eventually becomes zero, indicating balanced parentheses.

// ------------ 27. debounce function ------------
const debounce = (func, delay) => { 
  let timeout; 
  return (...args) => { 
    clearTimeout(timeout); 
    timeout = setTimeout(() => func(...args), delay); 
  }
};

const delayedLog = debounce((text) => console.log(text), 1000);
delayedLog('Hello'); // Logs 'Hello' after 1000 milliseconds
delayedLog('World'); // Cancels the previous timeout and sets a new one for 'World'


// In JavaScript, debounce is a powerful technique used to optimize event handling by delaying the execution of a function until after a specified period of inactivity. 
// It helps prevent excessive function calls triggered by rapid events, such as keystrokes or scroll movements.


// The code above defines a debounce function that takes a function (func) and a delay time. 
// It returns a new function that, when called, clears the previous timeout (if any) and sets a new timeout for the delayed execution of the provided function.

// -------28. throttle function in js ----------

const throttle = (func, delay) => { 
  let throttled = false; 
  return (...args) => { 
    if (!throttled) { 
      func(...args); 
      throttled = true; 
      setTimeout(() => throttled = false, delay); 
    } 
  }
};

const throttledLog = throttle((text) => console.log(text), 1000);
throttledLog('Hello'); // Logs 'Hello'
throttledLog('World'); // Does not log 'World' because it's within the 1000ms throttle interval

// The above code defines a throttle function that takes a function (func) and a delay time. It returns a new function that, when called, checks if it's throttled. 
// If not throttled, it executes the provided function and sets a timeout to enable the next execution after the delay.

// ------29. truncate a given string to a specified length and append "..." if it exceeds that length -----

const truncateString = (str, maxLength) => str.length > maxLength ? str.slice(0, maxLength) + '...' : str;

const s = 'This is a very long string that needs to be truncated.';
const maxLen = 20;
const result = truncateString(s, maxLen);
// result: 'This is a very lon...'

// ---------- 30. check if a given string has all unique charecters ----------

const hasUniqueCharacters = (str) => new Set(str).size === str.length;

const s1 = 'abcdef';
const result1 = hasUniqueCharacters(s1); // result1: true

const s2 = 'hello';
const result2 = hasUniqueCharacters(s2); // result2: false



// ----------- 31. convert each string in array to uppercase
const convertToUppercase = (arr) => arr.map(str => str.toUpperCase());

const arr = ['apple', 'banana', 'cherry'];
const result = convertToUppercase(arr);
// result: ['APPLE', 'BANANA', 'CHERRY']


// -----------32. first non repeated charecter in a given string -----

const firstNonRepeatedChar = (str) => str.split('').find(char => str.indexOf(char) === str.lastIndexOf(char));

const s1 = 'programming';
const r1 = firstNonRepeatedChar(s1); // r1: 'o'

const s2 = 'hello';
const r2 = firstNonRepeatedChar(s2); // r2: 'h'


// ----------- 33. longest word in a sentence

const longestWord = (sentence) => sentence.split(' ').reduce((longest, word) => word.length > longest.length ? word : longest, '');

const s = 'The quick brown fox jumps over the lazy dog';
const r = longestWord(s);
console.log(r); // r: 'quick'

// ----------- 34. flatten a nested object -----

const flattenObject = (obj) => Object.assign({}, ...(function flattenObj(o) { return [].concat(...Object.keys(o).map(k => typeof o[k] === 'object' ? flattenObj({ [k]: o[k] }) : { [k]: o[k] }))})(obj));

const o = { a: 1, b: { c: 2, d: { e: 3 } } };
const r = flattenObject(o);
// r: { a: 1, 'b.c': 2, 'b.d.e': 3 }

// This is a tricky function that needs a bit of understanding. This function uses a recursive function flattenObj to flatten the nested object. 
// The Object.assign method is then used to merge the flattened objects into a single flat object.


// ----------- 35. right rotate array by specified no of positions 

const rotateArray = (arr, positions) => arr.slice(-positions).concat(arr.slice(0, -positions));

const arr = [1, 2, 3, 4, 5];
const pos = 2;
const result = rotateArray(arr, pos);
// result: [4, 5, 1, 2, 3]

// This simple function uses the slice method to extract the last positions elements and the remaining elements, and then concatenates them in reverse order to achieve the rotation.

// ----------- 36. convert mins to hours and mins

const convertToHoursAndMinutes = (minutes) => `${Math.floor(minutes / 60)}h ${minutes % 60}m`;

const t = 125;
const r = convertToHoursAndMinutes(t);
// r: '2h 5m'

// This simple function uses the division operator and the modulo operator to calculate the number of hours and the remaining minutes.

// ----------- 37. generate random password of specified length---

const generateRandomPassword = (length) => Array.from({ length }, () => String.fromCharCode(Math.floor(Math.random() * 94) + 33)).join('');

const len = 12;
const pass = generateRandomPassword(len);
// pass: '$2#XrGp^@L9'

// This simple one-liner functino uses Array.from to create an array of the specified length and fills it with random characters by generating random Unicode values within the printable ASCII range.

// ----------- 38. js function to convert RGB color to its hexadeciamal representataion -----

const rgbToHex = (r, g, b) => `#${(1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1)}`;

const r = 255;
const g = 127;
const b = 63;
const color = rgbToHex(r, g, b);
// color: '#ff7f3f'

// This function uses bitwise operations and string formatting to convert the RGB values to a hexadecimal representation with the # prefix.

// ----------- 39. check if given string has balanced brackets -----

const areBracketsBalanced = (str) => !str.split('').reduce((count, char) => (char === '(' || char === '[' || char === '{') ? ++count : (char === ')' || char === ']' || char === '}') ? --count : count, 0);

const s1 = '({[]})';
const r1 = areBracketsBalanced(s1); // r1: true

const s2 = '({[})';
const r2 = areBracketsBalanced(s2); // r2: false

// This function uses the reduce method to iterate through the string, incrementing the count for opening brackets and decrementing for closing brackets. 
// The result is true if the count is zero, indicating balanced brackets.

// ----------- 40. js function to generate unique identifier ---

const generateUniqueId = () => Math.random().toString(36).substr(2, 9);

const uniqueId = generateUniqueId();
// uniqueId: 'abc123xyz'

// This function uses Math.random() to generate a random decimal between 0 and 1, converts it to a base-36 string, and then takes a substring to get a unique identifier.

// ----------- 41. func that returns a promise which resolves after a specified delay---

const delayPromise = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const delay = 2000;
delayPromise(delay).then(() => console.log('Promise resolved after delay'));

// ----------- 42. convert an object to a query string -----

const objectToQueryString = (obj) => Object.entries(obj).map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`).join('&');

const o = { name: 'John Doe', age: 30, city: 'Example City' };
const qs = objectToQueryString(o);
// qs: 'name=John%20Doe&age=30&city=Example%20City'

// ----------- 43. check if two objects have same properties (regardless of the order)

const haveSameProperties = (obj1, obj2) => JSON.stringify(Object.keys(obj1).sort()) === JSON.stringify(Object.keys(obj2).sort());

const o1 = { name: 'John', age: 30, city: 'Example City' };
const o2 = { age: 30, name: 'John', city: 'Example City' };

const r = haveSameProperties(o1, o2);
// r: true

// ----------- 44. count occurences of each word in given sentences -------

const countWordOccurrences = (sentence) => sentence.split(' ').reduce((countMap, word) => ({ ...countMap, [word]: (countMap[word] || 0) + 1 }), {});

const s = 'the quick brown fox jumps over the lazy dog jumps over the fence';
const r = countWordOccurrences(s);
console.log(r);
/*
r:
{
  'the': 3,
  'quick': 1,
  'brown': 1,
  'fox': 1,
  'jumps': 2,
  'over': 2,
  'lazy': 1,
  'dog': 1,
  'fence': 1
}
*/

// This one-liner uses the split method to break the sentence into an array of words and the reduce method to count the occurrences of each word in an object.

// ----------- 45. generate a random color in hexagonal format

const randomColor = () => `#${Math.floor(Math.random()*16777215).toString(16)}`;

const color = randomColor();
// color: '#1a2b3c'

// This simple function uses Math.random() to generate a random number, Math.floor to round it down, and toString(16) to convert it to a hexadecimal string. 
// The resulting string is in the format #RRGGBB.

// ----------- 46. js function to implement simple caching func that stores result of fun for a given i/p and return cached result if the same i/p is provided again-----

const createCache = (func) => {
  const cache = new Map();
  return (...args) => cache.has(JSON.stringify(args)) ? cache.get(JSON.stringify(args)) : (cache.set(JSON.stringify(args), func(...args)), cache.get(JSON.stringify(args)));
};

const add = (a, b) => a + b;
const cachedAdd = createCache(add);

cachedAdd(2, 3); // Output: 5 (calculated and cached)
cachedAdd(2, 3); // Output: 5 (returned from cache)

// This function creates a closure with a cache (using Map) and returns a function that checks if the cache has the result for the given arguments.
// If not, it calculates the result, stores it in the cache, and returns the result.

// ----------- 47. generate array of specified len filled with random numbers -

const generateRandomArray = (length) => Array.from({ length }, () => Math.floor(Math.random() * 100));

const arr = generateRandomArray(5);
// arr: [42, 18, 75, 3, 91]

// This simple function uses Array.from to create an array of the specified length and fills it with random numbers between 0 and 99.

// ----------- 48. simple event emitter in js 

const createEventEmitter = () => {
  const listeners = new Map();
  return {
    on: (event, listener) => listeners.has(event) ? listeners.get(event).push(listener) : listeners.set(event, [listener]),
    emit: (event, ...args) => listeners.get(event)?.forEach(listener => listener(...args)),
    off: (event, listener) => listeners.set(event, listeners.get(event)?.filter(l => l !== listener)),
  };
};

const eventEmitter = createEventEmitter();

const greetListener = (name) => console.log(`Hello, ${name}!`);
eventEmitter.on('greet', greetListener);

eventEmitter.emit('greet', 'Alice'); // Output: 'Hello, Alice!'
eventEmitter.off('greet', greetListener);

eventEmitter.emit('greet', 'Bob'); // No output (listener removed)

// This complicated function creates a simple event emitter with on to add listeners, emit to trigger events, and off to remove listeners.

// ----------- 49. implement basic queue using arrays with enqueue and dequeue operations--------

const createQueue = () => ({ 
  items: [], 
  enqueue: (item) => (items.push(item)), 
  dequeue: () => items.shift() 
});

const queue = createQueue();
queue.enqueue('item1');
queue.enqueue('item2');
queue.dequeue(); // Output: 'item1'
queue.dequeue(); // Output: 'item2'

// This simple function creates a simple queue object with an array (items) and methods (enqueue and dequeue) to add and remove items from the queue.

// ----------- 50.implement basic stack using arrays with push and pop operations

const createStack = () => ({ 
  items: [], 
  push: (item) => items.push(item), 
  pop: () => items.pop() 
});

const stack = createStack();
stack.push('item1');
stack.push('item2');
stack.pop(); // Output: 'item2'
stack.pop(); // Output: 'item1'


// -----------















