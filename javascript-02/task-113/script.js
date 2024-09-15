'use strict';

/**
 * Сделать функцию пользователя, которая, берёт за основу
 * userInfo и за счёт замыкания создаёт новый объект, с
 * которым можно работать как user1().increse(100)
 */

const userInfo = {
  balance: 0,
  oprations: 0,
  increse(sum) {
    this.balance += sum;
    this.oprations += 1;
  },
};

function user() {
  const userObj = {
    balance: 0,
    oprations: 0,
    increse(sum) {
      this.balance += sum;
      this.oprations += 1;
    },
  };
  return function () {
    return userObj;
  };
}

const user1 = user();
user1().increse(100);
user1().increse(100);
console.log(user1());
const user2 = user();
console.log(user2());
