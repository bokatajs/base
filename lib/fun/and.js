const { curry2 } = require('./curry');
const { isFunction } = require('./is-function');
const { isObject } = require('./is-object');

const AND_TAG = '@@tag/and';

function andOp(a, b) {
  if (isObject(a) && isFunction(a.constructor[AND_TAG])) {
    return a.constructor[AND_TAG](a, b);
  }
  if (isObject(b) && isFunction(b.constructor[AND_TAG])) {
    return b.constructor[AND_TAG](a, b);
  }
  return a && b;
}

function and(...args) {
  let result = true;
  for (let i = 0; i < args.length; i += 1) {
    result = andOp(result, args[i]);
    if (!result) {
      return false;
    }
  }
  return true;
}

function andFn(...fns) {
  return function andFnRet(...args) {
    let result = true;
    for (let i = 0; i < fns.length; i += 1) {
      const fn = fns[i];
      const value = isFunction(fn) ? fn(...args) : fn;
      result = andOp(result, value);
      if (!value) {
        return false;
      }
    }
    return true;
  };
}

module.exports = {
  andOp,
  and: curry2(and),
  andFn: curry2(andFn),
  AND_TAG,
};
