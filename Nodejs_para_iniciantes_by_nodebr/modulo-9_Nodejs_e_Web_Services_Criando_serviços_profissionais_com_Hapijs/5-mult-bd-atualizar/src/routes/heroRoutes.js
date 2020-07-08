const BaseRoute = require('./base/baseRoute')
const joi = require('joi')
// const failAction = (request, headers, erro) => {
//     throw erro
// }
class HeroisRoutes extends BaseRoute {
    constructor(db) {
        super()
        this.db = db
    }

    list() {
        return {
            path: '/herois',
            method: 'GET',
            // failAction: failAction,
            config: {
                validate: {
                    query: {
                        skip: joi.number().integer().default(10),
                        limit: joi.number().integer().default(10),
                        nome: joi.string().min(3).max(300)
                    }
                }
            },
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

    create() {
        return {
            path: '/herois',
            method: 'POST',
            config:  {
                validate: {
                    // failAction,
                    payload: {
                        nome: joi.string().required().min(3).max(100),
                        poder: joi.string().required().min(2).max(100)
                    }
                }
            },
            handler: async (request) => {
                try {
                    const { nome, poder } = request.payload
                    const result = await this.db.create({ nome, poder })
                    console.log('results', result)
                    return {
                        message: 'Heroi cadastrado com sucesso!',
                        _id: result._id
                    }
                } catch (error) {
                    console.log('DEU RUIN', error)
                    return 'Internal Error!'
                }
            }
        }
    }
    update() {
        return {
            path: '/herois/{id}',
            method: 'PATCH',
            config: {
                validate: {
                    params: {
                        id: joi.string().required()
                    },
                    payload: {
                        nome: joi.string().min(3).max(100),
                        poder: joi.string().min(2).max(100)
                    }
                }
            },
            handler: async (request) => {
                try {
                    const { id } = request.params;

                    const {
                        payload
                    } = request

                    const dadosString = JSON.stringify(payload)
                    const dados = JSON.parse(dadosString)

                    const result = await this.db.update(id, dados)
                    console.log(result)
                    if(result.nModified !== 1) return {
                        message: 'Não foi possivel atualizar!'
                    }
                    return {
                        message: 'herois atualizado com sucesso!'
                    }

                } catch (error) {
                    console.error('Deu ruim', error)
                    return 'Error interno'
                }
            }
        }
    }
}

module.exports = HeroisRoutes