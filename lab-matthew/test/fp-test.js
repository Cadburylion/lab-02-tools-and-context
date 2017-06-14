'use strict';

const expect = require('expect');

const fp = require('../lib/fp.js');

describe('testing fp', () => {

  describe('testing fp.map', () => {
    it('should return [2, 4, 6]', () => {
      let result = fp.map([1,2,3], n => n * 2);
      expect(result).toEqual([2, 4, 6]);
    });
    it('should return [3, 6, 9]', () => {
      let result = fp.map([1,2,3], n => n * 3);
      expect(result).toEqual([3, 6, 9]);
    });
  });

  describe('testing fp.filter', () => {
    it('should return 3', () => {
      let result = fp.filter([1,2,3], n => n>2);
      expect(result).toEqual(3);
    });
    it('should return 1', () => {
      let result = fp.filter([1,2,3], n => n<2);
      expect(result).toEqual(1);
    });
  });

  describe('testing fp.reduce', () => {
    it('should return 6', () => {
      let result = fp.reduce([1,2,3], (acc, curr) => acc + curr);
      expect(result).toEqual(6);
    });
    it('should return 9', () => {
      let result = fp.reduce([2,3,4], (acc, curr) => acc + curr);
      expect(result).toEqual(9);
    });
  });

  describe('testing fp.concat', () => {
    it('should return [1,2,3,4,5,6,7,8,9]', () => {
      let result = fp.concat([1,2,3], [[4,5,6],[7,8,9]]);
      expect(result).toEqual([1,2,3,4,5,6,7,8,9]);
    });
    it('should return [Matthew,is,a,programmer,who,loves,animals,and,writing]', () => {
      let result = fp.concat(['Matthew','is','a'], [['programmer','who','loves'],['animals','and','writing']]);
      expect(result).toEqual(['Matthew','is','a','programmer','who','loves','animals','and','writing']);
    });
  });

  describe('testing fp.splice', () => {
    it('should return 2', () =>{
      let result = fp.splice([1,2,3], [1, 1]);
      expect(result).toEqual(2);
    });
    it('should return [2,3]', () => {
      let result = fp.splice([1,2,3], [1, 2]);
      expect(result).toEqual([2,3]);
    });
  });
});
