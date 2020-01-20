class Persona{
    constructor(nombre, apellido, altura){
        this.nombre = nombre;
        this.apellido = apellido;
        this.altura = altura;
    }
    saludar(fx){
        // desestructuracion: guardamos los datos del this en variabes
        var{ nombre, apellido } = this; 
        console.log(`Hola, soy ${nombre} ${apellido}`);
        if(fx){
            fx(nombre, apellido);
        }
    }
    soyAlto(){
        return this.altura > 1.8;
    }
} 

class Desarrollador extends Persona{
    constructor(nombre, apellido, altura){
        // llamada constructor clase padre
        super(nombre, apellido, altura);
     } 
    //  paso de fx en los parametros
     saludar(fx){
         // desestructuracion: guardamos los datos del this en variabes
         var{ nombre, apellido } = this; 
         console.log(`Hola, soy ${nombre} ${apellido} y soy desarrollador`);
         if(fx){
            fx(nombre, apellido, true);
        }
     }      
}

// esta es fx
function responderSaludo(nombre, apellido, esDev){
    console.log(`Buen día ${nombre} ${apellido}`);
    if(esDev){
        console.log(`Vea pues, no sabía que eras desarrollador`);
    }
}

var mario = new Persona('Mario', 'Hernandez', 1.7);
var julio = new Persona('Julio', 'Avellanez', 1.7);
var mayerly = new Desarrollador('Mayerly', 'Salazar', 1.67);

mario.saludar();
julio.saludar(responderSaludo);
mayerly.saludar(responderSaludo);
 

// OBTENER INFO EN CONSOLA
// Persona.prototype
// Desarrollador.prototype