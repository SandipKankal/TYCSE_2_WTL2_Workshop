function dieToss() {
    console.log('dieToss invoked')
    return Math.floor(Math.random() * 6) + 1;
}
  

const generateNumber=()=> {
    return new Promise((resolve,reject)=>{
        var n = dieToss();
       // console.log(n)
        if (n === 6) {
            return resolve(n);
    } else {
      return reject(n);
    }
    //console.log('2');
    })
    
}
generateNumber().then((ans)=>console.log('got expected:'+ans))
                .catch((error)=>console.log('Wrong value:'+error));