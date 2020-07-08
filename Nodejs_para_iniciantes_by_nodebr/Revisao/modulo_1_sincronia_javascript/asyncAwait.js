

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


async function main() {
    try {
        const { id, nome } = await obterUsuario()
        const { telefone, ddd } = await obeterTelefone(id)
        const { rua, num } = await obterEndereco(id)

        console.log(`
            Nome: ${nome}
            Telefone: (${ddd}) ${telefone}
            Endereço: ${rua} ${num}
        `)

    } catch (error) {
        console.error('DEU RUIM', error)
    }
}

main()