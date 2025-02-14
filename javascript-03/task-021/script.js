// console.log(parseInt('11a'));

// const str = 'sdf145sdf33';
// let result = '';

// for (let i = 0; i < str.length; i++) {
//   +str[i] ? (result += str[i]) : false;
// }

// console.log(result);

// console.log((x => x * x)(5));

// function arrayPlusArray(arr1, arr2) {
//   return arr1.concat(arr2).reduce((acc, value) => acc + value);
// }

// const a = [1, 2, 3, 4];
// const b = [1, 2, 3, 4, 5];
// ((a, b) => a.concat(b).reduce((a, v) => a + v))(a, b);

function arrayPlusArray(arr1, arr2) {
  return arr1.concat(arr2).reduce((acc, value) => acc + value);
}

// console.log(arrayPlusArray([1, 2, 3, 4], [1, 2, 3, 4, 5]));
