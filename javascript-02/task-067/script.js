'use strict';

const arr = [23, 2, 4, 4, 10, 20];
const el = 11;

function some(el, arr) {
  for (const item of arr) {
    if (item === el) return true;
  }
  return false;
}

console.log(some(el, arr));
console.log(arr.some((e) => e === 2));
