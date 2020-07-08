const Commander = require('commander');
const Heros = require('./Heros')

async function main() {
    Commander
        .version('v1')
        .option('-n, --name [value]', 'Nome do heroi')
        .option('-p, --power [value]', "Poder do heroi")
        .option('-i, --id [value]', "id do heroi")

        .option('-c', '--save', "Cadastrar um heroi")
        .option('-l', '--list', "Listar herois")
        .option('-r', '--remove [value]', 'Remover um heroi pela id')
        .option('-u', '--update [value]', 'Atulazar um heroi')
        .option('-s', '--search [value]', 'Pesquisar um heroi pela id')

        .parse(process.argv)
       

        try{
            if(Commander.C) {
               const hero = new Heros(null, Commander.name, Commander.power)
               const result = await hero.save()
               if(!result) {
                   console.error("Heroi não cadastrado!")
               }
               console.log('Heroi cadastrado com sucesso!')
            }

            if(Commander.L) {
                const results = await Heros.fetchAll()
                console.log(results)
            }

            if(Commander.R) {
                const remove = await Heros.remove(Commander.id)
                const results = await Heros.fetchAll()
                if(!remove) {
                    console.error('Item não removido!')
                }
                console.error('Item removido com sucesso!')
                console.log(results)
            }

            if(Commander.U) {
                const hero = new Heros(Commander.id, Commander.name, Commander.power)
                const result = await hero.save()
                if(!result) {
                    console.error("Heroi não atualizado!")
                }
                console.log('Heroi atualizado com sucesso!')
            }

            if(Commander.S) {
                const result = await Heros.listById(Commander.id)
                if(!result) {
                    console.error('Item não pesquisado!')
                }
                console.error('Item encontrado com sucesso!')
                console.log(result)
            }


        }catch (error) {
            console.error('DEU RUIM', error)
        }
}

main()