"use strict";

// "use strict" is a directive in JavaScript that enables strict mode, a restricted variant of the language introduced in ECMAScript 5 to improve code security and quality

// Functions in Javascript are blocks of code designed to perform repetitive tasks.

function Logger() {
  console.log("Hello This is Suhag!");
}
// Calling / Invoking / Running / Execution of the function.
Logger();
Logger();
Logger();

function FruitProcessor(apples, oranges) {
  return `Juice with ${apples} apples and ${oranges} oranges`;
}
console.log(FruitProcessor(3, 2));

// Example 2:-
function Introduction(name, age, year) {
  const intro = `My name is ${name} and my age is ${2026 - 2003} and I was born in ${year}`;
  return intro;
}
console.log(Introduction("Suhag", 23, 2026));

// Function Declaration vs Function Expression

// Function Declaration:- A function declaration is a standalone statement that must have a name (e.g., function greet() {}).  It is fully hoisted, meaning the entire function is moved to the top of its scope during compilation, allowing it to be called before it is defined in the code.

function calculateAge(birthYear) {
  return 2026 - birthYear;
}
console.log(calculateAge(2003));

// Function Expression:- function expression creates a function as part of an expression, typically by assigning it to a variable (e.g., const greet = function() {}).  It can be anonymous and is not hoisted

const ageCheck = function (birthYear) {
  return 2026 - birthYear;
};
console.log(ageCheck(2003));

// Arrow functions:- An arrow function is a shorter way to write a function using =>.

const yearsUntilRetirement = (birthYear, firstName, lastName) => {
  const ageNow = 2026 - birthYear;
  const retirement = 65 - ageNow;
  return `${firstName} ${lastName} retires in ${retirement} years`;
};
console.log(yearsUntilRetirement(2003, "Suhag", "Shetty"));

/*
Example: Processing users from an API

Imagine your application receives user data from a database/API and you need to:

Keep only active users
Extract their names
Convert names to uppercase
Sort them alphabetically
 */
