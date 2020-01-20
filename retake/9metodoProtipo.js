function Persona(nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}

Persona.prototype.saludar = function() {
    console.log(`hola me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.soyAlto = function() { return this.altura >= 1.8 }

let p1 = new Persona('arturo', 'diaz', 1.82)
let p2 = new Persona('erika', 'corra', 1.70)

