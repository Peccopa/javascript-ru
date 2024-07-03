/** ЗАДАЧА 43 - Сравнение двух массивов
 *
 * 1. Создайте функцию "areArraysEqual" с двумя параметрами "firstArray" и "secondArray"
 *
 * 2. Верните "true" если два массива равны, а именно:
 *  - имеют одинаковое количество элементов
 *  - все элементы совпадают, например, firstArray[0] === secondArray[0] и т. д.)
 *
 * 3. В противном случае верните "false"
 *
 * ВАЖНО: Исходите из того, что массивы содержат элементы примитивных типов
 */

const a = [1, 2, 3];
const b = [1, 2, 3];

// console.log(a === b); // false (Почему?)

const c = [2, 1, 3];
const d = [1, 2, 3, 4];

// const areArraysEqual = function (firstArray, secondArray) {
//   if (firstArray.length !== secondArray.length) return false;
//   return firstArray.join() === secondArray.join();
// };

// const areArraysEqual = function (firstArray, secondArray) {
//   if (firstArray.length !== secondArray.length) {
//     return false;
//   } else {
//     return firstArray.some((v, i) => {
//       return v === secondArray[i];
//     });
//   }
// };

const areArraysEqual = function (firstArray, secondArray) {
  return (
    firstArray.length === secondArray.length &&
    firstArray.every((v, i) => v === secondArray[i])
  );
};

console.log(areArraysEqual(a, b)); // true
console.log(areArraysEqual(a, c)); // false
console.log(areArraysEqual(a, d)); // false
