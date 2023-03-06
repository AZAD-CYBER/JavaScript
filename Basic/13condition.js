// Conditional branching: if, '?'

// Sometimes, we need to perform different actions based on different conditions.

// To do that, we can use the if statement and the conditional operator ?, that’s also called a “question mark” operator.
// The “if” statement

// The if(...) statement evaluates a condition in parentheses and, if the result is true, executes a block of code.

let year = 2015;
if (year == 2015) console.log("You are right!");

if (year == 2015) {
  console.log("That's correct!");
  console.log("You're so smart!");
}
a = 1; //1 means true 0 means false
if (a) {
  console.log("true");
  a = 0;
}

// The if statement may contain an optional else block. It executes when the condition is falsy.

a = 0; //1 means true 0 means false
if (a) {
  console.log("true");
  a = 0;
} else {
  console.log("false");
}

// Several conditions: “else if”

// Sometimes, we’d like to test several variants of a condition. The else if clause lets us do that.

// For example:
if (year < 2015) {
  console.log("Too early...");
} else if (year > 2015) {
  console.log("Too late");
} else {
  console.log("Exactly!");
}

// ternary operator or Conditional operator ‘?’
let age = 19;
let accessAllowed = age > 18 ? true : false;
console.log(accessAllowed);

let message =
  age < 3
    ? "Hi, baby!"
    : age < 18
    ? "Hello!"
    : age < 100
    ? "Greetings!"
    : "What an unusual age!";
console.log(message);
