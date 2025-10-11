// Сортировка пузырьком
// Проходит по набору данных слева направо, сравнивая значения в каждой паре и перемещая наименьшее значение влево. Процесс повторяется до тех пор, пока не останется ни одного значения, которое можно было бы переместить.

// Алгоритм прост в реализации, но неэффективен.

// Сложность (Большое О)
// Лучший случай: O(n)
// Средний и худший случаи: O(n²)

// 04_BubbleSort

// Bubble Sort
// Iteration Method - O(n*n)
const array1 = [
  0, 3, 2, 5, 6, 8, 1, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 6, 2, 35, 6, 3,
  32,
];

function bubbleSort1(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = 0; j < arr.length; j += 1) {
      if (arr[j] > arr[j + 1]) {
        let tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }

  return arr;
}

// console.log(bubbleSort1(array1));

const array2 = [3, 2, 1];

function bubbleSort2(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = 0; j < arr.length - 1 - i; j += 1) {
      if (arr[j] > arr[j + 1]) {
        const tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }

  return arr;
}

console.log(bubbleSort2(array2));
