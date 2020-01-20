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

async function obtenerPersonajes(){
    var ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var promesas = ids.map(id => obtenerPersonaje(id));

    // hay que poner la parte asincrona dentro de un trycatch
    try {
        // ↓ linea ejecutada asincronamente  "cuando todas las promesas se resuelvan guarda el resultado en la variable"
        // ↓ await detiene la ejecución de la linea hasta que todas las promesas sean resueltas
        var personajes = await Promise.all(promesas);        
        // console.log(personajes);
        console.table(personajes);
    } catch (id) {
        onError(id);
    }    
}

obtenerPersonajes();
