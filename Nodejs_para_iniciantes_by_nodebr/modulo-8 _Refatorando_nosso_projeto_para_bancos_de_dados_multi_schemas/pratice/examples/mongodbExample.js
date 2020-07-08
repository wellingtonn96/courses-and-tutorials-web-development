const Mongoose = require('mongoose')
Mongoose.connect('mongodb://localhost:27017/DB_HEROIS', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const connection = Mongoose.connection

connection.once('open', () => console.log('database rondando lindo!'))

const heroiSchema = new Mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    poder: {
        type: String,
        required: true
    },
    insertAt: {
        type: Date,
        default: new Date()
    }
})

const model = Mongoose.model('herois', heroiSchema)

async function main() {
    const create = await  model.insertMany({
        nome: 'Super Man',
        poder: 'super força'
    })
    const read = await model.find({ nome: 'Super Man'})
    
    const update = await model.updateOne({ _id: '5e383196053ae83ae3da4dd8'}, { $set: { nome: 'Batman'}})

    const del = await model.deleteMany({ nome: 'Super Man'})

    // const del = await model.destroy()

    console.log('results', create, read, update, del)
}

main()