
// reversed_str = input_str.split("").reverse().join(""); converting to array and getting revered array and joining

// index of array starts with 0 and ends at arr.length-1, out of bound access gives undefined.

// arr[], to access an element you can use bracket and index, negative indexing not supported with brackets
    // let arr1 = [5, 6, 7,8,9,10];
    // console.log(arr1[-1])            // undefined
    // console.log(arr1[arr1.length-1]) //10
    
    // console.log(arr1[1:4])          // Unexpected token ':', js does not support python style list slicing with colon operator directly
    // console.log(arr1.slice(1, 4));  // [6,7,8] index 4 element wont be included, arr.slice(start,end) if end not given slices start to end of the array.

// at() Method: The at() method provides a more flexible way to access array elements, supporting both positive and negative indices. Negative indices count back from the end of the array. 
    // const colors = ["Red", "Green", "Blue"];
    // console.log(colors.at(0));  // Output: Red (first element)
    // console.log(colors.at(-1)); // Output: Blue (last element)
    // console.log(colors.at(-2)); // Output: Green (second to last element)

// intersection of two arrays using sets    
        // const set2 = new Set(arr2);
        // return arr1.filter(value => set2.has(value))


// forEach: array.forEach(function(currentValue, index, arr), thisValue);
    // arr1.forEach(num => sum2+=num)

// includes:  arr.includes(valueToSearch, fromIndex)
        // if (!uniqueArray.includes(arr[i])) {      // arr.includes(valueToSearch, fromIndex) returns t/f

// Array.from 
        // const chunkArray = (arr, size) => Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size));
        // console.log(chunkArray([1,5,9,4,8,6,12],3))
        // [ [ 1, 5, 9 ], [ 4, 8, 6 ], [ 12 ] ]

        // Generate a sequence of numbers Since the array is initialized with `undefined` on each position, the value of `v` below will be `undefined`
        Array.from({ length: 5 }, (v, i) => i);
        // [0, 1, 2, 3, 4]

// ========1. find the largest number in array ======== 

// ---- using for loop 
const findLargest= (num_array) =>{
    let largest = num_array[0]
    for(let num of num_array){            // for (let i = 1; i < arr.length; i++) {
        if (num>largest) largest = num    // if (arr[i] > largest) largest = num
    }
    return largest
}

// ----- using spread and Math.max()------
const findLargest= (num_array) =>{
    return Math.max(...num_array)
}


console.log(findLargest([99, 5, 3, 100, 1])); // 100


// ========== 2. remove first element from the array ==========

// ------- slice, unshift, shift ----------

let arr1 = [5, 6, 7];

arr2 = arr1.slice(1);           // slice(start,end) does not modify orignal array, but extracts a new array with given start and end indexes
console.log(arr2) // [6.7]


arr3 = arr1.unshift() 
console.log(arr3)      // // 3  ushift mutates original array and  is used to add elements at the beginning and will return length after new element is added syntax: array.unshift(element1, element2, ..., elementN)

arr4 = arr1.shift() 
console.log(arr4)     // 5    shift mutates original array, removes first element and returns the removed element,  useful when treating arrays as queues in FIFO

console.log(arr1)  // [6,7]

// ========= 3. sum of an array ===========

function sumArray(arr1){
    let sum = 0 
    for ( value of arr1) sum+=value    // for (let i = 0; i < arr.length; i++) sum += arr[i];
    return sum

    // let sum2 = 0                     // array.forEach(function(currentValue, index, arr), thisValue);
    // arr1.forEach(num => sum2+=num)  // the forEach method executes a provided function once for each array element.
    // return sum2
}


console.log(sumArray([15, 6, 10, 2])); // 33

// ======== 4. check if a number is prime or not ===========

function isPrime(n){
    if (n<=1) return false 

    for(let i=2; i<= Math.floor(n/2); i++) {
        if(n%i == 0) return false 
    }
    return true

}

console.log(isPrime(9));   // false
console.log(isPrime(7));   // true
console.log(isPrime(11));  // true
console.log(isPrime(17));  // true

// ======= 5. freq of numbers in array =======

function frequency(arr1){
    const freq = {}
    for (let val of arr1) {
        if(freq[val]) freq[val]+=1 
        else freq[val] = 1
    }
    return freq
}

console.log(frequency([1, 1, 2, 3, 3, 4]));

// { '1': 2, '2': 1, '3': 2, '4': 1 }


