// ------------ 1. palindrome or not javascript


// const isPalindrome = (inputStr) => {
//     // console.log(inputStr[0], inputStr[inputStr.length - 1])

//     for (let i in inputStr ){
//         if (inputStr[i] !== inputStr[inputStr.length - 1-i]){
//             return false
//             break
//         }
//     }
//     return true 
// }

// console.log(isPalindrome('nitin'))
// console.log(isPalindrome('palindrome'))
// console.log(isPalindrome('hello'))

// //  observation
// //  1. in js -1 index wont work for accessing last charecter 
// //  let i in  loop gives index 
// //  let i off loop gives charecter 

// //  ----- with while loop  ----------
// // The while loop is clearer and avoids issues with for...in (which is not recommended for strings).

// const isPalindrome = (str) => {
//     let left = 0, right = str.length - 1;
//     while (left < right) {
//         if (str[left] !== str[right]) return false;
//         left++;
//         right--;
//     }
//     return true;
// }

// --------- nagarro ---------------
// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
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

// let modified_object  =


// for (let key in nested){
//     console.log(key.value())
//     // let key_values ={}
//     // for (let key_name in key){
//     //     console.log(key_name)
//     //     // key_values[`${key}-${key_name}] = key[key_name]
//     // }
    
    
// }


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

// const obj = {
//   value: 100,
//   Func1: () => {
//     console.log("A:", this.value);
//   }
// };
 
// obj.Func1();


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



 