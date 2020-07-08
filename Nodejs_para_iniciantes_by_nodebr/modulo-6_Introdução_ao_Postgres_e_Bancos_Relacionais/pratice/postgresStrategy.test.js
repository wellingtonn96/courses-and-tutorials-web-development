const assert = require('assert')
const { Postgres, ContextStrategy } = require('./strategyExample')


const context = new ContextStrategy(new Postgres())
const MOCK_HEROI_CADASTRAR = {
    nome: 'Super Man',
    poder: 'Força'
}
const MOCK_HEROI_ATULIZAR = {
    nome: 'Man Verde',
    poder: 'cu grande'
}

describe('Postgres Strategy', () => {
    before(async () => {
        await context.connect()
    })
    it('test conection', async () => {
        const result  = await context.isConnected()
        assert.deepEqual(result, true)
    })

    it('cadastrar', async () => {
        const results = await context.create(MOCK_HEROI_CADASTRAR)
        delete results.id
        assert.deepEqual(results, MOCK_HEROI_CADASTRAR)
    })

    it('listar', async() => {
        const [results] = await context.read(MOCK_HEROI_CADASTRAR)
        delete results.id
        assert.deepEqual(results, MOCK_HEROI_CADASTRAR)
    })

    it('atulizar', async () => {
        const [results] = await context.read(MOCK_HEROI_CADASTRAR)
        await context.update(results.id, MOCK_HEROI_ATULIZAR)
        const [item] = await context.read(results.id)
        delete item.id
        assert.deepEqual(item, MOCK_HEROI_ATULIZAR)
    })

    it('excluir', async () => {
        const [results] = await context.read(MOCK_HEROI_ATULIZAR)
        const result = await context.delete(results.id)
        assert.deepEqual(result, 1)
    })
})