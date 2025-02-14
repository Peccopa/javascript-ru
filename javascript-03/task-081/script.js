'use strict';

const users = [
  { name: 'Jim', age: 33 },
  { name: 'Ann', age: 23 },
  { name: 'Max', age: 53 },
  { name: 'Tim', age: 13 },
];

users.sort((a, b) => a.age - b.age);
console.log(users);

