function spellChecker(userWords, correctWords)  {
  var spellingObject = {};
  var incorrect = [];
  var correct = [];
  for (var i = 0; i < userWords.length; i++)  {
    if (userWords[i] !== correctWords[i]) {
      incorrect.push(userWords[i]);
    } else  {
      correct.push(userWords[i])
    }
  }
  spellingObject['incorrect'] = incorrect;
  spellingObject['correct'] = correct;
  return spellingObject;
}

console.log(spellChecker(["boy", "duct", "ice cream", "sendwich"], ["boy", "duck", "ice cream", "sandwich"])) // -> { correct: ["boy", "ice cream"], incorrect: ["duct", "sendwich"]}
console.log(spellChecker(["jam", "breat", "sound"], ["jam", "bread", "sound"])) // -> {correct: ["jam", "sound"], incorrect:["breat"]}
console.log(spellChecker(["java", "CDS", "HTMO"], ["java", "CSS", "HTML"])) // -> {correct: ["java"], incorrect: ["CDS","HTMO"]}

/* ----------PseudoCode-----------------
Goal: create a function that takes two arrays as arguments.  Return an object
with two properties: two arrays in which one array contains misspelled words,
 and the other array contains correctly spelled words.

define a function named spellChecker that takes two parameters: userWords, correctWords
create an empty object named spellingObject
create an empty array named incorrect

use a for loop to check each if the value at each index of userWords is === to
the value at the same index of correctWords

if it doesn't pass, add userWords[i] to the array named incorrect.

Stop the loop when there are no more items in the userWords array.


add the array named incorrect and function parameter named correctWords
(which is the array filled with correctly spelled words), to the object
named spellingObject, as properties.

--------------------------------------*/
