'use strict';

// https://learn.javascript.ru/searching-elements-dom

// Поиск элементов
// важность: 4
// Вот документ с таблицей и формой.
// Как найти?…
// Таблицу с id="age-table".
// console.log(window['age-table']);
// Все элементы label внутри этой таблицы (их три).
// console.log(document.querySelectorAll('#age-table label'));
// Первый td в этой таблице (со словом «Age»).
// console.log(document.querySelector('[name="age"]'));
// Форму form с именем name="search".
// console.log(document.querySelector('[name="search"]'));
// Первый input в этой форме.
// console.log(document.querySelector('[name="search"]').querySelector('input'));
// Последний input в этой форме.
// console.log(document.querySelector('[name="search"]').querySelectorAll('input')[1]);
// Откройте страницу table.html в отдельном окне и используйте для этого браузерные инструменты разработчика.


