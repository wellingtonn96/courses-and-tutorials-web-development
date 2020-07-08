const obterUsuario = (callback) => {
    setTimeout(() => {
        return callback(null, {
            id: 1,
            nome: 'wellingotn',
            dataNasci: new Date()
        }, 1000)
    })
}

const obterTelefone = (idUsuario, callback) => {
    setTimeout(() => {
        return callback(null, {
            telefone: '5451-1556',
            ddd: 11
        })
    }, 1000)
}

const obterEndereço = (idUsuario, callback) => {
    setTimeout(() => {
        return callback(null, {
            rua:  'dos bobos',
            numero: 0
        })
    }, 1000)
}

obterUsuario((error, usuario) => {
    if(error) {
        console.error('DEU RUIM em Usuarios!')
        return;
    }
    obterTelefone(usuario.id, (erro1, telefone) => {
        if(erro1) {
            console.error('DEU RUIM em Telefone!')
            return; 
        }
        obterEndereço(usuario.id, (error2, endereco) => {
            if(error2) {
                console.error('DEU RUIM em Endereço!')
                return;
            }
            console.log(`
                Usuario: ${usuario.nome} data Nasc ${usuario.dataNasci}
                Telefone: (${telefone.ddd}) ${telefone.telefone}
                Endereço: ${endereco.rua} ${endereco.numero}
             `)
        })
    })
})


