"use strict";

function sumTo(n) {
  let sum = 0;
  let i = 0;
  for (i; i <= n; i++) {
    sum += i;
  }
  return sum;
}
console.log(sumTo(10));
console.log('_ _ _ _ _ _ _ _ _');

let arr = ["Я", "изучаю", "JavaScript"];
let arr1 = arr.slice(0, 2);
console.log(arr1);

const numbers = [1, 2, 3, 4];
numbers.forEach((num) => {
  let square = num * num;
  console.log('квадрат числа = ' + square);
})

let n = Math.ceil(Math.random() * 10 + 1);
console.log(n);

let t = Math.random();
console.log(t);