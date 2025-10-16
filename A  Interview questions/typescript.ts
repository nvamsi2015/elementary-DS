// npm install -g typescript

// mkdir node-app
// cd node-app
// npm init -y
// npx tsc --init

// tsc -b



// This is the high level benefit of typescript. It lets you catch type errors at compile time

// Typescript compiler
// tsc is the official typescript compiler that you can use to convert Typescript code into Javascript
// There are many other famous compilers/transpilers for converting Typescript to Javascript. Some famous ones are - 
// esbuild
// swc

//  1. what are interfaces in typescript
// How can you assign types to objects? For example, a user object that looks like this - 
const user = {
	firstName: "harkirat",
	lastName: "singh",
	email: "email@gmail.com".
	age: 21,
}
//   ********** to assign a type to the user object, you can use interfaces

interface User {
	firstName: string;
	lastName: string;
	email: string;
	age: number;
}

// Assignment #1 - Create a function isLegal that returns true or false if a user is above 18. It takes a user as an input.
// Solution

interface User {
	firstName: string;
	lastName: string;
	email: string;
	age: number;
}

function isLegal(user: User) {
    if (user.age > 18) {
        return true
    } else {
        return false;
    }
}

// Assignment #2 - Create a React component that takes todos as an input and renders them

// Todo.tsx
interface TodoType {
  title: string;
  description: string;
  done: boolean;
}

interface TodoInput {
  todo: TodoType;
}

function Todo({ todo }: TodoInput) {
  return <div>
    <h1>{todo.title}</h1>
    <h2>{todo.description}</h2>
    
  </div>
}

//  interfaces have another special StylePropertyMap, you can implemtn interfaces as a class

interface Person {
    name: string;
    age: number;
    greet(phrase: string): void;
}

// You can create a class which implements this interface.

class Employee implements Person {
    name: string;
    age: number;

    constructor(n: string, a: number) {
        this.name = n;
        this.age = a;
    }

    greet(phrase: string) {
        console.log(`${phrase} ${this.name}`);
    }
}
// This is useful since now you can create multiple variants of a person (Manager, CEO …)

// Summary
// You can use interfaces to aggregate data
// You can use interfaces to implement classes from

// -------------- types --------------

// What are types?
// Very similar to interfaces , types let you aggregate data together.
type User = {
	firstName: string;
	lastName: string;
	age: number
}

// But they let you do a few other things. like unions and intersecions

// 1. Unions
// Let’s say you want to print the id of a user, which can be a number or a string.
// 💡  You can not do this using interfaces
type StringOrNumber = string | number;

function printId(id: StringOrNumber) {
  console.log(`ID: ${id}`);
}

printId(101); // ID: 101
printId("202"); // ID: 202

// 2. Intersection
// What if you want to create a type that has every property of multiple types/ interfaces
// 💡 You can not do this using interfaces

type Employee = {
  name: string;
  startDate: Date;
};

type Manager = {
  name: string;
  department: string;
};

type TeamLead = Employee & Manager;  // TeamLead now has properties of both Employee and Manager bc & present

const teamLead: TeamLead = {
  name: "harkirat",
  startDate: new Date(),
  department: "Software developer"
};

//  -------- arrays in TS -------------

// If you want to access arrays in typescript, it’s as simple as adding a [] annotation next to the type

// ex: Given an array of positive integers as input, return the maximum value in the array


function maxValue(arr: number[]) {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return max;
}

console.log(maxValue([1, 2, 3]));

// ex2: Given a list of users, filter out the users that are legal (greater than 18 years of age)

interface User {
	firstName: string;
	lastName: string;
	age: number;
}

// Solution

interface User {
	firstName: string;
	lastName: string;
	age: number;
}

function filteredUsers(users: User[]) {
    return users.filter(x => x.age >= 18);
}

console.log(filteredUsers([
  {
    firstName: "harkirat",
    lastName: "Singh",
    age: 21
  },
  {
    firstName: "Raman",
    lastName: "Singh",
    age: 16
  }, 
]

));

// ------------ Enuums in TS ---------
// Enums are a special type in typescript that let you define a set of named constants.

// Enums (short for enumerations) in TypeScript are a feature that allows you to define **** a set of named constants ****.
// The concept behind an enumeration is ***** to create a human-readable way to represent a set of constant values *******, which might otherwise be represented as numbers or strings.


// Example 1 - Game 
// Let’s say you have a game where you have to perform an action based on weather the user has pressed the up arrow key, down arrow key, left arrow key or right arrow key.

