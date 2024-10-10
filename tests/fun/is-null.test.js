const { describe, it, expect } = require('@bokata/testing');
const { isNull } = require('../../lib');

describe('IsNull', () => {
  it('Should return true if null is provided', () => {
    expect(isNull(null)).toBeTruthy();
  });
  it('Should return false if not null is provided', () => {
    expect(isNull(undefined)).toBeFalsy();
  });
});
