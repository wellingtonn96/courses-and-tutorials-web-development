// both number/value

const salution = 'Hei'//lexical context 1

function exec(){
    salution = "watss"// lexical context 2
    return salution
}

const client = {
    name: 'Pedro',
    age: 32,
    weight: 50,
    adress: {
        street: 'Rua Muito Legal',
        number: 293
    }
}

