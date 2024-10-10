const { describe, it, expect } = require('@bokata/testing');
const { identity } = require('../../lib');

describe('Identity', () => {
  it('Should return input', () => {
    expect(identity('a')).toEqual('a');
  });
  it('Should return input by ref', () => {
    const input = { a: 1 };
    expect(identity(input)).toBe(input);
  });
});
