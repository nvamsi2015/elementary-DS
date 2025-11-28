// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from

// "A".charCodeAt(0)      //65

// String.fromCharCode(x)

// let char1 = String.fromCharCode(65);
// console.log(char1);
// Output: A



// const range = (start, stop, step) =>
//   Array.from(
//     { length: Math.ceil((stop - start) / step) },
//     (_, i) => start + i * step,
//   );

// const range = (start, stop, step ) => {
//   const length = Math.ceil((stop - start) / step);
//   return Array.from({length}, (_,i) => start+i*step, )
// }
//   let x = range(1,5,1)
// console.log(x)


// function f() {  
//   return Array.from(arguments);
// }

// console.log(f(1, 2, 3)); // [ 1, 2, 3 ]
// This behavior in JavaScript is due to the presence of an automatic local variable called arguments inside every function body (except for arrow functions).

// The Map object is a collection of key-value pairs that allows you to store data and retrieve it efficiently using keys. 
// Map()
    const myMap = new Map([
    [1, "one"],
    [2, "two"],
    [3, "three"],
    ]);

    console.log(myMap)  // Map(3) { 1 => 'one', 2 => 'two', 3 => 'three' }

// Map.groupBy(items, callbackFn)

    const inventory = [
        { name: "asparagus", type: "vegetables", quantity: 9 },
        { name: "bananas", type: "fruit", quantity: 5 },
        { name: "goat", type: "meat", quantity: 23 },
        { name: "cherries", type: "fruit", quantity: 12 },
        { name: "fish", type: "meat", quantity: 22 },
    ];

    const restock = { restock: true };
    const sufficient = { restock: false };
    const result = Map.groupBy(inventory, ({ quantity }) => quantity < 6 ? restock : sufficient, );

    console.log(result) 
    Map(2) {
                { restock: false } => [
                    { name: 'asparagus', type: 'vegetables', quantity: 9 },
                    { name: 'goat', type: 'meat', quantity: 23 },
                    { name: 'cherries', type: 'fruit', quantity: 12 },
                    { name: 'fish', type: 'meat', quantity: 22 }
                ],
                { restock: true } => [ { name: 'bananas', type: 'fruit', quantity: 5 } ]
            }

    
    console.log(result.get(restock));
    // [{ name: "bananas", type: "fruit", quantity: 5 }]

    console.log(result.get(sufficient));
    // [
    //   { name: 'asparagus', type: 'vegetables', quantity: 9 },
    //   { name: 'goat', type: 'meat', quantity: 23 },
    //   { name: 'cherries', type: 'fruit', quantity: 12 },
    //   { name: 'fish', type: 'meat', quantity: 22 }
    // ]

    Map.groupBy() with an arrow function that returns the object keys named restock or sufficient, depending on whether the element has quantity < 6. 
    The returned result object is a Map so we need to call get() with the key to obtain the array.

    The key to a Map can be modified and still used. However you can't recreate the key and still use it. 
    For this reason it is important that anything that needs to use the map keeps a reference to its keys.

    // The key can be modified and still used
    restock["fast"] = true;
    console.log(result.get(restock));
    // [{ name: "bananas", type: "fruit", quantity: 5 }]

    // A new key can't be used, even if it has the same structure!
    const restock2 = { restock: true };
    console.log(result.get(restock2)); // undefined

    

// ========== 1. print n fibonacci numbers===============

function printNfibonaccinumbers(n){
    let num1=0, num2=1, nextNum 
    for(let i=1; i<=n; i++ ){
        console.log(num1)
        nextNum = num1+num2 
        num1= num2 
        num2 = nextNum
    }
}

printNfibonaccinumbers(7);

// 0  F(0)
// 1
// 1
// 2
// 3
// 5
// 8  F(6)

// ========= 2. print nth fibonacci number ============


function Nthfibonaccinumber(n){
    if(n==0 || n==1) return n 
    return Nthfibonaccinumber(n-1) + Nthfibonaccinumber(n-2)
}

console.log(Nthfibonaccinumber(7))  // 13

function Nthfibonaccinumber(n){
    if(n==0 || n==1) return n 

    let fib = [0,1]
    for(i=2;i<=n;i++) fib[i] = fib[i-1]+fib[i-2]
    return fib[n]

}

console.log(Nthfibonaccinumber(7)) // 13


// F(0) = 0
// F(1) = 1
// F(2) = F(1) + F(0) = 1 + 0 = 1
// F(3) = F(2) + F(1) = 1 + 1 = 2
// F(4) = F(3) + F(2) = 2 + 1 = 3
// F(5) = F(4) + F(3) = 3 + 2 = 5
// F(6) = F(5) + F(4) = 5 + 3 = 8
// F(7) = F(6) + F(5) = 8 + 5 = 13


// ===========3. factorial of a number ==========

function factorial(n){
    if(n==0 || n==1 ) return n 
    return n*factorial(n-1)
}


console.log(factorial(7)); //5040


function factorial(n){
    let answer = 1 
    for (let i=2; i<=n ; i++) answer *=i 
    return answer
}
 
console.log(factorial(7));  // 5040

// ==========  print n fibonacci numbers===============

function printNfibonaccinumbers(n){
    let num1=0, num2=1, nextNum 
    for(let i=1; i<=n; i++ ){
        console.log(num1)
        nextNum = num1+num2 
        num1= num2 
        num2 = nextNum
    }
}

printNfibonaccinumbers(7);

// 0  F(0)
// 1
// 1
// 2
// 3
// 5
// 8  F(6)

// ========= print nth fibonacci number ============


function Nthfibonaccinumber(n){
    if(n==0 || n==1) return n 
    return Nthfibonaccinumber(n-1) + Nthfibonaccinumber(n-2)
}

console.log(Nthfibonaccinumber(7))  // 13

function Nthfibonaccinumber(n){
    if(n==0 || n==1) return n 

    let fib = [0,1]
    for(i=2;i<=n;i++) fib[i] = fib[i-1]+fib[i-2]
    return fib[n]

}

console.log(Nthfibonaccinumber(7)) // 13


// F(0) = 0
// F(1) = 1
// F(2) = F(1) + F(0) = 1 + 0 = 1
// F(3) = F(2) + F(1) = 1 + 1 = 2
// F(4) = F(3) + F(2) = 2 + 1 = 3
// F(5) = F(4) + F(3) = 3 + 2 = 5
// F(6) = F(5) + F(4) = 5 + 3 = 8
// F(7) = F(6) + F(5) = 8 + 5 = 13


// =========== factorial of a number ==========

function factorial(n){
    if(n==0 || n==1 ) return n 
    return n*factorial(n-1)
}


console.log(factorial(7)); //5040


function factorial(n){
    let answer = 1 
    for (let i=2; i<=n ; i++) answer *=i 
    return answer
}
 
console.log(factorial(7));  // 5040


// ========= 4. degreecelcius to farenheit conversions ==========

// Fahrenheit=(Celsius×9/5)+32
// Celsius=(Farhrenheit-32)*5/9

function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;

}

console.log(celsiusToFahrenheit(20)); // 68     => degrees celcius to farenheit number increses => multiply by 9/5 which grather than 1 (or 1.8) and add 32
console.log(celsiusToFahrenheit(33)); // 91.4

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

console.log(fahrenheitToCelsius(102)); // 38.88  => farenheit to decrees +> number decreases decrease by 32 and then divide by 5/9 which is less than 1













































