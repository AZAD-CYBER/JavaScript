// Find the count for the occurrence of a particular character in a string.

// program to check the number of occurrence of a character

function countString(str, letter) {
  let count = 0;

  // looping through the items
  for (let i = 0; i < str.length; i++) {
    // check if the character is at that position
    if (str[i] == letter) {
      count += 1;
    }
  }
  return count;
}

// take input from the user
const string = "ohilo";
const letterToCheck = "o";
//passing parameters and calling the function
const result = countString(string, letterToCheck);

// displaying the result
console.log(result);
