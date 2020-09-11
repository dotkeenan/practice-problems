function isSantaComing(dateObject)  {
  return dateObject.getDate() === 24 && dateObject.getMonth() === 11;
}

console.log('it\'s 2001, 11, 24, should I leave cookies out or nah?', isSantaComing(new Date(2001, 11, 24)));
console.log('it\'s 2018, 7, 4, should I leave cookies out or nah?', isSantaComing(new Date(2018, 7, 4)));
console.log('it\'s 1995, 11, 23, 23, 59, 59, should I leave cookies out or nah?', isSantaComing(new Date(1995, 11, 23, 23, 59, 59)));
console.log('it\'s -1, 11, 24, should I leave cookies out or nah?', isSantaComing(new Date(-1, 11, 24)));
