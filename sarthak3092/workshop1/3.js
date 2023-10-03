// const sayHi = (name) => {
//     console.log(`Hello there ${name}`)
// }

// sayHi('Mandar')

// let x;
// console.log(x);

// // console.log(y)
// // const y=10

// let process1=()=>'something';
// console.log(process1())

// let myFunction = (a, b) => a * b;
// console.log(myFunction(4, 5))


const os = require('os')

// info about current user
const user = os.userInfo()
console.log(user)

// method returns the system uptime in seconds
console.log(`The System Uptime is ${os.uptime()} seconds`)

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
}
console.log(currentOS)

