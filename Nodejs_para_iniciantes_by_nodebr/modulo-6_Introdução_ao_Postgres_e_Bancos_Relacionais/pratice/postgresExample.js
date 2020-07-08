const Sequelize = require('sequelize')
const driver = new Sequelize('DB_HEROS', 'postgres', 1234, {
    host: 'localhost',
    dialect: 'postgres'
})

async function main() {
    const herois = driver.define('TB_HEROIS', {
        id: {
            type: Sequelize.INTEGER,
            required: true,
            primaryKey: true,
            autoIncrement: true,
        },
        nome: {
            type: Sequelize.STRING,
            required: true,
        },
        poder: {
            type: Sequelize.STRING,
            required: true
        }
    }, {
        tableName: 'TB_HEROIS',
        freezeTableName: false,
        timestamps: false
    })

    await herois.sync()
    //create
    await herois.create({
        nome: 'Lanter Verde',
        poder: 'Anel'
    })
    //update 
    await herois.update({
        nome: 'Batman',
        poder: 'Dinheiro'
    }, {
        where: { id: 30 }
    })
    //read by id
    const result = await herois.findAll({raw: true, where: { id: 27}})
    await herois.destroy({ where: { id: 29 }})
    //read all 
    const results = await herois.findAll({ raw: true })
    console.log(results)
    console.log(result)
}

main()


