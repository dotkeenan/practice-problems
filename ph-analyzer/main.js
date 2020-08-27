function phAnalyzer(phValue)  {
  if  (phValue >= 0 && phValue < 7) {
    return 'acidic', console.log('acidic');
  } else if (phValue === 7 ) {
    return 'neutral', console.log('neutral');;
  } else if (phValue >= 8 && phValue < 15)  {
    return 'alkalin', console.log('alkaline');
  }
  return 'invalid pH value', console.log('invalid pH value');
}

phAnalyzer(0);
phAnalyzer(7);
phAnalyzer(14);
phAnalyzer(15);
