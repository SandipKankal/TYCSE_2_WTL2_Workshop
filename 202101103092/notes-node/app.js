// console.log('starting app.js')
// const fs=require('fs')
// const os=require('os')
// const load=require('lodash')
// const notes=require('./notes.js')
// var user=os.userInfo()
// fs.appendFileSync('greetings.txt',`Hello {user}! You are ${notes.age}`)
// var result=notes.addNote()
// var addition=notes.add(10,20)
// console.log(result)
// console.log(addition)
// console.log(load.isString(10))
// console.log(load.isString('hello'))

// console.log(load.uniq([10,20,10,10,54]))
// console.log(process.argv)

console.log('starting app.js')
const fs=require('fs')
const _=require('lodash')
const yargs=require('yargs')
const notes=require('./notes.js')
const argv=yargs.argv
var command=process.argv[2]
console.log('Command:',command)
console.log('Process:',process.argv)
console.log('Yargs:',yargs.argv)
console.log(process.argv)
if(command=='add'){
    console.log('Adding new note')
    notes.addNote(argv.title, argv.body)
}
else if(command=='list'){
    console.log('Listing all notes')
    notes.getAll()
}
else if(command=='read')
    console.log('Reading note')
else if(command == 'remove')
    console.log('Removing note')
else
    console.log('command not recognized')
    



