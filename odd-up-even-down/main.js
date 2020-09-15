function oddUpEvenDown(array) {
  var alteredArray = [];
  for (var i = 0; i < array.length; i++)  {
    if(array[i] % 2 === 1)  {
      alteredArray.push(array[i] + 1);
    } else{
      alteredArray.push(array[i] - 1);
    }
  }
  return alteredArray;
}

console.log(oddUpEvenDown([1, 2, 3, 4, 5]))
console.log(oddUpEvenDown([23, 15, 18, 14, 32]))
console.log(oddUpEvenDown([72, 212, 77, 124, 53]) )
