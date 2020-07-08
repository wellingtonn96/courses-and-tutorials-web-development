const assert = require('assert')
const api = require('../api')
const Context = require('../src/db/strategies/base/contextStrategy')
const PostgresSQL = require('../src/db/strategies/postgres/postgresSQLStrategy')
const UserSchema = require('./../src/db/strategies/postgres/schemas/UserSchema')

let app = {}

const USER = {
    username: 'xuxadasilva',
    password: '123'
}

const USER_DB = {
    username: USER.username.toLowerCase(),
    password: '$2b$04$gHiQrH4L6wVR9KpJwO8qOOhP6kWOBMdInfC.mm6FWkv9VNLMOQn6S'
}

describe('swite de tests de autenticação', () => {
    before(async () => {
        app = await api

        const connectionPostgres = await PostgresSQL.connect()
        const model = await PostgresSQL.defineModel(connectionPostgres, UserSchema)
        const PostgresModel = new Context(new PostgresSQL(connectionPostgres, model))
        await PostgresModel.update(null, USER_DB, true)
    })
    
    it('deve obter um token', async () => {
        const result = await app.inject({
            method: 'POST',
            url: '/login',
            payload: USER
        });
        const statusCode = result.statusCode

        assert.deepEqual(statusCode, 200)
        assert.ok(JSON.parse(result.payload).token.length > 10)
    })
})