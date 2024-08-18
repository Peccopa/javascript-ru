'use strict';

// let obj = {};
// function A() { return obj; }
// function B() { return obj; }
// console.log( new A() == new B() ); // true

// Создайте калькулятор при помощи конструктора, new Calculator
// важность: 5
// Создайте функцию-конструктор Calculator, которая создаёт объекты с тремя методами:
// read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
// sum() возвращает сумму этих свойств.
// mul() возвращает произведение этих свойств.
// Например:

// function Calculator() {
//   this.read = function () {
//     this.a = +prompt('First number:');
//     this.b = +prompt('Second number:');
//   };
//   this.sum = function () {
//     return this.a + this.b;
//   };
//   this.mul = function () {
//     return this.a * this.b;
//   };
// }
// let calculator = new Calculator();
// console.log(calculator);
// calculator.read();
// console.log( "Sum=" + calculator.sum() );
// console.log( "Mul=" + calculator.mul() );

// Создайте new Accumulator
// важность: 5
// Создайте функцию-конструктор Accumulator(startingValue).
// Объект, который она создаёт, должен уметь следующее:
// Хранить «текущее значение» в свойстве value. Начальное значение устанавливается в аргументе конструктора startingValue.
// Метод read() должен использовать prompt для считывания нового числа и прибавления его к value.
// Другими словами, свойство value представляет собой сумму всех введённых пользователем значений, с учётом начального значения startingValue.
// Ниже вы можете посмотреть работу кода:
// function Accumulator(startingValue) {
//   this.value = startingValue;
//   this.read = function () {
//     this.value += +prompt('Enter the new number:', 0);
//   };
// }
// let accumulator = new Accumulator(1); // начальное значение 1
// accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
// accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
// alert(accumulator.value); // выведет сумму этих значений

const obj = {
  a: '1',
  b: '2',
};

console.log(obj.a);
// console.log(obj?.c?.a);
// console.log(obj?.c?.a);
globalThis?.[{ prop: 'console' }.prop]?.[['g', 'o', 'l'].reverse().join('')]?.(
  'test'
);
