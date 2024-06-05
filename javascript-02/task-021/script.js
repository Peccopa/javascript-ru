// console.log(parseInt('11a'));

const str = 'sdf145sdf33';
let result = '';

for (let i = 0; i < str.length; i++) {
  +str[i] ? (result += str[i]) : false;
}

console.log(result);
