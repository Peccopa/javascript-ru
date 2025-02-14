/** ЗАДАЧА 34 - Массив объектов
 *
 * 1. Создайте массив с 3 объектами "cars"
 *
 * 2. Каждый объект должен иметь три свойства
 *  - carBrand (строка)
 *  - price (число)
 *  - isAvailableForSale (логическое значение)
 *
 * 3. Добавьте еще один объект в массив
 *
 * 4. Выведите результирующий массив в консоль
 */

// const cars = [
//   {
//     carBrand: 'XCA',
//     price: 10000,
//     isAvailableForSale: true,
//   },
//   {
//     carBrand: 'FJD',
//     price: 15000,
//     isAvailableForSale: false,
//   },
//   {
//     carBrand: 'EJF',
//     price: 11000,
//     isAvailableForSale: true,
//   },
// ];
// cars.push({
//   carBrand: 'XXX',
//   price: 21000,
//   isAvailableForSale: true,
// });
// globalThis['console'][`log`](cars);

function Cars(carBrand, price, isAvailableForSale) {
  this.carBrand = carBrand;
  this.price = price;
  this.isAvailableForSale = isAvailableForSale;
}

const cars = [
  new Cars('DFE', 32000, false),
  new Cars('HJF', 12000, true),
  new Cars('FNF', 11000, false),
];
console.log(cars);
