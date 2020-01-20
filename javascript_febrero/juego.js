const celeste = document.getElementById('celeste')
const violeta = document.getElementById('violeta')
const naranja = document.getElementById('naranja')
const verde = document.getElementById('verde')
const btnEmpezar = document.getElementById('btnEmpezar')
const ULTIMO_NIVEL = 10
 
class Juego {
    constructor() {
        this.inicializar = this.inicializar.bind(this)
        this.inicializar()
        this.generarSecuencia()        
        setTimeout(this.siguienteNivel, 500)
    }

    inicializar() {
        // la fx siguienteNivel siempre va a estar atada al juego sin cambiar de contexto
        this.siguienteNivel = this.siguienteNivel.bind(this)
        // sin el bind(this) la ref se cambia a los botones del tablero
        // se ata la ref this al obj juego, evitando que el contexto de this se cambie a los botones o al window 
        // con esto se le pueden quitar los otros this a los llamados de elegirColor de abajo
        this.elegirColor = this.elegirColor.bind(this)
        this.toggleBtnEmpezar()

        this.nivel = 1
        // hint! si los atributos se llaman igual q las variables js las guarda automaticamente
        this.colores = {
            celeste,
            violeta,
            naranja,
            verde
        }
    }

    toggleBtnEmpezar(){
        if (btnEmpezar.classList.contains('hide')) {
            btnEmpezar.classList.remove('hide')
        } else{
            btnEmpezar.classList.add('hide') 
        }
    }

    generarSecuencia(){
        // genera un arreglo en js y define sus elementos con 0
        this.secuencia = new Array(ULTIMO_NIVEL).fill(0).map (n => Math.floor(Math.random() * 4))
    }

    siguienteNivel(){
        // en js los atributos se declaran al momento de usarse con el this
        this.subnivel = 0 
        this.iluminarSecuencia()
        this.agregarEventosClick()
    }    

    numeroaColor(num){
        switch (num){
            case 0:
                return 'celeste'                
            case 1:
                return 'violeta'                
            case 2:
                return 'naranja'                
            case 3:            
                 return 'verde'
            default:
                break;
        }
    }

    coloraNumero(color){
        switch (color){
            case 'celeste':
                return 0                
            case 'violeta':
                return 1                
            case 'naranja':
                return 2                
            case 'verde':            
                 return 3
            default:
                break;
        }
    }

    iluminarSecuencia(){
        for (let i = 0; i < this.nivel; i++) {
            const color = this.numeroaColor(this.secuencia[i])
            setTimeout(() => this.iluminarColor(color), 1000 * i)  
        }
    }

    iluminarColor(color){
        this.colores[color].classList.add('light')
        setTimeout(() => this.apagarColor(color), 350)
    }

    apagarColor(color){
        this.colores[color].classList.remove('light')
    }

    agregarEventosClick(){
        // var _this = this
        // var self = this
        // esto se hace x c/u de los colores
        this.colores.celeste.addEventListener('click', this.elegirColor)
        this.colores.violeta.addEventListener('click', this.elegirColor)
        this.colores.naranja.addEventListener('click', this.elegirColor)
        this.colores.verde.addEventListener('click', this.elegirColor)
    }

    eliminarEventosClick(){
        this.colores.celeste.removeEventListener('click', this.elegirColor)
        this.colores.violeta.removeEventListener('click', this.elegirColor)
        this.colores.naranja.removeEventListener('click', this.elegirColor)
        this.colores.verde.removeEventListener('click', this.elegirColor)
    }

    elegirColor(ev){
        const nombreColor = ev.target.dataset.color
        // transformar nombre a numero
        const numeroColor = this.coloraNumero(nombreColor)
        this.iluminarColor(nombreColor)        
        // el primer subnivel va a ser 0, si el usr elige bien se incrementa el subnivel
        if (numeroColor === this.secuencia[this.subnivel]) {
            this.subnivel++
            // si el subnivel alcanza al nivel se pasa al siguiente nivel
            if (this.subnivel === this.nivel) {
                this.nivel++
                // al subir de nivel se eliminan los eventos click
                this.eliminarEventosClick()
                if (this.nivel === (ULTIMO_NIVEL + 1)) {
                    this.win()
                } else{
                    // aqui no se esta invocando la fx solo se le esta pasando la ref de la fx a ejecutar por eso no se ponen parentesis
                    // se le hace bind para que el this no se cambie a window al ejecutar el timeout, 
                    // se desplaza el bind a inicializar allá arriba
                    setTimeout(this.siguienteNivel, 1500)
                }

            }
        } else{
            this.loose()
        }
    }

    win(){
        // promesa con .then
        swal('GANASTE!', 'Felicitaciones', 'success').then(this.inicializar)
    }

    loose(){
        // promesa con .then
        swal('PERDISTE!', 'lo sentimos :(', 'error').then(() => {
            this.eliminarEventosClick()            
            this.inicializar()
        })
    }

}
// end of class Juego

function empezarJuego() {
    // se pone la var juego dentro de window para poder debugearla
    window.juego = new Juego()
}