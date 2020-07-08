const { obterPessoas } = require('./services')

/*
    const item = {
        nome: 'Erick',
        idade: 22
    }

    const { nome, idade } = item
    console.log( nome, idade )
*/

Array.prototype.meuFilter = function(callback) {
    const lista = []
    for(index in this) {
        const item = this[index]
        const result = callback(item,index, this) 
        // 0, "" null, undefined === false
        if(result) continue;
        lista.push(item)
    }
    return lista;
}

async function main() {
    try {
        const {
            results
        } = await obterPessoas('a');

       // const familiaLars = results.filter(item => {
       //     // por padrão precisa retornar um boleano
       //     // para informar se dever manter na lista
       //     // false > remove da lista 
       //     // true > manten
       //     const result = item.name.toLowerCase().indexOf('lars') != -1
       //     return result;
       // })

       const familiaLars = results.meuFilter((item, index, lista) => {
            console.log(`index: ${index}`, lista.length)
            return item.name.toLowerCase().indexOf('lars') !== -1 
        })
        
        const names = familiaLars.map(pessoa => pessoa.name)

        console.log('names', names)

    } catch (error) {
        console.error('DEU MUITO RUIN', error)
    }
}

main()
