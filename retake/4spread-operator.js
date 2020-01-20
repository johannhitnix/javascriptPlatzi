let [a, ...b] = ['lunes', 'martes', 'miercoles', 'jueves']
console.log(b)

let arms = ['shoulers', 'arms']
let legs = ['legs', 'feet']
let body = ['head', ...arms, ...legs]

console.log(body)

let numes = [23, 88, 89]

function sumar(a, b, c){
    console.log(a+b+c)
}

sumar(...numes)

// MERGE ARRAYS
var arg1 = [9, 3, 2, 1]
var arg2 = [11, 28, 33]

var merged = [...arg1, ...arg2]
console.log(merged)

// MERGE OBJECTS
var obj1 = { 'foo': 'douh', x: 42 }
var obj2 = { 'foo': 'yeou', y: 38 }

var mergedObj = { ...obj1, ...obj2 }
console.log(mergedObj)
