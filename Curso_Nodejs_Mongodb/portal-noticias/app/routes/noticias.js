module.exports = function(application){

    application.get('/noticia' , function(req, res){
        application.app.controllers.noticias.noticia(aplication,req ,res)
    })

    application.get('/noticias', function(req, res){
        application.app.controllers.noticias.noticias(application, req, res)
    })
    
}