/* jshint esversion: 6 */

// 'use strict';

// 1. Create a makeEmail() function using the following list:
// let names = ['jill', 'jane', 'jack', 'john'];
//
// function makeRedhatEmails(names) {
//   for(i=0; i<names.length; i++) {
//     console.log(names[i] + "@redhat.com");
//   }
// }
// makeRedhatEmails(names);



// 2. Update the above function to take a argument, else default to redhat.com
var names = ['jill'];

function makeEmails(names, domain) {
  // Set domain with a ternary conditional
  // domain = (domain === undefined) ? 'redhat.com' : domain;
  // or can be written
  domain = domain ? domain : 'redhat.com'

  console.log(domain);
  for(i = 0; i < names.length; i++) {
    console.log(names[i] + '@' + domain);
  }
}

makeEmails(names);  // should console.log() jill@redhat.com, etc
makeEmails(names, 'gmail.com');  // should console.log() jill@gmail.com, etc
