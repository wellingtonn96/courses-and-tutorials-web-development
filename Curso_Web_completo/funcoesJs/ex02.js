function area(width, height){
    const area = width * height
    if(area > 20){
        console.log(`Valor acima do permitido: ${area}m2.`)
    }else{
        return area
    }
}

console.log(2, 3)
console.log(area(2,4))

console.log(area())
console.log(area(2,4,16, 22, 44))
console.log(area(5,5))