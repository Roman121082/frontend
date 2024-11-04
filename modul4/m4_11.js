"use strict";




const numbers = [152, 3, 22, 33, 2, 16, 57, 542, 512];

const num = numbers.map(item => item * 2)

console.log(num);
const animals = ['mouse', 'cat', , , 'dog'];

animals.splice(2, 2, 'Monkey');

animals[0] = 'parrot'
const animalsTwo = animals.slice()
console.log(animals);
console.log(animalsTwo);

// delete numbers[1];

let strNumbers = numbers.join('; ')


console.log(numbers);
console.log(strNumbers);

let numberTwo = strNumbers.split();
console.log(numberTwo);

let numberThre = numbers.filter(item => item > 20 && item < 500);
console.log(numberThre);

let numberFour = numberThre.sort((a, b) => a - b);
console.log(numberFour);