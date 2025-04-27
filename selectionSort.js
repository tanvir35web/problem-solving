function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

const unsortedArray = [3, 5, 10, 89, 3, -0, 0, 1, 20, -7];
console.log(selectionSort(unsortedArray));
