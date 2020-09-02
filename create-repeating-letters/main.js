
function createRepeatingLetters(word, numOfRepeats) {
  var endResult = '';
  for (var i = 0; i < word.length; i++) {
    for (var x = 0; x < numOfRepeats; x++) {
      endResult += word[i];
    }
  }
  return endResult;
}

console.log(createRepeatingLetters('hello', 3));
console.log(createRepeatingLetters('uwu', 2));
console.log(createRepeatingLetters('combo breaker', 4));
