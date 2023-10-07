const{read, writeFileSync ,readFileSync}=require('fs');
const first = readFileSync('./first.txt','utf-8');
console.log(first);
const second = readFileSync('./second.txt','utf-8')
console.log(second);
const a = first+second;
writeFileSync('./result.txt',a);