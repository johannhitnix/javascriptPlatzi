// Objeto basico de javaScript, ojo no confundir con JSON
var taxi = {
    tipo  : 'taxi',
    color : 'amarillo',
    placa : 'TEO412',
    marca : 'Kia',
    modelo: 'Sephia'
}

var camioneta = {
    tipo  : 'pickup',
    color : 'gris',
    placa : 'SEO981',
    marca : 'Toyota',
    modelo: 'Hilux'
}

var van = {
    tipo  : 'van',
    color : 'blanco',
    placa : 'TEO583',
    marca : 'Chery',
    modelo: 'VanPass'
}

// DESESTRUCTURACIÓN DE DO ATRIBUTOS DE UN OBJETO EN UNA FX
function imprimirenMayusculas(objeto){
    // var modelo = objeto.modelo
    var { modelo } = objeto
    modelo = modelo.toUpperCase()
    var { marca } = objeto
    console.log(`el carro es un ${marca} ${modelo}`)
}

// DESETRUCTURACION EN UNA FX DE CADA ATRIBUTO DE UN OBJETO
function mostrarDatos(carro){
    var { tipo } = carro
    var { color } = carro
    var { placa } = carro
    var { marca } = carro
    var { marca } = carro
    var { modelo } = carro

    console.log(`el carro tipo ${tipo} de color ${color} con placa ${placa} marca ${marca} modelo ${modelo}`)
}

imprimirenMayusculas(taxi)

mostrarDatos(taxi)
mostrarDatos(camioneta)
mostrarDatos(van)

// DESESTRUCTURACION DE UN ARRAY DE VARIABLES
var [paisA, paisB, paisC] = ['Alemania', 'Portugal', 'Irlanda']

console.log(paisA)
console.log(paisB)
console.log(paisC)

// DESESTRUCTURACION DE UN OBJETO CON VARIAS VARS
var myObj = { foo: "foo", band: "fighters", genre: "rock" }
var { foo, band, genre } = myObj

console.log( foo, band, genre )