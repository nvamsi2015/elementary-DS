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













































