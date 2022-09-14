const RESULTADO = document.querySelector("#resultado");

function limpiar() {
    document.querySelector("#cadena").value = "";
    RESULTADO.innerHTML = "AQUI SE MOSTRARA LA FRASE CON ESPACIOS"; 
    
}

let invertir = (cadena) => RESULTADO.innerHTML = cadena.split('').reverse().join(''); 