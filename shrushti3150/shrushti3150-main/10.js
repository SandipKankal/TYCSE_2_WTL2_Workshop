//var fs=require('fs')
//var deta=fs.readFileSync('./content/first.txt')
//console.log(data.toString())
//console.log('Reading completed')
//var fs=require('fs')
//fs.readFile('./web workshop/first.txt', function(err,data)
//{
    //if(err) return console.error(err);
    //console.log(data.toString)
//});
//console.log("reading completed");
//console.log('Activity start');
//setTimeout(()=>
//{
//console.log("do something")
//},2000)
//console.log('activity completed')
const multiplication = (numberone, numbertwo)=>
{
    return new Promise((resolve, reject)=
    {
        setTimeout(() =>

        {
            if(numberone<0 || numbertwo<0)
            {
                return reject("only positive number allowed")
            }
            resolve(numberone*numbertwo) 
        },4000)
     } )
}

multiplication(5,3).then().catch((product)=>
{
    console.log(product)
}).catch((error)=>console.log(error))
