const api = require('../api')
const assert = require('assert')
let app = {}

const DEFAULT_MOCK_HEROI = {
    nome: 'Deadpool',
    poder: 'violência'
}


const DEFAULT_HEROI_ATUALIZAR = {
    nome: 'Iron Man',
    poder: 'armadura'
}

let DEFAULT_ID = ''

describe('switch de tests da api herois', () => {
    before(async () => {
        app = await api
        const { payload } = await app.inject({
            method: 'POST',
            url: '/herois',
            payload: DEFAULT_MOCK_HEROI
        })
        const { _id } = JSON.parse(payload)
        DEFAULT_ID = _id
    })
    it('listar - /herois - dever listar herois', async () => {
        const { statusCode, payload } = await app.inject({
            method: 'GET',
            url: '/herois?skip=2&limit=5',
        })
        const dados = JSON.parse(payload)
        assert.deepEqual(statusCode, 200)
        assert.ok(Array.isArray(dados))
    })

    it('cadastrar /herois - deve cadastar um heroi', async () => {
        const { statusCode, payload } = await app.inject({
            method: 'POST',
            url: `/herois`,
            payload: DEFAULT_MOCK_HEROI
        })
        const { message, _id } = JSON.parse(payload)
        assert.ok(statusCode === 200)
        assert.notStrictEqual(_id, undefined)
        assert.deepEqual(message, 'heroi cadastrado com sucesso!')
    })

    it('atualizar /herois - deve atualizar um heroi', async () => {
        const _id = DEFAULT_ID
      
        const result = await app.inject({
            method: 'PATCH',
            url: `/herois/${_id}`,
            payload: JSON.stringify(DEFAULT_HEROI_ATUALIZAR)
        })
        const statusCode = result.statusCode
        const dados = JSON.parse(result.payload)

        assert.ok(statusCode === 200)
        assert.deepEqual(dados.message, 'heroi atualizado com sucesso!')
    })

    it('deletar /herois - deve deletar um heroi', async () => {
        const _id = DEFAULT_ID
        const { statusCode, payload } = await app.inject({
            method: 'DELETE',
            url: `/herois/${_id}`
        })

        const { message } = JSON.parse(payload)

        assert.ok(statusCode, 200)
        assert.deepEqual(message, 'Heroi deletado com sucesso!')
    })
})