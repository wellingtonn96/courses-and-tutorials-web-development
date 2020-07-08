const assert = require('assert')
const api = require('../api')
let app = {}


describe('Swite de test da api herois', () => {
    before(async () => {
        app = await api
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
        const errorResult = {
            "satusCode": 400,
            "error": "Bad Request",
            "message": "child \"limit\ fails Because[\"limit\" must be a number]",
            "validation": {
                "source": "query",
                "keys": ["limit"]
            }
        }
        assert.deepEqual(result.statusCode, 400)
        assert.deepEqual(result.payload, JSON.stringify(errorResult))
    })

    it('listar /herois - deve filtrar um item', async () => {
        const TAMANHO_LIMIT = 0
        const NAME = 'Homem Haranha 1580563060913'
        const result = await app.inject({
            method: 'GET',
            url: `/herois?nome=${NAME}&skip=${0}&limit=${TAMANHO_LIMIT}`,
        })
        const dados = JSON.parse(result.payload)
        const statusCode = result.statusCode
        assert.deepEqual(statusCode, 200)
        assert.deepEqual(dados[0].nome == NAME)
    })

})