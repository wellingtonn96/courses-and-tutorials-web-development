const assert = require('assert')
const PasswordHelper = require('../src/helpers/passwordHelper')

const SENHA = 'Wellington@1515'
const HASH = '$2b$04$n9AcT6vVB0GfgEY/T5C6QulUXvttJHCem7ATmzfX7EI9rjqqF57fi'

describe('Developer test swite', () => {
    it('deve gerar uma rash apartir de uma senha', async () => {
        const result = await PasswordHelper.hashPassword(SENHA)
        console.log('reslt', result)
        assert.ok(result.length > 10)
    })

    it('Devo comparar uma senha e seu hash', async () => {
        const result =  await PasswordHelper.comparePassword(SENHA, HASH)
        console.log('result', result)
        assert.ok(result)
    })
}) 