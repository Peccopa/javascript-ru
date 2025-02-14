'use strict';

const balance = 100;
const operations = [-1000, -700, 300, -400, 1800];

function getFinalBalance(operations) {
  let result = balance;
  for (const value of operations) {
    result += value;
  }
  return result;
}

function getNegativeBalance(operations) {
  let result = balance;
  for (const value of operations) {
    if (result < 0) return false;
    result += value;
  }
  return result;
}

function getAverageBalance(operations) {
  // let result = balance;
  let expence = 0;
  let expenceCount = 0;
  let income = 0;
  for (const value of operations) {
    if (value < 0) {
      expence += value;
      expenceCount++;
    }
    if (value > 0) income += value;
  }
  return `Average expence: ${Math.trunc(
    expence / expenceCount
  )}, Average income: ${Math.trunc(
    income / (operations.length - expenceCount)
  )}`;
}

console.log(getFinalBalance(operations));
console.log(getNegativeBalance(operations));
console.log(getAverageBalance(operations));

console.log(getFinalBalance.name);