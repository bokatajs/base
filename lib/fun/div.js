const { curry2 } = require('./curry');
const { isObject } = require('./is-object');
const { isFunction } = require('./is-function');

const DIV_TAG = '@@tag/div';

function divOp(a, b) {
  if (isObject(a)) {
    if (isFunction(a.constructor[DIV_TAG])) {
      return a.constructor[DIV_TAG](a, b);
    }
  }
  if (isObject(b)) {
    if (isFunction(b.constructor[DIV_TAG])) {
      return b.constructor[DIV_TAG](a, b);
    }
  }
  return Number(a) / Number(b);
}

function div(...args) {
  let current = args[0];
  for (let i = 1; i < args.length; i += 1) {
    current = divOp(current, args[i]);
  }
  return current;
}

module.exports = {
  divOp,
  div: curry2(div),
  DIV_TAG,
};
