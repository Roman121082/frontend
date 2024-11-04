
'use strict';


const filter = (allStudents, failedStudents) => {
  const pussedStudents = allStudents.filter(item => !failedStudents.includes(item));
  return pussedStudents;
}

const allStudents = ['Иванов', 'Петров', 'Сидоров', 'Попов', 'Соколов'];
const failedStudents = ['Попов', 'Соколов'];

console.log(filter(allStudents, failedStudents));


const numbers = [3, 22, 33, 2, 16, 57, 342, 512, 22];

const newArr = numbers.reduce((acc, item, i, arr) => {
  return acc + item;
})

console.log(newArr);