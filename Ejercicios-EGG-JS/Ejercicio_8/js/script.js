
let prom = 0;
let acum = 0;
let sum = 0;
let num2 = 0;
let num = parseInt(prompt("Ingrese un numero"));
let min = num;
let max = num;

do {
  num2 = num;
  if (num !== 0) {
    sum += num2;
  }
  num = parseInt(prompt("Ingrese un numero"));

  if (num !== 0) {
    if (num > max) {
      max = num;
    }
    if (num < min) {
      min = num;
    }
  }
  acum++;
} while (num > 0);

prom = sum / acum;
alert(`Ingreso ${num} fin de la posibilidad de ingresar numero`);

document.write(`<h2>El Mayor numero ingresado fue: ${max}<br>
El menor numero ingresado fue: ${min}<br>
El promedio de los numeros ingresado es: ${prom}</h2>`)