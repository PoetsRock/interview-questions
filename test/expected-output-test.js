'use strict';

var expect = require('expect.js');

describe('expected-output.js', function () {

  it('should get the correct output', function (done) {
    var log = console.log;
    var actualOutput = [];

    console.log = function (output) {
      actualOutput.push(output);
    };

    var expectedOutput = require('../problems/expected-output');

    setTimeout(function () {
      console.log = log;
      try {
        expect(expectedOutput).to.eql(actualOutput);
      } catch (err) {
        return done(new Error('Expected output did not match actual output'));
      }
      done();
    }, 200);
  });

});
