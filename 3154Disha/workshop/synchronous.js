var fs = require('fs') //fs - file system

var data = fs.readFileSync('./content/first.txt')
console.log(data.toString())
console.log('Reading Completed')

