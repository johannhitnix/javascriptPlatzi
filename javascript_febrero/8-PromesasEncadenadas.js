const API_URL = 'https://swapi.co/api/';
const PEOPLE_URL = 'people/:id';

const opts = { crossDomain: true};

function obtenerPersonaje(id){
    // en esta promesa que es un objeto se hace el llamado asincrono 
    return new Promise((resolve, reject) => {
        const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;         
        
        $.get(url, opts, function(data){
            resolve(data); 
        })
        .fail(function(){
            reject(id);
        });
    });
}

function onError(id){
    console.log(`Sucedió un error al obtener el personaje ${id}`);
}

// con .then() se obtiene el valor de la promesa
// ↓ en el parametro "personaje" se reciben los valores esperados del parametro "data" del metodo resolve() dentro del $.get()
obtenerPersonaje(1)
    .then( personaje1 => {
        console.log(`el personaje 1 es ${personaje1.name}`); 
        // cuando la promesa se resuelva retornamos una nueva promesa llamando al id siguiente
        return obtenerPersonaje(2);
    })
    .then(personaje2 => {
        console.log(`el personaje 2 es ${personaje2.name}`);         
        return obtenerPersonaje(3);
    })
    .then(personaje3 => {
        console.log(`el personaje 3 es ${personaje3.name}`);         
        return obtenerPersonaje(4);
    })    
    .then( personaje4 => {
        console.log(`el personaje 4 es ${personaje4.name}`);         
        return obtenerPersonaje(5);
    })
    .then(personaje5 => {
        console.log(`el personaje 5 es ${personaje5.name}`);         
        return obtenerPersonaje(6);
    })
    .then(personaje6 => {
        console.log(`el personaje 6 es ${personaje6.name}`);         
        return obtenerPersonaje(7);
    })    
    .then( personaje7 => {
        console.log(`el personaje 7 es ${personaje7.name}`);         
        return obtenerPersonaje(8);
    })
    .then(personaje8 => {
        console.log(`el personaje 8 es ${personaje8.name}`);         
        return obtenerPersonaje(9);
    })
    .then(personaje9 => {
        console.log(`el personaje 9 es ${personaje9.name}`);         
        return obtenerPersonaje(10);
    })
    .then(personaje10 => {
        console.log(`el personaje 10 es ${personaje10.name}`);                 
    })
    .catch(onError);
    // ↑ a este catch le llega el id enviado x el reject, onError recibe el id implicitamente 


