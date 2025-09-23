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
//  let i off loop gives charecter 

//  ----- with while loop  ----------
// The while loop is clearer and avoids issues with for...in (which is not recommended for strings).

const isPalindrome = (str) => {
    let left = 0, right = str.length - 1;
    while (left < right) {
        if (str[left] !== str[right]) return false;
        left++;
        right--;
    }
    return true;
}

// ---------2. 