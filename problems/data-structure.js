'use strict';

/**
 * This data structure is indicitive of a different type of data structure, but
 * it is currently not represented in that data structure. What would you change
 * about this data structure to make it more representative of what it's meaning
 * to be?
 *
 * Then, write a function that puts this array into that data structure.
 */

var allPeople = [
  {
    id: 1001,
    name: 'Billy',
    parent: null
  },
  {
    id: 1002,
    name: 'Baxter',
    parent: 1001
  },
  {
    id: 1003,
    name: 'Johnny 5',
    parent: 1001
  },
  {
    id: 1004,
    name: 'Peter',
    parent: 1002
  },
  {
    id: 1005,
    name: 'Yolanda',
    parent: 1003
  },
  {
    id: 1006,
    name: 'Plankton',
    parent: 1002
  }
];

module.exports = function changeStructure(people) {

};
