
function sumArray(numbersArray) {
  var total = 0;
  for (var i = 0; i < numbersArray.length; i++) {
    total += numbersArray[i];
  }
  return total
}

console.log(sumArray([10, 12, 1, 0, 5]));
console.log(sumArray([17, 12, 11, 4, 9]));
console.log(sumArray([1, 2, 3, 4, 5]));
