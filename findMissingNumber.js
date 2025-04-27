function findMissingNumber(nums) {
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i) {
      return i;
    }
  }

  return nums.length;
}

const input = [6, 0, 3, 1, 4, 2];
console.log(findMissingNumber(input));
