/* somar todos os pesos com o methodo reduce */

const { obterPessoas } = require('./services')

async function main() {
    try {
        const {
            results
        } = await obterPessoas('a')

        const pesos = results.map(item => parseInt(item.height))
        console.log('Pesos', pesos)

        const somaPesos = pesos.reduce((previus, next) => {
            return previus + next
        })

        console.log('Soma pesos', somaPesos)
    } catch (error) {
        console.error('DEU RUIM', error)
    }
}

main()