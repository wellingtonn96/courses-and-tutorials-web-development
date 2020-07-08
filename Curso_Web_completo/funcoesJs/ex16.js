const x = 'Global'

function out(){
   const x = 'Local'
   function dentro(){
      return x
   }
   return dentro
}

const myFunction = out()
console.log(myFunction())