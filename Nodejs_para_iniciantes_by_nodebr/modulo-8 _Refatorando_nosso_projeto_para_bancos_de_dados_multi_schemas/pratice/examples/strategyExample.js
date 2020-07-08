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

class Postgres extends ICrud{
    constructor() {
        super()
    }

    create() {
        console.log('Item cadastrado no Postgres!')
    }
}

class ContextStrategy extends ICrud {
    constructor(strategy) {
        super()
        this._database = strategy
    }

    create(item) {
        return this._database.create(item)
    }

    read(query) {
        return this._database.read(query)
    }

    update(id, item) {
        return this._database.update(id,item)
    }

    delete(id) {
        return this._database.delete(id)
    }
}

const contextMongodb = new ContextStrategy(new Mongodb())
contextMongodb.create()

const contextPostgres = new ContextStrategy(new Postgres())
contextPostgres.create()