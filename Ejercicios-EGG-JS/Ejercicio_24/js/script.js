const RESULTADO = document.getElementById("resultado");
const DIAMETRO = document.getElementById("diametro");

let limpiar = () => (RESULTADO.innerHTML = "AQUI SE MOSTRARA LOS RESULTADOS");
let calcular = (e) => (e.preventDefault(),
RESULTADO.innerHTML =`El Radio es: ${(Number(DIAMETRO.value)/2).toFixed(2)}`);

