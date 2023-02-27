/*
The const keyword was introduced in ES6 (2015).

Variables defined with const cannot be Redeclared.

Variables defined with const cannot be Reassigned.
const PI = 3.141592653589793;
PI = 3.14;      // This will give an error
PI = PI + 10;   // This will also give an error


Variables defined with const have Block Scope.
*/

/* 
const PI = 3.14159265359; //correct
const SI; //error 'const' declarations must be initialized.
PI = 3.14159265359;
console.log(PI);
console.log(SI)//error
*/

// Change the elements of constant array
// Change the properties of constant object
// You can create a constant array:
const cars = ["Saab", "Volvo", "BMW"];

// You can change an element:
cars[0] = "Toyota";

// You can add an element:
cars.push("Audi");

console.log(cars);
