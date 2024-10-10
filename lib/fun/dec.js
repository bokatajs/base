const { _ } = require('./placeholder');
const { add } = require('./add');

module.exports = { dec: add(_, -1) };
