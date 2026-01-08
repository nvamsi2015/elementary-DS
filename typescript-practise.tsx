//----------- typescript practice--------
// --------- https://typescript-exercises.github.io/

// ------ 1. Given the data, define the interface "User" and use it accordingly.


export type User = unknown;

export const users: unknown[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    }
];

export function logPerson(user: unknown) {
    console.log(` - ${user.name}, ${user.age}`);
}

console.log('Users:');
users.forEach(logPerson);


// In case you are stuck:
// https://www.typescriptlang.org/docs/handbook/2/objects.html

// ------------- 2 Union
    // Type "Person" is missing, please define it and use
    // it in persons array and logPerson function in order to fix
    // all the TS errors.



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

export type Person = User | Admin;

export const persons: Person[] /* <- Person[] */ = [
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

export function logPerson(user: Person) {
    console.log(` - ${user.name}, ${user.age}`);
}

persons.forEach(logPerson);

// In case you are stuck:
// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types

// ---------3 type narrowing -----
   Fix type errors in logPerson function.

    logPerson function should accept both User and Admin
    and should output relevant information according to
    the input: occupation for User and role for Admin.

*/

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

export type Person = User | Admin;

export const persons: Person[] = [
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

export function logPerson(person: Person) {
    let additionalInformation: string;
    if ('role' in person) {
        additionalInformation = person.role;
    } else {
        additionalInformation = person.occupation;
    }
    console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
}

persons.forEach(logPerson);

// In case you are stuck:
// https://www.typescriptlang.org/docs/handbook/2/narrowing.html#the-in-operator-narrowing

// ------------- 4. type predicate --------



    Figure out how to help TypeScript understand types in
    this situation and apply necessary fixes.

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
    { type: 'admin', name: 'Bruce Willis', age: 64, role: 'World saver' }
];

export function isAdmin(person: Person) {
    return person.type === 'admin';
}

export function isUser(person: Person) {
    return person.type === 'user';
}

export function logPerson(person: Person) {
    let additionalInformation: string = '';
    if (isAdmin(person)) {
        additionalInformation = person.role;
    }
    if (isUser(person)) {
        additionalInformation = person.occupation;
    }
    console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
}

console.log('Admins:');
persons.filter(isAdmin).forEach(logPerson);

console.log();

console.log('Users:');
persons.filter(isUser).forEach(logPerson);

// In case you are stuck:
// https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates


export function isAdmin(person: Person): person is Admin {
    return person.type === 'admin';
}

export function isUser(person: Person) : person is User {
    return person.type === 'user';
}

// ----------- 5. Partial<Type>
/*

Intro:

    Time to filter the data! In order to be flexible
    we filter users using a number of criteria and
    return only those matching all of the criteria.
    We don't need Admins yet, we only filter Users.

Exercise:

    Without duplicating type structures, modify
    filterUsers function definition so that we can
    pass only those criteria which are needed,
    and not the whole User information as it is
    required now according to typing.

Higher difficulty bonus exercise:

    Exclude "type" from filter criteria.

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
    {
        type: 'admin',
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
    },
    {
        type: 'user',
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    },
    {
        type: 'admin',
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver'
    },
    {
        type: 'user',
        name: 'Wilson',
        age: 23,
        occupation: 'Ball'
    },
    {
        type: 'admin',
        name: 'Agent Smith',
        age: 23,
        role: 'Administrator'
    }
];

export const isAdmin = (person: Person): person is Admin => person.type === 'admin';
export const isUser = (person: Person): person is User => person.type === 'user';

export function logPerson(person: Person) {
    let additionalInformation = '';
    if (isAdmin(person)) {
        additionalInformation = person.role;
    }
    if (isUser(person)) {
        additionalInformation = person.occupation;
    }
    console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
}

export function filterUsers(persons: Person[], criteria: User): User[] {
    return persons.filter(isUser).filter((user) => {
        const criteriaKeys = Object.keys(criteria) as (keyof User)[];
        return criteriaKeys.every((fieldName) => {
            return user[fieldName] === criteria[fieldName];
        });
    });
}

console.log('Users of age 23:');

filterUsers(
    persons,
    {
        age: 23
    }
).forEach(logPerson);

// In case you are stuck:
// https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype
// https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-8.html#predefined-conditional-types

// ------ given sol -
export function filterUsers(persons: Person[], criteria: Partial <User>): User[] {    // using  Partial <User>

// ----- gemini solution ------
To solve this, we will use two powerful TypeScript utility types: Partial<T> and Omit<T, K>.
The SolutionTo meet the requirements—allowing optional criteria and excluding the type field from those criteria—you should update the criteria parameter as follows:
    TypeScript
    
export function filterUsers(
    persons: Person[], 
    criteria: Partial<Omit<User, 'type'>> // Use Omit to exclude 'type', then Partial to make others optional
): User[] {
    return persons.filter(isUser).filter((user) => {
        const criteriaKeys = Object.keys(criteria) as (keyof typeof criteria)[];
        return criteriaKeys.every((fieldName) => {
            return user[fieldName] === criteria[fieldName];
        });
    });
}
How it WorksPartial<User>: This utility makes every property in the User interface optional. 
    Without this, the compiler would force you to provide name, age, and occupation every time you called the filter.Omit<User, 'type'>: 
    This removes the type property from the object structure. Since we already know we are filtering users (person.type === 'user'), it doesn't make sense to include it in our search criteria.
    Composition: By wrapping them together as Partial<Omit<User, 'type'>>, you create a type that says: "Any combination of User properties, excluding 'type', and none of them are strictly required.
    "Why use Utility Types?Utility types allow you to transform existing types without rewriting them. This keeps your code DRY (Don't Repeat Yourself).
    UtilityResultPartial<T>Makes all properties in T optional (?).Omit<T, 'K'>Creates a type by picking all properties from T and then removing K.
    
    Would you like to see how to implement a more generic version of this function that could filter any type of person (User or Admin)?


//---------- 6.  function overloading ------------

    // ---------- excersise ----------

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


        ----------gemini solution---------


export function filterPersons(persons: Person[], personType: 'user', criteria: Partial<Omit<User, 'type'>>): User[] 
export function filterPersons(persons: Person[], personType: 'admin', criteria: Partial<Omit<Admin, 'type'>>): Admin[] 
export function filterPersons(persons: Person[], personType: string, criteria: any): Person[] {
    return persons
        .filter((person) => person.type === personType)
        .filter((person) => {
            let criteriaKeys = Object.keys(criteria) as (keyof Person)[];
            return criteriaKeys.every((fieldName) => {
                return person[fieldName] === criteria[fieldName];
            });
        });
}



    ----------- given solution -------
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

export const usersOfAge23 = filterPersons(persons, 'user', { age: 23 });
export const adminsOfAge23 = filterPersons(persons, 'admin', { age: 23 });

console.log('Users of age 23:');
usersOfAge23.forEach(logPerson);

console.log();

console.log('Admins of age 23:');
adminsOfAge23.forEach(logPerson);

// In case you are stuck:
// https://www.typescriptlang.org/docs/handbook/2/functions.html#function-overloads


// ------------- generics approach ---------

Using Generics is often considered more "idiomatic" in modern TypeScript because it avoids repeating yourself (the DRY principle) and allows the function to scale automatically if you add more person types (like Moderator or Guest) later.

The Generics Approach
Instead of writing a specific overload for every type, we can create a map that links the type string to the interface.

    // A mapping of person types to their interfaces
interface PersonMap {
    user: User;
    admin: Admin;
}

export function filterPersons<T extends keyof PersonMap>(
    persons: Person[],
    personType: T,
    criteria: Partial<Omit<PersonMap[T], 'type'>>
): PersonMap[T][] {
    return persons
        .filter((person): person is PersonMap[T] => person.type === personType)
        .filter((person) => {
            let criteriaKeys = getObjectKeys(criteria);
            return criteriaKeys.every((fieldName) => {
                return person[fieldName as keyof PersonMap[T]] === criteria[fieldName as keyof typeof criteria];
            });
        });
}

 {/* How it WorksGeneric Parameter <T extends keyof PersonMap>: This captures the literal string passed in (e.g., 'user').Indexed Access Type PersonMap[T]: TypeScript looks up the interface in our map. If T is 'user', PersonMap[T] becomes User.Type Guard: The .filter((person): person is PersonMap[T] => ...) tells the TypeScript compiler that after this line, the array elements are guaranteed to be the specific subtype (User or Admin), which removes the need for type casting later in the chain.Comparison: Overloads vs. GenericsFeatureFunction OverloadsGenericsReadabilityHigh for simple cases; easy to see exactly what goes in/out.Can look complex due to angle brackets and mapping.ScalabilityLow; you must add a new line for every new type.High; just add the new type to the PersonMap.FlexibilityStatic; only works for the types you explicitly list.Dynamic; can be adapted to handle any interface that follows the pattern.    */}
    
