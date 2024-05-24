/** ЗАДАЧА 10 - Комментарий перед функцией
 *
 * 1. Объявите функцию с двумя параметрами, значения которых - числа
 *
 * 2. Эта функция должна возвращать разницу между первым и вторым параметром
 *
 * 3. Добавьте многострочный комментарий перед функцией:
 *  - Текст комментария "Возвращает разницу двух чисел"
 *  - Укажите тип параметров - number
 *  - Укажите тип возвращаемого значения - number
 *  - Опишите возвращаемое значение - "Разница чисел"
 *
 * 4. Вызовите функцию
 */

/**
 * Возвращает разницу двух чисел
 * @param {number} num1 Первый параметр функции
 * @param {number} num2 Второй параметр функции
 * @returns {number} Возвращает разницу чисел
 */

function diff(num1, num2) {
  return num1 - num2;
}
console.log(diff(5, 3));

/**
 * Sums up the numbers
 * @param {number} num1 first param
 * @param {number} num2 second param
 * @returns return sum of numbers
 */
function sum(num1, num2) {
  return num1 + num2;
}
console.log(sum(5, 8));

/**
 * Descr
 * @param {*} a text
 * @param {*} b text
 * @returns return
 */
const mult = (a, b) => a * b;
