What is Builder design pattern?
Builder design pattern which is part of the creational design pattern family is used for the step-by-step creation of the objects.

In object-oriented programming, when a new object is created from the constructor, you can either pass all the arguments or no arguments to the constructor.

// ----------------
class Payment{
 constructor(currency, amount) {
   this.currency = currency;
   this.amount = amount;
 }
}

const a = new Payment();
const b = new Payment('₹', 1000);

// While this suffices for many cases, oftentimes we want to build the object once it is created. In that case, we can make use of the builder design pattern.

// Implement Builder design pattern in JavaScript
// Builder design pattern helps to create the objects with only required values, for this, we can create a no-args constructor and then build the object step-by-step and then get the final result from it.


// For example, let’s say you have a payment object, before making the final payment, we want to continuously add the amount. In that case, we can do the method chaining (alternative name for Builder design pattern) where we return the reference of the current object from the methods so that the methods of the same object can be used as required.

// ---------------
class Payment {
 constructor(currency = '₹', amount = 0) {
   this.currency = currency;
   this.amount = amount;
 }

 addAmount = function(val){
   this.amount += val;

   // returning the reference of the same object
   return this;
 }

 pay = function(){
   console.log(`${this.currency} ${this.amount}`);
 }
}

const p1 = new Payment();

p1.addAmount(100).addAmount(200).addAmount(200).pay();
// "₹ 500"

// There should be a method for the object to terminate the chaining and return the result like we have the pay() as all the other methods are returning the reference of the object.

// As the Builder design pattern helps to build the object step-by-step, we can create different versions of output of the same object without creating a new constructor every time, for example, I can do the payment in Rupees, Dollars, or Euros using the same object instance.

// ---------------
class Payment {
 constructor(currency = '₹', amount = 0) {
   this.currency = currency;
   this.amount = amount;
 }

 addAmount = function(val){
   this.amount += val;
   return this;
 }

 addCurrency = function(currency){
   this.currency = currency;
   return this;
 }

 pay = function(){
   console.log(`${this.currency} ${this.amount}`);
 }
}

const p1 = new Payment();

p1.addAmount(100).addAmount(200).addAmount(200).pay();
//"₹ 500"

p1.addAmount(200).addCurrency('$').pay();
//"$ 700"


// We can have a reset method here to reset the amount. You can have as many methods as possible and share the object instances to build things.

// In JavaScript, we don’t have to define Class to create objects, we can create them directly and use the builder pattern on it.

// -----------------------
const p1 = {
 currency: '₹',
 amount: 0,
 addAmount: function(val){
   this.amount += val;
   return this;
 },
 addCurrency: function(currency){
   this.currency = currency;
   return this;
 },
 pay: function(){
   console.log(`${this.currency} ${this.amount}`);
 }
};

p1.addAmount(100).addAmount(200).addAmount(200).pay();
// "₹ 500"

p1.addAmount(200).addCurrency('$').pay();
// "$ 700"

// Builder design pattern is best suited when you have to create a complex object on the run-time or have to create a composite tree like the DOM.

// Problems based on the Builder design pattern
// Method chaining in JavaScript – Part 2
// Method chaining in JavaScript