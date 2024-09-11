'use strict';

const { log } = require('console');

// Вернемся к исследованию кошек Женей и Юлей. На этот раз они хотят преобразовать возраст кошек в человеческий возраст и вычислить средний возраст кошек в своем исследовании.
// Создайте функцию getAverageHumanAge, которая принимает массив возрастов кошек (catAges) и выполняет следующие действия по порядку:

// 1. Рассчитывает человеческий возраст по следующей формуле: если возраст кошки <= 2 года, человеческий возраст = возраст кошки * 10. Если кошке больше 2 лет, человеческий возраст = возраст кошки * 7.
// 2. Исключает всех кошек младше 18 человеческих лет.
// 3. Возвращает средний человеческий возраст для всех взрослых кошек.

// Вызовите функцию для обоих наборов тестовых данных.
// Тестовые данные:
const cats1 = [7, 3, 2, 4, 1, 15, 8, 1, 9, 2];
const cats2 = [1, 16, 12, 4, 5, 1, 3, 11, 7, 2];

const getAverageHumanAge1 = function (catAges) {
  return catAges
    .filter((cat) => cat >= 2)
    .reduce((acc, cat, _, arr) => {
      return acc > 2
        ? acc + (cat * 7) / arr.length
        : acc + (cat * 10) / arr.length;
    }, 0);
};

const getAverageHumanAge2 = function (catAges) {
  const humanAges = catAges.map((catAge) =>
    catAge <= 2 ? catAge * 10 : catAge * 7
  );
  const adultCats = humanAges.filter((humanAge) => humanAge >= 18);
  const averageHumanAge =
    adultCats.reduce((acc, catAge) => acc + catAge, 0) / adultCats.length;
  return averageHumanAge;
};

const averageHumanAge1 = getAverageHumanAge2([7, 3, 2, 4, 1, 15, 8, 1, 9, 2]);
const averageHumanAge2 = getAverageHumanAge2([1, 16, 12, 4, 5, 1, 3, 11, 7, 2]);
console.log(averageHumanAge1);
console.log(averageHumanAge2);

console.log(getAverageHumanAge1(cats1));
console.log(getAverageHumanAge1(cats2));
