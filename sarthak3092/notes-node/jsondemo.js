// var object={
//     name:'mandar'
// }
// var detail=JSON.stringify(object)
// console.log(typeof detail)
// console.log(detail)
// const person=JSON.parse(detail);
// console.log(person)
const fs=require('fs')
var originalNote={
    title:'Some title',
    body: 'Some body'
}
var originalNoteString=JSON.stringify(originalNote)
fs.writeFileSync('notes.json',originalNoteString)

var noteString=fs.readFileSync('notes.json')
var note=JSON.parse(noteString)
console.log(note.title)
console.log(note.body)