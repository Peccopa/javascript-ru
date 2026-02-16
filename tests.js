// // 1. Обычная функция, которая принимает 3 аргумента сразу
// function log(a, b, c) {
//   console.log(a, b, c);
// }

// // 2. Функция-каррировщик
// function curryLogger(log) {
//   return function (a) {
//     return function (b) {
//       return function (c) {
//         log(a, b, c);
//       };
//     };
//   };
// }

// // 3. Инициализация (передаём log в curryLogger)
// const curriedLog = curryLogger(log);

// // 4. Вызовы по шагам
// curriedLog(1)(2)(3); // → 1 2 3
