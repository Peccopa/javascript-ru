'use strict';

// console.log(document.querySelector('.guess-message').textContent);
// document.querySelector('.guess-message').textContent = 'Guessed!';
// document.querySelector('.question').textContent = 7;
// document.querySelector('.score').textContent = 11;
// document.querySelector('.number-input').value = 13;
// const eventHandler = () => {
//   console.log(document.querySelector('.number-input').value);
// };

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.check').addEventListener('click', () => {
  const guessingNumber = Number(document.querySelector('.number-input').value);
  if (!guessingNumber) {
    // no input
    document.querySelector('.guess-message').textContent = 'Введите число!';
  } else if (guessingNumber === secretNumber) {
    // player won
    document.querySelector('.question').textContent = secretNumber;
    document.querySelector('.guess-message').textContent = 'Правильно!';
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.question').style.width = '50rem';
  } else if (guessingNumber > secretNumber) {
    // too high
    if (score > 1) {
      document.querySelector('.guess-message').textContent = 'Слишком много!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.guess-message').textContent = 'Вы проиграли!';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guessingNumber < secretNumber) {
    // to low
    if (score > 1) {
      document.querySelector('.guess-message').textContent = 'Слишком мало!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.guess-message').textContent = 'Вы проиграли!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', () => {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  document.querySelector('.question').textContent = '???';
  document.querySelector('.question').style.width = '25rem';
  document.querySelector('.guess-message').textContent = 'Начни угадывать!';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number-input').value = '';
  document.querySelector('body').style.backgroundColor = 'black';
});
