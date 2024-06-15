'use strict';

const arr = ['!', 'JS', 'love', 'I'];
let result = [];
for (let i = arr.length - 1; i >= 0; i--) {
  // result += arr[i];
  // if (i > 0) result += ' ';
  result.push(arr[i]);
}
console.log(result.join(' '));
