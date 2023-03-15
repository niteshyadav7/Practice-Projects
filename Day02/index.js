// console.log("hello World!");

/*Data Types */

//////////////////
/*
// Number
var age = 23;
console.log(age);

// String
const firstName = "Nitesh";
console.log(firstName);

// Boolean
const ageCalc = age > 20 ? "Print Yes" : "Print No";
console.log(ageCalc);

// Undefined
var x;
console.log(x);

// Null
const xyz=null;
console.log(null);

// Symbol
var x=Symbol(2);
var y= Symbol(2)
let results=x===y?"true":"false"
console.log(results)

// BigInt
const num= BigInt(1214235345346563543255);
console.log(num);
*/

/* VAR , LET , CONST*/

// var x=23;
// {
// var x =43;
// }
// console.log(x);
// That means var is a global scope.

// let x=23;
// {
//     let x=234;
//     console.log(x);
// }
// console.log(x);

// const x=23;
// x=233;
// console.log(x);

////////////////////////////////////
// Basic Operators

// Assignment operators

// let x=10+5;
// x*=10;
// ++x;
// console.log(x);

////////////////////////////////////
// Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀
*/

// Solution 1:
/*
const massMark1 = 78;
const massJohn1 = 92;

const massMark2 = 78;
const massJohn2 = 92;

const heightMark1 = 1.69;
const heightjohn1 = 1.95;

const heightMark2 = 1.69;
const heightjohn2 = 1.95;

const bmiMark1 = massMark1 / heightMark1 ** 2;
const bmijohn1 = massJohn1 / heightjohn1 ** 2;

const bmiMark2 = massMark2 / heightMark2 ** 2;
const bmijohn2 = massJohn2 / heightjohn2 ** 2;

// const johnHigherBMI = bmijohn > bmiMark;

const markHigherBMI1 = bmiMark1 > bmijohn1;

const markHigherBMI2 = bmiMark2 > bmijohn2;

console.log(
  `BMI of Mark's : ${bmiMark1} and John's :${bmijohn1} \n\r ${markHigherBMI1}`
);

console.log(
  `BMI of Mark's : ${bmiMark2} and John's :${bmijohn2} \n\r ${markHigherBMI2}`
);
*/

// Coding Challenge #2

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 😉

GOOD LUCK 😀
*/
// TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
// TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

/*
const massMark1 = 78;
const massJohn1 = 92;

const massMark2 = 95;
const massJohn2 = 85;

const heightMark1 = 1.69;
const heightjohn1 = 1.95;

const heightMark2 = 1.88;
const heightjohn2 = 1.76;

const bmiMark1 = massMark1 / heightMark1 ** 2;
const bmijohn1 = massJohn1 / heightjohn1 ** 2;

const bmiMark2 = massMark2 / heightMark2 ** 2;
const bmijohn2 = massJohn2 / heightjohn2 ** 2;

// const johnHigherBMI = bmijohn > bmiMark;

const markHigherBMI1 = bmiMark1 > bmijohn1;
const markHigherBMI2 = bmiMark2 > bmijohn2;

if (markHigherBMI1) {
  console.log("1: Mark's BMI is higher than John's!");
} else {
  console.log("1: John's BMI is higher than Mark's!");
}
if (markHigherBMI2) {
  console.log("2: Mark's  BMI is higher than John's!");
} else {
  console.log("2: John's BMI is higher than Mark's!");
}

console.log("-------------------------------------");

if (markHigherBMI1) {
  console.log(`1: Mark's BMI${bmiMark1} is higher than John's! ${bmijohn1}`);
} else {
  console.log(`1: John's BMI ${bmijohn1}is higher than Mark's!${bmiMark1}`);
}

if (markHigherBMI2) {
  console.log(`2: Mark's  BMI ${bmiMark2}is higher than John's! ${bmijohn2}`);
} else {
  console.log(`2: John's BMI ${bmijohn2}is higher than Mark's!${bmiMark2}`);
}

// console.log(
//   `BMI of Mark's : ${bmiMark1} and John's :${bmijohn1} \n\r ${markHigherBMI1}`
// );

// console.log(
//   `BMI of Mark's : ${bmiMark2} and John's :${bmijohn2} \n\r ${markHigherBMI2}`
// );
*/

///////////////////////////////////////
// Type Conversion and Coercion

// Type Conversion

// const inputYear = "1991";
// console.log(typeof inputYear, inputYear+1);
// console.log(Number(inputYear)+2);

// const fullName = "Nitesh Yadav";
// console.log(Number(fullName));

// console.log(typeof NaN);

// console.log('I am ' + 23 + ' years old');
// console.log('23' - '10' - 3);
// console.log('23' / '2');
// let n ='1'+1;
// console.log(n);
// y=n--;
// console.log(n);
// console.log(y);

// ////////////////////////////
// Truty and Falsy values

// console.log(Boolean(0));
// console.log(Boolean(''));
// console.log(Boolean(null));
// console.log(Boolean(undefined));
// console.log(Boolean(NaN));




////////////////////////////////////
// Coding Challenge #3

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀
*/