const cache = require('./cache');
const cacheTenants = require('./cache-tenants');
const cloneBuffer = require('./clone-buffer');
const cloneRegExp = require('./clone-regexp');
const clone = require('./clone');
const container = require('./container');
const deserialize = require('./deserialize');
const dict = require('./dict');
const encryption = require('./encryption');
const getMethods = require('./get-methods');
const isClass = require('./is-class');
const logger = require('./logger');
const serialize = require('./serialize');
const uuid = require('./uuid');
const primaryMemory = require('./primary-memory');
const workerMemory = require('./worker-memory');
const sharedMemory = require('./shared-memory');
const simpleTimer = require('./simple-timer');
const fun = require('./fun');

module.exports = {
  ...cache,
  ...cacheTenants,
  ...cloneBuffer,
  ...cloneRegExp,
  ...clone,
  ...container,
  ...deserialize,
  ...dict,
  ...encryption,
  ...getMethods,
  ...isClass,
  ...logger,
  ...serialize,
  ...uuid,
  ...primaryMemory,
  ...workerMemory,
  ...sharedMemory,
  ...simpleTimer,
  ...fun,
};
