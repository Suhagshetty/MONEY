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
