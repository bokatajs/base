const { clone } = require('../clone');
const { curry3 } = require('./curry');
const { setAtPathMut } = require('./set-at-path-mut');

function setAtPath(x, path, value) {
  const cloned = clone(x);
  return setAtPathMut(cloned, path, value);
}

module.exports = { setAtPath: curry3(setAtPath) };
