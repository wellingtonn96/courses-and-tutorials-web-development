const { obterPessoas } = require('./services')

async function main() {
    try {
        const {
            results
        } = await obterPessoas('a')

        const names = []

        console.time('for')
        for(let i = 0; i <= results.length - 1; i++) {
            const pessoa = results[i]
            names.push(pessoa.name)
        }
        console.timeEnd('for')
        console.time('forIn')
        for (let i in results) {
            const pessoa = results[i]
            names.push(pessoa.name)
        }
        console.timeEnd('forIn')
        console.time('forOf')
        for (pessoa of results) {
            names.push(pessoa.name)
        }
        console.timeEnd('forOf')
       console.log('error', names)

    } catch (error) {
        console.log(error)
    }
}

main()