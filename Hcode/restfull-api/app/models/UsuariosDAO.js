class UsuariosDAO{

    constructor(connection){
        this._connection = connection
    }

    createUsuario(dados, callback){
        this._connection.query('insert into tb_usuarios set ?',[dados], callback)
    }
    readUsuarios(callback){
        this._connection.query('select * from tb_usuarios', callback)
    }

    readUsuario(id, callback){
        this._connection.query('select * from tb_usuarios where idUsuario = ?', id, callback)
    }

    updateUsuario(id, dados, callback){
        this._connection.query('update tb_usuarios set ? where idUsuario = ?',[dados, id],callback)
    }
    deleteUsuario(id, callback){
        this._connection.query('delete from tb_usuarios where idUsuario = ?',id, callback)
    }

}

module.exports = () => UsuariosDAO;