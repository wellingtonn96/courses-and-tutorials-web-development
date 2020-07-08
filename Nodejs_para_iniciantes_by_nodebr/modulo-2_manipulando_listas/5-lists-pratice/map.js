const { obterPessoas } = require('./services')

//implemente seu proprio map

async function main() {
    try {
        const {
            results
        } = await obterPessoas('a')

        const names = results.map(item => item.name)

        console.log('names', names)

    } catch (error) {
        console.error('DEU RUIN', error)
    }
}

main()