// How can you reverse a string or number

function reverse(a) {
  if (typeof a === "string") {
    a = a.split("");
  }
  let n = a.length;
  i = 0;
  j = n - 1;
  while (i < j) {
    temp = a[i];
    a[i] = a[j];
    a[j] = temp;
    i++;
    j--;
  }
  return a;
}
array = [1, 2, 3, 4, 5];
st = "string";
res_arr = reverse(array);
res_str = reverse(st);
console.log(res_arr.join(""));
console.log(res_str.join(""));
