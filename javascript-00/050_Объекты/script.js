// // Привет, object
// // важность: 5
// // Напишите код, выполнив задание из каждого пункта отдельной строкой:
// // Создайте пустой объект user.
// //const user = {};
// // Добавьте свойство name со значением John.
// //user.name = 'John';
// // Добавьте свойство surname со значением Smith.
// //user.surname = 'Smith';
// // Измените значение свойства name на Pete.
// //user.name = 'Pete';
// // Удалите свойство name из объекта.
// //delete user.name;
// //_______________________________
// // Проверка на пустоту
// // важность: 5
// // Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.
// // Должно работать так:
// //function isEmpty(obj) {
//   // return Object.keys(obj).length > 0 ? false : true;
//   // let count = 0;
//   // for (const key in obj) {
//   //   key ? count += 1 : count;
//   // }
//   // return !count;
//   for (let key in obj) {
//     // если тело цикла начнет выполняться - значит в объекте есть свойства
//     return false;
//   }
//   return true;
// }
// let schedule = {};
// alert(isEmpty(schedule)); // true
// // console.log(isEmpty(schedule)); // true
// schedule['8:30'] = 'get up';
// // console.log(isEmpty(schedule)); // false
// alert(isEmpty(schedule)); // false

// Сумма свойств объекта
// важность: 5
// У нас есть объект, в котором хранятся зарплаты нашей команды:
// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }
// // Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.
// // Если объект salaries пуст, то результат должен быть 0.
// let sum = 0;
// for (const key in salaries) {
//   sum += salaries[key];
// }
// console.log(sum);

// Умножаем все числовые свойства на 2
// важность: 3
// Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.
const multiplyNumeric = function (obj) {
  for (const key in obj) {
    typeof obj[key] === 'number' ? obj[key] *= 2 : false;
  }
};
// Например:
// до вызова функции
let menu = {
  width: 200,
  height: 300,
  title: 'My menu',
};
multiplyNumeric(menu);
// после вызова функции
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu"
// };
console.log(menu);
// Обратите внимание, что multiplyNumeric не нужно ничего возвращать. Следует напрямую изменять объект.
// P.S. Используйте typeof для проверки, что значение свойства числовое.
