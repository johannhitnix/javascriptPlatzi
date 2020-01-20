function heredaDe(protoHijo, protoPadre){
    let noop = function () {}
    noop.prototype = protoPadre.prototype
    protoHijo.prototype = new noop
    protoHijo.prototype.constructor = protoHijo
}

// 'clase' Persona
function Persona(nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}
Persona.prototype.saludar = function() {
    console.log(`hola me llamo ${this.nombre} ${this.apellido}`)
}

// 'clase' Desarrollador que va a heredar de Persona
function Desarrollador(nombre, apellido){
    this.nombre = nombre
    this.apellido = apellido
}
heredaDe(Desarrollador, Persona)

Desarrollador.prototype.saludar = function() {
    console.log(`hola me llamo ${this.nombre} ${this.apellido} y soy Desarrollador`)
}

Persona.prototype.soyAlto = function() { return this.altura >= 1.8 }

let p1 = new Persona('arturo', 'diaz', 1.82)
let p2 = new Persona('erika', 'corra', 1.70)
