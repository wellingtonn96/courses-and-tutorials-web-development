/*
Envolva todo o conteúdo desse arquivo em uma IIFE.
*/

/*
Crie um objeto chamado `person`, com as propriedades:
    `name`: String
    `lastname`: String
    `age`: Number
Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
de valor para cada propriedade.
*/
// ?

const persons = {
    name: "wellington",
    lastname: "santos de souza",
    age: 24,
}

console.log( 'Propriedades de "person":' , persons);

/*
Mostre no console, em um array, todas as propriedades do objeto acima.
Não use nenhuma estrutura de repetição, nem crie o array manualmente.
*/
// ?
const props = Object.keys(persons)

console.log(props)

/*
Crie um array vazio chamado `books`.
*/
// ?

/*
Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
seguintes propriedades:
`name`: String
`pages`: Number
*/
// ?

const books = [
    { name: 'Harry Potter', pages: 350 },
    { name: 'A Cabana', pages: 150 },
    { name: 'Como Fazer Amigos E influência pessoas', pages: 250 },
]

console.log( '\nLista de livros:', books);

/*
Mostre no console todos os livros.

*/
// ?

console.log( '\nLivro que está sendo removido:', books.pop());
/*
Remova o último livro, e mostre-o no console.
*/
// ?

console.log( '\nAgora sobraram somente os livros:', books);
/*
Mostre no console os livros restantes.
*/
// ?

/*
Converta os objetos que ficaram em `books` para strings.
*/
// ?

const booksStringfy = JSON.stringify(books)

console.log( '\nLivros em formato string:', booksStringfy);

/*
Mostre os livros nesse formato no console:
*/
// ?

/*
Converta os livros novamente para objeto.
*/
// ?
console.log( '\nAgora os livros são objetos novamente:', JSON.parse(booksStringfy));



/*

Mostre no console todas as propriedades e valores de todos os livros,
no formato abaixo:
    "[PROPRIEDADE]: [VALOR]"
*/
// ?

for(let props in books) {
    console.log(`[${Object.keys(books[props])[0]}]: ${books[props].name}`)
}



/*
Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
seu nome. Adicione seu nome completo no array.

*/
// ?

const myName = 'wellington santos de souza'


console.log( '\nMeu nome é:', myName.split(''));

/*
Juntando todos os itens do array, mostre no console seu nome.
*/
// ?

const joinName = myName.split(``)


console.log(`Meu nome junto é:`, joinName.join(''))



/*
Ainda usando o objeto acima, mostre no console seu nome invertido.
*/
// ?

console.log('\nMeu nome invertido:',   joinName.reverse())

console.log( '\nAgora em ordem alfabética:', joinName.sort());
/*
Mostre todos os itens do array acima, odenados alfabéticamente.
*/
// ?
