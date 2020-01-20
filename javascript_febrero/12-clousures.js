// ES UNA FX QUE RECUERDA EL ESTADO DE LAS COSAS CUANDO FUE INVOCADA

function crearSaludo(finalDFrase){
    // ↓ la fx interna recuerda la variable finalDFrase de la fx externa
    return function(nombre){
        console.log(`Hola ${nombre} ${finalDFrase}`)
    }
}

const saludoColombiano = crearSaludo('parce')
const saludoMexicano = crearSaludo('wey')
const saludoArgentino = crearSaludo('che')

saludoColombiano('Johan')
saludoMexicano('Johan')
saludoArgentino('Johan')