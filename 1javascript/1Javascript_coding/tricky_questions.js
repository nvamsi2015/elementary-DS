// -------- https://www.codinn.dev/tricky-javascript/es6789-code-snippets-interview-questions --------

// -------1. objects used as keys in other objects, objects default behaviour ---------

let a = {};
let b = { key: "b" };
let c = { key: "c" };

a[b] = 123;
a[c] = 456;

console.log(a[b]);

// ----- explanation -------

// In this code, a is an empty object that is being assigned properties using the square bracket notation. The values of the properties are being set to the numbers 123 and 456. The keys of the properties are the objects b and c.

// When the console.log statement is executed, it logs the value of the property of a whose key is the object b. In this case, the value of this property is 456, because the value of the property was last set to 456 when the object c was used as the key.

// This behavior occurs because when objects are used as keys in an object, the object's default behavior is to convert the object to a string representation. In this case, both b and c are converted to the string [object Object], which means that they both end up being used as the same key in the a object. As a result, the value of the property that is set using the object c as the key overwrites the value of the property that was set using the object b as the key.

// The output of this code will be 456.


// So the object a looks like -

{
    "[object Object]": 456
}


// -------2. variables storing reference to object rather than object itself | reassigning a new object to variable will change reference | changing the value of a property of the object using one variable will affect other variable that references the same object.  

let obj1 = { key: "value" };
let obj2 = obj1;
let obj3 = obj2;

obj1.key = "new value";
obj2 = { key: "another value" };

console.log(obj1.key, obj2.key, obj3.key);


// explanation

// In this code, we are declaring three variables obj1, obj2, and obj3, and assigning an object to each of them. Then, we are reassigning a new object to obj2 and modifying a property of obj1.

// When the console.log statement is executed, it logs the values of the key property for each object. The value of the key property for obj1 is "new value", the value of the key property for obj2 is "another value", and the value of the key property for obj3 is "new value".

// This is because when an object is assigned to a variable, the variable stores a reference to the object in memory rather than the object itself. Changing the value of a property of the object using one variable will affect the value of that property when accessed using a different variable that references the same object. However, reassigning a new object to a variable will change the reference stored in that variable, so the original object is no longer accessible using that variable.

// In this case, the value of the key property for obj1 was changed to "new value" using the obj1 variable, which affected the value of the key property when accessed using the obj3 variable, because both variables reference the same object. However, the value of the key property for obj2 was not affected, because the obj2 variable was reassigned to reference a new object.

// The output of this code will be `new value` `another value` `new value`.


// ------3. objects method is assigned to a variable and then called -----

const obj = {
  a: "foo",
  b: function () {
    console.log(this.a);
  },
};

const c = obj.b;

obj.b();
c();


// When the method obj.b is called directly on obj, the output will be "foo". This is because this refers to the object that the method is called on, and obj.a is equal to "foo".

// When the variable c is assigned the value of obj.b, it is a reference to the function itself and not the object obj. 
// When c is called, it is not called on an object, so this will not refer to obj and the value of this.a is undefined. As a result, the output when calling c() will be undefined.

// Answer - foo, undefined

// objects method is assigned to a variable and then variable is called => you are calling object's method, but you are not passing the object into that call

// -------4. 

const x = { foo: 1 };
const y = { foo: 2 };

function addFoo(obj) {
  return obj.foo + 1;
}

console.log(addFoo(x));
console.log(addFoo(y));

// Answer - 2, 3


// ------5. var in setTimeout's callback function

const arr = [1, 2, 3, 4, 5];

for (var i = 0; i < arr.length; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}


// The setTimeout function is called inside of a loop that iterates through the elements in the arr array. The setTimeout function will execute its callback function after a delay of 1000 milliseconds. 
// However, by the time the delay has elapsed and the callback function is called, the loop will have already completed and the value of i will be 5. As a result, the output will be 5 printed five times.

// var is function-scoped (or global if not in a function), not block-scoped.
// All the callbacks share the same i variable.
// By the time the setTimeout callbacks run (after 1 second), the loop has finished and i is 5.
// So, all callbacks print 5.

// var shares the same variable for all iterations.
// var → no new closure per iteration, all callbacks share the same 


Answer - 5, 5, 5, 5, 5


for (let i = 0; i < arr.length; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}

