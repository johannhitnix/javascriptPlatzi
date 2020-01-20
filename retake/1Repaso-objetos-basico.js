// Objeto basico de javaScript, ojo no confundir con JSON
var taxi = {
    color : 'amarillo',
    placa : 'TEO412',
    marca : 'kia',
    modelo: 'sephia'
}

function imprimirenMayusculas(carro){
    let { modelo } = carro
    let { marca } = carro
    console.log(modelo.toUpperCase())    
    console.log(marca.toUpperCase())
}

imprimirenMayusculas(taxi)