// const multiplication =(numberone,numbertwo)=>{
//     return new Promise((resolve,reject)={
//         setTimeout(()=>{
//             if(numberone<0 || numbertwo<0){
//                 return reject("Only positive ny=umbers allowed")
//             }
//             resolve(numberone*numbertwo)
//         },4000)
//     })
// }
// multiplication(5,3).then((product)=>{
//     console.log(product);
// }).catch((error)=>console.log(error));


// const multiplication = (numberone, numbertwo) => {
//     return new Promise((resolve, reject) => { 
//         setTimeout(() => {
//             if (numberone < 0 || numbertwo < 0) {
//                 return reject("Only positive numbers allowed");
//             }
//             resolve(numberone * numbertwo);
//         }, 4000);
//     });
// };

// multiplication(5, -3)
//     .then((product) => {
//         console.log(product);
//     })
//     .catch((error) => console.log(error));


    function addAllElements(array) {
        return new Promise((resolve, reject) => {
          if (array.length !== 5) {
            reject(new Error('Array must contain 5 elements'));
          } else {
            const sum = array.reduce((a, b) => a + b, 0);
            resolve(sum);
          }
        });
      }
      
      addAllElements([1, 2, 3, 4, 5])
        .then((sum) => {
          console.log(sum); // 15
        })
        .catch((error) => {
          console.log(error.message); // 'Array must contain 5 elements'
        });
