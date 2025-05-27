document.querySelector('.onclick').onclick = function () {
  console.log('click');
};

document.querySelector('.ondblclick').ondblclick = function () {
  console.log('double click');
};

document.querySelector('.onmousemove').onmousemove = function () {
  console.log('gooooo');
};

document.querySelector('.onmouseenter').onmouseenter = function () {
  // мышь на элемент - 1 раз
  console.log('enter');
};

document.querySelector('.onmouseleave').onmouseleave = function () {
  // мышь покидает элемент - 1 раз
  console.log('leave');
};

document.querySelector('.onmousewheel').onmousewheel = function () {
  // мышь колесико
  console.log('wheel');
  return false;
};

document.querySelector('.onmousewheel').oncontextmenu = function () {
  // контекстное меню
  console.log('contextmenu');
  return false;
};

function test() {
  console.log(2 / 3);
}

function test2() {
  let a = 2;
  return a / 3;
}

test();
console.log(5 * test());
console.log(5 * test2());
