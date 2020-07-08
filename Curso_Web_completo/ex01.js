//coleção dinâmica de pares chave/valor

const product = new Object
product.name = 'Cadeira'
product['marca do produto']='Generica'

product.price=220

console.log(product)
delete product.price
delete product['marca do produto']
console.log(product)

const car = {
    model: 'A4',
    value: 89000,
    proprety: {
        name: 'Raul',
        age: '56',
        adress: {
            street: 'Rua São Jorje',
            number: 123
        }
    },
    condutors:[{
        name: 'Junior',
        age: 19
    }],
    calculatorSafe: function(){
        //...
    }
}

car.prototype.adress.number = 1000
car['']


    
