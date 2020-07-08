const BaseRoute = require('./base/baseRoute')

class HeroisRoutes extends BaseRoute {
    constructor(db) {
        super()
        this.db = db
    }

    list() {
        return {
            path: '/herois',
            method: 'GET',
            handler: (request, headers) => {
                try {
                    // console.log(request.query)

                    const { skip, limit, nome } = request.query
                    let query = {}
                    if(nome) {
                        query.nome = nome
                    }
    
                     if(isNaN(skip))
                         throw Error('O tipo do skip é incorreto')
                     if(isNaN(limit))
                         throw Error('O tipo do limit é incorreto')

                    return this.db.read(query, parseInt(skip), parseInt(limit))
                } catch (error) {
                    console.error('Deu Ruim', error)
                    return 'Erro interno no servidor'
                }
            }
        }
    }
}

module.exports = HeroisRoutes