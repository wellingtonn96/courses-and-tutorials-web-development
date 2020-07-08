const Moongose = require('mongoose')
Moongose.connect('mongodb://localhost:27017/herois', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})


const connection = Moongose.connection

connection.once('open', () => console.log('database rondando lindo'))
//console.log(connection.readyState)

const heroiSchema = new Moongose.Schema({
    nome: {
        type: String,
        required: true
    },
    poder: {
        type: String,
        default: new Date()
    },
    insertAt: {
        type: Date,
        default: new Date()
    }
})

const mondel = Moongose.model('herois', heroiSchema)

async function main() {
    const resultCadastrar = await mondel.create({
        nome: 'batman',
        poder: 'dinheiro'
    })
    console.log('resultado cadastrar', resultCadastrar)

    const listItem = await mondel.find()

    console.log('items Encontrados na base', listItem)

}

main()