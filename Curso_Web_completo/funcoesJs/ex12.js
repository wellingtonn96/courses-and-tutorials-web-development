const companies = ['Mercedes', 'Audi', 'BMW']

function print(name, indece){
    console.log(`${indece + 1}. ${name}`)
}

companies.forEach(print)
companies.forEach(companies => console.log(companies))