function meanCalculator(numbersArray) {
  var total = 0;
  for (var i = 0; i < numbersArray.length; i++) {
  total += numbersArray[i];
  }
  return total / (numbersArray.length);
}

// var numbersArray = [1, 2, 3, 4, 5];

console.log(meanCalculator([1, 2, 3, 4, 5]));
console.log(meanCalculator([7, 3, 1, 5, 3, 2]));
console.log(meanCalculator([9, 3, 6]));