// let is block-scoped.
// Each iteration of the loop creates a new binding of i for that block.
// Each callback "closes over" its own copy of i.
// So, the callbacks print 0, 1, 2, 3, 4 as expected.

// let creates a new variable for each iteration, so closures capture the correct value.
// let → new closure per iteration, each callback gets its own i value

Answer - 0, 1, 2, 3, 4


// -----6. forEach 

const arr = [1, 2, 3, 4, 5];

arr.forEach(function (element) {
  console.log(element);
});

Answer - 1, 2, 3, 4, 5
// The forEach method is called on the arr array and a callback function is passed as an argument. 
// The callback function will be executed for each element in the array, with the element passed as an argument to the callback. 
// As a result, the output will be the elements of the array, 1, 2, 3, 4, and 5, printed on separate lines.


// ------7. evaluating function to boolean value | type of function

let x = 1;

if (function f() {}) {
  x += typeof f;
}

console.log(x);

// The if statement is evaluating the function f as a boolean value. In JavaScript, functions are truthy values, so the condition will evaluate to true and the code block inside the if statement will be executed. 
// The value of x is then incremented by the string "undefined", which is the result of calling typeof f.

Answer - 1undefined


// -----8. objects are passed as reference ----

let a = {
  x: 1,
  y: 2,
};
let b = a;
a.x = 5;
console.log(a);
console.log(b);

// JavaScript objects are passed by reference. So when we assigned a object to b. b also pointing to the same object in memory. When we change the value of a.x it also affects b.x

Answer - {x:5, y:2} {x:5, y:2}

// ----9.  loose and strict comparison in objects 

let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;

console.log(x == y);
console.log(x === y);
console.log(z == y);
console.log(z == x);

Answer - 
false
false
true
false

// When comparing two objects with the == operator, it compares their references, not their values. 
// In this case, x and y are different objects with the same values. z is assigned the value of y, so they refer to the same object. 
// As a result, the first comparison returns false, the second comparison also returns false and the third comparison returns true. and the last comparison also returns false.


// ----10 callback functions modifying global variables and using them inside them.

var x = 0;
for (let i = 0; i < 5; i++) {
  setTimeout(() => {
    x++;
    console.log(x);
  }, 1000);
}

The for loop is iterating 5 times, and in each iteration, it is scheduling a function to be invoked after 1000 milliseconds (1 second) using setTimeout. This function increments the value of x and logs it.

But all the 5 functions invoked after 1000 milliseconds.

Since, javascript is single threaded and event loop queue all the functions in the event loop and execute them one by one.

But inside each setTimeout callback execution, x++ increments x value by 1.

It makes difference when position of x++ code changes wrt the setTimout callback.

So all the 5 callbacks logs the values in incremental way, which is 1 2 3 4 5.

answer: 
1
2
3
4
5

// No, in this code, closure is not formed for x for each iteration.
// x is a single variable declared outside the loop (var x = 0;), so all callbacks share the same x variable.

// What happens:

// Each setTimeout callback closes over its own i (because let i is block-scoped), but all callbacks share the same x.
// When each callback runs, it increments the same x variable.
// Each callback sees the updated value of x after the previous callback increments it.

// Summary:

// Closure is formed for i (each callback gets its own i value).
// No closure is formed for x (all callbacks share the same x).

// ---------- 11. global vs local variables

let num = 0;

function test() {
  var num = 1;
  return num;
}

console.log(test());
console.log(num);

// The code defines a global variable num with the value of 0 and then a function test which declares a local variable num with the value of 1 and returns it.

// When test() is called, it first declares a local variable num with the value of 1.
// Then the function return statement logs 1 on the console.

// After that, it logs the value of global variable num which is 0.

// Because the global and local variables have different scope and different memory allocation.

Answer: 
1 
0


// --------  12. default parameters
 
const add = (a = 1, b = 2) => a + b;
console.log(add());
console.log(add(5));
console.log(add(undefined, 10));

answer:
3
7
11

// ------ 13. es6 object literals to create objects --

const name = "John";
const age = 25;

const user = { name, age };
console.log(user);

answer
{ name: "John", age: 25 }

//---14. 

const arr = [1, 2, 3];
const [a, b, c] = arr;

console.log(a);
console.log(b);
console.log(c);

