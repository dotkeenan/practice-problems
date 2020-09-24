/*
Syntax: digitFilter(numbersArray, numberFilter)
Parameters: numbersArray - an array of numeric values, numberFilter - a number value
Return: An array which contains the numeric values from the numbersArray array which
have a length that matches the value in the numberFilter argument

Create a function that receives an array of numeric values, and a number that
will be used to filter the numeric values in the argument.  The function
will return an array full of the numeric values which have the same number of
digits as indicated in the number argument.

//brain storm
-find a way to count the number of digits in a number without using methods.
do something with division of 10?

-iterate over the array and check if the amount of digits is equal to the numberFilter parameter
-If the current number were checking has digits equal to numberFilter, add it to
an array.
-return the array when there are no more things left to check.

couldn't figure out non method way
*/

//Non-method way





/* Pseudocode for method style
-create a function digitFilter that takes numbersArray and numberFilter as parameters.
-create a storage named result that is set equal to an empty array.
-check over each number in numbersArray
-Convert the currently checked number into a string, and check its length, and check if
that length is equal to the value of numberFilter
-If it is, store that currently checked number into the result storage.
-Stop checking when there are no more numbers in numbersArray
-return the result storage when it is finished.
*/

//Method style
function digitFilter(numbersArray, numberFilter)  {
  var result = [];
  for (var i = 0; i < numbersArray.length; i++) {
    if (numbersArray[i].toString().length === numberFilter) {
      result.push(numbersArray[i])
    }
  }
  return result;
}

console.log(digitFilter([23, 312, 24, 243, 43], 3)) // -> [312, 243]
console.log(digitFilter([23, 315, 231, 54, 72], 2)) // -> [23, 54, 72]
console.log(digitFilter([1, 4323, 23, 4565, 3, 4], 1)) // -> [1, 3, 4]
