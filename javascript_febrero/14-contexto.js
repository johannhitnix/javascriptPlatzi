var sacha = {
    nombre: 'Sacha',
    apellido: 'lejrwa'
}

var yesika = {
    nombre: 'Yesika',
    apellido: 'eewadr'
}

function saludar(){
    console.log(`Hola mi nombre es ${this.nombre}`)
}

function saludar2(saludo = 'Hola'){
    console.log(`${saludo} mi nombre es ${this.nombre}`)
}

// con .bind atamos el contexto del this a un objeto, y no funciona si se llama direcatamente
const saludaSacha = saludar.bind(sacha)

setTimeout(saludar2.bind(yesika, 'Hey'), 2000)

// ejecuta la fx directamente
saludar2.call(sacha, 'che boludo')

// apply hace lo mismo que call con la diferencia de que recibe un array de parametros
saludar2.apply(yesika, ['Quihubo parce'])
