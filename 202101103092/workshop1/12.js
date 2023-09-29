const multiplication = (numberOne, numberTwo) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
 
            // Checking if any number is negative or not
            if (numberOne < 0 || numberTwo < 0) {
 
                // If everything is not fine
                return reject("Only Positive number allowed")
            }
 
            // If everything is fine
            resolve(numberOne * numberTwo)
        }, 4000)
    })
}
 
// Call for positive numbers
multiplication(5, 3).then(
    (product) => {
    console.log("The product is:", product)
}).catch((error) => {
    console.log(error)
})
// Call for negative numbers
multiplication(5, -3).then((product) => {
    console.log("The product is:", product)
}).catch((error) => {
    console.log(error)
})

