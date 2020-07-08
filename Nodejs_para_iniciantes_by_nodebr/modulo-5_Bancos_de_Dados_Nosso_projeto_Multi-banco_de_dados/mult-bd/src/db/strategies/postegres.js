const ICrud = require('../strategies/interfaces/interfaceCrud')

class Postegres extends ICrud {
    constructor() {
        super()
    }

    create(item) {
        console.log('O item foi cadastrado com sucesso no postegress')
    }
}

module.exports = Postegres;