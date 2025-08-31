function makeMatrix(h, w, value) {
  // const result = [];
  // for (let i = 0; i < h; i += 1) {
  //   result.push([]);
  //   for (let j = 0; j < w; j += 1) {
  //     result[i].push(value);
  //   }
  // }
  // return result;

  return Array.from(new Array(h)).fill(Array.from(new Array(w)).fill(value));
}

const matrix = makeMatrix(3, 5, 5);

function getTotalProduct(matrix) {
  // let result = 1;
  // for (let i = 0; i < matrix.length; i += 1) {
  //   for (let j = 0; j < matrix[i].length; j += 1) {
  //     result *= matrix[i][j];
  //   }
  // }
  // return result;

  return matrix.reduce((acc, cur) => {
    return (acc *= cur.reduce((acc, cur) => acc * cur, 1));
  }, 1);
}

const totalProduct = getTotalProduct(matrix);
// console.log(totalProduct);

// Write a function `twoSumPairs(numbers, target)` that accepts an array of numbers and a target number
// as arguments. The function should return a 2D array containing all unique pairs of elements that
// sum to the target.

function twoSumPairs(numbers, target) {
  const result = [];

  for (let i = 0; i < numbers.length; i += 1) {
    for (let j = i + 1; j < numbers.length; j += 1) {
      if (numbers[i] + numbers[j] === target) {
        result.push(new Array(numbers[i], numbers[j]));
        break;
      }
    }
  }

  return result;
}

// console.log(twoSumPairs([1, 2, 3, 4, 5], 5)); // [ [1, 4], [2, 3] ]
// console.log(twoSumPairs([2, 3, 4, 6, 5], 8)); // [ [2, 6], [3, 5] ]
// console.log(twoSumPairs([10, 7, 4, 5, 2], 12)); // [ [10, 2], [7, 5] ]
// console.log(twoSumPairs([3, 9, 8], 11)); // [ [3, 8] ]
// console.log(twoSumPairs([3, 9, 8], 10)); // [ ]

// Write a function `zipper` that accepts two arrays as arguments. The function should return a 2D
// array containing pairs of elements at the same indices. You can assume that the arrays have the
// same length.

function zipper(array1, array2) {
  return array1.map((e, i) => [e, array2[i]]);
}

let array1 = ['a', 'b', 'c', 'd'];
let array2 = [-1, -2, -3, -4];
// console.log(zipper(array1, array2));
// [
//   ['a', -1],
//   ['b', -2],
//   ['c', -3],
//   ['d', -4],
// ]

let array3 = ['whisper', 'talk', 'shout'];
let array4 = ['quiet', 'normal', 'loud'];
// console.log(zipper(array3, array4));
// [
//   ['whisper', 'quiet'],
//   ['talk', 'normal'],
//   ['shout', 'loud'],
// ]

// Given an array of integers, find the one that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.
// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

function findOdd(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = i + 1; j < arr.length; j += 1) {
      if (arr[i] === arr[j]) {
        arr[i] = null;
        arr[j] = null;
      }
    }
  }
  return arr.filter((e) => typeof e === 'number')[0];
}

// console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]));
// console.log(findOdd([0]));

// Implement a function that computes the difference between two lists. The function should remove all occurrences of elements from the first list (a) that are present in the second list (b). The order of elements in the first list should be preserved in the result.
// Examples
// If a = [1, 2] and b = [1], the result should be [2].
// If a = [1, 2, 2, 2, 3] and b = [2], the result should be [1, 3].

function arrayDiff(a, b) {
  return a.filter((v) => !b.includes(v));
}

// console.log(arrayDiff([1, 2, 2, 2, 3, 4, 5], [2, 4])); // [1, 3, 5]

// Description:
// Digital root is the recursive sum of all the digits in a number.
// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

// Examples
// 16  -->  1 + 6 = 7
//  942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

function digitalRoot(n) {
  const sum = Array.from(String(n), Number).reduce((a, v) => a + v);
  return String(sum).length > 1 ? digitalRoot(sum) : sum;
}

// console.log(digitalRoot(0));
// console.log(digitalRoot(493193));

// Description:
// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
// Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.
// Don't forget the space after the closing parentheses!

function createPhoneNumber(n) {
  return `(${n[0]}${n[1]}${n[2]}) ${n[3]}${n[4]}${n[5]}-${n[6]}${n[7]}${n[8]}${n[9]}`;
}

// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

// bubble sort

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = i + 1; j < arr.length; j += 1) {
      if (arr[i] > arr[j]) {
        const x = arr[i];
        arr[i] = arr[j];
        arr[j] = x;
      }
    }
  }
  return arr;
}

// console.log(bubbleSort(arr));

function quickSort(arr) {
  if (!arr.length) return arr;

  const mid = arr[0];
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    arr[i] < mid ? left.push(arr[i]) : right.push(arr[i]);
  }

  return [...quickSort(left), mid, ...quickSort(right)];
}

const arr = [3, 5, 6, 8, 2, 1, 7, 9, 4];
const sortedArr = quickSort(arr);

// function iterationBinarySearch(arr, num) {
//   if (!arr.length) return arr;
//   const mid = Math.floor(arr.length / 2);
//   if(num < arr[mid])
// }

function recursiveBinarySearch(arr, num) {
  if (!arr.length) return arr;
}

console.log(iterationBinarySearch(sortedArr, 2));
// console.log(recursiveBinarySearch(sortedArr));
