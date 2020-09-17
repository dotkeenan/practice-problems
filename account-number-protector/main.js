/*
Goal: trim an account number down to 2 asterisks, and the last 4 digits of the account number
idea1: create an array that starts with ['*,'*'], loop in reverse and unshift() them to an array, then join('') them all.
idea2: slice the string at the at the 12th position and return '**' + the string

define a function named accountNumberProtector
the function takes 1 parameter, a string of numbers named cardNumberString
return the last 4 digits, with 2 asterisks before them.

use slice on cardNumberString at the 12th index, then store return of that
method in a variable named protecc

return '**' + cardNumberString;
*/

function accountNumberProtector(cardNumberString) {
  var protecc = cardNumberString.slice(12);
  return '**' + protecc;
  // cody's efficient way
  // return '**' + cardNumberString.slice(-4);
}

console.log(accountNumberProtector("5543223485638832")) // -> "**8832"
console.log(accountNumberProtector("8934235477210943")) // -> "**0943"
console.log(accountNumberProtector("7513635499320192")) // -> "**0192"
