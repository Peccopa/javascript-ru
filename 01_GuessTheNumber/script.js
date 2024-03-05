'use strict';

// console.log(document.querySelector('.guess-message').textContent);
// document.querySelector('.guess-message').textContent = 'Guessed!';
// document.querySelector('.question').textContent = 7;
// document.querySelector('.score').textContent = 11;
// document.querySelector('.number-input').value = 13;

// const eventHandler = () => {
//   console.log(document.querySelector('.number-input').value);
// };

document.querySelector('.check').addEventListener('click', () => {
  const guessingNumber = Number(document.querySelector('.number-input').value);
  if (!guessingNumber) {
    document.querySelector('.guess-message').textContent = 'Input some number!';
  }
});
