'use strict';

// Получите данные о пользователях GitHub
// Создайте асинхронную функцию getUsers(names), которая получает на вход массив логинов пользователей GitHub, запрашивает у GitHub информацию о них и возвращает массив объектов-пользователей.

// Информация о пользователе GitHub с логином USERNAME доступна по ссылке: https://api.github.com/users/USERNAME.

// В песочнице есть тестовый пример.

// Важные детали:

// На каждого пользователя должен приходиться один запрос fetch.
// Запросы не должны ожидать завершения друг друга. Надо, чтобы данные приходили как можно быстрее.
// Если какой-то запрос завершается ошибкой или оказалось, что данных о запрашиваемом пользователе нет, то функция должна возвращать null в массиве результатов.

async function getUsers(names) {
  const result = [];
  names.map(async (name) => {
    const url = `https://api.github.com/users/${name}`;
    const user = await fetch(url).then(
      async (res) => (res.status === 200 ? await res.json() : null),
      async () => null
    );
    result.push(user);
  });
  console.log(result);
  
  return result;
}

const names = ['peccopa', 'bont45t4yt5'];

getUsers(names);
