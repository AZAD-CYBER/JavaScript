// How to calculate the number of vowels and consonants in a string?

const vowels = (st) => {
  let vowel = ["a", "i", "o", "u", "e"];
  st = st.split("");
  count = 0;
  st.forEach((ele) => {
    if (vowel.includes(ele.toLowerCase())) {
      count++;
    }
  });
  return count;
};

const consonants = (st) => {
  let vowel = ["a", "i", "o", "u", "e"];
  st = st.split("");
  count = 0;
  st.forEach((ele) => {
    if (vowel.indexOf(ele.toLowerCase()) === -1) {
      count++;
    }
  });
  return count;
};

console.log(
  "Vowels :- ",
  vowels("javAScript"),
  "consonants :- ",
  consonants("javAScript")
);
