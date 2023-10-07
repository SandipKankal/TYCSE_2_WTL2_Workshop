// var arr = ['cat','goat','bat'];
// console.log(arr);
// console.log(arr[0])
// arr.forEach((i)=>{
//     console.log(i);
// })
// var arr1 = arr.map((element)=>element.toUpperCase());
// console.log(arr1);

// arr1.push('horse');
// console.log(arr1);

// var arr2=arr1.filter((element)=>element.length<4);
// console.log(arr2);


// array destructuring
var profile = ['Prathamesh','Misal','prathameshmisal@gmail.com'];
const [firstname,lastname,email] = profile;
console.log(firstname);
console.log(lastname);
console.log(email);

// array destructuring
var profile1 = ['Prathamesh','Misal','prathameshmisal@gmail.com'];
const [firstname1,...details] = profile1;
console.log(firstname1);
console.log(details);

arr4 =['fname','lname','mail']
var profile2 = ['Prathamesh','Misal','prathameshmisal@gmail.com'];
var arr5 = profile2.join(arr4);
console.log(arr5)


