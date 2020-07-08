/* trazer dados de um arquivo pela id e testar para ver se os dados batem com o esperado */

const database = require('./database')

const { ok, deepEqual } = require('assert')

const DEFAULT_ITEM = {
    "nome": "Flash",
    "poder": "Speed",
    "id": 1
}

describe('suit de test de manupulação de herois', () => {
    it('deve pesquisar um heroi usando arquivos', async () => {
        const expected = DEFAULT_ITEM
        const [resultado] =  await database.listar(expected.id)
        deepEqual(resultado, expected)
    })
})
