var david = {
    edad : 26
}

// Por defecto en javascript los objetos que se pasan como parametro se pasan como referencia
// por lo que los atributos del objeto se modifican directamente cada vez que se llama la fx
// para solucionar este inconveniente se retorna un nuevo objeto usando un sprad operator
function cumple(persona){
    return {
        ...persona,
        edad: persona.edad + 1                
    }
}

var david_mas_viejo = cumple(david)