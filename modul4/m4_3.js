"use strict";
const nameProduct = prompt('Наименование товара');
let quantityProduct = prompt('Количество товара');
const categoryProduct = prompt('Категория товара');
let priceProduct = prompt('Цена товара');

quantityProduct = +quantityProduct;
console.log('Количество товара', quantityProduct);
priceProduct = +priceProduct;
console.log('Цена товара', priceProduct);

const summPriceProduct = quantityProduct * priceProduct;

console.log('На складе имееется', quantityProduct, nameProduct, ' на сумму', summPriceProduct, 'рублей');