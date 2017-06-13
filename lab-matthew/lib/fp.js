'use strict';

//make a lib/fp.js for holding the following methods
// create stand alone map, filter, reduce, concat, and splice using call, bind, and apply
// the standlone functions should have the signature (array, ...args) => array

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

fp.concat = (list, callback) => {
  return Array.prototype.reduce.call(list, callback);
};

// var words = ["spray", "limit", "elite", "exuberant", "destruction", "present"];
//
// var longWords = words.filter(function(word){
//   return word.length > 6;
// })
