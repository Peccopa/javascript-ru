'use strict';
// function makeUser() {
//   return {
//     name: 'John',
//     ref: this,
//   };
// }
// let user = makeUser();
// console.log(user);
// console.log(user.ref);
// console.log(user.ref.name); // Error: Cannot read property 'name' of undefined

// Создайте калькулятор
// важность: 5
// Создайте объект calculator (калькулятор) с тремя методами:
// read() (читать) запрашивает два значения и сохраняет их как свойства объекта с именами a и b.
// sum() (суммировать) возвращает сумму сохранённых значений.
// mul() (умножить) перемножает сохранённые значения и возвращает результат.
// let calculator = {
//   read() {
//     this.a = +prompt('Enter number:', '');
//     this.b = +prompt('Enter another number:', '');
//   },
//   sum() {
//     return this.a + this.b;
//   },
//   mul() {
//     return this.a * this.b;
//   },
// };
// console.log(calculator);
// console.log(calculator.sum());
// console.log(calculator.mul());
// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());

// Цепь вызовов
// важность: 2
// У нас есть объект ladder (лестница), который позволяет подниматься и спускаться:
let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep() {
    console.log(this.step);
    return this;
  },
};
// Теперь, если нам нужно выполнить несколько последовательных вызовов, мы можем сделать это так:

// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); // 1
// ladder.down();
// ladder.showStep(); // 0
// Измените код методов up, down и showStep таким образом, чтобы их вызов можно было сделать по цепочке, например так:

ladder.up().up().down().showStep().down().showStep(); // показывает 1 затем 0
// console.log(ladder.up().up());
// Такой подход широко используется в библиотеках JavaScript.
