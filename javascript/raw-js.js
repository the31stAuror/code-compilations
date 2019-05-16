const _ = require("lodash");
const join = require("lodash/fp/join");
const map = require("lodash/fp/map");
const split = require("lodash/fp/split");
const compose = require("lodash/fp/compose");

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
// console.log(Math.random());
const time = () => new Date().toLocaleTimeString();
console.log(time);


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
// const _ = require('lodash');
// const chained = _.chain(enrollment)
//     .filter(student => student.enrolled > 1)
//     .map(student => student.grade)
//     .value();
// console.log(chained);

class Person {
  constructor(firstname, lastname, ssn) {
    this._firstname = firstname;
    this._lastname = lastname;
    this._ssn = ssn;
    this._address = null;
    this._birthYear = null;
  }

  get ssn() {
    return this._ssn;
  }

  get firstname() {
    return this._firstname;
  }

  get lastname() {
    return this._lastname;
  }

  get address() {
    return this._address;
  }

  get birthYear() {
    return this._birthYear;
  }

  set birthYear(year) {
    this._birthYear = year;
  }

  set address(address) {
    this._address = address;
  }

  toString() {
    return `Person(${this._firstname}, ${this._lastname}`;
  }

  peopleInSameCountry(friends) {
    let result = [];
    for (let idx in friends) {
      let friend = friends [idx];
      if (this.address.country === friend.address.country) {
        result.push(friend);
      }
    }
    return result;
  }
}

class Student extends Person {
  constructor(firstname, lastname, ssn, school) {
    super(firstname, lastname, ssn);
    this._school = school;
  }

  get school() {
    return this._school;
  }

  studentsInSameCountryAndSchool(friends) {
    let closeFriends = super.peopleInSameCountry(friends);
    let result = [];
    for (let idx in closeFriends) {
      let friend = closeFriends[idx];
      if (friend.school === this.school) {
        result.push(friend);
      }
    }
    return result;
  }
}

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

// pure functions
// mapping
const maxValue = Math.max(8, 10, 7);
// console.log("maxValue:", maxValue);

// referential transparency
const double = x => x * 2;
// console.log("double:", double(5));
// console.log("double:", 10);

// immutability
const immutableAddToList = (list, item, quantity) => {
  const newList = _.cloneDeep(list);
  newList.items.push({ item, quantity });
  return newList;
};

let list = {
  items: [
    { item: 'Fray', quantity: 10 },
    { item: 'Clegane', quantity: 1 }
  ]
};
console.log("list.items:\n", list.items);
const newList = immutableAddToList(list, 'Lannister', 2);
console.log("list.items:\n", list.items);
console.log("newList.items:\n", newList.items);


let item = {
    name: "piattos"
};
const setPrice = (item, price) => Object.assign(item, { price });
setPrice(item, 10);
console.log("item:", item);

// function composition: f(g(x))

// avoid shared state

// avoid mutating state

// avoid side effects
