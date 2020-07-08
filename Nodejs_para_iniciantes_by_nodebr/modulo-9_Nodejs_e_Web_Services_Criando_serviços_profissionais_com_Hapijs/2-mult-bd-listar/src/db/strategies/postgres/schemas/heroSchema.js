const Sequelize = require('sequelize');

const heroiSchema = {
    name: 'TB_HEROIS',
    schema: {
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
    },
    options: {
        tableName: 'TB_HEROIS',
        freezeTableName: false,
        timestamps: false
    }
}

module.exports = heroiSchema