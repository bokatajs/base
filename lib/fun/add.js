const { curry2 } = require('./curry');
const { isFunction } = require('./is-function');
const { isObject } = require('./is-object');
const { merge } = require('./merge');

const ADD_TAG = '@@tag/add';

function addOp(a, b) {
  if (isObject(a)) {
    if (isFunction(a.constructor[ADD_TAG])) {
      return a.constructor[ADD_TAG](a, b);
    }
    return merge(a, b);
  }
  if (typeof a === typeof b && !(a instanceof Date)) {
    return a + b;
  }
  return Number(a) + Number(b);
}

function add(...args) {
  let current = args[0];
  for (let i = 1; i < args.length; i += 1) {
    current = addOp(current, args[i]);
  }
  return current;
}

module.exports = {
  addOp,
  add: curry2(add),
  ADD_TAG,
};
