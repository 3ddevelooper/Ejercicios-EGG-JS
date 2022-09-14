
const RESULTADO = document.querySelector("#datos");
const RADIO = document.querySelector("#radio");
const BOTON = document.querySelector("#btnenviar")
BOTON.disabled = true;


class circulo{
    constructor(radio){
    this.radio=radio;
    
}
 area() {
    return Math.PI * Math.pow(this.radio, 2);
    
  }

  perimetro(){
    return 2 * Math.PI * this.radio;
  }

}


function enviarConEnter(e){
     if (e.keyCode===13){
        e.preventDefault()
        mostrarDatos();
     }
}


let validarInput = () => (RADIO.value === "" ? BOTON.disabled = true : BOTON.disabled = false);
let crearCirculo = () => new circulo(parseInt(RADIO.value));
let mostrarDatos = () => (RESULTADO.innerHTML = `EL RESULTADO<br><br>El Area es: ${(crearCirculo().area()).toFixed(2)}<br>El Perimetro es: ${(crearCirculo().perimetro()).toFixed(2)}`);
let limpiar = () => (BOTON.disabled=true,RESULTADO.innerHTML = "AQUI SE MOSTRARA LOS RESULTADOS");
