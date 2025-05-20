// let a = 7;
// let b = '5';
// a = -40;
// // 1..20
// // 21..30
// //30..40
// // ==  ===
// // != !==
// // > < >= <=
// // ===
// //&&
// // ||
// if (a > 0 && a <= 20) {
//     console.log('1');
// }
// else if (a > 20 && a <= 30) {
//     console.log(2);
// }
// else if (a > 30 && a <= 40) {
//     console.log(3);
// }
// else {
//     console.log('Такой квартиры нет');
// }

// генерирую случайное число!
let r = Math.random();
r = r * 10;
r = Math.round(r);
console.log(r);

let userNum = document.querySelector('#user-num');

document.querySelector('#btn').onclick = checkNum;

function checkNum() {
  let num = userNum.value;
  num = parseInt(num);
  console.log(num);
  // isNaN('aaaa') -> true
  // isNaN(4) -> false
  if (isNaN(num)) {
    alert('Введите корректное число');
  } else {
    if (num == r) {
      alert('Вы угадали!!!!');
      location.reload();
    } else {
      alert('Пробуй еще!');
    }
  }
}
