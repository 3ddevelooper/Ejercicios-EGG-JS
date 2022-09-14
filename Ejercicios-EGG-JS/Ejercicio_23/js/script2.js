// Obtener referencia a botones
// Recuerda: el punto . indica clases
const botones = document.querySelectorAll(".botones");
// Definir función y evitar definirla de manera anónima

let contadorSoyUnBoton = 0;

const cuandoSeHaceClick = function (evento) {
  // Recuerda, this es el elemento
  if (contadorSoyUnBoton % 2 == 0) {
    alert(
      "El cuadro Soy un boton ahora es de fondo rojo y borde azul ",
      this.innerText
    );
    this.style.borderColor = "blue";
    this.style.width = "100px";
    this.style.height = "100px";
    this.style.backgroundColor = "red";
    this.style.color = "white";
    this.innerText = "Soy un botón Apretado";
  } else {
    alert(
      "El cuadro ahora Soy un boton ahora es de fondo naranja y borde negro ",
      this.innerText
    );
    this.style.borderColor = "black";
    this.style.height = "50px";
    this.style.backgroundColor = "orange";
    this.style.color = "white";
    this.innerText = "Soy un botón";
  }
  contadorSoyUnBoton += 1;
};
// botones es un arreglo así que lo recorremos
botones.forEach((boton) => {
  //Agregar listener

  boton.addEventListener("click", cuandoSeHaceClick);
});
/*------------------------------*/
/*------------------------------*/

let contadorOnOf = 0;

function FbotonOn() {
  var uno = document.getElementById("botonOn");
  if (uno.innerHTML == "off") {
    contadorOnOf % 2 == 0;
    uno.style.backgroundColor = "red";
    uno.innerHTML = "on";
    alert("On es rojo");
  } else {
    uno.innerHTML = "off";
    contadorOnOf % 2 != 0;
    uno.style.backgroundColor = "grey";
    alert("Off es gris");
  }
}

/*------------------------------*/
/*------------------------------*/

(function () {
  let boton = document.getElementById("boton");
  boton.addEventListener("click", myf1);
  boton.addEventListener("mouseover", function () {
    boton.textContent = "¡Hola!";
  });
  boton.addEventListener("mouseout", function () {
    boton.textContent = "No te vayas";
  });

  let contador = 0;

  function myf1() {
    if (contador % 2 == 0) {
      boton.style.backgroundColor = "red";
      alert("red");
    } else {
      boton.style.backgroundColor = "blue";
      alert("blue");
    }
    contador += 1;
  }
})();
