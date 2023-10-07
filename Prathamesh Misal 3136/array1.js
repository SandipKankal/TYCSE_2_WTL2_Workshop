const profile={
    firstName:'Prathamesh',
    lastName:'Misal',
    email:'prathameshmisal@gmail.com'
}
const fname = profile.firstName;
const lname = profile.lastName;
const mail = profile.email;

console.log(fname);
console.log(lname);
console.log(mail);

 const {firstName: firstName, lastName: lastName,email:email} = profile;
 console.log(firstName);
 console.log(lastName);
 console.log(email);

 const {firstName1,lastName1,email1}={
    firstName1 : "siddhesh",
    lastName1: "kulakarni",
    email1 : "sidd@gmail.com"
 }
 console.log(firstName1);
 console.log(lastName1);
 console.log(email1);