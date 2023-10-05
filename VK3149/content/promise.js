/*const multiplication=(numberone,numbertwo)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if(numberone<0 || numbertwo<0){
            return reject("Only positive numbers allowed")
        }
        resolve(numberone*numbertwo)

        },2000)
  })
}

multiplication(5,-1).then((product) => {
    console.log(product);

}).catch((error)=> console.log(error)) */

// create a promise function to add all elements of the array the array should contain atleast 5 elements,else the promise should return error(reject).
// create a promise function , that will generate the promise number the generated random number must be generated than six ,else should return the error(reject).

const array =(arr) =>{
    return new Promise((resolve, reject) => {
        if (arr.length < 5) {
          reject(new Error("Array must contain at least 5 elements"));
        } else {
          const sum = arr.reduce((acc, current) => acc + current, 0);
          resolve(sum);
        }
      });
    }
    
