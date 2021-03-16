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

// const dani = {
//   firstName: "Danielle",
//   lastName: "Byrne",
//   age: "25",
//   job: "student",
//   friends: ["Brandon", "Leslie", "Kiersten"],
// };

// console.log(dani.firstName);
// console.log(dani["firstName"]);

// const nameKey = "Name";

// console.log(dani["first" + nameKey]);
// console.log(dani["last" + nameKey]);

// const interestedIn = prompt(
//   "What do you want to know about me? choose between firstName, lastName, age, job, and friends"
// );

// if (dani[interestedIn]) {
//   console.log(dani[interestedIn]);
// } else {
//   console.log("please pick a valid value");
// }

// dani.location = "Vegas";

// // challenge
// //" danielle has 3 friends and his best firend is called Brandon"

// console.log(`${dani.firstName} has ${dani.friends.length} and her best friend is ${dani.friends[0]}`)

//----------------------------------------- OBJECT METHODS --------------------------------------------

// const danielle = {
//   firstName: " Danielle",
//   lastName: "Byrne",
//   birthYear: 1995,
//   job: "student",
//   friends: ["Brandon", "Leslie", "Kacie"],
//   hasDriversLicense: true,
//   calcAge: function () {
//     this.age = 2021 - this.birthYear;
//     return this.age;
//   },

//   getSummary: function () {
//     return `${this.firstName} is ${this.calcAge()} a year old ${
//       this.job
//     },( what a loser am i right ) and she has ${this.hasDriversLicense ? "a" : "no"} drivers license.`;
//   },
// };

// console.log(danielle.calcAge());
// console.log(danielle.age);

// console.log(danielle.getSummary());

//----------------------------------------- THE FOR LOOP --------------------------------------------

// for (let rep = 1; rep <= 10; rep ++){
//     console.log(`lifting weights repition number ${rep}`)
// }

//----------------------------------------- LOOPING ARRAYS  --------------------------------------------

// const danielle = [
//   "Danielle",
//   "Byrne",
//   2021 - 1995,
//   "student",
//   ["Brandon", "Leslie", "Kiersten"],
//   "hungry",
// ];

// const types = [];

// // for (let i = 0; i < danielle.length; i++) {
// //   console.log(danielle[i]);
// // //   types[i] = typeof danielle[i];
// // types.push(typeof danielle[i])
// // }

// console.log(types)

// const years = [ 1991, 2012, 1975, 1995, 1993 ];
// const ages = [];

// for (let i=0; i < years.length; i++){
//     ages.push(2021 - years[i])
// }

// console.log(ages)
// console.log("STRING CONTINUE")

// for( let i = 0 ; i < danielle.length; i ++){
//     if(typeof danielle[i] !== "string") continue;

//     console.log(danielle[i])
// }

// console.log("NUMBER BREAK")
// for( let i = 0 ; i < danielle.length; i ++){
//     if(typeof danielle[i] === 'number') break;

//     console.log(danielle[i])
// }

//-----------------------------------------  LOOPING BACKWARDS AND LOOPS IN LOOPS  --------------------------------------------

// const danielle = [
//   "Danielle",
//   "Byrne",
//   2021 - 1995,
//   "student",
//   ["Brandon", "Leslie", "Kiersten"],
// ];

// for (let i = danielle.length - 1; i >= 0; i--) {
//     console.log(danielle[i])
// }

// for (let exercise = 1; exercise <= 3 ; exercise ++){
//     console.log(`--------statring exercise ${exercise}`)

//     for ( let rep = 1; rep < 6 ; rep ++){
//         console.log(`lifting weight rep ${rep} 💪🏻`)
//     }
// }

//-----------------------------------------  THE WHILE LOOP  --------------------------------------------
// let rep = 1;
// while (rep <= 10) {
//     console.log(`lifting rep number ${rep}`)
//     rep ++
// }
// let dice = Math.trunc(Math.random() * 6) + 1;
// // console.log(dice)

// while (dice !== 6) {
//   console.log(`you rolled a ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
//   if (dice === 6) console.log(`winner chicken dinner`)
// }
