const botones = document.querySelectorAll(".boton");
const input = document.querySelector(".valor");
const carrito=document.querySelector(".carrito_footer");
const ventana=document.querySelectorAll(".ventana")[0];
const ventanados=document.querySelector(".ventana2")
const mas=document.querySelector(".signo_mas")
const salir=document.querySelector(".ventana__cerrar");
const salirVent=document.querySelector(".ventana2__cerrar");
const compra=document.querySelector(".compra");
const tex=document.querySelector(".text_footer");
const iniciar=document.querySelector(".iniciar");
const imgpr=document.querySelector(".imagen_primerafila")
const miniaturas=document.querySelectorAll(".miniaturas");
function vent(){
ventana.style.display="flex";
}
function ventanaExplorar(){
    ventanados.style.display="block";
}
 function limite(){
        let texto=document.createElement("p");
        document.body.appendChild(texto);
    }
function cerrar(){
    ventana.style.display="none";
    input.value=0;
}
function finalizar(){
  ventanados.style.display="none";
}
function calculo(event) {
const actual=Number(input.value);
  if (event.target.innerText.trim() == "+") {
   input.value = actual + 1;
  } else if (event.target.innerText.trim() == "-") {
  input.value=Math.max(1,actual-1);
  }
}
botones.forEach(boton => {
  boton.addEventListener("click", calculo);
});
function reinicio(){
location.reload();
}
miniaturas.forEach(miniatura=>{
  miniatura.addEventListener("click", ()=>{
    const principal = imgpr.src;
    imgpr.src = miniatura.src;
    miniatura.src = principal;
  })
})
carrito.addEventListener("click", vent);
salir.addEventListener("click", cerrar);
salirVent.addEventListener("click", finalizar);
mas.addEventListener("click", ventanaExplorar);
compra.addEventListener("click", vent);
ventana.classList.add("activo");
tex.addEventListener("click", reinicio);
iniciar.addEventListener("click", reinicio);






