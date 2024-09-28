// // Rock Paper Scissors
// // Let's play! You have to return which player won! In case of a draw return Draw!.

// // Examples(Input1, Input2 --> Output):

// // "scissors", "paper" --> "Player 1 won!"
// // "scissors", "rock" --> "Player 2 won!"
// // "paper", "paper" --> "Draw!"

// const rps = (p1, p2) => {
//   if (p1 === p2) return 'Draw!';
//   if (
//     (p1 === 'scissors' && p2 === 'paper') ||
//     (p1 === 'paper' && p2 === 'rock') ||
//     (p1 === 'rock' && p2 === 'scissors')
//   ) {
//     return 'Player 1 won!';
//   }
//   return 'Player 2 won!';
// };

// console.log(rps('scissors', 'paper'));

// const obj = {
//   name: 'John',
// };

// const arr1 = [1, 3, 4, 5];
// const arr2 = [2, 2, 2, 2];

// // let newArr = Array.from(arr1 + ',' + arr2);

// console.log(newArr);

/**
 * Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively.

* [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
* [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
* [42, 54, 65, 87, 0]             -> min = 0, max = 87
* [5]  
 */

// var min = function(list){

//   return Math.min(...list);
// }

// // var max = function(list){

// //   return list[0];
// // }

// console.log(min([42, 54, 65, 87, 0]));

// function greet(name) {
//   if (name === 'Johnny') return 'Hello, my love!';
//   return 'Hello, ' + name + '!';
// }

// console.log(greet('Johnny'));

// const str = '123';
// const arr = [1, 2, 3];
// const obj = {
//   one: 1,
//   two: 2,
// };
// const set = new Set(arr);

// console.log(set);

// for (const value of str) {
//   console.log(value);
// }

// Task
// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.

// Example
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6
// Input validation
// If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.

// function sumArray(array) {
//   if (Array.isArray(array) && array.length > 2) {
//     array.sort((a, b) => a - b);
//     array.pop();
//     array.shift();
//     return array.reduce((acc, cur) => acc + cur);
//   }
//   return 0;
// }

// console.log(sumArray([3, 5, 6]));

// assert.strictEqual( sumArray([ ])                      , 0 );
// assert.strictEqual( sumArray([ 3 ])                    , 0 );
// assert.strictEqual( sumArray([ 3, 5 ])                 , 0 );
// assert.strictEqual( sumArray([ 6, 2, 1, 8, 10 ])       , 16 );
// assert.strictEqual( sumArray([ 0, 1, 6, 10, 10 ])      , 17 );
// assert.strictEqual( sumArray([ -6, -20, -1, -10, -12 ]), -28 );
// assert.strictEqual( sumArray([ -6, 20, -1, 10, -12 ])  , 3 );

// Our football team has finished the championship.
// Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.
// For example: ["3:1", "2:2", "0:1", ...]
// Points are awarded for each match as follows:
// if x > y: 3 points (win)
// if x < y: 0 points (loss)
// if x = y: 1 point (tie)
// We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.
// Notes:
// our team always plays 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4

// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;
// describe("Total amount of points", function(){
//   it("Sample Tests", function(){
//     assert.strictEqual(points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]) , 30);
//     assert.strictEqual(points(["1:1","2:2","3:3","4:4","2:2","3:3","4:4","3:3","4:4","4:4"]) , 10);
//     assert.strictEqual(points(["0:1","0:2","0:3","0:4","1:2","1:3","1:4","2:3","2:4","3:4"]) , 0);
//     assert.strictEqual(points(["1:0","2:0","3:0","4:0","2:1","1:3","1:4","2:3","2:4","3:4"]) , 15);
//     assert.strictEqual(points(["1:0","2:0","3:0","4:4","2:2","3:3","1:4","2:3","2:4","3:4"]) , 12);
//   });
// });

// function points(games) {
//   return games.reduce((acc, cur) => {
//     if (cur[0] > cur[2]) acc += 3;
//     if (cur[0] === cur[2]) acc += 1;
//     return acc;
//   }, 0);
// }

// console.log(
//   points(['1:0', '2:0', '3:0', '4:0', '2:1', '3:1', '4:1', '3:2', '4:2', '4:3'])
// );
// // console.log();

function power(pow) {
  return function (num) {
    return num ** pow;
  };
}

const powerOfTwo = power(2);
console.table(powerOfTwo);
