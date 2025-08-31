'use strict';

const wrapper = document.querySelector('.wrapper');

for (let i = 0; i < 100; i++) {
  const el = document.createElement('div');
  el.classList.add('inner');
  el.innerHTML = i;
  wrapper.append(el);
}

function search(event) {
  const inputValue = event.target.value;
  console.log(inputValue);
}

