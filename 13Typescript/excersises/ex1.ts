// export type User = {
//     name:string,
//     age:number,
//     occupation: string
// };

export interface User  {
    name:string,
    age:number,
    occupation: string
}

// ---- will work with both type and interface 

export const users: User[] = [
    {
        name:'vamsi', 
        age:25,
        occupation:'developer'
    },
    {
        name:'venky',
        age:7,
        occupation:'student'
    }
]

export function logPerson(user:User){
    console.log(`-${user.name}, ${user.age}`)
}

console.log('Users: ')
users.forEach(logPerson)

// observation:


// In your example, you used type User = {...}. Here are the key differences between type and interface:

// Type
// Flexible: can define primitives, unions, tuples, etc.
// Uses = syntax
// Cannot be declaration merged (can't redeclare and extend automatically)
// Slightly more versatile

// Interface
// Specifically for object shapes
// Uses {} syntax (no =)
// Supports declaration merging (can extend with additional declarations)
// Optimized for object definitions

// Key Practical Differences
// Feature	            Type	Interface
// Object definition	✓	        ✓
// Union types	        ✓	        ✗
// Primitives	        ✓	        ✗
// Declaration merging	✗	        ✓
// Extend syntax	    & union	    extends keyword
// Class implementation	 ✓	          ✓

// For your use case, either works, but:
// Use interface if you're just defining object shapes (clearer intent)
// Use type if you need unions or more flexibility
// Since your User is just an object shape, interface User { ... } would be the conventional choice.


