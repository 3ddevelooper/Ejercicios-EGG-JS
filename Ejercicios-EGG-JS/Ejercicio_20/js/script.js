
const RESULTADO = document.querySelector("#datos");
const BOTON = document.getElementById("btnenviar")

let matriz = [[3], [6], [9], [12], [15]]

//document.write(`[[3], [6], [9], [12], [15]]`);

matriz.splice(0,1);
matriz.splice(4,0,"18");

let mostrarDatos = () => (BOTON.disabled=true, RESULTADO.innerHTML = `El Array modificado es:<br><br>[${matriz}]`);
