
const RESULTADO = document.querySelector("#datos");
const BOTON = document.getElementById("btnenviar")

var arrayA=  new Array(50);
var arrayB =new Array(20);
let cont=0;


while(cont<arrayA.length ){
    arrayA[cont]=Math.floor(100 * Math.random());
    cont++;
}

let ordenarArray = () => (arrayA.sort(function(a,b) {return a-b;}))
let obtenerDiezValores = () => (arrayA.slice(0,10))

function unirArrays (){
    for(let i = 0; i< arrayB.length; i++){
        if (i<10){
            arrayB[i]=arrayA[i];
        }else{
            arrayB[i]=0.5;
        }
    }
    return arrayB;
}

let mostrarDatos = () => (BOTON.disabled=true, RESULTADO.innerHTML = `ARRAYS<br><br>
El Array A con 50 números aleatorios es: <br><br>[${arrayA}]
<h3>----------------------------------------------------------------------------------------</h3>
El Array A Ordenado de Menor a Mayor es: <br><br>[${ordenarArray()}]
<h3>----------------------------------------------------------------------------------------</h3>
Los primeros 10 numeros del arrayA son :<br><br>[${obtenerDiezValores()}]
<h3>----------------------------------------------------------------------------------------</h3>
El Array B con 20 números (10 primeros valores del Array A + 10 valores 0.5) es: <br><br>[${unirArrays()}]
<h3>----------------------------------------------------------------------------------------</h3>`);