function doSomething(keyPressed) {
	// do something.
}

// What should the type of keyPressed be?
// Should it be a string? (UP , DOWN , LEFT, RIGHT) ?
// Should it be numbers? (1, 2, 3, 4) ?

// The best thing to use in such a case is an enum.
enum Direction {
    Up,
    Down,
    Left,
    Right
}

function doSomething(keyPressed: Direction) {
	// do something.
}

doSomething(Direction.Up)

// This makes code slightly cleaner to read out. 
// The final value stored at runtime is still a number (0, 1, 2, 3). 

// 2. What values do you see at runtime for Direction.UP ?
// Try logging Direction.Up on screen
// Code
// enum Direction {
//     Up,
//     Down,
//     Left,
//     Right
// }

// function doSomething(keyPressed: Direction) {
// 	// do something.
// }

// doSomething(Direction.Up)
// console.log(Direction.Up) // 0

//  ************** This tells you that by default, enums get values as 0 , 1, 2...  **********

// 3. How to change values?
enum Direction {
    Up = 1,                         // first value by default should be 0 but here changed to 1, which will change rest of the values too
    Down, // becomes 2 by default
    Left, // becomes 3
    Right // becomes 4
}

function doSomething(keyPressed: Direction) {
	// do something.
}

doSomething(Direction.Down)


// Can also be strings
enum Direction {
    Up = "UP",
    Down = "Down",
    Left = "Left",
    Right = 'Right'
}

function doSomething(keyPressed: Direction) {
	// do something.
}

doSomething(Direction.Down)

// Common usecase in express
enum ResponseStatus {
    Success = 200,
    NotFound = 404,
    Error = 500
}

app.get("/', (req, res) => {
    if (!req.query.userId) {
			res.status(ResponseStatus.Error).json({})
    }
    // and so on...
		res.status(ResponseStatus.Success).json({});
})


// Summary  
// Enums let you define a set of named constants  
// By default, enums get values as 0 , 1, 2...  
// You can change the default values to anything you want (numbers or strings)  
// Enums are useful when you have a fixed set of related constants that you want to group together and use throughout your codebase.

// ------------ Generics in TS ---------

// Generics are a language independent concept (exist in C++ as well)
// Let’s learn it via an example

// 1. Problem Statement
// Let’s say you have a function that needs to return the first element of an array. Array can be of type either string or integer.
// How would you solve this problem?
// Solution

function getFirstElement(arr: (string | number)[]) {
    return arr[0];
}

const el = getFirstElement([1, 2, 3]);

// What is the problem in this approach?
// User can send different types of values in inputs, without any type 

function getFirstElement(arr: (string | number)[]) {
    return arr[0];
}

const el = getFirstElement([1, 2, '3']);

// Typescript isn’t able to infer the right type of the return type

function getFirstElement(arr: (string | number)[]) {
    return arr[0];
}

const el = getFirstElement(["harkiratSingh", "ramanSingh"]);
console.log(el.toLowerCase())

// notion image : propery toLowerCase does not exist on type string | number. Proerty 'toLowerCase' does not exist on type 'number'.

// 2. Solution - Generics
//  ****** Generics enable you to create components that work with any data type while still providing compile-time type safety. ***********

function identity<T>(arg: T): T {
    return arg;
}

let output1 = identity<string>("myString");
let output2 = identity<number>(100);  // type of output2 is number


// 3. Solution to original problem
// Can you modify the code of the original problem now to include generics in it?

function getFirstElement<T>(arr: T[]) {
    return arr[0];
}

const el = getFirstElement(["harkiratSingh", "ramanSingh"]);
console.log(el.toLowerCase()) // works fine

// Did the issues go away?
// User can send different types of values in inputs, without any type errors

function getFirstElement<T>(arr: T[]) {
    return arr[0];
}

const el = getFirstElement<string>(["harkiratSingh", 2]);
console.log(el.toLowerCase()) // Error : Argument of type 'number' is not assignable to parameter of type 'string'.

// Typescript isn’t able to infer the right type of the return type

function getFirstElement<T>(arr: T[]) {
    return arr[0];
}

const el = getFirstElement(["harkiratSingh", "ramanSingh"]);
console.log(el.toLowerCase()) // now works fine

