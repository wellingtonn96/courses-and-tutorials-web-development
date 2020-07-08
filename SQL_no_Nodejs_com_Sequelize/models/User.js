const Sequelize = require('sequelize')

class User extends Sequelize.Model {
    static init(sequelize) {
        super.init({
            nome: Sequelize.DataTypes.STRING,
            email: Sequelize.DataTypes.STRING,
        }, {
            sequelize,
        })
    }
    static associate(models) {
        this.hasMany(models.Addresses, { foreignKey: 'user_id', as: 'addresses' });
        this.belongsToMany(models.User, { foreignKey: 'user_id', through: 'user_techs', as: 'techs' })
    }
}

module.exports = User