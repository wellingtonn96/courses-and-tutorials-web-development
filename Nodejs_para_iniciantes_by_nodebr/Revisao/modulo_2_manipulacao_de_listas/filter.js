const { obterPessoas } = require('./service')

async function main() {
    try {
        const {
            results
        } = await obterPessoas('a')

        const result = results.filter(item => {
            return item.name.toLowerCase().indexOf('lars') !== -1
        })


        const name = result.map(item => item.name)

        console.log(name)

    } catch (error) {
        console.error('DEU RUIM', error)
    }
}

main()