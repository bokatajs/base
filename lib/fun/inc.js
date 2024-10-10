const { _ } = require('./placeholder');
const { add } = require('./add');

module.exports = { inc: add(_, 1) };
