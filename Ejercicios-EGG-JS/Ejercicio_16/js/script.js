const RESULTADO = document.querySelector("#datos");

let array1 = new Array(5);
let array2 = new Array(5);
let cont = 0;

while (cont<array1.length) {
  array1[cont]=Math.floor(100 * Math.random());
  array2[cont]=Math.floor(100 * Math.random());
  cont++;
}

let mostrarDatos = () => (RESULTADO.innerHTML = `ARRAYS<br><br>El Array 1 es: [${array1}]<br>El Array 2 es: [${array2}]`);
