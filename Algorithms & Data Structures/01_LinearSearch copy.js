// 01_LinearSearch

// Linear Search
// Iteration Method - O(n)
const array = [1, 4, 5, 8, 5, 1, 2, 7, 5, 2, 11];

let count = 0; // считаем итерации
function linearSearch(array, item) {
  for (let i = 0; i < array.length; i += 1) {
    count += 1;
    if (array[i] === item) return i; // возвращаем индекс элемента
  }
  return null; // в массиве нет искомого элемента
}
console.log(`index = ${linearSearch(array, 11)}`);
console.log(`count = ${count}`);


