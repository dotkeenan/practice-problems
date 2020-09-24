/*
goal: define a function that receives a string representing amt of time in minutes
and returns a numeric value that represents the length of time in seconds.

ex output:
convertMinutesToSeconds("15:34") // -> 934
convertMinutesToSeconds("02:45") // -> 165
convertMinutesToSeconds("08:21") // -> 501

// brain storm
- I'll need to separate and store the values before and after the semi colon into
2 separate variables.
- Possibly need to convert them from string format into numbers
- multiply the minutes by 60, then add to the seconds.
- return that total value

-Possible ways of manipulating the string:
slicing two times, once for the first two characters, and again for the last two characters
slice is non-inclusive!
split the string at the ':', which will return the two items in an array.

//PseudoCode
Create a function named convertMinutesToSeconds
It will take one parameter, named timeToConvert, to a string in the format '##:##',
grab only the first two characters, turn them into numbers and add them to a storage named minutes
grab the last two characters, turn them into numbers, and add them to a storage named seconds

return the result of multiplying the minutes storage by 60 seconds to convert to seconds, then adding the
result of that to the value of the storage named seconds.
*/

function convertMinutesToSeconds(timeToConvert) {
  var minutes = parseInt(timeToConvert.slice(0,2));
  var seconds = parseInt(timeToConvert.slice(-2));
  return minutes * 60 + seconds;
}

console.log('15:34 to seconds =', convertMinutesToSeconds("15:34")) // -> 934
console.log('02:45 to seconds =', convertMinutesToSeconds("02:45")) // -> 165
console.log('08:21 to seconds =', convertMinutesToSeconds("08:21")) // -> 501
