/*
Intro:

    All 2 users liked the idea of the community. We should go
    forward and introduce some order. We are in Germany after all.
    Let's add a couple of admins.

    Initially, we only had users in the in-memory database. After
    introducing Admins, we need to fix the types so that
    everything works well together.

Exercise:

    Type "Person" is missing, please define it and use
    it in persons array and logPerson function in order to fix
    all the TS errors.



interface User {
    name: string;
    age: number;
    occupation: string;
}

interface Admin {
    name: string;
    age: number;
    role: string;
}

export type Person = unknown;


export const persons: User[]  = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    },
    {
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver'
    }
];

export function logPerson(user: User) {
    console.log(` - ${user.name}, ${user.age}`);
}

persons.forEach(logPerson); 

*/



// --------- add admin interface with name, age, role as new types of users got introduced in the db handle it ---------


interface User  {
    name:string,
    age:number,
    occupation: string
}

interface Admin {
    name: string,
    age: number,
    role: string
}

export type Person = User | Admin


export const persons: Person[] = [
    {
        name:'vamsi', 
        age:25,
        occupation:'developer'
    },
    {
        name:'venky',
        age:7,
        occupation:'student'
    },
    {
        name:'sunil',
        age:30,
        role:'manager'
    },
    {
        name:'arjun',
        age:20,
        role:'asst-manager'
    }
]

export function logPerson(person:Person){
    console.log(`-${person.name}, ${person.age}`)
}

console.log('Users: ')
persons.forEach(logPerson)

// ------- Union Type
https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types

// type formed from two more types is Union

function printId(id: number | string) {
  console.log("Your ID is: " + id);
}
printId(101);  //"Your ID is: 101"
printId("202"); // "Your ID is: 202"

printId({ myID: 22342 }); //error // Argument of type '{ myID: number; }' is not assignable to parameter of type 'string | number'.

// TypeScript will only allow an operation if it is valid for every member of the union. For example, if you have the union string | number, you can’t use methods that are only available on string:

function printId2(id: number | string) {
  console.log(id.toUpperCase());

}

// Property 'toUpperCase' does not exist on type 'string | number'.
//   Property 'toUpperCase' does not exist on type 'number'.

// -------- narrowing --------

// The solution is to narrow the union with code, the same as you would in JavaScript without type annotations. Narrowing occurs when TypeScript can deduce a more specific type for a value based on the structure of the code.

// For example, TypeScript knows that only a string value will have a typeof value "string":

function printId3(id: number | string) {
  if (typeof id === "string") {
    // In this branch, id is of type 'string'
    console.log(id.toUpperCase());
  } else {
    // Here, id is of type 'number'
    console.log(id);
  }
}

// --------- Another example is to use a function like Array.isArray:

function welcomePeople(x: string[] | string) {
  if (Array.isArray(x)) {
    // Here: 'x' is 'string[]'
    console.log("Hello, " + x.join(" and "));
  } else {
    // Here: 'x' is 'string'
    console.log("Welcome lone traveler " + x);
  }
}

// Notice that in the else branch, we don’t need to do anything special - if x wasn’t a string[], then it must have been a string.


// Sometimes you’ll have a union where all the members have something in common. For example, both arrays and strings have a slice method. If every member in a union has a property in common, you can use that property without narrowing:

// Return type is inferred as number[] | string
function getFirstThree(x: number[] | string) {
  return x.slice(0, 3);
}




