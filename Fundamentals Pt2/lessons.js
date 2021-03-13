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

//-----------------------------------------  INTRO TO ARRAYS --------------------------------------------
// const friend1 = "mike";
// const friend2 = "steve";
// const friend3 = "peter";

// const friends = ["mike", "pete", "steve"];
// console.log(friends);

// const years = new Array(1991, 1992, 1993, 1994);
// console.log(friends[0]);
// console.log(friends[2]);
// console.log(friends.length);

// const danielle = ["danielle", "byrne", 2021 - 1995, friends, "student"];
// console.log(danielle);

// const calcAge = function (birthYear) {
//   return 2021 - birthYear;
// };

// const birthYears = [1996, 1967, 1902, 1975, 2012];

// const age1 = calcAge(birthYears[0]);
// const age2 = calcAge(birthYears[1]);
// const age3 = calcAge(birthYears[2]);
// const age4 = calcAge(birthYears[birthYears.length - 1]);

// console.log(age1, age2, age3, age4);

// const ages = [
//   calcAge(birthYears[0]),
//   calcAge(birthYears[1]),
//   calcAge(birthYears[3]),
//   calcAge(birthYears[birthYears.length - 1]),
// ];
// console.log(ages)

//-----------------------------------------  BASIC ARRAY OPERATIONS (METHODS) --------------------------------------------
// const friends = ["mike", "pete", "steve"];

//  const newLength = friends.push("tim"); // adds to the back

//  friends.unshift("john") // adds to the front

//  friends.pop(); // removes last element in array, also stores what was removed if you save it in a const

//  friends.shift(); // removes first thing in the array

//  friends.indexOf("steve")// tells you where in the array it is

//  friends.includes("steve") // returns true/false for wheter or not it's in the array
// // odoesn't do type coersion, strict equality, can be used in conditionals

// //----------------------------------------- INTRO TO OBJECTS --------------------------------------------
// const daniArray = ["Danielle", "Byrne", 25, ["Brandon", "Leslie", "Kacie"]];

// const dani = {
//   firstName: "Danielle",
//   lastName: "Byrne",
//   age: "25",
//   job: "student",
//   friends: ["Brandon", "Leslie", "Kiersten"],
// };


//----------------------------------------- DOT VS BRACKET NOTATION --------------------------------------------
