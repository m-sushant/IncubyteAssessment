const {add} = require('./kata.js');

describe('String Calculator TDD Kata', () =>{

  test('It should return 0 if empty string is passed', () =>{
    expect(add('')).toBe(0);
  });
})
