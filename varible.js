// 1. Use strict
// added in ES 5
// use this for Vanilla Javascript
'use strict';

// 2. Variable
// let(added in ES6)
let globalName = 'global name';
{
  let name = 'kjh';
  console.log(name);
  name = 'hello';
  console.log(name);
  console.log(globalName);
}
console.log(name);
console.log(globalName);

// var(don't ever use this!)
// var hoisting(move declaration from bottom to top)
// has no block scope
console.log(age);
age = 4;
var age;

// 3. constant`