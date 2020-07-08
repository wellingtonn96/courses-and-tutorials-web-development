const path = require('path')

const express = require('express')
const bodyParser = require('body-parser')
//const expressHbs =  require('express-handlebars')

const app = express()


//set templete engine
/*
app.engine(
    'hbs',
    expressHbs({
        layoutsDir: 'views/layouts/',
        defaultLayout: 'main-layout',
        extname: 'hbs'
    })
)
*/

//template engine
app.set('view engine', 'ejs')
app.set('views', 'views')

//body parser
app.use(bodyParser.urlencoded({ extended: false }))

//achives statics
app.use(express.static(path.join(__dirname, 'public')))

//routes
app.use('/admin', require('./routes/admin').routes)
app.use('/', require('./routes/shop'))

//midleware page 404
app.use((req, res) => {
    res.status(404).render('404', {
        pageTitle: 'Page Not Found!'
    });
});

//config web server
app.listen(3000, () => {
    console.log('Web server running on port 3000')
})