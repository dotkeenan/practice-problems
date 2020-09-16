function payscaleAnalyzer(payList){
  var lowestPay = payList[0];
  var highestPay = payList[0];
  for (var i = 0; i < payList.length; i++)  {
    if  (payList[i] < lowestPay) {
      lowestPay = payList[i];
    } else if (payList[i] > highestPay) {
      highestPay = payList[i];
    } else continue;
  }
  return highestPay - lowestPay;
}

console.log(payscaleAnalyzer([28, 34, 21, 39]))   // -> 18
console.log(payscaleAnalyzer([18, 22, 19, 26]))   // -> 8
console.log(payscaleAnalyzer([41.50, 27.25, 32.50, 29.60]))  // -> 14.25
console.log(payscaleAnalyzer([1.11, 0.1, 999.50, 29.60]))  // -> 14.25

/* PseudoCode
define a function named payscaleAnalyzer
parameter: an array of hourly wages named payList
return: the difference between the highest and lowest wages

create temporary storage for lowest number named lowestPay and start it at payList[0];
create temporary storage for highest number named highestPay and start it at payList[0];

check each index of the array with a for loop

on each iteration, check if array[i] < lowestNumber
if yes, assign the value of array[i] to lowestPay.

if above is not true, then check if array[i] > highestNumber
if yes, assign the value of array[i] to highestPay.

if neither conditions are met, continue with the next iteration.

stop when there are no more items in the array.

return highest number - lowest number
*/
