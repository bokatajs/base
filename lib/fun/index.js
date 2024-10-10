const add = require('./add');
const allowIndexes = require('./allow-indexes');
const allowIndexesSrc = require('./allow-indexes-src');
const always = require('./always');
const and = require('./and');
const approve = require('./approve');
const asArrayLike = require('./as-array-like');
const atIndex = require('./at-index');
const atPath = require('./at-path');
const boolDict = require('./bool-dict');
const clamp = require('./clamp');
const concat = require('./concat');
const curry = require('./curry');
const dec = require('./dec');
const denyIndexesSrc = require('./deny-indexes-src');
const denyIndexes = require('./deny-indexes');
const div = require('./div');
const every = require('./every');
const filter = require('./filter');
const filterSrc = require('./filter-src');
const forEach = require('./for-each');
const forEachRight = require('./for-each-right');
const forWhile = require('./for-while');
const fromPairs = require('./from-pairs');
const getAt = require('./get-at');
const getAtPath = require('./get-at-path');
const gt = require('./gt');
const gte = require('./gte');
const has = require('./has');
const identity = require('./identity');
const inc = require('./inc');
const isArrayLike = require('./is-array-like');
const isArray = require('./is-array');
const isFunction = require('./is-function');
const isInteger = require('./is-integer');
const isIterable = require('./is-iterable');
const isNull = require('./is-null');
const isObject = require('./is-object');
const isPromise = require('./is-promise');
const isString = require('./is-string');
const len = require('./len');
const lt = require('./lt');
const lte = require('./lte');
const map = require('./map');
const mapSrc = require('./map-src');
const mapRight = require('./map-right');
const mapRightSrc = require('./map-right-src');
const max = require('./max');
const mean = require('./mean');
const median = require('./median');
const merge = require('./merge');
const min = require('./min');
const mod = require('./mod');
const mult = require('./mult');
const negate = require('./negate');
const none = require('./none');
const not = require('./not');
const or = require('./or');
const pipe = require('./pipe');
const placeholder = require('./placeholder');
const pow = require('./pow');
const solve = require('./solve');
const range = require('./range');
const reduce = require('./reduce');
const reduceRight = require('./reduce-right');
const setAtPathMut = require('./set-at-path-mut');
const setAtPath = require('./set-at-path');
const setAt = require('./set-at');
const some = require('./some');
const subtract = require('./subtract');
const sum = require('./sum');
const zipObj = require('./zip-obj');
const zipWith = require('./zip-with');
const zip = require('./zip');

module.exports = {
  ...add,
  ...allowIndexes,
  ...allowIndexesSrc,
  ...always,
  ...and,
  ...approve,
  ...asArrayLike,
  ...atIndex,
  ...atPath,
  ...boolDict,
  ...clamp,
  ...concat,
  ...curry,
  ...dec,
  ...denyIndexesSrc,
  ...denyIndexes,
  ...div,
  ...every,
  ...filter,
  ...filterSrc,
  ...forEach,
  ...forEachRight,
  ...forWhile,
  ...fromPairs,
  ...getAt,
  ...getAtPath,
  ...gt,
  ...gte,
  ...has,
  ...identity,
  ...inc,
  ...isArrayLike,
  ...isArray,
  ...isFunction,
  ...isInteger,
  ...isIterable,
  ...isNull,
  ...isObject,
  ...isPromise,
  ...isString,
  ...len,
  ...lt,
  ...lte,
  ...map,
  ...mapSrc,
  ...mapRight,
  ...mapRightSrc,
  ...max,
  ...mean,
  ...median,
  ...merge,
  ...negate,
  ...min,
  ...mod,
  ...mult,
  ...none,
  ...not,
  ...or,
  ...pipe,
  ...placeholder,
  ...pow,
  ...range,
  ...reduce,
  ...reduceRight,
  ...setAtPathMut,
  ...setAtPath,
  ...setAt,
  ...solve,
  ...some,
  ...subtract,
  ...sum,
  ...zipObj,
  ...zipWith,
  ...zip,
};
