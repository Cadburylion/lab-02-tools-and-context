'use strict';

const fp = require('./lib/fp.js');


let toUpper = module.exports = () => {
  let list = process.argv;
  // let list = fp.splice(process.argv, 2);
  list = fp.map(list, word => word.toUpperCase());
  console.log(list);
  return list;
};

toUpper();
