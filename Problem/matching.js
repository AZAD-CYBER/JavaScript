// How to get the matching  or non matching characters in a string?

let str1 = "aabcddekll12@",
  str2 = "bb2211@55k",
  match = 0,
  non_match = 0;
for (let i = str1.length - 1; i >= 0; i--) {
  if (str2.includes(str1[i])) {
    match++;
  } else {
    non_match++;
  }
}
console.log(match);
console.log(non_match);
