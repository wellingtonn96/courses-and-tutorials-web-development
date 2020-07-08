const hapi = require('hapi')
const Context = require('./db/strategies/base/contextStrategy')
const Mongodb = require('./db/strategies/mongodb/mongodb')
const heroiSchema = require('./db/strategies/mongodb/schemas/herosSchema')
const heroiRoutes = require('./routes/heroRoutes')

const app = new hapi.Server({
    port: 3000
})

function mapRoutes(instance, methods) {
    return methods.map(method => instance[method]())
}   

async function main() {
    const connection = Mongodb.connect()
    const context = new Context(new Mongodb(connection, heroiSchema))
    app.route([
        ...mapRoutes(new heroiRoutes(context), heroiRoutes.methods())
    ])

    await app.start()
    console.log('Servidor rondando na porta', app.info.port)


    return app
}

module.exports = main()