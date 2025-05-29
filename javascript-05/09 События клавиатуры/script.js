// document.querySelector('#test').onkeypress = function (e) {
//     console.log(e.keyCode);
//     console.log(e.shiftKey);
//     if (e.keyCode < 97 || e.keyCode > 122) {
//         console.log('Недопустимые символы');
//     }
//     else {
//         this.value += e.key;
//     }
//     // e.altKey false
//     // e.charCode 97
//     // e.code "KeyA"
//     // e.ctrlKey false
//     // e.key: "a"
//     // e.keyCode: 97
//     // e.shiftKey: false
//     return false;
// }
let left = 0;

// document.onkeypress = function (e) {
//     console.log(e.keyCode);
//     let sq = document.querySelector('.sq');
//     if (e.keyCode == 100) {
//         left = left + 10;
//         sq.style.marginLeft = left + 'px';
//     }
//     if (e.keyCode == 97) {
//         left = left - 10;
//         sq.style.marginLeft = left + 'px';
//     }
// }

document.onkeypress = function () {
  console.log('keypress');
};
document.onkeydown = function () {
  console.log('keydown');
};

document.onkeyup = function () {
  console.log('keyup');
};
