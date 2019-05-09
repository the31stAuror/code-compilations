let ARRAY = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let COUNTER = 0;


// imperative
// let imperativeArray = [];
// for (let i = 0; i < ARRAY.length; i++) {
//    imperativeArray[i] = Math.pow(ARRAY[i], 2);
// }
// console.log(imperativeArray); //-> [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]


// declarative
// console.log(ARRAY.map(number => Math.pow(number, 2))); //-> [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]


// impure
// function increment() {
//     return ++counter;
// }
// console.log(counter);
// increment();
// console.log(counter);
//
// console.log(Date.now());


// referentially transparent
// let betterIncrement = number => number + 1;
// console.log(betterIncrement(COUNTER));

// const input = [80, 90, 100];
// const sum = (total, current) => total + current;
// const total = arr => arr.reduce(sum);
// const size = arr => arr.length;
// const divide = (dividend, divisor) => dividend / divisor;
// const average = arr => divide(total(arr), size(arr));
// console.log(average(input));


// immutability
// with side effect
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const sortDesc = arr => {
//     return arr.sort((a, b) => b - a);
// };
// console.log(arr);
// console.log(sortDesc(arr));
// console.log(arr);

// chains
let enrollment = [
  {enrolled: 2, grade: 100},
  {enrolled: 2, grade: 80},
  {enrolled: 1, grade: 89}
];

// imperative
// let totalGrades = 0;
// let totalStudentsFound = 0;
// for (let i = 0; i < enrollment.length; i++) {
//     let student = enrollment[i];
//     if(student !== null) {
//         if(student.enrolled > 1) {
//             totalGrades += student.grade;
//             totalStudentsFound++;
//         }
//     }
// }
// let average = totalGrades / totalStudentsFound;
// console.log(average);

// declarative
// const students = enrollment.filter(student => student.enrolled > 1);
// const grades = students.map(student => student.grade);
// const sum = (total, current) => total + current;
// const size = arr => arr.length;
// const total = arr => arr.reduce(sum);
// const average = arr => total(arr) / size(arr);
// console.log(average(grades));

// functional chain
const _ = require('lodash');
const chained = _.chain(enrollment)
    .filter(student => student.enrolled > 1)
    .map(student => student.grade)
    .value();
console.log(chained);

// let starks = [
//     { "name": "Ned", "status": "dead" },
//     { "name": "Catelyn", "status": "dead" },
//     { "name": "Robb", "status": "dead" },
//     { "name": "Sansa", "status": "alive" },
//     { "name": "Arya", "status": "alive" },
//     { "name": "Bran", "status": "alive" },
//     { "name": "Rickon", "status": "dead" }
// ];
//
// let starksSentences = starks.map(stark => `${stark.name} is ${stark.status}.`);
// console.log(starksSentences);