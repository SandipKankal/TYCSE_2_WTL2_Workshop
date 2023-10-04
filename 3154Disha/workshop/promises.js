/*const multiplication = (numberone, numbertwo) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (numberone < 0 || numbertwo < 0) {
                return reject("Only positive number allowed")
            }
            resolve(numberone * numbertwo)
        }, 4000)
    })
}

multiplication(5, 2).then((product) => {
    console.log(product)
}).catch((error) => console.log(error))*/

//create promise add all array element if length is less than 5 then it will return error

/*const array = (arr) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (arr.length < 5) {
                return reject("Array should contain atleast 5 elements")
            }
            var sum = 0
            for (var i = 0; i < arr.length; i++) { sum = sum + arr[i] }
            resolve(sum)
        }, 2000)
    })
}
var arr = [1, 2, 3, 4]
array(arr).then((sum) => {
    console.log(sum)
}).catch((error) => console.log(error))
*/

//promise - function should generate a random number and it should be > 6 otherwise err
/*
const random = (number) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (num > 6) {
                resolve(number)
            }
            else {
                return reject("Random number should be >= 6")
            }
        }, 2000)
    })
}
var num = Math.random() * 10
random(num).then((num) => {
    console.log('The number was ', num)
}).catch((error) => console.log(error))
*/
