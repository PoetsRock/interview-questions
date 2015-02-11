'use strict';

var expect = require('expect.js');
var change = require('../problems/data-structure');

describe('data-structure.js', function () {

  it('should get the correct data structure', function () {
    var given    = require('./fixtures/data-structure/given');
    var expected = require('./fixtures/data-structure/expected');

    var root = change(given);

    removeEmptyChildren(root);

    expect(root).to.eql(expected);
  });

});

function removeEmptyChildren(person) {
  (person.children || []).map(removeEmptyChildren);
  if (Array.isArray(person.children) && !person.children.length) {
    delete person.children;
  }
}
