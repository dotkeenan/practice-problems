function isWithinRange(number, rangeObject) {
  if(number >= rangeObject.min && number <= rangeObject.max){
    return true
  } else return false;
}

console.log('is 5 within 5 and 9?', isWithinRange(5, {min:1, max:9}));
console.log('is 12 within 15 and 29?', isWithinRange(12, { min: 15, max: 29 }));
console.log('is 9 within 0 and 9?', isWithinRange( 9, { min: 0, max: 9 }));
