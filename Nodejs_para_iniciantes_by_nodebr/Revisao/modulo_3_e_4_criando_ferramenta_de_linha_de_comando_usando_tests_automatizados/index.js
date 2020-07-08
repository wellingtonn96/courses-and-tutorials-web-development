const Commander = require('commander')
const Heroes = require('./database')

async function main() {
    Commander
        .version('v1')
        .option('-n', '--name [value]', 'Nome do heroi')
        .option('-p', '--power [value]', 'Poder do heroi')
        .option('-i', '--id [value', 'id do heroi')
        //save list update remove search
        .option('-s', '--save', 'Savar um heroi')
        .option('-l', '--list', 'listar herois')
        .option('-u', '--update', 'atualizar heroi')
        .option('-r', '--remove', 'remover herois')
        .option('-f', '--find', 'pesquisar um heroi')

        .parse(process.argv)


        try {
        
        } catch(error) {
            console.error('Internal Error', error)
        }
}

main()