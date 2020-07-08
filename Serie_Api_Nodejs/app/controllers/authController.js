const express = require('express')
const bcrypt = require('bcryptjs')
const User = require('../../app/models/User')
const JWT = require('jsonwebtoken')
const authConfig = require('../../config/auth.json')
const router = express.Router()

function generateToken(params = {}){
    return JWT.sign(params, authConfig.secret, {
        expiresIn: 86400
    })
}

router.post('/register', async (req, res) => {
    const { email } = req.body
    try {
        if(await User.findOne({ email }))
            return res.status(400).send({ error: 'User already existis'})
        const user = await User.create(req.body)
        return res.send({
            user,
            token: generateToken({id: user.id }) 
        })
    } catch (error) {
        return res.status(400).send({ error: 'Registration failed'})
    }
})

router.post('/authenticate', async (req, res) => {
    const { password, email } = req.body

    const user = await User.findOne({ email }).select('+password');
    
    if(!user)
        return res.status(400).send({ error: 'User not found' })
    
    if(!await bcrypt.compare(password, user.password))
        return res.status(400).send({ error: 'Invalid password' })

    user.password = undefined


    res.send({
        user,
        token: generateToken({id: user.id }) 
    })

})

module.exports = app => app.use('/auth', router)