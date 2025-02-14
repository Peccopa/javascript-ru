'use strict';

// Женя с Юлей все еще изучают кошек, и на этот раз они изучают, едят ли кошки слишком много или слишком мало.
// Слишком много еды означает, что текущая порция пищи кошки больше рекомендуемой, а слишком мало еды - наоборот.
// Нормальное количество еды означает, что текущая порция корма для кошки находится в диапазоне от 10% выше и 10% ниже рекомендуемой порции.
// ( рекомендуемая * 0.9 < нормальная < рекомендуемая * 1.1 )
const cats = [
  { catWeight: 3, foodWeight: 20, owners: ['Наташа'] },
  { catWeight: 6, foodWeight: 90, owners: ['Марина', 'Алиса'] },
  { catWeight: 4, foodWeight: 45, owners: ['Алекс', 'Ирина'] },
  { catWeight: 7, foodWeight: 80, owners: ['Борис'] },
  { catWeight: 9, foodWeight: 85, owners: ['Титан'] },
];
// 1. Переберите элементы массива cats, которые являются объектами, и для каждой кошки вычислите рекомендуемую порцию еды и добавьте ее к объекту, как новое свойство. Не создавайте новый массив, просто переберите массив!
// Формула вычисления рекомендуемой порции:
// рекомендуемая порция = вес кошки * 0.75 * 12 (результат в граммах, а вес кошки в килограммах).
cats.forEach((cat) => {
  cat.recommendedFoodWeight = cat.catWeight * 0.75 * 12;
});
console.log(cats);

// 2. Найдите кошку, имя хозяина которой Алекс и выведите в консоль, ест ли эта кошка слишком много или слишком мало. Подсказка: у некоторых кошек есть несколько владельцев, поэтому вам сначала нужно найти Алекса в массиве владельцев.
const howMuchDoesCatEat = function ({ foodWeight, recommendedFoodWeight }) {
  if (foodWeight > recommendedFoodWeight * 1.1) return 'The cat eats too much!';
  if (foodWeight < recommendedFoodWeight * 0.9)
    return 'The cat eats too little!';
  return `The cat's diet is within the normal range`;
};
console.log(
  howMuchDoesCatEat(cats.find((cat) => cat.owners.includes('Алекс')))
);
// 3. Создайте массив, содержащий всех владельцев кошек, которые слишком много едят (catsEatTooMuchOwners), и массив со всеми владельцами кошек, которые слишком мало едят (catsEatTooLittleOwners).
const catsEatTooMuchOwners = [];
const catsEatTooLittleOwners = [];
cats.forEach(({ foodWeight, recommendedFoodWeight, owners }) => {
  if (foodWeight > recommendedFoodWeight * 1.1)
    catsEatTooMuchOwners.push(...owners);
  if (foodWeight < recommendedFoodWeight * 0.9)
    catsEatTooLittleOwners.push(...owners);
});
console.log(catsEatTooLittleOwners, catsEatTooMuchOwners);
// 4. Выведите в консоль строку для каждого из массивов, созданных в пункте 3:
// "Марина, Алиса, Борис - хозяева кошек, которые едят слишком много!" и "Наташа, Ирина, Алекс  - хозяева кошек, которые едят слишком мало!"
console.log(
  `${catsEatTooMuchOwners.join(
    ', '
  )} - хозяева кошек, которые едят слишком много!`
);
console.log(
  `${catsEatTooLittleOwners.join(
    ', '
  )} - хозяева кошек, которые едят слишком мало!`
);
// 5. Выведите в консоль, ест ли хоть одна кошка в точном соответствии с рекомендуемым количеством еды (просто true или false).

// 6. Выведите в консоль, ест ли хоть одна кошка нормальное количество еды (просто true или false).
// 7. Создайте массив, содержащий кошек, которые едят нормальное количество еды (попробуйте повторно использовать условие, используемое в пункте 6).
// 8. Создайте мелкую (shallow) копию массива cats и отсортируйте по свойству рекомендуемая порция еды по возрастанию (имейте в виду, что порции находятся внутри объектов массива).
