const Mongodb = require('./db/strategies/mongodb/mongodb')
const heroiSchema = require('./db/strategies/mongodb/schemas/herosSchema')
const Context = require('./db/strategies/base/contextStrategy')
const heroiRoutes = require('./routes/heroisRoutes')
const Hapi = require('hapi')

const app = new Hapi.Server({
    port: 3000
})


function mapRoutes(instance, methods) {
    return methods.map(method => instance[method]())
}

async function main() {
    const connection = Mongodb.connect()
    const context = new Context(new Mongodb(connection, heroiSchema))
    app.route(
        mapRoutes(new heroiRoutes(context), heroiRoutes.methods())
    )
    await app.start()
    console.log('Server runing on port', app.info.port)
    return app
}

module.exports = main()