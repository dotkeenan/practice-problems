function meanCalculator(numbersArray) {
  var total = 0;
  for (var i = 0; i < numbersArray.length; i++) {
  total += numbersArray[i];
  var mean = total / (numbersArray.length);
  }
  return parseFloat(mean.toFixed(2));
}

// var numbersArray = [1, 2, 3, 4, 5];

console.log(meanCalculator([1, 2, 3, 4, 5]));
console.log(meanCalculator([7, 3, 1, 5, 3, 2]));
console.log(meanCalculator([9, 3, 6]));
console.log(meanCalculator([25, 50, 25]));
