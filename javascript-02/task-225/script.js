'use strict';

// 1. Используйте функцию-конструктор, чтобы реализовать автомобиль - Car. Автомобиль имеет свойства name и speed. Свойство speed - это текущая скорость автомобиля в км / ч.
// 2. Реализуйте метод accelerate(), который увеличивает скорость автомобиля на 5 и записывает новую скорость в консоль.
// 3. Реализуйте метод break(), который снижает скорость автомобиля на 5 и записывает новую скорость в консоль.
// 4. Создайте 2 объекта Car и поэкспериментируйте с вызовами методов accelerate() и break() несколько раз для каждого из них.

// Тестовые данные:
// Данные для автомобиля 1: Honda едет со скоростью 120 км / ч
// Данные для автомобиля 2: BMW едет со скоростью 150 км / ч.

// 1. Решите Задание 1, но теперь с использованием класса ES6
// 2. Добавьте геттер speedMph, который возвращает текущую скорость в милях в час (разделите
// на 1,6)
// 3. Добавьте cеттер speedMph, который устанавливает текущую скорость в милях в час (но
// преобразует его в км / ч перед сохранением значения, умножая ввод на 1,6)
// 4. Создайте новый автомобиль и поэкспериментируйте с методами accelerate() и break(), а также с геттером и сеттером.

class Car {
  constructor(name, speed) {
    this.name = name;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 5;
  }

  break() {
    this.speed -= 5;
  }

  get speedMph() {
    return this.speed / 1.6;
  }

  set speedMph(speed) {
    this.speed = speed * 1.6;
  }
}

const honda = new Car('Honda', 120);
const bmw = new Car('BMW', 150);

console.log(honda);
honda.accelerate();
console.log(honda.speed);
console.log(honda.speedMph);
honda.speedMph = 90;
console.log(honda.speed);

// console.log(bmw);
// bmw.break();
// console.log(bmw.speed);
// console.log(bmw.speedMph);
