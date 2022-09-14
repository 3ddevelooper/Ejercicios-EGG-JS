let character = prompt("INGRESE 'S' O 'N'", "S O N").toUpperCase();
alert(character === "S" 
|| character === "N"
?`EL CARACTER ${character} ES CORRECTO`
:`EL CARACTER ${character} ES INCORRECTO`);