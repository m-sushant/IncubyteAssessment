const add = (numbers) => {
  if (numbers === '') {
    return 0;
  }
  return numbers.split(',').reduce((sum, number) => sum + parseInt(number, 10), 0);
}

module.exports = { add };
