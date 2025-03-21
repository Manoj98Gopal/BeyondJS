var a = 10;
let ab = 30
const bb = 50;

console.log("a value is ===", a);

function afunc(num) {
    const b = 20;
    console.log("b value ====",b)
  return num * num;
}

var x = afunc(a);
var y = afunc(5);


console.log("x value ====",x)
console.log("y value ====",y)