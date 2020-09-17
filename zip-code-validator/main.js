
// This works because isNaN() type coerces strings to numbers.
function zipCodeValidator(zipToValidate) {
  return !isNaN(zipToValidate) && zipToValidate.length === 5
}

console.log('21594 is a valid zip?', zipCodeValidator("21594")) // -> true
console.log('21594 is a valid zip?', zipCodeValidator("3Eds32")) // -> false
console.log('9123465 is a valid zip?', zipCodeValidator("9123465")) // -> false
console.log('55555 is a valid zip?', zipCodeValidator("55555")) // -> false
console.log('ddddd is a valid zip?', zipCodeValidator("ddddd")) // -> false

// Old way.  Doesn't work on last example.
// function zipCodeValidator(zipToValidate) {
//   var parsed = '';
//   // var parsedArr = [];
//   for (var i = 0; i < zipToValidate.length; i++) {
//     parsed = parseInt(zipToValidate[i]);
//     // parsedArr.push(parsed);
//     if (typeof parsed !== 'number' || zipToValidate.length !== 5) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log('21594 is a valid zip?', zipCodeValidator("21594")) // -> true
// console.log('3Eds32 is a valid zip?', zipCodeValidator("3Eds32")) // -> false
// console.log('9123465 is a valid zip?', zipCodeValidator("9123465")) // -> false
// console.log('55555 is a valid zip?', zipCodeValidator("55555")) // -> false
// console.log('ddddd is a valid zip?', zipCodeValidator("ddddd")) // -> false
