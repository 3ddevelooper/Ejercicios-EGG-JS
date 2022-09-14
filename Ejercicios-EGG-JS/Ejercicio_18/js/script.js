const RESULTADO = document.querySelector("#datos");
const BOTON = document.getElementById("btnenviar")

var valores = [true, 5, false, "hola", "adios", 2];

let mayorTexto = () =>(valores[3].length>valores[4] ? valores[3]: valores[4]);
let booleanoTrue = () => (valores[0] || valores[2] ? true : false);
let booleanoFalse = () => (valores[0] && valores[2] ? true : false);
let suma = () => (valores[1]+valores[5]);
let resta = () => (valores[1]-valores[5]);
let division = () => (valores[1]/valores[5]);
let multiplicacion = () => (valores[1]*valores[5]);
let modulo = () =>(valores[1]%valores[5])

// function mayorTexto(){
//     let dato = "";
//     valores.forEach(elemento => {
//         if(typeof elemento === "string"){
//             if(elemento.length>dato.length){
//                 dato =  elemento
//             }
//         }
//     });
//     return dato
// }

// function busarBooleano(){
//     let dato = "";
//     let dato2 = "";
//     valores.forEach(elemento => {
//         if(typeof elemento === "boolean"){
//             if(dato === ""){
//                 dato = elemento;
//             }else{
//                 dato2 = elemento;
//             }
//         }
//     });
//     return [dato || dato2, dato && dato2]
// }


let mostrarDatos = () => (BOTON.disabled=true, RESULTADO.innerHTML = `DATOS<br><br>El Array original es: [${valores}]<br><br>
a) Determinar cual de los dos elementos de texto es mayor<br><br>La cadena mas larga es: ${mayorTexto()}<br><br>
b) Determinar los operadores necesarios para obtener un resultado true y 
otro resultado false<br><br>${booleanoTrue()}<br>${booleanoFalse()}<br><br>
c) Determinar el resultado de las cinco operaciones<br><br>
El Resultado de la Suma es: ${suma()}<br>
El Resultado de la Resta es: ${resta()}<br>
El Resultado de la Division es: ${division()}<br>
El Resultado de la Multiplicacion es: ${multiplicacion()}<br>
El Resultado del Modulo es: ${modulo()}<br>`);

