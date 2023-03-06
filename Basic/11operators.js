/*
The following math operations are supported:

    Addition +,
    Subtraction -,
    Multiplication *,
    Division /,
    Remainder %,
    Exponentiation **.

*/

// Addition Operator
let op = 1 + 2;
console.log(op);

// Subtraction Operator
let b1 = 10 - 7;
console.log(b1);

// Multiplication Operator
let c = 3 * 3;
console.log(c);

// Division Operator
let d = 1.0 / 2.0;
console.log(d);

// Modulas Operator
let e = 9 % 5;
console.log(e);

// Exponentian Operator
let f = 2 ** 5;
console.log(f);

// Increament Operator
var g = 2;
g1 = g++;
console.log(g);

// Decrement Operator
var h = 2;
h1 = h--;
console.log(h);

// Unary plus Operator
var i = 3;
i1 = +i;
console.log(i1);

// Negation Operator
var j = 3;
j1 = -j;
console.log(j1);

// Assignment Operator
let a = 2;
console.log(a);

// Addition Assignment Operator
const b = 3;
console.log((a = b + 1));

// Subtraction Assignment Operator
let yoo = 4;
console.log((foo = yoo - 1));

// Multiplication Assignment
console.log((yoo = yoo * 2));

// Division Assignment Operator
const moo = 2;
console.log((yoo = yoo / moo));

// Modulas Assignment Operator
console.log((yoo %= 2));

// Exponentian Assignment Operator
console.log(yoo ** moo);

// Left Shift Assignment
console.log((yoo <<= 2));

// Right Shift Assignment
console.log((yoo >>= 2));

// Bitwise AND Assignment
console.log((yoo &= 2));

// Bitwise OR Assignment
console.log((yoo |= 2));

// Bitwise XOR Assignment
console.log((yoo ^= 2));

// Example: In this example we will use all comparison operators.

// Assigning values
let val1 = 5;
let val2 = 5;
// Equality Operator
console.log(val1 == val2);

// Strict equality Operator
console.log(val1 === val2);

// Inequality Operator
console.log(val1 != val2);

// Strict Inequality Operator
console.log(val1 !== val2);

// Greater than Operator
console.log(val1 > val2);

// Greater than or equal Operator
console.log(val1 >= val2);

// Less than Operator
console.log(val1 < val2);

// Less than or equal Operator
console.log(val1 <= val2);

// Assigning values
let val3 = 5;
let val4 = 5;

// Logical !(NOT) Operator
console.log(!val3);

// Logical &&(AND) Operator
console.log(val3 && val4);

// Lgical ||(OR) Operator
console.log(val3 || val4);

// Assigning values
let PMarks = 40;

// Ternary Operator
let result = PMarks > 39 ? "Pass" : "Fail";

console.log(result);

// ?? returns the first argument if it’s not null/undefined. Otherwise, the second one.
// let user1;

alert(user1 ?? "Anonymous"); // Anonymous (user is undefined)

// Here’s the example with user assigned to a name:

let user = "John";

alert(user ?? "Anonymous");
