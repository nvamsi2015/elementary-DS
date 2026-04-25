/*

Intro:

    Filtering requirements have grown. We need to be
    able to filter any kind of Persons.

Exercise:

    Fix typing for the filterPersons so that it can filter users
    and return User[] when personType='user' and return Admin[]
    when personType='admin'. Also filterPersons should accept
    partial User/Admin type according to the personType.
    `criteria` argument should behave according to the
    `personType` argument value. `type` field is not allowed in
    the `criteria` field.

Higher difficulty bonus exercise:

    Implement a function `getObjectKeys()` which returns more
    convenient result for any argument given, so that you don't
    need to cast it.

    let criteriaKeys = Object.keys(criteria) as (keyof User)[];
    -->
    let criteriaKeys = getObjectKeys(criteria);

*/

interface User {
    type: 'user';
    name: string;
    age: number;
    occupation: string;
}

interface Admin {
    type: 'admin';
    name: string;
    age: number;
    role: string;
}

export type Person = User | Admin;

export const persons: Person[] = [
    { type: 'user', name: 'Max Mustermann', age: 25, occupation: 'Chimney sweep' },
    { type: 'admin', name: 'Jane Doe', age: 32, role: 'Administrator' },
    { type: 'user', name: 'Kate Müller', age: 23, occupation: 'Astronaut' },
    { type: 'admin', name: 'Bruce Willis', age: 64, role: 'World saver' },
    { type: 'user', name: 'Wilson', age: 23, occupation: 'Ball' },
    { type: 'admin', name: 'Agent Smith', age: 23, role: 'Anti-virus engineer' }
];

export function logPerson(person: Person) {
    console.log(
        ` - ${person.name}, ${person.age}, ${person.type === 'admin' ? person.role : person.occupation}`
    );
}

export function filterPersons(persons: Person[], personType: string, criteria: unknown): unknown[] {
    return persons
        .filter((person) => person.type === personType)
        .filter((person) => {
            let criteriaKeys = Object.keys(criteria) as (keyof Person)[];
            return criteriaKeys.every((fieldName) => {
                return person[fieldName] === criteria[fieldName];
            });
        });
}

export const usersOfAge23 = filterPersons(persons, 'user', { age: 23 });
export const adminsOfAge23 = filterPersons(persons, 'admin', { age: 23 });

console.log('Users of age 23:');
usersOfAge23.forEach(logPerson);

console.log();

console.log('Admins of age 23:');
adminsOfAge23.forEach(logPerson);

// In case you are stuck:
// https://www.typescriptlang.org/docs/handbook/2/functions.html#function-overloads

// erros 

// index.ts(65,44): error TS2769: No overload matches this call.
//   Overload 1 of 2, '(o: {}): string[]', gave the following error.
//     Argument of type 'unknown' is not assignable to parameter of type '{}'.
//   Overload 2 of 2, '(o: object): string[]', gave the following error.
//     Argument of type 'unknown' is not assignable to parameter of type 'object'.
// index.ts(67,46): error TS2571: Object is of type 'unknown'.
// index.ts(76,22): error TS2345: Argument of type '(person: Person) => void' is not assignable to parameter of type '(value: unknown, index: number, array: unknown[]) => void'.
//   Types of parameters 'person' and 'value' are incompatible.
//     Type 'unknown' is not assignable to type 'Person'.
//       Type 'unknown' is not assignable to type 'Admin'.
// index.ts(81,23): error TS2345: Argument of type '(person: Person) => void' is not assignable to parameter of type '(value: unknown, index: number, array: unknown[]) => void'.
// test.ts(13,5): error TS2344: Type 'false' does not satisfy the constraint 'true'.
// test.ts(21,5): error TS2344: Type 'false' does not satisfy the constraint 'true'.
// test.ts(29,5): error TS2344: Type 'false' does not satisfy the constraint 'true'.
// test.ts(37,5): error TS2344: Type 'false' does not satisfy the constraint 'true'.




// ----------- solution: function overloading 

const getObjectKeys = <T>(obj: T) => Object.keys(obj) as (keyof T)[];

