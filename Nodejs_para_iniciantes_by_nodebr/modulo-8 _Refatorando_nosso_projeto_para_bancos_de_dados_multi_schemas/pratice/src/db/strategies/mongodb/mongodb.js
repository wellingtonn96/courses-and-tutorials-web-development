const ICrud = require('../interfaces/interfaces')
const Mongoose = require('mongoose')

const STATES = {
    0: 'disconnected',
    1: 'connected',
    2: 'connecting',
    3: 'disconnecting',
}

class Mongodb extends ICrud{
    constructor(connection, schema) {
        super()
        this.connection = connection,
        this.schema = schema
    }

    create(item) {
        return this.schema.insertMany(item)
    }

    read(item) {
        return this.schema.find(item)
    }

    update(id ,item) {
        return this.schema.updateOne({ _id: id }, { $set: item })
    }

    delete(id) {
        return this.schema.deleteMany({ _id: id })
    }

    isConnect() {
        return STATES[this.connection.readyState]
    }

    static connect() {
        Mongoose.connect('mongodb://localhost:27017/DB_schema', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        const connection = Mongoose.connection
        connection.once('open', () => console.log('database rondando lindo!'))
        return connection
    }    
}

module.exports = Mongodb
