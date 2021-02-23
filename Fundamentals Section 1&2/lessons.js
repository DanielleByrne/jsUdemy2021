// console.log(40 + 8 + 23 + 10);

// let firstName = "jonas";
// console.log(firstName);

// let javascriptIsFun = true;
// console.log(javascriptIsFun);

// console.log(typeof true);
// console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof "dani");

// javascriptIsFun = "yeah"
// console.log(typeof javascriptIsFun);

// let year;
// console.log(typeof year);

// year = 1995;
// console.log(typeof year);

// console.log(typeof null);
// const now = 2037;
// const ageDani = now - 1995;
// const ageBrandon = now - 1993;
// console.log(ageDani, ageBrandon);

// const firstName = "Danielle";
// const lastName = "Byrne";
// console.log(firstName + " " + lastName);

// const isFullAge = ageDani >= 18;
// console.log(isFullAge);

//-----------------OPERATOR PRECIDENCE-------------------
// const now = 2021;
// const ageDani = now - 1995;
// const ageBrandon = now - 1993;

// console.log(now - 1993 > now - 1995);

// console.log(25 - 10 - 5);

// let x, y;

// x = y = 25 - 10 - 5;

// console.log(x,y)
// both are 10 because the - takes precedence over =
// = is executed right to left

// const averageAge = (ageDani + ageBrandon) / 2;
// console.log( ageDani, ageBrandon, averageAge)

//--------------STRINGS ANS TEMPLATE LITERALS------------------

// const firstName = "Dani";
// const job = "loser";
// const birthYear = 1995;
// const year = 2021;
// const dani =
//   "I'm " +
//   firstName +
//   ", a " +
//   (year - birthYear) +
//   " years old " +
//   job +
//   " :(";
// console.log(dani)

// const daniNew = `I'm ${firstName} a ${year - birthYear} years old ${job} :(`;
// console.log(daniNew)

// ------------ IF / ELSE  STATEMENTS -----------------------

// const age = 15;

// if (age >= 18) {
// //   console.log(`they can start driving 🎉`);
// } else {
//   const yearsLeft = 18 - age;
//   console.log(` they have ${yearsLeft} years left before they can drive 😬`);
// }

// const birthYear = 2012;

// let century;
// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }

// console.log(century);

//-------------------TYPE CONVERSION AND COERSION ------------------------------

// TYPE CONVERSION
// const inputYear = "1995";
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number("Dani"));
// console.log(typeof NaN);

// console.log(String(23), 23);

// // TYPE COERCION

// console.log("I am " + 25 + "years old");

// let n = "1" + 1;
// n = n - 1;
// console.log(n)
//it's 10 , because "1" + 1 is 11 because the number one gets converted to
// another string 1 making 11
// then in the next line it's 11 -1, making 10

//-------------------TRUTHY AND FALSY VALUES ------------------------------
// necessary for booleans
// not initially false values, will become false when converted to a boolean
// 5 values: 0 , " " , undefined , null , Nan . False isn't in the list because it is already false.
// anything else will be a truthy value

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean("dani"));
// console.log(Boolean({}));
// console.log(Boolean(""));

// const money = 100;

// if (money) {
//   //js converts things where "money" is to a boolean, if true, else if false, coersion
//   console.log("Don't spend it all in one place");
// } else {
//   console.log("get a job loser");
// }

// let height = 0;
// // if we set height to 0 it will be undefined still because 0 is a falsy value
// if (height){
//   console.log("you defined height")
// } else {
//   console.log ("height is undefined ")
// }

//------------------- EQUALITY OPERATORS == VS === ------------------------------

// const age = 18;

// if ( age === "18")  console.log("they're 18 (strict comparison)")

// if ( age == "18")  console.log("they're 18 (loose comparison)")

// const favNumber = Number(prompt("what is your favorite number?"))
// //turn the user input into a number so that we can === it and the difference in value won't be a problem

// console.log(favNumber)

// if (favNumber === 4){
//     console.log("that's my fav too")
// } else if( favNumber === 7){
//     console.log("7 is my second favorite")
// } else {
//     console.log ("you have bad taste in numbers :) ")
// }

// if (favNumber !== 4 ) console.log("consider 4 though tehe ")

//------------------- BOOLEAN LOGIC ------------------------------

// const hasDriversLicense = true; //A

// const hasGoodVision = true; // B

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// const shouldDrive = hasDriversLicense && hasGoodVision;

// // if (shouldDrive) {
// //   console.log("They can go for a drive!");
// // } else {
// //   console.log("They either need a license or to go to the eye doctor");
// // }

// const  isTired = false; // C

// console.log (hasDriversLicense && hasGoodVision && isTired)

// if (hasGoodVision && hasDriversLicense && !isTired) {
//     console.log("They can go for a drive!");
//   } else {
//     console.log("They either need a license or to go to the eye doctor");
//   }

//------------------- THE SWITCH STATEMENT  ------------------------------

// const day = "monday";

// switch (day) {
//   case "monday":
//     console.log("do udemy course");
//     console.log("go to sushi");
//     break;
//   case "tuesday":
//     console.log("study");
//     break;
//   case "wednesday":
//   case "thursday":
//     console.log("do udemy course and workout");
//     break;
//   case "friday":
//     console.log("relax but still code");
//     break;
//   case "saturday":
//   case "sunday":
//     console.log("enjoy the weekend :)");
//     break;
//     default:
//         console.log("not a valid day!")
// }

//------------------- THE CONDITIONAL (TERNARY) OPERATOR  ------------------------------

// const age = 13;

// age >= 18 ? console.log("I like to drink wine") : console.log(" I have to drink water ") 

// const drinkingAge = age >= 21 ? "beer" : "water" ;
// console.log(drinkingAge)

// console.log(`I like to drink ${age >= 21 ? "beer" : "water" }`)


//------------------- ES5 ES6 and ESNext  ------------------------------