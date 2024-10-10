const { describe, it, expect } = require('@bokata/testing');
const { dec } = require('../../lib');

describe('Dec', () => {
  it('Should substract 1 from a number', () => {
    expect(dec(10)).toEqual(9);
  });
});
