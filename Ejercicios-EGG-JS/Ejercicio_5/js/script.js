
const RESULTADO = document.querySelector("#resultado");
let numero1 = document.querySelector("#numero1");
let numero2 = document.querySelector("#numero2");
const OPERACION = document.querySelector("#operacion");


function limpiar() {
  OPERACION.value = "";
  numero1.value = "";
  numero2.value = "";
}

function calculo() {
  RESULTADO.classList.add('estilo')

  switch (OPERACION.value.toUpperCase()) {
    case "S":
      
      RESULTADO.innerHTML =
        `El Resultado de la SUMA es: ${(Number(numero1.value) + Number(numero2.value))}`;
        
      break;
    case "R":
      RESULTADO.innerHTML =
        `El Resultado de la RESTA es: ${(Number(numero1.value) - Number(numero2.value))}`;
      break;
    case "D":
      RESULTADO.innerHTML =
        `El Resultado de la DIVISION es: ${(Number(numero1.value) / Number(numero2.value))}`;
      break;
    case "M":
      RESULTADO.innerHTML =
        `El Resultado de la MULTIPLICACION es: ${(Number(numero1.value) * Number(numero2.value))}`;
      break;
    default:
      RESULTADO.innerHTML =
        `La letra ingresada no pertence a una operacion matematica`;
      break;
  }
}
