"use strict";


// const converterEuro = (cost, usd, rub) => {
//   return cost * usd * rub;
// };

// let cost = prompt('введите стоимость покупки в евро')
// console.log('стоимость в рублях', converterEuro(cost, 2, 73));

function converterText(string) {

  const newString = string.trim().toLowerCase();
  return newString[0].toUpperCase() + newString.slice(1);
}

console.log(converterText('привет Мир'));


const calculate = (sumCart, quantityProduct, promotionalCode) => {

  if (quantityProduct > 10) {
    sumCart -= (0.03 * sumCart);
  };

  if (sumCart > 30000) {
    sumCart -= ((sumCart - 30000) * 0.15);
  };

  if (promotionalCode === 'METHED') {
    sumCart -= sumCart * 0.1;
  };

  if (promotionalCode === 'G3H2Z1' && (sumCart > 2000)) {
    sumCart -= 500;
  };

  return sumCart;

};

calculate();