const { obterPessoas } = require('./service')

async function main() {
    try {
        const {
            results
        } = await obterPessoas('a')

        const pesos = results.map(item => parseInt(item.height))
        console.log(pesos)
        
        const somaPesos = pesos.reduce((previos, next) => {
            return previos + next
        })

        console.log(somaPesos)

    } catch (error) {
        console.error('DEU RUIM', error)
    }
}

main()