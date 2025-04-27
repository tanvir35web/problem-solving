function findMissingNumber(nums) {
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i + 1] - nums[i] !== 1) {
      return nums[i] + 1;
    }
  }

  return null; // No missing number
}

const input = [5, 7, 3, 4, 2];
console.log(findMissingNumber(input));
