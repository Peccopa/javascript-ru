'use strict';

let weatherMap = new Map([
  ['London', 10],
  ['Paris', 13],
  ['Moscow', 5],
]);

// const arr = [];
// weatherMap.forEach((value, key) => {
//   arr.push([value, key]);
// });
// const newWeatherMap = new Map(arr);

weatherMap = new Map([...weatherMap].map((item) => item.reverse()));

console.log(weatherMap);
