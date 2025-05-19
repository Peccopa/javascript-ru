function hello() {
  console.log('Hello!');
  hola();
}

function hola() {
  console.log('Hola!');
}

// globalThis.hello();
// window.hello();
// hello();

const btn = document.querySelector('#btn');
const modalShow = document.querySelector('#modal-show');
const modalHide = document.querySelector('#modal-hide');
const modal = document.querySelector('.modal');
function show() {
  modal.style.display = 'block';
}
function hide() {
  modal.style.display = 'none';
}
// btn.hidden = true;
console.log(btn.clientWidth);
console.log(btn.id);
btn.onclick = hello;
modalShow.onclick = show;
modalHide.onclick = hide;
