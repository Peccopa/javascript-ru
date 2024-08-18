/** ЗАДАЧА 79 - Перебор свойств объекта
 *
 * 1. Создайте функцию "sumObjectValues", которая будет суммировть
 * все значения свойств, которые являются числами.
 *
 * 2. Сумму чисел необходимо вернуть из функции
 *
 * 3. Убедитесь, что итерация выполняется только
 * по собственным свойствам объекта
 */

const sumObjectValues = (obj) => {
  // let sum = 0;
  // for (const key in obj) {
  //   if (obj.hasOwnProperty(key) && typeof obj[key] === 'number')
  //     sum += obj[key];
  // }
  // return sum;

  return Object.values(obj).reduce(
    (a, v) => (typeof v === 'number' ? a + v : a + 0),
    0
  );
};

const objectWithNumbers = {
  a: 10,
  b: 20,
  c: 'string',
  d: 12,
};

// Создайте функцию здесь

const result = sumObjectValues(objectWithNumbers);
console.log(result);
//42
