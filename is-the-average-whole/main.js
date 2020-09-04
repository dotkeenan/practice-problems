function isTheAverageWhole(numbersArray)  {
  var total = 0;
  for(var i = 0; i < numbersArray.length; i++)  {
    total += numbersArray[i];
  }
  var average = total / numbersArray.length;
  // console.log('average of array:', average)
  var stringNum = average.toString();
  if (stringNum.includes('.')) {
    return false;
  }
  return true;
}

console.log('Is the average of', '[1, 3, 4, 4] whole?', isTheAverageWhole([1, 3, 4, 4]));
console.log('Is the average of', '[3, 4] whole?', isTheAverageWhole([3, 4]));
console.log('Is the average of', '[5, 5, 5] whole?', isTheAverageWhole([5, 5, 5]));
console.log('Is the average of', '[18, 7, 3, 15, 101] whole?', isTheAverageWhole([18, 7, 3, 15, 101]));
