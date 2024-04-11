'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

function $(selector) {
  return document.querySelector(selector);
}

$('.check').addEventListener('click', () => {
  const guessingNumber = Number($('.number-input').value);
  if (!guessingNumber) {
    // no input
    $('.guess-message').textContent = 'Введите число!';
  } else if (guessingNumber === secretNumber) {
    // player won
    $('.question').textContent = secretNumber;
    $('.guess-message').textContent = 'Правильно!';
    $('body').style.backgroundColor = 'green';
    $('.question').style.width = '50rem';
    if (score > highscore) highscore = score;
    $('.highscore').textContent = highscore;
    // number from input is wrong
  } else if (guessingNumber !== secretNumber) {
    if (score > 1) {
      $('.guess-message').textContent =
        guessingNumber > secretNumber ? 'Слишком много!' : 'Слишком мало!';
      score--;
      $('.score').textContent = score;
    } else {
      $('.guess-message').textContent = 'Вы проиграли!';
      $('.score').textContent = 0;
    }
  }
});

$('.again').addEventListener('click', () => {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  $('.question').textContent = '???';
  $('.question').style.width = '25rem';
  $('.guess-message').textContent = 'Начни угадывать!';
  $('.score').textContent = score;
  $('.number-input').value = '';
  $('body').style.backgroundColor = 'black';
});
