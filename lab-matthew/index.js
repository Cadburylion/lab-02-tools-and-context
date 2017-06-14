'use strict';

const fp = require('./lib/fp.js');

let toUpper = module.exports = (lion) => {
  let list;
  lion ? list = lion : list = fp.splice(process.argv, [2]);
  list = fp.map(list, word => word.toUpperCase());
  console.log(list.join(' '));
  return list.join(' ');
};

toUpper();
