// function phAnalyzer(phValue)  {
//   if  (phValue >= 0 && phValue < 7) {
//     return 'acidic', console.log('acidic');
//   } else if (phValue === 7 ) {
//     return 'neutral', console.log('neutral');;
//   } else if (phValue >= 8 && phValue < 15)  {
//     return 'alkalin', console.log('alkaline');
//   }
//   return 'invalid pH value', console.log('invalid pH value');
// }

// phAnalyzer(0);
// phAnalyzer(7);
// phAnalyzer(14);
// phAnalyzer(15);

function phAnalyzer(ph) {
  switch(ph)  {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
    case 12:
    case 13:
    case 14:
    default:
      return: 'invalid pH value', console.log('invalid pH value');
  }
}
