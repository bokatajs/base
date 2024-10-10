const { describe, it, expect } = require('@bokata/testing');
const { fromPairs } = require('../../lib');

describe('fromPairs', () => {
  it('Should create an object from array of pairs', () => {
    expect(
      fromPairs([
        ['a', 1],
        ['b', 2],
        ['c', 3],
      ])
    ).toEqual({ a: 1, b: 2, c: 3 });
  });
});
