'use strict';

function $(selector) {
  return document.querySelector(selector);
}
function $All(selector) {
  return document.querySelectorAll(selector);
}

function removeHiddenClass() {
  modalWindow.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

function addHiddenClass() {
  modalWindow.classList.add('hidden');
  overlay.classList.add('hidden');
}

const modalWindow = $('.modal-window');
const overlay = $('.overlay');
const btnCloseModalWindow = $('.close-modal-window');
const btnsShowModalWindow = $All('.show-modal-window');

btnsShowModalWindow.forEach(element => {
  element.addEventListener('click', e => removeHiddenClass);
});

btnCloseModalWindow.addEventListener('click', addHiddenClass);
overlay.addEventListener('click', addHiddenClass);

