console.log(__dirname);
let x=10;
var y=20;
console.log(x)
console.log(y)
const data=14;
console.log(data);
// setInterval(()=>{console.log("hello")},1000)

console.log(greet);
var greet="hello"
var greet="sample";//redeclaration issue 
console.log(greet);

let value=10;
if(x>5){
    let value=20;
    console.log(value)
}
console.log('The value is',value)
console.log('%s',greet);
console.log(`The value is, ${value}`)

const greetMe=(user='Mandar')=>{
    console.log('welcome ',user)
    console.log(`Hello ${user}`)
}
greetMe()

const sayHi = (name) => {
    console.log(`Hello there ${name}`)
}

sayHi('Mandar')
console.log(module)

var data1=10;
console.log({data1})

let process1=()=>'something';
console.log(process1())

let myFunction = (a, b) => a * b;
console.log(myFunction(4, 5))