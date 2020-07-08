const assert = require('assert')
const Postgres = require('../db/strategies/postgres/postegres')
const Context = require('../db/strategies/base/contextStrategy')
const HeroiSchema = require('../db/strategies/postgres/schemas/heroSchema')

const MOCH_HEROI_CADASTRAR = {
    nome: 'Gaviao Negro',
    poder: 'flexas'
}

const MOCH_HEROI_ATUALIZAR = {
    nome: 'Batman',
    poder: 'Dinheiro'
}

let context = {}
describe('Postgres Strategy', function () {
    this.timeout(Infinity)
    this.beforeAll(async () => {
        const connection = await Postgres.connect()
        const model = await Postgres.defineModel(connection, HeroiSchema)
        context = new Context(new Postgres(connection, model))
        await context.delete()
        await context.create(MOCH_HEROI_ATUALIZAR)
    })
    it('PostgresSQL Connection ',  async function() {
        const result = await context.isConnected()
        assert.equal(result, true)
    })
    it('cadastrar', async function() {
        const result = await context.create(MOCH_HEROI_CADASTRAR)
        delete result.id
        assert.deepEqual(result, MOCH_HEROI_CADASTRAR)
    })
    it('listar', async function() {
        const [result] = await context.read({ nome: MOCH_HEROI_CADASTRAR.nome })
        delete result.id
        assert.deepEqual(result, MOCH_HEROI_CADASTRAR)
    })

    it('atulizar', async () => {
        const [results] = await context.read(MOCH_HEROI_CADASTRAR)
        await context.update(results.id, MOCH_HEROI_ATUALIZAR)
        const [item] = await context.read(results.id)
        delete item.id
        assert.deepEqual(item, MOCH_HEROI_ATUALIZAR)
    })

    it('remover por id', async function() {
        const [item] = await context.read({})
        const result = await context.delete(item.id)
        assert.deepEqual(result, 1)
    })
})