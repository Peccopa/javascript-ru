'use strict';

/*
	Сделать объект склад с методами добавления на склад, поиска
	по складку товара и расчёт веса
*/
const warehouse = {
  goods: [],
  findGoodById: function (id) {
    return this.goods.find((good) => good.id === id);
  },
  addGood: function (good) {
    if (good.id && !this.findGoodById(good.id)) this.goods.push(good);
  },
  getWeightKg: function () {
    return this.goods.reduce((acc, cur) => (acc += cur.weight?.kg || 0), 0);
  },
};

/* товары */
const car = {
  id: 1,
  weight: {
    kg: 1000,
  },
  brand: 'Ford',
};
const chair = {
  id: 2,
  weight: {
    kg: 2,
  },
};
const paper = {
  id: 3,
  color: 'red',
};
const coffee = {
  id: 4,
  color: 'brown',
  weight: {
    kg: 0.5,
  },
};

warehouse.addGood(car);
warehouse.addGood(chair);
warehouse.addGood(paper);
warehouse.addGood(coffee);
console.log(warehouse.goods);
console.log(warehouse.getWeightKg());
