/*desenvolver um crud cadastrando, lendo, deleteando e atualizando herois
 fazendo todos os casos de tests automatizados com o mocha*/

const {
    deepEqual,
    ok
} = require('assert');

const Database = require('./Heros')

const DEFAULT_ITEM_CADASTRAR = {
    "name": 'Super Man',
    "power": 'Força',
};

const DEFAULT_ITEM_ATUALIZAR = {
    "name": 'Lanterna Verde',
    "power": 'Anel do poder',
};

describe('suite de test de manipulação de herois', () => {

    it('deve cadastra um heroi', async () => {
        const expected = DEFAULT_ITEM_CADASTRAR
        const heros = new Database(null, expected.name, expected.power)
        const results = await heros.save()
        deepEqual(results, expected)
    })

    it('deve listar todos os Herois', async () => {
        const expected = DEFAULT_ITEM_CADASTRAR
        const results = await Database.fetchAll()
        deepEqual(results, expected)
    })

    it('deve pesquisar um heroi', async () => {
        const [expected] = await Database.fetchAll()
        console.log(expected.id)
        const [results] = await Database.list(expected.id)
        deepEqual(results, expected)
    })

    it('deve atualizar um usuario', async () => {
        const expected = true
        const [UPDATE_HERO] = await Database.fetchAll()
        console.log(UPDATE_HERO.id)
        const heros = new Database(
            UPDATE_HERO.id,
            DEFAULT_ITEM_ATUALIZAR.name,
            DEFAULT_ITEM_ATUALIZAR.power
        )
        const results = await heros.save()
        deepEqual(results, expected)
    })

    it('deve deletar um heroi', async () => {
        const expected = true
        const [REMOVE_HERO] = Database.fetchAll()
        console.log(REMOVE_HERO.id)
        const heros = await Database.remove(REMOVE_HERO.id)
        deepEqual(heros, expected)
    })
})

