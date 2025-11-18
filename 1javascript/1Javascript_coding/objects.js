const obj = { name: 'vamsi', };

obj.age = 21; 
console.log(obj);  // { name: 'vamsi', age: 21 }

delete obj.age;
console.log(obj);  // { name: 'vamsi', age: 21 }

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