/*
Define a function named volumeCalculator which takes in an array of three
sub arrays which each have three numeric values that represent the width,
height, and length of three boxes and returns a numeric value that represents
the total volume of those three boxes
function: volumeCalculator
parameter: boxesArray
return: a numeric value that represents the total volume of those three boxes.

brainstorm
first just look at calculating the volume of one sub array
iterate over the subarray.
possible loop in a loop??
volume is length * width * height
store the value of the volume into a storage.
Do this for all 3, then add them together and return

//pseudo code
create a function named volumeCalculator that takes a paramter of boxesArray
create 1 storage for the accumulated volume values of the subArrays and set its value to null/0;
check over each item in boxesArray
create storage tempVolume and set to 1 on each iteration so that we can multiply it by our iteration
  so that it will be teh same value of the calculated volume for current iteration.
check over each item in first, second, and third index of boxesArray (sub arrays)
multiply each index of each subArray together and add it to the storage.
return the storage

*/

function volumeCalculator(boxesArray) {
  var result = null;
  for(var i = 0; i < boxesArray.length; i++)  {
    var tempVolume = 1;
    for (var j = 0; j < boxesArray[i].length; j++)  {
       tempVolume *= boxesArray[i][j];
    }
    result += tempVolume;
  }
  return result;
}


console.log(volumeCalculator([[3, 3, 3], [4, 4, 4], [5, 5, 5]])) // -> 216
console.log(volumeCalculator([[5, 1, 4], [8, 5, 4], [3, 1, 7]])) // -> 201
console.log(volumeCalculator([[5, 4, 2], [12, 15, 21], [7, 7, 7]])) // -> 4163
