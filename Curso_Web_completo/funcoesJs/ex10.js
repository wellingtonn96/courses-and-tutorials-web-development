let compraCosThis = function(param){
    console.log(this === param)
}

compraCosThis(global)

const obj = {}
compraCosThis = compraCosThis.bind(obj)

compraCosThis(global)

compraCosThis(obj)


let compraCosThisArrow = param => console.log(this === param)
compraCosThisArrow(global)
compraCosThisArrow(module.exports)

compraCosThisArrow = compraCosThisArrow.bind(obj)
compraCosThisArrow(obj)
compraCosThisArrow()
