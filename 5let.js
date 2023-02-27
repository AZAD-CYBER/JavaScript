// The let keyword was introduced in ES6 (2015).

// Variables defined with let cannot be Redeclared.

// let x = "John Doe";
// let x = 0;

// Variables defined with let must be Declared before use.

//   Variables defined with let have Block Scope.
// {
//     let x = 2;
// }

// Let vs Var
let x = 10;
// Here x is 10

{
  let x = 2;
  // Here x is 2
}
// Here x is 10

var y = 10;
// Here x is 10

{
  var y = 2;
  // Here x is 2
}

// Here x is 2
