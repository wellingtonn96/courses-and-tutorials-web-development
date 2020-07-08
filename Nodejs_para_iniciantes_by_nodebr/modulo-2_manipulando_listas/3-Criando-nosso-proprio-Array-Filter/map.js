const service = require('./services');

Array.prototype.meuMap = callback => {
    const novoArrayMapeando = []
    for (let indice = 0; indice <= this.length - 1; indice++) {
        const resultado = callback(this[indice], indice)
        novoArrayMapeando.push(resultado)
    }

    return novoArrayMapeando;
}

async function main() {
    try {
        const results = await service.obterPessoas('a')
        // const names = []

        // results.results.forEach(item => {
        //     names.push(item.name)
        // })

        //const names  = results.results.map(pessoa => pessoa.name)
        const names = results.results.meuMap((pessoa, indice) => pessoa.name)
        console.log('names', names)

    } catch (error) {
        console.error('DEU RUIM', error)
    }
}

main()