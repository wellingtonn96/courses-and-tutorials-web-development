let value // no initialize

console.log(value)


value = null // don't have value
console.log(value)

//console.log(value.toString())//Error

const product = {}

console.log(product.price)

console.log(product)

product.price = 3.50
console.log(product)

product.price = undefined //avoid assigning undefined
console.log(!!product.price)

product.price = null // don't have price

console.log(!!product.price)
console.log(product)


