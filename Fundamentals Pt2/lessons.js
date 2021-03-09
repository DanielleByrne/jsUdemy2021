//---------------------------------------- ACTIVATING STRICT MODE --------------------------
"use strict";

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;

// if (hasDriversLicense) console.log("they can drive ");

//---------------------------------------- FUNCTIONS --------------------------
// function logger() {
//   console.log("my name is dani");
// }

// logger();

// function fruitProcessor(apples, oranges) {
//   //   console.log(apples, oranges);
//   const juice = `juice with ${apples} apples and ${oranges} oranges`;
//   return juice;
// }

// fruitProcessor(5, 0);

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

//---------------------------------------- FUNCTION DECLARATION VS EXPRESSION --------------------------
// function declaration
// const age1 = calcAge1(1995)

// function calcAge1 (birthYear){
//     return 2037 - birthYear;
// }

// //function expression

// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };
// const age2 = calcAge2(1995);

// console.log(age1, age2);

//---------------------------------------- ARROW FUNCTIONS --------------------------

// const calcAge3 = (birthYear) => 2037 - birthYear;
// const age3 = calcAge3(1995);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   // return retirement;
//   return `${firstName} retires in ${retirement} years`;
// };

// console.log(yearsUntilRetirement(1995, "Shelly"));
// console.log(yearsUntilRetirement(1998, "Smelly"));

//----------------------------------------  FUNCTIONS  CALLING OTHER FUNCTIONS--------------------------

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);

//   const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces.`;
//   return juice;
// }

// console.log(fruitProcessor(2, 3));

//-----------------------------------------  FUNCTION REVIEW --------------------------------------------

// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };

// const yearsUntilRetirement = function (birthYear, firstName) {
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;

//   if (retirement > 0) {
//     console.log(`${firstName} retires in ${retirement} years😭`);
//     return retirement;
//   } else {
//     console.log(`${firstName} has already retired 🎉`);
//     return -1;
//   }

//   //   return `${firstName} retires in ${retirement} years`;
// };

// console.log(yearsUntilRetirement(1991, "Tina"));
// console.log(yearsUntilRetirement(1950, "Tony"));
