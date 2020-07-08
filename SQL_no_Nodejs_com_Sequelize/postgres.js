const Sequelize = require('sequelize')
const dbConfig = require('./database')


const User = require('./models/User')
const Addresses = require('./models/Adresses')
const Tech = require('./models/Techs')

const connection = new Sequelize(dbConfig)

User.init(connection)
Addresses.init(connection)
Tech.init(connection)

User.associate(connection.models)
Addresses.associate(connection.models)

async function main() {
    const user = await User.create({ 
        nome: 'welligton',
        email: 'weltossousa@gmail.com'
    })
   
    const addresses = await Addresses.create({
        zipcode: 'dfs0sdfsf',
        user_id: 5,
        street: 'Rua Guilherme Gemala',
        number: 200
    })

    const userPk = await User.findByPk(5, {
        include: { association: 'addresses' }
    })

    const userFind = await User.findByPk(5)


    console.log(`
        User primary Key: ${userPk.dataValues}
        User data: ${user.dataValues}
        User Adresses: ${addresses.dataValues}
    `)
}   

main()
