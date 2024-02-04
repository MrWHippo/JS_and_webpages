
// variable assignment
let x = 5
let y = 10
let z = x+y

let a = 5, b = 10, c = a + b
console.log(z)
console.log(c)

// a function
function func(value){
    value += value
    console.log(value)
}

func(a)

// Objects (dictionary)

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    country: "Norway"
}

console.log(person.firstName + " is " + person.age)

let person2 = {
    firstName: "Alex",
    lastName: "Doe",
    age: 45,
    country: "England"
}

console.log(person2.firstName + " " + person2.lastName)
person2.lastName = "bobby" 
console.log(person2.firstName + " " + person2.lastName)

console.log(person2)