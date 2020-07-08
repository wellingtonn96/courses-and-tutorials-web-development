const Sequelize = require('sequelize')
const connection = new Sequelize('DB_HEROS', 'postgres', 1234, {
    host: 'localhost',
    dialect: 'postgres'
})



console.log(connection)
async function main() {
    const herois = connection.define('TB_HEROIS', {
        id: {
            type: Sequelize.INTEGER,
            required: true,
            primaryKey: true,
            autoIncrement: true
        },
        nome: {
            type: Sequelize.STRING,
            required: true
        },
        poder:{
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
     const create = await herois.create({
         nome: 'Super choque',
         poder: 'choque'
     })
    //read

    const update = await herois.update({ poder: 'Tecnologia' }, {where: { id: 147 }})

    const exclude = await herois.destroy({ where: { id: 147}})

    const read = await herois.findAll({ raw: true })
    console.log(create, update, exclude, read)
}

main()