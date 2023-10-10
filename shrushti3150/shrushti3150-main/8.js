var arr= ['cat', 'dog', 'bat']
console.log(arr)
console.log(arr[0])
arr.forEach((item) => 
{
    console.log(item)
}
)
var arr1=arr.map((animalName)=>animalName=animalName.toUpperCase())
console.log(arr)
console.log(arr1)

arr1.push('horse')
console.log(arr1)
var arr2=arr1.filter((element)=>element.length<4)
console.log(arr2)
const profile=['Amisha','Deshmukh', 'adsvc23@gmail.com']
const[firstname, lastname, email] = profile;
console.log(firstname);
console.log(lastname);
console.log(email);
const profile1=['Amisha','Deshmukh', 'adsvc23@gmail.com'];
const [firstname1, ...data ]=profile1;
console.log(firstname1);
console.log(data);