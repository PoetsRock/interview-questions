'use strict';

var expect = require('expect.js');
var unique = require('../problems/unique-characters');

describe('unique-characters.js', function () {

  it('should tell if a string does\'t have unique characters', function () {
    expect(unique('vivint')).to.be(false);
    expect(unique('the quick on')).to.be(false);
  });

  it('should tell if a string has unique characters', function () {
    expect(unique('thequickon')).to.be(true);
    expect(unique('a')).to.be(true);
    expect(unique('')).to.be(true);
  });

});
