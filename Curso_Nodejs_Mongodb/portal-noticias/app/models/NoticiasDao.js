function NoticiasDao(connection){
    this._connection = connection
}


NoticiasDao.prototype.getNoticias = function(callback){
    this._connection.query('select * from noticias', callback)
}

NoticiasDao.prototype.getNoticia = function(callback){
    this._connection.query('select * from noticias where id_noticias = 2', callback)
}

NoticiasDao.prototype.salvarNoticia = function(noticia  , callback){
    this._connection.query('insert into noticias set ? ', noticia, callback)
}


module.exports = function(){
    return NoticiasDao
}


