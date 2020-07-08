const BaseRoute = require('./base/baseRoutes');
const joi = require('joi')
const Boom = require('boom')

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
                return this.db.read()
              } catch (error) {
                  console.log('DEU RUIM', error)
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
                    return {
                        message: 'heroi cadastrado com sucesso!',
                        _id: result._id
                    }
                } catch (error) {
                    console.log('DEU RUIM IRMÃO', error)
                    return Boom.internal()
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
                    const { id } = request.params
                    const { payload } = request

                    const dadosString = JSON.stringify(payload)
                    const dados = JSON.parse(dadosString)

                    const { nModified } = await this.db.update(id, dados)
                 
                    if(nModified !== 1) return Boom.preconditionFailed('Id não encontrado no base!')
                    return {
                        message: 'heroi atualizado com sucesso!'
                    }
                } catch (error) {
                    console.log('DEU RUIM', error)
                    return Boom.internal()
                }
            }
        }   
    }

    delete() {
        return {
            path: '/herois/{id}',
            method: 'DELETE',
            config: {
                validate: {
                    params: {
                        id: joi.string().required()
                    }
                }
            },
            handler: async (request) => {
                try {
                    const { id } = request.params
                    const { deletedCount } = await this.db.delete(id)
                    if(deletedCount !== 1) return Boom.preconditionFailed('item não encontrado na base')
                    return {
                        message: 'Heroi deletado com sucesso!'
                    }
                } catch (error) {
                    console.log('DEU RUIM')
                    return Boom.internal()
                }
            }
        }
    }
}

module.exports = HeroisRoutes