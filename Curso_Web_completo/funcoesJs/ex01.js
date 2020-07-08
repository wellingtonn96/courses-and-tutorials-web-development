function fun1(){}

const fun2 = function(){}

const array = [function(a,b){return a + b}, fun1, fun2]

console.log(array[0](2, 3))

const obj = {}
obj.falar = function () {return 'Oba'}
console.log(obj.falar())

//passar uma função como parametro
function run(fun){
    fun()
}
run(function(){console.log('Executando...')})

//Uma função pode retornar/contr uma função

function sum(a,b){
    return function(c){
        console.log(a+b+c)
    }
}

sum(2,3)(3)
const fiveMore = sum(2,3)
fiveMore(5)