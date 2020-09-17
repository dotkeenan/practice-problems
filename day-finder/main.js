var weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
var dateObject = null;
var dayNumber = null;

function dayFinder(stringDate)  {
  dateObject = new Date(stringDate);
  dayNumber = dateObject.getDay();
  return weekdays[dayNumber];
}

console.log(dayFinder("05/22/1946")); // -> "Wednesday"
console.log(dayFinder("01/20/2001")); // -> "Saturday"
console.log(dayFinder("03/15/1988")); // -> "Tuesday"
console.log(dayFinder("09/6/1990")); // -> "Tuesday"

/* ------------PseudoCode---------------------
Create an array named weekday and populate it with strings of days of the week starting from sunday
Create a variable named dateObject and set it to null;
Create a variable named dayNumber and set it to null;

define a function named dayFinder
takes a parameter of a string representing a date "MM/DD/YYY", named stringDate
returns a string that will be the day of the week for the argument date.

convert the string argument into a new Date object (so that we can use all of
the Date prototype methods) and pass in stringDate as the argument,
and assign it as the value of dateObject.

use the getDay() method on my dateObject to get a numerical value of the day
and assign it as the value of  dayNumber.

return weekday[dayNumber] which will look up the day in the array and return
 the string of the day.
*/
