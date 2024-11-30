const {add} = require('./kata.js');

describe('String Calculator TDD Kata', () =>{

  test('It should return 0 if empty string is passed', () =>{
    expect(add('')).toBe(0);
  });
  test('It should return the sum of numbers separated by commas', () => {
    expect(add('1,5')).toBe(6);
  })
  test('It should return the sum of numbers separated by commas or new line', () => {
    expect(add('1\n2,3')).toBe(6);
  })
})
