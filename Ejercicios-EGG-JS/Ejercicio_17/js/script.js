const RESULTADO = document.querySelector("#datos");
const BOTON = document.getElementById("btnenviar")

let array1 = new Array(8);
let cont = 0;

while (cont<array1.length) {
  array1[cont]=Math.floor(100 * Math.random());
  cont++;
}

function eliminar(){
    array1.splice(array1.length-2, array1.length);
    return array1
}
  
let mostrarDatos = () => (BOTON.disabled=true, RESULTADO.innerHTML = `ARRAYS<br><br>El Array original es: [${array1}]<br>
El Array con los elementos elimando es: [${eliminar()}]`);