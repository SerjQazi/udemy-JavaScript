// 'use strict';

// // let hasDriversLicense = false;
// // const passTest = true;

// // if (passTest) hasDriversLicense = true; 
// // if (hasDriversLicense) console.log('hasDriversLicense');

// function logger() {
//   console.log('This is the test run');
// };

// // calling / running / invoking fucntion
// logger();

// //! this function is uncommented down below

// // function fruitProcessor(apples, oranges) {
// //   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
// //   return juice;
// // }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// // function declaration
// function calcAge1 (birthYear) {
//   return 2001 - birthYear;
// }
// const age1 = calcAge1(1992);

// // function expression
// const calcAge2 = function (birthYear) {
//   return 2023 - birthYear;
// }
// const age2 = calcAge2(1992);

// console.log(age1, age2)

// // Arrow functions
// const calcAge3 = birthYear => 2023 - birthYear;
// const age3 = calcAge3(1992);
// console.log(age3);

// //?: part one
// const yearsUntilRetirement = birthYear => {
//   const age = 2023 - birthYear;
//   const retirement = 65 - age;
//   return retirement;
// }
// console.log(yearsUntilRetirement(1991));

// //? part two
// const yearsUntilRetirement2 = (birthYear, firstName) => {
//   const age = 2023 - birthYear;
//   const retirement = 65 - age;
//   // return retirement;
//   return `${firstName} retires in ${retirement} years!`
// }
// //! must maintain order {left, to, right} of  
// console.log(yearsUntilRetirement2(1991, "Serj"));
// console.log(yearsUntilRetirement2(1980, "Bob"));


// // !
// // ?
// // 
// // todo:
// // *

// //* calling a function within a function. function calling other functions

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// //! this function is commented out up above

// function fruitProcessor(apples, oranges) {

//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);

//   const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
//   return juice;
// }

// console.log(fruitProcessor(2, 3));

