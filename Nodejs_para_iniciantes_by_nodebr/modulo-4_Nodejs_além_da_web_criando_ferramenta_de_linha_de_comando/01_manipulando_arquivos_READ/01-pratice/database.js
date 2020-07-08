const { readFileSync } = require('fs')

class Database {
    constructor () {
        this.NOME_ARQUIVO = 'herois.json'
    }

    async obterDadosArquivo() {
        return await JSON.parse(readFileSync(this.NOME_ARQUIVO, {encoding: 'utf8'}))
    }

    async listar(id) {
        const resultado = await this.obterDadosArquivo()
        return resultado.filter(item => item.id ? (id === item.id) : true)
    }
}

module.exports = new Database()