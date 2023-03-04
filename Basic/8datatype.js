/*
Data types

A value in JavaScript is always of a certain type. For example, a string or a number.

There are eight basic data types in JavaScript
*/

// Number
let n = 123;
n = 12.345;
console.log(n);

// Infinity:-Infinity represents the mathematical Infinity ∞. It is a special value that’s greater than any number.
console.log(1 / 0);

// NaN represents a computational error. It is a result of an incorrect or an undefined mathematical operation, for instance:
console.log("one" / 2);

// it give output
console.log("1" / 2);

// String

// A string in JavaScript must be surrounded by quotes.

let str = "Hello";
let str2 = "Single quotes are ok too";
let phrase = `can embed another ${str}`;

let name = "John";

// embed a variable
console.log(`Hello, ${name}!`, typeof str); // Hello, John!

// embed an expression
console.log(`the result is ${1 + 2}`); // the result is 3

console.log("the result is ${1 + 2}");

/*
Boolean (logical type)

The boolean type has only two values: true and false.

This type is commonly used to store yes/no values: true means “yes, correct”, and false means “no, incorrect”.
*/

let nameFieldChecked = true; // yes, name field is checked
let ageFieldChecked = false; // no, age field is not checked

/*
The “null” value

The special null value does not belong to any of the types described above.

It forms a separate type of its own which contains only the null value:

let age = null;
*/

/*

The “undefined” value

The special value undefined also stands apart. It makes a type of its own, just like null.

The meaning of undefined is “value is not assigned”.

If a variable is declared, but not assigned, then its value is undefined:

 */

let age;

console.log(age); // shows "undefined"

let age1 = 100;

// change the value to undefined
age1 = undefined;

alert(age1); // "undefined"

/*
typeof undefined // "undefined"

typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object"  (1)

typeof null // "object"  (2)

typeof alert // "function"  (3)
*/

/*

Summary

There are 8 basic data types in JavaScript.

    Seven primitive data types:
        number for numbers of any kind: integer or floating-point, integers are limited by ±(253-1).
        bigint for integer numbers of arbitrary length.
        string for strings. A string may have zero or more characters, there’s no separate single-character type.
        boolean for true/false.
        null for unknown values – a standalone type that has a single value null.
        undefined for unassigned values – a standalone type that has a single value undefined.
        symbol for unique identifiers.
    And one non-primitive data type:
        object for more complex data structures.

The typeof operator allows us to see which type is stored in a variable.

    Usually used as typeof x, but typeof(x) is also possible.
    Returns a string with the name of the type, like "string".
    For null returns "object" – this is an error in the language, it’s not actually an object.

*/

// Tasks
// String quotes
// importance: 5

// What is the output of the script?

let n = "Ilya";

alert(`hello ${1}`); // ?

alert(`hello ${"n"}`); // ?

alert(`hello ${n}`); // ?
