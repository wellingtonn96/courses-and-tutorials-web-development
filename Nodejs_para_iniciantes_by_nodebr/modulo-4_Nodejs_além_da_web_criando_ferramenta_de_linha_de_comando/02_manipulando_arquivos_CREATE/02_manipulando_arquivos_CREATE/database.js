const {
    readFileSync,
    writeFileSync
} = require('fs')

//outra forma de obter dados do json


class Database {
    constructor() {
        this.NOME_ARQUIVO = 'herois.json'
    }

    async obterDadosArquivos() {
        const arquivo = await readFileSync(this.NOME_ARQUIVO, 'utf8')
        console.log(arquivo)
        return JSON.parse(arquivo.toString())
    }

    async escreverArquivo(dados) {
        await writeFileSync(this.NOME_ARQUIVO, JSON.stringify(dados));
        return true
    }

    async cadastrar(heroi) {
        const dados = await this.obterDadosArquivos()
        const id = heroi.id <= 2 ? heroi.id : Math.random()
        const heroisComId = {
            id,
            ...heroi
        }

        const dadosFinal = {
            ...dados,
            heroisComId
        }
        const resultado = await this.escreverArquivo(dadosFinal)
        return resultado;

    }

    async listar(id) {
        const dados = await this.obterDadosArquivos()
        const dadosFiltrados = dados.filter(item => (id ? (item.id === id) : true))
        return dadosFiltrados
    }

    async remover(id) {
        return false
    }
}

module.exports = new Database()