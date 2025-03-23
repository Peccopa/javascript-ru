'use strict';

class User {
  #login;
  #_password;

  constructor(login, password) {
    this.#login = login;
    this.#password = password;
  }

  set #password(pass) {
    this.#_password = pass.split('').reverse().join('');
  }

  get #password() {
    return this.#_password.split('').reverse().join('');
  }

  get login() {
    return this.#login;
  }

  checkPassword(pass) {
    return this.#password === pass;
  }

  changePassword(oldPass, newPass) {
    if (!this.changePassword(oldPass)) return false;
    this.#_password = newPass;
    return true;
  }
}

const test = new User('login', 'password');
console.log(test);
