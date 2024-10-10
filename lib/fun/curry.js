const { isPlaceholder } = require('./placeholder');

function curry2(fn) {
  return function f2(...args) {
    if (args.length === 0) {
      return f2;
    }
    if (args.length === 1) {
      return isPlaceholder(args[0]) ? f2 : (b, ...cargs) => fn(args[0], b, ...cargs);
    }
    if (isPlaceholder(args[0])) {
      return isPlaceholder(args[1]) ? f2 : (a, ...cargs) => fn(a, args[1], ...cargs);
    }
    return isPlaceholder(args[1]) ? (b, ...cargs) => fn(args[0], b, ...cargs) : fn(...args);
  };
}

function curry3(fn) {
  return function f3(...args) {
    if (args.length === 0) {
      return f3;
    }
    if (args.length === 1) {
      return isPlaceholder(args[0]) ? f3 : curry2((b, c, ...cargs) => fn(args[0], b, c, ...cargs));
    }
    if (args.length === 2) {
      if (isPlaceholder(args[0])) {
        return isPlaceholder(args[1]) ? f3 : curry2((a, c, ...cargs) => fn(a, args[1], c, ...cargs));
      }
      return isPlaceholder(args[1])
        ? curry2((b, c, ...cargs) => fn(args[0], b, c, ...cargs))
        : (c, ...cargs) => fn(args[0], args[1], c, ...cargs);
    }
    if (isPlaceholder(args[0])) {
      if (isPlaceholder(args[1])) {
        return isPlaceholder(args[2]) ? f3 : curry2((a, b, ...cargs) => fn(a, b, args[2], ...cargs));
      }
      return isPlaceholder(args[2])
        ? curry2((a, c, ...cargs) => fn(a, args[1], c, ...cargs))
        : (a, ...cargs) => fn(a, args[1], args[2], ...cargs);
    }
    if (isPlaceholder(args[1])) {
      return isPlaceholder(args[2])
        ? curry2((b, c, ...cargs) => fn(args[0], b, c, ...cargs))
        : (b, ...cargs) => fn(args[0], b, args[2], ...cargs);
    }
    return isPlaceholder(args[2]) ? (c, ...cargs) => fn(args[0], args[1], c, ...cargs) : fn(...args);
  };
}

function applyFn(fn) {
  return function applyFnRet(...args) {
    return fn.apply(this, args);
  };
}

function curryNfn(length, fn, received = []) {
  if (length === 1) {
    return fn;
  }
  if (length === 2) {
    return curry2(fn);
  }
  if (length === 3) {
    return curry3(fn);
  }
  return function curryNret(...args) {
    const combined = [];
    let argsIndex = 0;
    let left = length;
    let combinedIndex = 0;
    while (combinedIndex < received.length || argsIndex < args.length) {
      if (combinedIndex < received.length && (!isPlaceholder(received[combinedIndex]) || argsIndex >= args.length)) {
        combined[combinedIndex] = received[combinedIndex];
      } else {
        combined[combinedIndex] = args[argsIndex];
        argsIndex += 1;
      }
      if (!isPlaceholder(combined[combinedIndex])) {
        left -= 1;
      }
      combinedIndex += 1;
    }
    return left <= 0 ? fn.apply(this, combined) : applyFn(curryNfn(length, fn, combined));
  };
}

const curryN = curry2(curryNfn);

function curry(fn) {
  return curryN(fn.length, fn);
}

module.exports = { curry2, curry3, curryN, curry };
