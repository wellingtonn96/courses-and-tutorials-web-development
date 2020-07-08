const assert = require('assert')
const Postgres = require('../db/strategies/postgres/postgres')
const heroiSchema = require('../db/strategies/postgres/schemas/heroiSchema')
const Context = require('../db/strategies/base/contextStrategy')

let context = {}

const MOCK_HEROI_CADASTRAR = {
    nome: 'Super Man',
    poder: 'Força'
}

const MOCK_HEROI_ATUALIZAR = {
    nome: 'Batman',
    poder: 'Dinheiro'
}

describe('suite de tests para o strategy do postgres', () => {
    before(async () => {
        const connection = await Postgres.connect()
        const model = await Postgres.defineModel(connection, heroiSchema)
        context = await new Context(new Postgres(connection, model))
        await context.create(MOCK_HEROI_CADASTRAR)
    })
    it('conexão postgres', async () => {
        const results = await context.isConnect()
        assert.deepEqual(results, true)
    })
    it('cadastrar', async() => {
        const results = await context.create(MOCK_HEROI_CADASTRAR)
        delete results.id
        assert.deepEqual(results, MOCK_HEROI_CADASTRAR)
    })
    it('read', async () => {
        const [results] = await context.read(MOCK_HEROI_CADASTRAR)
        delete results.id
        assert.deepEqual(results, MOCK_HEROI_CADASTRAR)
    })
    it('update', async () => {
        const [results] = await context.read(MOCK_HEROI_CADASTRAR)
        await context.update(results.id, MOCK_HEROI_ATUALIZAR)
        const [result] = await context.read(MOCK_HEROI_ATUALIZAR)
        delete result.id
        assert.deepEqual(result, MOCK_HEROI_ATUALIZAR)
    })
    it('delete', async () => {
        const [results] = await context.read(MOCK_HEROI_CADASTRAR)
        const result = await context.delete(results.id)
        assert.deepEqual(result, 1)
    })
}) 