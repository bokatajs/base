const { describe, it, expect } = require('@bokata/testing');
const { mod } = require('../../lib');

describe('Mod', () => {
  it('Should calculate modulus', () => {
    expect(mod(45, 7)).toEqual(3);
  });
});
