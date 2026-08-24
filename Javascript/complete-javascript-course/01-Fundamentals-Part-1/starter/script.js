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
