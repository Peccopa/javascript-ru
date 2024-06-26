/** ЗАДАЧА 42 - Проверка сортировки массива
 *
 * 1. Создайте функцию "arraySortInfo" с одним параметром - "inputArray"
 *
 * 2. Если хотя бы один элемент в массиве не является числом - вернуть "Некоторые элементы не являются числами"
 *
 * 3. Если числа в массиве отсортированы по возрастанию - вернуть "Массив отсортирован по возрастанию"
 *
 * 4. Если числа в массиве отсортированы по убыванию - вернуть "Массив отсортирован по убыванию".
 *
 * 5. Если массив не отсортирован - вернуть "Массив не отсортирован"
 */

const a = [5, 'abc', 10, 1];
const b = [4, 10, 14, 25, 25, 50];
const c = [150, 132, 80, 40];
const d = [15, 26, 10, 23, 85];

// const arraySortInfo = function (array) {
//   let count = 0;
//   let arrLength = array.length - 1;
//   array.reduce((acc, cur) => {
//     if (acc > cur) count += 1;
//     if (acc < cur) count -= 1;
//     if (acc === cur) arrLength -= 1;
//     // console.log(acc, cur);
//     return (acc = cur);
//   });
//   console.log(count);
//   console.log(arrLength);
// };

const arraySortInfo = function (array) {
  let count = 0;
  let arrLength = array.length - 1;
  for (let i = 0; i < array.length; i += 1) {
    if (typeof array[i] !== 'number') {
      return 'Некоторые элементы не являются числами';
    }
    if (array[i + 1] && array[i] > array[i + 1]) {
      count += 1;
    }
    if (array[i + 1] && array[i] < array[i + 1]) {
      count -= 1;
    }
    if (array[i + 1] && array[i] === array[i + 1]) {
      arrLength += 1;
    }
  }
  // if (count > 0 && a)
  console.log(count, arrLength);
  return count;
};

// console.log(arraySortInfo(a)); // Некоторые элементы не являются числами
console.log(arraySortInfo(b)); // Массив отсортирован по возрастанию
console.log(arraySortInfo(c)); // Массив отсортирован по убыванию
// console.log(arraySortInfo(d)); // Массив не отсортирован

/**
 * ПОДСКАЗКИ
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * Подсказка 1: Используйте метод массивов "every"
 * Подсказка 2: Вы должны использовать два параметра в колбэк функции "element", "index"
 * Подсказка 3: Каждый элемент массива, кроме первого, следует сравнивать с предыдущим
 */
