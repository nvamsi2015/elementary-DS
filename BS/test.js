// Remove All Adjacent Duplicates In String
// Input: "abbaca"
// Output: "ca"
// Explanation:
// In the first pass, "bb" is removed, resulting in "aaca".
// In the second pass, "aa" is removed, resulting in "ca".
// No adjacent duplicates are left, so the final result is "ca".


input1 = 'aabbccdd'



Input: "abbaca"

function removeAdjacentDuplicates(inputString){

    let tempChar = ''
    let count = 0
    resultString = ''

    for (char in inputString) {
        if(tempChar && char === tempChar){
            count +=1 
            if(count == 1){
                let i =  input1.indexOf(char)
                console.log(i)
            }
        }
        else{
            tempChar = char
            count = 1
        }
    }
}

const resultString = removeAdjacentDuplicates(input1)