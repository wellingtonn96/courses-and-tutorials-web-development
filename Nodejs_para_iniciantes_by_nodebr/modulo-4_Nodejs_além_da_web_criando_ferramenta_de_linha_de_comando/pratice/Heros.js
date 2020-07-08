const { readFileSync, writeFileSync } = require('fs')

const PATH_NAME = 'Heros.json'

const getAchivesFromFile = async () => {
    return await JSON.parse(readFileSync(PATH_NAME, { encoding: 'utf8' }))
}

const writeFile = async (data) => {
    await writeFileSync(PATH_NAME, JSON.stringify(data))
    return true
}

module.exports = class Heros{
    constructor(id, name, power) {
        this.id = id
        this.name = name
        this.power = power
    }

    async save() {
        const heros = await getAchivesFromFile()
        if(this.id) {
            const existingHero = heros.findIndex(
                hero => hero.id === this.id
            )
            const updateHero = [...heros];
            updateHero[existingHero] = this;
            return await writeFile(updateHero)
        }
        this.id = Math.random().toString()
        heros.push(this)
        return await writeFile(heros)
    }

    static async listById(id) {
        const results = await getAchivesFromFile()
        return results.filter(item => item.id === id)
    }

    static async fetchAll() {
        const results = await getAchivesFromFile()
        return results
    }

    static async remove(id) {
        const results = await getAchivesFromFile()
        const heros = results.filter(item => item.id !== id)
        return await writeFile(heros)
    }
}
