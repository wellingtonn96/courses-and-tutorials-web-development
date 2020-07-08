const BaseRoute = require('./base/baseRoute')
const Joi = require('joi')
const Jwt = require('jsonwebtoken')

const USER = {
    username: 'xuxadasilva',
    password: '123'
}

class AuthRoutes extends BaseRoute {
    constructor(secret) {
        super()
        this.secret = secret
    }

    login() {
        return {
            path: '/login',
            method: 'POST',
            config: {
                auth: false,
                tags: ['api'],
                description: 'Obter Token',
                notes: 'faz login com nome e senha',
                validate: {
                    payload: {
                        username: Joi.string().required(),
                        password: Joi.string().required()
                    }
                }
            },
            handler: async (request) => {
                const { username, password } = request.payload
                if (
                    username.toLowerCase() !== USER.username || 
                    password !== USER.password
                ) 
                    return 'Usuario não autorizado'
                const token = Jwt.sign({
                    username: username,
                    id: 1
                }, this.secret)
                return {
                    token,
                }
            }  
        }
    }
}

module.exports = AuthRoutes