1
2
3

// Then, it uses destructuring assignment to extract the values from the array arr and assign them to variables a, b, and c respectively.

// ----14. 

console.log(typeof null);
console.log(typeof undefined);
console.log(null === undefined);
console.log(null == undefined);

// typeof null returns object which is an error in JavaScript. This is a historical bug in the language that cannot be fixed without breaking existing code. So, to check for null, you should use === null instead of typeof operator.

// typeof undefined returns undefined.

// null === undefined is false because null and undefined are two distinct types in JavaScript.

// null == undefined is true because == is the loose equality operator in JavaScript, which performs type coercion before comparison. In this case, both null and undefined are coerced to undefined before comparison, and since they both have the same value, the comparison returns true. However, it is generally recommended to use === instead of == to avoid unexpected behavior due to type coercion.

object
undefined
false
true

// --------15. 

let x = 5;
{
  let x = 10;
  console.log(x);
}
console.log(x);

10
5

// --- 16.

const obj = { a: 1, b: 2, c: 3 };
const { a, b } = obj;
console.log(a, b);

This is because of the object destructuring syntax introduced in ES6.

We declare a constant variable obj with an object containing three properties. Then we use object destructuring to extract the properties a and b from the object and assign them to separate variables with the same names.

The console.log() statement then prints the values of the a and b variables, which are 1 and 2 respectively.


1 2


// ----17.


const x = 10;

function foo() {
  console.log(x);
  const x = 20;
}

foo();

// The foo function attempts to log the value of x before it is initialized. This causes a ReferenceError to be thrown, as x is not yet defined in the function scope.

// This happens because of variable hoisting in JavaScript. When a variable is declared with const or let, it is not hoisted to the top of the scope like variables declared with var are. Instead, they are only accessible after they are declared.

// Therefore, when console.log(x) is called in the foo function, the local variable x has not yet been initialized, resulting in a ReferenceError.



ReferenceError: Cannot access 'x' before initialization

// -------18.

const a = [1, 2, 3];
const b = a;

b.push(4);

console.log(a);
console.log(b);


// The code creates an array a with the values [1, 2, 3]. It then creates a new variable b and assigns it to a, creating a reference to the same array.

// b.push(4) adds the value 4 to the end of the array.

// Since a and b reference the same array, both console.log(a) and console.log(b) will print [1, 2, 3, 4].

[1, 2, 3, 4]
[1, 2, 3, 4]

// --------19.

const companies = [
  { id: "1", name: "Facebook" },
  { id: "2", name: "Apple" },
  { id: "3", name: "Google" },
];

companies.sort((a, b) => (a.name > b.name ? -1 : 1));
console.log(companies);

// The comparison function takes two parameters, "a" and "b", which represent two elements being compared in the array.

// If the "name" property of "a" comes before the "name" property of "b" in alphabetical order, then the function returns -1, which means "a" should come before "b" in the sorted array.

// Otherwise, if the "name" property of "a" comes after the "name" property of "b" in alphabetical order, then the function returns 1, which means "b" should come before "a" in the sorted array.



[
  { id: '3', name: 'Google' },
  { id: '1', name: 'Facebook' },
  { id: '2', name: 'Apple' }
]

// ------20.

console.log(typeof 42);
console.log(typeof "Hello");
console.log(typeof true);
console.log(typeof [1, 2, 3]);
console.log(typeof { name: "John", age: 25 });
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof function () {});


number
string
boolean
object
object
object
undefined
function


// ------21.


function calculateSum() {
  console.log(result);
  var num1 = 5;
  let num2 = 10;
  const num3 = 15;
  var result = num1 + num2 + num3;
}

calculateSum();


// In the code, the variable result is declared using the var keyword, but it is assigned a value after the console.log statement.

// When JavaScript executes the function calculateSum(), it hoists the variable declaration of result to the top of the function scope. However, since the assignment of the value num1 + num2 + num3 comes after the console.log statement, the variable is undefined at the point of the console.log.

answer: undefined


// --------- 22. 

let x = 10;

function updateX() {
  if (true) {
    let x = 20;
    console.log(x);
  }
  console.log(x);
}

updateX();

20
10

// --------- 23.
const person = {
  name: "John",
  age: 30,
};

Object.freeze(person);
person.age = 40;

