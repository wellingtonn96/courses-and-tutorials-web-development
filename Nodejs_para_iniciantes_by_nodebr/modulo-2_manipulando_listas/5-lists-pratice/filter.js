/* Retornar todos os personagens da chamilia lars */

const {
    obterPessoas
} = require('./services')

async function main() {
    try {
        const {
            results
        } = await obterPessoas('a')

        const result = results.filter(item => {
            return item.name.toLowerCase().indexOf('lars') !== -1
        })

        const names = result.map(item => item.name)
        
        console.log('Resultados', names)

    } catch (error) {
        console.error('DEU RUIM', error)
    }
}

main();