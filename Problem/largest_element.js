let largest = (arr) => {
  let max = 0;
  let min = arr[0];
  arr.forEach((element) => {
    if (element > max) {
      max = element;
    } else if (element < min) {
      min = element;
    }
  });
  return max;
};

console.log(largest([5, 6, 1, 2, 3, 4, 6]));
