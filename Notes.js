

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
