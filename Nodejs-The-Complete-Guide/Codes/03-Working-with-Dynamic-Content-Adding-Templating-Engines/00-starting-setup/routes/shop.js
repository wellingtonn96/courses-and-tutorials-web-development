const express = require('express')

const router = express.Router()
const adminData = require('./admin')

router.use('/', (req, res, next) => {
    const products = adminData.products
    res.render('shop',{
        prods: products,
        pageTitle: 'shop',
        path: '/',
        hasProducts: products.length > 0,
        activeShop: true,
        productCss: true
    })
})

module.exports = router