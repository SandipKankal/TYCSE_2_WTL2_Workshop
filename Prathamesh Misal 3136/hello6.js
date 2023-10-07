// var fs = require('fs');
// var data = fs.readFileSync('./first.txt');
// console.log(data.toString());
// console.log("Reading completed");

// var fs = require('fs');
// fs.readFile('./first.txt',function(err,data){
//     if(err) return console.error(err);
//     console.log(data.toString);
// });
// console.log('Reading Completed');

console.log("activity started");

setTimeout(()=>{
    console.log("Do something");
},2000)
console.log("Activity completed");