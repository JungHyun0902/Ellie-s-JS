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

// 3. constant
// favor immutable data type always for a few reasons:
// - security
// - thread safety
// - reduce human mistakes
const daysInWeek = 7;
const maxNumber = 5;

// 4. Variable types
// primitive, single item: number, string, boolean, null, undefined, symbol
// object, box container
// function, first-class function 

const count = 17; //integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);
