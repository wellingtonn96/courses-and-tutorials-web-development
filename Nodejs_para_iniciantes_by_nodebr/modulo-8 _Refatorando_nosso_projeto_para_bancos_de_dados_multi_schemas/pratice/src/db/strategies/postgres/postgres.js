const ICrud = require('../interfaces/interfaces')
const Sequelize = require('sequelize')

class Postgres extends ICrud{
    constructor(connection, schema) {
        super()
        this._connection = connection
        this._schema = schema
    }

    async isConnect() {
        try {
            const results = await this._connection
            return results ? true : null
        } catch (error) {
            console.error('FAIL IN CONNECTION', error)
        }     
    }

    static async connect() {
        const connection = new Sequelize('DB_HEROS', 'postgres', 1234, {
            host: 'localhost',
            dialect: 'postgres',
            logging: false
        })
        return connection
    }

    static async defineModel(connection, schema) {
        const model = connection.define(
            schema.name, schema.schema, schema.options
        )
        await model.sync()
        return model
    }

    async create(item) {
       const { dataValues } = await this._schema.create(item)
       return dataValues
    }

    read(item = {}) {
        return this._schema.findAll({ where: item, raw: true})    
    }

    async update(id, item) {
        return this._schema.update(item, {where: {id: id}})
    }

    delete(id) {
        return this._schema.destroy({ where: {id: id}})
    }
}

module.exports = Postgres