export function filterPersons(persons: Person[], personType: User['type'], criteria: Partial<Omit<User, 'type'>>): User[];
export function filterPersons(persons: Person[], personType: Admin['type'], criteria: Partial<Omit<Admin, 'type'>>): Admin[];
export function filterPersons(persons: Person[], personType: Person['type'], criteria: Partial<Person>): Person[] {
    return persons
        .filter((person) => person.type === personType)
        .filter((person) => {
            let criteriaKeys = getObjectKeys(criteria);
            return criteriaKeys.every((fieldName) => {
                return person[fieldName] === criteria[fieldName];
            });
        });
}



// const getObjectKeys = <T>(obj: T) => Object.keys(obj) as (keyof T)[];
// what the change this line is making? 


// ----https://www.typescriptlang.org/docs/handbook/2/functions.html#function-overloads 
/* 
Function Overloads
Some JavaScript functions can be called in a variety of argument counts and types. For example, you might write a function to produce a Date that takes either a timestamp (one argument) or a month/day/year specification (three arguments).

In TypeScript, we can specify a function that can be called in different ways by writing overload signatures. To do this, write some number of function signatures (usually two or more), followed by the body of the function:

 */

function makeDate(timestamp: number): Date;
function makeDate(m: number, d: number, y: number): Date;
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
  if (d !== undefined && y !== undefined) {
    return new Date(y, mOrTimestamp, d);
  } else {
    return new Date(mOrTimestamp);
  }
}
const d1 = makeDate(12345678);
const d2 = makeDate(5, 5, 5);
const d3 = makeDate(1, 3);

/* 
No overload expects 2 arguments, but overloads do exist that expect either 1 or 3 arguments.
In this example, we wrote two overloads: one accepting one argument, and another accepting three arguments. These first two signatures are called the overload signatures.

Then, we wrote a function implementation with a compatible signature. Functions have an implementation signature, but this signature can’t be called directly. Even though we wrote a function with two optional parameters after the required one, it can’t be called with two parameters!

Overload Signatures and the Implementation Signature
This is a common source of confusion. Often people will write code like this and not understand why there is an error:
 */



// Overload Signatures and the Implementation Signature

// This is a common source of confusion. Often people will write code like this and not understand why there is an error:

function fn(x: string): void;
function fn() {
  // ...
}
// Expected to be able to call with zero arguments
fn();
// Expected 1 arguments, but got 0.

Again, the signature used to write the function body can’t be “seen” from the outside.

The signature of the implementation is not visible from the outside. When writing an overloaded function, you should always have two or more signatures above the implementation of the function.

The implementation signature must also be compatible with the overload signatures. For example, these functions have errors because the implementation signature doesn’t match the overloads in a correct way:

function fn(x: boolean): void;
// Argument type isn't right
function fn(x: string): void;
This overload signature is not compatible with its implementation signature.
function fn(x: boolean) {}



function fn(x: string): string;
// Return type isn't right
function fn(x: number): boolean;
This overload signature is not compatible with its implementation signature.
function fn(x: string | number) {
  return "oops";
}

// ---------------
// Writing Good Overloads


Like generics, there are a few guidelines you should follow when using function overloads. Following these principles will make your function easier to call, easier to understand, and easier to implement.

Let’s consider a function that returns the length of a string or an array:

function len(s: string): number;
function len(arr: any[]): number;
function len(x: any) {
  return x.length;
}

This function is fine; we can invoke it with strings or arrays. However, we can’t invoke it with a value that might be a string or an array, because TypeScript can only resolve a function call to a single overload:

len(""); // OK
len([0]); // OK
len(Math.random() > 0.5 ? "hello" : [0]);
No overload matches this call.
  Overload 1 of 2, '(s: string): number', gave the following error.
    Argument of type 'number[] | "hello"' is not assignable to parameter of type 'string'.
      Type 'number[]' is not assignable to type 'string'.
  Overload 2 of 2, '(arr: any[]): number', gave the following error.
    Argument of type 'number[] | "hello"' is not assignable to parameter of type 'any[]'.
      Type 'string' is not assignable to type 'any[]'.



Because both overloads have the same argument count and same return type, we can instead write a non-overloaded version of the function:

function len(x: any[] | string) {
  return x.length;
}
Try
This is much better! Callers can invoke this with either sort of value, and as an added bonus, we don’t have to figure out a correct implementation signature.

Always prefer parameters with union types instead of overloads when possible      