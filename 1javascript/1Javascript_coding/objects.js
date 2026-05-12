const obj = { name: 'vamsi', };

obj.age = 21; 
console.log(obj);  // { name: 'vamsi', age: 21 }

delete obj.age;
console.log(obj);  // { name: 'vamsi' }

// ------- in operator to check if a property is present in object ------

if ('name' in obj) {    // not if(name in obj) like in python

}else{

}

// ------ in operator checks indices not values in arrays, 
// The in operator returns true if the specified index exists in the array.


const fruits = ["apple", "banana"];
0 in fruits;       // true (index 0 exists)
"apple" in fruits; // false (it checks for the property name, not the value)

// Checks Prototype Properties: Because arrays are objects, in will also return true for built-in array properties.
"length" in fruits; // true   since fruits is array and length property will be always present in array object in js


// Sparse Arrays: It returns false for "empty" or deleted slots in a sparse array, even if accessing them directly returns undefined.

// alternatives to check if a value  is present in the array or not as in doesn't do it
// If your goal is to check if a specific value exists in an array, you should use the following methods instead of the in operator:

/* 
Array.prototype.includes(): Best for checking if a value exists. Returns a boolean.
fruits.includes("apple"); // true
Array.prototype.indexOf(): Returns the index of the first occurrence, or -1 if not found.
Array.prototype.find(): Best for complex conditions or finding objects within an array. 
 */

/* 
In JavaScript, a sparse array contains "holes" (empty slots) where no value or index has been defined. When you use Object.prototype.hasOwnProperty() on these holes, it returns false because the index doesn't actually exist as a property on the array object, even though direct access returns undefined. 

// 1. Create a sparse array with a "hole" at index 1
const sparseArray = ["apple", , "cherry"]; 

// 2. Accessing the hole directly returns undefined
console.log(sparseArray[1]); 
// Output: undefined

// 3. hasOwnProperty returns false for the hole because the property is missing
console.log(sparseArray.hasOwnProperty(1)); 
// Output: false

// 4. Contrast this with an index that was explicitly set to undefined
const denseArray = ["apple", undefined, "cherry"];
console.log(denseArray.hasOwnProperty(1)); 
// Output: true

Key Differences
Direct Access: Accessing a missing index in a sparse array behaves like accessing a missing property on an object; it defaults to undefined. 

hasOwnProperty(): This method specifically checks if the property (index) exists on the object itself. In a sparse array, the hole is a missing property, not a property with a value of undefined. 

Creation Methods: Sparse arrays can be created using array literals with extra commas (e.g., [,]), setting a high index (e.g., arr[10] = "x"), or manually increasing the .length property. 

delete Operator: Using delete on an existing array index removes the property and turns that slot into a hole, causing hasOwnProperty() to subsequently return false for that index.

*/


// ========1. flatten the nested object ========== 
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
 
// {
//   "user.name": "Ankur",
//   "user.address.city": "Bangalore",
//   "user.address.pin": 560001,
//   "active": true
// }

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