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

var ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// por cada elemento se retorna una promesa
// var promesas = ids.map(function(id){
//     return obtenerPersonaje(id);
// });
var promesas = ids.map(id => obtenerPersonaje(id));
// obtener los valores de las promesas
Promise
    .all(promesas)
    .then(personajes => console.log(personajes))
    .catch(onError);