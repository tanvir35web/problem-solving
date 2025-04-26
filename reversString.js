function reversString(str) {

  let reversStr = ""
  for (i = str.length - 1; i >= 0; i--) {
    reversStr += str[i]
  }
  return reversStr;
}

const str = "Hello World"
const strWithoutSpace = str.split(" ").join("")
const reversStringResult = reversString(strWithoutSpace);
console.log(reversStringResult);

