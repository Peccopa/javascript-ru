'use strict';

class Enemy {
  #health;

  constructor(health) {
    this.health = health;
  }

  receiveDamage(damage) {
    this.health = this.health - damage;
    console.log(this.health);
  }
}

class Orc extends Enemy {
  constructor(health) {
    super(health);
  }

  receiveDamage(damage) {
    if (Math.random() > 0.5) this.health = this.health - damage;
    console.log(this.health);
  }
}

class Sword {
  #damage;

  constructor(damage) {
    this.#damage = damage;
  }

  strike(enemy) {
    enemy.receiveDamage(this.#damage);
  }
}

const enemy = new Orc(10);
const sword = new Sword(3);
sword.strike(enemy);
sword.strike(enemy);
sword.strike(enemy);
sword.strike(enemy);
