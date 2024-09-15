'use strict';

/**
 * Создайте объект пользователя с паролем.
 * С помощью функции ниже удалить пароль сделав
 * функцию сброса пароля
 */

const user = {
  login: 'login',
  password: '123',
};

const reset = removePassword.bind(user, false);

function removePassword(reset) {
  if (reset) {
    this.password = undefined;
  } else {
    this.password = '1';
  }
}

reset();
console.log(user);
