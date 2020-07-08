/*Boleans */

let isActive = false
console.log(isActive)

isActive = true
console.log(isActive)

isActive = 1

/* is negative */
console.log(!isActive)

console.log('the trues')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isActive=true))

console.log('the negatives')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isActive=false))

console.log('for to finish')
console.log(!!(''||null||0||' '))

let nome = 'Lucas'
console.log(nome || 'Unknown')