// Summary
// Generics allow you to write type-safe functions that work with any type.
// If you explicitly set the generic type, TypeScript enforces that all array elements match that type.
// If you let TypeScript infer the type, it uses the type of the array elements.
// If you mix types in the array, TypeScript will infer a union type (e.g., string | number), and you may get errors if you use methods that don't exist on all types.
// Key Point:
// Generics provide flexibility with type safety—but you must use them correctly to avoid type errors.

//  ------ pick -------
// Pick allows you to create a new type by selecting a set of properties (Keys) from an existing type (Type).
// Imagine you have a User model with several properties, but for a user profile display, you only need a subset of these properties.
interface User {
  id: number;
  name: string;
  email: string;
  createdAt: Date;
}

// For a profile display, only pick `name` and `email`
type UserProfile = Pick<User, 'name' | 'email'>;

const displayUserProfile = (user: UserProfile) => {
  console.log(`Name: ${user.name}, Email: ${user.email}`);

//  ---------- Partial -----------
// Partial makes all properties of a type optional, creating a type with the same properties, but each marked as optional.
 
// notion image: 
interface user {
  id: string;
  name: string;
  age: string;
  email: string;
  password: string;
};

interface User {
  id ?: string;
  name ?: string;
  age ?: string;
  email ?: string;
  password ?: string; // all properties are optional now
}
// This is particularly useful when you want to represent a subset of properties for updates or optional configurations.
 
// Specifically useful when you want to do updates
 
interface User {
    id: string;
    name: string;
    age: string;
    email: string;
    password: string;
};

type UpdateProps = Pick<User, 'name' | 'age' | 'email'>

type UpdatePropsOptional = Partial<UpdateProps>

function updateUser(updatedProps: UpdatePropsOptional) {
    // hit the database tp update the user
}
updateUser({})

//  -------- Readonly
// When you have a configuration object that should not be altered after initialization, making it Readonly ensures its properties cannot be changed.

interface Config {
  readonly endpoint: string;
  readonly apiKey: string;
}

const config: Readonly<Config> = {
  endpoint: 'https://api.example.com',
  apiKey: 'abcdef123456',
};

// config.apiKey = 'newkey'; // Error: Cannot assign to 'apiKey' because it is a read-only property.

//  ------------Record and Map
// Record
// Record let’s you give a cleaner type to objects
// You can type objects like follows - 

interface User {
  id: string;
  name: string;
}

type Users = { [key: string]: User };

const users: Users = {
  'abc123': { id: 'abc123', name: 'John Doe' },
  'xyz789': { id: 'xyz789', name: 'Jane Doe' },
};

 
// or use Record

interface User {
  id: string;
  name: string;
}

type Users = Record<string, User>;

const users: Users = {
  'abc123': { id: 'abc123', name: 'John Doe' },
  'xyz789': { id: 'xyz789', name: 'Jane Doe' },
};

console.log(users['abc123']); // Output: { id: 'abc123', name: 'John Doe' }

 
// Map
// maps gives you an even fancier way to deal with objects. Very similar to Maps in C++

interface User {
  id: string;
  name: string;
}

// Initialize an empty Map
const usersMap = new Map<string, User>();

// Add users to the map using .set
usersMap.set('abc123', { id: 'abc123', name: 'John Doe' });
usersMap.set('xyz789', { id: 'xyz789', name: 'Jane Doe' });

// Accessing a value using .get
console.log(usersMap.get('abc123')); // Output: { id: 'abc123', name: 'John Doe' }

//  --------Exclude
// In a function that can accept several types of inputs but you want to exclude specific types from being passed to it.

type Event = 'click' | 'scroll' | 'mousemove';
type ExcludeEvent = Exclude<Event, 'scroll'>; // 'click' | 'mousemove'

const handleEvent = (event: ExcludeEvent) => {
  console.log(`Handling event: ${event}`);
};

handleEvent('click'); // OK

//  ----------- Type inference in zod
// When using zod, we’re done runtime validation. 
// For example, the following code makes sure that the user is sending the right inputs to update their profile information

import { z } from 'zod';
import express from "express";

const app = express();

// Define the schema for profile update
const userProfileSchema = z.object({
  name: z.string().min(1, { message: "Name cannot be empty" }),
  email: z.string().email({ message: "Invalid email format" }),
  age: z.number().min(18, { message: "You must be at least 18 years old" }).optional(),
});

app.put("/user", (req, res) => {
  const { success } = userProfileSchema.safeParse(req.body);
  const updateBody = req.body; // how to assign a type to updateBody?

  if (!success) {
    res.status(411).json({});
    return
  }
  // update database here
  res.json({
    message: "User updated"
  })
});

app.listen(3000);