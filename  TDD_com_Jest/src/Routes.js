const express = require('express')

const sessionController = require('./app/controllers/SessionController')
const authMiddleware = require('./app/middlewares/auth ')

class AuthRoutes {
    constructor() {
        this.route = express.Router()

        this.session()
        this.authMiddleware()
        this.dashboard()
    }

    session() {
        this.route.post('/session', sessionController.store)
    }

    authMiddleware() {
        this.route.use(authMiddleware)
    }

    dashboard() {
        this.route.get('/dashboard', (req, res) => {
            res.status(200).json({ message: 'tudo deu serto graças a Deus!!!'})
        })
    }

}

module.exports = new AuthRoutes().route