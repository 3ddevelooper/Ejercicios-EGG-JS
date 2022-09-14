const BTNMARCAR = document.getElementById("btnmarcar")
const BTNDESMARCAR = document.getElementById("btndesmarcar")
let parrafo = document.getElementById("parrafo")
let texto = parrafo.innerText;
let textovalue = texto.split(/[\s,\.,\"]+/);

BTNDESMARCAR.disabled=true;

// function marcarTexto() {
//   textovalue.forEach((palabra) => {
//     if (palabra.length > 8) {
//       texto = texto.split(palabra).join(`<mark>${palabra}</mark>`);
//     }
//   });
//   BTNMARCAR.disabled=true;
//   BTNDESMARCAR.disabled=false;
//   parrafo.innerHTML = texto;
// }
let marcarTexto = () => (
  textovalue.forEach((palabra) => {if (palabra.length > 8) {texto = texto.split(palabra).join(`<mark>${palabra}</mark>`);}}),
  BTNMARCAR.disabled=true,BTNDESMARCAR.disabled=false,parrafo.innerHTML = texto);
  
let desmarcarTexto = () => (BTNMARCAR.disabled=false,BTNDESMARCAR.disabled=true,parrafo.innerHTML = parrafo.innerText);