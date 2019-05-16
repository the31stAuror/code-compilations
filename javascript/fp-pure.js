const _ = require("lodash");
const join = require("lodash/fp/join");
const map = require("lodash/fp/map");
const split = require("lodash/fp/split");
const compose = require("lodash/fp/compose");
const pipe = require("lodash/fp/pipe");

/*
 * FUNCTIONAL PROGRAMMING
 * - is the process of building software by composing:
 *   - pure functions: given the same inputs, always returns the same output; has no side-effects
 *   - avoid shared state, mutable data, and side effects
 *   - declarative functions
 * - concise, predictable
 */

/*
 * MAPPING
 * - a given input results or is mapped to an output
 */
function mapping() {
  const maxValue = Math.max(8, 10, 7);
  console.log("maxValue:", maxValue);
}
// mapping();

/*
 * DECLARATIVE
 * - abstracts the flow control process; describes the data flow (WHAT to do), the how gets abstracted away
 * - relies more on expressions (piece of code which evaluates to some value e.g. combination of
 *   function calls, values, and operators which are evaluated to produce a resulting value)
 *
 * IMPERATIVE
 * - descries the specific steps used to achieve the desired result; flow control (HOW to do)
 * - utilizes statements (piece of code performing some action e.g. if, for, etc.)
 */
function declarative() {
  let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let declarativeArray = numbers.map(number => Math.pow(number, 2));
  console.log(declarativeArray);
}
// declarative();

/*
 * REFERENTIAL TRANSPARENCY
 * - a functions consistently yields the same result for the same input
 */
function referentialTransparency() {
  const double = x => x * 2;
  console.log("double:", double(5));
  console.log("double:", 10);
}
// referentialTransparency();

/*
 * IMMUTABILITY
 * - inability to change; unchanging over time
 *
 * Immutable object - object that can't be modified after it is created
 * Note: const does not create immutable objects, it only creates a variable name binding
 * which cannot be reassigned after creation (properties are still mutable)
 */
function immutability() {
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
}
// immutability();

/*
 * FUNCTION COMPOSITION
 * - process of combining two or more functions in order to produce a new function or perform some
 *   computation e.g. f(g(x))
 */
function functionComposition() {
  const toSlugRightToLeft = compose(
    encodeURIComponent,
    join('-'),
    map(x => x.toLowerCase()),
    split(' ')
  );
  const rightToLeftSlug = toSlugRightToLeft("Arya Stark");
  console.log(rightToLeftSlug);

  const toSlugLeftToRight = pipe(
    split(' '),
    map(x => x.toLowerCase()),
    join('-'),
    encodeURIComponent
  );
  const leftToRightSlug = toSlugLeftToRight("Khal Drogo");
  console.log(leftToRightSlug);
}
// functionComposition();

/*
 * AVOID SHARED STATE
 * - functions are independent / not mutating a shared state (x)
 * - the order of function calls does not change the result of the calling function
 *
 * Shared State
 * - any variable, object, or memory space that exists in shared scope
 */
function avoidSharedState() {
  const x = { val: 2 };
  const x1 = x => Object.assign({}, x, {val: x.val + 1});
  const x2 = x => Object.assign({}, x, {val: x.val * 2});
  console.log(x1(x2(x)));
  console.log(x);
}
// avoidSharedState();

/*
 * AVOID SIDE EFFECTS
 * - isolate side effects from rest of the software
 *
 * Side effect
 * - any application state change that is observable outside the called function other than its return value
 * - side effects can be:
 *   - modifying any external variable
 *   - logging to the console
 *   - writing to the screen
 *   - writing to a file
 *   - writing to the network
 *   - triggering any external process
 *   - calling any further functions with side effects
 */

/*
 * FUNCTIONS AS FIRST CLASS ENTITIES
 * - functions are treated as values and used as data
 */
function firstClassEntity() {
  const sum = (x, y) => x + y;
  const difference = (x, y) => x - y;
  const doubleOperator = (f, x, y) => f(x, y) * 2;
  console.log(doubleOperator(sum, 18, 1));
  console.log(doubleOperator(difference, 18, 1));
}
// firstClassEntity();

/*
 * REUSABILITY THROUGH HIGHER ORDER FUNCTIONS
 * - Any data type is processed e.g. map
 *
 * Higher-order functions
 * - takes one or more functions as arguments, or
 * - returns a function as its result
 * Examples:
 * filter - filter a collection by an attribute
 * map - transforms a collection by applying a function to all of its elements and building a new collection
 *       from the returned values
 * reduce - receives a function and a collection, and return a value created by combining the items
 */
function reusability() {
  const double = x => x * 2;
  const doubleMap = numbers => numbers.map(double);
  console.log(doubleMap([2, 3, 4]));

  const double2 = x => x.points * 2;
  const doubleMap2 = numbers => numbers.map(double2);
  console.log(doubleMap2([
    {name: 'stars', points: 2},
    {name: 'coins', points: 3},
    {name: 'mushroom', points: 4}
  ]));

  let characters = [
    { name: 'Daenerys', family: 'Targaryen', totalKill: 100 },
    { name: 'Arya', family: 'Stark', totalKill: 98 },
    { name: 'Aegon', family: 'Targaryen', totalKill: 99 },
    { name: 'Cersei', family: 'Lannister', totalKill: 101 }
  ];

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

  // reduce (array)
  // const getTotalKill = killer => killer.totalKill;
  // const sumOfKillsArray = (acc, kills) => acc + kills;
  // const arrayReduce = items => items.map(getTotalKill).reduce(sumOfKillsArray);
  // console.log(arrayReduce(characters));

  // combination of map, filter, and reduce
  const targaryens = (character) => character.family === 'Targaryen';
  const totalKills = (character) => character.totalKill;
  const totalKillsSum = (acc, totalKill) => acc + totalKill;

  const getTotalKills = items => {
    return items
      .filter(targaryens)
      .map(totalKills)
      .reduce(totalKillsSum, 0);
  };

  console.log(getTotalKills(characters));
}
reusability();