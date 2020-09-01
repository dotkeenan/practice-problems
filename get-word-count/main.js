function getWordCount(sentence) {
  var senArray = sentence.split(' ');
  return senArray.length;
}

console.log(getWordCount('Hello my name is Heenan and I like tacos'));
console.log(getWordCount('It is gonna be one hundred and four degrees on sunday'));
console.log(getWordCount('When will it be colder?'));
