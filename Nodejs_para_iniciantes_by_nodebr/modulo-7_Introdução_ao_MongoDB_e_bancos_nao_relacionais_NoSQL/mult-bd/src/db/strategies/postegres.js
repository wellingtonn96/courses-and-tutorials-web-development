const ICrud = require('./interfaces/interfaceCrud')
const Sequelize = require('sequelize')

class Postegres extends ICrud {
    constructor() {
        super()
        this._driver = null,
        this._herois = null 
    }

    async isConnected() {
        try{
            await this._driver
            return true
        }
        catch(error)     {
            console.log('Fail', error)
        }
    }

    async defineModel() {
        this._herois =this._driver.define('TB_HEROIS', {
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

    async create(item) {
        const { dataValues } = await this._herois.create(item)
        return dataValues
    }

    async read(item = {}) {
        return this._herois.findAll({ where: item, raw: true })
    }

    async update(id, item) {
        console.log('item e id',item, id)
        return await this._herois.update(item, {
            where: { id: id }
        })
    }
    async delete(id) {
        const query = id ? {id} : {}
        return this._herois.destroy({ where: query })    
    }
    
    async connect() {
        this._driver = new Sequelize('DB_HEROS', 'postgres', 1234, {
            host: 'localhost',
            dialect: 'postgres'
        });
        await this.defineModel()
    }
}

module.exports = Postegres;