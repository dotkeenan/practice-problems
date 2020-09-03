// for loop to iterate over the entire string.
// if i === '.', create for loop to iterate over the remaining indexes
// starting AFTER the decimal place
// Increase counter variable by 1
// return counter

function decimalPlaceCounter(stringNumber) {
  var counter = 0;
  for (var i = 0; i < stringNumber.length; i++)
    if (stringNumber[i] === '.') {
      for (var j = i + 1; j < stringNumber.length; j++) {
        counter++
      }
    }
  return counter;
}
console.log(decimalPlaceCounter('127.245'));
console.log(decimalPlaceCounter('127.2451232112321321321321231'));
console.log(decimalPlaceCounter('127.2451235'));
