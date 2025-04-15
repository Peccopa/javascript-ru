'use strict';

function createSelect(arr) {
  const el = document.querySelector('.filter');
  el.innerHTML = `<select>
    ${arr.map((e) => `<option value="${e.name}}">${e.name}</option>`)}
  </select>`;
}

function getCategories(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => createSelect(data))
    .catch((err) => console.log(err));
}

getCategories('https://dummyjson.com/products/categories');
