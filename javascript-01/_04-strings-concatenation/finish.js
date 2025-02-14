/** ЗАДАЧА 4 - Объединение строк
 *
 * 1. Объявите три переменные с значениями:
 *  - ваше имя
 *  - ваша фамилия
 *  - ваша профессия
 *
 * 2. Создайте еще одну переменную. Ее значение должно быть, например
 * "Меня зовут <Имя> <Фамилия> и я <Профессия>"
 *
 * 3. Выведите значение последней переменной в консоль
 */

const userFirstName = 'Ivan';
const userLastName = 'Ivanov';
const userProfession = 'mover';

const userString = `My name is ${userFirstName} ${userLastName} and i'm a ${userProfession}`;
console.log(userString);
