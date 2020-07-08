function ProdutosDao(connection){
    this._connection = connection
}

ProdutosDao.prototype.listar = function(callback){
    this._connection.query('select * from livros', callback);
}

ProdutosDao.prototype.cadastrar = function(dados, callback){
    this._connection.query('insert into livros set ?', dados, callback)
}

module.exports = () =>{
    return ProdutosDao;
}