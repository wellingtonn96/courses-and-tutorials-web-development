const { obterPessoas } = require('./service')

async function main() {
    try {
        const {
            results
        } = await obterPessoas('a')

        const names = results.map(item => item.name)

        console.log(names)
    } catch (error) {
        console.error('DEU RUIM', error)
    }
}

main()