//new feature ES6

const people={
     name:'Ana',
     age:5,
     adress:{
         street: 'Rua ABC',
         number:1000
     }
}

const { name, age} = people
console.log(name, age)

const {name: n, age: i}= people
console.log(n, i)
//console.log(lastname, goodhumor)

const {adress : {street, number, cep}} = people

console.log(street, number, cep)

//const {cont: {ag, num}} = people


