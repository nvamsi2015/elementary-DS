// ------------ 1. palindrome or not javascript


const isPalindrome = (inputStr) => {
    // console.log(inputStr[0], inputStr[inputStr.length - 1])

    for (let i in inputStr ){
        if (inputStr[i] !== inputStr[inputStr.length - 1-i]){
            return false
            break
        }
    }
    return true 
}

console.log(isPalindrome('nitin'))
console.log(isPalindrome('palindrome'))
console.log(isPalindrome('hello'))

//  observation
//  1. in js -1 index wont work for accessing last charecter 
//  let i in  loop gives index 
//  let i of loop gives charecter 

// //  ----- with while loop  ----------
// // The while loop is clearer and avoids issues with for...in (which is not recommended for strings).

const isPalindrome = (str) => {
    let left = 0, right = str.length - 1;
    while (left < right) {
        if (str[left] !== str[right]) return false;
        left++;
        right--;
    }
    return true;
}


// --------- nagarro ---------------

const nested = {
  user: {
	name: "Ankur",
	address: {
  	city: "Bangalore",
  	pin: 560001
	}
  },
  active: true
};
 
{
  "user.name": "Ankur",
  "user.address.city": "Bangalore",
  "user.address.pin": 560001,
  "active": true
}

const flatenObject = (inputObj) =>{
    const temp = Object.keys(inputObj)
    for (let key of temp){
    if ( typeof (inputObj[key]) === 'object' && !Array.isArray(inputObj[key]) && inputObj[key] != null ){
        flatenObject(inputObj[key])
    }
    else{
        modified_object[`${key}`] = inputObj[key]
    }
}
}

let modified_object = {}
flatenObject(nested)
console.log(modified_object)

let modified_object  =


for (let key in nested){
    console.log(key.value())
    // let key_values ={}
    // for (let key_name in key){
    //     console.log(key_name)
    //     // key_values[`${key}-${key_name}] = key[key_name]
    // }
    
    
}

const flattenObject = (obj) => Object.assign({}, ...(function flattenObj(o) { return [].concat(...Object.keys(o).map(k => typeof o[k] === 'object' ? flattenObj({ [k]: o[k] }) : { [k]: o[k] }))})(obj));

const o = { a: 1, b: { c: 2, d: { e: 3 } } };
const r = flattenObject(o);
// r: { a: 1, 'b.c': 2, 'b.d.e': 3 }

// console.log(" Start");
// Promise.resolve().then(() => console.log(" Promise.then"));
// process.nextTick(() => console.log(" process.nextTick"));
// setImmediate(() => console.log(" setImmediate"));
// setTimeout(() => console.log(" setTimeout(0)"), 0);
// console.log(" End");


// start
// end
// setTimeout(0)
// process.nextTick
// Promise.then
// setImmediate


// for (var i = 1; i <= 3; i++) {
//   setTimeout(() => {
// 	console.log("hii:", i);
//   }, i * 1000);
// }

// hii 1000
// hii 2000
// hii 3000

const obj = {
  value: 100,
  Func1: () => {
    console.log("A:", this.value);
  }
};
 
obj.Func1();


// const nums = [2, 5, 8, 11, 4, 9, 3];
// // Square each number.
// // Keep only even squares.
// // Find the sum of those even squares.

// let squared_sums = nums.map((each) => each*each)
// let result = squared_sums.filter((each)=> each%2 == 0).reduce((each,acc)=> {
//     acc = acc+each
//     return acc
// }
// ,0)
// console.log(result)



//   ------------- pandora ----------
//  1. vowels in a given string
// 2. sencond largest and second smallest elements in the list 


// --------- purpule talk -------------
differnece between rest api and sop
how do we perform joins in mongodb
how to we do indexing in mongodb

what are diff types of join and what is inner join
why typescrip why not continue using JSON

what is this, how it takes values in differenct places 

difference between class and functional components
how will we achive life cycle methods in functional components
what is the diff bw useCallback and useMemo 
difference between package.json and packagelock.json



console.log(1)
setTimeout({
        console.log(2)
}, 0)
console.log(3)

----------------------------------

a()
function a(){
    console.log("a")
}

b();
var b = function b(){
    console.log("b")
}

Kavitha Kamineni
1:15 PM
-----------------------------------

const carDetails = {
  name: "Tomer",
    getName() {
      return this.name;
}
}
var name = "Joe";
var getCarName = carDetails.getName;
console.log(getCarName());              // my answer is Tomer, but correct ans is Joe

// ---------- explanation--------
undefined in Node.js, In Node.js, global variables declared with var are not attached to the global object, so this.name is undefined.
Joe in browsers, Since var name = "Joe"; sets a global variable name, this.name returns "Joe".


Explanation:

// getCarName is assigned the method carDetails.getName, but not bound to carDetails.
// When you call getCarName(), this refers to the global object (window in browsers, global in Node.js).
// Since var name = "Joe"; sets a global variable name, this.name returns "Joe".
// To fix and get "Tomer" as output, bind the method:

// console.log(carDetails.getName()); // "Tomer"
// console.log(getCarName.call(carDetails)); // "Tomer"

// Summary:
// When a method is called without its object, this does not refer to the object anymore.

// ============ innovaptive ========= 

function sum(a,b){
  var x= 10 
  return a+b
}

console.log(x)

//  ReferenceError: x is not defined in node .js
//  Uncaught ReferenceError: x is not defined in browser

how can you improve the api performace 

destruction nested object same problem everyone is asking 

given array and Number, find indexes of pair of number whose sum in given number 

// ========= mediamint======

what is uvicorm, what is fastapi 

how do you use types in fastapi 

how do you declare a client component in next.js 

what are dynamic routes in next.js 

what is wsgi 

what is the comparision for the django and flask and fastapi 

what are web apis 



