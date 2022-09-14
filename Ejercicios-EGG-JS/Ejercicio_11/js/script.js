const RESULTADO = document.querySelector("#resultado");

// function buscarPalabraMasLarga(cadena) {
//     var palabras = cadena.replace(",", " ").split(" ");
//     return palabras.reduce((palabra_mas_grande, palabra) => 
//     palabra.length > palabra_mas_grande.length ? palabra : palabra_mas_grande);
// }
function limpiar() {
    document.querySelector("#cadena").value = "";
    RESULTADO.innerHTML = "AQUI SE MOSTRARA LA PALABRA MAS LARGA DE LA FRASE"; 
    
}

let buscarPalabraMasLarga = (cadena) => RESULTADO.innerHTML =  cadena.replace(",", " ").split(" ")
.reduce((palabraMasLarga, palabra) => palabra.length > palabraMasLarga.length ? palabra : palabraMasLarga); 