// Linear search O(n)
function linearSearch(arr, item) {
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === item) return i;
  }
  return -1;
}

// console.log(linearSearch([1, 2, 3], 1));

// Bubble sort O(n*n)
function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i += 1) {
    for (let j = 0; j < arr.length - 1 - i; j += 1) {
      if (arr[j] > arr[j + 1]) {
        let tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }
  return arr;
}

// console.log(bubbleSort([3, 4, 1, 1, 77, 33, 62, 11, 6, 2, 8]));

// Quick sort O(n log n)
function quickSort(arr) {
  if (arr.length === 0) return [];

  let pivot = arr[0],
    left = [],
    right = [];

  for (let i = 1; i < arr.length; i += 1) {
    pivot > arr[i] ? left.push(arr[i]) : right.push(arr[i]);
  }

  return quickSort(left).concat(pivot, quickSort(right));
}

// console.log(quickSort([3, 4, 1, 1, 77, 33, 62, 11, 6, 2, 8]));

// Binary Search O(log n)
function binarySearch(arr, num) {
  let mid,
    left = 0,
    right = arr.length - 1;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (arr[mid] === num) return mid;
    if (arr[mid] > num) right = mid - 1;
    if (arr[mid] < num) left = mid + 1;
  }
  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 7));
