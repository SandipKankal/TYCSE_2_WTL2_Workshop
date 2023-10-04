SayHi = (name) => {
    console.log(`Hi there ${name}`)
}
//module.exports = SayHi //single export

SayBye = (name) => {
    console.log(`Goodbye!, `, name)
}
module.exports = { SayHi, SayBye } //multi export