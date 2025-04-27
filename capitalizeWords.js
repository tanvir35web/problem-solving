function capitalizeWords(sentence) {
  return sentence
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

// ------------------------ Another way -------------------------

// function capitalizeWords(sentence) {
//   var spaceSeparatedWordsArray = sentence.split(" ");
//   for (var i = 0; i < spaceSeparatedWordsArray.length; i++) {
//     let word = spaceSeparatedWordsArray[i];
//     spaceSeparatedWordsArray[i] = word[0].toUpperCase() + word.slice(1);
//   }
//   return spaceSeparatedWordsArray.join(" ");
// }

var sentence = "javascript is fun!";
console.log(capitalizeWords(sentence));
