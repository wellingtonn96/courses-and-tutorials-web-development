const Product = require('../models/products')

exports.getAddProducts = (req, res) => {
    res.render('add-product',{
        pageTitle: 'Add Product',
        path: '/admin/add-product',
        formCSS: true,
        productCSS: true,
        activeAddProduct: true
    });
}

exports.postAddProduct = (req, res) => {
    const product = new Product(req.body.title)
    product.save()
    res.redirect('/')
}

exports.getProducts = (req, res) => {
    Product.fetchAll(products => {
        res.render('shop',{
            prods: products,
            pageTitle: 'shop',
            path: '/',
            hasProducts: products.length > 0,
            activeShop: true,
            productCss: true
        })
    })
}