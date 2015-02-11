'use strict';

/**
 * What is the expected output of the following?
 */

for (var i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, 100);
}

/**
 * export an array where each item in the array is a line that gets
 * console.logged
 */
module.exports = [];
