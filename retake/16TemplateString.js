// EJEMPLO #1: template string anidados usando el metodo map()
const dogs = [
    { name : 'snickers', age : 2},
    { name : 'hugo', age : 4},
    { name : 'sunny', age : 1 }
]

const ej1 = `<ul class="dogs">
                ${dogs.map(dog => `<li>${dog.name} is ${dog.age * 7}</li>`).join('')}
            </ul>`

// EJEMPLO #2: operador ternario dentro de template string            
const song = {
    name: 'Dying to live',
    artist: 'Tupac',
    featuring: 'Biggie Smalls'
}

const ej2 = `<div class="song">
                <p>
                    ${song.name} - ${song.artist}
                    ${song.featuring ? `(Featuring ${song.featuring})` : ''}
                </p>
            </div>`

// EJEMPLO #3: renderizar un array que esta dentro del objeto       
const beer = {
    name: 'Belgian Wit',
    brewery: `Steam Whistle Brewery`,
    keywords: ['pale', 'cloudy', 'spiced', 'crisp']
}

function renderKeyWords(keywords){
    return `<ul>
                ${keywords.map(keyword => `<li>${keyword}</li>`).join('')}
            </ul>`
}

const ej3 = `<div class="beer">
                <h2>${beer.name}</h2>
                <p class="brewery">${beer.brewery}</p>
                ${renderKeyWords(beer.keywords)}                
            </div>`


    