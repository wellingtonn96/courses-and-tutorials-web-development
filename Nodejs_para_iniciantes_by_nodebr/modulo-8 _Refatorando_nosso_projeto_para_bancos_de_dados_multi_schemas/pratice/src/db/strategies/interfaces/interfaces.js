class NotImplementedError extends Error {
    constructor() {
        super('Not Implemented Error')
    }
}

class ICrud {
    create(item) {
        throw new NotImplementedError()
    }
    
    read(query) {
        throw new NotImplementedError()
    }

    update(id, item) {
        throw new NotImplementedError()
    }

    delete(id) {
        throw new NotImplementedError()
    }
}

class Mongodb extends ICrud{
    constructor() {
        super()
    }

    create() {
        console.log('Item cadastrado no Mongodb!')
    }
}


module.exports = ICrud