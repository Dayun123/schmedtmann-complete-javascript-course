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



















