const assert = require('assert')
const Database = require('./database')

const HEROIS_DEFAULT = {
    name: 'Homem Haranha',
    power: 'Super Teia'
}

const HEROIS_ATUALIZAR_DEFAULT = {
    name: 'Batman',
    power: 'Dinheiro'
}

describe('swite de test class database', () => {
    before(async () => {
        const database = new Database(null, HEROIS_DEFAULT.name, HEROIS_DEFAULT.power)
        await database.upSave()
    }) 
    
    it('deve cadastrar um heroi', async () => {
        const expected = true
        const database = new Database(null, HEROIS_DEFAULT.name, HEROIS_DEFAULT.power)
        const results = await database.upSave()
        assert.deepEqual(results, expected)
    })

    it('deve listar herois', async () => {
        const results = await Database.listar();
        assert.ok(Array.isArray(results))
        assert.ok(results.length > 1)
    })
    
    it('deve atualizar um heroi', async () => {
        const expected = HEROIS_ATUALIZAR_DEFAULT
        const [results] = await Database.listar()
        const database = new Database(results.id, expected.name, expected.power)
        await database.upSave()
        const [result] = await(Database.listar(results.id)) 
        delete result.id
        assert.deepEqual(result, expected)
    })
    it('deve deletar um heroi', async () => {
        const results = await Database.remove(HEROIS_DEFAULT.name)
        assert.deepEqual(results, true)
    })
})