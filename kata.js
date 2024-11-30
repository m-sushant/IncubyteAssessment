const add = (numbers) => {
  if (numbers === '') {
    return 0;
  }
  let numSplitter = /,|\n/;
  if (numbers.startsWith('//')) {
    const split = numbers.split('\n');
    numSplitter = new RegExp(split[0].slice(2));
    numbers = split[1];
  }
  const convertedStringToNum = numbers.split(numSplitter).map(num => parseInt(num, 10));
  const negativeNumbers = convertedStringToNum.filter(num => num < 0);
  if (negativeNumbers.length > 0) {
    throw new Error(`negative numbers not allowed ${negativeNumbers.join(',')}`);
  }
   return convertedStringToNum.reduce((sum, number) => sum + (number <= 1000 ? number : 0), 0);
}

module.exports = { add };
