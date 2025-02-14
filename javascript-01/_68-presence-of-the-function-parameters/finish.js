/** ЗАДАЧА 68 - Проверка наличия аргументов в вызове функции
 *
 * Измените функцию "square" так, чтобы в случае ее вызова
 * без аргумента генерировалась ошибка
 * "Функция "square" не может быть вызвана без аргумента"
 */

function square(a) {
  // if (arguments.length !== 0) {
  //   console.log(a * a);
  // } else {
  //   throw new ReferenceError(
  //     `Функция "square" не может быть вызвана без аргумента`
  //   );
  // }

  try {
    if (!a)
      throw new ReferenceError(
        `Функция "square" не может быть вызвана без аргумента`
      );
    console.log(a * a);
  } catch (error) {
    console.log(`${error.name}: ${error.message}`);
  }
}

square(10);
// 100

square();
// ДО: NaN
// ПОСЛЕ: Uncaught Error: Функция "square" не может быть вызвана без аргумента
