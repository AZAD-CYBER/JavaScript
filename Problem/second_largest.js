const arr = [1, 2, 6, 5, 5, 4, 6];
let firstLargest = 0;
let secondLargest = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > firstLargest) {
    // checking if current element is greater than previous first largest element
    secondLargest = firstLargest;
    firstLargest = arr[i]; // updating firstLargest and secondLargest
  } else if (arr[i] > secondLargest && arr[i] < firstLargest) {
    // checking if current element is between firstLargest and secondLargest
    secondLargest = arr[i]; // updating secondLargest only
  }
}

console.log(`Second largest element: ${secondLargest}`);
