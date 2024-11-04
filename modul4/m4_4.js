'use strict';


const getTotalPrice = (money, b, promo) => {
  let totalPrice = money;
  let discount1 = 0;
  let discount2 = 0;
  let discount3 = 0;
  if (money >= 30000) {
    discount1 = money * 0.15;
    console.log(discount1);
  }

  if (b >= 10) {
    discount2 = money * 0.03;
    console.log(discount2);
  }

  if (promo = 'METHED') {
    discount3 = money * 0.1;
    console.log(discount3);
  }

  return totalPrice - discount1 - discount2 - discount3;
}

const promo = 'METHED'
const result = getTotalPrice(2000, 20, promo)
console.log(result);