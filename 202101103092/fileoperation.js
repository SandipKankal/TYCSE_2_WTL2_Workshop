const fs=require('fs')
fs.appendFile('first.txt','welcome from node', function(err){
    if(err){
        console.log('unable to write in the file')
    }
    else
    console.log('file appended successfully')
})

fs.appendFileSync('second.txt','second file created')

