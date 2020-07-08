const express = require('express')
const bodyParser = require('body-parser')

const app = express()

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

app.use(bodyParser.urlencoded({ extended: false }))

app.use(adminRoutes)
app.use(adminRoutes)

app.listen(3000, () => {
    console.log('Web server running on port 3000')
})