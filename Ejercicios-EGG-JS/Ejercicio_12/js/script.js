
let tipoDatos = (argumento) => typeof argumento; 

console.log(tipoDatos(8));
console.log(tipoDatos("Hola Mundo"));
console.log(tipoDatos(['Hola','Mundo']));
console.log(tipoDatos({clave:'Valor',clave2:'Valor2'}));
console.log(tipoDatos(true));