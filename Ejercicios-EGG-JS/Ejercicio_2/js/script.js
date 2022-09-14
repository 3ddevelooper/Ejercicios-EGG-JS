const RESULTADO = document.getElementById("resultado");
const RADIO = document.getElementById("radio");

//var radio = prompt("INGRESE EL VALOR DEL RADIO");
// const AREA = Math.PI * Math.pow(RADIO.value, 2);
// const PERIMETRO = 2 * Math.PI * RADIO.value;

function res() {
  const AREA = Math.PI * Math.pow(RADIO.value, 2);
  const PERIMETRO = 2 * Math.PI * RADIO.value;
  RESULTADO.innerHTML =
    "El Area es: " +
    AREA.toFixed(2) +
    "<br>" +
    "El Perimetro es: " +
    PERIMETRO.toFixed(2);
}
