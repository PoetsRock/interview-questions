'use strict';

var expect = require('expect.js');
var change = require('../problems/data-structure');

describe('data-structure.js', function () {

  it('should get the correct data structure', function () {
    var given    = require('./fixtures/data-structure/given');
    var expected = require('./fixtures/data-structure/expected');
    try {
      expect(change(given)).to.eql(expected);
    } catch (err) {
      throw new Error('Did not get expected structure');
    }
  });

});
