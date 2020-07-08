const Sequelize = require('sequelize');

// Option 1: Passing parameters separately
const sequelize = new Sequelize('nodeComplete', 'root', '1234', {
  host: 'localhost',
  dialect: 'mysql'
});


module.exports = sequelize;
