/*
	Пользователь:
	- Возраст
	- Наличие работы
	- Деньги
*/
const user = {
  age: 25,
  job: true,
  money: 1500,
};
const laptopCost = 2000;
/*	Нужно проверить может ли он купить новый MacBook за 2000$?
	Он может брать не только свои деньги, но и взять кредит.
	Ему дадут 500$, только если ему больше 24-х лет и он
	имеет работу, 100$ если ему просто больше 24-х лет и 0 в
	ином случае.
	Напишите функцию, которая принимает данные пользователя
	и товара и возвращает true или false;
*/

function canGetCredit(age, job) {
  if (age > 24 && job) {
    return 500;
  } else if (age > 24) {
    return 100;
  }
  return 0;
}

function canBuy(user, cost) {
  const { age, job, money } = user;
  return canGetCredit(age, job) + money < cost ? false : true;
}

console.log(canBuy(user, laptopCost));
