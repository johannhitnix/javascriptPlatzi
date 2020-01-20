const API_URL = 'https://swapi.co/api/';
const PEOPLE_URL = 'people/:id';

const opts = { crossDomain: true};

function obtenerPersonaje(id){
    // en esta promesa que es un objeto se hace el llamado asincrono 
    return new Promise((resolve, reject) => {
        const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;         
        // callback si el request es exitoso
        $.get(url, opts, function(data){
            // de alguna manera esta vinculado a then
            resolve(data); 
        })
        .fail(function(){
            // vinculado catch
            reject(id);
        });
    });
}

function onError(id){
    console.log(`Sucedió un error al obtener el personaje ${id}`);
}

// con .then() se obtiene el valor de la promesa
obtenerPersonaje(10)
    // en el parametro "personaje" se reciben los valores esperados del parametro "data" del metodo resolve() dentro del $.get()
    .then(function(personaje){
        console.log(`el personaje 10 es ${personaje.name}`); 
    })
    .catch(onError);
    // ↑ a este catch le llega el id enviado x el reject, onError recibe el id implicitamente 


