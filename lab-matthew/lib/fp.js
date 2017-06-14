'use strict';

const fp = module.exports = {};

fp.map = (list, callback) => {
  return Array.prototype.map.call(list, callback);
};

fp.filter = (list, callback) => {
  return Array.prototype.filter.call(list, callback);
};

fp.reduce = (list, callback) => {
  return Array.prototype.reduce.call(list, callback);
};

fp.concat = (list, list2) => {
  return Array.prototype.concat.apply(list, list2);
};

fp.splice = (list, args) => {
  return Array.prototype.splice.apply(list, args);
};
