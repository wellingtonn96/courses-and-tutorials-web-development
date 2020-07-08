const axios = require('axios');
const URL = ' https://swapi.co/api/people'

const obterPessoas = async nome => {
    const url = `${URL}/?search=${nome}&format=json`
    const response = await axios.get(url)
    return response.data
}

module.exports = {
    obterPessoas,
}
