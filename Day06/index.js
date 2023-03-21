'use strict';
// const arr =[2,3,4,5,6]

// const newArr =arr.map(mov=>2*mov);
// console.log(newArr);

// STRINGS:
/*
const airline = 'TAP Air INDIA';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log(plane[3]);
console.log('B723'[1]);

console.log(airline.length);
console.log(airline.indexOf('D'));

// const passenger ='niTesH'
// const passengerLowerCase =passenger.toLowerCase()
// const passengerUpperCase =passengerLowerCase[0].toUpperCase()+passengerLowerCase.slice(1);
// console.log(passengerUpperCase);

const toValidOrder = passenger => {
  const passengerLowerCase = passenger.toLowerCase();
  const passengerUpperCase =
    passengerLowerCase[0].toUpperCase() + passengerLowerCase.slice(1);
    return passengerUpperCase;
};

console.log(toValidOrder("FUCKER"))

*/

// const email = 'nitesh@gmail.com';
// const enteredEmail = '    NITESH@GMAIL.COM';

// const lowerCase = enteredEmail.toLowerCase();
// // console.log(lowerCase);
// const validEmail=lowerCase.trim()
// console.log(validEmail);
// if(email===validEmail)console.log('You enterd correct input:');

const validEmails = email => email.toLowerCase().trim();
console.log(validEmails('    nitsh@GMAIL.COM'));