console.log(person.age);

// In this code, the Object.freeze() method is used to make

// the person object immutable. This means that the properties of the object cannot be modified.

// When attempting to assign a new value to person.age after freezing the object, it does not throw an error or modify the object. Instead, it silently fails in non-strict mode and throws a TypeError in strict mode.

// Since the code is not running in strict mode, the assignment person.age = 40 does not have any effect. Therefore, when console.log(person.age) is executed, it will output the original value of 30.

// Hence, the output will be 30.


30


// -----24 

function foo() {
  let x = 1;

  function bar() {
    let y = 2;
    console.log(x + y);
  }

  bar();
}

foo();

// Since x is accessible within the bar function due to lexical scoping, the value of x is 1. Similarly, the value of y is 2. Therefore, the output of console.log(x + y) will be 3.
3


// --25 hoisting without assignment 

let x = 10;

function outer() {
  console.log(x);

  if (false) {
    var x = 20;
  }
}

outer();

// In this code snippet, there's a variable hoisting issue with the var declaration inside the outer function. The variable x is declared using var within the outer function scope.

// When the function outer() is called, the console.log(x) statement is executed. At this point, the variable x is hoisted to the top of the function scope and is initialized with undefined. 
// This means that the local variable x inside the function is different from the global x.

// The if (false) block will not be executed, so the assignment var x = 20; will not take place.

// Thus, the console.log(x) statement inside the outer function will log the value of the locally hoisted variable x, which is undefined.

// Hence, the correct answer is C: undefined.

// ----26 nested destructuring 

const obj = {
  a: 1,
  b: 2,
  c: {
    a: 3,
    b: 4,
  },
};

const {
  a,
  b,
  c: { a: nestedA },
} = obj;

console.log(a, b, nestedA);


1 2 3


// --------- 27

function* generatorFunction() {
  yield 1;
  yield 2;
  return 3;
}

const generator = generatorFunction();

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());

// This code snippet demonstrates the use of a generator function. When a generator function is called, it returns an iterator object, which can be used to control the execution of the generator function.

// The generatorFunction is a generator function that yields three values: 1, 2, and 3. The yield keyword pauses the execution and returns the yielded value. When the generator is finished, it returns the value using the return statement.

// When the generator is executed step by step using generator.next(), it proceeds through the generator function's code, stopping at each yield statement.

// The first call to generator.next() will return { value: 1, done: false }, indicating that the first value yielded is 1, and the generator is not yet done.
// The second call to generator.next() will return { value: 2, done: false }, indicating that the second value yielded is 2, and the generator is not yet done.
// The third call to generator.next() will return { value: 3, done: true }, indicating that the third value yielded is 3, and the generator is done (done is true).
// After the generator is done, any further calls to generator.next() will keep returning { value: undefined, done: true }.

// Hence, the correct answer is A: { value: 1, done: false }, { value: 2, done: false }, { value: 3, done: true }.

// -------- 28

const fruits = ["banana", "apple", "orange", "grape", "kiwi"];

// Task 1: Sort the array of fruits in alphabetical order (default behavior)
// Task 2: Sort the array of fruits in descending alphabetical order
// Task 3: Sort the array of fruits based on the length of the fruit names in ascending order
// Task 4: Sort the array of fruits in ascending order by the second character of each fruit name

// Task 1: Sort in alphabetical order (default behavior)
const alphabeticalOrder = [...fruits].sort();
console.log(alphabeticalOrder); // Output: ['apple', 'banana', 'grape', 'kiwi', 'orange']

// Task 2: Sort in descending alphabetical order
const descendingOrder = [...fruits].sort((a, b) => b.localeCompare(a));
console.log(descendingOrder); // Output: ['orange', 'kiwi', 'grape', 'banana', 'apple']

// Task 3: Sort based on the length of the fruit names in ascending order
const sortByLength = [...fruits].sort((a, b) => a.length - b.length);
console.log(sortByLength); // Output: ['kiwi', 'apple', 'grape', 'banana', 'orange']

// Task 4: Sort in ascending order by the second character of each fruit name
const sortBySecondChar = [...fruits].sort((a, b) => a[1].localeCompare(b[1]));
console.log(sortBySecondChar); // Output: ['banana', 'kiwi', 'apple', 'orange', 'grape']








