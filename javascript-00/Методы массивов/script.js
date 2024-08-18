'use strict';

// https://learn.javascript.ru/array-methods

// Переведите текст вида border-left-width в borderLeftWidth
// важность: 5
// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
// То есть дефисы удаляются, а все слова после них получают заглавную букву.
// Примеры:
// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';
// P.S. Подсказка: используйте split, чтобы разбить строку на массив символов, потом переделайте всё как нужно и методом join соедините обратно.
// const camelize = function (str) {
//   const arr = str.split('-');
//   for (let i = 1; i < arr.length; i += 1) {
//     arr.splice(i, 1, arr[i].charAt(0).toUpperCase() + arr[i].slice(1));
//   }
//   return arr.join('');
// };

// function camelize(str) {
//   return str
//     .split('-')
//     .map((word, index) =>
//       index == 0 ? word : word[0].toUpperCase() + word.slice(1)
//     )
//     .join('');
// }

// console.log(camelize('-webkit-transition'));

// Фильтрация по диапазону
// важность: 4
// Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет элементы со значениями больше или равными a и меньше или равными b и возвращает результат в виде массива.
// Функция должна возвращать новый массив и не изменять исходный.
// Например:
// let arr = [5, 3, 8, 1];
// let filtered = filterRange(arr, 1, 4);
// alert( filtered ); // 3,1 (совпадающие значения)
// alert( arr ); // 5,3,8,1 (без изменений)

// const filterRange = function (arr, a, b) {
//   return arr.filter((element) => {
//     return element >= 1 && element <= b;
//   });
// };
// console.log(filterRange([5, 3, 8, 1], 1, 4));

// Фильтрация по диапазону "на месте"
// важность: 4
// Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех, которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.
// Функция должна изменять принимаемый массив и ничего не возвращать.
// Например:
// let arr = [5, 3, 8, 1];
// filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4
// alert( arr ); // [3, 1]

// const filterRangeInPlace = function (arr, a, b) {
//   for (let i = 0; i < arr.length; i += 1) {
//     if (arr[i] < a || arr[i] > b) {
//       arr.splice(i, 1);
//       i -= 1;
//     }
//   }
//   return arr;
// };
// console.log(filterRangeInPlace([5, 3, 8, 1, 6, 6], 1, 4));

// Сортировать в порядке по убыванию
// важность: 4
// let arr = [5, 2, 1, -10, 8];
// ... ваш код для сортировки по убыванию
// console.log(arr.sort((a, b) => b - a));
// alert( arr ); // 8, 5, 2, 1, -10

// Скопировать и отсортировать массив
// важность: 5
// У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.
// Создайте функцию copySorted(arr), которая будет возвращать такую копию.
// let arr = ['HTML', 'JavaScript', 'CSS'];
// const copySorted = function (arr) {
//   return arr.slice().sort();
// };
// let sorted = copySorted(arr);
// console.log(sorted); // CSS, HTML, JavaScript
// console.log(arr); // HTML, JavaScript, CSS (без изменений)

//*************************** */
// Создать расширяемый калькулятор
// важность: 5
// Создайте функцию конструктор Calculator, которая создаёт «расширяемые» объекты калькулятора.
// Задание состоит из двух частей.
// Во-первых, реализуйте метод calculate(str), который принимает строку типа "1 + 2" в формате «ЧИСЛО оператор ЧИСЛО» (разделено пробелами) и возвращает результат. Метод должен понимать плюс + и минус -.
// Пример использования:
// let calc = new Calculator;
// alert( calc.calculate("3 + 7") ); // 10
// Затем добавьте метод addMethod(name, func), который добавляет в калькулятор новые операции. Он принимает оператор name и функцию с двумя аргументами func(a,b), которая описывает его.
// Например, давайте добавим умножение *, деление / и возведение в степень **:
// let powerCalc = new Calculator;
// powerCalc.addMethod("*", (a, b) => a * b);
// powerCalc.addMethod("/", (a, b) => a / b);
// powerCalc.addMethod("**", (a, b) => a ** b);
// let result = powerCalc.calculate("2 ** 3");
// alert( result ); // 8
// Для этой задачи не нужны скобки или сложные выражения.
// Числа и оператор разделены ровно одним пробелом.
// Не лишним будет добавить обработку ошибок.

// function Calculator() {
//   this.methods = {
//     '+': (a, b) => a + b,
//     '-': (a, b) => a - b,
//   };
//   this.addMethod = function (name, func) {
//     this.methods[name] = func;
//   }
//   this.calculate = function (str) {
//     const [a, op, b] = str.split(' ');
//     return this.methods[op](+a, +b);
//   };
// }

// const calc = new Calculator();

// console.log(calc.calculate('1 + 2'));
// console.log(calc.calculate('6 - 2'));
// console.log(calc.addMethod('*', (a,b) => a * b));
// console.log(calc.calculate('2 * 4'));

/*************************************************** */
// Трансформировать в массив имён
// важность: 5
// У вас есть массив объектов user, и в каждом из них есть user.name. Напишите код, который преобразует их в массив имён.
// Например:
// let vasya = { name: 'Вася', age: 25 };
// let petya = { name: 'Петя', age: 30 };
// let masha = { name: 'Маша', age: 28 };
// let users = [vasya, petya, masha];

