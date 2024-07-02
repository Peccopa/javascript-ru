'use strict';

const userName = 'Вася dsfgldkfjg sjsdldkfg Пупкин';
// const newUserName =
//   userName.split(' ')[0] +
//   ' ' +
//   userName.split(' ')[userName.split(' ').length - 1];

const userFirstName = userName.slice(0, userName.indexOf(' '));
const userLastName = userName.slice(userName.lastIndexOf(' ') + 1);
// const userLastName = userName.slice(-1, userName.lastIndexOf(' '));

console.log(`${userFirstName} ${userLastName}`);
