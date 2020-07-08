const ICrud = require('./interfaces/interfaceCrud')
const Moongose = require('mongoose')
const STATUS = {
    0: 'Disconectado',
    1: 'Conectado',
    2: 'Conectando',
    3: 'Disconectando',
}

class MongoDB extends ICrud {
    constructor() {
        super()
        this._herois = null,
        this._driver = null
    }

    async isConnected() {
        const state = STATUS[this._driver.readyState]
        if(state === 'Conectado') return state
        if(state !== 'Conectando') return state
        await new Promise(resolve => setTimeout(resolve, 1000))
        return STATUS[this._driver.readyState]
    }

    connect() {
        Moongose.connect('mongodb://localhost:27017/herois', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        const connection = Moongose.connection
        connection.once('open', () => console.log('database rondando lindo'))
        this._driver = connection
        this.defineModel()
    }

    defineModel() {
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

        this._herois = Moongose.model('herois', heroiSchema)
    }

    create(item) {
        return this._herois.create(item)
    }

    read(item, skip=0, limit=10) {
        return this._herois.find(item).skip(skip).limit(limit)
    }

    update(id, item) {
        return this._herois.updateOne({ _id: id }, { $set: item })
    }

    delete(id) {
        return this._herois.deleteOne({ _id: id })
    }
}

module.exports = MongoDB;
