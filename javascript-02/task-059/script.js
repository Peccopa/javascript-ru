'use strict';

// function power(pow) {
//   return function (num) {
//     return num ** pow;
//   };
// }

const power = (pow) => (num) => num ** pow;

const powerOfTwo = power(2);
console.log(power(2)(5));
