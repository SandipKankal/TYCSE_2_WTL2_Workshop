var fs = require("fs");  
var data = fs.readFileSync('./content/first.txt');  
console.log(data.toString());  
console.log("Program Ended");   
