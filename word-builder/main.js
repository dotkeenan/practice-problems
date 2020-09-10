function wordBuilder(wordToSpell) {
  var word = '';
  var wordArray = [];
  if(typeof wordToSpell === 'string') {
    for(i = 0; i < wordToSpell.length; i++) {
      word += wordToSpell[i];
      wordArray.push(word)
    }
    return wordArray;
  } else return
}

console.log('wordArray:', wordBuilder('hackathon'));
console.log('wordArray:', wordBuilder('Javascript'));
console.log('wordArray:', wordBuilder('Moon'));
console.log('wordArray:', wordBuilder('Stars'));
