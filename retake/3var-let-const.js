var alguien = {
    nombre   : 'Pepito',
    apellido : 'Putin',
    edad     :  26
}



function esMayorDeEdad(persona){
    let mensaje 
    let { edad } = persona
    if(edad >= 18){
        mensaje = 'Es mayor de Edad'
    } else {
        mensaje = 'Es menor de Edad'
        var mensaje2 = 'es cierto'
    }
    console.log(mensaje)
    console.log(mensaje2)
}

esMayorDeEdad(alguien)

const numeros = [12, 23, 32, 88, 90, 99]
console.log(numeros)

numeros.push(89)
console.log(numeros)

// el output es [12, 23, 32, 88, 90, 99, 89]