const {
    deepEqual,
    ok
} = require('assert')

const database = require('./database')

const DEFAULT_ITEM_CADASTRAR = {
    "nome": "Flash",
    "poder": "Speed",
}

const DEFAULT_ITEM_PESQUISAR = {
    "nome":"Flash","poder":"Speed","id":0.3965550892151142
}

const DEFAUL_ITEM_ATULIZAR = {
    nome: 'lanterna verde',
    poder: 'energia do anel'
}

describe('Suite de manipulação de Herois', () => {
    before(async () => {
        await database.cadastrar(DEFAULT_ITEM_CADASTRAR)
    })
    it('deve pesquisar um heroi usando arquivos', async () => {
        const expected = DEFAULT_ITEM_PESQUISAR
        const [resultado] = await database.listar(expected.id)
        deepEqual(resultado, expected)
    })

    it('deve cadastrar um Heroi, usando arquivos', async () => {
        const expected = DEFAULT_ITEM_CADASTRAR
        const resultado = await database.cadastrar(DEFAULT_ITEM_CADASTRAR)
        const [atual] = await database.listar(DEFAULT_ITEM_CADASTRAR.id)
        deepEqual(atual, expected)
    })
    
    it('deve remover um heroi por id', async () => {
        const expected = true
        const resultado = await database.remover(DEFAULT_ITEM_CADASTRAR.id)
        deepEqual(resultado, expected)
    })

    it('deve atualizar um heroi pelo id', async () => {
        const expected = {
            ...DEFAUL_ITEM_ATULIZAR,
            nome: 'batman',
            poder: 'Dinheiro'
        }
        const novoDado = {
            nome: 'Batman',
            poder: 'Dinheiro'
        }
        await database.atualizar(DEFAULT_ITEM_CADASTRAR.id, novoDado)
        const resultado = await database.atualizar(DEFAUL_ITEM_ATULIZAR, expected)
        

    })
})