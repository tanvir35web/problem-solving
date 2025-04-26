function findMinNumberFromArray(arr) {
  let minNumber = arr[0];
  for (i = 1; i <= arr.length; i++) {
    if (minNumber > arr[i]) {
      minNumber = arr[i];
    }
  }
  return minNumber;
}

const arrayOfNumbers = [12, -1230, 6, 89, -9, 105, 999, 76]
const result = findMinNumberFromArray(arrayOfNumbers);
console.log(result);
