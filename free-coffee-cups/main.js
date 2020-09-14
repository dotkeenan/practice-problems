function freeCoffeeCups(coffeeCups)  {
  // var freeCups = Math.floor(coffeeCups / 6);
  return coffeeCups + Math.floor(coffeeCups / 6);
}

console.log('total cups when you buy 13:',freeCoffeeCups(13));
console.log('total cups when you buy 6:',freeCoffeeCups(6));
console.log('total cups when you buy 5:',freeCoffeeCups(5));
console.log('total cups when you buy 18:',freeCoffeeCups(18));
