const fs=require('fs')
console.log('starting notes.js')
module.exports.age =25
const addNote=(title,body)=>{
    var notes=[]
    notes.filter
    var note={
        title,body
    }
    notes.push(note)
    // console.log('addNote invokes',title,body)
    // return 'New note'
    fs.writeFileSync('notes-json.json',JSON.stringify(notes))
}
const add=(a,b)=>{
    return a+b
}
const getAll=()=>{
    console.log("Displaying all th enotes")
}
module.exports={
    addNote,add,getAll
};
