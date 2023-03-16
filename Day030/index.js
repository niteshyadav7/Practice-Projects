"use strict";
// console.log("hello world!");
////////////////////////////////////////////
// function:

// function myName() {
//   console.log("My nameis Nitesh");
// }
// // calling /running /invoking
// myName();
// myName();
// myName();
// myName();
// myName();
// myName();

// function fruitProcessor(apples, oranges) {
//   return `Jucice with ${apples} apples and ${oranges} oranges.`;
// }
// // const juice = fruitProcessor(3, 4);
// // console.log(juice);

// console.log(fruitProcessor(3, 4));

// Types of function:

// function cutFruits(fruit) {
//   return fruit * 4;
// }
// function fruitProcessor(x, y) {
//   const applePieces = cutFruits(x);
//   const orangePieces = cutFruits(y);
//   const juice = `juice of ${applePieces} apple piece and ${orangePieces} orange piece.`;
//   return juice;
// }
// console.log(fruitProcessor(2,3));

///////////////////////////////////////
// Coding Challenge #1

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

GOOD LUCK 😀
*/

const calcAverage = (x, y, z) => (x + y + z) / 3;

const avgDol1 = calcAverage(44, 23, 71);
const avgKol1 = calcAverage(65, 54, 49);
console.log(avgDol1, avgKol1);


const avgDol2 = calcAverage(85, 54, 41);
const avgKol2 = calcAverage(23, 34, 27);
console.log(avgDol2, avgKol2);


const checkWinner = function (avgDol, avgKol) {
  if (avgDol >= 2 * avgKol) {
    console.log(`Dolphins win (${avgDol} vs. ${avgKol})`);
  } else if (avgKol >= 2 * avgDol) {
    console.log(`Koalas win (${avgDol} vs. ${avgKol})`);
  } else {
    console.log("Draw");
  }
};


checkWinner(avgDol1, avgKol1);
checkWinner(avgDol2, avgKol2);
