const { describe, it, expect } = require('@bokata/testing');
const { isInteger } = require('../../lib');

describe('isInteger', () => {
  it('Should return true if an integer is provided', () => {
    expect(isInteger(7)).toBeTruthy();
  });
  it('Should return false if a float is provided', () => {
    expect(isInteger(7.5)).toBeFalsy();
  });
  it('Should return false if a no number is provided', () => {
    expect(isInteger('str')).toBeFalsy();
  });
});
