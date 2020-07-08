const Comander = require('comander')
const Database = require('./database')

async function main() {
    Comander
        .version('v1')
        .parse(process.argv)
        .option('-n, --nome [value]', 'Nome do heroi')
        .option('-p, --poder [value]', 'Poder do heroi')

        .option('-c, --cadastrar', 'Cadastrar um heroi')

        .parse(process.argv)
        
    try {
        if(Comander.cadastrar) {
            console.log()
            const resultado = await Database.cadastrar()
        }
    } catch (error) {
        console.error('DEU RUIM', error)
    }
}

main()