//=========== 7. generics with tuple return type ===========

/*

Intro:

    Filtering was completely removed from the project.
    It turned out that this feature was just not needed
    for the end-user and we spent a lot of time just because
    our office manager told us to do so. Next time we should
    instead listen to the product management.

    Anyway we have a new plan. CEO's friend Nick told us
    that if we randomly swap user names from time to time
    in the community, it would be very funny and the project
    would definitely succeed!

Exercise:

    Implement swap which receives 2 persons and returns them in
    the reverse order. The function itself is already
    there, actually. We just need to provide it with proper types.
    Also this function shouldn't necessarily be limited to just
    Person types, lets type it so that it works with any two types
    specified.

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

function logUser(user: User) {
    const pos = users.indexOf(user) + 1;
    console.log(` - #${pos} User: ${user.name}, ${user.age}, ${user.occupation}`);
}

function logAdmin(admin: Admin) {
    const pos = admins.indexOf(admin) + 1;
    console.log(` - #${pos} Admin: ${admin.name}, ${admin.age}, ${admin.role}`);
}

const admins: Admin[] = [
    {
        type: 'admin',
        name: 'Will Bruces',
        age: 30,
        role: 'Overseer'
    },
    {
        type: 'admin',
        name: 'Steve',
        age: 40,
        role: 'Steve'
    }
];

const users: User[] = [
    {
        type: 'user',
        name: 'Moses',
        age: 70,
        occupation: 'Desert guide'
    },
    {
        type: 'user',
        name: 'Superman',
        age: 28,
        occupation: 'Ordinary person'
    }
];

export function swap(v1, v2) {
    return [v2, v1];
}



function test1() {
    console.log('test1:');
    const [secondUser, firstAdmin] = swap(admins[0], users[1]);
    logUser(secondUser);
    logAdmin(firstAdmin);
}

function test2() {
    console.log('test2:');
    const [secondAdmin, firstUser] = swap(users[0], admins[1]);
    logAdmin(secondAdmin);
    logUser(firstUser);
}

function test3() {
    console.log('test3:');
    const [secondUser, firstUser] = swap(users[0], users[1]);
    logUser(secondUser);
    logUser(firstUser);
}

function test4() {
    console.log('test4:');
    const [firstAdmin, secondAdmin] = swap(admins[1], admins[0]);
    logAdmin(firstAdmin);
    logAdmin(secondAdmin);
}

function test5() {
    console.log('test5:');
    const [stringValue, numericValue] = swap(123, 'Hello World');
    console.log(` - String: ${stringValue}`);
    console.log(` - Numeric: ${numericValue}`);
}

[test1, test2, test3, test4, test5].forEach((test) => test());

// In case you are stuck:
// https://www.typescriptlang.org/docs/handbook/2/objects.html#tuple-types
// https://www.typescriptlang.org/docs/handbook/2/generics.html

//--------- gemini solution -----
export function swap<T,U>(v1:T, v2:U):[U,T] {
    return [v2, v1];
}

//--------- https://typescript-exercises.github.io/ solution ------
    export function swap<T1, T2>(v1: T1, v2: T2): [T2, T1] {
    return [v2, v1];
}


//------------ 8. Intersection Types (&) combined with the Omit utility.
    /*

Intro:

    Project grew and we ended up in a situation with
    some users starting to have more influence.
    Therefore, we decided to create a new person type
    called PowerUser which is supposed to combine
    everything User and Admin have.

Exercise:

    Define type PowerUser which should have all fields
    from both User and Admin (except for type),
    and also have type 'powerUser' without duplicating
    all the fields in the code.

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

type PowerUser = Omit<User, 'type'>& Omit<Admin, 'type'> & {type:'powerUser'}

export type Person = User | Admin | PowerUser;

export const persons: Person[] = [
    { type: 'user', name: 'Max Mustermann', age: 25, occupation: 'Chimney sweep' },
    { type: 'admin', name: 'Jane Doe', age: 32, role: 'Administrator' },
    { type: 'user', name: 'Kate Müller', age: 23, occupation: 'Astronaut' },
    { type: 'admin', name: 'Bruce Willis', age: 64, role: 'World saver' },
    {
        type: 'powerUser',
        name: 'Nikki Stone',
        age: 45,
        role: 'Moderator',
        occupation: 'Cat groomer'
    }
];

function isAdmin(person: Person): person is Admin {
    return person.type === 'admin';
}

function isUser(person: Person): person is User {
    return person.type === 'user';
}

function isPowerUser(person: Person): person is PowerUser {
    return person.type === 'powerUser';
}

export function logPerson(person: Person) {
    let additionalInformation: string = '';
    if (isAdmin(person)) {
        additionalInformation = person.role;
    }
    if (isUser(person)) {
        additionalInformation = person.occupation;
    }
    if (isPowerUser(person)) {
        additionalInformation = `${person.role}, ${person.occupation}`;
    }
    console.log(`${person.name}, ${person.age}, ${additionalInformation}`);
}

console.log('Admins:');
persons.filter(isAdmin).forEach(logPerson);

console.log();

console.log('Users:');
persons.filter(isUser).forEach(logPerson);

console.log();

console.log('Power users:');
persons.filter(isPowerUser).forEach(logPerson);

// In case you are stuck:
// https://www.typescriptlang.org/docs/handbook/utility-types.html
// https://www.typescriptlang.org/docs/handbook/2/objects.html#intersection-types

// -------------9 
