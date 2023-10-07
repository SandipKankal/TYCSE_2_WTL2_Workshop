/*const amount = 5;
if(amount < 10){
    console.log("amount is less than 10");
}
else{
    console.log("amount is greater than 10");
}
const b=10;
console.log("the value of b is",b);
console.log("the value of b is",`${b}`,"its printed ");


var tester = "Hey hi";
console.log(tester);
function newFunction(){
    var tester ="i am fine";
    console.log("inside the function tester:- ",tester);
}
newFunction();
console.log(tester);

console.log(value1)
var value1 = 10;
*/
//1
const greet=()=>{
    console.log('greetings');
}
greet();
//2
const greetMe=(name)=>{
    console.log('greetings %s',name);
}
greetMe("prathamesh");

//3
const greetMee=(name='Prathamesh')=>{
    console.log('greetings %s',name);
}
greetMee("siddhesh");

//4
const sayHi=(firstname)=>{
    console.log(firstname);
}
sayHi("Prathamesh");

//5
const calc=(one,two)=>{
    var ans=one+two;
    console.log(ans);
}
calc(10,20);

module.exports = calc;