// ======== 5. sorting an array of number in inc and dec order ========= 

function sortArrayInc(arr){
    for(let i=0; i<arr.length; i++){        // i=0                                          i=1, j=(2,3)            i=2,j=3
        for(let j=i+1; j<arr.length; j++){  // j=(1,2,3) comparing i=0,j=1 (5,3)            i=1,j=2 (5>8) false     8>5 true
            if(arr[i] > arr[j]){            // (5>3) true                                   i=1,j=3 (5>3) true      arr = [1,3,5,8]
                let temp = arr[i]           //  arr = [3,5,8,1]                             arr = [1,3,8,5]
                arr[i] = arr[j]             // comparing i=0,j=2 (3>8) false
                arr[j] = temp               // comparing i=0, j=3 (3>1)  true  
            }                               // arr = [1,5,8,3]
        }
        // console.log(arr)                    
    }                                       // smallest number comes to left in each iteration

    return arr
    
}


console.log(sortArrayInc([5, 3, 8, 1]));


function sortArrayDec(arr){
    for (let i=0; i<arr.length; i++){
        for (let j=i+1; j<arr.length; j++){
            if(arr[i]<arr[j]){
                temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp 
            }
        }
    }
    return arr
}


console.log(sortArrayDec([5, 3, 8, 1]));

// =========== 5. sort arr of strings in lexographic order ===========



// ======= 6. union and intersection two arrays ===========

function arrayIntersection(arr1, arr2) 
{
  const set2 = new Set(arr2);  
  return arr1.filter(value => set2.has(value));
}

console.log(arrayIntersection([5, 6, 7], [6, 7,8 ]));  // [6,7]


function arrayUnion(arr1, arr2) {
    return [...new Set([...arr1, ...arr2])];
}

console.log(arrayUnion([1, 2, 3], [2, 3, 4])); //[1,2,3,4]





// ======== 7. reverse an array ============

function reverseArray(arr1){
    let left = 0, right= arr1.length-1
    while (left<=right){
        let temp = arr1[left]
        arr1[left] = arr1[right] 
        arr1[right] = temp 
        left++
        right--
    }
    return arr1
}

function reverseArray(arr1){        // extra memory and traversing from back
    const reverse_array = []
    for(let i= arr1.length-1; i>=0; i--){
        reverse_array.push(arr1[i])
    }
    return reverse_array
}


console.log(reverseArray([5, 6, 7, 8]));  // [ 8, 7, 6, 5 ]

console.log(reverseArray([5, 6, 7, 8]));  // [ 8, 7, 6, 5 ]

// ------- using inbuild methods ------
function reverseArray(arr1){
    const reverse_array = arr1.reverse()
    return reverse_array
}


console.log(reverseArray([5, 6, 7, 8]));  // [ 8, 7, 6, 5 ]

// ========= remove falsy values from array =======


function removeFalsyValues(arr) {
    const answer = []; 
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) {
            answer[answer.length] = arr[i];         // using answer.length as the index of the next element instead of push
        }
    }
    return answer;
}

console.log(removeFalsyValues([0, 5, false, 6, '', 7]));   // [ 5, 6, 7 ]


// ========= max difference between two numbers in array =========

function maxDifference(arr) {
    let min = arr[0]
    let maxDiff = 0;

    for (let i = 1; i < arr.length; i++) {
        const diff = arr[i] - min;
        maxDiff = Math.max(maxDiff, diff);
        min = Math.min(min, arr[i]);
    }
    return maxDiff;
}

console.log(maxDifference([1, 2, 90, 10, 110])); //109

// ============ remove duplicates from array =======

function removeDuplicates(arr) {
  const uniqueArray = [];
  for (let i = 0; i < arr.length; i++) {
      if (!uniqueArray.includes(arr[i])) {      // arr.includes(valueToSearch, fromIndex) returns t/f
          uniqueArray.push(arr[i]);
      }
  }
  return uniqueArray;
}

console.log(removeDuplicates([5, 2, 5, 6, 6, 7]));

// ======== count vowels in a string ========
function countVowels(str){
    const vowels = 'aeiouAEIOU'
    let count = 0
    
    for(let char of str){
        if (vowels.includes(char)) count+=1     // count++
    }

    return count
}
console.log(countVowels("hello geek")); // 4


// ============ js example for sorting with (a,b) => a-b and the conditions it follows 

// ========= example of when to use localCompare

// ======== creating array from Array.from()

// ======= charcodes 