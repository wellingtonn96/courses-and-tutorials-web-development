const Sequelize = require('sequelize')

class Tech extends Sequelize.Model {
    static init(sequelize) {
        super.init({
            name: Sequelize.DataTypes.STRING,
        }, {
            sequelize
        })
    }

    static associate(models) {
        this.belongsToMany(models.User, { foreignKey: 'tech_id', through: 'user_techs', as: 'users' })
    }
}

module.exports = Tech