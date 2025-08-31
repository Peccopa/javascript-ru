'use strict';

// let johnHasCar = 'У Джона есть машинa!';
let johnHasCar = false;
johnHasCar ||= 'У Джона нет машины!'; // то же самое, что false || (johnHasCar = "...")
console.log(johnHasCar); // "У Джона нет машины!"

let greeting = 'Привет'; // строка непустая, поэтому будет преобразована к логическому значению true оператором &&=
greeting &&= greeting + ', пользователь!'; // то же самое, что true && (greeting = greeting + "...")
console.log(greeting); // "Привет, пользователь!"
