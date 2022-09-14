const RESULTADO = document.querySelector("#resultado");

function espaciar(texto) {
    // let cadenaEspaciada = "";
    
    // for (var i = 0; i < texto.length; i++) {
    //     texto.substring(i,i+1) !== " " ?  
    //     cadenaEspaciada += texto.substring(i, i + 1) + " " : cadenaEspaciada += texto.substring(i, i) + "";
    
    // }

    let cadenaEspaciada = texto.replace(/\s+/g, '').split('').join('  ');
    
    RESULTADO.innerHTML = cadenaEspaciada .toUpperCase();   
}


function limpiar() {
    document.querySelector("#cadena").value = "";
    RESULTADO.innerHTML = "AQUI SE MOSTRARA LA FRASE CON ESPACIOS"; 
    
}