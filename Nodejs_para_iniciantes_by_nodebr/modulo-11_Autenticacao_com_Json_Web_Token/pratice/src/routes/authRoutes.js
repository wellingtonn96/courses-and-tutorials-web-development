    const BaseRoute = require('./base/baseRoute')
const Boom = require('boom')
const Joi = require('joi')
const passwordHelper = require('../helpers/passwordHelper')
const Jwt = require('jsonwebtoken')

class AuthRoutes extends BaseRoute {
    constructor(key, db) {
        super()
        this.secret = key
        this.db = db
    }
    login() {
        return {
            path: '/login',
            method: 'POST',
            config: {
                auth: false,
                tags: ['api'],
                description: 'obter token',
                notes: 'retornar o token',
                validate: {
                    payload: {
                        username: Joi.string().required(),
                        password: Joi.string().required()
                    }
                }
            },
            handler: async (request, headers) => {
                const { username, password } = request.payload

                // if(username.toLowerCase() !== USER.username || password !== USER.password)
                // return Boom.unauthorized()
                const [user] = await this.db.read({
                    username: username.toLowerCase()
                })

                if(!user) {
                    return Boom.unauthorized('O usuario informado não existe')
                }

                const match = await passwordHelper.comparePassword(password, user.password)

                if(!match) return Boom.unauthorized('O usuario e senha invalidos!')
                
                return {
                    token: Jwt.sign({
                        username,
                    }, this.secret)
                }

            }
        }
    }
}

module.exports = AuthRoutes