const ICrud = require('./interfaces/Interfaces')

class Mongodb extends ICrud {
    constructor() {
        super()
    }
    
    create(item) {
        console.log('item salvo no mongodb!')
    }
}

module.exports = Mongodb