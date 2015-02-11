'use strict';

var expect  = require('expect.js');
var reverse = require('../problems/reverse-words');

describe('reverse-words.js', function () {

  it('should reverse the words of a sentence', function () {
    expect(reverse('Hello world, the sun says hello'))
      .to.be('hello says sun the world, Hello');
  });

  it('should keep a single word sentence the same', function () {
    expect(reverse('singleword')).to.be('singleword');
  });

  it('should keep an empty string as an empty string', function () {
    expect(reverse('')).to.be('');
  });

});
