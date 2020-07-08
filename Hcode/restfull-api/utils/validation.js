module.exports = {
    user: (application, req, res)=>{

        req.assert('nome', 'campo nome invalido').notEmpty()
        req.assert('email','campo email invalido').notEmpty().isEmail()
        req.assert('senha', 'campo senha inválido').notEmpty()

        let errors = req.validationErrors()

        if(errors){
            application.utils.error.send(errors, req, res)
            return false;
        }else{
            return true;
        }
    }
}