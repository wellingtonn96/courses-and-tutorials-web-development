module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 1234,
    database: 'DB_SQL_ORM',
    define: {
        timestamps: true,
        underscored: true,
    }
}

//Para criar o banco de dados
//npx sequelize db:create

//Para criar uma migração
//npx sequelize migration:create --name=create-users

//Para migrar a tabela no banco de dados
//npx npx sequelize db:migrate

//Comando para reverter uma migração
//npx sequelize db:migrate:undo

