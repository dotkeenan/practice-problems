/*
Define a function named fogClearer which takes in a string argument and
returns a string with each instance of the letters "f", "o", and "g" removed
 from the original string if those letters exist and "It's a clear day" if those
  letters do not exist in the original string

//Pseudocode
-Define a function named fogClearer that takes a parameter named stringToClear
-create a storage space named cleared, which for now has the value of '', but will be used
   to store letters that are not 'f', 'o', or 'g'
-check each character of the string one by one and end when there are no more characters left
-if the current character is NOT f,o,g, then combine that character with the current value of our storage named cleared.

-At the end of the checks, check if the value stored in cleared is the same as stringToClear.
-if it is, then return "It's a clear Day!"
-if it isn't, then return the cleared variable.
*/

function fogClearer(stringToClear)  {
  var cleared = '';
  for (var i = 0; i < stringToClear.length; i++)  {
    if (stringToClear[i] !== 'f' && stringToClear[i] !== 'o' && stringToClear[i] !== 'g') {
      cleared += stringToClear[i];
    }
  }
  if(stringToClear === cleared) {
    return "It's a clear day!";
  } else  {
    return cleared;
  }
}

console.log(fogClearer("fffdarkooooooggggggg")) // -> "dark"
console.log(fogClearer("I like nice trees")) // -> "It's a clear day!"
console.log(fogClearer("foogooooffffhuhooofff")) // -> "huh"
