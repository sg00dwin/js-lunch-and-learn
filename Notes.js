

// Lesson 3 Control Flow

// truthy things will 'loosely' evaluate to true
if(true) {
  // this will run
}

// truthy things
1
'hello'
123
{}
[]
'0' // truthy
'false' // truthy
function() {}

// falsy thingsfalse
0 // falsy
''
null
undefined
NaN



let foo2 = 'hello';
let foo3 = !!foo2;  // true

if(!!foo2) {
  // do something
}

// Equality, strict or loose
1 == true;  // true
1 === true;  // false  // always use 3 equals



// 3.2 Continue Control Flow

// Expressions is a set of JS statements that result in a single value
var foo = funciton() {}; // Expression
function foo() {}; // NOT Expression

// Switch
let name = 'Bob';
switch(name) {
  case something :
    break;
  case somethingelse :
    break;
};

// Errors, Try, Catch, Finally & Throw
throw new Error('dang it broke');



// Types and Primitives

// To understand this article, you’ll need to understand the difference between primitive and non-primitive values in JavaScript. There are 5 primitive types, which are associated with the various primitive values.

Null: The value null.
Undefined: The value undefined.
Number: All numbers, such as 0 and 3.14. Also NaN, and Infinity.
Boolean: The values true and false.
String: All strings, such as "foo" and "".

// All other values are non-primitive, including arrays, functions, and plain old objects. For completeness, here are the results of the typeof operator, applied to these values:

typeof null; // "object"
typeof undefined; // "undefined"
typeof 0; // "number" (`typeof NaN` is also "number")
typeof true; // "boolean"
typeof "foo"; // "string"
typeof {}; // "object"
typeof function () {}; // "function"
typeof []; // "object"


// Scoping and hoisting
// http://www.adequatelygood.com/JavaScript-Scoping-and-Hoisting.html
