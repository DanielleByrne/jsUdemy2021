// CODING CHALLENGE ONE
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Back to the two gymnastics teams, the Dolphins and the Koalas!
//There is a new gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated
//(so one average score per team).
// A team only wins if it has at least double the average score of the other team.
//Otherwise, no team wins!

// Your tasks:
// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
// 2. Use the function to calculate the average for both teams
// 3. Create a function 'checkWinner' that takes the average score of each team
// as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)"
// 4. Use the 'checkWinner' function to determine the winner for both Data1 and Data 2
// 5. Ignore draws this time

//Test data:
// Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

// Hints:
// To calculate average of 3 values, add them all together and divide by 3
// To check if number A is at least double number B, check for A >= 2 * B.
// Apply this to the team's average scores 😉

// const calcAverage = (scoreOne, scoreTwo, scoreThree) =>
//   (scoreOne + scoreTwo + scoreThree) / 3;
// // console.log(calcAverage(44, 23, 71))

// //Test data 1
// // const scoreDolphins = calcAverage(44, 23, 71)
// // const scoreKoalas = calcAverage(65, 54, 49)

// //Test data 2
// const scoreDolphins = calcAverage(85, 54, 41);
// const scoreKoalas = calcAverage(23, 34, 27);

// console.log(scoreDolphins, scoreKoalas);

// const checkWinner = (avgDolphins, avgKoalas) => {
//   if (avgDolphins >= 2 * avgKoalas) {
//     console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
//   } else {
//     console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
//   }
// };

// checkWinner(scoreDolphins, scoreKoalas);

// CODING CHALLENGE TWO
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//Steven is still building his tip calculator, using the same rules as before:
//Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different,
//the tip is 20%.

// Tasks:
//Write a function 'calcTip' that takes any bill value as an input and returns the corresponding
//tip, calculated based on the rules above (you can check out the code from first tip calculator
//challenge if you need to). Use the function type you like the most.
//Test the function using a bill value of 100

//And now let's use arrays! So create an array 'bills' containing the test data below
//Create an array 'tips' containing the tip value for each bill,
//calculated from the function you created before

// Bonus: Create an array 'total' containing the total values, so the bill + tip

// Test data: 125, 555 and 44

// const bills = [125, 555, 44];

// // const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2

// // console.log(tip)

// // const tip = bills <= 300 && bills >= 50 ? bills * 0.15 : bills * 0.2;
// // const bill = 100;

// const caclTip = function (bills) {
//   if (bills <= 300 && bills >= 50) {
//     return bills * 0.15;
//   } else {
//     return bills * 0.2;
//   }
// };

// const tips = [caclTip(bills[0]), caclTip(bills[1]), caclTip(bills[2])];
// // console.log(bills)
// console.log(tips);

// const totals = [bills[0] + tips[0],  bills[1] + tips[1], bills[2] + tips[2]]
// console.log(totals)

// CODING CHALLENGE THREE
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//Let's go back to Mark and John comparing their BMIs! This time,
//let's use objects to implement the calculations!
//Remember: BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter)

//1. For each of them, create an object with properties for their
//    full name, mass, and height (Mark Miller and John Smith)
//2. Create a 'calcBMI' method on each object to calculate the BMI
//    (the same method on both objects). Store the BMI value to a property, and also return it from the method
//3. Log to the console who has the higher BMI, together with the full name and the
//      respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"

// Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

// const mark = {
//   firstlName: "Mark",
//   lastName: "Miller",
//   mass: 78,
//   height: 1.69,

//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };

// console.log(mark.calcBMI());

// const john = {
//   firstlName: "John",
//   lastName: "Smith",
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };

// console.log(john.calcBMI());

// if (mark.bmi > john.bmi) {
//     console.log(`Marks's BMI (${mark.bmi}) is higher than Johns's (${john.bmi})!`)
// } else{
//     console.log(`John's BMI (${john.bmi}) is higher than Marks's (${mark.bmi})!`)
// }

// CODING CHALLENGE THREE
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//Your tasks:

//1. Create an array 'bills' containing all 10 test bill values
//2. Create empty arrays for the tips and the totals ('tips' and 'totals')
//3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and
//total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!
//Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

//Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the
//tips and totals arrays 😉

// const bills = [46, 19, 63, 27, 87, 17, 102, 92, 420, 34];

// const tips = [];
// const totals = [];

// // const caclTip = function (bills) {
// //   if (bills <= 300 && bills >= 50) {
// //     return bills * 0.15;
// //   } else {
// //     return bills * 0.2;
// //   }
// // };

// for (let i = 0; i < bills.length; i++) {
//   if (bills[i] <= 300 && bills[i] >= 50) {
//     tips.push(bills[i] * 0.15);
//   } else {
//     tips.push(bills[i] * 0.2);
//   }

//   totals.push(bills[i] + tips[i]);
// }
// console.log(tips);
// console.log(totals)
