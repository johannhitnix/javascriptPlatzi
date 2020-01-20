const URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

fetch(`${URL}${PEOPLE_URL.replace(':id', 10)}`)
    .then((response)=>response.json())
        .then((persona)=>{console.log(`hola soy ${persona.name}`)})
            .catch( error=> console.error('Error: ', error))    