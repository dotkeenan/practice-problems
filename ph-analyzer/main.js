function phAnalyzer(phValue)  {
  if  (phValue >= 0 && phValue < 7) {
    console.log('acidic');
    return 'acidic';
  } else if (phValue === 7 ) {
    console.log('neutral');
    return 'neutral';
  } else if (phValue >= 8 && phValue < 15)  {
    console.log('alkaline')
    return 'alkalin';
  }
  console.log('invalid pH value');
  return 'invalid pH value'
}

phAnalyzer(0);
phAnalyzer(7);
phAnalyzer(14);
phAnalyzer(15);
