const Hapi = require('hapi')
const Context = require('./src/db/strategies/base/contextStrategy')
const MongoDB = require('./src/db/strategies/mongodb/mongoDbStrategy')
const HeroSchema = require('./src/db/strategies/mongodb/schemas/heroSchema')
const HeroRoutes = require('./src/routes/heroRoutes')
const AuthRoutes = require('./src/routes/authRoutes')

const Postgres = require('./src/db/strategies/postgres/postgresSQLStrategy')
const UsuarioSchema = require('./src/db/strategies/postgres/schemas/userSchema')

const HapiSwagger = require('hapi-swagger')
const Inert = require('inert')
const Vision = require('vision')

const HapiJwt = require('hapi-auth-jwt2')
const JWT_SECRET = 'MEU_SEGREDAO_123'

const swaggerConfig = {
    info: {
        title: '#CursoNodeBR - API Herois',
        version: 'v1.0'
    },
    lang: 'pt'

}

const app = new Hapi.Server({
    port: 4000
})

function mapRoutes(instance, methods) {
    return methods.map(method => instance[method]())
}

async function main() {
    const connection = MongoDB.connect()
    const mongoDb = new Context(new MongoDB(connection, HeroSchema))

    const connectionPostgres = await Postgres.connect()
    const model = await Postgres.defineModel(connectionPostgres, UsuarioSchema)
    const contextPostgres = new Context(new Postgres(connectionPostgres, model))

    await app.register([
        HapiJwt,
        Inert,
        Vision,
        {
            plugin: HapiSwagger,
            options: swaggerConfig
        }
    ])

    app.auth.strategy('jwt', 'jwt', {
        key: JWT_SECRET,
        validate: async (dado, request) => {
            const [result] = await contextPostgres.read({
                username: dado.username.toLowerCase()
            })
            console.log('result', result)
            if(!result) {
                return {
                    isValid: false
                } 
            }

            return {
                isValid: true // caso nõa seja valido é false
            }
        }
    }) 

    app.auth.default('jwt')
    app.route([
        ...mapRoutes(new HeroRoutes(mongoDb), HeroRoutes.methods()),
        ...mapRoutes(new AuthRoutes(JWT_SECRET, contextPostgres), AuthRoutes.methods())
    ])

    await app.start()
    console.log('server running at', app.info.port)

    return app;
}
module.exports = main()