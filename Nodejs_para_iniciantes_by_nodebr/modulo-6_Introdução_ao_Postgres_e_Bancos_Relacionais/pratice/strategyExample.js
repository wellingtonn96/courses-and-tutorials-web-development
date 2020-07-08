const Sequelize = require('sequelize')

class NotEmplementedException extends Error {
    constructor() {
        super('Not emplemented Exception')
    }
}

class ICrud {
    create(item) {
        throw new NotEmplementedException()
    }

    read(query) {
        throw new NotEmplementedException()
    }

    update(id, item) {
        throw new NotEmplementedException()
    }

    delete(id) {
        throw new NotEmplementedException()
    }
}

class Postgres extends ICrud {
    constructor() {
        super()
        this._driver = null
        this._herois = null
    }

    async isConnected() {
        try {
            const results = await this._driver
            return results ? true : null
        } catch (error) {
            console.error('fail', error)
        }
    }

    async defineModel() {
        this._herois = this._driver.define('TB_HEROIS', {
            id: {
                type: Sequelize.INTEGER,
                requered: true,
                primaryKey: true,
                autoIncrement: true
            },
            nome: {
                type: Sequelize.STRING,
                requered: true
            },
            poder: {
                type: Sequelize.STRING,
                requered: true
            }
        }, {
            tableName: 'TB_HEROIS',
            freezeTableName: false,
            timestamps: false
        })
    
        await this._herois.sync()
    }

    async connect() {
        this._driver =  new Sequelize('DB_HEROS', 'postgres', 1234, {
            host: 'localhost',
            dialect: 'postgres'
        });
        await this.defineModel()
    }

    async create(item) {
        const { dataValues } = await this._herois.create(item)
        return dataValues
    }

    async read(item) {
        return this._herois.findAll({ where: item, raw: true})
    }

    async update(id, item) {
        console.log('item e id',item, id)
        return await this._herois.update(item, {
            where: { id: id }
        })
    }

    async delete(id) {
        return await this._herois.destroy({ where: { id: id }})
    }
}

class ContextStrategy extends ICrud {
    constructor(strategy) {
        super();
        this._database = strategy;
    }

    create(item) {
        return this._database.create(item)
    }

    read(item) {
        return this._database.read(item)
    }

    update(id, item) {
        return this._database.update(id, item)
    }

    delete(id) {
        return this._database.delete(id)
    }

    isConnected() {
        return this._database.isConnected()
    }

    connect() {
        return this._database.connect()
    }
}

exports.Postgres = Postgres
exports.ContextStrategy = ContextStrategy