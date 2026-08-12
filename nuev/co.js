const piedra = document.querySelector(".piedra");
const papel = document.querySelector(".papel");
const tijera = document.querySelector(".tijera");
const resultado = document.querySelector(".result");
const reset=document.querySelector(".reset");
const messageArea = document.querySelector(".message-area");
let para = false;

function crearMensaje(texto) {
  const mensaje = document.createElement("p");
  mensaje.textContent = texto;
  mensaje.style.color = "rgba(207, 207, 243, 0.18)";
  messageArea.appendChild(mensaje);
}

function rival() {
  return Math.floor(Math.random() * 3) + 1;
}

piedra.addEventListener("click", event => {
  const random = rival();
  const jugador = event.currentTarget;
  if (jugador.classList.contains("piedra") && !para) {
    resultado.textContent = "Has elegido piedra";
    if (random == 1) {
      crearMensaje("Tu rival eligio piedra✊ , EMPATE");
    } else if (random == 2) {
      crearMensaje("Tu rival eligio papel✋, PERDISTE");
    } else {
      crearMensaje("Tu rival eligio tijera✌️, GANASTE");
    }
    para = true;
     reset.style.display="block";
  }
});

papel.addEventListener("click", event => {
  const random = rival();
  const jugador = event.currentTarget;
  if (jugador.classList.contains("papel") && !para) {
    resultado.textContent = "Has elegido papel";
    if (random == 1) {
      crearMensaje("Tu rival eligio piedra✊, GANASTE");
    } else if (random == 2) {
      crearMensaje("Tu rival eligio papel✋, EMPATE");
    } else {
      crearMensaje("Tu rival eligio tijera✌️, PERDISTE");
    }
    para = true;
     reset.style.display="block";
  }
});

tijera.addEventListener("click", event => {
  const random = rival();
  const jugador = event.currentTarget;
  if (jugador.classList.contains("tijera") && !para) {
    resultado.textContent = "Has elegido tijera";
    if (random == 1) {
      crearMensaje("Tu rival eligio piedra✊, PERDISTE");
    } else if (random == 2) {
      crearMensaje("Tu rival eligio papel✋, GANASTE");
    } else {
      crearMensaje("Tu rival eligio tijera✌️, EMPATE");
    }
    para = true;
     reset.style.display="block";
  }
});
function reinicio(){
  location.reload();
 
}
reset.addEventListener("click", reinicio);
