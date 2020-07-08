module.exports = function(application){

    let route = application.route('/users');

    route.get((req, res)=>{

        const connection = application.config.dbConnection()
        const usuariosModel = new application.app.models.UsuariosDAO(connection)        
        
        usuariosModel.readUsuarios((error, result)=>{
           if(error){
                application.utils.error.send(err, req, res)
           }else{
               res.status(200).json(result)
           }
        })
    })


    route.post((req, res)=>{

        if(!application.utils.validation.user(application, req, res))return false;

        const connection = application.config.dbConnection()
        const usuariosModel = new application.app.models.UsuariosDAO(connection)        
        
        usuariosModel.createUsuario(req.body, (error, result)=>{
           if(error){
                application.utils.error.send(err, req, res)
           }else{
               res.status(200).json(result)
           }
        })
       

    })

    let routeId = application.route('/users/:id');

    routeId.get((req, res)=>{

        const connection = application.config.dbConnection()
        const usuariosModel = new application.app.models.UsuariosDAO(connection)        
        
        const id = req.params.id

        usuariosModel.readUsuario(id, (error, result)=>{
           if(error){
                application.utils.error.send(err, req, res)
           }else{
               res.status(200).json(result)
           }
        })
    })


    routeId.put((req, res)=>{

        if(!application.utils.validation.user(application, req, res))return false;

        const connection = application.config.dbConnection()
        const usuariosModel = new application.app.models.UsuariosDAO(connection)        
        
        const id = req.params.id
        const dados = req.body

        usuariosModel.updateUsuario(id, dados, (error, result)=>{
           if(error){
                application.utils.error.send(err, req, res)
           }else{
               res.status(200).json(result)
           }
        })
       
    })

    routeId.delete((req, res)=>{
        
         const connection = application.config.dbConnection()
         const usuariosModel = new application.app.models.UsuariosDAO(connection)       
        
        const id = req.params.id

        usuariosModel.deleteUsuario(id, (error, result)=>{
           if(error){
                application.utils.error.send(err, req, res)
           }else{
               res.status(200).json(result)
           }
        })
       
    })

}