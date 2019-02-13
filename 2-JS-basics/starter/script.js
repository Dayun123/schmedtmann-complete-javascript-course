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