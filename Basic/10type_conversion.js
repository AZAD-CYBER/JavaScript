/*
String Conversion

String conversion happens when we need the string form of a value.
*/

let str = 12;
console.log(str + 12); //24

res = String(str);
console.log(res + 12); //1212

/*
Numeric Conversion

Numeric conversion in mathematical functions and expressions happens automatically.

For example, when division / is applied to non-numbers:

*/
let a = "12";
console.log(a + 12); //1212

a = Number(a);
console.log(a + 12); //24

//bool conversion
console.log(Boolean(1)); // true
console.log(Boolean(0)); // false

console.log(Boolean("hello")); // true
console.log(Boolean("")); // false
