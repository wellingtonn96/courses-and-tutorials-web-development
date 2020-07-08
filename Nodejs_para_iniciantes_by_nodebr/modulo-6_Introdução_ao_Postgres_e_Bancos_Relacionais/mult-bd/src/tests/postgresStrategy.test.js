const assert = require('assert')
const Postgres = require('../db/strategies/postegres')
const Context = require('../db/strategies/base/contextStrategy')

const context = new Context(new Postgres())
const MOCH_HEROI_CADASTRAR = {
    nome: 'Gaviao Negro',
    poder: 'flexas'
}

const MOCH_HEROI_ATUALIZAR = {
    nome: 'Batman',
    poder: 'Dinheiro'
}


describe('Postgres Strategy', function () {
    this.timeout(Infinity)
    this.beforeAll(async () => {
        await context.connect()
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

    it('atualizar', async function() {
        const [itemAtualizar] = await context.read({ nome: MOCH_HEROI_ATUALIZAR.nome})
        const novoItem = {
            ...MOCH_HEROI_ATUALIZAR,
            nome: 'Mulher maravilha'
        }
        const result = await context.update(itemAtualizar.id, novoItem)
        const [itemAtualizado] = await context.read({ nome: itemAtualizar.nome })
        assert.deepEqual(result, 1)
        assert.deepEqual(itemAtualizado.nome, novoItem.nome)        
    })

    it('remover por id', async function() {
        const [item] = await context.read({})
        const result = await context.delete(item.id)
        assert.deepEqual(result, 1)
    })
})