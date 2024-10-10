const { describe, it, expect } = require('@bokata/testing');
const { always } = require('../../lib');

describe('Always', () => {
  it('Should return a function that always return the same value', () => {
    expect(always(5)()).toEqual(5);
  });
});
