const Sequelize = require('sequelize')

class Addresses extends Sequelize.Model {
    static init(sequelize) {
        super.init({
            zipcode: Sequelize.DataTypes.STRING,
            street: Sequelize.DataTypes.STRING,
            number: Sequelize.DataTypes.INTEGER
        }, {
            sequelize
        })
    }

    static associate(models) {
        this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
    }
}

module.exports = Addresses