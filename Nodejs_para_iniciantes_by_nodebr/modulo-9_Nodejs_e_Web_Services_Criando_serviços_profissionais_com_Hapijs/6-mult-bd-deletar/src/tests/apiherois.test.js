const assert = require('assert')
const api = require('../api')
let app = {}
const DEFAULT_MOCK_HEROI = {
    nome: 'Chapolin Colorado',
    poder: 'Marreta bionica'
}

const MOCH_INICIAL = {
    nome: 'Gavião negro',
    poder: 'A mira'
}

let MOCK_ID = ''
describe('Swite de test da api herois', () => {
    before(async () => {
        app = await api
        const result = await app.inject({
            method: 'POST',
            url: '/herois',
            payload: JSON.stringify(MOCH_INICIAL)
        })
        const dados = JSON.parse(result.payload)
        MOCK_ID = dados._id
    })

    it('listar /herois', async () => {
        const result = await app.inject({
            method: 'GET',
            url: '/herois?skip=2&limit=5',
        })
        const dados = JSON.parse(result.payload)
        const statusCode = result.statusCode
       
        assert.deepEqual(statusCode, 200)
        assert.ok(Array.isArray(dados))
    })

    it('listar /herois - deve retornar somente 10 registros', async () => {
        const TAMANHO_LIMIT = 'AEEE'
        const result = await app.inject({
            method: 'GET',
            url: `/herois?skip=0&limit=${TAMANHO_LIMIT}`,
        })
        const errorResult = {"statusCode":400,"error":"Bad Request","message":"Invalid request query input"}
        assert.deepEqual(result.statusCode, 400)
        assert.deepEqual(result.payload, JSON.stringify(errorResult))
    })

    it('listar GET /herois - deve filtrar um item', async () => {
        const TAMANHO_LIMIT = 0
        const NAME = 'Homem Haranha 1581045533587'
        const result = await app.inject({
            method: 'GET',
            url: `/herois?nome=${NAME}&skip=${0}&limit=${TAMANHO_LIMIT}`,
        })
        const dados = JSON.parse(result.payload)
        const statusCode = result.statusCode
        assert.deepEqual(statusCode, 200)
        assert.deepEqual(dados[0].nome == NAME)
    })


    it('cadastrar POST - /herois', async() => {

        const result = await app.inject({
            method: 'POST',
            url: `/herois`,
            payload: DEFAULT_MOCK_HEROI
        })

        const statusCode = result.statusCode
        const { message, _id } = JSON.parse(result.payload)
        assert.ok(statusCode === 200)
        assert.notStrictEqual(_id, undefined)
        assert.deepEqual(message, 'Heroi cadastrado com sucesso!')

    })


    it('atualizar PATCH - /herois/:id', async () => {
        const _id = MOCK_ID
        const expected = {
            poder: 'SUPER MIRA'
        }
  
        const result = await app.inject({
            method: 'PATCH',
            url: `/herois/${_id}`,
            payload: JSON.stringify(expected)
        })

        const statusCode = result.statusCode
        const dados = JSON.parse(result.payload)

        assert.ok(statusCode === 200)
        assert.deepEqual(dados.message, 'herois atualizado com sucesso!')
    })

    it('atualizar PATCH - /herois/:id não deve atualizar com id incorreto!', async () => {
        const _id = '507f191e810c19729de860ea'

        const result = await app.inject({
            method: 'PATCH',
            url: `/herois/${_id}`,
            payload: JSON.stringify({
                poder: 'Super Mira'
            })
        })

        const statusCode = result.statusCode
        const dados = JSON.parse(result.payload)
        const expected = {
            statusCode: 412,
            error: 'Precondition Failed',
            message: 'Id não encontrado no banco!'
        }
        assert.ok(statusCode === 412)
        assert.deepEqual(dados, expected)
    })
    
    it('remover DELETE - /herois/:id', async () => {
        const _id = MOCK_ID
        const result = await app.inject({
            method: 'DELETE',
            url: `/herois/${_id}`
        })
        const statusCode = result.statusCode
        const dados = JSON.parse(result.payload)

        assert.ok(statusCode, 200)
        assert.deepEqual(dados.message, 'Heroi removido com sucesso!')
    })


    it('remover DELETE - /herois/:id - não deve remover heroi', async () => {
        const _id = '507f191e810c19729de860ea'
        const result = await app.inject({
            method: 'DELETE',
            url: `/herois/${_id}`
        })
        const statusCode = result.statusCode
        const dados = JSON.parse(result.payload)
        const expected = {
            statusCode: 412,
            error: 'Precondition Failed',
            message: 'Id não encontrado no banco!'
        }
        assert.ok(statusCode, 412)
        assert.deepEqual(dados, expected)
    })

    it('remover DELETE - /herois/:id - não deve remover com id invalido', async () => {
        const _id = 'ID_INVALIDO'
        const result = await app.inject({
            method: 'DELETE',
            url: `/herois/${_id}`
        })
        const statusCode = result.statusCode
        const dados = JSON.parse(result.payload)
        const expected = {
            statusCode: 500,
            error: 'Internal Server Error',
            message: 'An internal server error occurred'
        }
        assert.ok(statusCode, 500)
        assert.deepEqual(dados, expected)
    })
})