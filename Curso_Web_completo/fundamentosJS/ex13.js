//store an function in a variable

const printSun = function(a, b){
    console.log(a+b)
}

printSun(2,3)


//store an function arrow in a variable
const sum = (a, b) => {
    return a + b
}

//return implicit
const subtraction = (a, b) => a - b

console.log(subtraction(9,3))

console.log(sum(2,3))


const print2 = a => console.log(a)

print2('Very Nice!!')

