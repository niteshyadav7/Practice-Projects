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
/*
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
*/

// const arr1 = new Array(1, 2, 3, 4);
// console.log(arr1);
// const arr2 = [43, 54, 65];
// console.log(arr2);

// Array Operator:

// const friends = ["peter", "steve", "bucky"];
// // // const newFriends = friends.push("Thor");//gives the length
// // friends.push("Iron man");
// // friends.unshift("Hulk");
// // friends.pop();
// // console.log(friends);
// // console.log(friends.indexOf("bucky"));

// // console.log(friends.includes('Thor'));
// console.log(friends.join('-'));
// console.log(friends.concat());

// const num = [1, 2, 3];
// const newArrays = num.concat(friends);
// console.log(friends);
// console.log(newArrays);

// function makeCounter() {
//     let count = 0;
//     return function() {
//       return count++;
//     };
//   }
//   let counter1 = makeCounter();
//   let counter2 = makeCounter();
//   console.log( counter1() );
//   console.log( counter1() );
//   console.log( counter2() );

// function makeArmy() {
//     let shooters = [];
//     let i = 0;
//     while (i < 10) {
//       let shooter = function() {
//         console.log( i );
//       };
//       shooters.push(shooter);
//       i++;
//     }
//     return shooters;
//   }
//   let army = makeArmy();
//   army[0]();
//   army[5]();

// let People = function(person, age) {
//     this.person = person;
//     this.age = age;
//     this.info = function() {
//         console.log(this);
//        setTimeout(() => {
//         console.log(this.person + " is " + this.age + " years old");
//        }, 3000);
//     }
// }
// let person1 = new People('John', 21);
// person1.info();

// const friends = ['Michael', 'Steven', 'Peter'];

// const joinning =friends.join('')
// console.log(friends,joinning);

///////////////////////////////////////
// Coding Challenge #2

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

GOOD LUCK 😀
*/

/*
const bills = [125, 555, 44];

const calcTip = (bill) => {
  const getTip = bill > 50 && bill < 300 ? bill * 0.15 : bill * 0.2;
  return getTip;
};

const tip = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

const totalsBills = [bills[0] + tip[0], bills[1] + tip[1], bills[2] + tip[2]];

console.log(bills,totalsBills, tip);
*/

// const nitesh = {
//   firstName: "Nitesh",
//   lastName: "Yadav",
//   age: 23,
//   friends: ["Aman", "Neha", "Sneha"],
// };

// console.log(nitesh.age);
// console.log(nitesh["age"]);
// console.log(nitesh.friends[2]);
// console.log(nitesh["friends"][2]);

// const personalObject = {
//   firstName: "Nitesh",
//   lastName: "Yadav",
//   birthYear: 2000,
//   friends: ["golu", "nitesh", "aman", "Prince"],
//   calcAge: function () {
//     this.age = 2023 - this.birthYear;
//     return this.age
//   },
//   getSummary:function(){
//     //
//   }
// };

// console.log(personalObject);

///////////////////////////////////////
// Coding Challenge #3

/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

GOOD LUCK 😀
*/
/*
const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

const john = {
  fullName: "John Miller",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

mark.calcBMI();
john.calcBMI();
console.log(mark, john);

mark.BMI > john.BMI
  ? console.log(
      `${mark.fullName}'s BMI ${mark.BMI} is higher than ${john.fullName}'s ${john.BMI}`
    )
  : console.log(
      `${john.fullName}'s BMI ${john.BMI} is higher than ${mark.fullName}'s ${mark.BMI}`
    );
    */

// Looping

// for(let i=0;i<10;i++){
//     console.log(i+1);
// }

///////////////////////////////////////
// Coding Challenge #4

/*
Let's improve Steven's tip calculator even more, this time using loops!

1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays 😉

4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:
  4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
  4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
  4.3. Call the function with the 'totals' array

GOOD LUCK 😀
*/
let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// console.log(bills);
let tip = [];
let totals = [];
let sum=0;
let average=1;

const calcTip = (bill) => {
  const getTip = bill > 50 && bill < 300 ? bill * 0.15 : bill * 0.2;
  return getTip;
};

for (let i = 0; i < bills.length; i++) {
  // console.log(bills[i]);
  tip.push(calcTip(bills[i]));
  totals.push(bills[i]+tip[i])
  sum+=totals[i];
  average=sum/bills.length
}
// console.log(tip);
console.log(bills,tip,totals,average);

// const calcAverage=(arr)=>{
    
// }