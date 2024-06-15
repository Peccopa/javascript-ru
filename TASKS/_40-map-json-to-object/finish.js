/** ЗАДАЧА 40 - Конвертация JSON в JavaScript объекты
 *
 * 1. Конвертируйте массив JSON объектов в массив объектов JavaScript
 *
 * 2. Выведите в консоль результирующий массив
 *
 * 3. Выведите в консоль "postId" второго объекта
 *
 * 4. Выведите в консоль "commentsQuantity" последнего объекта
 */

const postsJSON = [
  '{"postId":1355,"commentsQuantity":5}',
  '{"postId":5131,"commentsQuantity":13}',
  '{"postId":6134,"commentsQuantity":2}',
  '{"postId":2351,"commentsQuantity":8}',
];

// const postsObj = postsJSON.reduce((acc, curr) => {
//   acc.push(JSON.parse(curr));
//   return acc;
// }, []);

// const postsObj = postsJSON.map((post) => JSON.parse(post));

const postsObj = postsJSON.map(JSON.parse);

console.log(postsJSON);
console.log(postsObj);
console.log(postsObj[1].postId);
console.log(postsObj[postsObj.length - 1].commentsQuantity);
console.log(postsObj.at(postsObj.length - 1).commentsQuantity);