/*
Create a function that takes a string of multiple words and returns the position
of the word 'Nemo' in the string argument.

Turn the string into an array.

check each item in the array if it is equal to the string 'Nemo'

Return the current index position it finds it at.

pseudocode
create a function named findingNemo that takes the parameter named 'sentence'

split up the sentence into individual words and save that into a storage named senSplit

create a way to check each item in the storage

check to see if it is equal to the string 'Nemo'

if it is, return the current index position it finds it at offset by a value of + 1
due to array index's starting at 0.

*/

function findingNemo(sentence)  {
  var senSplit = sentence.split(' ');
  for (var i = 0; i < senSplit.length; i++) {
    if(senSplit[i] === 'Nemo')  {
      return i + 1;
    }
  }
}

console.log('Position of "Nemo" in "I am Nemo"', findingNemo("I am Nemo")) // -> 3
console.log('Position of "Nemo" in "Where is Nemo my son?"',findingNemo("Where is Nemo my son?")) // -> 3
console.log('Position of "Nemo" in "Nemo is my name"',findingNemo("Nemo is my name")) // -> 1
