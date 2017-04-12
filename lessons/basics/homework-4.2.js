/* jshint esversion: 6 */

'use strict'; // enabling this causes error and the jshint comment doesn't fix it

  // 1. Create a list of first names using a `Do...While` loop:

  (function() {

    // an array
    let people = [
      {firstName: 'jill', lastName: 'doe', age: 23},
      {firstName: 'jane', lastName: 'doe', age: 32},
      {firstName: 'jack', lastName: 'sparrow', age: 44},
      {firstName: 'john', lastName: 'appleseed', age: 51}
    ];
    // an object
    let otherPeople = {
      jill: {firstName: 'jill', lastName: 'doe', age: 23},
      jane: {firstName: 'jane', lastName: 'doe', age: 32},
      jack: {firstName: 'jack', lastName: 'sparrow', age: 44},
      john: {firstName: 'john', lastName: 'appleseed', age: 51}
    };
    let i =0;
    let firstNames = [];
    do {
      // update firstNames
      firstNames.push(people[i].firstName);
      i++;
    } while ( i < people.length /* condition to start/stop the loop */ );
    console.log('1. firstNames: ' + firstNames);
  })();
