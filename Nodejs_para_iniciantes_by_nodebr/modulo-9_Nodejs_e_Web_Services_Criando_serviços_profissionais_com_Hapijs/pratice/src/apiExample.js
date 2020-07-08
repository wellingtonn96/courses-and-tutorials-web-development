const Mongodb = require('./db/strategies/mongodb/mongodb')
const heroiSchema = require('./db/strategies/mongodb/schemas/herosSchema')
const Context = require('./db/strategies/base/contextStrategy')
const Hapi = require('hapi')

const app = new Hapi.Server({
    port: 3000
})

async function main() {
    const connection = Mongodb.connect()
    const context = new Context(new Mongodb(connection, heroiSchema))
    app.route([
        {
            path: '/herois',
            method: 'GET',
            handler: (res, headers) => {
                return context.read()
            }
        }
    ])

    await app.start()
    console.log('Server runing on port', app.info.port)

    return app
}

module.exports = main()