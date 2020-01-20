let antonio = {
    pais : 'España',
    altura : 1.50,
    sexo : 'mas',
    libros : 15
}

let mariana = {
    pais : 'Peru',
    altura : 1.52,
    sexo : 'fem',
    libros : 66
}

let alan = {
    pais : 'Mexico',
    altura : 1.82,
    sexo : 'mas',
    libros : 23
}

let juanjo = {
    pais : 'Honduras',
    altura : 1.66,
    sexo : 'mas',
    libros : 44
}

let estefania = {
    pais : 'Panama',
    altura : 1.67,
    sexo : 'fem',
    libros : 46
}


let personas = [ antonio, mariana, alan, juanjo, estefania ]

const esBajo = ({ altura }) => altura < 1.60
const esAlto = ({ altura }) => altura > 1.80

let bajitos = personas.filter(esBajo);
let altos = personas.filter(esAlto)

console.log(bajitos)
console.log(altos)


// MAP
const pasarCms = persona => ({ 
    ...persona,
    altura : persona.altura * 100
})


let enCms = personas.map(pasarCms)
console.log(`ARRAY NORMAL Y ARRAY EN CENTIMETROS`)
console.log(personas)
console.log(enCms)

// REDUCE
const reducer = (acum, { libros }) => libros + acum
let total = personas.reduce(reducer, 0)
console.log(total)