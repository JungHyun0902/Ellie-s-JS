'use strict';
// Object-oriented programming
// class: template
// object: instance of a class
// JavaScript classes
// - introduced in ES6
// - syntactical sugar over prototype-based inheritance

// 1. Class declarations
class Person {
  // constructor
  constructor(name, age) {
    // fields
    this.name = name;
    this.age = age;
  }

  // methods
  speak() {
    console.log(`${this.name}: hello!`);
  }
}

const ellie = new Person('ellie', 20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();

// practice
class Test {
  constructor(name, job) {
    this.name = name;
    this.job = job;
  }
  introduce() {
    console.log(`hello! My name is ${this.name}. I'm a ${this.job}`);
  }
}

const junghyun = new Test('junghyun', 'programmer');
console.log(junghyun.name);
console.log(junghyun.job);
junghyun.introduce();

// 2. Getter and setters
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get age() {
    return this._age;
  }

  set age(value) {
    // if (value < 0) {
    //   throw Error('age can not be negative');
    // }
    this._age = value < 0 ? 0 : value;
  }
}

const user1 = new User('steve', 'jobs', -1);
console.log(user1.age);


