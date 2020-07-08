const http = require('http')

http.createServer((req, res) => {
    res.end('hello Node')
})
.listen(4000, () => console.log('Web server running'))

