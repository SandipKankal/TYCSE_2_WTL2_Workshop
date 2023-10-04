const { readFileSync, writeFileSync, read } = require('fs')
const first = readFileSync('./content/first.txt', 'utf-8')
const second = readFileSync('./content/second.txt', 'utf-8')
console.log(first)
console.log(second)
writeFileSync('./content/result.txt', first + second) //concatenate
// or writeFileSync('./content/result.txt', `${first}  ${second}`) //using string literal