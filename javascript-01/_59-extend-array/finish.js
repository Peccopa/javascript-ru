/** ЗАДАЧА 59 - Расширение массивов
 *
 * 1. Создайте новый класс "ExtendedArray", который должен расширять встроенный "Array"
 *
 * 2. Добавьте в новый класс два пользовательских метода:
 *  - "sum" - он должен возвращать сумму всех элементов массива
 *  - "onlyNumbers" - должен возвращать новый массив,
 * который будет содержать только числа из исходного массива
 *
 * 3. Создайте несколько экземпляров нового класса "ExtendedArray"
 * и протестируйте оба метода "sum" и "onlyNumbers".
 *
 * 4. Убедитесь, что остальные методы массивов такие,
 * как "forEach", "map" также доступны
 */

const { log } = require('console');

class ExtendedArray extends Array {
  sum() {
    return this.reduce((acc, cur) => acc + cur);
  }
  onlyNumbers() {
    return this.filter((e) => typeof e === 'number');
  }
}

const result1 = new ExtendedArray(1, 2, 3);
const result2 = new ExtendedArray(1, 2, 3, '222', false);
console.log(result1?.sum());
console.log(result2?.onlyNumbers());
