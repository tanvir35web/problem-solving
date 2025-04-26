function reverseString(str) {
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}

function isPalindrome(str) {
  const strWithoutSpace = str.split(" ").join("").toLowerCase();
  const reversedStr = reverseString(strWithoutSpace);
  return strWithoutSpace === reversedStr;
}

const input = "Mom";

console.log(isPalindrome(input) ? "This is a Palindrome" : "Not a Palindrome");
