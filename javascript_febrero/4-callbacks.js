const API_URL = 'https://swapi.co/api/';
const PEOPLE_URL = 'people/:id';

const kenobiUrl = `${API_URL}${PEOPLE_URL.replace(':id', 10)}`;
// se le dice a JQuery que la request se va a hacer a otra pag
const opts = { crossDomain: true};
const onResponse = function(personaje){
    // arguments es una variable que tienen todas las fx    
    // console.log(arguments);
    console.log(`Hola yo soy ${personaje.name}`);
}

// Request con JQuery, onResponse es el callBack
$.get(kenobiUrl, opts, onResponse);
