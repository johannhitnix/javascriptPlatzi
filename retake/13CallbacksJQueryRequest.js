const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

const kenobiUrl = `${API_URL}${PEOPLE_URL.replace(':id', 10)}`
const opcs = { crossDomain : true }

const onResponse = person => console.log(person.name)

$.get(kenobiUrl, opcs, onResponse)