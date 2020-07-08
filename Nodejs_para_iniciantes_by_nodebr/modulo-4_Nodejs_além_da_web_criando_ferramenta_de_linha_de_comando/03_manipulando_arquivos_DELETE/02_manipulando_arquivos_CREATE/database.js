const {
    readFileSync,
    writeFileSync
} = require('fs')

//outra forma de obter dados do json

class Database {
    constructor() {
        this.NOME_ARQUIVO = 'herois.json'
    }

    async obterDadosArquivo() {
        return await JSON.parse(readFileSync(this.NOME_ARQUIVO, {encoding: 'utf8'}))
    }

    async escreverArquivo(dados) {
        await writeFileSync(this.NOME_ARQUIVO, JSON.stringify(dados));
        return true
    }

    async cadastrar(novosDados) {
        const dados = await this.obterDadosArquivo()
        novosDados.id = parseFloat(Math.random())
        return await this.escreverArquivo([...dados, novosDados])

    }

    async listar(id) {
        const resultado = await this.obterDadosArquivo()
        return resultado.filter(item => item.id ? (id === item.id) : true)
    }

    async remover(id) {
        if (id) {
            return await this.escreverArquivo([]);
        }
        const dados = this.obterDadosArquivos();
        const indice = dados.findIndex(item => item.id === parseInt(id))
        if(!indice !== -1) {
            throw Error('O usuario informado não existe')
        }
        dados.splice(indice, 1)
        return await this.escreverArquivo(dados)
    }
}

module.exports = new Database()