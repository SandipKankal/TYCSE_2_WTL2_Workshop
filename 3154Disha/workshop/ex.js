//simple print
//console.log("hi")

//conditional
/*
const amount = 90
if (amount < 100) {
    console.log("condition satisfied")
}
else {
    console.log("condition not satisfied")
}
*/

//various types of printing
//const text = 2
//console.log('some text', text)
//console.log('%s', text)
//console.log(text)
//console.log(`${text}`) //string literal

//using var
/*var tester = "hiii"
console.log(tester)
function newFunc() {
    var tester = "I'm fine"
    console.log("Inside the function ", tester)
}
newFunc();
console.log(tester)
console.log(name);
var name = "some name" //hoisting property - there is no need to declare the variable before the use, it does not throw error
*/

//const can't be redeclared, it also does not follow hoisting property
/*const value1 = 10
const value1 = 9 */

//var can be redeclared
/*var data1 = 10;
var data2 = 20;*/

//functions - basic, arrow
//functions - 3 types - without arguments, with arguments, with default arguments

/* default arguments
const greetMe = (name = 'Disha') => {
    console.log('Greetings %s', name)
}
greetMe()
greetMe('ABC')*/

/*without arguments
const greetMe = () => {
    console.log('Greetings')
}
greetMe() */

/*with arguments
const greetMe = (name) => {
    console.log('Greetings %s', name)
}
greetMe('Disha')*/

/*const calc = (one, two) => {
    var ans = one + two;
    console.log(ans)
}
calc(10, 20)*/

/* exporting module 
const greet = require('./mymodule.js')
greet.SayHi('Disha')
greet.SayBye('Disha') */