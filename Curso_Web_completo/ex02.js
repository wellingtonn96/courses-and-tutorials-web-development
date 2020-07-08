//usando a rotação literal e json são diferentes

const obj1 = {}
console.log(obj1)

//JsObject

console.log(typeof Object, typeof new Object)

const obj2 = new Object
console.log(obj2)

//Constructor functions
function Product(name, price, desc){
    this.name = name
    this.getPriceDiscont = () => {
        return price = (1 - desc)
    }
}

const p1 = new Product('Pen', 7.99, 0.15)
const p2 = new Product('Notebook', 2999.99, 0.25)

console.log(p1.getPriceDiscont(), p2.getPriceDiscont())

// Functon Factory


function createEmployer(name, baseSalary, faults){
    return {
        name,
        baseSalary,
        faults,
        getSalary(){
            return (baseSalary / 30) * (30 - faults)
        }
    }
}

const f1 = createEmployer('João', 7000, 4)
const f2 = createEmployer('Maria', 11400, 1)

console.log(f1.getSalary(), f2.getSalary())


//Object.create

const daughter = Object.create(null)

daughter.name = 'Ana'

console.log(daughter)

const fromJSON = JSON.parse('{"into": "I am Json"}')


console.log(fromJSON.into)

