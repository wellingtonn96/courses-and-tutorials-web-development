console.log(typeof console)
console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = 'ball'
console.log(obj1.nome)

function Obj(name){
    this.name = name
    this.exec = function(){
        console.log('Exec... ')
    }
}

const obj2 = new Obj('seat')
const obj3 = new Obj('table')

console.log(obj1.name)
console.log(obj2.name)
console.log(obj3.name)
obj3.exec()
