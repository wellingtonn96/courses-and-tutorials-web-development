const { obterPessoas } = require('./service')

async function main() {
    try {
        const { results } = await obterPessoas('a')
        
        const namesFor = []
        const namesForIn = []
        const namesForOf = []

        for(let i = 0; i < results.length; i++) {
            namesFor.push(results[i].name)
        }
        console.log('for results', namesFor)

        for(let i in results) {
            namesForIn.push(results[i].name)
        }
        console.log('for in results', namesForIn)

        for(pessoa of results) {
            namesForOf.push(pessoa.name)
        }
        console.log('for of results', namesForOf)
    
    } catch (error) {
        console.error('DEU RUIM', error)
    }
}

main()