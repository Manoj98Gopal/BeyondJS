// var,let and const is used to declare a variables, each should have difference behavior





// --------------------------------------------------- var variable --------------------------------------------------------------------

console.log("------------------ var variable examples ---------------");

// var can access before declaring because it is hoisted but it assigned as an undefined
console.log("var variable accessing before declaring :- ", a);

// var can declare like this but it assigned as an undefined
var a;

console.log("var variable accessing after declaring :-", a);

// var can update or reassign the value like this
a = 20;

console.log("var variable accessing after assigning the value  :-", a);

// var can redeclare like this there is no error occurred ( but this is bad practice )
var a = "Manoj";

console.log("var variable we can redeclare and update new value :- ", a);

//var is a function scope
function exampleVar() {
  if (true) {
    var x = 50;
  }
  console.log("var variable accessing in function scope ===", x);
}

exampleVar();

// we cant access x variable out side of the function because it is function scope and hoisted
// console.log("var variable accessing out side of the function ===",x)

// --------------------------------------------------- let variable --------------------------------------------------------------------

console.log("----------------- let variable examples -----------------");

// let cannot access before declaring because it is (TDZ)
// if you try to access this before declaring you will get reference error
// console.log("let accessing before declaring :-",b)

let b;

console.log("let variable i am accessing after declaring :- ", b);

// let variable we can update value like this
b = 30;

console.log("ler variable i am accessing after assigning the value :-", b);

// we cannot redeclare let variable if you try you will get syntax error
// let b = 50

function exampleLet() {
  if (true) {
    let y = 60;
    console.log("let variable accessing in block scope :- ", y);
  }
  // we cannot access let variable in function scope if you try we will get reference error
  // console.log("let variable accessing in function scope :- ",y)
}

exampleLet();

//---------------------------------------------------- const variable ------------------------------------------------------------

console.log("----------------- const variable examples -----------------");

// const cannot access before declaring because it is (TDZ)
// if you try to access this before declaring you will get reference error
// console.log("let accessing before declaring :-",c)

// we cannot declare like this const variable if try we will get error like "Missing initializer in const declaration"
// const c;

const c = 50;
console.log(
  "const variable i am accessing after declaring and initialized :- ",
  c
);

// const variable we cannot update  value like this
// if you try to update you will get error like Assigned to constant variable
// c = 30;

// we cannot redeclare const variable if you try you will get syntax error like Identifier 'c' has already been declared
// let c = 50

function exampleConst() {
  if (true) {
    const z = 70;
    console.log("const variable accessing in block scope :- ", z);
  }
  // we cannot access const variable in function scope if you try we will get reference error
  //   console.log("let variable accessing in function scope :- ",z)
}

exampleConst();
