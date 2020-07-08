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

const util = require('util');
const obterEnderecoAsync = util.promisify(obterEndereco);

const obterUsuario = () => {
    return new Promise(function resolvePromise(resolve, reject) {
        setTimeout(() => {
            return resolve({
                id: 1,
                nome: 'Wellington',
                dataNascimento: new Date()
            })
        }, 1000)
    })
}

const obterTelefone = (idUsuario) => {
    return new Promise(function resolveTelefone(resolve, reject) {
        setTimeout(() => {
            return resolve({
                telefone: '56465-3223',
                ddd: 11
            })
        }, 1000)
    })
}

function obterEndereco (idUsuario, callback) {
    setTimeout(() => {
        return callback(null, {
            rua: 'Dos Bobos',
            numero: 0
        })
    },1000)
}

main()
    async function main() {
        try {
            console.time('medida_promise')
            const usuario = await obterUsuario();
            //const telefone = await obterTelefone(usuario.id);
            //const endereco = await obterEnderecoAsync(usuario.id);
            
            const resultato = await Promise.all([
                obterTelefone(usuario.id),
                obterEnderecoAsync(usuario.id)
            ])

            const endereco = resultato[1]
            const telefone = resultato[0]

            console.log(`
                Nome: ${usuario.nome}
                Telefone: ${telefone.ddd} ${telefone.telefone}
                Endereco: ${endereco.rua} ${endereco.numero}
            `)
            console.timeEnd('medida-promise')
        } catch (error) {
            console.error("DEU MUITO RUIN", error);
        }
}

/*

const usuarioPromise = obterUsuario()

usuarioPromise
    .then(usuario => obterTelefone(usuario.id)
        .then(result => ({
            usuario: {
                nome: usuario.nome,
                id: usuario.id
            },
            telefone: result
        })).then(resultado => {
            const endereco = obterEnderecoAsync(resultado.usuario.id);
            return endereco.then(function resolverEndereco(result) {
                return {
                    usuario: resultado.usuario,
                    telefone: resultado.telefone,
                    endereco: result
                }
            })
        })
        .then(resultado => {
            console.log(`
                Nome: ${resultado.usuario.nome}
                Endereco: ${resultado.endereco.rua}, ${resultado.endereco.numero}
                Telefone: (${resultado.telefone.ddd}) ${resultado.telefone.telefone}
            `)
        })
    )
    .then(resultado => console.log('resultado', resultado))
    .catch(error => console.log('error', error))
*/

//para manipular o sucesso usamos a função .then
//Para manipular erros usamos a funcção .catch
/*
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
*/

/*
    0 Obter um úsuario
    2 Obter um numero de telefone de um usuario a partir de seu id
    2 Obter um endereco do usuario pelo id
*/

//const util = require('util')
//const obterEnderecoAsync = util.promisify(obterEndereco)
//
//const obterUsuario = () => {
//    return new Promise((resolve, reject) => {
//        setTimeout(() => {
//            return resolve({
//                id: 1,
//                nome: 'Wellington',
//                dataNascimento: new Date()
//            })
//        }, 1000)
//    })
//}
//
//const obterTelefone = (idUsuario) => {
//    return new Promise((resolve, reject) => {
//        setTimeout(() => {
//            return resolve({
//                telefone: '56465-3223',
//                ddd: 11
//            })
//        }, 1000)
//    })
//}
//
//function obterEndereco(idUsuario, callback) {
//    setTimeout(() => {
//        return callback(null, {
//            rua: 'Dos Bobos',
//            numero: 0
//        })
//    },1000)
//}
//
//const usuarioPromise = obterUsuario();
//
//usuarioPromise
//    .then(usuario => obterTelefone(usuario.id)
//        .then(telefone => obterEnderecoAsync(usuario.id)
//            .then(endereco => console.log(`
//                Usuario: ${usuario.nome}
//                Telefone: (${telefone.ddd}) ${telefone.telefone}
//                End: ${endereco.rua} ${endereco.numero}
//            `)))
//    ).catch(error => console.error('DEU RUIM', error))