'use strict';

const { log } = require('console');

/* проверить является ли это номером телефона России */

/* верные */
const num1 = '89103235356';
const num2 = '+79103235356';
const num3 = '+7(910)3235356';
const num4 = '+7(910) 323-53-56';
const num5 = '  +7(910) 323-53-56  ';
const num6 = '  (+7)(910) 323-53-56  ';
/* не верные */
const num1Error = '89103235';
const num2Error = '+7d910d323-53-56';
const num3Error = '9+7103235356';
const num4Error = '89103g35356';

// const isPhoneNumber = function (data) {
//   let result = '';
//   for (let i = 0; i < data.length; i++) {
//     if (!isNaN(Number(data[i])) && data[i] !== ' ') {
//       result += data[i];
//     } else if (data[i] === '+' && data[i + 1] === '7') {
//       result += '8';
//       i++;
//     }
//   }
//   console.log(result);
//   return result[0] === '8' && result.length === 11 ? true : false;
// };
// console.log(isPhoneNumber(num4Error));

function isPhoneNumber(num) {
  num = num.trim();
  num = num.replace('+7', '8');
  if (!num.startsWith('8')) return false;
  num = num.replaceAll(' ', '');
  num = num.replaceAll('-', '');
  num = num.replaceAll('(', '');
  num = num.replaceAll(')', '');
  if (num.length !== 11) return false;
  return num;
}

console.log(isPhoneNumber(num1));
console.log(isPhoneNumber(num2));
console.log(isPhoneNumber(num3));
console.log(isPhoneNumber(num4));
console.log(isPhoneNumber(num5));
console.log(isPhoneNumber(num6));

console.log(isPhoneNumber(num1Error));
console.log(isPhoneNumber(num2Error));
console.log(isPhoneNumber(num3Error));
console.log(isPhoneNumber(num4Error));
