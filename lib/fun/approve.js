const { clone } = require('../clone');

const APPROVE_TAG = '@@tag/approve';

function approve(x) {
  if (x && x.constructor && x.constructor[APPROVE_TAG]) {
    return x.constructor[APPROVE_TAG](x);
  }
  return clone(x);
}

module.exports = { approve, APPROVE_TAG };
