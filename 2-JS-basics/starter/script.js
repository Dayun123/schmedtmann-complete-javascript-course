/********* Variables and Data Types ************/

/*
var firstName = 'John';
console.log(firstName);

// string data type
var lastName = 'Smith';
// number data type
var age = 28;
// boolean data type
var adult = true;
console.log(adult);

// if we don't assign anything to a variable, it will have a data type of 'undefined.'
var job;
console.log(job);

// here, we assign a String to job, so now it has a String data type.
job = 'Teacher';
console.log(job);

// can't start a variable with a number, will throw a syntax error!
// var 3years = 3;

// _ and $ are fine though
var _3years = 3;
var $3years = 3;
console.log(_3years);
console.log($3years);

// forbidden symbols can't be in the middle of variables either 
// var john/mark = "john and mark";

// variable names can't be reserved words either
// var function = 'Not legal';
// var delete = 22;
*/


/******************** Variable Mutation and Type Coercion ******************/

/*
var firstName = 'John';
var age = 28;

// implicit type coercion occurs here, as the variable 'age', which is a number data type, is converted to the string data type.
console.log(firstName + ' ' + age);

// can declare multiple variables together, here they are undefined because we haven't assigned anything to them.
var job, isMarried;

// now, the variable 'job' is a string data type, and the variable isMarried is a boolean data type.
job = 'teacher';
isMarried = false;

// here, the age is converted to a string and the boolean 'isMarried' is also converted to the string 'false'.
console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried); // output: John is a 28 year old teacher. Is he married? false

// if we make isMarried undefined...
isMarried = undefined;

// then we see from the output that the string 'undefined' is printed, showing that the type coercion from undefined to string occurs as well.
console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried); // output: John is a 28 year old teacher. Is he married? undefined

// because JavaScript is dynamically typed, we can assign a different data type to a variable, as we do with 'age' below. It used to be a number, now it is a string.
age = 'twenty eight';

// instead of logging to the console, you can also use the alert() function to cause a popup to open.
alert('Hi there!');

// also, if you want to prompt the user for some input, you can use the prompt() function and store the value returned in a variable.
var lastName = prompt('What is your last name?');
console.log('Your last name is ' + lastName);
*/


/******************** Basic Operators ******************/
/*

var currentYear, age, birthYear;

currentYear = 2019;
birthYear = 1985;
// using '-' math operator to compute my age.
age = currentYear - birthYear;

console.log('I will be ' + age + ' years old on December 21st.');

var weeksInYear, daysInWeek, daysInYear;

daysInYear = 365;
daysInWeek = 7;

// division operator
weeksInYear = daysInYear / 7;

// notice that the output is a decimal. In JavaScript, all numbers are floats!
console.log('There are ' + weeksInYear + ' weeks in a year.'); // output: There are 52.142857142857146 weeks in a year.

// multiplication operator
daysInYear = weeksInYear * daysInWeek;
console.log('There are ' + daysInYear + ' days in a year.');

// logical operators return boolean values
console.log(5 > 7);
console.log(3 < 5);

var myBool = 4 > 2;

// you can use the typeof operator to determine the type of a variable.
console.log(typeof myBool);     // boolean
console.log(typeof daysInYear); // number
console.log(typeof 'hello');    // string
var noVal;
console.log(typeof noVal);      // undefined
*/

/******************** Operator Precedence ******************/
/*
var myName = 'Daniel Schroeder';
var currentYear = 2019;
var birthYear = 1985;
var legalDrinkingAge = 21;

// the '-' is evaluated first, then the logical operator, so this works. Probably always a better idea to use () to be safe.
var isLegal = currentYear - birthYear >= legalDrinkingAge;
console.log('Is ' + myName + ' of legal drinking age? ' + isLegal);

// will be wrong because the '/' will happen first, just like in regular math class.
var average = 24 + 6 / 2; // result: 27 (not 15 like we would expect)
console.log(average);

average = (24 + 6) / 2;
console.log(average); // result: 15

// you can assign values to multiple variables at once.
var x, y;

x = y = (10 + 2) * 8 - 4;
console.log(x, y); // 92 92

// more operators
x = 10;
x = x * 2;
console.log(x); // 20
x = 10;
x *= 2;
console.log(x); // 20
x = 10;
x++
console.log(x); // 11
x = 10;
x--;
console.log(x); // 9
*/

/******************** Coding Challenge ******************/

/*

Mark and John are trying to calculate their Body Mass Index (BMI) using the formula: 

BMI = mass / height^2
(mass in kg, height in meters)

1. Store Mark and John's mass and height in variables
2. Calculate both their BMI's
3. Create a boolean variable which tells whether Mark's BMI is higher than John's.
4. Print a string to the console containing the variable from step 3. (ex: "Is Mark's BMI higher than John's? true").

*/
/*

var markMass, markHeight, markBMI;
var johnMass, johnHeight, johnBMI;
var isMarkBMIHigher;

// calculate Mark's BMI
markMass = 50;
markHeight = 2;
markBMI = markMass / (markHeight * markHeight);

// calculate John's BMI
johnMass = 45;
johnHeight = 1.8;
johnBMI = johnMass / (johnHeight * johnHeight);

// figure our if Mark's BMI is higher than John's
isMarkBMIHigher = markBMI > johnBMI;

// display the results
console.log('Mark\'s BMI is ' + markBMI + ' and John\'s BMI is ' + johnBMI + '.');
console.log('Is Mark\'s BMI higher than John\'s? ' + isMarkBMIHigher);

*/


