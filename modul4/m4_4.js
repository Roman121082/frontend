'use strict';

// const nameProduct = prompt('Наименование товара');
// const quantityProduct = prompt('Количество товара');
// const categoryProduct = prompt('Категория товара');
// const priceProduct = prompt('Цена товара');

// if (isNaN(quantityProduct)) {
//   console.log('Количество товара - Вы ввели некорректные данные')
// };
// if (isNaN(priceProduct)) {
//   console.log('Цена товара - Вы ввели некорректные данные')
// };

// console.log(nameProduct);
// console.log(quantityProduct);
// console.log(categoryProduct);
// console.log(priceProduct);
// console.log('На складе имееется', quantityProduct, ' ', nameProduct, ' на сумму ', quantityProduct * priceProduct, 'рублей');


// _____________________________________________

const rain = Math.random();

if (Math.round(rain) === 0) {
  console.log('Дождя нет!')
} else { console.log('Пошёл дождь. Возьмите зонт!') };


// _____________________________________________

{
  const mathematicsPoint = +prompt('Введите кол-во баллов по математике:');
  const russianLanguagePoint = +prompt('Введите кол-во баллов по русскому языку:');
  const informaticsPoint = +prompt('Введите кол-во баллов по информатике:');

  if (mathematicsPoint + russianLanguagePoint + informaticsPoint >= 265) {
    console.log('Поздравляю, вы поступили на бюджет!')
  } else {
    console.log('К сожалению, вы не поступили на бюджет!')
  };
};

{
  const summ = +prompt('Выберите сумму для снятия:');

  if (summ % 100) {
    console.log('Сумма для снятия должна быть кратна 100р')
  } else {
    console.log('Распечатать чек?')
  };
};