function tratarErrorLacar(erro){
    //throw new Error('...')
    //throw 10
    //throw true
    //throw 'mensagem'
    throw {
        name: erro.name,
        msg:erro.message,
        date:new Date
    }
}

function printNameScrem(obj){
    try{
        console.log(obj.name.toUpperCase()+'!!!')
    }catch(e){
        tratarErrorLacar(e)
    }finally{
        console.log('final')
    }
}

const obj = { name: 'Roberto'}

printNameScrem(obj)
