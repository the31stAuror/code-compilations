const _ = require("lodash");
const join = require("lodash/fp/join");
const map = require("lodash/fp/map");
const split = require("lodash/fp/split");
const compose = require("lodash/fp/compose");
const pipe = require("lodash/fp/pipe");

// mapping
// const maxValue = Math.max(8, 10, 7);
// console.log("maxValue:", maxValue);

// declarative
// let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//
// let imperativeArray = [];
// for (let i = 0; i < numbers.length; i++) {
//  imperativeArray[i] = Math.pow(numbers[i], 2);
// }
// console.log(imperativeArray);

// referential transparency
// const double = x => x * 2;
// console.log("double:", double(5));
// console.log("double:", 10);

// immutability
// const addToList = (list, item, quantity) => {
//   list.items.push({ item, quantity });
//   return list;
// };
// let list = {
//   items: [
//     { item: 'Fray', quantity: 10 },
//     { item: 'Clegane', quantity: 1 }
//   ]
// };
// console.log("list.items:\n", list.items);
// addToList(list, 'Lannister', 2);
// console.log("list.items:\n", list.items);

// function composition
// const toSlug = input => encodeURIComponent(join('-')(
//   map(item => item.toLowerCase())(
//     split(' ')(
//       input
//     )
//   )
// ));
// console.log(toSlug("Arya Stark"));

// avoid shared state
// const x = { val: 2};
// const x1 = () => x.val += 1;
// const x2 = () => x.val *= 2;
// x1();
// x2();
// console.log(x);

// can be a first class entity
// const doubleSum = (x, y) => (x + y) * 2;
// const doubleDifference = (x, y) => (x - y) * 2;
// console.log(doubleSum(18, 1));
// console.log(doubleDifference(18, 1));
//
// const sum = (x, y) => x + y;
// const difference = (x, y) => x - y;
// const doubleOperator = (f, x, y) => f(x, y) * 2;
// console.log(doubleOperator(sum, 18, 1));
// console.log(doubleOperator(difference, 18, 1));

// reusability (higher-order functions)
// const double = x => x * 2;
// const doubleMap = numbers => numbers.map(double);
// console.log(doubleMap([2, 3, 4]));

// let characters = [
// { name: 'Daenerys', family: 'Targaryen', totalKill: 100 },
// { name: 'Arya', family: 'Stark', totalKill: 98 },
// { name: 'Aegon', family: 'Targaryen', totalKill: 99 },
// { name: 'Cersei', family: 'Lannister', totalKill: 101 }
// ];

// map
// const getName = item => item.name;
// const names = characters.map(getName);
// console.log(names);

// filter
// const megaKiller = killer => killer.totalKill >= 100;
// const megaKillers = characters.filter(megaKiller);
// console.log(megaKillers)

// reduce
// const sumOfKills = (acc, killer) => acc + killer.totalKill;
// const totalKills = items => items.reduce(sumOfKills, 0);
// console.log(totalKills(characters));

// const targaryens = (character) => character.family === 'Targaryen';
// const totalKills = (character) => character.totalKill;
// const totalKillsSum = (acc, totalKill) => acc + totalKill;
// const getTotalKills = items => {
//     return items
//       .filter(targaryens)
//       .map(totalKills)
//       .reduce(totalKillsSum, 0);
// };
// console.log(getTotalKills(characters));