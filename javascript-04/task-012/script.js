'use strict';

function cookPie(type, radius, slice) {
  console.log('#cookPie:0', type, radius, slice);
}

function callCounter(func) {
  func.callCounter = 0;

  return function (...args) {
    func.callCounter += 1;
    return func(...args);
  };
}

const countedCookPie = callCounter(cookPie);

// console.log(countedCookPie());
