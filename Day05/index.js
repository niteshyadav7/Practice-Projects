'use strict';
// Destructuring Arrays:

// const arr = [2, 3, 4];

// //  Traditional Method--
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];
// console.log(a, b, c);

// // Modern Method--
// const [x,y,z]=arr;// this is called destructuring
// console.log(x,y,z);

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};
// let [main,,secondary]=restaurant.categories;
// console.log(main,secondary);

// let [main,secondary]=restaurant.categories
// console.log(main,secondary);
// // // console.log(main);
// // // console.log(secondary);
// // // console.log(rest);

// // let temp =main;
// // main=secondary;
// // secondary=temp;
// // console.log(main,secondary);

// [main,secondary]=[secondary,main]
//  console.log(main,secondary);

// Nested destructuring
// const nested = [2, 4, [5, 6]];

// const [i, j, [x, y]] = nested;
// console.log(i, j, x, y);

// const [a = 1, b = 2, c = 3, d = 0] = [2, 3, 4];
// console.log(a, b, c, d);

/*
const obj ={
    name:'nitesh',
    age:23,
    address:'Mau'
}
const {name:n,age:a}=obj;
console.log(n,a);
*/

// let a = 23;
// let b = 43;
// const num = {
//   a: 5,
//   b: 7,
// };
// ({ a, b } = num);
// console.log(a, b);

// 🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆
// Array Destructuring :

/*
const friends = ['Aman', 'Shyam', 'Ram', 'Ghansyam', 'Putri'];

let [first, , , , last = 1] = friends;
console.log(first, last);

[first, , , , last] = [last, , , , first];
console.log(first, last);

// Object Destructuring :
let a = 23;
let b = 54;
const num = {
  a: 5,
  b: 7,
};
({ a, b } = num);
console.log(a, b);
*/

// function sum (...numbers){
//     let sum=0;
//     for(let i=0;i<numbers.length;i++){
//         sum+=numbers[i];
//     }
//     console.log(sum);
// }
// const x=[2,3,4,5,6]
// sum(...x);

// console.log(undefined||null);

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
// // 1..
// const [player1, player2] = game.players;
// console.log(player1, player2);

// // 2..
// const [gk,...fieldPlayers]=player1
// console.log(gk);

// // 3..
// const allPlayers=[...player1,...player2]
// console.log(allPlayers);


// const object={a:2,b:45,c:7};
// for(let key of object){
//     console.log(`${key}:${object["key"]}`);
// }

const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}