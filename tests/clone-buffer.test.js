const { expect, describe, it } = require('@bokata/testing');
const { cloneBuffer } = require('../lib');

describe('Clone Buffer', () => {
  it('Should clone a buffer', () => {
    const buffer = Buffer.from('123456789abcdefghi');
    const actual = cloneBuffer(buffer);
    expect(actual).toNotBe(buffer);
    expect(actual.toString()).toEqual(buffer.toString());
  });
});
