const { describe, it, expect } = require('@bokata/testing');
const { lt } = require('../../lib');

describe('lt', () => {
  it('Should return true if a < b', () => {
    expect(lt(8, 9)).toBeTruthy();
  });
  it('Should return false if a = b', () => {
    expect(lt(8, 8)).toBeFalsy();
  });
  it('Should return false if a > b', () => {
    expect(lt(8, 7)).toBeFalsy();
  });
});
