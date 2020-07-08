const hapi = require('hapi')
const Context = require('./db/strategies/base/contextStrategy')
const Mongodb = require('./db/strategies/mongodb/mongodb')
const heroiSchema = require('./db/strategies/mongodb/schemas/herosSchema')

const app = new hapi.Server({
    port: 3000
})

async function main() {
    const connection = Mongodb.connect()
    const context = new Context(new Mongodb(connection, heroiSchema))
    app.route(([
        {
            path: '/herois',
            method: 'GET',
            handler: (requrest, head) => {
                return context.read()
            }
        }
    ]))

    await app.start()
    console.log('Servidor rondando na porta', app.info.port)


    return app
}

module.exports = main()