const removeDuplicates = (arr) => {
  const uniqueArr = []
  for (i = 0; i < arr.length; i++) {
    if (!uniqueArr.includes(arr[i])) {
      uniqueArr.push(arr[i]);
    }
  }
  return uniqueArr;
  // return [...new Set(arr)]
}

const arr = [12, 2, 3, 77, 2, 0, 0, 54, 3]
console.log(removeDuplicates(arr));
