

// for (initialization; **condition**; final-expression)
// for (let i= input_str.length-1; i>=0; i--)

// input_str = 'skeeGroFskeeG'
// input_str.split("") 
// [
//   's', 'k', 'e', 'e',
//   'G', 'r', 'o', 'F',
//   's', 'k', 'e', 'e',
//   'G'
// ]

//  reverse, join directly wont work on strings, it works on arrays only

// str.repeat => console.log('gfg'.repeat(3)); // gfggfggfg

// indexOf: string.indexOf(searchValue, startIndex)

// charAt : capitalise first letter of word in sentense
        // words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);

// toUpperCase, toLowerCase

// =========== 1. reverse a string ============

input_str = 'skeeGroFskeeG'
reversed_str = ''

for (let i= input_str.length-1; i>=0; i--){  // for (initialization; **condition**; final-expression)
    reversed_str+=input_str[i]
}

console.log(reversed_str) // GeeksForGeeks

// -----using inbuilt methods converting to array and joining ---

splitted_arr = input_str.split('')
reversed_arr = splitted_arr.reverse()
reversed_str = reversed_arr.join('')

reversed_str2 = input_str.split("").reverse().join("");

console.log(reversed_str, reversed_str2) // GeeksForGeeks GeeksForGeeks



// ==========  2. pgm to check if a string is palindrom or not ============

// ------ using for loop with variable -------

const checkPalindromString = (input_str2) =>{

    for(let i=0; i<input_str2.length-1; i++){                           
        if (input_str2[i] !== input_str2[input_str2.length -1-i]){
            return false
        }
    }
    return true
}
// ------ for loop with "in" and getting direct indexes -----

const checkPalindromString = (inputStr) => {
    for (let i in inputStr ){
        if (inputStr[i] !== inputStr[inputStr.length - 1-i]){
            return false
            break
        }
    }
    return true 
}
// ------- using while loop -------

const checkPalindromString = (input_str2) =>{

    let left = 0, right= input_str2.length-1 

    while (left<right){
        if(input_str2[left] !== input_str2[right]) return false 
        right--
        left++
    }
    return true
}

console.log(checkPalindromString('nitin'))
console.log(checkPalindromString('ram'))
console.log(checkPalindromString('sahas'))


// ------- using inbuilt methods --------

reversed_str2 = input_str2.split('').reverse().join('')
console.log(input_str2===reversed_str2)                             //true

console.log(input_str2===input_str2.split('').reverse().join(''))   //true


// ===== 3. coercion ===========


console.log(1 + '2', typeof(1 + '2'));  // 12 string
console.log('1' + 2, typeof(1 + '2'));  // 12 string

// in js whenever number and string are combined with '+' operator, number is converted to string and joined to other string. 

console.log('6' - 1, typeof('6' - 1));   // 5 number
console.log( 6-'1', typeof(6-'1'))        // 5 number

// whenever '-' operator used with string and number string is converted to number and subtraction is performed


console.log(1 == '1');  // true
console.log(1 === '1');  // false

console.log(null == undefined); // true 
console.log(null === undefined); // false



// =========== freq of charecters in a string ========

function countChar(str,char){           // wont work for char='Geek'
    let count = 0 
    for(let val of str){
        if(val ===char){
            count++
        }
    }
    return count
}

function countChar(str,char){
    return str.split(char).length-1
}


console.log(countChar('GeeksForGeeks', 'e'));    // 4
console.log(countChar('GeeksForGeeks', 'Geek')); // 2


// ========= check if a string contains another string ============

function containsSubstring(str, substring) {
return str.indexOf(substring) !== -1;               // string.indexOf(searchValue, startIndex)
}

console.log(containsSubstring('GeeksForGeeks', 'For'));  //true 


// ======== find the first non repeated charecter in string =========
function fun(str) {
    const charCount = {};

    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    for (let char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }

    return null;
}

console.log(fun('GeeksForGeeks'));   // F


// ============= capitalise first letter of each word in sentence ============

function capitalizeFirstLetter(sentence) {
    const words = sentence.split(' ');
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join(' ');
}

console.log(capitalizeFirstLetter('hello geeks'));


// ====== check if two string are anagrams ==========

function areAnagrams(str1, str2) {
    if (str1.length !== str2.length) {
        return false; 
    }

    let count1 = {};
    let count2 = {};

    for (let i = 0; i < str1.length; i++) {
        let char = str1[i];
        count1[char] = (count1[char] || 0) + 1;
    }

    for (let i = 0; i < str2.length; i++) {
        let char = str2[i];
        count2[char] = (count2[char] || 0) + 1;
    }

    for (let char in count1) {
        if (count1[char] !== count2[char]) {
            return false; 
        }
    }

    return true; 
}
console.log(areAnagrams("listen", "silent")); //true


// ========  get unique charecters from the string +=========
function uniqueCharacters(str){
    let uniqueCharecters = [] 

    for(let val of str){
        if(!uniqueCharecters.includes(val)){
            uniqueCharecters.push(val)
        }
    }
    return uniqueCharecters.join('')
}
console.log(uniqueCharacters("geeksforgeeks")); // geksfor














