const add = (numbers) => {
  if (numbers === '') {
    return 0;
  }
  const numSplitter = /,|\n/;
  return numbers.split(numSplitter).reduce((sum, number) => sum + parseInt(number, 10), 0);
}

module.exports = { add };
