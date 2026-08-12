let buscador=document.querySelector(".buscador");
let enviar=document.querySelector(".enviar");
let sugerencia=document.querySelector(".sugerencia");

function buscar(){
const texto= String(buscador.value);
    const contenido=["youtube", "google", "facebook"];
if(contenido.includes(texto)){
sugerencia.textContent="este es el resultado de tu busqueda:";
document.body.appendChild(sugerencia);
}
else{
    sugerencia.textContent="no se encontro el resultdo de tu busqueda";
    document.body.appendChild(sugerencia);
}
}
enviar.addEventListener("click", buscar);
