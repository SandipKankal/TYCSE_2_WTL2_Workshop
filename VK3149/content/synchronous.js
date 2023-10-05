var fs = require('fs') //fs- file system 
var data = fs.readFileSync('./First.txt')
console.log(data.toString())
console.log('Reading Completed')