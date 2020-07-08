const axios = require('axios')
const URL = 'http://swapi.co/api/people'

const obterPessoas =  async nome => {
    const url = `${URL}/?search=${nome}&format=json`
    const response = await axios.get(url)
    return response.data
}

// async function main() {
//     const results = await obterPessoas('a')
//     console.log(results)
// }

// main()

module.exports = {
    obterPessoas,
}