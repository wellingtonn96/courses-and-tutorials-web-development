const assert = require('assert')
const api = require('../api')
const Context = require('../src/db/strategies/base/contextStrategy')
const Postgres = require('../src/db/strategies/postgres/postgresSQLStrategy')
const UsuarioSchema = require('../src/db/strategies/postgres/schemas/userSchema')

let app = {}
const USER = {
    username: 'xuxadasilva',
    password: '123'
}

const USER_DB = {
    username: USER.username.toLowerCase(),
    password: '$2b$04$/.0bVHZo0rbwEfOtGtIIMeA9OEYFhNmFb6ugaCE4ft3ouwfStmaSK'
}

describe('Auth test swith', () => {
    before(async () => {
        app = await api

        const conectionPostgres = await Postgres.connect()
        const model = await Postgres.defineModel(conectionPostgres, UsuarioSchema)
        const postgres = new Context(new Postgres(conectionPostgres, model))
        await postgres.update(null, USER_DB, true)

    })
    it('deve obter um token', async () => {
        const result  = await app.inject({
            method: 'POST',
            url: '/login',
            payload: USER
        })

        const statusCode  = result.statusCode
        const dados = JSON.parse(result.payload)
        console.log('dados', dados)
        assert.deepEqual(statusCode, 200)
        assert.ok(dados.token.length > 10)
    })

    it('deve retornar não autorizado ao obter um login errado', async () => {
        const result = await app.inject({
            method: 'POST',
            url: '/login',
            payload: {
                username: 'wellingotn',
                password: '123'
            }
        })
        const statusCode = result.statusCode
        const dados = JSON.parse(result.payload)

        assert.deepEqual(statusCode, 401)
        assert.deepEqual(dados.error, 'Não atorizado!')
    })

})