// let names = users.map(obj => obj.name);

// console.log(names); // Вася, Петя, Маша

/********************************************************************* */

// Трансформировать в объекты
// важность: 5
// У вас есть массив объектов user, и у каждого из объектов есть name, surname и id.
// Напишите код, который создаст ещё один массив объектов с параметрами id и fullName, где fullName – состоит из name и surname.
// Например:
// let vasya = { name: 'Вася', surname: 'Пупкин', id: 1 };
// let petya = { name: 'Петя', surname: 'Иванов', id: 2 };
// let masha = { name: 'Маша', surname: 'Петрова', id: 3 };

// let users = [vasya, petya, masha];

// let usersMapped = users.map((item) => {
//   return {
//     fullName: `${item.name} ${item.surname}`,
//     id: item.id,
//   };
// });

/*
usersMapped = [
  { fullName: "Вася Пупкин", id: 1 },
  { fullName: "Петя Иванов", id: 2 },
  { fullName: "Маша Петрова", id: 3 }
]
*/
// console.log(usersMapped);
// console.log( usersMapped[0].id ) // 1
// console.log( usersMapped[0].fullName ) // Вася Пупкин
// Итак, на самом деле вам нужно трансформировать один массив объектов в другой. Попробуйте использовать =>. Это небольшая уловка.

//*************************************************************** */

// Отсортировать пользователей по возрасту
// важность: 5
// Напишите функцию sortByAge(users), которая принимает массив объектов со свойством age и сортирует их по нему.
// Например:
// let vasya = { name: 'Вася', age: 25 };
// let petya = { name: 'Петя', age: 30 };
// let masha = { name: 'Маша', age: 28 };
// let arr = [vasya, petya, masha];
// const sortByAge = function (arr) {
// return arr.sort((a, b) => a.age - b.age);
// };
// console.log(sortByAge(arr));
// теперь: [vasya, masha, petya]
// alert(arr[0].name); // Вася
// alert(arr[1].name); // Маша
// alert(arr[2].name); // Петя

/**************************************************************** */

// Перемешайте массив
// важность: 3
// Напишите функцию shuffle(array), которая перемешивает (переупорядочивает случайным образом) элементы массива.
// Многократные прогоны через shuffle могут привести к разным последовательностям элементов. Например:
// let arr = [1, 2, 3];
// const shuffle = function (arr) {
// return arr.sort(() => Math.random() - 0.5);
// };
// console.log(shuffle(arr));
// arr = [3, 2, 1]
// console.log(shuffle(arr));
// arr = [2, 1, 3]
// console.log(shuffle(arr));
// arr = [3, 1, 2]
// ...
// Все последовательности элементов должны иметь одинаковую вероятность. Например, [1,2,3] может быть переупорядочено как [1,2,3] или [1,3,2], или [3,1,2] и т.д., с равной вероятностью каждого случая.

/************************************************************* */

// Получить средний возраст
// важность: 4
// Напишите функцию getAverageAge(users), которая принимает массив объектов со свойством age и возвращает средний возраст.
// Формула вычисления среднего арифметического значения: (age1 + age2 + ... + ageN) / N.
// Например:
// let vasya = { name: 'Вася', age: 25 };
// let petya = { name: 'Петя', age: 30 };
// let masha = { name: 'Маша', age: 29 };
// let arr = [vasya, petya, masha];
// const getAverageAge = function (arr) {
//   return (
//     arr.reduce((acc, cur) => {
//       return acc + cur.age;
//     }, 0) / arr.length
//   );
// };
// console.log(getAverageAge(arr)); // (25 + 30 + 29) / 3 = 28

/************************************************************ */

// Оставить уникальные элементы массива
// важность: 4
// Пусть arr – массив строк.
// Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.
// Например:
// function unique(arr) {
//   return Array.from(new Set(arr));
// }
// function unique(arr) {
//   let result = [];
//   for (const word of arr) {
//     if (!result.includes(word)) result.push(word);
//   }
//   return result;
// }
// let strings = [
//   'кришна',
//   'кришна',
//   'харе',
//   'харе',
//   'харе',
//   'харе',
//   'кришна',
//   'кришна',
//   ':-O',
// ];
// console.log(unique(strings)); // кришна, харе, :-O

/************************************************************ */

// Создайте объект с ключами из массива
// важность: 4
// Допустим, мы получили массив пользователей в виде {id:..., name:..., age:... }.
// Создайте функцию groupById(arr), которая создаст из него объект с id в качестве ключа и элементами массива в качестве значений.
// Например:

let users = [
  { id: 'john', name: 'John Smith', age: 20 },
  { id: 'ann', name: 'Ann Smith', age: 24 },
  { id: 'pete', name: 'Pete Peterson', age: 31 },
];

const groupById = function (arr) {
  return arr.reduce((acc, curr) => {
    acc[curr.id] = curr;
    return acc;
  }, {});
};

let usersById = groupById(users);
console.log(usersById);
/*
после вызова у нас должно получиться:

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/
// Такая функция очень удобна при работе с данными, которые приходят с сервера.
// В этой задаче мы предполагаем, что id уникален. Не может быть двух элементов массива с одинаковым id.
// Используйте метод .reduce в решении.
