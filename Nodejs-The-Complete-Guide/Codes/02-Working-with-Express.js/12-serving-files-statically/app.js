const path = require('path')

const express = require('express')
const bodyParser = require('body-parser')
const expressHbs = require('express-handlebars')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin', require('./routes/admin'))
app.use('/', require('./routes/shop'))

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000, () => {
    console.log('Web server running on port 3000')
})