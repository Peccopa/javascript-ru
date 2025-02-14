'use strict';

const user1 = {
  name: 'Vasya',
  birthday: '02/01/2022',
};

function isBirthday(user) {
  const birthdayDate = new Date(user.birthday);
  const now = new Date();
  if (birthdayDate.getMonth() !== now.getMonth()) return false;
  if (birthdayDate.getDate() !== now.getDate()) return false;
  return true;
}

console.log(isBirthday(user1));
