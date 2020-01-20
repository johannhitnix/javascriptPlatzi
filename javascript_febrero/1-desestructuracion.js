var dario = {
    nombre: 'Darío',
    apellido: 'Gómez',
    edad: 60    
};

function imprimirNombreYEdad(persona){
    var {nombre} = persona;
    var {edad} = persona;
    // console.log('Hola me llamo' + nombre + ' y tengo ' + edad)
    console.log(`Hola me llamo ${nombre} y tengo ${edad} años`);
}

imprimirNombreYEdad(dario);

function cumple(persona){
    // se retorna un obj distinto
    return{
        ...persona,
        edad: persona.edad + 1
    };
}

var [a, ...b] = [1, 2, 3];
console.log(a);
console.log(b);