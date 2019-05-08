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
let betterIncrement = number => number + 1;
console.log(betterIncrement(COUNTER));



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