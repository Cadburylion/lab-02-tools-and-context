'use strict';

const index = require('../index.js');

const expect = require('expect');

describe('Testing CLI', () => {
  it('should return LIONS ARE WONDERFUL', () => {
    let result = ['lions', 'are', 'wonderful'];
    expect(index(result)).toEqual('LIONS ARE WONDERFUL');
  });
  it('should return FALCONS GO ZOOM', () => {
    let result = ['falcons', 'go', 'zoom'];
    expect(index(result)).toEqual('FALCONS GO ZOOM');
  });
});
