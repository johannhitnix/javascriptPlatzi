function factorial(n){

    // this.chace ES UN OBJETO, Y SI NO EXISTE SE CREA
    if(!this.cache) this.cache = {}    

    // si este calculo existe en cache lo retorna para no seguir calculando
    if(this.cache[n]) return this.cache[n]

    // PASO BASE
    if (n === 1) return 1    
    // debugger

    // guarda el resultado en cache antes de retornarlo
    this.cache[n] = n * factorial(n - 1)    
    return this.cache[n] 
}