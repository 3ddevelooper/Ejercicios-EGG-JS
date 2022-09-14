
const RESULTADO = document.querySelector("#datos");
const ISBN = document.querySelector("#isbn");
const TITULO = document.querySelector("#titulo");
const AUTOR = document.querySelector("#autor");
const PAGINAS = document.querySelector("#npaginas");
const BOTON = document.querySelector("#btnenviar")

BOTON.disabled = true;



class libro{
    constructor(isbn,titulo,autor,numeroPaginas){
    this.isbn=isbn;
    this.titulo=titulo;
    this.autor=autor;
    this.numeroPaginas=numeroPaginas;
}
toString(){
   return `ISBN: ${this.isbn}<br>Titulo: ${this.titulo}<br>Autor: ${this.autor}<br>Cantidad de Páginas: ${this.numeroPaginas}`;

 }

}


let validarInput = () => (ISBN.value === "" || TITULO.value === "" || AUTOR.value === ""  || PAGINAS.value === ""  
? BOTON.disabled = true : BOTON.disabled = false);
let cargarLibro = () => new libro(ISBN.value, TITULO.value, AUTOR.value, PAGINAS.value);
let mostrarDatos = () => (RESULTADO.innerHTML = `SE GUARDO CON EXITO EL SIGUIENTE LIBRO<br><br>${cargarLibro().toString()}`);
let limpiar = () => (BOTON.disabled=true,RESULTADO.innerHTML = "AQUI SE MOSTRARA LOS DATOS INGRESADOS");