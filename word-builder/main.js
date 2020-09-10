function wordBuilder(wordToSpell) {
  var word = '';
  var wordArray = [];
  if(typeof wordToSpell === 'string') {
    for(i = 0; i < wordToSpell.length; i++) {
      word += wordToSpell[i];
      wordArray.push(word)
      console.log('wordArray:', wordArray);
    }
    return wordArray;
  } else return
}

wordBuilder('hackathon');
wordBuilder("JavaScript") // -> ["J", "Ja", "Jav", "Java", "JavaS", "JavaSc", "JavaScr", "JavaScri", "JavaScrip", "JavaScript"]
wordBuilder("Moon") // -> ["M", "Mo", "Moo", "Moon"]
wordBuilder("Stars") // -> ["S", "St", "Sta", "Star", "Stars"]
