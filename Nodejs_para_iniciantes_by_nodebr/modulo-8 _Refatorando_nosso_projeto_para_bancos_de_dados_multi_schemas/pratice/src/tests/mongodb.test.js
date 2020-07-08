const assert = require('assert');
const Mongodb = require('../db/strategies/mongodb/mongodb')
const heroSchema = require('../db/strategies/mongodb/schemas/heroSchema')
const ContextMongodb = require('../db/strategies/base/contextStrategy')

let context = {}

const MOCK_HEROI_CADASTRAR = {
    nome: 'lanterna verde',
    poder: 'anel'
}

const MOCK_HEROI_ATUALIZAR = {
    nome: 'Homem Aranha',
    poder: 'Super Teia'
}

describe('swith de tests mongodb', () => {
    before(async () => {
        const connection = await Mongodb.connect()
        context = new ContextMongodb(new Mongodb(connection, heroSchema))
        await context.create(MOCK_HEROI_CADASTRAR)
    })

    it('conexão', async () => {
        const results = await context.isConnect()
        assert.deepEqual(results, 'connected')
    })
    it('cadastrar', async () => {
        const [{ nome, poder }] = await context.create(MOCK_HEROI_CADASTRAR)
        const data = {
            nome,
            poder
        }
        assert.deepEqual(data, MOCK_HEROI_CADASTRAR)
    })
    it('listar', async () => {
        const [{ nome, poder }] = await context.read(MOCK_HEROI_CADASTRAR)
        const data = {
            nome,
            poder
        }
        assert.deepEqual(data, MOCK_HEROI_CADASTRAR)
    })
    it('atualizar', async () => {
        const [{ _id }] = await context.read(MOCK_HEROI_CADASTRAR)
        const { ok } = await context.update(_id, MOCK_HEROI_ATUALIZAR)
        assert.deepEqual(ok, 1)
    })
    it('deletar', async () => {
        const [{ _id }] = await context.read(MOCK_HEROI_CADASTRAR)
        const { ok } = await context.delete(_id)
        assert.deepEqual(ok, 1)
    })
})