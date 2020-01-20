class Persona {
    constructor(nombre, apellido, altura){
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }

    saludar(fx){
        console.log(`hola me llamo ${this.nombre} ${this.apellido}`)
        if(fx) {
            fx(this.nombre, this.apellido)
        }
    }

    soyAlto(){
        return this.altura >= 1.8
    }
}

var mario = new Persona('Mario', 'Hernandez', 1.71)

class Desarrollador extends Persona {
    constructor (nombre, apellido, altura, especialidad) {
        super(nombre, apellido, altura)
        this.especialidad = especialidad
    }

    saludar(fx) {
        console.log(`hola me llamo ${this.nombre} ${this.apellido} y soy desarrollador ${this.especialidad}`)
        if(fx) {
            fx(this.nombre, this.apellido, this.especialidad)
        }
    }
}

function responderSaludo(nombre, apellido, especialidad){
    console.log(`que hay de nuevo ${nombre} ${apellido}`)
    if(especialidad){
        console.log(`vea pues no sabia que eras dev ${especialidad}`)
    }
}