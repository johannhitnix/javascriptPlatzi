function hereda(hijo, padre){
    var fn = function () {}
    fn.prototype = padre.prototype;
    hijo.prototype = new fn;
    hijo.prototype.constructor = hijo;
}

// PROTOTIPO PERSONA
function Persona(nombre, apellido, altura){
     this.nombre = nombre;
     this.apellido = apellido;
     this.altura = altura;
 }
// METODOS PROTOTIPO
 Persona.prototype.saludar = function(){
     console.log(`Hola, soy ${this.nombre} ${this.apellido}`);
 }
 Persona.prototype.soyAlto = function(){
     return this.altura > 1.8;
 }

 var johan = new Persona('Johan', 'Chivará', 1.67);
//  LLAMADA FXS PROTOTIPO
 johan.saludar();
 console.log(johan.soyAlto());

// PROTOTIPO DESARROLLADOR QUE 'HEREDA' DE PERSONA
 function Desarrollador(nombre, apellido){
    this.nombre = nombre;
    this.apellido = apellido;
 }

 hereda(Desarrollador, Persona);

 Desarrollador.prototype.saludar = function(){
     console.log(`Hola, soy ${this.nombre} ${this.apellido} y soy desarrollador`);
 }

// OBTENER INFO EN CONSOLA
// Persona.prototype
// Desarrollador.prototype