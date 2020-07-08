const assert = require('assert')
const { hashPassword, comparePassword } = require('../src/helpers/passwordHelper')

const SENHA = 'wellington123'
const HASH = '$2b$04$Lp7GMujktUWKVQYreavx.uNyCoMg7rgWl/hjIbZCu6mUX7lS80uNa'

describe('swite de tests hash de senha', () => {
    it('gerar um hash a partir de uma senha', async () => {
        const result = await hashPassword(SENHA)
        assert.ok(result.length > 10)
    })
    it('deve compara um rash com a senha', async () => {
        const result = await comparePassword(SENHA, HASH)
        console.log(result)
        assert.ok(result)
    })
})
