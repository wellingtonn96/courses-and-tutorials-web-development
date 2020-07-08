/*const obterEndereco = (idUsuario, callback) => {
    setTimeout(() => {
        return callback(null, {
            rua: 'Dos bobos',
            numero: 0
        })
    },2000);
}

const obterUsuario = (callback) => {
    setTimeout(() => {
        return callback(null, {
            id: 1,
            nome: 'Aladin',
            dataNascimento: new Date()
        })
    }, 1000)
}

const obeterTelefone = (idUsuario, callback) => {
    setTimeout(() => {
        return callback(null, {
            telefone: '11 0000-0000',
            ddd: 11
        })
    }, 2000);
}

obterUsuario(function resolverUsuario(error, usuario) {
    if(error) {
        console.error('DEU RUM em USUARIO', error);
        return;
    }
    obeterTelefone(function resolverTelefone(error1, telefone) {
        if(error1){
            console.error('DEU RUM em TELEFONE', error);
            return;
        }
        obterEndereco(usuario.id, function resolverEndereco(erro2, obterEndereco) {
            if(error2) {
                console.error('DEU RUM em TELEFONE', error)
                return;
            }

            console.log(`
                Nome: ${usuario.nome}
                Endereço: ${endereco.rua}, ${endereco.numero}
                Telefone: (${telefone.ddd}) ${telefone.numero}
            `)
        })
    }) 
});

*/

/*
    0 Obter um úsuario
    2 Obter um numero de telefone de um usuario a partir de seu id
    2 Obter um endereco do usuario pelo id
*/

const obterUsuario = (callback) => {
    setTimeout(() => {
        return callback(null, {
                id: 1,
            nome: 'Wellington',
            dataNascimento: new Date()
        })
    }, 1000)
}

const obterTelefone = (idUsuario, callback) => {
    setTimeout(() => {
        return callback(null, {
            telefone: '56465-3223',
            ddd: 11
        })
    }, 1000)
}

const obterEndereco = (idUsuario, callback) => {
    setTimeout(() => {
        return callback(null, {
            rua: 'Dos Bobos',
            numero: 0
        })
    },1000)
}


obterUsuario(function resolveUsuario(error, usuario) {
    if(error) {
        console.error("DEU RUIM em USUARIO", error)
        return;
    }
    obterTelefone(usuario.id, function resolveTelefone(error1, telefone) {
        if(error1){
            console.error('DEU RUIM em TELEFONE', error1)
            return;
        }
        obterEndereco(usuario.id, function resolverEndereco(erro2, endereco) {
            if(erro2) {
                console.error('DEU RUIM em ENDEREÇO', erro2)
            }

            console.log(`
                Usuario: ${usuario.nome}
                Telefone: ${telefone.ddd} ${telefone.telefone}
                Endereço: ${endereco.rua} ${endereco.numero}
            `)
        })
    })
})



