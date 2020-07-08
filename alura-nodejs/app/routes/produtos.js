module.exports = (aplication)=>{

    aplication.get('/', (req, res)=>{
        res.render('produtos/home')
    });

    let listaProdutos = (req, res)=>{

        let connection = aplication.config.dbConnection()
        let produtosModel = new aplication.app.models.ProdutosDao(connection)

        produtosModel.listar((error, result)=>{
            res.format({
                html: ()=>{
                    res.render('produtos/lista', {dados: result})
                },
                json: ()=>{
                    res.json(result)
                }
            })

        })
    };

    aplication.get('/produtos', listaProdutos);

    aplication.get('/produtos/form', (req, res)=>{
        res.render('produtos/form', {validation: {}});
    });

    aplication.post('/produtos',(req, res)=>{
        var dados = req.body;

        console.log(dados)

        req.assert('nome', 'campo nome obrigatório').not().isEmpty()
        req.assert('descricao', 'capmpo descricao obrigatorio').not().isEmpty()
        req.assert('valor', 'campo valor obrigatorio').not().isEmpty()

        var errors = req.validationErrors()

        

        if(errors){
            res.format({
                html: ()=>{
                    res.render('produtos/form', {validation: errors})
                },
                json: ()=>{
                    res.json(errors)
                }
            })
        }

        let connection = aplication.config.dbConnection()
        let produtosModel = new aplication.app.models.ProdutosDao(connection)

        produtosModel.cadastrar(dados,(error, result)=>{
            res.redirect('/produtos')
        })
    })
}