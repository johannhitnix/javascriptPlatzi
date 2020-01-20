const API_URL = 'https://swapi.co/api/';
const PEOPLE_URL = 'people/:id';

const opts = { crossDomain: true};

function obtenerPersonaje(id, callback){
    const url =  `${API_URL}${PEOPLE_URL.replace(':id', id)}`;
    // Request con JQuery, onResponse es como un callback que se ejecuta despues del request
    $.get(url, opts, function(personaje){    
        console.log(`Hola yo soy ${personaje.name}`);
        if (callback) {
            callback();
        }
    });

}

// usando arrow functions
// obtenerPersonaje(1, () => obtenerPersonaje(2, () => obtenerPersonaje(3, () => obtenerPersonaje(4, () => obtenerPersonaje(5,
//     () => obtenerPersonaje(6, () => obtenerPersonaje(7, () => obtenerPersonaje(8, () => obtenerPersonaje(9, () => obtenerPersonaje(10)))))))))); 

// CALLBACK HELL! YEAH! >:V
obtenerPersonaje(1, function(){
    obtenerPersonaje(2, function(){
        obtenerPersonaje(3, function(){
            obtenerPersonaje(4, function(){
                obtenerPersonaje(5, function(){
                    obtenerPersonaje(6, function(){
                        obtenerPersonaje(7, function(){
                            obtenerPersonaje(8, function(){
                                obtenerPersonaje(9, function(){
                                    obtenerPersonaje(10);
                                });
                            });
                        });
                    });
                });
            });
        });
    });
}); 
