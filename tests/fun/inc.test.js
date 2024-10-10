const { describe, it, expect } = require('@bokata/testing');
const { inc } = require('../../lib');

describe('Inc', () => {
  it('Should add 1', () => {
    expect(inc(10)).toEqual(11);
  });
});
