const { readFileSync, writeFileSync } = require('fs')

const PATH_NAME = 'heroes.json'

const getArchivesFromFile = async () => {
    return JSON.parse(readFileSync(PATH_NAME, { encoding: 'utf8'}))
}

const writeArcheve = async data => {
    await writeFileSync(PATH_NAME, JSON.stringify(data))
    return true
}   

class Database {
    constructor(id, name, power) {
        this.id = id
        this.name = name
        this.power = power
    }

    async upSave() {
        const heroes = await getArchivesFromFile()
        if(this.id) {
            const hexistingHeroe = heroes.findIndex(
                heroes => heroes.id  === this.id
            )
            const updateHeroe = [...heroes]
            updateHeroe[hexistingHeroe] = this
            return writeArcheve(updateHeroe)
        }
        this.id = Math.random().toString()
        heroes.push(this)
        return writeArcheve(heroes)
    }

    static async listar(id) {
        const heroes = await getArchivesFromFile()
        if(id) return heroes.filter(item => item.id === id)
        return heroes
    }

    static async remove(name) {
        const heroes = await getArchivesFromFile()
        const removed = heroes.filter(item => item.name !== name)
        await writeArcheve(removed)
        return true
    }
}

module.exports = Database