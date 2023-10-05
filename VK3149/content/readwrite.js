const{readFileSync,writeFileSync}= require('fs')
const first = readFileSync('./First.txt','utf-8')
const second = readFileSync('./Second.txt','utf-8')
console.log(first)
console.log(second)
const combine = first + second;
writeFileSync('./result.txt',`${first} ${second}`)
