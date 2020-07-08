const obterUsuario = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve({
                id: 1,
                nome: 'Wellington',
                data: new Date()
            })
        }, 1000)
    })
}

const obeterTelefone = (idUsuario) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve({
                telefone: '5658-5465',
                ddd: 11
            })
        }, 1000)
    })
}

const obterEndereco = (idUsuario) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve({
                rua: 'Dos bobos',
                num: 0
            })
        }, 1000)
    })
}


const UserPromise = obterUsuario()

UserPromise
    .then(usuario => obeterTelefone(usuario.id)
        .then(telefone => obterEndereco(usuario.id)
            .then(endereco => console.log(`
                Nome: ${usuario.nome} 
                telefone: ${telefone.ddd} ${telefone.telefone}
                Endereço: ${endereco.rua} ${endereco.num}
            `))))
            .catch(error => console.error('error', error))

