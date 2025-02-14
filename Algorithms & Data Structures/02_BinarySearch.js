// 02_BinarySearch

// Binary Search
// Iteration Method - O(Log2n)
const arr = [-5, -1, 0, 1, 2, 3, 5, 4, 6, 100, 10000];

function binarySearchIterationMethod(arr, item) {
  let left = 0;
  let right = arr.length - 1;
  let mid;

  while (left <= right) {
    mid = Math.floor((right + left) / 2);

    if (arr[mid] === item) {
      return mid;
    } else if (arr[mid] > item) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return -1;
}
console.log(binarySearchIterationMethod(arr, 100)); // 9

// Binary Search
// Recursive Method - O(Log2n)
function binarySearchRecursiveMethod(
  arr,
  item,
  left = 0,
  right = arr.length - 1
) {
  if (left > right) {
    return -1;
  } else {
    let mid = Math.floor((right + left) / 2);

    if (arr[mid] === item) {
      return mid;
    } else if (arr[mid] > item) {
      return binarySearchRecursiveMethod(arr, item, left, mid - 1);
    } else {
      return binarySearchRecursiveMethod(arr, item, mid + 1, right);
    }
  }
}

console.log(binarySearchRecursiveMethod(arr, 5)); // 6

// Binary Search
// Iteration Method - test
// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// function binarySearch(array, item) {
//   let start = 0; // индекс первого элемента
//   let end = array.length - 1; // индекс последнего элемента
//   let middle; // индекс среднего высчитываем внутри цикла
//   let found = false; // флаг - нашли мы элемент или нет
//   let position = -1; // позиция элемента в массиве или -1 если элемента нет
//   while (found === false && start <= end) {
//     middle = Math.floor((start + end) / 2);
//     if (array[middle] === item) {
//       found = true;
//       position = middle;
//       return position;
//     }
//     if (item < array[middle]) {
//       end = middle - 1;
//     } else {
//       start = middle + 1;
//     }
//   }
//   return position;
// }
// console.log(`index = ${binarySearch(array, 2)}`);

// Binary Search
// Recursive Method - test
