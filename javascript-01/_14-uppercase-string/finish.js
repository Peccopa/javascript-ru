/** ЗАДАЧА 14 - Строка заглавными буквами
 *
 * 1. Создайте переменную и присвойте ей любую строку
 *
 * 2. Убедитесь что значение этой переменной НЕ является экземпляром String
 * Используйте для этого оператор "instanceof"
 *
 * 3. Убедитесь что значение этой переменной имеет тип "string"
 *
 * 4. Создайте другую переменную и ее значением должно быть значение
 * первой переменной заглавными буквами
 *
 * 5. Выведите в консоль значение второй переменной
 */

const str1 = 'Hello!';
console.log(str1 instanceof String);
console.log(typeof str1);
const str2 = str1.toUpperCase();
console.log(str2);
str2.aaa = 1;
console.log(str2);
console.log('---');

const test = new String('Bonza');
console.log(test instanceof String);
console.log(typeof test);
console.log(test);
console.log(test.toUpperCase());