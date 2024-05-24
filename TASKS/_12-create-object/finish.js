/** ЗАДАЧА 12 - Создание объекта
 *
 * 1. Создайте объект с тремя свойствами:
 *  - name
 *  - surname
 *  - favoriteNumber
 *
 * 2. Выведите в консоль строку
 * "My name is <name> <surname> and my favorite number is <favoriteNumber>"
 */

const user = {
  name: 'Ivan',
  surname: 'Ivanov',
  favoriteNumber: 666,
};

const { surname, favoriteNumber } = user;

console.log(
  `My name is ${user.name} ${surname} and my favorite number is ${favoriteNumber}`
);
