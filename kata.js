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
  return numbers.split(numSplitter).reduce((sum, number) => sum + parseInt(number, 10), 0);
}

module.exports = { add };
