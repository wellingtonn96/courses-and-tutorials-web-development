const escola = "Cod3r"

console.log(escola.charAt(4))
console.log(escola.charAt(5))
/**/
console.log(escola.charCodeAt(3))
/*Mostra o caracter no indece 3 */
console.log(escola.indexOf('3'))
/*Vai do 0 ao indece 3 */
console.log(escola.substring(0,3))
/* Concatena escola a coder e !*/
console.log('Escola'.concat(escola).concat("!"))
/*método replace substitui 3 pela letra e */
console.log(escola.replace(3, 'e'))
/*generate one Array with elements from the comma */ 
console.log('Ana, Maria, Pedro'.split(', '))