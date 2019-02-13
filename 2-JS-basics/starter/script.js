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










