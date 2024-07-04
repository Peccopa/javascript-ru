'use strict';

/* преобразовать пользователей до вида
	{ fullName: 'Вася Пупкин', skillNum: 2  }
*/

const users = [
  {
    name: 'Вася',
    surname: 'Пупкин',
    age: 30,
    skills: ['Разработка', 'DevOps'],
  },
  {
    name: 'Катя',
    surname: 'Белова',
    age: 18,
    skills: ['Дизайн'],
  },
];

const newUsers = users.map((obj) => {
  return {
    fullName: `${obj.name} ${obj.surname}`,
    skillNum: obj.skills.length,
  };
});
console.log(newUsers);
