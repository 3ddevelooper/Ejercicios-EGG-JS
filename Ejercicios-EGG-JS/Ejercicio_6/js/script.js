const RESULTADO = document.querySelector("#resultado");
const NUMERO = document.querySelector("#numero");



function limpiar() {
  NUMERO.value = "";
}

function calculo() {
 ((Number(NUMERO.value)!==0) && (Number(NUMERO.value)%2===0))?RESULTADO.innerHTML = `El Número ${NUMERO.value} es PAR`
 : RESULTADO.innerHTML = `El Número ${NUMERO.value} es IMPAR`
  Number(NUMERO.value)===0?RESULTADO.innerHTML = `El Número ${NUMERO.value} no es PAR ni IMPAR`:null
}
