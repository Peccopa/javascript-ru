'use strict';

const prices = [
  [100, 200],
  [120, 100],
  [200, 350],
];

const positvePrices = prices
  .map((value) => {
    return value[1] - value[0];
  })
  .filter((value) => {
    return value >= 0;
  });

console.log(positvePrices);
