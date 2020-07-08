Number.prototype.entre = function(ini, fim){
    return this >= ini && this <= fim
}

const printResult = function(note){
    if(note.entre(9, 10)){
        console.log('Quadro de Honra')
    }else if(note.entre(7, 8.99)){
        console.log('Aprovado')
    }else if(note.entre(0, 3.99)){
        console.log('Reprovado')
    }else{
        console.log('Nota inválida')
    }
    console.log('fim')
}

printResult(10)

printResult()

printResult()

printResult()

printResult()
