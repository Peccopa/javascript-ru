'use strict';

// 1. Используйте функцию-конструктор, чтобы реализовать автомобиль - Car. Автомобиль имеет свойства name и speed. Свойство speed - это текущая скорость автомобиля в км / ч.

const Car = function (name, speed) {
  this.name = name;
  this.speed = speed;
};
const newCar = new Car('Mazda', 100);
console.log(newCar);
// 2. Реализуйте метод accelerate(), который увеличивает скорость автомобиля на 5 и записывает новую скорость в консоль.
Car.prototype.accelerate = function () {
  this.speed += 5;
  console.log(this.speed);
};
newCar.accelerate();
// 3. Реализуйте метод break(), который снижает скорость автомобиля на 5 и записывает новую скорость в консоль.
Car.prototype.break = function () {
  this.speed -= 5;
  console.log(this.speed);
};
newCar.break();
newCar.break();
// 4. Создайте 2 объекта Car и поэкспериментируйте с вызовами методов accelerate() и break() несколько раз для каждого из них.

// Тестовые данные:
// Данные для автомобиля 1: Honda едет со скоростью 120 км / ч
// Данные для автомобиля 2: BMW едет со скоростью 150 км / ч.
