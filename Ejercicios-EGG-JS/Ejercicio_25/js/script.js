
const DATOS  = document.getElementById("form1");
const MOSTRAR = document.getElementById("mostrar");
const BTNRESET = document.getElementById('resets');

let getFormValores = (e) =>(e.preventDefault(), MOSTRAR.innerHTML = `${DATOS.nombre.value} ${DATOS.apellido.value}`);
let limpiar = () => ( MOSTRAR.innerHTML = "AQUI SE MOSTRARA LOS VALORES DEL FORMULARIO");
let getFormValor = () =>( MOSTRAR.innerHTML = `${DATOS.nombre.value} ${DATOS.apellido.value}`);

BTNRESET.addEventListener('click',limpiar);
DATOS.addEventListener('keyup', getFormValor)

