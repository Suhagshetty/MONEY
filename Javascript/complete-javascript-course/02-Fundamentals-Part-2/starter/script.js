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

const users = [
  { id: 1, name: "Suhag", active: true, role: "developer" },
  { id: 2, name: "Rahul", active: false, role: "designer" },
  { id: 3, name: "Ananya", active: true, role: "developer" },
  { id: 4, name: "Arjun", active: true, role: "manager" },
];

const activeDeveloperNames = users
  .filter((user) => user.active && user.role === "developer")
  .map((user) => user.name.toUpperCase())
  .sort((a, b) => a.localeCompare(b));

console.log(activeDeveloperNames);

// BASIC ARRAY OPERATIONS AND ARRAYS

const friends = ["Suhag", "Rahul", "Karan", "Mukesh"];
console.log(`This is an array of my friends ${friends}`);

// Adding elements to our Array:- We can add elements to an array using the push() method, which adds elements to the end of the array, or the unshift() method, which adds elements to the beginning of the array.

friends.push("Rishab");
console.log(friends);
// (5) ['Suhag', 'Rahul', 'Karan', 'Mukesh', 'Rishab']

friends.unshift("Prashanth", "Akshay");
console.log(friends);
// (7) ['Prashanth', 'Akshay', 'Suhag', 'Rahul', 'Karan', 'Mukesh', 'Rishab']

// Removing elements from our Array:- We can remove elements from an array using the pop() method, which removes the last element of the array, or the shift() method, which removes the first element of the array.

friends.pop();
console.log(friends);
// (6) ['Prashanth', 'Akshay', 'Suhag', 'Rahul', 'Karan', 'Mukesh']

friends.shift();
console.log(friends);
// (5) ['Akshay', 'Suhag', 'Rahul', 'Karan', 'Mukesh']

// IndexOf() method:- The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.

console.log(friends.indexOf("Suhag")); // 1
console.log(friends.indexOf("Akshay")); // 0
console.log(friends.indexOf("Sumana")); // -1

// Includes() method:- The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.

console.log(friends.includes("Suhag")); // TRUE
console.log(friends.includes("Sumana")); // FALSE

// Example: Customer Support Ticket Queue

let tickets = ["Login Issue", "Payment Failed", "Account Locked"];
// 1. New normal ticket arrives
tickets.push("Profile Update");
console.log(tickets);
// ["Login Issue", "Payment Failed", "Account Locked", "Profile Update"]

// 2. VIP Member has an urgent request/issue
tickets.unshift("VIP: Password Reset");
console.log(tickets);
// ["VIP: Password Reset", "Login Issue", "Payment Failed",
//  "Account Locked", "Profile Update"]

// 3. Support agent takes first ticket

let currentTicket = tickets.shift();
console.log("Working on: ", currentTicket);
console.log(tickets);
// ["Login Issue", "Payment Failed", "Account Locked", "Profile Update"]

// 4. Check whether ticket exists
if (tickets.includes("Payment Failed")) {
  console.log("Payment issue already exists");
}

// 5. Find position of ticket

let postition = tickets.indexOf("Account Locked");
console.log("Ticket Position: ", postition);
// 6. Last ticket was added accidentally, so remove it

let removedTicket = tickets.pop();
console.log("Removed:", removedTicket);
// Removed: Profile Update
console.log("Final Queue:", tickets);
// ["Login Issue", "Payment Failed", "Account Locked"]

// Introduction To Objects in Javascript:- An object is a collection of properties, where each property is defined as a key-value pair. Objects allow you to group related data and functionality together, making it easier to organize and manage complex information in your code.

const Suhag = {
  firstName: "Suhag",
  lastName: "Shetty",
  age: 2026 - 2003,
  job: "Software Engineer",
  friends: ["Rahul", "Karan", "Mukesh"],
};
console.log(`This is my object:-`, Suhag);

// Dot vs. Bracket Notation:- both are used to access objects

console.log(Suhag.lastName); // Shetty
console.log(Suhag["firstName"]); // Suhag

Suhag.location = "India";
Suhag.instagram = "_.suhagshetty";
console.log(Suhag);
/*
const infoSuhag = prompt("What do you want to know about Suhag?");
if (Suhag[infoSuhag]) {
  console.log(Suhag[infoSuhag]);
} else {
  console.log(
    "Wrong request/;- Choose between his first,last name his age , his job or his instgram account, friends or his location",
  );
}
  */

// Challenge: Employee Management System
/*
const employee = {
  firstName: "Arjun",
  lastName: "Rao",
  birthYear: 2002,
  role: "Frontend Developer",
  skills: ["JavaScript", "React", "HTML"],
};

// Print entire object
console.log(employee);

// Dot notation
console.log(employee.firstName);

// Bracket notation
console.log(employee["role"]);

// Add new properties
employee.company = "Capgemini";
employee.location = "EPIP Whitefield";

// Add skill
employee.skills.push("TypeScript");

// Calculate age using existing object data
employee.age = 2026 - employee.birthYear;

// Ask user
const request = prompt("What do you want to know about the employee?");

// Dynamic property access
if (employee[request]) {
  console.log(employee[request]);
} else {
  console.log("Invalid request. Please try again.");
}
*/

/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

GOOD LUCK 😀
*/

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBmi: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const John = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};
console.log(mark.calcBmi());
console.log(John.calcBMI());
if (mark.calcBmi() > John.calcBMI) {
  console.log("Mark has higher BMI");
} else {
  console.log("John has Higher BMI");
}

// The for Loop

for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}
