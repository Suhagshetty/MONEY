console.log("Hello World! Welcome to Javascript");

// Values and Variables:- in the below example we are declaring a variable and assigning a value to it.

let firstName = "Suhag Shetty";
// FIRST NAME IS THE VARIABLE AND SUHAG SHETTY IS THE VALUE
console.log(firstName);

// Data Types:- A JavaScript variable can hold 8 types of data.7 Primitive Data Types and 1 Object Data Type.

// Number	A number representing a numeric value
let number = 43;
console.log(typeof number);

// Bigint	A number representing a large integer
let bigInt = 1267658567n;
console.log(typeof bigInt);

// String	A text of characters enclosed in quotes
let string = "Hello";
console.log(typeof string);

// Boolean	A data type representing true or false
console.log(typeof true);

// Undefined	A variable with no assigned value
let lastName;
console.log(typeof lastName);

// Null	A value representing object absence
let nullValue = null;
console.log(typeof nullValue);

// Symbol	A unique primitive identifier
let symbol = Symbol("description");
console.log(typeof symbol);

// Object	A collection of key-value pairs of data
const object = {};
console.log(typeof object);

// let, const and var

// let: Declares variables with block scope, allowing updates but notre-declaration within the same block.

let x = 10;
// let x = 20 // Redefinition of 'x' is not allowed in the same scope
x = 20;
console.log(x);

// const: Declares block-scoped variables that cannot be reassigned after their initial assignment

const z = 20;
// z = 30 Re-assignment is not allowed
console.log(z);

// var: Declares variables with function or global scope and allows re-declaration and updates within the same scope

var y = 30;
var y = 40; // Re-definition is allowed
y = 50; // updates are also allowed
console.log(y);

// Basic Operators

// Arithmetic Operators: +, -, *, /, %, **

let a = 10;
let b = 5;
console.log(a + b); // ADDITION
console.log(a - b); // SUBTRACTION
console.log(a * b); // MULTIPLICATION
console.log(a / b); // DIVISION
console.log(a % b); // MODULUS
console.log(a ** b); // EXPONENTIATION

// Assignment Operators:-

let d = 10;
d++;
console.log(d); // increment 11

let e = 9;
e--;
console.log(e); // decrement 8

let f = 10;
f += 90;
console.log(f); // assignment 100

let g = 90;
g -= 10;
console.log(g); // assignment 80

// Comparison operators

const ageSuhag = 23;
const ageTrisha = 18;
console.log(ageSuhag > ageTrisha);
console.log(ageSuhag < ageTrisha);

const DrinkAge = 18;
if (ageSuhag >= DrinkAge) {
  console.log("You can have a drink");
} else {
  console.log("You are not allowed to drink");
}

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

/*
const massMark = 78;
const massJohn = 92;
const heightMark = 1.69;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / heightJohn ** 2;
console.log(BMIMark, BMIJohn);
if (BMIMark > BMIJohn) {
  console.log(`Mark has higher BMI than John ${BMIMark}`);
} else {
  console.log(`John has higher BMI than Mark ${BMIJohn}`);
}
*/

// Strings and Template Literals
const fName = "Suhag";
const job = "Software Engineer";
const currentYear = 2026;
const friends = ["Srujan", "Shashi", "Rachitha", "Vijay"];
const infoSuhag = `I am ${fName} a ${job} and the current year is ${currentYear} and my friends are ${friends}`;
console.log(infoSuhag);

// Taking Decisions:- IF ELSE Statements

const age = 1;
const DrinkkAge = 18;
if (age < DrinkAge) {
  console.log("You cannot drink");
  console.log(`You have ${DrinkkAge - age} years left`);
} else {
  console.log("You can drink");
}

const money = 100;
if (money < 100) {
  console.log("Do not spend it all");
} else {
  console.log("You can spend it");
}

////////////////////////////////////
// Coding Challenge #2

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 😉

GOOD LUCK 😀
*/

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.85;
const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / heightJohn ** 2;
if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI ${BMIMark} is higher than John's BMI ${BMIJohn}`);
} else {
  console.log(`John's BMI ${BMIJohn} is higher than Marks's BMI ${BMIMark}`);
}

// Truthy and Falsy Values:- 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(NaN));

const height = 0;
if (height) {
  console.log("Height is defined");
} else {
  console.log("Height is undefined");
}

// Equality Operators: == vs. ===

const check = "18";
console.log(check == 18); // TRUE
console.log(check === 18); // FALSE

/*
const fav = Number(prompt("What is your favorite number?"));
console.log(fav);
console.log(typeof fav);
if (fav === 23) {
  console.log("23 is an amazing number");
} else if (fav === 17) {
  console.log("17 is also a good number");
} else {
  console.log("Number is not 23 or 17");
}
if (fav !== 23) console.log("Why not 23");
*/

// Logical Operators

const hasDriverLicense = true;
const hasGoodVision = true;
// && both condition must be true. || any one condition must be true. ! inverts the response
console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);
console.log(!hasDriverLicense);

if (hasDriverLicense && hasGoodVision) {
  console.log("U can Drive");
} else {
  console.log("Don't touch my damn keys");
}

const isTired = false;
if (hasGoodVision && hasDriverLicense && isTired) {
  console.log("u can drive");
} else {
  console.log("u cannot drive get some help");
}

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

const scoreDolphins = (97 + 112 + 80) / 3;
const scoreKoalas = (109 + 95 + 50) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log("Dolphins win the trophy 🏆");
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
  console.log("Koalas win the trophy 🏆");
} else if (
  scoreDolphins === scoreKoalas &&
  scoreDolphins >= 100 &&
  scoreKoalas >= 100
) {
  console.log("Both win the trophy!");
} else {
  console.log("No one wins the trophy 😭");
}

// The switch Statement

/*
const day = String(prompt("Enter the day of the week"));
switch (day) {
  case "monday":
    console.log("Start of the week");
    break;
  case "tuesday":
    console.log("second day of the week");
    break;
  case "wednesday":
    console.log("mid week");
    break;
  case "thursday":
    console.log("one last stretch");
    break;
  case "friday":
    console.log("weekend is here");
    break;
  case "saturday":
    console.log("weekend is here");
    break;
  case "sunday":
    console.log("weekend is here");
    break;
  default:
    console.log("Not a valid day");
}
*/
