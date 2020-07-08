const BaseRoute = require('./base/baseRoute')
const joi = require('joi')

class HeroisRoutes extends BaseRoute {
    constructor(db) {
        super()
        this.db = db
    }

    list() {
        return {
            path: '/herois',
            method: 'GET',
            // failAction: (request, headers, erro) => {
            //     throw erro
            // },
            // config: {
            //     validate: {
            //         query: {
            //             skip: joi.number().integer().default(10),
            //             limit: joi.number().integer().default(10),
            //             nome: joi.string().min(3).max(300)
            //         }
            //     }
            // },
            handler: (request, headers) => {
                try {
                    // console.log(request.query)

                    const { skip, limit, nome } = request.query
                    
                    let query = {
                        nome: {$regex: `.*${nome}*.`}
                    }

                    return this.db.read(query ? nome : {}, parseInt(skip), parseInt(limit))
                } catch (error) {
                    console.error('Deu Ruim', error)
                    return 'Erro interno no servidor'
                }
            }
        }
    }
}

module.exports = HeroisRoutes