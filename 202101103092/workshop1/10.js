var arr = [ 'cat', 'goat', 'bat' ];
console.log(arr)
console.log(arr[0])
arr.forEach( (element)=>{
    console.log(element)
})

var arr1=arr.map((element)=>element=element.toUpperCase())
console.log(arr1)

arr1.push('horse')
console.log(arr1)
var arr2=arr1.filter((element)=> element.length<4)
console.log(arr2)
//array destructuring 
const profile = ["Mandar", "Jog", "mandarmjog@gmail.com"];

const [firstName, lastName, email] = profile;

console.log(firstName); 
console.log(lastName); 
console.log(email); 


const profile1 = ["Mandar", "Jog", "mandarmjog@gmail.com"];

const [firstName1, ...details] = profile;

console.log(firstName); 
console.log(details); 





