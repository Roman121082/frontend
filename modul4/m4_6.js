"use strict";

// for (let i = 2; i <= 10; i++) {

//   console.log('----------------------');

//   for (let y = 1; y <= 10; y++) {
//     console.log(`${i} ^ ${y} = ${i ** y}`);
//   }
// }

const isPrime = (number) => {
  const squareRoot = Math.floor(Math.sqrt(number));

  for (let i = 2; i <= squareRoot; i++) if (number % i === 0) return false;
  return number >= 2;
};

console.log(`результат проверки на простое число: ${isPrime(53)}`);

for (let i = -100, count = 0; i < 100; i++) {
  if (isPrime(i)) {
    console.log(`${++count}) простое число ${i};`);
  }
};

let names = 'Вася, Петя, Маша';

let arr = names.split('. ');
console.log(arr);
for (let name of arr) {
  alert(`Сообщение получат: ${name}.`); // Сообщение получат: Вася (и другие имена)
}