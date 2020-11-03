const btnEmpezar = document.getElementById('btnEmpezar')
const btnCeleste = document.getElementById('celeste')
const btnVioleta = document.getElementById('violeta')
const btnNaranja = document.getElementById('naranja')
const btnVerde = document.getElementById('verde')
const ULTIMO_LVL = 5
class Juego {
  constructor(){
    //Inicializamos con funciones "obligatorias" por las que pasa el nuevo juego
    this.inicializar() 
    this.generarSecuencia() //La de toda la partida
    setTimeout(()=>this.startLevel(), 500) //Nivel, no el juego
}
  inicializar(){
    this.inicializar = this.inicializar.bind(this)
    this.eliminarListeners = this.eliminarListeners.bind(this)
    this.subnivel = 0;
    this.nivel = 1 //Empezamos el nivel en 0, porque es un array
    this.colorClickeado = this.colorClickeado.bind(this)
    this.toggleBtnEmpezar()
    this.botonesColores = {
      celeste, //en la variable celeste, ubicar celeste
      violeta,
      naranja,
      verde
    }
  }
  toggleBtnEmpezar(){
    if(btnEmpezar.classList.contains('hide')){
      btnEmpezar.classList.remove('hide')
    } else {
      btnEmpezar.classList.add('hide')
    }
  }
  generarSecuencia() {
    this.secuencia = new Array(ULTIMO_LVL).fill(0).map(n=> Math.floor(Math.random() * 4))
    //Hacemos un Array de 10 posiciones, lo llenamos de 0 y los ubicamos con valores
    //Entre 0 y 3
    //Eso significa que tendremos todos los valores que se jugarán desde un comienzo
  }
  startLevel() {
    this.iluminarSecuencia()
  }
  apagarLuces(color) {
    this.botonesColores[color].classList.remove('light')
  }
  indicarColor(botonIndicado) {
    switch(botonIndicado){
      case 0:
        return 'celeste'
        case 1:
        return 'violeta'
      case 2:
        return 'naranja'
        case 3:
          return 'verde'
    }
  }
  indicarNumero(botonIndicado) {
    switch(botonIndicado){
      case 'celeste':
        return 0
      case 'violeta':
        return 1
      case 'naranja':
        return 2
      case 'verde':
        return 3
    }
  }
  iluminarSecuencia() {
    for(let cont = 0; cont < this.nivel; cont++) {
      const color = this.indicarColor(this.secuencia[cont])
      //POR QUÉ CONST O LET? MIRAR CUADERNO
      setTimeout(() => this.iluminarColor(color, cont), 1000 * cont)
      //Para que al volver de la funcion iluminar color no lo hagan todos a la vez, entonces
      //Los organizamos con 1 segundo de diferencia, una en relacion al nivel
      //para que queden organizados
    }
  }
  iluminarColor(color, time){
    if(time == this.nivel - 1)
      this.agregarEventosClick()
    //Agrega los listeners cuando ya haya sido la ultima iluminacion
    this.botonesColores[color].classList.add('light')
    //Esto, usando el string color es mas corto que poner los 4 cambios posibles
    //recordar que el nombre ya tiene "verde" o respectivamente el color,
    //entonces solo le agregamos light
    setTimeout(function(){
      juego.apagarLuces(color)
      juego.contadorIluminar++
      //Usamos juego, porque setTimeout o la funcion ubica this en window
    }, 350)
  }
  agregarEventosClick() {
    this.botonesColores.celeste.addEventListener('click', this.colorClickeado)
    this.botonesColores.violeta.addEventListener('click', this.colorClickeado)
    this.botonesColores.naranja.addEventListener('click', this.colorClickeado)
    this.botonesColores.verde.addEventListener('click', this.colorClickeado)
    //Se pueden agregar addEventListeners aunque no sean botones
  }
  colorClickeado(e) {
    var colorElegido = e.target.dataset.color
    const numColorElegido = this.indicarNumero(colorElegido)
    this.iluminarColor(colorElegido)
    if(numColorElegido == this.secuencia[this.subnivel]) {
      this.subnivel++
      if(this.subnivel == this.nivel){
        if(this.nivel == ULTIMO_LVL){
          //WIN!
          swal('EL JUEGUITO PIRATA DE SANTI', 'VICTORIA', 'success')
          .then(()=>{
            this.eliminarListeners()
            this.inicializar()
          })
        } else {
          this.nivel++
          this.subnivel = 0
          this.eliminarListeners()
          setTimeout(()=>this.startLevel(), 1000)
          //Esperar unos segundos para terminar
        }
      }
    } else {
      //DERROTA
      swal('EL JUEGUITO PIRATA DE SANTI', 'DERROTA', 'error')
      .then(() =>{
        this.eliminarListeners()
        this.inicializar()
      })
    }
  }
  eliminarListeners(){
    this.botonesColores.celeste.removeEventListener('click', this.colorClickeado)
    this.botonesColores.violeta.removeEventListener('click', this.colorClickeado)
    this.botonesColores.naranja.removeEventListener('click', this.colorClickeado)
    this.botonesColores.verde.removeEventListener('click', this.colorClickeado)
  }
}

function empezarJuego() {
  window.juego = new Juego
  /* Ponemos la variable en window porque es global, 
   * lo principal del programa y poder ver sus atributos (mas facilmente)
   */
}