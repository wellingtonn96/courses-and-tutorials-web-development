const express = require('express')

require('dotenv').config({
    path: process.env.NODE_ENV === "test" ? ".env.test" : ".env"
})

class App {
    constructor() {
        this.app = express()
        
        this.middlewares()
        this.routes()
    }

    middlewares() {
        return this.app.use(express.json())
    }

    routes() {
       return this.app.use('/', require('./Routes'))
    }
}

module.exports = new App().app