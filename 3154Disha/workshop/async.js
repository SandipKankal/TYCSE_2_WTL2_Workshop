/*var fs = require('fs')

fs.readFile('./content/first.txt', function (err, data) {
    if (err) return console.error(err);
    console.log(data.toString())
});
console.log('Reading Completed')*/

console.log('Activity started')
setTimeout(() => {
    console.log('Do Something')
}, 2000)
console.log('Reading Completed')
