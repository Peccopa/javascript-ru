'use strict';

// let str = 'Widget with id';
// if (str.indexOf('Widget') >= 0) {
//   console.log('Совпадение есть'); // не работает
// }

// Сделать первый символ заглавным
// важность: 5
// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например:

// const ucFirst = function (str) {
//   return str[0].toUpperCase() + str.slice(1);
// };
// console.log(ucFirst('вася'));

// Проверка на спам
// важность: 5
// Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.

// const checkSpam = function (str) {
//   const lowerCaseStr = str.toLowerCase();
//   return lowerCaseStr.includes('xxx') || lowerCaseStr.includes('viagra')
//     ? true
//     : false;
// };

// // Функция должна быть нечувствительна к регистру:

// console.log(checkSpam('buy ViAgRA now'));
// console.log(checkSpam('free xxxxx'));
// console.log(checkSpam('innocent rabbit'));

// Усечение строки
// важность: 5
// Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength.
// Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая стро ка.

// const truncate = function (str, maxlength) {
//   if (str.length <= maxlength) return str;
//   return str.slice(0, maxlength - 1) + '…';
// };
// // Например:
// // truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) = "Вот, что мне хотело…"
// // truncate("Всем привет!", 20) = "Всем привет!"
// console.log(truncate('Вот, что мне хотелось бы сказать на эту тему:', 20));
// console.log(truncate('Всем привет!', 20));

// Выделить число
// важность: 4
// Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.
// Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его.
// Например:
// console.log(( extractCurrencyValue('$120') === 120 )); // true
const extractCurrencyValue = function (str) {
  return +str.slice(1);
};
console.log(extractCurrencyValue('$120')); // true
