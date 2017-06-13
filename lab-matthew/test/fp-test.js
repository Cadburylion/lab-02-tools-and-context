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
    it('should return [1,2,3,4,5,6,7,8,9]', () => {
      let result = functionName.concat([1,2,3], [[4,5,6],[7,8,9]]);
      expect(result).toEqual([1,2,3,4,5,6,7,8,9]);
    });
  });
  describe('testing fp.splice', () =>{
    it('should return 2', () =>{
      let result = functionName.splice([1,2,3], [1, 1]);
      expect(result).toEqual(2);
    });
  });
});

// array.splice(start, deleteCount)
//
