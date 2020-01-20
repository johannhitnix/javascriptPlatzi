// CON OBJ INMUTABLES NOS DESHACEMOS DEL EFECTO DE LADO
const persona = {
    nombre: 'Sacha',
    edad: 28
}

const cumpleInmutable = persona => ({
    ...persona,
    edad: persona.edad + 1
})

