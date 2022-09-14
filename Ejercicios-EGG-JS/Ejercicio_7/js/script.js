
let limite = parseInt(prompt("Ingrese hasta que numero se va a sumar",0));
let sum = 0;
let num = 0;
while (limite>sum) {
    sum = sum+num;
    num = parseInt(prompt("Ingrese un numero"));
}
alert(`La Suma de los numeros introducidos es: ${sum} y el limite es: ${limite}`);