/** ЗАДАЧА 53 - Сокращенное написание свойств объектов
 *
 * 1. Исправьте все ошибки в коде.
 *
 * 2. Измените объект, возвращаемый функцией "photosGallery", используя:
 *  - Сокращенные имена свойств
 *  - Сокращенные имена методов
 *  - Также нужно изменить одно свойство объекта
 * и сделать его вычисляемым свойством
 *
 * 3. Сообщения в консоли должны быть точно такими же,
 * как и в конце этой задачи
 */

const { log } = require('console');

const photosGallery = (title, dimensions, date) => {
  return {
    title,
    [dimensions]: true,
    date,
    info() {
      console.log(`Фото "${title}" имеет разрешение ${dimensions}`);
    },
    seconds(timeAgo) {
      const lastChar = String(timeAgo).at(-1);
      const preLastChar = String(timeAgo).at(-2);
      if (lastChar === '1' && preLastChar !== '1') {
        return 'у';
      } else if (
        (lastChar === '2' || lastChar === '3' || lastChar === '4') &&
        preLastChar !== '1'
      ) {
        return 'ы';
      } else {
        return '';
      }
    },
    publishInfo() {
      const timeAgo = Math.floor(
        (new Date().getTime() - date.getTime()) / 1000
      );
      console.log(
        `Фото было "${title}" опубликовано ${timeAgo} секунд${this.seconds(
          timeAgo
        )} назад`
      );
    },
  };
};

const myDogPhoto = photosGallery('My dog', '1920x1080', new Date());

const testDimension1 = '1920x1080';
const testDimension2 = '1080x720';

myDogPhoto.info();
/* Фото "My dog" имеет разрешение 1920x1080 */

setTimeout(() => myDogPhoto.publishInfo(), 2000);
/* Фото "My dog" было опубликовано 2 секунды назад */

/* ВОПРОС: Почему метод "publishInfo" все еще имеет доступ 
к параметрам функции "photosGallery" (например "date")? */

// console.log(myDogPhoto);
console.log(myDogPhoto[testDimension1]); // true
console.log(myDogPhoto[testDimension2]); // undefined

// 0 - ''
// 1 - 'у'
// 2 - 'ы'
// 3 - 'ы'
// 4 - 'ы'
// 5 - ''
// 6 - ''
// 7 - ''
// 8 - ''
// 9 - ''
// 10 - ''
// 11 - ''!
// 12 - ''!
// 13 - ''!
// 14 - ''!
// 15 - ''
// 16 - ''
// 17 - ''
// 18 - ''
// 19 - ''
// 20 - ''
// 21 - 'у'
// 22 - 'ы'
// 23 - 'ы'
// 24 - 'ы'
// 25 - ''
// 26 - ''
// 27 - ''
// 28 - ''
// 29 - ''
// 30 - ''
// 31 - 'у'
// 32 - 'ы'
// 33 - 'ы'
// 34 - 'ы'
// 35 - ''
// 36 - ''
// 37 - ''
// 38 - ''
// 39 - ''
// 40 - ''
