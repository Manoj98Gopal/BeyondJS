
console.log("******************** Data types ************************")

/*

We have two type so data types 
1) Primitive  data type
    *)Number 
    *)String
    *)Boolean
    *)Null
    *)Undefined
    *)Symbol

2) Non-primitive data type ( Reference type )
    *)Arrays
    *)Objects
    *)functions
    *)Dates


    => Primitive data types are stored in stack memory and immutables
    => Non-primitive data types are stored in heap memory and mutable

    => Mutable : change is allowed after creation 
    => Immutable : change is not allowed after creation


*/


console.log("**** primitive data types")

console.log("1) Number data type")

let a = 1234
let b = 1.343

console.log("integer number : ",a)
console.log("float number :",b)

console.log("2) String data type")

let c = "This is string value"

console.log("string :",c)

console.log("3) Boolean data type")

let d = true
let e = false

console.log("boolean values :",d,e)

console.log("4) undefined")

let f;
// Undefined is the special type of data type in javascript when variable created undefined assigned initially
console.log("undefined :",f)

console.log("5) Null")

let g = null
//Null data type means  empty this manually we can assign this value
console.log("null :",g)



console.log("**** non-primitive (Reference type) data types")

console.log("1) Object")

let user = {
    firstName : "Manoj",
    lastName : "Gopal"
}

console.log("object :",user)

console.log("2) Array")

let numbers = [1,2,3,4,5,]

console.log("Array : ",numbers)

console.log("3) functions")

function greeting(){

}

console.log("function :",greeting)

