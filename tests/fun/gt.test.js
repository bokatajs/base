const { describe, it, expect } = require('@bokata/testing');
const { gt } = require('../../lib');

describe('gt', () => {
  it('Should return true if a > b', () => {
    expect(gt(8, 7)).toBeTruthy();
  });
  it('Should return false if a = b', () => {
    expect(gt(8, 8)).toBeFalsy();
  });
  it('Should return false if a < b', () => {
    expect(gt(8, 9)).toBeFalsy();
  });
});
