
//---------------------------------------- CODING CHALLENGE 1 --------------------------

// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).
// Your tasks:
// 1. StoreMark'sandJohn'smassandheightinvariables
// 2. CalculateboththeirBMIsusingtheformula(youcanevenimplementboth
// versions)
// 3. CreateaBooleanvariable'markHigherBMI'containinginformationabout
// whether Mark has a higher BMI than John.
// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.
// GOOD LUCK 😀

//Math is right but didn't save the variables correctly
// marksBMI1 = 78 / 1.69**2 
// console.log(marksBMI1) 

// johnsBMI1 = 92 / 1.95**2
// console.log(johnsBMI1)

//test data 1 
// const massMark = 78;
// const heightMark=1.69;
// const massJohn = 92;
// const heightJohn= 1.95;

// const BMIMark = massMark / heightMark **2 
// const BMIJohn = massJohn / heightJohn **2

// // console.log(BMIMark, BMIJohn);

// const markHigherBMI = BMIMark > BMIJohn;
// // console.log(markHigherBMI);

// //test  data 2
// const massMark2 = 95;
// const heightMark2=1.88;
// const massJohn2 = 85;
// const heightJohn2= 1.76;

// const BMIMark2 = massMark2 / heightMark2 **2 
// const BMIJohn2 = massJohn2 / heightJohn2 **2

// // console.log(BMIMark2, BMIJohn2);

// const markHigherBMI2 = BMIMark2 > BMIJohn2;
// console.log(markHigherBMI2);


//---------------------------------------- CODING CHALLENGE 2 --------------------------

// Use the BMI example from Challenge #1, and the code you already wrote, and improve it.
// Your tasks:
// 1. Print a nice out put to the console, saying who has the higher BMI. The message is either 
//"Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!" 
// 2. Use a template literal to include the BMI values in the outputs. Example:
//"Mark's BMI (28.3) is higher than John's (23.9)!"
// Hint: Use an if/else statement 😉 GOOD LUCK 😀

// const massMark2 = 95;
// const heightMark2=1.88;
// const massJohn2 = 85;
// const heightJohn2= 1.76;

// const BMIMark2 = massMark2 / heightMark2 **2 
// const BMIJohn2 = massJohn2 / heightJohn2 **2

// if (BMIMark2 > BMIJohn2){ 
//     console.log(`Mark's BMI (${BMIMark2}) is higher than John's (${BMIJohn2})! `)
// } else{
//     console.log(`John's BMI (${BMIJohn2}) is higher than Marks's (${BMIMark2})! `)
// } 

//---------------------------------------- CODING CHALLENGE 3 --------------------------

// There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. 
//The winner with the highest average score wins a trophy!

// Your tasks:

// 1. Calculate the average score for each team, using the test data below

// 2. Compare the team's average scores to determine the winner of the competition, 
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)

// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time 
// a score of at least 100 points. 
//Hint: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉

// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens 
// when both teams have the same score and both have a score greater or equal 100 points. 
// Otherwise, no team wins the trophy

// Test data:

// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110

// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123 
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

// GOOD LUCK 😀

 dolphinsAvg = (109 + 108 + 89) / 3 
 console.log(dolphinsAvg)

 koalasAvg = (109 + 108 + 89) / 3
 console.log (koalasAvg)

 if (dolphinsAvg > koalasAvg && dolphinsAvg > 100){
     console.log(" Dolphins win the competition")
 } 
 else if (koalasAvg> dolphinsAvg && koalasAvg > 100){
    console.log("Koalas win the competition")
 }
 else if (dolphinsAvg === koalasAvg && dolphinsAvg > 100 || koalasAvg >100 ){
     console.log("it's a tie ")
 }
 else{
     console.log(" no one wins this time ")
 }