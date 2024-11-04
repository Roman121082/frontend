'use strict';

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