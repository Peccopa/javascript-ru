'use strict';

const messages = document.querySelector('.messages');
const input = document.querySelector('.input');

const ws = new WebSocket('ws://chat.shas.tel/');
ws.addEventListener('open', () => {
  alert('Ready');
});
