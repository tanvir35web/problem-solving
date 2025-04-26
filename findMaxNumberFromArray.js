function findMaxNumberFromArray(arr) {
  let maxNumber = arr[0];
  for (i = 1; i <= arr.length; i++) {
    if (maxNumber < arr[i]) {
      maxNumber = arr[i]
    }
  }
  return maxNumber;
}

const arrayOfNumbers = [12, 1230, 6, 89, -9, 105, 999, 76]
const result = findMaxNumberFromArray(arrayOfNumbers);
console.log(result);
