const Sequelize = require('sequelize')
const driver = new Sequelize('DB_HEROS', 'postgres', 1234, {
    host: 'localhost',
    dialect: 'postgres'
});

async function main() {
    const herois = driver.define('TB_HEROIS', {
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

    await herois.sync()
    await herois.create({
        nome: 'Lanterna Verde',
        poder: 'Anel'
    })
    
    const results = await herois.findAll({ raw: true, atributes: ['nome'] })
    console.log('results', results)
}

main()