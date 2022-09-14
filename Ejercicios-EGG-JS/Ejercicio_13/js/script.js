
const RESULTADO = document.querySelector("#datos");
const NOMBRE = document.querySelector("#nombre");
const EDAD = document.querySelector("#edad");
const SEXO = document.querySelector("#sexo");
const PESO = document.querySelector("#peso");
const ALTURA = document.querySelector("#altura");
const BOTON = document.getElementById("btnenviar")
BOTON.disabled = true;
class persona {
  constructor(nombre, edad, sexo, peso, altura) {
    this.nombre = nombre;
    this.edad = edad;
    this.sexo = this.sexos(sexo);
    this.peso = peso;
    this.altura = altura;
    // this.info = `Nombre: ${this.nombre}<br>Edad: ${this.edad} años<br>Sexo: ${this.sexo}<br>Peso: ${this.peso} kg<br>Altura: ${this.altura}`;
  }
  toString(){
    return `Nombre: ${this.nombre}<br>Edad: ${this.edad} años<br>Sexo: ${this.sexo}<br>Peso: ${this.peso} kg<br>Altura: ${this.altura}`;
  }

  sexos(sex) {
    switch (sex.toUpperCase()) {
      case "M": return "Masculino"; 
      case "F": return "Femenino";
      case "O": return "Otro";
    }
  }

  
}

function validarInput() {
  if (NOMBRE.value === "" || EDAD.value === ""|| 
      SEXO.value === "nulo"|| PESO.value === "" ||ALTURA.value === "") {
    BOTON.disabled=true
  } else {
    BOTON.disabled=false;
  }
}


// function validarInput() {
//   if (NOMBRE.value === "") {
//     alert("El Nombre no puede ser vacio");
//     NOMBRE.focus();
//   } else {
//     if (EDAD.value === "") {
//       alert("La Edad no puede ser vacio");
//       EDAD.focus();
//     } else {
//       if (SEXO.value === "nulo") {
//         alert("Debe selecionar una opcion en Sexo");
//         SEXO.focus();
//       } else {
//         if(PESO.value === ""){
//           alert("El Peso no puede ser vacio");
//           PESO.focus();
//         }else{
//           if(ALTURA.value === ""){
//             alert("La Altura no puede ser vacio");
//             ALTURA.focus();
//           }else{
//             mostrarDatos();
//           }
//         }
//       }
//     }
//   }
// }

let crearPersona = () => new persona(NOMBRE.value, EDAD.value, SEXO.value, PESO.value, ALTURA.value);
let mostrarDatos = () => (RESULTADO.innerHTML = crearPersona().toString());
let limpiar = () => (BOTON.disabled=true,RESULTADO.innerHTML = "AQUI SE MOSTRARA LOS DATOS INGRESADOS");
