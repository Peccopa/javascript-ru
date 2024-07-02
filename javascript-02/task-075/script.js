'use strict';

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
//     if (!isNaN(Number(data[i]))) {
//       result += data[i];
//     } else if (data[i] === '+' && data[i + 1] === '7') {
//       result += '8';
//       i++;
//     }
//   }
//   return result;
// };
// console.log(isPhoneNumber(num3Error));


