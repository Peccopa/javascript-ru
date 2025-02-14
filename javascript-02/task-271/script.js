'use strict';

const Car = function (name, speed) {
  this.name = name;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 5;
  console.log(this.speed);
};

Car.prototype.break = function () {
  this.speed -= 5;
  console.log(this.speed);
};

const ElectricCar = function (name, speed, battery) {
  Car.call(this, name, speed);
  this.battery = battery;
};

ElectricCar.prototype = Object.create(Car.prototype);

ElectricCar.prototype.chargeBattery = function (chargeLevel) {
  this.battery = chargeLevel;
  return this;
};

ElectricCar.prototype.accelerate = function () {
  this.speed += 10;
  this.battery -= this.battery / 100;
  console.log(
    `${this.name} едет со скоростью ${this.speed} с зарядом ${this.battery}`
  );
  return this;
};

const newElectricCar = new ElectricCar('Tesla', 120, 100);

// console.log(newElectricCar);
// console.log(newElectricCar.accelerate());
console.log(newElectricCar.accelerate());
console.log(newElectricCar.break());
console.log(newElectricCar.break());
// console.log(newElectricCar.chargeBattery(100));
// console.log(newElectricCar);

// const newCar = new Car('Mazda', 100);

// console.log(newCar);

// newCar.accelerate();

// newCar.break();
// newCar.break();
