//non-return function
function printSun(a, b){
    console.log(a+b)
}

printSun(2, 3)
// return value not a number
printSun(2)
printSun(1,3,4,5,5,6)
printSun()

function sun(a, b=1){
    return a+b
}

console.log(sun(2,3))
console.log(sun(2))
console.log(sun())