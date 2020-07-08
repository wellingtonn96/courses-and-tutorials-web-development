class NoImplementedException extends Error {
    constructor() {
        super("Not Emplemented Exception")
    }
}

class ICrud {
    create(item) {
        throw new NoImplementedException()
    }

    read(query) {
        throw new NoImplementedException()
    }

    update(id, item) {
        throw new NoImplementedException()
    }

    delete(id) {
        throw new NoImplementedException()
    }
}

class MongoDB extends ICrud {
    constructor() {
        super()
    }

    create(item) {
        console.log('O item foi salvo no mongodb')
    }
}

class Postegres extends ICrud {
    constructor() {
        super()
    }

    create(item) {
        console.log('O item foi cadastrado com sucesso no postegress')
    }
}

class ContextStrategy {
    constructor(strategy) {
        this._database = strategy
    }

    create(item) {
        return this._database.create(item)
    }

    read(item) {
        return this._database.read(item)
    }

    update(id, item) {
        return this._database.update(id, item)
    }

    delete(id) {
        return this._database.delete(id)
    }
}

const contextMongo = new ContextStrategy(new MongoDB())
contextMongo.create()

const contextPostegres = new ContextStrategy(new Postegres())
contextPostegres.create()