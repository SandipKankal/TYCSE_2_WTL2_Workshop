var fs = require("fs");  
  
fs.readFile('./content/first.txt', function (err, data) {  
    if (err) return console.error(err);  
    console.log(data.toString());  
});  
console.log("Program Ended"); 

// console.log('starting app')
// setTimeout(()=>{
//     console.log('I was waiting to get my turn')
// },2000)
// console.log('ending app')