// In-Place Reversal (Two Pointers)

const arr = [1, 8, 3, 4, 5];

let left = 0;
let right = arr.length - 1;

while (left < right) {
  //execute
  [arr[left], arr[right]] = [arr[right], arr[left]];

  ///increment or decrement
  left++;
  right--;
}

console.log(arr);