/******************** Conditional statements: if-else ******************/

/*
var firstName = 'Daniel';
var maritalStatus = 'single';

// you can use conditional statements to test for certain true/false values and make a decision based on them.
if (maritalStatus === 'married') {
  console.log(firstName + ' is married.');
} else {
  console.log(firstName + ' is single.');
}

// with these, we can refactor our code from the previous coding challenge to use conditional logic.

var markMass, markHeight, markBMI;
var johnMass, johnHeight, johnBMI;
var isMarkBMIHigher;

// calculate Mark's BMI
markMass = 50;
markHeight = 2;
markBMI = markMass / (markHeight * markHeight);

// calculate John's BMI
johnMass = 45;
johnHeight = 1.8;
johnBMI = johnMass / (johnHeight * johnHeight);

// figure our if Mark's BMI is higher than John's
isMarkBMIHigher = markBMI > johnBMI;

console.log('Mark BMI: ' + markBMI);
console.log('John BMI: ' + johnBMI);

if (isMarkBMIHigher) {
  console.log('Mark\'s BMI is higher than John\'s.');
} else {
  console.log('John\'s BMI is higher than Mark\'s.');
}
*/

/******************** Boolean Logic ******************/
/*
var firstName = 'John';
var johnAge = 16;

if (johnAge < 13) {
  console.log(firstName + ' is a boy.');
} else if (johnAge >= 13 && johnAge < 20) {
  console.log(firstName + ' is a teenager.');
} else if (johnAge >= 20 && johnAge < 30) {
  console.log(firstName + ' is a young man.');
} else {
  console.log(firstName + ' is a man.'); 
}
*/

/****************** Ternery Operator and Switch Statements ******************/

/*
var firstName = 'Daniel';
var age = 33;

// the ternery operator allows you to make an if...else statement inline.
console.log(firstName + (age >= 21 ? ' drinks beer.' : ' drinks juice.' ));

// can also use the ternery operator to make an assignment based on a condition
var drink = age >= 21 ? 'beer' : 'juice';
console.log(drink);

// the switch statement allows you to test a value against multiple conditions. It's not used very oftern.

var job = 'teacher';

switch(job) {
  // can match to multiple cases
  case 'teacher':
  case 'instructor':
    console.log(firstName + ' teaches kids how to code.');
    // must have a break statement or execution will fall through to the next case and just execute it without even checking if it is valid.
    break;
  case 'driver':
    console.log(firstName + ' drives an Uber in New Orleans.');
    break;
  case 'designer':
    console.log(firstName + ' designs ballin\' websites.');
    break;
  // will match if nothing else does.
  default: 
    console.log(firstName + ' does something else.');
}
*/

// can translate this into a switch statement
/*
var firstName = 'John';
var johnAge = 16;

if (johnAge < 13) {
  console.log(firstName + ' is a boy.');
} else if (johnAge >= 13 && johnAge < 20) {
  console.log(firstName + ' is a teenager.');
} else if (johnAge >= 20 && johnAge < 30) {
  console.log(firstName + ' is a teenager.');
} else {
  console.log(firstName + ' is a man.'); 
}
*/

/*
var firstName = 'John';
var johnAge = 16;

// this is from the previous section, it was in if..else statement then. We are going to compare each case to the 'true' boolean value.
switch(true) {
  case johnAge < 13:
    console.log(firstName + ' is a boy.');
    break;
  case johnAge >= 13 && johnAge < 20:
    console.log(firstName + ' is a teenager.');
    break;
  case johnAge >= 20 && johnAge < 30:
    console.log(firstName + ' is a teenager.');
    break;
  default:
    console.log(firstName + ' is a man.');    
}
*/

/*******************Truth and Falsy Values, Equality *************************/

var height;

// since height has not beed defined, it is a falsy value.
if (height) {
  console.log('The variable has been defined.');
} else {
  console.log('The variable has NOT been defined');
}

// what if we define height to 0? This is falsy, so we need to add a logical operator to account for this.
height = 0;

if (height || height === 0) {
  console.log('The variable has been defined.');
} else {
  console.log('The variable has NOT been defined.');
}

// we usually use the === (strict equality operator), but there is another equality operator, ==, which performs type coercion before checking for equality.

height = 23;

// notice we are comparing a number to a string, the == operator will perform type coercion to convert '23' to 23.
if (height == '23') {
  console.log('The == operator converted the string to a number to do the comparison.');
}

























