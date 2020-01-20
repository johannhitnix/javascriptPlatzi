const MAYORIA_DE_EDAD = 18

var pepito = {
    edad : 17
}

// PASO#0 : funcion normal
// function esMayorDeEdad(persona){
//     return persona.edad >= MAYORIA_DE_EDAD
// }

// PASO#1 : volver la fx anonima y asociarla a una cte
// const esMayorDeEdad = function(persona){
//     return persona.edad >= MAYORIA_DE_EDAD
// }

// PASO#2 : si es solo un parametro eliminar la palabra function y los parentesis y añadir el arrow '=>'
// const esMayorDeEdad = persona => {
//     return persona.edad >= MAYORIA_DE_EDAD
// }

// PASO#3 : si la fx solo hace un return se puede eliminar el return, los corchetes y ponerlo todo en una linea
// const esMayorDeEdad = persona => persona.edad >= MAYORIA_DE_EDAD

// PASO#4 : aplicar la desestructuracion poniendo el atributo dentro de ({ })
const esMayorDeEdad = ({ edad }) => edad >= MAYORIA_DE_EDAD

console.log(esMayorDeEdad(pepito))


class Person {
    constructor(name){
        this.name = name
    }

    printNameFunction(){ 
        setTimeout(() => console.log(`arrowFx ${this.name}`), 100)
    }
}

let persona = new Person('bob')
persona.printNameFunction()