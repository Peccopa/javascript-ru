/** ЗАДАЧА 75 - Перебор символов строки
 *
 * Подсчитайте количество строчных гласных букв в строке.
 * Гласные буквы - a, e, i, o, u
 */

let vowelsCount = 0;
const vowels = ['a', 'e', 'i', 'o', 'u'];

const str = 'Today is the best day of my life';

// Напишите код здесь

vowelsCount = str.split('').filter((e) => vowels.includes(e.toLowerCase())).length;

console.log(vowelsCount);
// 9
