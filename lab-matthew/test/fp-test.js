'use strict';

const expect = require('expect');

const functionName = require('../lib/fp.js');

describe('testing fp', () => {

  describe('testing fp.map', () => {
    it('should return [2, 4, 6]', () => {
      let result = functionName.map([1,2,3], n => n * 2);
      expect(result).toEqual([2, 4, 6]);
    });
  });

  describe('testing fp.filter', () => {
    it('should return 3', () => {
      let result = functionName.filter([1,2,3], n => n>2);
      expect(result).toEqual(3);
    });
  });
  describe('testing fp.reduce', () => {
    it('should return 6', () => {
      let result = functionName.reduce([1,2,3], (acc, curr) => acc + curr);
      expect(result).toEqual(6);
    });
  });
  describe('testing fp.concat', () =>{
    it('should return something', () => {
      let result = functionName.concat(['Matthew', 'is', 'a', 'programmer'], n => n.join(''));
      expect(result).toEqual('Matthew is a programmer');
    });
  });
});
