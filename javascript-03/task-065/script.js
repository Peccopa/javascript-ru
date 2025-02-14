'use strict';

const arr = [2, 4, 4, 10];

const avg = arr.reduce((acc, curr) => {
  return (acc += curr / arr.length);
}, 0);

console.log(avg);
