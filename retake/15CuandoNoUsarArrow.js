// en este caso no hay que usar arrow function porque el scope de this dentro de un arrow es el obj window
// es preferible usar la notacion de funcion tradicional poque en este caso tiene su propio scope local
let elemento = document.querySelector('.elemento')
        elemento.addEventListener('click', function() {
            this.innerHTML = 'Algun otro texto'
        })