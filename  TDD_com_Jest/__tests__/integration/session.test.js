const request = require('supertest')

const app = require('../../src/App')
const factory = require('../utils/factories')

const truncate = require('../utils/truncate')

describe('Autentication', () => {
    beforeEach(async () => {
        await truncate();
    })   
    it('should be authenticate with valid credentials', async () => {
        const user = await factory.create('User', {
            password: '123456'
        })

        const response = await request(app)
        .post('/session')
        .send({
            email: user.email,
            password: '123456'
        })

        expect(response.status).toBe(200);
    })

    it('should not authenticate with invalid credentials', async () => {
    const user = await factory.create('User', {
        password: '123456'
    })

    const response = await request(app)
        .post('/session')
        .send({
            email: user.email,
            password: '12s345d6'
        })

        expect(response.status).toBe(401);
    })

    it('shold return jwt token when authenticated', async () => {
    const user = await factory.create('User', {
        password: '123456'
    })

    const response = await request(app)
        .post('/session')
        .send({
            email: user.email,
            password: '123456'
        })

        expect(response.body).toHaveProperty("token");
    })

    it('should be able to access private routes when authenticated', async () => {
        const user = await factory.create('User', {
            password: '123456'
        })
    
        const response = await request(app)
            .get('/dashboard')
            .set('Authorization', `Bearer ${user.generateToken()}`)
    
            expect(response.status).toBe(200)
    })

    it('should not be able to access private routes without token', async () => {
        const user = await factory.create('User', {
            password: '123456'
        })
    
        const response = await request(app)
            .get('/dashboard')
    
            expect(response.status).toBe(401)
    })
})




