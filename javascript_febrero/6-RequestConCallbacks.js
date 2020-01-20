const API_URL = 'https://swapi.co/api/';
const PEOPLE_URL = 'people/:id';

const opts = { crossDomain: true};

function obtenerPersonaje(id, callback){
    const url =  `${API_URL}${PEOPLE_URL.replace(':id', id)}`;
    // Request con JQuery, MANEJO DE ERRORES el metodo fail ejecuta un callback si ocurre un error
    $.get(url, opts, callback).fail(function(){
        console.log(`ocurrió un error, no se pudo obtener el personaje ${id}`);
    });

}

// usando arrow functions
// obtenerPersonaje(1, () => obtenerPersonaje(2, () => obtenerPersonaje(3, () => obtenerPersonaje(4, () => obtenerPersonaje(5,
//     () => obtenerPersonaje(6, () => obtenerPersonaje(7, () => obtenerPersonaje(8, () => obtenerPersonaje(9, () => obtenerPersonaje(10)))))))))); 

// CALLBACK HELL! YEAH! >:V
obtenerPersonaje(1, function(personaje){
    console.log(`Hola yo soy ${personaje.name}`);

    obtenerPersonaje(2, function(personaje){
        console.log(`Hola yo soy ${personaje.name}`);

        obtenerPersonaje(3, function(personaje){
            console.log(`Hola yo soy ${personaje.name}`);

            obtenerPersonaje(4, function(personaje){
                console.log(`Hola yo soy ${personaje.name}`);

                obtenerPersonaje(5, function(personaje){
                    console.log(`Hola yo soy ${personaje.name}`);

                    obtenerPersonaje(6, function(personaje){
                        console.log(`Hola yo soy ${personaje.name}`);

                        obtenerPersonaje(7, function(personaje){
                            console.log(`Hola yo soy ${personaje.name}`);

                            obtenerPersonaje(8, function(personaje){
                                console.log(`Hola yo soy ${personaje.name}`);

                                obtenerPersonaje(9, function(personaje){
                                    console.log(`Hola yo soy ${personaje.name}`);

                                    obtenerPersonaje(10, function(personaje){
                                        console.log(`Hola yo soy ${personaje.name}`);
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
}); 